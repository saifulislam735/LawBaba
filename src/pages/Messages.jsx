import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, CalendarIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import { lawyers as mockLawyers } from '../data/mockData'; // Adjust path as needed

const Messages = () => {
  const { id } = useParams(); // Lawyer ID from the URL
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null); // For auto-scrolling

  // Mock initial messages (replace with API fetch in production)
  const initialMessages = [
    {
      id: 1,
      senderId: 'lawyer',
      text: 'Hello! How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      file: null,
    },
  ];

  useEffect(() => {
    const fetchSelectedLawyer = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const lawyer = mockLawyers.find((l) => String(l.id) === String(id));
        if (!lawyer) throw new Error('Lawyer not found');
        setSelectedLawyer(lawyer);
        setMessages(initialMessages);
      } catch (error) {
        console.error('Failed to fetch lawyer:', error);
        setSelectedLawyer(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSelectedLawyer();
  }, [id]);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() && !file) return;

    const newMessage = {
      id: messages.length + 1,
      senderId: 'me',
      text: message || '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      file: file ? { name: file.name, url: URL.createObjectURL(file) } : null, // Mock file URL
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    setFile(null);
    // In production, send to API: POST /api/messages/{lawyerId} with FormData
    console.log(`Message sent to lawyer ${id}:`, newMessage);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-600">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <span className="ml-2">Loading chat...</span>
      </div>
    );
  }

  if (!selectedLawyer) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-red-600">
        Lawyer not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={selectedLawyer.imageUrl || 'https://via.placeholder.com/48'}
              alt={selectedLawyer.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{selectedLawyer.name}</h2>
              <p className="text-sm text-gray-600">{selectedLawyer.specialization}</p>
            </div>
          </div>
          <Link
            to={`/lawyers/${id}/book`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 flex items-center gap-2"
          >
            <CalendarIcon className="h-5 w-5" />
            Schedule Consultation
          </Link>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 shadow-sm ${
                  msg.senderId === 'me' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.file && (
                  <div className="mt-2">
                    {msg.file.name.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                      <img
                        src={msg.file.url}
                        alt={msg.file.name}
                        className="max-w-full h-auto rounded-md"
                        style={{ maxHeight: '200px' }}
                      />
                    ) : (
                      <a
                        href={msg.file.url}
                        download={msg.file.name}
                        className={`flex items-center gap-2 underline ${
                          msg.senderId === 'me' ? 'text-blue-100' : 'text-blue-600'
                        }`}
                      >
                        <PaperClipIcon className="h-5 w-5" />
                        {msg.file.name}
                      </a>
                    )}
                  </div>
                )}
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
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSendMessage} className="flex space-x-4 items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="relative cursor-pointer">
              <PaperClipIcon className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 w-full h-full"
                accept="image/*,.pdf,.doc,.docx"
              />
            </label>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 flex items-center gap-2"
              disabled={!message.trim() && !file}
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              Send
            </button>
          </form>
          {file && (
            <div className="mt-2 text-sm text-gray-600">
              Attached: {file.name}{' '}
              <button
                onClick={() => setFile(null)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;