import { useState } from "react"
import ConsultationList from "../components/dashboard/ConsultationList"
import DocumentList from "../components/dashboard/DocumentList"
import ClientList from "../components/dashboard/ClientList"
import DashboardStats from "../components/dashboard/DashboardStats"
import MessageCenter from "../components/dashboard/MessageCenter"
import { Calendar, FileText, Users, Briefcase, MessageCircle, Menu } from 'lucide-react'
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { useTranslation } from "../hooks/useTranslation"
import logo from '../../public/logo drk.png'

const Dashboard = () => {
  const { t } = useTranslation()
  const [activeView, setActiveView] = useState("overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Define the dummy data
  const dummyData = {
    stats: {
      totalConsultations: 42,
      pendingConsultations: 12,
      totalClients: 78,
      totalDocuments: 156,
    },
    consultations: [
      {
        id: 1,
        client: "Md. Shakil Ahmed",
        date: "2025-02-22",
        time: "10:00 AM",
        type: "Initial Consultation",
        status: "Scheduled",
      },
      // ... rest of the consultations data
    ],
    documents: [
      // ... documents data
    ],
    clients: [
      // ... clients data
    ],
  }

  const navigationItems = [
    { view: "overview", label: "Overview", icon: Briefcase },
    { view: "consultations", label: "Consultations", icon: Calendar },
    { view: "documents", label: "Documents", icon: FileText },
    { view: "clients", label: "Clients", icon: Users },
    { view: "messages", label: "Messages", icon: MessageCircle },
  ]

  // Function to render the active view content
  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <DashboardStats stats={dummyData.stats} />
      case "consultations":
        return <ConsultationList consultations={dummyData.consultations} />
      case "documents":
        return <DocumentList documents={dummyData.documents} />
      case "clients":
        return <ClientList clients={dummyData.clients} />
      case "messages":
        return <MessageCenter clients={dummyData.clients} />
      default:
        return <DashboardStats stats={dummyData.stats} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-20">
      <div className="flex justify-between items-center p-4 md:px-4">
        <Link to="/">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium bg-gray-100 px-3 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            <AiOutlineHome className="text-xl" />
            <span className="hidden sm:inline">{t('home')}</span>
          </button>
        </Link>
        <Link to='/'>
          <img src={logo} className="h-16 md:h-24" alt="Logo" />
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Lawyer Dashboard</h1>
          <div className="flex flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="whitespace-nowrap">New Consultation</span>
            </button>
            <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 ease-in-out flex items-center justify-center">
              <FileText className="w-5 h-5 mr-2" />
              <span className="whitespace-nowrap">Upload Document</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full px-4 py-2 bg-white rounded-md shadow-md flex items-center justify-between"
          >
            <span className="font-medium">{navigationItems.find(item => item.view === activeView)?.label}</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Navigation */}
        <div className={`md:flex md:space-x-4 mb-6 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {navigationItems.map(({ view, label, icon: Icon }) => (
              <button
                key={view}
                className={`px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center justify-center md:justify-start
                  ${activeView === view
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"}`}
                onClick={() => {
                  setActiveView(view)
                  setIsMenuOpen(false)
                }}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Dashboard