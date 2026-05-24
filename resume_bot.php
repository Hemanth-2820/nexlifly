<?php
// ==========================================================
// Nexlifly Live Chat API - Resume Bot / Reactivate Bot
// ==========================================================

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Read POST payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['phone'])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing phone number.'
    ]);
    exit;
}

$phone = trim($data['phone']);
$paused_file = __DIR__ . '/paused_chats.txt';

if (file_exists($paused_file)) {
    // 1. Read all paused numbers
    $paused_numbers = file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    // 2. Remove the specific phone number if present
    if (($key = array_search($phone, $paused_numbers)) !== false) {
        unset($paused_numbers[$key]);
        file_put_contents($paused_file, implode("\n", $paused_numbers));
        
        // 3. Log a system message in the chat file noting that bot is resumed
        log_system_event($phone, "Bot replies reactivated. Human agent left chat.");
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Bot automation reactivated successfully.'
        ]);
        exit;
    }
}

echo json_encode([
    'status' => 'success',
    'message' => 'Bot was already active for this number.'
]);

// ==========================================
// HELPER FUNCTION: LOG SYSTEM EVENT
// ==========================================
function log_system_event($phone, $text) {
    $dir = __DIR__ . '/chats';
    $file = "{$dir}/{$phone}.json";
    
    if (file_exists($file)) {
        $chat = json_decode(file_get_contents($file), true);
        if (is_array($chat)) {
            $chat['last_updated'] = time();
            $chat['unread'] = false;
            
            $chat['messages'][] = [
                'sender' => 'bot', // Mark as bot/system message
                'text' => $text,
                'timestamp' => time()
            ];
            
            file_put_contents($file, json_encode($chat, JSON_PRETTY_PRINT));
        }
    }
}
?>
