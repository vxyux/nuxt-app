import { type Product } from '@/types';

export type Cart = {
  id: number;
  products: Product[] | [];
};
