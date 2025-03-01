// components/dashboard/DocumentList.jsx
import { FileText, Download } from 'lucide-react';

const DocumentList = ({ documents }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Documents</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Uploaded By</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Size</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  {doc.title}
                </td>
                <td className="px-6 py-4">{doc.uploadedBy}</td>
                <td className="px-6 py-4">{new Date(doc.uploadDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{doc.fileType}</td>
                <td className="px-6 py-4">{doc.size}</td>
                <td className="px-6 py-4">
                  <a href={doc.url} download className="text-blue-600 hover:text-blue-800">
                    <Download className="w-5 h-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentList;