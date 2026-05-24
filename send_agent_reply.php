<?php
// ==========================================================
// Nexlifly Live Chat API - Send Agent Reply to WhatsApp
// ==========================================================

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// 1. Read POST payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['phone']) || !isset($data['message']) || empty(trim($data['message']))) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing phone or message body.'
    ]);
    exit;
}

$phone = trim($data['phone']);
$message = trim($data['message']);

// 2. Webhook / Meta Credentials (Matched with whatsapp_webhook.php)
$phone_number_id = "1104794059387932";
$access_token = "EAAZCDzwNkUwcBRrqyVi3wbYatVQ8OQjhuXyL17lZByd1yoEVkmgORdW6AIKZCc0HVbCRK0tSF8XW2i7pBu4P4sKUOJVfDC0w9uHkqp1y2OKtc4i9buUUcGdhC8jrZBtr7miPq0xvu60EFXTnfibFP90c4FR3XtjlYbpKdfVgiW8NeGtPkbDr74WAjpdI3gZDZD";

// 3. Send message via cURL to Meta Cloud API
$url = "https://graph.facebook.com/v20.0/{$phone_number_id}/messages";
$payload = [
    'messaging_product' => 'whatsapp',
    'to' => $phone,
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
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$meta_response = json_decode($response, true);

// 4. Log the message inside chats/{phone}.json as an 'agent' message
if ($http_code === 200 && isset($meta_response['messages'][0]['id'])) {
    $message_id = $meta_response['messages'][0]['id'];
    
    // Extract customer's current name from their logs
    $customer_name = "Customer";
    $dir = __DIR__ . '/chats';
    $file = "{$dir}/{$phone}.json";
    
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
        if ($existing && isset($existing['name'])) {
            $customer_name = $existing['name'];
        }
    }
    
    // Append to JSON log
    log_agent_chat_message($phone, $customer_name, 'agent', $message, $message_id);
    
    echo json_encode([
        'status' => 'success',
        'message_id' => $message_id,
        'message' => 'Message delivered and logged.'
    ]);
} else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to deliver message via Meta API.',
        'meta_raw' => $meta_response
    ]);
}

// ==========================================
// HELPER FUNCTION: APPEND TO CHAT LOGS
// ==========================================
function log_agent_chat_message($phone, $name, $sender, $text, $msg_id) {
    $dir = __DIR__ . '/chats';
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
    $file = "{$dir}/{$phone}.json";
    
    $chat = [
        'phone' => $phone,
        'name' => $name,
        'last_updated' => time(),
        'unread' => false,
        'messages' => []
    ];
    
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
        if (is_array($existing)) {
            $chat = array_merge($chat, $existing);
            $chat['last_updated'] = time();
            $chat['unread'] = false; // Sending a reply clears unread status!
        }
    }
    
    $chat['messages'][] = [
        'sender' => $sender,
        'text' => $text,
        'timestamp' => time(),
        'message_id' => $msg_id
    ];
    
    file_put_contents($file, json_encode($chat, JSON_PRETTY_PRINT));
}
?>
