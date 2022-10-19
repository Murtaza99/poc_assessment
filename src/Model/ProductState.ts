import {Product} from './Product';

export interface ProductState {
  productList: Product[];
  cartList: Product[];
  cartCount: number;
}
