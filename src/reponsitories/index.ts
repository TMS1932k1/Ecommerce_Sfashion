import {
  postLoginAuth,
  postSignUpAuth,
  getInfoUser,
  saveUser,
  readUser,
  removeUser,
} from './AuthQuery';
import {getProducts} from './ProductsQuery';
import {getCategories} from './CategoriesQuery';
import {getProduct} from './ProductQuery';
import {getReviews} from './ReviewsQuery';
import {readCart, saveCart} from './CartQuery';

export {
  postLoginAuth,
  postSignUpAuth,
  getProducts,
  getCategories,
  getProduct,
  getReviews,
  readCart,
  saveCart,
  getInfoUser,
  saveUser,
  readUser,
  removeUser,
};
