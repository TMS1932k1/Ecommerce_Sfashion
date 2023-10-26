import axios from 'axios';
import {MyApp} from '../constants';
import {DataResponse, User} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Login with [email: string, password: string]
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

export const getInfoUser = async (data: {
  token: string;
}): Promise<DataResponse> => {
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,
      },
      baseURL: MyApp.baseUrl,
      url: MyApp.meApi,
    });
    return {response: response};
  } catch (error: any) {
    return {error: error.response.data.message};
  }
};

export const saveUser = async (user: User): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('sfashion-user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const readUser = async (): Promise<User | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('sfashion-user');
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  } catch (e) {
    console.log(e);
  }
  return undefined;
};

export const removeUser = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('sfashion-user');
  } catch (e) {
    console.log(e);
  }
};
