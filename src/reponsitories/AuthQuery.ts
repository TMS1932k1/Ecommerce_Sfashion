import axios, {AxiosError} from 'axios';
import {MyApp} from '../constants';
import {DataResponse} from '../types';

// Login with [email: string, password: string] hahaha
export const postLoginAuth = async (data: {
  email: string;
  password: string;
}): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'post',
      baseURL: MyApp.baseUrl,
      url: MyApp.loginApi,
      data: data,
    });

    return {response: response.data};
  } catch (error: any) {
    return {error: error.response.data.message};
  }
};

// Sign up with
// [username: string, email: string, password: string, confirmPassword: string]
export const postSignUpAuth = async (data: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'post',
      baseURL: MyApp.baseUrl,
      url: MyApp.signUpApi,
      data: data,
    });
    return {response: response};
  } catch (error: any) {
    return {error: error.response.data.message};
  }
};
