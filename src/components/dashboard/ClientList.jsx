const ClientList = ({ clients }) => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Client List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Phone</th>
                <th className="py-2 px-4 text-left">Case Type</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{client.name}</td>
                  <td className="py-2 px-4">{client.email}</td>
                  <td className="py-2 px-4">{client.phone}</td>
                  <td className="py-2 px-4">{client.caseType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ClientList
  
  