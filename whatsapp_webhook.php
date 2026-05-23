<?php
// ==========================================
// CONFIGURATION
// ==========================================
$verify_token = "NexliflySecretToken123"; // Custom secure verification token for Meta verification
$access_token = "EAAZCDzwNkUwcBRrqyVi3wbYatVQ8OQjhuXyL17lZByd1yoEVkmgORdW6AIKZCc0HVbCRK0tSF8XW2i7pBu4P4sKUOJVfDC0w9uHkqp1y2OKtc4i9buUUcGdhC8jrZBtr7miPq0xvu60EFXTnfibFP90c4FR3XtjlYbpKdfVgiW8NeGtPkbDr74WAjpdI3gZDZD"; // Put your regenerated secure token here
$phone_number_id = "1104794059387932"; // Your WhatsApp Phone Number ID

// ==========================================
// PHASE 1: META WEBHOOK VERIFICATION (GET)
// ==========================================
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['hub_mode']) && $_GET['hub_mode'] === 'subscribe' && isset($_GET['hub_verify_token'])) {
        if ($_GET['hub_verify_token'] === $verify_token) {
            echo $_GET['hub_challenge'];
            exit;
        } else {
            header('HTTP/1.1 403 Forbidden');
            echo "Verification token mismatch.";
            exit;
        }
    }
}

// ==========================================
// PHASE 2: RECEIVE MESSAGE & AUTO-REPLY (POST)
// ==========================================
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read raw JSON post data from Meta
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Optional: Log the incoming messages to log.txt for debugging
    file_put_contents('log.txt', print_r($data, true), FILE_APPEND);

    // Process incoming message
    if (isset($data['entry'][0]['changes'][0]['value']['messages'][0])) {
        $message = $data['entry'][0]['changes'][0]['value']['messages'][0];
        $from_number = $message['from']; // Sender's phone number
        
        // Extract message content: Support both plain text AND interactive list selections
        $message_text = "";
        if (isset($message['text']['body'])) {
            $message_text = trim(strtolower($message['text']['body']));
        } elseif (isset($message['interactive']['list_reply']['id'])) {
            $message_text = trim(strtolower($message['interactive']['list_reply']['id']));
        }
        
        // Define the file name that holds paused phone numbers
        $paused_file = 'paused_chats.txt';
        $paused_numbers = file_exists($paused_file) ? file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];

        // If the customer wants to start over, we unpause the bot and send them the premium Interactive List Menu!
        if ($message_text == "hello" || $message_text == "hi" || $message_text == "start") {
            if (($key = array_search($from_number, $paused_numbers)) !== false) {
                unset($paused_numbers[$key]);
                file_put_contents($paused_file, implode("\n", $paused_numbers));
            }
            
            // Send the Premium Interactive List Menu (View Menu button)
            $response = send_whatsapp_list_menu($from_number, $phone_number_id, $access_token);
            file_put_contents('log.txt', "\n[SEND MENU RESPONSE] -> " . $response . "\n", FILE_APPEND);
            
            header('HTTP/1.1 200 OK');
            exit;
        }

        // If the bot is currently paused for this number, ignore and do not auto-reply
        if (in_array($from_number, $paused_numbers)) {
            header('HTTP/1.1 200 OK');
            exit;
        }

        $reply_text = "";
        
        // Custom simple auto-reply logic
        if ($message_text == "1") {
            $reply_text = "💻 *Nexlifly Development Services:*\n\n"
                        . "• *Web Development:* Premium custom React and Next.js websites.\n"
                        . "• *App Development:* High-performance iOS and Android mobile apps.\n"
                        . "• *Software Development:* Tailored, robust software built for scale.\n"
                        . "• *Ecommerce Solutions:* High-converting online retail stores.\n\n"
                        . "🔗 Explore our work: nexlifly.in/works\n"
                        . "Type *hello* to return to the main menu.";
        } elseif ($message_text == "2") {
            $reply_text = "☁️ *Nexlifly Cloud & IT Services:*\n\n"
                        . "• *AWS & DevOps:* Robust server infrastructure, automation, and CI/CD pipelines.\n"
                        . "• *Hosting & Server:* Secure, high-speed, and reliable managed server hosting.\n"
                        . "• *Security & Maintenance:* Enterprise-grade compliance, malware protection, and 24/7 support.\n\n"
                        . "Type *hello* to return to the main menu.";
        } elseif ($message_text == "3") {
            $reply_text = "🤖 *Nexlifly AI & Automation Services:*\n\n"
                        . "• *AI Chatbots:* Intelligent conversational bots for WhatsApp, Instagram, and Web.\n"
                        . "• *AI Automation:* Automated workflows to eliminate manual, repetitive tasks.\n"
                        . "• *API Integrations:* Seamlessly connecting all your favorite software.\n"
                        . "• *IVR Solutions:* Custom Interactive Voice Response systems for your telephone lines.\n"
                        . "• *Digital Marketing:* High-ROI search engine optimization (SEO) and online growth marketing.\n\n"
                        . "Type *hello* to return to the main menu.";
        } elseif ($message_text == "4" || $message_text == "talk with us") {
            // 1. Set reply text to customer
            $reply_text = "Connecting you to our team... 🔌\n\nYou are now in *Live Chat* mode. I have paused the bot for you. A Nexlifly expert will message you here directly shortly!";
            
            // 2. Add customer to paused_chats.txt so the bot stops auto-replying
            $paused_numbers[] = $from_number;
            file_put_contents($paused_file, implode("\n", array_unique($paused_numbers)));

            // 3. Send a direct WhatsApp notification to the Owner (Amit) alerting them to talk live
            $owner_alert = "⚠️ *Live Chat Request!*\n\nCustomer *+{$from_number}* clicked 'Talk with us' and is waiting for you. Reply to them in your Meta Business Suite Inbox!";
            $owner_phone = "917671031879"; // Your phone number
            send_whatsapp_message($owner_phone, $owner_alert, $phone_number_id, $access_token);
            
        } else {
            $reply_text = "Sorry, I didn't get that. Please reply with 1, 2, 3, or 4, or type *hello* to start over!";
        }

        // Send the message back via Meta API
        if (!empty($reply_text)) {
            $response = send_whatsapp_message($from_number, $reply_text, $phone_number_id, $access_token);
            file_put_contents('log.txt', "\n[SEND REPLY RESPONSE] -> " . $response . "\n", FILE_APPEND);
        }
    }
    
    // Respond to Meta with a 200 OK
    header('HTTP/1.1 200 OK');
    exit;
}

