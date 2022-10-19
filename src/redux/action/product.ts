import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCT_LIST,
} from '../Constants/Constant';
import {Product} from '../../Model/Product';

export const addProductList = (value: Product[]) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: value,
  };
};

export const addProductToCart = (value: any) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: value,
  };
};

export const incrementCartItem = (value: Product) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: value,
  };
};

export const decrementCartItem = (value: Product) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: value,
  };
};

export const removeProduct = (value: Product) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: value,
  };
};
