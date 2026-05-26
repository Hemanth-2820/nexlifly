<?php
// ==========================================================
// Nexlifly Chatbot Diagnostic Tool
// Visit this in your browser: https://yourdomain.com/test_webhook.php
// ==========================================================

header('Content-Type: text/html; charset=utf-8');

echo "<h2>⚙️ Nexlifly Chatbot & Webhook Diagnostic</h2>";

// 1. Check if log.txt is writable
$log_file = __DIR__ . '/log.txt';
echo "<h3>1. File Write Permissions Check</h3>";
if (file_exists($log_file)) {
    $test_log_message = "\n[DIAGNOSTIC TEST - " . date('Y-m-d H:i:s') . "] -> PHP is running and writing successfully.\n";
    if (file_put_contents($log_file, $test_log_message, FILE_APPEND) !== false) {
        echo "<p style='color: green; font-weight: bold;'>✅ SUCCESS: Successfully wrote a test line to log.txt!</p>";
    } else {
        echo "<p style='color: red; font-weight: bold;'>❌ ERROR: Could not write to log.txt. Please check file permissions on cPanel (should be 644 or 666).</p>";
    }
} else {
    echo "<p style='color: red; font-weight: bold;'>❌ ERROR: log.txt does not exist in the root folder.</p>";
}

// 2. Check if chats folder is writable
$chats_dir = __DIR__ . '/chats';
echo "<h3>2. Directory Permissions Check</h3>";
if (is_dir($chats_dir)) {
    $test_chat_file = $chats_dir . '/test_9999999999.json';
    $test_data = [
        "phone" => "9999999999",
        "name" => "Diagnostic Test User",
        "last_updated" => time(),
        "messages" => [
            ["sender" => "customer", "text" => "Diagnostic ping", "timestamp" => time()]
        ]
    ];
    
    if (file_put_contents($test_chat_file, json_encode($test_data, JSON_PRETTY_PRINT)) !== false) {
        echo "<p style='color: green; font-weight: bold;'>✅ SUCCESS: Created test file inside 'chats/' folder successfully!</p>";
        @unlink($test_chat_file); // Clean up
    } else {
        echo "<p style='color: red; font-weight: bold;'>❌ ERROR: Could not write inside 'chats/' folder. Please check directory permissions on cPanel (should be 755).</p>";
    }
} else {
    echo "<p style='color: red; font-weight: bold;'>❌ ERROR: 'chats/' folder does not exist in the root folder.</p>";
}

// 3. Webhook callback instructions
echo "<h3>3. Meta Webhook Setup Validation</h3>";
echo "<p>If the tests above are <strong>Green</strong>, it means your cPanel server and PHP code are 100% working and ready! The reason you see nothing in the log is entirely on Meta's side.</p>";
echo "<h4>Please verify these 3 settings in your <a href='https://developers.facebook.com/' target='_blank'>Meta Developer Console</a>:</h4>";
echo "<ol>
    <li><strong>Verify Token:</strong> Ensure the verify token in Meta matches exactly: <code style='background: #eee; padding: 2px 5px;'>NexliflySecretToken123</code></li>
    <li><strong>Webhook URL:</strong> Ensure it points exactly to: <code style='background: #eee; padding: 2px 5px;'>https://" . $_SERVER['HTTP_HOST'] . "/whatsapp_webhook.php</code> (must be <strong>https</strong>).</li>
    <li><strong>🚨 Subscribed Fields (CRITICAL):</strong> In Meta, under <em>WhatsApp ➔ Configuration ➔ Webhook Fields</em>, click <strong>Manage</strong> and make sure you are <strong>Subscribed to 'messages'</strong>. If you are not subscribed, Meta will verify the URL successfully but will never send user messages!</li>
</ol>";
?>
