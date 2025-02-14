import { useState } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ConversationList = ({ conversations, onSelectConversation, selectedId }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col border-r">
      {/* Search Bar */}
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <button
            key={conversation.id}
            className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 ${
              selectedId === conversation.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelectConversation(conversation)}
          >
            {conversation.avatar ? (
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-500" />
              </div>
            )}
            <div className="flex-1 text-left">
              <h3 className="font-medium">{conversation.name}</h3>
              <p className="text-sm text-gray-500 truncate">
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unreadCount > 0 && (
              <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {conversation.unreadCount}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
