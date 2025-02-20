const ConsultationList = ({ consultations }) => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Consultations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Client</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consultation) => (
                <tr key={consultation.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{consultation.client}</td>
                  <td className="py-2 px-4">{consultation.date}</td>
                  <td className="py-2 px-4">{consultation.time}</td>
                  <td className="py-2 px-4">{consultation.type}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        consultation.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : consultation.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {consultation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ConsultationList
  
  