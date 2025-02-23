import { useState } from 'react';
import {
    QuestionMarkCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet'; // For SEO (optional, install react-helmet)
import { FilterIcon } from 'lucide-react';

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: 'How do I book a consultation with a lawyer?',
            answer:
                'To book a consultation, visit a lawyer’s profile on our platform, click the "Book Consultation" button, select a convenient date and time from their availability, and provide details about your legal matter. You’ll receive a confirmation email.',
            category: 'booking',
        },
        {
            id: 2,
            question: 'What information should I provide during booking?',
            answer:
                'Please include your name, contact details, a brief description of your legal issue, and any relevant documents or dates. This helps the lawyer prepare for your consultation effectively.',
            category: 'booking',
        },
        {
            id: 3,
            question: 'How does the messaging system work with lawyers?',
            answer:
                'After booking a consultation, you can use our secure messaging system to communicate directly with lawyers. You can send messages, share documents, and receive updates or advice. Messages are encrypted for privacy.',
            category: 'communication',
        },
        {
            id: 4,
            question: 'Can I share files with a lawyer through messages?',
            answer:
                'Yes, you can upload and share files like documents, PDFs, or images via our messaging system. Ensure files are relevant to your legal matter, and they’re securely stored and accessible to the lawyer.',
            category: 'communication',
        },
        {
            id: 5,
            question: 'What payment methods are accepted for consultations?',
            answer:
                'We accept major credit/debit cards, PayPal, and local digital wallets like bKash or Nagad. All transactions are processed securely through our encrypted payment gateway.',
            category: 'payment',
        },
        {
            id: 6,
            question: 'How are refunds handled for cancelled consultations?',
            answer:
                'You can cancel a consultation up to 24 hours before the scheduled time for a full refund. Refunds are processed within 5-7 business days and credited to your original payment method.',
            category: 'payment',
        },
        {
            id: 7,
            question: 'How can I change my appointment time?',
            answer:
                'Log in to your account, go to your bookings, and select the consultation you want to reschedule. Choose a new time slot from the lawyer’s availability, and confirm the change. Note that changes must be made at least 24 hours in advance.',
            category: 'booking',
        },
        {
            id: 8,
            question: 'Is my personal information secure on your platform?',
            answer:
                'Yes, we prioritize your privacy. All personal data is encrypted using industry-standard SSL/TLS protocols, and we comply with data protection laws like the Bangladesh Data Protection Act.',
            category: 'privacy',
        },
    ];

    const categories = [
        { id: 'all', label: 'All Topics' },
        { id: 'booking', label: 'Booking' },
        { id: 'communication', label: 'Communication' },
        { id: 'payment', label: 'Payment' },
        { id: 'privacy', label: 'Privacy & Security' },
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
            {/* SEO Metadata */}
            <Helmet>
                <title>Frequently Asked Questions | Ukil Chambers</title>
                <meta
                    name="description"
                    content="Find answers to common questions about booking lawyers, messaging, payments, and privacy on Ukil Chambers."
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqItems.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer,
                            },
                        })),
                    })}
                </script>
            </Helmet>

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Find quick answers to your questions about our legal services.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-3xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-2/3">
                    <input
                        type="text"
                        placeholder="Search FAQs (e.g., booking, payment)..."
                        className="w-full px-4 py-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search FAQs"
                    />
                    <QuestionMarkCircleIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="w-full md:w-1/3">
                    <button
                        onClick={() => setSelectedCategory(selectedCategory === 'all' ? '' : 'all')}
                        className="w-full px-4 py-3 border rounded-lg bg-white shadow-sm hover:bg-gray-50 flex items-center justify-between gap-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150"
                        aria-label="Filter FAQs by category"
                    >
                        <span className="flex items-center gap-2">
                            <FilterIcon className="h-5 w-5" />
                            {categories.find((cat) => cat.id === selectedCategory)?.label || 'All Topics'}
                        </span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                    </button>
                    {selectedCategory && selectedCategory !== 'all' && (
                        <div className="mt-2 absolute z-10 w-full bg-white rounded-lg shadow-md border">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition duration-150"
                            >
                                All Topics
                            </button>
                            {categories
                                .filter((cat) => cat.id !== 'all' && cat.id !== selectedCategory)
                                .map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition duration-150"
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto space-y-4">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-lg shadow-md border p-6 transition-all duration-200 hover:shadow-lg"
                            role="region"
                            aria-labelledby={`faq-${faq.id}-question`}
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                                aria-expanded={expandedFaq === faq.id}
                                aria-controls={`faq-${faq.id}-answer`}
                                id={`faq-${faq.id}-question`}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">{faq.question}</h3>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${expandedFaq === faq.id ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {expandedFaq === faq.id && (
                                <div
                                    id={`faq-${faq.id}-answer`}
                                    className="mt-3 text-gray-600 animate-fade-in"
                                    role="region"
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center py-6 text-gray-500">
                        No FAQs found for "{searchQuery}". Try a different search or category.
                    </div>
                )}
            </div>

            {/* Custom Animation */}
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

export default FAQPage;