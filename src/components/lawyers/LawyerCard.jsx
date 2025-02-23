import { StarIcon, ChatBubbleLeftRightIcon, CalendarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const LawyerCard = ({ lawyer }) => {
  const {
    id,
    name,
    specialization,
    experience,
    rating,
    reviewCount,
    consultationFee, // Updated from consultationPay
    imageUrl,
    availabilitybool,
    location, // Added for display
  } = lawyer;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <img
          src={imageUrl || 'https://via.placeholder.com/96'} // Fallback image
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600">{specialization}</p>
              <p className="text-sm text-gray-500">{experience} of experience</p>
              <p className="text-sm text-gray-500">Location: {location || 'Not specified'}</p>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-gray-900 font-medium">{consultationFee}৳</span>
            <span
              className={`text-sm flex items-center ${
                availabilitybool ? 'text-green-600' : 'text-red-600'
              }`}
            >
              <CalendarIcon className="h-4 w-4 mr-1" />
              {availabilitybool ? 'Available' : 'Busy'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/lawyers/${id}`}
          className="flex-1 px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
        >
          View Profile
        </Link>
        <Link
          to={`/messages/${id}`}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-600" />
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;