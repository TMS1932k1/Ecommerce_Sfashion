import {AxiosResponse} from 'axios';
import axiosClient from '../../utils';
import {Response, Category} from '../../types';
import {CategoriesEndPoint} from './categories-endpoint.service';

const categoriesService = {
  getProduct: async (): Promise<AxiosResponse<Response<Category[]>, any>> =>
    axiosClient.get(CategoriesEndPoint.CATEGORIES),
};

export default categoriesService;
