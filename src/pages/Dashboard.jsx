// Dashboard.jsx
import { useState } from "react";
import ConsultationList from "../components/dashboard/ConsultationList";
import DocumentList from "../components/dashboard/DocumentList";
import ClientList from "../components/dashboard/ClientList";
import DashboardStats from "../components/dashboard/DashboardStats";
import MessageCenter from "../components/dashboard/MessageCenter";
import { Calendar, FileText, Users, Briefcase, MessageCircle, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useTranslation } from "../hooks/useTranslation";
import logo from '../../public/logo drk.png';

const Dashboard = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        client: "অনিক ইসলাম",
        date: "2025-03-01",
        time: "09:00 PM",
        type: "Initial Consultation",
        status: "Scheduled",
      },
      {
        id: 2,
        client: "সানজানা আক্তার",
        date: "2025-02-28",
        time: "04:00 PM",
        type: "Follow-up Consultation",
        status: "Completed",
      },
    ],
    documents: [
      {
        id: 101,
        title: "দলিল.pdf",
        uploadedBy: "অনিক ইসলাম",
        uploadDate: "2025-03-01",
        fileType: "PDF",
        size: "2.5 MB",
        url: "/documents/dolil.pdf",
        status: "Active"
      },
      {
        id: 102,
        title: "চুক্তিপত্র.pdf",
        uploadedBy: "জয় হাসান",
        uploadDate: "2025-03-06",
        fileType: "PDF",
        size: "1.8 MB",
        url: "/documents/contract.pdf",
        status: "Active"
      },
      {
        id: 103,
        title: "আপিল নথি.docx",
        uploadedBy: "সানজানা আক্তার",
        uploadDate: "2025-02-25",
        fileType: "DOCX",
        size: "450 KB",
        url: "/documents/appeal.docx",
        status: "Active"
      },
    ],
    clients: [
      {
        id: 201,
        name: "অনিক ইসলাম",
        contact: "+8801700000000",
        email: "anik@example.com",
        lastConsultation: "2025-03-01",
        status: "Active",
      },
      {
        id: 202,
        name: "জয় হাসান",
        contact: "+8801711111111",
        email: "joyhasan@example.com",
        lastConsultation: "2025-02-28",
        status: "Inactive",
      },
      {
        id: 203,
        name: "সানজানা আক্তার",
        contact: "+8801722222222",
        email: "sanjana@example.com",
        lastConsultation: "2025-02-25",
        status: "Active",
      },
    ],
  };

  const navigationItems = [
    { view: "overview", label: "Overview", icon: Briefcase },
    { view: "consultations", label: "Consultations", icon: Calendar },
    { view: "documents", label: "Documents", icon: FileText },
    { view: "clients", label: "Clients", icon: Users },
    { view: "messages", label: "Messages", icon: MessageCircle },
  ];

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <DashboardStats stats={dummyData.stats} />;
      case "consultations":
        return <ConsultationList consultations={dummyData.consultations} />;
      case "documents":
        return <DocumentList documents={dummyData.documents} />;
      case "clients":
        return <ClientList clients={dummyData.clients} />;
      case "messages":
        return <MessageCenter clients={dummyData.clients} />;
      default:
        return <DashboardStats stats={dummyData.stats} />;
    }
  };

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

        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full px-4 py-2 bg-white rounded-md shadow-md flex items-center justify-between"
          >
            <span className="font-medium">{navigationItems.find(item => item.view === activeView)?.label}</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className={`md:flex md:space-x-4 mb-6 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {navigationItems.map(({ view, label, icon: Icon }) => (
              <button
                key={view}
                className={`px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center justify-center md:justify-start
                  ${activeView === view ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                onClick={() => {
                  setActiveView(view);
                  setIsMenuOpen(false);
                }}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-x-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;