import {User} from '..';

export type Review = {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  id: string;
};
