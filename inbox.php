<?php
session_start();

// ==========================================
// CONFIGURATION & SECURITY
// ==========================================
$admin_password = "NexliflyInbox2026"; // Change this to your preferred dashboard password
$paused_file = 'paused_chats.txt';

// Authentication Check
if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['inbox_logged_in'] = true;
    } else {
        $login_error = "Invalid password. Please try again.";
    }
}

// Logout Handler
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['inbox_logged_in']);
    session_destroy();
    header("Location: inbox.php");
    exit;
}

// Redirect if not logged in
$is_logged_in = isset($_SESSION['inbox_logged_in']) && $_SESSION['inbox_logged_in'] === true;

// ==========================================
// AJAX API ENDPOINTS
// ==========================================
if ($is_logged_in && isset($_GET['action'])) {
    header('Content-Type: application/json');
    
    // API: List all active chats
    if ($_GET['action'] === 'list') {
        $chats = [];
        $dir = 'chats';
        
        if (is_dir($dir)) {
            $files = glob("{$dir}/*.json");
            $paused_numbers = file_exists($paused_file) ? file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
            
            foreach ($files as $file) {
                $content = json_decode(file_get_contents($file), true);
                if (is_array($content)) {
                    $phone = $content['phone'];
                    $last_msg = "";
                    if (!empty($content['messages'])) {
                        $last_item = end($content['messages']);
                        $last_msg = $last_item['text'];
                    }
                    
                    $chats[] = [
                        'phone' => $phone,
                        'name' => isset($content['name']) ? $content['name'] : 'Customer',
                        'last_updated' => isset($content['last_updated']) ? $content['last_updated'] : filemtime($file),
                        'unread' => isset($content['unread']) ? (bool)$content['unread'] : false,
                        'last_message' => $last_msg,
                        'is_paused' => in_array($phone, $paused_numbers)
                    ];
                }
            }
        }
        
        // Sort by last_updated descending
        usort($chats, function($a, $b) {
            return $b['last_updated'] - $a['last_updated'];
        });
        
        echo json_encode($chats);
        exit;
    }
    
    // API: Get full history for a specific phone & mark as read
    if ($_GET['action'] === 'get_chat' && isset($_GET['phone'])) {
        $phone = preg_replace('/[^0-9]/', '', $_GET['phone']);
        $file = "chats/{$phone}.json";
        
        if (file_exists($file)) {
            $content = json_decode(file_get_contents($file), true);
            
            if (is_array($content)) {
                // Mark as read
                if (isset($content['unread']) && $content['unread'] === true) {
                    $content['unread'] = false;
                    file_put_contents($file, json_encode($content, JSON_PRETTY_PRINT));
                }
                
                $paused_numbers = file_exists($paused_file) ? file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
                $content['is_paused'] = in_array($phone, $paused_numbers);
                
                echo json_encode($content);
                exit;
            }
        }
        
        echo json_encode(['error' => 'Chat not found']);
        exit;
    }
    
    // API: Toggle bot pause status manually
    if ($_GET['action'] === 'toggle_bot' && isset($_GET['phone'])) {
        $phone = preg_replace('/[^0-9]/', '', $_GET['phone']);
        $paused_numbers = file_exists($paused_file) ? file($paused_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
        
        $key = array_search($phone, $paused_numbers);
        if ($key !== false) {
            // Unpause the bot
            unset($paused_numbers[$key]);
            $paused = false;
        } else {
            // Pause the bot
            $paused_numbers[] = $phone;
            $paused = true;
        }
        
        file_put_contents($paused_file, implode("\n", array_unique($paused_numbers)));
        echo json_encode(['status' => 'success', 'paused' => $paused]);
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexlifly WhatsApp Live Inbox</title>
    <!-- Premium Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --bg-obsidian: #080C14;
            --bg-card: #0F1626;
            --bg-hover: #172237;
            --border-glass: rgba(255, 255, 255, 0.06);
            
            --text-primary: #F3F4F6;
            --text-secondary: #9CA3AF;
            --text-muted: #6B7280;
            
            --color-emerald: #10B981;
            --color-emerald-glow: rgba(16, 185, 129, 0.15);
            --color-blue: #3B82F6;
            --color-blue-glow: rgba(59, 130, 246, 0.2);
            --color-coral: #F59E0B;
            --color-coral-glow: rgba(245, 158, 11, 0.15);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
        }

        body {
            background-color: var(--bg-obsidian);
            color: var(--text-primary);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        /* ==========================================
           LOGIN SCREEN
           ========================================== */
        .login-container {
            background: var(--bg-card);
            border: 1px solid var(--border-glass);
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            max-width: 420px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            text-align: center;
            animation: fadeIn 0.5s ease-out;
        }

        .login-logo {
            font-family: 'Outfit', sans-serif;
            font-size: 2.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--color-blue), var(--color-emerald));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }

        .login-subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 30px;
        }

        .login-form input[type="password"] {
            width: 100%;
            padding: 14px 20px;
            border-radius: 12px;
            border: 1px solid var(--border-glass);
            background: rgba(255, 255, 255, 0.03);
            color: var(--text-primary);
            font-size: 1rem;
            margin-bottom: 20px;
            outline: none;
            transition: all 0.3s ease;
        }

        .login-form input[type="password"]:focus {
            border-color: var(--color-blue);
            box-shadow: 0 0 10px var(--color-blue-glow);
            background: rgba(255, 255, 255, 0.05);
        }

        .login-btn {
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(135deg, var(--color-blue), #1D4ED8);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px var(--color-blue-glow);
        }

        .error-msg {
            color: #EF4444;
            font-size: 0.85rem;
            margin-bottom: 15px;
            background: rgba(239, 68, 68, 0.1);
            padding: 10px;
            border-radius: 8px;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }

        /* ==========================================
           MAIN INBOX LAYOUT
           ========================================== */
        .app-container {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            background-color: var(--bg-obsidian);
        }

        /* Sidebar Pane */
        .sidebar {
            width: 350px;
            min-width: 300px;
            background: var(--bg-card);
            border-right: 1px solid var(--border-glass);
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .sidebar-header {
            padding: 24px;
            border-bottom: 1px solid var(--border-glass);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .sidebar-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--color-blue), var(--color-emerald));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .logout-btn {
            background: transparent;
            border: none;
            color: var(--text-secondary);
            font-size: 1.1rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .logout-btn:hover {
            color: #EF4444;
        }

        .search-container {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-glass);
        }

        .search-bar {
            width: 100%;
            padding: 10px 16px;
            border-radius: 10px;
            border: 1px solid var(--border-glass);
            background: rgba(255, 255, 255, 0.03);
            color: var(--text-primary);
            font-size: 0.9rem;
            outline: none;
        }

        .search-bar:focus {
            border-color: var(--color-blue);
        }

        .chat-list {
            flex: 1;
            overflow-y: auto;
        }

        .chat-list::-webkit-scrollbar {
            width: 5px;
        }

        .chat-list::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        .chat-item {
            display: flex;
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.02);
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }

        .chat-item:hover {
            background: var(--bg-hover);
        }

        .chat-item.active {
            background: rgba(59, 130, 246, 0.08);
            border-left: 4px solid var(--color-blue);
        }

        .chat-avatar {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--bg-hover), var(--text-muted));
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            color: var(--text-primary);
            margin-right: 14px;
            font-family: 'Outfit', sans-serif;
            border: 1px solid var(--border-glass);
        }

        .chat-info {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .chat-name-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4px;
        }

        .chat-name {
            font-weight: 600;
            font-size: 0.95rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text-primary);
        }

        .chat-time {
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .chat-preview-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-preview {
            font-size: 0.8rem;
            color: var(--text-secondary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 170px;
        }

        .badge-unread {
            background: var(--color-emerald);
            color: white;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 3px 7px;
            border-radius: 10px;
            box-shadow: 0 0 8px var(--color-emerald-glow);
        }

        .badge-paused {
            background: rgba(245, 158, 11, 0.1);
            color: var(--color-coral);
            border: 1px solid rgba(245, 158, 11, 0.2);
            font-size: 0.65rem;
            font-weight: 600;
            padding: 2px 5px;
            border-radius: 4px;
        }

        /* Center Chat Pane */
        .chat-pane {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: 100%;
            background-color: var(--bg-obsidian);
            position: relative;
        }

        .chat-welcome {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--text-muted);
            text-align: center;
            padding: 40px;
        }

        .chat-welcome i {
            font-size: 4rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--color-blue), var(--color-emerald));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .chat-header {
            padding: 16px 24px;
            background: var(--bg-card);
            border-bottom: 1px solid var(--border-glass);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .active-user-name {
            font-family: 'Outfit', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .active-user-phone {
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .bot-status-container {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .bot-badge {
            font-size: 0.75rem;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .bot-badge.active {
            background: var(--color-emerald-glow);
            color: var(--color-emerald);
            border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .bot-badge.paused {
            background: var(--color-coral-glow);
            color: var(--color-coral);
            border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .toggle-bot-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-glass);
            color: var(--text-primary);
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .toggle-bot-btn:hover {
            background: var(--bg-hover);
        }

        /* Conversations Bubble Window */
        .chat-history {
            flex: 1;
            padding: 24px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 14px;
            background-image: radial-gradient(rgba(255,255,255,0.015) 1px, transparent 0);
            background-size: 24px 24px;
        }

        .chat-history::-webkit-scrollbar {
            width: 6px;
        }

        .chat-history::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 10px;
        }

        .msg-bubble {
            max-width: 65%;
            padding: 12px 16px;
            border-radius: 16px;
            font-size: 0.92rem;
            line-height: 1.45;
            position: relative;
            word-wrap: break-word;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        /* Customer Bubble - aligned Left */
        .msg-bubble.customer {
            align-self: flex-start;
            background-color: #16241F;
            border: 1px solid rgba(16, 185, 129, 0.15);
            color: #E2E8F0;
            border-bottom-left-radius: 4px;
        }

        /* Agent Bubble - aligned Right */
        .msg-bubble.agent {
            align-self: flex-end;
            background: linear-gradient(135deg, #1E3A8A, #1D4ED8);
            color: white;
            border-bottom-right-radius: 4px;
            box-shadow: 0 4px 12px var(--color-blue-glow);
        }

        /* Bot Bubble - aligned Left (Slate grey) */
        .msg-bubble.bot {
            align-self: flex-start;
            background-color: #1F2937;
            border: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            border-bottom-left-radius: 4px;
            font-style: italic;
        }

        .msg-meta {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 6px;
            margin-top: 6px;
            font-size: 0.7rem;
            color: var(--text-muted);
        }

        .msg-bubble.agent .msg-meta {
            color: rgba(255, 255, 255, 0.6);
        }

        .bot-label {
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            background: rgba(255, 255, 255, 0.1);
            padding: 2px 5px;
            border-radius: 4px;
            color: var(--text-muted);
            margin-right: 6px;
            font-style: normal;
        }

        /* Input Form */
        .chat-input-area {
            padding: 16px 24px;
            background: var(--bg-card);
            border-top: 1px solid var(--border-glass);
        }

        .chat-input-form {
            display: flex;
            gap: 12px;
            align-items: center;
            width: 100%;
        }

        .chat-input-box {
            flex: 1;
            padding: 14px 20px;
            border-radius: 12px;
            border: 1px solid var(--border-glass);
            background: var(--bg-obsidian);
            color: var(--text-primary);
            font-size: 0.95rem;
            outline: none;
            transition: all 0.3s ease;
        }

        .chat-input-box:focus {
            border-color: var(--color-blue);
            box-shadow: 0 0 8px var(--color-blue-glow);
        }

        .send-msg-btn {
            background: var(--color-blue);
            border: none;
            color: white;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px var(--color-blue-glow);
        }

        .send-msg-btn:hover {
            transform: scale(1.05);
            background: #2563EB;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Responsive details */
        @media (max-width: 768px) {
            .sidebar {
                width: 100%;
                display: var(--sidebar-display, flex);
            }
            
            .chat-pane {
                width: 100%;
                display: var(--pane-display, none);
            }
            
            .back-btn {
                display: inline-block !important;
                margin-right: 12px;
                color: var(--text-primary);
                font-size: 1.2rem;
                cursor: pointer;
            }
        }

        .back-btn {
            display: none;
        }
    </style>
</head>
<body>

<?php if (!$is_logged_in): ?>
    <!-- Login Screen -->
    <div class="login-container">
        <div class="login-logo"><i class="fab fa-whatsapp"></i> Nexlifly</div>
        <div class="login-subtitle">WhatsApp Live Chat Dashboard</div>
        
        <?php if (isset($login_error)): ?>
            <div class="error-msg"><?php echo htmlspecialchars($login_error); ?></div>
        <?php endif; ?>
        
        <form class="login-form" method="POST">
            <input type="password" name="password" placeholder="Enter Access Password" autocomplete="current-password" required>
            <button type="submit" class="login-btn">Secure Login</button>
        </form>
    </div>
<?php else: ?>
    <!-- Main App Layout -->
    <div class="app-container">
        <!-- Sidebar Panel -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <span class="sidebar-title"><i class="fab fa-whatsapp"></i> Nexlifly Bot</span>
                <a href="inbox.php?action=logout" class="logout-btn" title="Logout"><i class="fas fa-sign-out-alt"></i></a>
            </div>
            
            <div class="search-container">
                <input type="text" class="search-bar" id="searchBar" placeholder="Search chats..." onkeyup="filterChats()">
            </div>
            
            <div class="chat-list" id="chatList">
                <!-- Loaded via AJAX -->
            </div>
        </div>

        <!-- Chat Pane Panel -->
        <div class="chat-pane" id="chatPane">
            <div class="chat-welcome" id="chatWelcome">
                <i class="far fa-comments"></i>
                <h2>Nexlifly Live Chat Support</h2>
                <p style="margin-top: 10px; font-size: 0.9rem; max-width: 320px;">Select a conversation from the left sidebar to read chat history and reply live to your customers!</p>
            </div>
            
            <div class="chat-header" id="chatHeader" style="display: none;">
                <div>
                    <span class="back-btn" onclick="showSidebar()"><i class="fas fa-arrow-left"></i></span>
                    <h3 class="active-user-name" id="activeUserName">Customer</h3>
                    <div class="active-user-phone" id="activeUserPhone">+00 0000 000000</div>
                </div>
                <div class="bot-status-container">
                    <div class="bot-badge active" id="botBadge">
                        <i class="fas fa-robot"></i> <span>Bot Active</span>
                    </div>
                    <button class="toggle-bot-btn" id="toggleBotBtn" onclick="toggleBot()">Pause Bot</button>
                </div>
            </div>
            
            <div class="chat-history" id="chatHistory" style="display: none;">
                <!-- Loaded via AJAX -->
            </div>
            
            <div class="chat-input-area" id="chatInputArea" style="display: none;">
                <form class="chat-input-form" onsubmit="submitReply(event)">
                    <input type="text" class="chat-input-box" id="chatInputBox" placeholder="Type a message..." autocomplete="off" required>
                    <button type="submit" class="send-msg-btn"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>

    <!-- AJAX Dashboard Scripts -->
    <script>
        let selectedPhone = null;
        let pollInterval = null;
        let chatsCache = [];

        // Fetch the list of active chats
        function fetchChats() {
            fetch('inbox.php?action=list')
                .then(response => response.json())
                .then(chats => {
                    chatsCache = chats;
                    renderChatList(chats);
                })
                .catch(err => console.error("Error fetching chats:", err));
        }

        // Render the chat list in the sidebar
        function renderChatList(chats) {
            const listContainer = document.getElementById('chatList');
            const searchVal = document.getElementById('searchBar').value.toLowerCase();
            let html = '';
            
            chats.forEach(chat => {
                if (chat.name.toLowerCase().includes(searchVal) || chat.phone.includes(searchVal)) {
                    const isActive = selectedPhone === chat.phone ? 'active' : '';
                    const timeStr = formatTimestamp(chat.last_updated);
                    const initial = chat.name.charAt(0).toUpperCase();
                    
                    html += `
                        <div class="chat-item ${isActive}" onclick="selectChat('${chat.phone}', '${escapeHtml(chat.name)}')">
                            <div class="chat-avatar">${initial}</div>
                            <div class="chat-info">
                                <div class="chat-name-row">
                                    <div class="chat-name">${escapeHtml(chat.name)}</div>
                                    <div class="chat-time">${timeStr}</div>
                                </div>
                                <div class="chat-preview-row">
                                    <div class="chat-preview">${escapeHtml(chat.last_message || 'Interactive menu')}</div>
                                    <div style="display: flex; gap: 6px; align-items: center;">
                                        ${chat.is_paused ? '<span class="badge-paused">Live</span>' : ''}
                                        ${chat.unread ? '<span class="badge-unread">New</span>' : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
            
            listContainer.innerHTML = html || '<div style="padding: 30px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No chats found</div>';
        }

        // Filter chats locally on search bar typing
        function filterChats() {
            renderChatList(chatsCache);
        }

        // Select and load a chat
        function selectChat(phone, name) {
            selectedPhone = phone;
            
            // Adjust layouts for mobile responsiveness
            if (window.innerWidth <= 768) {
                document.documentElement.style.setProperty('--sidebar-display', 'none');
                document.documentElement.style.setProperty('--pane-display', 'flex');
            }
            
            // Highlight item in sidebar
            const items = document.querySelectorAll('.chat-item');
            items.forEach(el => el.classList.remove('active'));
            fetchChats(); // Refresh unread count
            
            // Set header info
            document.getElementById('activeUserName').innerText = name;
            document.getElementById('activeUserPhone').innerText = `+${phone}`;
            
            // Toggle panes
            document.getElementById('chatWelcome').style.display = 'none';
            document.getElementById('chatHeader').style.display = 'flex';
            document.getElementById('chatHistory').style.display = 'flex';
            document.getElementById('chatInputArea').style.display = 'block';
            
            // Load history
            fetchChatHistory(phone);
            
            // Focus on input
            document.getElementById('chatInputBox').focus();
        }

        // Fetch history for selected chat
        function fetchChatHistory(phone) {
            if (selectedPhone !== phone) return;
            
            fetch(`inbox.php?action=get_chat&phone=${phone}`)
                .then(response => response.json())
                .then(chat => {
                    renderChatHistory(chat);
                })
                .catch(err => console.error("Error loading chat history:", err));
        }

        // Render chat bubble history
        function renderChatHistory(chat) {
            const historyContainer = document.getElementById('chatHistory');
            
            // Save scroll position
            const isNearBottom = historyContainer.scrollHeight - historyContainer.clientHeight - historyContainer.scrollTop < 100;
            
            // Bot status render
            const badge = document.getElementById('botBadge');
            const toggleBtn = document.getElementById('toggleBotBtn');
            
            if (chat.is_paused) {
                badge.className = 'bot-badge paused';
                badge.innerHTML = '<i class="fas fa-user-friends"></i> <span>Live Chat (Bot Paused)</span>';
                toggleBtn.innerText = 'Resume Bot';
            } else {
                badge.className = 'bot-badge active';
                badge.innerHTML = '<i class="fas fa-robot"></i> <span>Bot Active</span>';
                toggleBtn.innerText = 'Pause Bot';
            }
            
            let html = '';
            if (chat.messages && chat.messages.length > 0) {
                chat.messages.forEach(msg => {
                    const bubbleClass = msg.sender; // 'customer', 'bot', or 'agent'
                    const date = new Date(msg.timestamp * 1000);
                    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    
                    let label = '';
                    if (msg.sender === 'bot') {
                        label = '<span class="bot-label"><i class="fas fa-robot"></i> Bot</span>';
                    } else if (msg.sender === 'agent') {
                        label = '<span class="bot-label" style="background: rgba(255,255,255,0.15); color: #fff;"><i class="fas fa-user-tie"></i> You</span>';
                    }
                    
                    html += `
                        <div class="msg-bubble ${bubbleClass}">
                            <div>${escapeHtml(msg.text).replace(/\n/g, '<br>')}</div>
                            <div class="msg-meta">
                                ${label}
                                <span>${timeStr}</span>
                            </div>
                        </div>
                    `;
                });
            } else {
                html = '<div style="margin: auto; color: var(--text-muted); font-size: 0.9rem;">No messages yet</div>';
            }
            
            historyContainer.innerHTML = html;
            
            // Auto-scroll to bottom
            if (isNearBottom || historyContainer.scrollTop === 0) {
                historyContainer.scrollTop = historyContainer.scrollHeight;
            }
        }

        // Toggle Bot Active/Pause status
        function toggleBot() {
            if (!selectedPhone) return;
            
            fetch(`inbox.php?action=toggle_bot&phone=${selectedPhone}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        fetchChatHistory(selectedPhone);
                        fetchChats();
                    }
                })
                .catch(err => console.error("Error toggling bot status:", err));
        }

        // Submit agent reply
        function submitReply(e) {
            e.preventDefault();
            const inputBox = document.getElementById('chatInputBox');
            const message = inputBox.value.trim();
            if (!message || !selectedPhone) return;
            
            // Instantly append to UI (optimistic rendering)
            const historyContainer = document.getElementById('chatHistory');
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const tempBubble = document.createElement('div');
            tempBubble.className = 'msg-bubble agent';
            tempBubble.innerHTML = `
                <div>${escapeHtml(message).replace(/\n/g, '<br>')}</div>
                <div class="msg-meta">
                    <span class="bot-label" style="background: rgba(255,255,255,0.15); color: #fff;"><i class="fas fa-user-tie"></i> You</span>
                    <span>${timeStr} <i class="fas fa-spinner fa-spin" style="font-size: 0.6rem; margin-left: 4px;"></i></span>
                </div>
            `;
            historyContainer.appendChild(tempBubble);
            historyContainer.scrollTop = historyContainer.scrollHeight;
            
            inputBox.value = '';
            
            // Call API backend
            fetch('send_live_reply.php', {
                method: 'POST',
                headers: { 'Content-Type: application/json' },
                body: JSON.stringify({
                    phone: selectedPhone,
                    message: message
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    fetchChatHistory(selectedPhone);
                    fetchChats();
                } else {
                    alert("Error sending message: " + (data.message || 'Unknown error'));
                    fetchChatHistory(selectedPhone);
                }
            })
            .catch(err => {
                console.error("Error sending reply:", err);
                alert("Connection error when sending message.");
                fetchChatHistory(selectedPhone);
            });
        }

        // Helper utilities
        function formatTimestamp(timestamp) {
            const date = new Date(timestamp * 1000);
            const now = new Date();
            if (date.toDateString() === now.toDateString()) {
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
            return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        }

        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        }

        function showSidebar() {
            document.documentElement.style.setProperty('--sidebar-display', 'flex');
            document.documentElement.style.setProperty('--pane-display', 'none');
            selectedPhone = null;
        }

        // Initialization
        fetchChats();
        
        // Poll every 3 seconds for new chats and current active chat history
        setInterval(() => {
            fetchChats();
            if (selectedPhone) {
                fetchChatHistory(selectedPhone);
            }
        }, 3000);
    </script>
<?php endif; ?>

</body>
</html>
