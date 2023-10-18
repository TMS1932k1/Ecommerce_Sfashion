import axios from 'axios';
import {DataResponse} from '../types';
import {MyApp} from '../constants';

export const getProduct = async (id: string): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: MyApp.baseUrl,
      url: MyApp.productsApi + `/${id}`,
    });

    return {response: response.data};
  } catch (e) {
    return {error: 'Error in fetching product'};
  }
};
