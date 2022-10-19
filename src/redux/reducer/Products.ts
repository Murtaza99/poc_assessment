import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCT_LIST,
} from '../Constants/Constant';
import {Product} from '../../Model/Product';
import {ProductState} from '../../Model/ProductState';

const initialState = {
  productList: [],
  cartCount: 0,
  cartList: [],
};

export const Products = (state: ProductState = initialState, action: any) => {
  console.log('Products Payload', action.payload);
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
      break;
    case ADD_PRODUCT_TO_CART:
      let newCartList = [...state.cartList];
      const cartItemIndex =
        state.cartList.length > 0
          ? state.cartList.findIndex((item: Product): boolean => {
              return item.id === action.payload.id;
            })
          : -1;

      if (cartItemIndex !== -1) {
        state.cartList[cartItemIndex].quantity++;
      } else {
        newCartList.push({...action.payload, quantity: 1});
      }
      return {
        ...state,
        cartList: [...newCartList],
        cartCount: state.cartCount + 1,
      };
    case REMOVE_PRODUCT_FROM_CART:
      const listItems = state.cartList.filter(
        (item: Product) => item.id !== action.payload.id,
      );
      return {
        ...state,
        cartList: [...listItems],
        cartCount: state.cartCount - action.payload.quantity,
      };
    case INCREMENT_QUANTITY:
      const newList = state.cartList.map((item: Product) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartList: [...newList],
        cartCount: state.cartCount + 1,
      };
    case DECREMENT_QUANTITY:
      const updatedList = state.cartList.map((item: Product) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartList: [...updatedList],
        cartCount: state.cartCount - 1,
      };

    default:
      return state;
  }
};
