import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StarIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  // ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  // DocumentTextIcon
} from '@heroicons/react/24/outline';
import BookingModal from '../booking/BookingModal';

const LawyerProfile = () => {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);

  // This would be fetched from the API in a real application
  const lawyer = {
    id,
    name: 'John Doe',
    specialization: 'Corporate Law',
    experience: 15,
    rating: 4.8,
    reviewCount: 127,
    hourlyRate: 150,
    imageUrl: 'https://example.com/lawyer-image.jpg',
    availability: true,
    education: [
      'J.D., Harvard Law School',
      'B.A. in Political Science, Yale University'
    ],
    expertise: [
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Securities Law',
      'Business Formation'
    ],
    languages: ['English', 'Spanish'],
    about: 'Experienced corporate lawyer with a focus on helping businesses navigate complex legal challenges...',
    reviews: [
      {
        id: 1,
        author: 'Jane Smith',
        rating: 5,
        comment: 'Excellent service and very professional...',
        date: '2024-01-15'
      }
      // More reviews...
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Profile Information */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex gap-6">
              <img
                src={lawyer.imageUrl}
                alt={lawyer.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold mb-2">{lawyer.name}</h1>
                <p className="text-gray-600 mb-2">{lawyer.specialization}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-medium">{lawyer.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({lawyer.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                    <span className="ml-1">{lawyer.experience} years</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                  >
                    <CalendarIcon className="h-5 w-5" />
                    Book Consultation
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{lawyer.about}</p>
          </div>

          {/* Expertise Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {lawyer.expertise.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Client Reviews</h2>
            <div className="space-y-4">
              {lawyer.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{review.author}</h3>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Consultation Fee</h2>
            <p className="text-2xl font-bold text-blue-600">${lawyer.hourlyRate}/hr</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-3">
              {lawyer.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AcademicCapIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <span>{edu}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="space-y-2">
              {lawyer.languages.map((lang, index) => (
                <div key={index}>{lang}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          lawyer={lawyer}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};

export default LawyerProfile;
