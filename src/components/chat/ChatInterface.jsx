import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import { useWebSocket } from '../../hooks/useWebSocket';
import { fileService } from '../../services/api';

const ChatInterface = ({ recipientId, recipientName }) => {
  const [newMessage, setNewMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const { messages, status, error, sendMessage } = useWebSocket(recipientId);

  // Scroll to bottom whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() && attachments.length === 0) return;

    try {
      setIsUploading(true);
      
      // Upload any attachments first
      const uploadedFiles = await Promise.all(
        attachments.map(async (file) => {
          const response = await fileService.uploadFile(file, 'message');
          return response.fileId;
        })
      );

      // Send message with file references
      await sendMessage(newMessage, uploadedFiles);
      
      setNewMessage('');
      setAttachments([]);
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileAttachment = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">{recipientName}</h2>
        <div className="text-sm text-gray-500">
          {status === 'connected' ? 'Online' : 'Connecting...'}
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
              Error: {error.message}
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                } rounded-lg px-4 py-2`}
              >
                <p>{message.content}</p>
                {message.attachments?.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {message.attachments.map((fileId, index) => (
                      <button
                        key={index}
                        onClick={() => fileService.getFile(fileId)}
                        className="flex items-center text-sm text-blue-100 hover:text-white"
                      >
                        <PaperClipIcon className="h-4 w-4 mr-1" />
                        <span>Attachment {index + 1}</span>
                      </button>
                    ))}
                  </div>
                )}
                <span className="text-xs opacity-70 mt-1 block">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Attachments Preview */}
      {attachments.length > 0 && (
        <div className="px-4 py-2 border-t">
          <div className="flex flex-wrap gap-2">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded px-2 py-1"
              >
                <span className="text-sm truncate max-w-[150px]">
                  {file.name}
                </span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            disabled={isUploading}
          >
            <PaperClipIcon className="h-5 w-5" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileAttachment}
            multiple
            className="hidden"
          />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isUploading}
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
            disabled={isUploading || (!newMessage.trim() && attachments.length === 0)}
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
