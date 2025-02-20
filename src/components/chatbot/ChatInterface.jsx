
import { useState } from "react"

const legalQuestions = [
    {
        question: "আমি আমার নাম পরিবর্তন করতে চাই।",
        answer: "আপনাকে একটি সিভিল আইনজীবীর সাথে যোগাযোগ করতে হবে।"
    },
    {
        question: "My landlord is trying to evict me unfairly. What should I do?",
        answer: "Please consult a Real Estate or Civil Lawyer."
    },
    {
        question: "কোনো কোম্পানি আমার টাকা পরিশোধ করছে না, আমি কী আইনি ব্যবস্থা নিতে পারি?",
        answer: "আপনাকে একজন ব্যবসায়িক বা কর্পোরেট আইনজীবীর সাহায্য নিতে হবে।"
    },
    {
        question: "I need a divorce. Which lawyer should I contact?",
        answer: "Please consult a Family Lawyer."
    },
    {
        question: "আমার চাকুরিদাতা অন্যায়ভাবে আমাকে চাকরি থেকে বাদ দিয়েছে, আমি কী করতে পারি?",
        answer: "আপনাকে একজন শ্রম ও কর্মসংস্থান আইনজীবীর পরামর্শ নিতে হবে।"
    },
    {
        question: "I want to register a trademark for my business.",
        answer: "Please consult an Intellectual Property Lawyer."
    },
    {
        question: "আমার নামে মিথ্যা ফৌজদারি মামলা হয়েছে, আমি কী করবো?",
        answer: "আপনাকে একজন ফৌজদারি (ক্রিমিনাল) আইনজীবীর সাথে কথা বলতে হবে।"
    },
    {
        question: "Someone has illegally occupied my property.",
        answer: "Please consult a Real Estate Lawyer."
    },
    {
        question: "বিদেশে কাজের জন্য ভিসা সংক্রান্ত আইনি সহায়তা চাই।",
        answer: "আপনাকে একজন ইমিগ্রেশন আইনজীবীর পরামর্শ নিতে হবে।"
    },
    {
        question: "I want to create a will for estate planning.",
        answer: "Please consult an Estate Planning Lawyer."
    },
    {
        question: "আমি জব মিসডিসিপ্লিনের অভিযোগ নিয়ে সমস্যায় আছি, আমি কি করবো?",
        answer: "আপনাকে একজন শ্রম আইনজীবীর সাথে পরামর্শ করা উচিত।"
    },
    {
        question: "My business contract has been breached. Who should I consult?",
        answer: "Please consult a Commercial or Contract Lawyer."
    },
    {
        question: "আমি একটি রিয়েল এস্টেট লেনদেনে জড়িত আছি, কোন আইনজীবীর সাহায্য নেবো?",
        answer: "আপনাকে একজন রিয়েল এস্টেট আইনজীবীর সাথে যোগাযোগ করতে হবে।"
    },
    {
        question: "I have issues regarding my company’s partnership agreement.",
        answer: "Please consult a Corporate Lawyer for partnership disputes."
    },
    {
        question: "আমার নিজের ব্যবসা শুরু করতে চাই, কোন আইনজীবীর সহায়তা নেবো?",
        answer: "আপনাকে একজন বাণিজ্যিক আইনজীবীর সাথে পরামর্শ করা উচিত।"
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
        <div className="chat-interface z-50">
            <div className="chat-header">
                <h2>Chat with মুহুরীAI</h2>
                <button onClick={onClose} className="close-button" aria-label="Close chat">
                    X
                </button>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isUser ? "user" : "bot"}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your legal question..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatInterface

