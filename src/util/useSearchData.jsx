import { useState, useEffect } from 'react';
import api from './api';

const useSearchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSearch, setDataSearch] = useState([]);
  const [detailSearch, setDetailSearch] = useState({
    searchBy: 'ingredient',
    search: '',
    sortBy: 'createdAt',
    sort: 'ASC',
    limit: '20',
    page: '1',
  });
  // console.log(detailSearch.search)
  // console.log(dataSearch)
  const fetchSearchData = async () => {
    try {
      const data = await api.getDetails('recipes', detailSearch);
      // console.log(data)
      setDataSearch(data.data);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchSearchData();
  }, [detailSearch]);

  const updateSearchQuery = (newDetailSearch) => {
    setDetailSearch(newDetailSearch);
  };

  return { dataSearch, detailSearch, updateSearchQuery, isLoading, setIsLoading };
};

export default useSearchData;