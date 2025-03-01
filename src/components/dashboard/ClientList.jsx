
const ClientList = ({ clients }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Clients</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Last Consultation</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{client.name}</td>
                <td className="px-6 py-4">{client.contact}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{new Date(client.lastConsultation).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;