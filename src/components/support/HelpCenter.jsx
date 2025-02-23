import { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

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
        'We accept major credit cards, debit cards, and digital payment methods like PayPal and mobile wallets. All payments are processed securely through our payment gateway.',
      category: 'payment',
    },
    {
      id: 4,
      question: 'Can I cancel a booked consultation?',
      answer:
        'Yes, you can cancel a consultation up to 24 hours before the scheduled time. Go to your profile, find the booking, and click "Cancel". Refunds are processed within 5-7 business days.',
      category: 'booking',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'booking', label: 'Booking' },
    { id: 'communication', label: 'Communication' },
    { id: 'payment', label: 'Payment' },
  ];

  const filteredFaqs = faqItems.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600 mb-6">Find answers to your questions quickly</p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help (e.g., booking, payment)..."
              className="w-full px-4 py-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <QuestionMarkCircleIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/legal-resources"
            className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            <BookOpenIcon className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Documentation</h3>
            <p className="text-gray-600 text-center">Browse our comprehensive guides</p>
          </Link>

          <Link
            to="/messages" // Could link to a support chat
            className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Live Chat Support</h3>
            <p className="text-gray-600 text-center">Chat with our team for instant help</p>
          </Link>

          <Link
            to="/legal-resources"
            className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            <DocumentTextIcon className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Legal Resources</h3>
            <p className="text-gray-600 text-center">Access templates and legal tools</p>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition duration-150 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md border p-6 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                        expandedFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === faq.id && (
                    <p className="mt-3 text-gray-600 animate-fade-in">{faq.answer}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-6">
                No results found for "{searchQuery}". Try a different search or category.
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Still Need Assistance?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help with any questions or issues.
          </p>
          <Link
            to="/messages" // Could link to a support chat or contact page
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Custom Animation for FAQ Expansion */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-in;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HelpCenter;