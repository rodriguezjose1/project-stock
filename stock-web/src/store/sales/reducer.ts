import {
  GET_PRODUCT_BY_CODE_REQUEST,
  GET_PRODUCT_BY_CODE_SUCCESS,
  GET_PRODUCT_BY_CODE_FAILURE,
  UPDATE_SALE_ITEM_PRODUCT,
  CLEAR_SALE_ERROR,
  POST_SALES_REQUEST,
  POST_SALES_SUCCESS,
  POST_SALES_FAILURE,
  CLEAR_SALE,
} from './actionTypes';

import { SalesActions, SalesState } from './types';

export const initialState: SalesState = {
  pending: false,
  sales: [],
  sale: null,
  productByCode: null,
  saleItems: {},
  error: null,
};

export default (state: SalesState = initialState, action: SalesActions) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CODE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_PRODUCT_BY_CODE_SUCCESS:
      const { product }: any = action.payload;
      const itemsState = state.saleItems[product.id];
      if (itemsState) product.items_quantity = itemsState.items_quantity + 1;
      else product.items_quantity = 1;

      return {
        ...state,
        pending: false,
        productByCode: action.payload.product,
        saleItems: {
          ...state.saleItems,
          [action.payload.product.id]: action.payload.product,
        },
        error: null,
      };
    case GET_PRODUCT_BY_CODE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    // udpate sale item
    case UPDATE_SALE_ITEM_PRODUCT:
      const { id, items_quantity } = action.payload;
      
      if (items_quantity === 0) delete state.saleItems[id];
      else state.saleItems[id].items_quantity = items_quantity;

      return {
        ...state,
        saleItems: {
          ...state.saleItems,
        },
      };
    // clear error
    case CLEAR_SALE_ERROR:
      return {
        ...state,
        error: null,
      };

    case POST_SALES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case POST_SALES_SUCCESS:
      return {
        ...state,
        pending: false,
        sale: action.payload.sale,
        error: null,
      };
    case POST_SALES_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    // clear sale
    case CLEAR_SALE:
      return {
        ...state,
        sale: null,
        saleItems: {},
      };
    default:
      return {
        ...state,
      };
  }
};
