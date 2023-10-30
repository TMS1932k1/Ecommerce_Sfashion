import {Collection, TypeCollection} from '../types';

export const MyApp = {
  baseUrl: 'http://10.0.2.2:5000',
  loginApi: '/api/user/login',
  signUpApi: '/api/user/signup',
  meApi: '/api/user/me',
  productsApi: '/api/products',
  imageProductsApi: '/img/products/',
  imageCategorisApi: '/img/categories/',
  categoriesApi: '/api/categories',
  collections: <Collection[]>[
    {label: 'Hot', type: TypeCollection.TOP_HOT},
    {label: 'Trending', type: TypeCollection.TREND},
    {label: 'Sale', type: TypeCollection.SALE},
  ],
  hotlines: [
    {image: require('../../assets/images/youtube.png'), id: 1},
    {image: require('../../assets/images/instagram.png'), id: 2},
    {image: require('../../assets/images/twitter.png'), id: 3},
  ],
};
