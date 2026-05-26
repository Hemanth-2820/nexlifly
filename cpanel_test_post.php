<?php
// ==========================================================
// Nexlifly Local POST Webhook Test Tool
// Visit this in your browser: https://nexlifly.in/cpanel_test_post.php
// ==========================================================

header('Content-Type: text/html; charset=utf-8');

echo "<h2>🧪 Nexlifly Chatbot End-to-End POST Test</h2>";

// Mock payload mimicking Meta's incoming WhatsApp message webhook
$payload = [
    "object" => "whatsapp_business_account",
    "entry" => [
        [
            "id" => "1104794059387932",
            "changes" => [
                [
                    "value" => [
                        "messaging_product" => "whatsapp",
                        "metadata" => [
                            "display_phone_number" => "15550293883",
                            "phone_number_id" => "1104794059387932"
                        ],
                        "contacts" => [
                            [
                                "profile" => [
                                    "name" => "Diagnostic Tester"
                                ],
                                "wa_id" => "917671031879"
                            ]
                        ],
                        "messages" => [
                            [
                                "from" => "917671031879",
                                "id" => "wamid.DiagnosticTestID1234567890",
                                "timestamp" => time(),
                                "text" => [
                                    "body" => "hello"
                                ],
                                "type" => "text"
                            ]
                        ]
                    ],
                    "field" => "messages"
                ]
            ]
        ]
    ]
];

$url = "https://" . $_SERVER['HTTP_HOST'] . "/whatsapp_webhook.php";

echo "<p>Sending simulated customer message <strong>'hello'</strong> from number <strong>917671031879</strong> to <code>{$url}</code>...</p>";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Ignore SSL verification to prevent loopback errors

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "<h3>1. Webhook HTTP Status Response</h3>";
if ($http_code === 200) {
    echo "<p style='color: green; font-weight: bold;'>✅ SUCCESS: Webhook returned HTTP Code 200 (OK)!</p>";
} else {
    echo "<p style='color: red; font-weight: bold;'>❌ ERROR: Webhook returned HTTP Code {$http_code}. See server error log.</p>";
}

echo "<h3>2. Verification of outgoing logs inside log.txt</h3>";
$log_file = __DIR__ . '/log.txt';
if (file_exists($log_file)) {
    $log_content = file_get_contents($log_file);
    
    // Find the latest response from Meta's API inside log.txt
    if (preg_match_all('/\[SEND MENU RESPONSE\]\s*->\s*(.*)/', $log_content, $matches)) {
        $latest_response = end($matches[1]);
        echo "<p><strong>Latest Meta API Response captured in log.txt:</strong></p>";
        echo "<pre style='background: #f4f4f4; padding: 15px; border-radius: 8px; border: 1px solid #ddd; overflow-x: auto;'>" . htmlspecialchars($latest_response) . "</pre>";
        
        $meta_data = json_decode($latest_response, true);
        if (isset($meta_data['error'])) {
            echo "<p style='color: red; font-weight: bold;'>❌ META ERROR FOUND: Meta rejected the response! Description: " . htmlspecialchars($meta_data['error']['message']) . " (Code " . $meta_data['error']['code'] . ")</p>";
            if ($meta_data['error']['code'] == 190) {
                echo "<p style='background: #fff8f8; border-left: 4px solid red; padding: 10px;'><strong>💡 Solution:</strong> Your Meta Access Token has expired. Please copy a new one from your Meta Developer console and update line 6 in <code>whatsapp_webhook.php</code>.</p>";
            }
        } else {
            echo "<p style='color: green; font-weight: bold;'>✅ SUCCESS: Meta successfully accepted the WhatsApp message! (Message ID: " . htmlspecialchars($meta_data['messages'][0]['id'] ?? 'N/A') . ")</p>";
        }
    } else {
        echo "<p style='color: orange;'>⚠️ No outgoing Meta API responses were recorded in log.txt. Ensure write permissions are active.</p>";
    }
} else {
    echo "<p style='color: red;'>❌ log.txt was not found.</p>";
}
?>
