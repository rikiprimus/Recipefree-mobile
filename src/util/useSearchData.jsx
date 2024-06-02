import { useState, useEffect } from 'react';
import api from './api';

const useSearchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resultSearch, setResultSearch] = useState([]);
  const [detailSearch, setDetailSearch] = useState({
    searchBy: 'title',
    search: '',
    sortBy: 'createdAt',
    sort: 'DESC',
    limit: '20',
    page: '1',
  });
  console.log("hasil result : ", resultSearch)
  const fetchSearchData = async () => {
    try {
      const data = await api.getDetails('recipes', detailSearch);
      console.log("hasil api :",data?.data)
      setResultSearch(data?.data);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchSearchData();
  }, [detailSearch]);

  return { resultSearch, setResultSearch, detailSearch, setDetailSearch, isLoading, setIsLoading, fetchSearchData };
};

export default useSearchData;