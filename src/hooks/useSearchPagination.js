import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';

const useSearchPagination = (fetchData, defaultFilters = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const pageSize = parseInt(searchParams.get('pageSize')) || 10;

  // Get filters from URL
  const filters = {
    ...defaultFilters,
    search: searchParams.get('search') || '',
    specialization: searchParams.get('specialization') || '',
    experience: searchParams.get('experience') || '',
    priceRange: searchParams.get('priceRange') || '',
    rating: searchParams.get('rating') || '',
    location: searchParams.get('location') || '',
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      setSearchParams(
        (prev) => {
          prev.set('search', searchTerm);
          prev.set('page', '1'); // Reset to first page on new search
          return prev;
        },
        { replace: true }
      );
    }, 300),
    []
  );

  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setSearchParams(
      (prev) => {
        Object.entries(newFilters).forEach(([key, value]) => {
          if (value) {
            prev.set(key, value);
          } else {
            prev.delete(key);
          }
        });
        prev.set('page', '1'); // Reset to first page on filter change
        return prev;
      },
      { replace: true }
    );
  }, []);

  // Handle page change
  const handlePageChange = useCallback((newPage) => {
    setSearchParams(
      (prev) => {
        prev.set('page', newPage.toString());
        return prev;
      },
      { replace: true }
    );
  }, []);

  // Handle page size change
  const handlePageSizeChange = useCallback((newPageSize) => {
    setSearchParams(
      (prev) => {
        prev.set('pageSize', newPageSize.toString());
        prev.set('page', '1'); // Reset to first page when changing page size
        return prev;
      },
      { replace: true }
    );
  }, []);

  // Fetch data whenever search params change
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchData({
          page: currentPage,
          pageSize,
          ...filters,
        });

        setData(response.data);
        setTotalPages(response.totalPages);
        setTotalItems(response.totalItems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [searchParams, fetchData]);

  return {
    data,
    loading,
    error,
    filters,
    pagination: {
      currentPage,
      pageSize,
      totalPages,
      totalItems,
      handlePageChange,
      handlePageSizeChange,
    },
    updateFilters,
    debouncedSearch,
  };
};

export default useSearchPagination;
