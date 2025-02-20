
import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"

const MessageCenter = ({ clients }) => {
    const [selectedClient, setSelectedClient] = useState(null)
    const [message, setMessage] = useState("")

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim()) {
            // Here you would typically send the message to your backend
            console.log("Sending message to client:", selectedClient.name, "Message:", message)
            setMessage("")
        }
    }

    return (
        <div className="flex h-[600px] bg-white rounded-lg shadow-md">
            {/* Client List */}
            <div className="w-1/3 border-r border-gray-200">
                <h2 className="text-xl font-semibold p-4 border-b">Clients</h2>
                <div className="overflow-y-auto h-[calc(100%-60px)]">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedClient?.id === client.id ? "bg-blue-50" : ""
                                }`}
                            onClick={() => setSelectedClient(client)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{client.name}</h3>
                                    <p className="text-sm text-gray-600">{client.caseType}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 mt-1 truncate">{client.lastMessage}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Area */}
            <div className="w-2/3 flex flex-col">
                {selectedClient ? (
                    <>
                        <div className="p-4 border-b">
                            <h2 className="text-xl font-semibold">{selectedClient.name}</h2>
                            <p className="text-sm text-gray-600">{selectedClient.caseType}</p>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            {selectedClient.messages.map((msg, index) => (
                                <div key={index} className={`mb-4 ${msg.from === "lawyer" ? "text-right" : ""}`}>
                                    <div
                                        className={`inline-block p-2 rounded-lg ${msg.from === "lawyer" ? "bg-blue-100" : "bg-gray-100"}`}
                                    >
                                        {msg.text}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 border-t flex">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <MessageCircle className="w-12 h-12 mr-4" />
                        <p>Select a client to start messaging</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageCenter

