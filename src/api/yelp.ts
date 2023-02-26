import axios from 'axios';
import {YELP_API_KEY, YELP_BASE_URL} from '../components/common/Yelp';

export default axios.create({
  baseURL: `${YELP_BASE_URL}/businesses`,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
