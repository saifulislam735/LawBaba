import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Messages() {
  const { id } = useParams();
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  // Dummy data - replace with API calls
  const conversations = [
    {
      id: '1',
      name: 'Sarah Wilson',
      role: 'Lawyer',
      lastMessage: 'Thank you for your inquiry about the contract review.',
      time: '2 hours ago',
      unread: 2,
    },
    {
      id: '2',
      name: 'John Smith',
      role: 'Lawyer',
      lastMessage: 'I can help you with your case. Let me know when...',
      time: '1 day ago',
      unread: 0,
    },
  ];

  // Mock messages for the selected chat
  const mockMessages = [
    {
      id: 1,
      senderId: 1,
      text: 'Hello! How can I help you today?',
      timestamp: '10:00 AM',
    },
    {
      id: 2,
      senderId: 'me',
      text: 'Hi, I need help with a contract review. Would you be available for a consultation?',
      timestamp: '10:05 AM',
    },
    {
      id: 3,
      senderId: 1,
      text: 'Of course! I specialize in contract law. I have some availability next week. Would you like to schedule a consultation?',
      timestamp: '10:10 AM',
    },
  ];

  useEffect(() => {
    if (id) {
      const chat = conversations.find(c => c.id === id);
      setSelectedChat(chat || conversations[0]);
    }
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add message to the chat
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="py-12">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 divide-x h-[600px]">
          {/* Conversation List */}
          <div className="col-span-4 flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Messages</h2>
            </div>
            <div className="overflow-y-auto flex-1">
              {conversations.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{chat.name}</h3>
                      <p className="text-sm text-gray-600">{chat.role}</p>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                        {chat.lastMessage}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{chat.time}</p>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full mt-1">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
                      <p className="text-sm text-gray-600">{selectedChat.role}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Schedule Consultation
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          msg.senderId === 'me'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.senderId === 'me' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage} className="flex space-x-4">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}