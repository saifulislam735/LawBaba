// components/dashboard/ConsultationList.jsx
// import React from 'react';
// import { Calendar } from 'lucide-react';

const ConsultationList = ({ consultations }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Consultations</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consult) => (
              <tr key={consult.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{consult.client}</td>
                <td className="px-6 py-4">{new Date(consult.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">{consult.time}</td>
                <td className="px-6 py-4">{consult.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    consult.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {consult.status}
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

export default ConsultationList;