import {AxiosResponse} from 'axios';
import {Response, User} from '../../types';
import axiosClient from '../../utils';
import {AuthEndPoint} from './auth-endpoint.service';

const authService = {
  login: async (data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<Response<User>, any>> =>
    axiosClient.post(AuthEndPoint.LOGIN, data),
  signup: async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }): Promise<AxiosResponse<Response<User>, any>> =>
    axiosClient.post(AuthEndPoint.SIGNUP, data),
  infoUser: async (data: {
    token: string;
  }): Promise<AxiosResponse<Response<User>, any>> =>
    axiosClient.get(AuthEndPoint.GET_INFO),
};

export default authService;
