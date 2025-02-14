import React from 'react';

const LegalResources = () => {
  const resources = [
    {
      category: 'Family Law',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      topics: ['Divorce', 'Child Custody', 'Adoption', 'Marriage', 'Domestic Violence'],
    },
    {
      category: 'Criminal Law',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      topics: ['Criminal Defense', 'DUI', 'Drug Offenses', 'White Collar Crime', 'Appeals'],
    },
    {
      category: 'Business Law',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      topics: ['Contracts', 'Corporate Law', 'Intellectual Property', 'Employment', 'Startups'],
    },
  ];

  const commonQuestions = [
    {
      question: 'What should I do after a car accident?',
      answer: 'Ensure safety, call emergency services, document the scene, exchange information, and contact your insurance company. Consider consulting a personal injury lawyer.',
    },
    {
      question: 'Do I need a will?',
      answer: 'Yes, having a will is important to ensure your assets are distributed according to your wishes and to protect your loved ones after your passing.',
    },
    {
      question: 'What are my rights as a tenant?',
      answer: 'Tenants have rights to a habitable living space, privacy, security deposit protection, and proper notice before entry or eviction.',
    },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12 rounded-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Resources & Information</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access comprehensive legal information and resources to help you understand your rights and legal options.
          </p>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Practice Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.category} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{resource.category}</h3>
              <ul className="space-y-2">
                {resource.topics.map((topic) => (
                  <li key={topic} className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Common Legal Questions */}
      <div className="bg-gray-50 py-16 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">Common Legal Questions</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {commonQuestions.map((item) => (
            <div key={item.question} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Need Professional Legal Help?</h2>
        <p className="text-gray-600 mb-8">
          Our network of experienced lawyers is ready to assist you with your legal matters.
        </p>
        <a
          href="/lawyers"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Find a Lawyer Now
        </a>
      </div>
    </div>
  );
};

export default LegalResources;
