<?php
// Enable Cross-Origin Resource Sharing (CORS) so your React frontend can call it from any domain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// ==========================================
// CONFIGURATION
// ==========================================
$access_token = "EAAZCDzwNkUwcBRixhYOSf0KZC5ExSPaSP9TtHIqIZAWHVVlrXpDlHoQf702UjopX6oroJ76556v098LnOaIZBGXfJfbulkNdIYBSUbtRxQnKb5bGGtv5SNeMc5NA7vrTDmlIdZAzZAzdJJLY1zQsUTrvfZAEZA1D2Q9Ydw8UA243UvLwgxuXf6Fp5RfHUIWJ7DwEotGR4dbH7cOT2hgN2uZAsK74qgGZBdebq2GXkjPtiocbSZCa4jDE7EAAZCDzwNkUwcBRj2lJZAZBZA3afpFWBulHZBZC93CiFIeQWl3RPT2ZCOvqBIOV6pOgGrZA3ZCJa8QtJWTIpAXb5j1Be0A4ZADIrAxkJUZCKJ7UsFrnZCb5i3rcQZBJiHNFaBR0b8YZCEZCFOVhZCTkQ9L0ZCUNu7GYcJx9Tfyr2nAAPRh5suYbZCQczVUZCcz1VcdPsgWSyBhdzc7blgXf6EO6sfW2jv1eP3W6rLhXUAMruXVj0YQsMZBBWwbedZCzNKuWsKXIGuElE4TLkhtMRI8TEk1LJCZAtlteBwZDZD4DZA0mgGYZBVfVIwI7ZA0HrQmraUPZAf8WLZAsh"; // Put your regenerated secure token here
$phone_number_id = "1206665735855928"; // Your WhatsApp Phone ID
$owner_phone_number = "917671031879"; // Put YOUR personal mobile number here (with country code, e.g., 91 for India)

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the incoming form submission JSON data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (isset($data['firstName'])) {
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $phone = $data['phonePrefix'] . " " . $data['phoneNumber'];
        $clientType = $data['clientType'];
        $budget = $data['budget'];
        $message = $data['message'];

        // ----------------------------------------------------
        // MESSAGE 1: Send a WhatsApp lead alert to YOUR phone
        // ----------------------------------------------------
        $owner_message = "🔔 *New Nexlifly Lead Alert!*\n\n"
                       . "👤 *Name:* {$firstName} {$lastName}\n"
                       . "📧 *Email:* {$email}\n"
                       . "📞 *Phone:* {$phone}\n"
                       . "🏢 *Client:* {$clientType}\n"
                       . "💰 *Budget:* {$budget}\n"
                       . "💬 *Message:* {$message}";

        send_whatsapp_message($owner_phone_number, $owner_message, $phone_number_id, $access_token);

        // ----------------------------------------------------
        // MESSAGE 2: Send a WhatsApp welcome to the CUSTOMER
        // ----------------------------------------------------
        // Meta requires pre-approved templates for business-initiated conversations.
        // The sandbox comes with the default "hello_world" template.
        $customer_clean_number = preg_replace('/[^0-9]/', '', $phone); // Strip spaces, + sign
        
        send_whatsapp_template($customer_clean_number, "hello_world", "en_US", $phone_number_id, $access_token);
        
        echo json_encode(["status" => "success", "message" => "WhatsApp notifications triggered!"]);
        exit;
    }
}

echo json_encode(["status" => "error", "message" => "Invalid Request"]);

// ==========================================
// HELPER FUNCTIONS (cURL to Meta)
// ==========================================
function send_whatsapp_message($to, $message, $phone_number_id, $access_token) {
    $url = "https://graph.facebook.com/v20.0/{$phone_number_id}/messages";
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $to,
        'type' => 'text',
        'text' => ['body' => $message]
    ];
    return curl_post($url, $payload, $access_token);
}

function send_whatsapp_template($to, $template_name, $lang, $phone_number_id, $access_token) {
    $url = "https://graph.facebook.com/v20.0/{$phone_number_id}/messages";
    $payload = [
        'messaging_product' => 'whatsapp',
        'to' => $to,
        'type' => 'template',
        'template' => [
            'name' => $template_name,
            'language' => ['code' => $lang]
        ]
    ];
    return curl_post($url, $payload, $access_token);
}

function curl_post($url, $payload, $access_token) {
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
?>
