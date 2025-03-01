// components/dashboard/MessageCenter.jsx
import { MessageCircle } from 'lucide-react';

const MessageCenter = ({ clients }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Message Center</h2>
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="font-medium text-gray-800">{client.name}</p>
                  <p className="text-sm text-gray-600">{client.email}</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCenter;