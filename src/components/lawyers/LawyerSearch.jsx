import { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const LawyerSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    specialization: '',
    experience: '',
    location: '',
    priceRange: '',
    rating: '',
  });

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ ...filters, searchQuery });
  };

  const handleClearFilters = () => {
    setFilters({
      specialization: '',
      experience: '',
      location: '',
      priceRange: '',
      rating: '',
    });
    setSearchQuery('');
    onSearch({ searchQuery: '', specialization: '', experience: '', location: '', priceRange: '', rating: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by name, specialization, or location..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="button"
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.specialization}
                onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
              >
                <option value="">All Specializations</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Human Rights Law">Human Rights Law</option>
                <option value="Corporate Law">Corporate Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Labor Law">Labor Law</option>
                <option value="Tax Law">Tax Law</option>
                <option value="Intellectual Property Law">Intellectual Property Law</option>
                <option value="Real Estate Law">Real Estate Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Environmental Law">Environmental Law</option>
                <option value="Debt Recovery Law">Debt Recovery Law</option>
                <option value="Immigration Law">Immigration Law</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              >
                <option value="">All Experience Levels</option>
                <option value="0-5">0-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10-15">10-15 years</option>
                <option value="15-plus">15+ years</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">All Locations</option>
                <option value="Dhaka, Bangladesh">Dhaka, Bangladesh</option>
                <option value="Chittagong, Bangladesh">Chittagong, Bangladesh</option>
                <option value="Sylhet, Bangladesh">Sylhet, Bangladesh</option>
                <option value="Rajshahi, Bangladesh">Rajshahi, Bangladesh</option>
                <option value="Khulna, Bangladesh">Khulna, Bangladesh</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">All Price Ranges</option>
                <option value="500-1000">৳500-৳1000</option>
                <option value="1000-1500">৳1000-৳1500</option>
                <option value="1500-2000">৳1500-৳2000</option>
                <option value="2000-plus">৳2000+</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
              >
                <option value="">All Ratings</option>
                <option value="4-5">4-5 Stars</option>
                <option value="3-4">3-4 Stars</option>
                <option value="0-3">0-3 Stars</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LawyerSearch;