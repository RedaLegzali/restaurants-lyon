import {useState} from 'react';
import yelp from '../api/yelp';

interface YelpData {
  data: Object | null;
  loading: boolean;
  error: string | null;
}

export default function useRestaurants() {
  const [results, setResults] = useState<YelpData>({
    data: null,
    loading: false,
    error: null,
  });
  async function searchRestaurants(term: string) {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term,
          location: 'Lyon',
        },
      });
      setResults({error: null, loading: false, data: response.data.businesses});
    } catch (error) {
      console.error(error);
      setResults({
        data: null,
        loading: false,
        error: "Oups.. Nous n'arrivons pas à trouver vos restaurants",
      });
    }
  }
  return [results, searchRestaurants];
}
