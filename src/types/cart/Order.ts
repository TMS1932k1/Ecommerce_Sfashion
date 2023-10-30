import {Product} from '../product/Product';

export type Order = {
  product: Product;
  amount: number;
  size: string;
};
