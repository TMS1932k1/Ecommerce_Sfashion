import axios from 'axios';
import {MyApp} from '../constants';
import {DataResponse} from '../types';

export const getReviews = async (id: string): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: MyApp.baseUrl,
      url: MyApp.productsApi + `/${id}/reviews`,
    });

    return {response: response.data};
  } catch (e) {
    return {error: 'Error in fetching reviews'};
  }
};
