import axios from 'axios';
import {DataResponse} from '../types';
import {MyApp} from '../constants';

export const getCategories = async (): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: MyApp.baseUrl,
      url: MyApp.categoriesApi,
    });

    return {response: response.data};
  } catch (e) {
    return {error: 'Error in fetching categories'};
  }
};
