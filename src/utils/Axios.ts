import axios from 'axios';
import {readUser} from './Storage';

const BASE_URL = 'http://10.0.2.2:5000';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async config => {
  if (!config.headers['Authorization']) {
    const token = (await readUser())?.refreshToken ?? '';
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// axiosClient.interceptors.response.use(
//   (response) => response.data,
//   async (error) => {
//     const prevRequest = error.config
//     if (error.response?.status === 401 && prevRequest.sent) {
//       prevRequest.sent = true
//       try {
//         const response = await axios.post(
//           AuthEndPoint.REFRESH_TOKEN,
//           {},
//           {
//             withCredentials: true,
//             headers: {
//               Authorization: ${authConfig.TOKEN_TYPE} ${token?.refreshToken},
//             },
//           }
//         )
//         if (response.status === 201) {
//           localStorage.setItem(authEndpoint.REFRESH_TOKEN, JSON.stringify(response.data))
//           return axios(prevRequest)
//         }
//       } catch (refreshError) {
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosClient;
