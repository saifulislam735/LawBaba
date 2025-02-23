import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { lawyers as mockLawyers } from '../../data/mockData'; // Adjust path as needed

const LawyerProfile = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const fetchLawyer = async () => {
      setLoading(true);
      try {
        // Simulated API call (replace with real API later)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const selectedLawyer = mockLawyers.find((l) => String(l.id) === String(id));
        if (!selectedLawyer) throw new Error('Lawyer not found');
        setLawyer(selectedLawyer);
      } catch (error) {
        console.error('Failed to fetch lawyer:', error);
        setLawyer(null);
      } finally {
        setLoading(false);
      }
    };
    fetchLawyer();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-gray-600 py-10">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <span className="ml-2">Loading lawyer details...</span>
      </div>
    );
  }

  if (!lawyer) {
    return <div className="text-center text-red-600 py-10">Lawyer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={lawyer.imageUrl || 'https://via.placeholder.com/128'}
            alt={lawyer.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{lawyer.name}</h1>
            <p className="text-gray-600 mb-2">{lawyer.specialization}</p>
            <p className="text-gray-600 mb-2">{lawyer.experience} years of experience</p>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span>{lawyer.rating.toFixed(1)} ({lawyer.reviewCount} reviews)</span>
            </div>
          </div>
          <div className="ml-auto">
            <Link
              to={`/lawyers/${id}/book`}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'about'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'expertise'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('expertise')}
          >
            Expertise
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === 'availability'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('availability')}
          >
            Availability
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'about' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">
                {lawyer.about || 'No description available.'}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {lawyer.education && lawyer.education.length > 0 ? (
                  lawyer.education.map((edu, index) => <li key={index}>{edu}</li>)
                ) : (
                  <li>No education details provided.</li>
                )}
              </ul>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lawyer.expertise && lawyer.expertise.length > 0 ? (
                  lawyer.expertise.map((exp, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">{exp}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No expertise listed.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'availability' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Availability</h2>
              <div className="space-y-3">
                {lawyer.availability && Object.keys(lawyer.availability).length > 0 ? (
                  Object.entries(lawyer.availability).map(([day, hours]) => (
                    <div key={day} className="flex justify-between border-b pb-2">
                      <span className="capitalize text-gray-900">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">Availability not specified.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;