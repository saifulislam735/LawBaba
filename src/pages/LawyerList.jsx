import { useState, useEffect } from 'react';
import LawyerSearch from '../components/lawyers/LawyerSearch';
import LawyerCard from '../components/lawyers/LawyerCard';
import Pagination from '../components/common/Pagination';
import { LawyerCardSkeleton } from '../components/common/Skeleton';
import { useNotification } from '../contexts/NotificationContext';
import { lawyers as mockLawyers } from '../data/mockData';

const LawyerList = () => {
  const { addNotification } = useNotification();
  const [loading, setLoading] = useState(true);
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // Simulate API call
    const fetchLawyers = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLawyers(mockLawyers);
        setFilteredLawyers(mockLawyers);
      } catch (error) {
        console.log(error)
        addNotification({
          type: 'error',
          title: 'Error',
          message: 'Failed to fetch lawyers. Please try again.',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, [addNotification]);

  const handleSearch = (searchData) => {
    const { searchQuery, specialization, experience, location, priceRange, rating } = searchData;

    let filtered = [...lawyers];

    // Apply search query (name, specialization, or location)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (lawyer) =>
          lawyer.name.toLowerCase().includes(query) ||
          lawyer.specialization.toLowerCase().includes(query) ||
          (lawyer.location && lawyer.location.toLowerCase().includes(query))
      );
    }

    // Apply specialization filter
    if (specialization) {
      filtered = filtered.filter(
        (lawyer) => lawyer.specialization.toLowerCase() === specialization.toLowerCase()
      );
    }

    // Apply experience filter (parse string like '5 years' to number)
    if (experience) {
      const [min, max] = experience.split('-').map((num) => (num === 'plus' ? Infinity : parseInt(num)));
      filtered = filtered.filter((lawyer) => {
        const years = parseInt(lawyer.experience) || 0; // Extract numeric years from 'X years'
        return years >= min && (!max || years <= max || (max === Infinity && years >= min));
      });
    }

    // Apply location filter
    if (location) {
      filtered = filtered.filter(
        (lawyer) => lawyer.location?.toLowerCase() === location.toLowerCase()
      );
    }

    // Apply price range filter (using consultationFee)
    if (priceRange) {
      const [min, max] = priceRange.split('-').map((num) => (num === 'plus' ? Infinity : parseInt(num)));
      filtered = filtered.filter((lawyer) => {
        const fee = parseInt(lawyer.consultationFee) || 0;
        return fee >= min && (!max || fee <= max || (max === Infinity && fee >= min));
      });
    }

    // Apply rating filter
    if (rating) {
      const [min, max] = rating.split('-').map((num) => (num === 'plus' ? 5 : parseFloat(num)));
      filtered = filtered.filter((lawyer) => {
        const rate = parseFloat(lawyer.rating) || 0;
        return rate >= min && (!max || rate <= max || (max === 5 && rate >= min));
      });
    }

    setFilteredLawyers(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Calculate pagination
  const totalItems = filteredLawyers.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentLawyers = filteredLawyers.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find a Lawyer</h1>
        <LawyerSearch onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <LawyerCardSkeleton key={index} />
            ))
          : currentLawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
      </div>

      {!loading && filteredLawyers.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No lawyers found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {filteredLawyers.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </div>
  );
};

export default LawyerList;