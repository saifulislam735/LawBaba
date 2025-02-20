import { FileText } from "lucide-react"

const DocumentList = ({ documents }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recent Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((document) => (
          <div
            key={document.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center mb-2">
              <FileText className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="font-semibold text-lg truncate">{document.name}</h3>
            </div>
            <p className="text-sm text-gray-600">Type: {document.type}</p>
            <p className="text-sm text-gray-600">Uploaded: {document.dateUploaded}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DocumentList

