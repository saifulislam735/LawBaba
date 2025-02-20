import { Calendar, FileText, Users, Briefcase } from "lucide-react"

const DashboardStats = ({ stats }) => {
  const statItems = [
    {
      title: "Total Consultations",
      value: stats.totalConsultations,
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pending Consultations",
      value: stats.pendingConsultations,
      icon: Briefcase,
      color: "bg-yellow-100 text-yellow-600",
    },
    { title: "Total Clients", value: stats.totalClients, icon: Users, color: "bg-green-100 text-green-600" },
    { title: "Total Documents", value: stats.totalDocuments, icon: FileText, color: "bg-purple-100 text-purple-600" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => (
        <div key={index} className={`${item.color} p-6 rounded-lg shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
            </div>
            <item.icon className="w-12 h-12 opacity-20" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats

