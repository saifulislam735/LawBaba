import { useState } from 'react'
import ConsultationList from '../components/dashboard/ConsultationList'
import DocumentList from '../components/dashboard/DocumentList'
import ClientList from '../components/dashboard/ClientList'
import DashboardStats from '../components/dashboard/DashboardStats'

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            New Consultation
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Upload Document
          </button>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${activeView === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          onClick={() => setActiveView('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeView === 'consultations' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          onClick={() => setActiveView('consultations')}
        >
          Consultations
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeView === 'documents' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          onClick={() => setActiveView('documents')}
        >
          Documents
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeView === 'clients' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          onClick={() => setActiveView('clients')}
        >
          Clients
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="bg-white rounded-lg shadow-md">
        {activeView === 'overview' && <DashboardStats />}
        {activeView === 'consultations' && <ConsultationList />}
        {activeView === 'documents' && <DocumentList />}
        {activeView === 'clients' && <ClientList />}
      </div>
    </div>
  )
}

export default Dashboard
