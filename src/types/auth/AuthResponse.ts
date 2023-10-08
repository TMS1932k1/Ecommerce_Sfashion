import {AxiosResponse} from 'axios';

export type AuthResponse = {
  response?: AxiosResponse;
  error?: string;
};
