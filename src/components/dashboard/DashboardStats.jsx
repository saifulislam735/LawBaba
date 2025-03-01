// components/dashboard/DashboardStats.jsx
import { Calendar, Users, FileText, Clock } from 'lucide-react';

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center">
          <Calendar className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Total Consultations</p>
            <p className="text-2xl font-bold text-gray-800">{stats.totalConsultations}</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-center">
          <Clock className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Pending Consultations</p>
            <p className="text-2xl font-bold text-gray-800">{stats.pendingConsultations}</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="flex items-center">
          <Users className="w-8 h-8 text-purple-600 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Total Clients</p>
            <p className="text-2xl font-bold text-gray-800">{stats.totalClients}</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <div className="flex items-center">
          <FileText className="w-8 h-8 text-yellow-600 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Total Documents</p>
            <p className="text-2xl font-bold text-gray-800">{stats.totalDocuments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;