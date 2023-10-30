import {AxiosResponse} from 'axios';
import axiosClient from '../../utils';
import {Response, Product, Review} from '../../types';
import {ProductEndPoint} from './product-endpoint.service';

const productService = {
  getProduct: async (
    id: string,
  ): Promise<AxiosResponse<Response<Product>, any>> =>
    axiosClient.get(ProductEndPoint.PRODUCT.replace('{id}', id)),
  getReviews: async (
    id: string,
  ): Promise<AxiosResponse<Response<Review[]>, any>> =>
    axiosClient.get(ProductEndPoint.REVIEW.replace('{id}', id)),
};

export default productService;
