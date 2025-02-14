import { useParams } from 'react-router-dom'
import { useState } from 'react'

const LawyerProfile = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('about')

  // Dummy data - replace with API call
  const lawyer = {
    id,
    name: 'Sarah Johnson',
    specialization: 'Corporate Law',
    experience: '15 years',
    rating: 4.8,
    consultationFee: '$200',
    about: 'Experienced corporate lawyer with expertise in mergers & acquisitions, contract law, and business litigation.',
    education: [
      'J.D., Harvard Law School',
      'B.A. in Economics, Yale University'
    ],
    expertise: [
      'Mergers & Acquisitions',
      'Contract Law',
      'Business Litigation',
      'Corporate Governance'
    ],
    availability: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 3:00 PM'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{lawyer.name}</h1>
            <p className="text-gray-600 mb-2">{lawyer.specialization}</p>
            <p className="text-gray-600 mb-2">{lawyer.experience} Experience</p>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span>{lawyer.rating} Rating</span>
            </div>
          </div>
          <div className="ml-auto">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 ${activeTab === 'about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`px-6 py-3 ${activeTab === 'expertise' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('expertise')}
          >
            Expertise
          </button>
          <button
            className={`px-6 py-3 ${activeTab === 'availability' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('availability')}
          >
            Availability
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'about' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-600 mb-6">{lawyer.about}</p>
              
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {lawyer.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-2 gap-4">
                {lawyer.expertise.map((exp, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'availability' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Weekly Availability</h2>
              <div className="space-y-3">
                {Object.entries(lawyer.availability).map(([day, hours]) => (
                  <div key={day} className="flex justify-between border-b pb-2">
                    <span className="capitalize">{day}</span>
                    <span className="text-gray-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LawyerProfile
