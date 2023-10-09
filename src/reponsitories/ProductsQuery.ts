import axios from 'axios';
import {MyApp} from '../constants';
import {DataResponse} from '../types';

export const getCollections = async (path: string): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: MyApp.baseUrl,
      url: MyApp.productsApi + path,
    });

    return {response: response.data};
  } catch (e) {
    return {error: 'Error in fetching collections'};
  }
};
