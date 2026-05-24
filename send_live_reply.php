<?php
session_start();

// Enable standard JSON headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// ==========================================
// CONFIGURATION & SECURITY CHECK
// ==========================================
$is_logged_in = isset($_SESSION['inbox_logged_in']) && $_SESSION['inbox_logged_in'] === true;
if (!$is_logged_in) {
    echo json_encode(["status" => "error", "message" => "Unauthorized access."]);
    exit;
}

$access_token = "EAAZCDzwNkUwcBRrqyVi3wbYatVQ8OQjhuXyL17lZByd1yoEVkmgORdW6AIKZCc0HVbCRK0tSF8XW2i7pBu4P4sKUOJVfDC0w9uHkqp1y2OKtc4i9buUUcGdhC8jrZBtr7miPq0xvu60EFXTnfibFP90c4FR3XtjlYbpKdfVgiW8NeGtPkbDr74WAjpdI3gZDZD";
$phone_number_id = "1104794059387932";
$paused_file = 'paused_chats.txt';

// ==========================================
// PROCESS POST REQUEST
// ==========================================
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the incoming JSON payload
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (isset($data['phone']) && isset($data['message'])) {
        $phone = preg_replace('/[^0-9]/', '', $data['phone']);
        $message = trim($data['message']);

        if (empty($phone) || empty($message)) {
            echo json_encode(["status" => "error", "message" => "Phone number and message cannot be empty."]);
            exit;
        }

        // 1. Send message to WhatsApp via Meta Cloud API
        $response = send_whatsapp_message($phone, $message, $phone_number_id, $access_token);
        $res_data = json_decode($response, true);

        // Optional log for cPanel debugging
        file_put_contents('log.txt', "\n[LIVE CHAT REPLY TO +{$phone}] -> " . $response . "\n", FILE_APPEND);

        if (isset($res_data['error'])) {
            echo json_encode([
                "status" => "error", 
                "message" => "Meta API Error: " . $res_data['error']['message']
            ]);
            exit;
        }

        // 2. Append agent message to the customer's JSON chat file
        log_chat_message($phone, 'agent', $message);

        // 3. Auto-pause the bot for this number (add to paused_chats.txt)
        $paused_numbers = file_exists($paused_file) ? file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
        if (!in_array($phone, $paused_numbers)) {
            $paused_numbers[] = $phone;
            file_put_contents($paused_file, implode("\n", array_unique($paused_numbers)));
        }

        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
        exit;
    }
}

echo json_encode(["status" => "error", "message" => "Invalid request method."]);
exit;

// ==========================================
// HELPER FUNCTION: SEND WHATSAPP MESSAGE (cURL)
// ==========================================
function send_whatsapp_message($to, $message, $phone_number_id, $access_token) {
    $url = "https://graph.facebook.com/v20.0/{$phone_number_id}/messages";
    
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $to,
        'type' => 'text',
        'text' => [
            'body' => $message
        ]
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $access_token
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return $response;
}

// ==========================================
// HELPER FUNCTION: LOG CHAT MESSAGE (JSON)
// ==========================================
function log_chat_message($phone, $sender, $text) {
    $dir = 'chats';
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
    $file = "{$dir}/{$phone}.json";
    
    $chat = [
        'phone' => $phone,
        'name' => 'Customer',
        'last_updated' => time(),
        'unread' => false,
        'messages' => []
    ];
    
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
        if (is_array($existing)) {
            $chat = array_merge($chat, $existing);
            $chat['last_updated'] = time();
            $chat['unread'] = false; // Always read when agent replies
        }
    }
    
    $chat['messages'][] = [
        'sender' => $sender,
        'text' => $text,
        'timestamp' => time()
    ];
    
    file_put_contents($file, json_encode($chat, JSON_PRETTY_PRINT));
}
?>
