import axios from 'axios';
import {useAppSelector} from '../stores/store';

const BASE_URL = 'http://10.0.2.2:5000';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(config => {
  if (!config.headers['Authorization']) {
    const token =
      useAppSelector(state => state.authState.user?.refreshToken) || '';
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
