import { API_KEY } from '@env';
import axios from 'axios';

const api = axios.create({
  params: {
    APPID: API_KEY,
  },
});

export default api;
