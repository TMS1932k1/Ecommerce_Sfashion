import {User} from './User';

export type UserReposne = {
  status: string;
  token: string;
  data: {user: User};
};
