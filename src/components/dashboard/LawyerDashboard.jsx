import { useState } from 'react';
import {
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const LawyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - In a real app, this would come from your API
  const dashboardData = {
    stats: {
      totalClients: 45,
      activeConsultations: 8,
      pendingRequests: 3,
      totalEarnings: 12500,
    },
    upcomingConsultations: [
      {
        id: 1,
        clientName: 'John Smith',
        date: '2024-02-16',
        time: '10:00 AM',
        type: 'Video Call',
      },
      // Add more consultations
    ],
    recentMessages: [
      {
        id: 1,
        clientName: 'Sarah Johnson',
        message: 'Thank you for the consultation...',
        timestamp: '2024-02-15T14:30:00',
      },
      // Add more messages
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Clients</p>
              <h3 className="text-2xl font-bold">{dashboardData.stats.totalClients}</h3>
            </div>
            <UserGroupIcon className="h-10 w-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Consultations</p>
              <h3 className="text-2xl font-bold">{dashboardData.stats.activeConsultations}</h3>
            </div>
            <CalendarIcon className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Requests</p>
              <h3 className="text-2xl font-bold">{dashboardData.stats.pendingRequests}</h3>
            </div>
            <ChatBubbleLeftRightIcon className="h-10 w-10 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Earnings</p>
              <h3 className="text-2xl font-bold">${dashboardData.stats.totalEarnings}</h3>
            </div>
            <ChartBarIcon className="h-10 w-10 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Consultations */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Consultations</h2>
            <div className="space-y-4">
              {dashboardData.upcomingConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{consultation.clientName}</h3>
                    <p className="text-sm text-gray-500">
                      {consultation.date} at {consultation.time}
                    </p>
                    <span className="text-sm text-blue-600">{consultation.type}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">
                      Reschedule
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
          <div className="space-y-4">
            {dashboardData.recentMessages.map((message) => (
              <div key={message.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{message.clientName}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">{message.message}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
            View All Messages
          </button>
        </div>
      </div>

      {/* Document Management Section */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Documents</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
              <DocumentTextIcon className="h-5 w-5" />
              Upload Document
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Document cards would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
