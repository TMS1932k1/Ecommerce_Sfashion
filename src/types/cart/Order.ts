import {Product} from '../home/Product';

export type Order = {
  product: Product;
  amount: number;
  size: string;
};
