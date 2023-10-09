import {Collection} from '../types';

export const MyApp = {
  baseUrl: 'http://10.0.2.2:5000',
  loginApi: '/api/user/login',
  signUpApi: '/api/user/signup',
  productsApi: '/api/products',
  imageApi: '/img/products/',
  collections: <Collection[]>[
    {label: 'Hot', path: '/top-hot'},
    {label: 'Sale', path: '/top-sale'},
    {label: 'Trending', path: '/top-trending'},
    {label: 'Arrial', path: '/top-arrival'},
  ],
};
