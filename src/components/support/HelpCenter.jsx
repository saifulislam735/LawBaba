import { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems = [
    {
      id: 1,
      question: 'How do I book a consultation with a lawyer?',
      answer:
        'To book a consultation, navigate to a lawyer\'s profile and click the "Book Consultation" button. Follow the steps to select a date, time, and provide details about your legal matter.',
      category: 'booking',
    },
    {
      id: 2,
      question: 'How does the messaging system work?',
      answer:
        'Our messaging system allows you to communicate directly with lawyers after booking a consultation. You can send messages, share documents, and receive updates about your case.',
      category: 'communication',
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer:
        'We accept major credit cards, debit cards, and digital payment methods. All payments are processed securely through our payment gateway.',
      category: 'payment',
    },
    // Add more FAQ items as needed
  ];

  const filteredFaqs = faqItems.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">How Can We Help You?</h1>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <QuestionMarkCircleIcon className="h-6 w-6 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <BookOpenIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600">
              Browse our comprehensive guides and documentation
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Live Chat Support</h3>
            <p className="text-gray-600">
              Chat with our support team for immediate assistance
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <DocumentTextIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Legal Resources</h3>
            <p className="text-gray-600">
              Access legal templates and resources
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you with any questions
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