// ==========================================
// FUNCTION: SEND WHATSAPP MESSAGE (cURL)
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
// FUNCTION: SEND PREMIUM INTERACTIVE LIST MENU (cURL)
// ==========================================
function send_whatsapp_list_menu($to, $phone_number_id, $access_token) {
    $url = "https://graph.facebook.com/v20.0/{$phone_number_id}/messages";
    
    $payload = [
        'messaging_product' => 'whatsapp',
        'recipient_type' => 'individual',
        'to' => $to,
        'type' => 'interactive',
        'interactive' => [
            'type' => 'list',
            'header' => [
                'type' => 'text',
                'text' => '🚀 Nexlifly scaling bot'
            ],
            'body' => [
                'text' => 'Hi! Welcome to Nexlifly. How can we help you scale your business today?'
            ],
            'footer' => [
                'text' => 'Please select an option below:'
            ],
            'action' => [
                'button' => 'View Menu',
                'sections' => [
                    [
                        'title' => 'Our Capabilities',
                        'rows' => [
                            [
                                'id' => '1',
                                'title' => 'Development Services',
                                'description' => 'Web, Mobile Apps, Software, Ecommerce'
                            ],
                            [
                                'id' => '2',
                                'title' => 'Cloud & IT Services',
                                'description' => 'AWS, DevOps, Hosting, Security'
                            ],
                            [
                                'id' => '3',
                                'title' => 'AI & Automation',
                                'description' => 'Chatbots, Workflows, API, SEO'
                            ]
                        ]
                    ],
                    [
                        'title' => 'Support',
                        'rows' => [
                            [
                                'id' => '4',
                                'title' => 'Talk with us',
                                'description' => 'Start a live chat with our team'
                            ]
                        ]
                    ]
                ]
            ]
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
?>
