

import { useState } from "react"
import "./chat-interface.css"

const legalQuestions = [
    {
        question: "আমি আমার নাম পরিবর্তন করতে চাই।",
        answer: "আপনাকে একটি সিভিল আইনজীবীর সাথে যোগাযোগ করতে হবে। বিস্তারিত সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় যান, 'সিভিল আইনজীবী' বিভাগ অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "আমার চাচা সম্পত্তি থেকে আমাদের অনৈতিক উপায়ে আলাদা করে দিয়েছে। এখন আমরা কি করতে পারি?",
        answer: "আপনাকে একটি সিভিল আইনজীবীর সাথে যোগাযোগ করতে হবে। বিস্তারিত সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় যান, 'সিভিল আইনজীবী' বিভাগ অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    }
    ,
    {
        question: "My landlord is trying to evict me unfairly. What should I do?",
        answer: "Please consult a Real Estate or Civil Lawyer. For further assistance, visit our lawyer page, search for the 'Real Estate' or 'Civil Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "কোনো কোম্পানি আমার টাকা পরিশোধ করছে না, আমি কী আইনি ব্যবস্থা নিতে পারি?",
        answer: "আপনাকে একজন ব্যবসায়িক বা কর্পোরেট আইনজীবীর সাহায্য নিতে হবে। আরও সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় যান, 'বিজনেস/কর্পোরেট আইনজীবী' বিভাগ খুঁজুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "I need a divorce. Which lawyer should I contact?",
        answer: "Please consult a Family Lawyer. For further help, visit our lawyer page, search for the 'Family Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "আমার চাকুরিদাতা অন্যায়ভাবে আমাকে চাকরি থেকে বাদ দিয়েছে, আমি কী করতে পারি?",
        answer: "আপনাকে একজন শ্রম ও কর্মসংস্থান আইনজীবীর পরামর্শ নিতে হবে। বিস্তারিত জানার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'শ্রম আইনজীবী' বিভাগটি অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "I want to register a trademark for my business.",
        answer: "Please consult an Intellectual Property Lawyer. For more details, visit our lawyer page, search for the 'Intellectual Property Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "আমার নামে মিথ্যা ফৌজদারি মামলা হয়েছে, আমি কী করবো?",
        answer: "আপনাকে একজন ফৌজদারি (ক্রিমিনাল) আইনজীবীর সাথে কথা বলতে হবে। আরও সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'ক্রিমিনাল আইনজীবী' বিভাগটি দেখুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "Someone has illegally occupied my property.",
        answer: "Please consult a Real Estate Lawyer. For additional assistance, visit our lawyer page, search for the 'Real Estate Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "বিদেশে কাজের জন্য ভিসা সংক্রান্ত আইনি সহায়তা চাই।",
        answer: "আপনাকে একজন ইমিগ্রেশন আইনজীবীর পরামর্শ নিতে হবে। বিস্তারিত জানার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'ইমিগ্রেশন আইনজীবী' বিভাগ অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "I want to create a will for estate planning.",
        answer: "Please consult an Estate Planning Lawyer. For more information, visit our lawyer page, search for the 'Estate Planning Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "আমি জব মিসডিসিপ্লিনের অভিযোগ নিয়ে সমস্যায় আছি, আমি কি করবো?",
        answer: "আপনাকে একজন শ্রম আইনজীবীর সাথে পরামর্শ করা উচিত। আরও সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'শ্রম আইনজীবী' বিভাগটি অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "My business contract has been breached. Who should I consult?",
        answer: "Please consult a Commercial or Contract Lawyer. For further assistance, visit our lawyer page, search for the relevant category, and then select your lawyer and book a consultation."
    },
    {
        question: "আমি একটি রিয়েল এস্টেট লেনদেনে জড়িত আছি, কোন আইনজীবীর সাহায্য নেবো?",
        answer: "আপনাকে একজন রিয়েল এস্টেট আইনজীবীর সাথে যোগাযোগ করতে হবে। বিস্তারিত সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'রিয়েল এস্টেট আইনজীবী' বিভাগটি অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    },
    {
        question: "I have issues regarding my company’s partnership agreement.",
        answer: "Please consult a Corporate Lawyer for partnership disputes. For further assistance, visit our lawyer page, search for the 'Corporate Lawyer' category, and then select your lawyer and book a consultation."
    },
    {
        question: "আমার নিজের ব্যবসা শুরু করতে চাই, কোন আইনজীবীর সহায়তা নেবো?",
        answer: "আপনাকে একজন বাণিজ্যিক আইনজীবীর সাথে পরামর্শ করা উচিত। আরও সহায়তার জন্য, আমাদের আইনজীবী পৃষ্ঠায় 'বাণিজ্যিক আইনজীবী' বিভাগটি অনুসন্ধান করুন, এবং তারপর আপনার আইনজীবী নির্বাচন করে পরামর্শ বুক করুন।"
    }
];

function ChatInterface({ onClose }) {
    const [messages, setMessages] = useState([
        { text: "Hello! I'm মুহুরীAI, your virtual legal assistant. How can I help you today?", isUser: false },
    ])
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }])
            setInput("")

            // Simple matching logic for demo purposes
            const lowerInput = input.toLowerCase()
            const matchedQuestion = legalQuestions.find((q) => lowerInput.includes(q.question.toLowerCase()))

            setTimeout(() => {
                if (matchedQuestion) {
                    setMessages((prev) => [...prev, { text: matchedQuestion.answer, isUser: false }])
                } else {
                    setMessages((prev) => [
                        ...prev,
                        {
                            text: "I'm sorry, I don't have specific information on that topic. For personalized legal advice, it's best to consult with a qualified attorney.",
                            isUser: false,
                        },
                    ])
                }
            }, 1000)
        }
    }

    return (
        <div className="chat-container z-50">
            <div className="chat-header flex justify-between items-center p-4 bg-gray-100 border-b">
                <div className="header-title flex items-center space-x-3">
                    <div className="bot-avatar bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                        মু
                    </div>
                    <h2 className="text-lg font-semibold">মুহুরীAI Legal Assistant</h2>
                </div>
                <button
                    onClick={onClose}
                    className="close-button text-gray-600 hover:text-red-500 text-xl font-bold"
                    aria-label="Close chat"
                >
                    ✕
                </button>
            </div>

            <div className="chat-messages" id="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message-wrapper ${message.isUser ? "user-message" : "bot-message"}`}>
                        {!message.isUser && <div className="bot-avatar">মু</div>}
                        <div className="message">{message.text}</div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="chat-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your legal question..."
                    className="chat-input"
                />
                <button type="submit" className="send-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default ChatInterface

