import {AxiosResponse} from 'axios';
import {UserReposne} from '../../types';
import axiosClient from '../../utils';
import {AuthEndPoint} from './auth-endpoint.service';

const authService = {
  login: async (data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<UserReposne, any>> =>
    axiosClient.post(AuthEndPoint.LOGIN, data),
  signup: async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }): Promise<AxiosResponse<UserReposne, any>> =>
    axiosClient.post(AuthEndPoint.SIGNUP, data),
  infoUser: async (data: {
    token: string;
  }): Promise<AxiosResponse<UserReposne, any>> =>
    axiosClient.get(AuthEndPoint.GET_INFO),
};

export default authService;
