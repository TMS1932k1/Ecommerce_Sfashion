import {Collection} from '../types';

export const MyApp = {
  baseUrl: 'http://10.0.2.2:5000',
  loginApi: '/api/user/login',
  signUpApi: '/api/user/signup',
  productsApi: '/api/products',
  imageApi: '/img/products/',
  arrivals: <Collection>{label: 'Arrial', path: '/top-arrival'},
  collections: <Collection[]>[
    {label: 'Hot', path: '/top-hot'},
    {label: 'Trending', path: '/top-trending'},
    {label: 'Sale', path: '/top-sale'},
  ],
};
