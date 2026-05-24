import React, { useState, useEffect, useRef } from 'react';
import { 
  FiLock, FiMessageSquare, FiSearch, FiSend, 
  FiPhone, FiClock, FiCheckCircle 
} from 'react-icons/fi';
import './AdminChat.css';

// Synthetic Sound generator to avoid missing audio file errors
const playNotificationChime = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // High-pitched notification double beep (chime)
    const playBeep = (freq, time, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.08, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + duration);
    };
    
    const now = ctx.currentTime;
    playBeep(523.25, now, 0.15); // C5
    playBeep(783.99, now + 0.1, 0.25); // G5
  } catch (e) {
    console.warn("AudioContext block by browser auto-play policy: ", e);
  }
};

function AdminChat() {
  // Authentication & Passcode protection
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Core Data States
  const [chats, setChats] = useState([]);
  const [selectedChatPhone, setSelectedChatPhone] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  
  // UI Loading States
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isResolving, setIsResolving] = useState(false);

  const messagesEndRef = useRef(null);
  const prevChatsRef = useRef([]);

  // Default secure passcode
  const SECURE_PASSCODE = 'NexliflyAdmin77';

  // Request browser notification permissions on mount
  useEffect(() => {
    if (window.Notification && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Poll chats API every 3 seconds
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchChatsData = async () => {
      try {
        const response = await fetch('/fetch_chats.php');
        if (!response.ok) throw new Error('API failed to respond');
        
        const data = await response.json();
        if (data.status === 'success' && Array.isArray(data.chats)) {
          setChats(data.chats);
          checkForNewMessages(data.chats);
        }
      } catch (err) {
        console.error("Failed to sync live chats:", err);
      }
    };

    // Run immediately and then spin up background interval
    fetchChatsData();
    const interval = setInterval(fetchChatsData, 3000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);



  // Alert triggers for background tabs
  const checkForNewMessages = (newChatsList) => {
    const prevChats = prevChatsRef.current;
    if (prevChats.length === 0) {
      prevChatsRef.current = newChatsList;
      return;
    }

    newChatsList.forEach((newChat) => {
      const oldChat = prev.find(c => c.phone === newChat.phone);
      
      // If there's an increase in messages count
      if (oldChat && newChat.messages.length > oldChat.messages.length) {
        const latestMsg = newChat.messages[newChat.messages.length - 1];
        
        // If the message is from a customer
        if (latestMsg.sender === 'customer') {
          playNotificationChime();
          
          // Show alert notification if the dashboard is minimized/inactive
          if (document.hidden && window.Notification && Notification.permission === 'granted') {
            new Notification(`New WhatsApp from ${newChat.name}`, {
              body: latestMsg.text,
              tag: newChat.phone,
              requireInteraction: true
            });
          }
        }
      }
    });

    prevChatsRef.current = newChatsList;
  };

  // Helper variables to track active chat details
  const activeChat = chats.find(c => c.phone === selectedChatPhone);
  const activeMessagesLength = activeChat?.messages?.length || 0;

  // Scroll to the bottom ONLY when the selected chat changes OR the number of messages in the active chat changes!
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChatPhone, activeMessagesLength]);
  const filteredChats = chats.filter(chat => {
    const nameMatch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const phoneMatch = chat.phone.includes(searchQuery);
    return nameMatch || phoneMatch;
  });

  // Login handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (passcode === SECURE_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect admin passcode. Access denied.');
    }
  };

  // Send message handler
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChatPhone || isSending) return;

    const payloadText = messageInput;
    setMessageInput('');
    setIsSending(true);

    try {
      const response = await fetch('/send_agent_reply.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: selectedChatPhone,
          message: payloadText
        })
      });

      const resData = await response.json();
      if (resData.status !== 'success') {
        throw new Error(resData.message || 'Delivery failed');
      }

      // Optimistic locally injected log update to make UX immediate
      setChats(prev => prev.map(chat => {
        if (chat.phone === selectedChatPhone) {
          return {
            ...chat,
            unread: false,
            messages: [
              ...chat.messages,
              {
                sender: 'agent',
                text: payloadText,
                timestamp: Math.floor(Date.now() / 1000)
              }
            ]
          };
        }
        return chat;
      }));

    } catch (err) {
      alert("Failed to send WhatsApp message: " + err.message);
      setMessageInput(payloadText); // Restore input in case of error
    } finally {
      setIsSending(false);
    }
  };

  // Reactivate Chatbot (Resolve Chat)
  const handleReactivateBot = async () => {
    if (!selectedChatPhone || isResolving) return;
    if (!window.confirm("Are you sure you want to turn the Bot back on? This will end your Live Chat session with this user.")) return;

    setIsResolving(true);
    try {
      const response = await fetch('/resume_bot.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: selectedChatPhone })
      });

      const resData = await response.json();
      if (resData.status === 'success') {
        // Update local status representation
        setChats(prev => prev.map(chat => {
          if (chat.phone === selectedChatPhone) {
            return {
              ...chat,
              is_paused: false,
              status: 'bot',
              messages: [
                ...chat.messages,
                {
                  sender: 'bot',
                  text: 'Bot replies reactivated. Human agent left chat.',
                  timestamp: Math.floor(Date.now() / 1000)
                }
              ]
            };
          }
          return chat;
        }));
      }
    } catch (err) {
      alert("Error reactivating chatbot: " + err.message);
    } finally {
      setIsResolving(false);
    }
  };

  // Quick template insertion helpers
  const quickTemplates = [
    "Hi there! Welcome to Nexlifly. Amit here, how can I help you?",
    "Thanks for reaching out! Let me check this for you right away.",
    "Could you share your email address and business domain so we can prepare a tailored custom quote?",
    "Awesome! Let me connect you with our DevOps team to discuss the deployment details.",
    "Great! Let me resolve this conversation so you can interact with our automated menu again."
  ];

  const handleTemplateClick = (tmplText) => {
    setMessageInput(tmplText);
  };

  // Format Unix Timestamp
  const formatTime = (unixTimestamp) => {
    if (!unixTimestamp) return '';
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // AUTHENTICATION SCREEN WRAPPER
  if (!isAuthenticated) {
    return (
      <div className="admin-chat-container">
        <div className="passcode-screen">
          <form className="passcode-card" onSubmit={handleAuthSubmit}>
            <div className="passcode-icon">
              <FiLock />
            </div>
            <h2>Nexlifly Admin</h2>
            <p>Enter secret passcode to access Live Customer Chat Dashboard</p>
            <input 
              type="password" 
              placeholder="••••"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              maxLength={25}
              required
              autoFocus
            />
            <button className="passcode-btn" type="submit">Unlock Dashboard</button>
            {authError && <p className="passcode-error">{authError}</p>}
          </form>
        </div>
      </div>
    );
  }

  // CORE LIVE CHAT DASHBOARD
  return (
    <div className="admin-chat-container">
      <div className="chat-dashboard">
        
        {/* --- LEFT SIDEBAR (Chats List) --- */}
        <div className="chat-sidebar">
          <div className="sidebar-header">
            <h2>
              Live Inbox <span className="pulse-badge"></span>
            </h2>
            <div className="search-bar">
              <FiSearch />
              <input 
                type="text" 
                placeholder="Search customers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="chat-list">
            {filteredChats.length === 0 ? (
              <div className="empty-sidebar">No active chat sessions found</div>
            ) : (
              filteredChats.map((chat) => {
                const initials = chat.name ? chat.name.charAt(0).toUpperCase() : 'C';
                const hasUnread = chat.unread === true;
                
                return (
                  <div 
                    key={chat.phone} 
                    className={`chat-item ${selectedChatPhone === chat.phone ? 'active' : ''}`}
                    onClick={() => setSelectedChatPhone(chat.phone)}
                  >
                    <div className="chat-avatar">
                      {initials}
                      <span className={`status-indicator ${chat.is_paused ? 'live' : 'bot'}`}></span>
                    </div>
                    <div className="chat-info">
                      <div className="chat-info-top">
                        <span className="chat-name">{chat.name}</span>
                        <span className="chat-time">{formatTime(chat.last_updated)}</span>
                      </div>
                      <div className="chat-preview-container">
                        <span className="chat-preview">{chat.last_message || "No messages yet"}</span>
                        {hasUnread && <span className="unread-badge">New</span>}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* --- RIGHT PANEL (Message Window) --- */}
        <div className="chat-window">
          {activeChat ? (
            <>
              {/* Chat Window Header */}
              <div className="chat-header">
                <div className="header-user-info">
                  <div className="header-details">
                    <h3>{activeChat.name}</h3>
                    <p>
                      <FiPhone style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                      +{activeChat.phone}
                    </p>
                  </div>
                  <span className={`chat-status-tag ${activeChat.is_paused ? 'live' : 'bot'}`}>
                    {activeChat.is_paused ? 'Live Chat' : 'Bot Active'}
                  </span>
                </div>
                <div className="header-actions">
                  {activeChat.is_paused && (
                    <button 
                      className="btn-action resolve" 
                      onClick={handleReactivateBot}
                      disabled={isResolving}
                    >
                      <FiCheckCircle />
                      {isResolving ? "Enabling Bot..." : "Resolve & Turn Bot On"}
                    </button>
                  )}
                </div>
              </div>

              {/* Message History Feed */}
              <div className="messages-container">
                {activeChat.messages && activeChat.messages.length > 0 ? (
                  activeChat.messages.map((msg, index) => {
                    const senderClass = msg.sender === 'agent' ? 'agent' : (msg.sender === 'bot' ? 'bot' : 'customer');
                    return (
                      <div key={index} className={`message-wrapper ${senderClass}`}>
                        <div className="message-bubble">
                          {msg.text}
                        </div>
                        <div className="message-meta">
                          <FiClock /> {formatTime(msg.timestamp)}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="no-chat-selected">No history available for this contact</div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Send Input Panel */}
              <div className="chat-input-area">
                <div className="quick-templates">
                  {quickTemplates.map((text, idx) => (
                    <button 
                      key={idx} 
                      className="template-btn" 
                      onClick={() => handleTemplateClick(text)}
                    >
                      {text.length > 30 ? text.substring(0, 30) + "..." : text}
                    </button>
                  ))}
                </div>
                <form className="input-wrapper" onSubmit={handleSendMessage}>
                  <textarea 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder={activeChat.is_paused ? "Type a WhatsApp reply..." : "Bot is currently active. User must select 'Talk with us' to enable live messaging..."}
                    disabled={!activeChat.is_paused || isSending}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                  <button 
                    className="btn-send" 
                    type="submit" 
                    disabled={!messageInput.trim() || !activeChat.is_paused || isSending}
                  >
                    <FiSend />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <div className="no-chat-icon">
                <FiMessageSquare />
              </div>
              <h3>Nexlifly Support Center</h3>
              <p>Select a contact from the left sidebar to load live conversation logs and send replies</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default AdminChat;
