

import { useState } from "react"
import ConsultationList from "../components/dashboard/ConsultationList"
import DocumentList from "../components/dashboard/DocumentList"
import ClientList from "../components/dashboard/ClientList"
import DashboardStats from "../components/dashboard/DashboardStats"
import MessageCenter from "../components/dashboard/MessageCenter"
import { Calendar, FileText, Users, Briefcase, MessageCircle } from "lucide-react"

const Dashboard = () => {
  const [activeView, setActiveView] = useState("overview")

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
      { id: 2, client: "Farhana Begum", date: "2025-02-22", time: "2:00 PM", type: "Follow-up", status: "Confirmed" },
      { id: 3, client: "Rahman Ali", date: "2025-02-23", time: "11:30 AM", type: "Case Review", status: "Pending" },
      {
        id: 4,
        client: "Tanima Sultana",
        date: "2025-02-24",
        time: "3:00 PM",
        type: "Initial Consultation",
        status: "Scheduled",
      },
      {
        id: 5,
        client: "Khaled Mahmud",
        date: "2025-02-25",
        time: "9:00 AM",
        type: "Court Preparation",
        status: "Confirmed",
      },
    ],
    documents: [
      { id: 1, name: "Case Brief - Md. Shakil Ahmed", type: "PDF", dateUploaded: "2025-02-20" },
      { id: 2, name: "Contract - Tech Solutions", type: "DOCX", dateUploaded: "2025-02-19" },
      { id: 3, name: "Evidence Photos - Rahman Case", type: "ZIP", dateUploaded: "2025-02-18" },
      { id: 4, name: "Deposition Transcript - Tanima vs. State", type: "PDF", dateUploaded: "2025-02-17" },
      { id: 5, name: "Settlement Agreement - Mahmud", type: "PDF", dateUploaded: "2025-02-16" },
    ],
    clients: [
      {
        id: 1,
        name: "Md. Shakil Ahmed",
        email: "shakil@example.com",
        phone: "(017) 123-4567",
        caseType: "Personal Injury",
        lastMessage: "I've reviewed the settlement offer.",
        messages: [
          {
            from: "lawyer",
            text: "Hello Shakil, I've reviewed the settlement offer from the insurance company.",
            time: "2025-02-20 10:30 AM",
          },
          {
            from: "client",
            text: "Thank you for letting me know. What do you think about it?",
            time: "2025-02-20 11:15 AM",
          },
          {
            from: "lawyer",
            text: "I believe we can negotiate for a better offer. Let's discuss this in our next meeting.",
            time: "2025-02-20 11:45 AM",
          },
        ],
      },
      {
        id: 2,
        name: "Farhana Begum",
        email: "farhana@example.com",
        phone: "(018) 987-6543",
        caseType: "Corporate Law",
        lastMessage: "Documents for the merger are ready.",
        messages: [
          {
            from: "lawyer",
            text: "Farhana, I've prepared the documents for the upcoming merger.",
            time: "2025-02-19 3:00 PM",
          },
          { from: "client", text: "Great, when can we review them together?", time: "2025-02-19 4:30 PM" },
          {
            from: "lawyer",
            text: "How about tomorrow at 2 PM? I'll send a calendar invite.",
            time: "2025-02-19 5:00 PM",
          },
        ],
      },
      {
        id: 3,
        name: "Rahman Ali",
        email: "rahman@example.com",
        phone: "(019) 246-8135",
        caseType: "Family Law",
        lastMessage: "Court date confirmed for next month.",
        messages: [
          {
            from: "lawyer",
            text: "Rahman, I've received confirmation of our court date for next month.",
            time: "2025-02-18 9:00 AM",
          },
          {
            from: "client",
            text: "Thank you for the update. Do we need to prepare anything specific?",
            time: "2025-02-18 10:30 AM",
          },
          {
            from: "lawyer",
            text: "Yes, let's schedule a meeting to go over the necessary documents and preparation steps.",
            time: "2025-02-18 11:00 AM",
          },
        ],
      },
      {
        id: 4,
        name: "Tanima Sultana",
        email: "tanima@example.com",
        phone: "(015) 369-2580",
        caseType: "Criminal Defense",
        lastMessage: "New evidence has been submitted.",
        messages: [
          {
            from: "lawyer",
            text: "Tanima, I wanted to inform you that new evidence has been submitted in your case.",
            time: "2025-02-17 2:00 PM",
          },
          { from: "client", text: "Is this good news for our defense?", time: "2025-02-17 2:30 PM" },
          {
            from: "lawyer",
            text: "It could be. I need to review it thoroughly. I'll update you once I've analyzed its impact on our case.",
            time: "2025-02-17 3:00 PM",
          },
        ],
      },
      {
        id: 5,
        name: "Khaled Mahmud",
        email: "khaled@example.com",
        phone: "(016) 159-7531",
        caseType: "Real Estate Law",
        lastMessage: "Property inspection report is ready.",
        messages: [
          {
            from: "lawyer",
            text: "Khaled, the property inspection report for your real estate transaction is ready.",
            time: "2025-02-16 11:00 AM",
          },
          {
            from: "client",
            text: "That's great news. Are there any issues we need to address?",
            time: "2025-02-16 11:30 AM",
          },
          {
            from: "lawyer",
            text: "There are a few minor concerns. Let's schedule a call to discuss them in detail.",
            time: "2025-02-16 12:00 PM",
          },
        ],
      },
    ],
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Lawyer Dashboard</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              New Consultation
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 ease-in-out flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="flex space-x-4 mb-6">
          {[
            { view: "overview", label: "Overview", icon: Briefcase },
            { view: "consultations", label: "Consultations", icon: Calendar },
            { view: "documents", label: "Documents", icon: FileText },
            { view: "clients", label: "Clients", icon: Users },
            { view: "messages", label: "Messages", icon: MessageCircle },
          ].map(({ view, label, icon: Icon }) => (
            <button
              key={view}
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center ${activeView === view ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
                }`}
              onClick={() => setActiveView(view)}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeView === "overview" && <DashboardStats stats={dummyData.stats} />}
          {activeView === "consultations" && <ConsultationList consultations={dummyData.consultations} />}
          {activeView === "documents" && <DocumentList documents={dummyData.documents} />}
          {activeView === "clients" && <ClientList clients={dummyData.clients} />}
          {activeView === "messages" && <MessageCenter clients={dummyData.clients} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

