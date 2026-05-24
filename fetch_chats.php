<?php
// ==========================================================
// Nexlifly Live Chat API - Fetch all chat histories
// ==========================================================

// Enable CORS so your local React app can request this on cPanel
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dir = __DIR__ . '/chats';
$paused_file = __DIR__ . '/paused_chats.txt';

// Read paused numbers (meaning they are in Live Chat mode)
$paused_numbers = [];
if (file_exists($paused_file)) {
    $paused_numbers = file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
}

$chats = [];

if (is_dir($dir)) {
    // Scan all JSON files in the chats folder
    $files = glob("{$dir}/*.json");
    foreach ($files as $file) {
        $content = file_get_contents($file);
        $chat_data = json_decode($content, true);
        
        if ($chat_data && isset($chat_data['phone'])) {
            $phone = $chat_data['phone'];
            
            // Inject dynamic status based on whether the bot is paused
            $chat_data['is_paused'] = in_array($phone, $paused_numbers);
            
            // Set simple active status tag for dashboard filtering
            $chat_data['status'] = $chat_data['is_paused'] ? 'live_chat' : 'bot';
            
            // Get the last message preview
            $last_message = "";
            $last_time = time();
            if (!empty($chat_data['messages'])) {
                $last_msg_obj = end($chat_data['messages']);
                $last_message = $last_msg_obj['text'] ?? '';
                $last_time = $last_msg_obj['timestamp'] ?? time();
            }
            
            $chat_data['last_message'] = $last_message;
            $chat_data['last_updated'] = $last_time;
            
            $chats[] = $chat_data;
        }
    }
}

// Sort chats so the one with the newest message is always first
usort($chats, function($a, $b) {
    return ($b['last_updated'] ?? 0) - ($a['last_updated'] ?? 0);
});

echo json_encode([
    'status' => 'success',
    'count' => count($chats),
    'chats' => $chats
], JSON_PRETTY_PRINT);
?>
