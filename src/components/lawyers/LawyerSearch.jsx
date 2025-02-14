import { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const LawyerSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    specialization: '',
    experience: '',
    location: '',
    priceRange: '',
    rating: ''
  });

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ ...filters, searchQuery });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search lawyers by name, specialization, or location..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
          <button
            type="button"
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
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
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={filters.specialization}
                onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
              >
                <option value="">Specialization</option>
                <option value="corporate">Corporate Law</option>
                <option value="criminal">Criminal Law</option>
                <option value="family">Family Law</option>
                <option value="intellectual">Intellectual Property</option>
                <option value="real-estate">Real Estate</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              >
                <option value="">Experience</option>
                <option value="0-5">0-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>

              <select
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">Price Range</option>
                <option value="low">$50-100/hr</option>
                <option value="medium">$100-200/hr</option>
                <option value="high">$200+/hr</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                onClick={() => {
                  setFilters({
                    specialization: '',
                    experience: '',
                    location: '',
                    priceRange: '',
                    rating: ''
                  });
                }}
              >
                Clear Filters
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
