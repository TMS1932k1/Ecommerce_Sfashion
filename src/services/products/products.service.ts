import {AxiosResponse} from 'axios';
import axiosClient from '../../utils';
import {ProductsEndPoint} from './products-endpoint.service';
import {Response, Product} from '../../types';

const productsService = {
  getHot: async (): Promise<AxiosResponse<Response<Product[]>, any>> =>
    axiosClient.get(ProductsEndPoint.TOP_HOT),
  getTrend: async (): Promise<AxiosResponse<Response<Product[]>, any>> =>
    axiosClient.get(ProductsEndPoint.TREND),
  getSale: async (): Promise<AxiosResponse<Response<Product[]>, any>> =>
    axiosClient.get(ProductsEndPoint.SALE),
  getArrival: async (): Promise<AxiosResponse<Response<Product[]>, any>> =>
    axiosClient.get(ProductsEndPoint.ARRIVAL),
};

export default productsService;
