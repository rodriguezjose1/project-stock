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

interface IProduct {
  id: number;
  product: number;
  products_quantity: number;
}

export interface ISale {
  id?: string;
  money: number;
  change: number;
  items: IProduct;
}

export interface SalesState {
  pending: boolean;
  sales: any;
  sale: ISale | null,
  error: string | null;
  productByCode: IProduct | null;
  saleItems: any;
}

// post sales types: http
export interface PostSalesRequestPayload {
  sale: ISale
}
export interface PostSalesSuccessPayload {
  sale: ISale;
}
export interface PostSalesFailurePayload {
  error: string;
}

export interface PostSalesRequest {
  type: typeof POST_SALES_REQUEST;
  payload: PostSalesRequestPayload;
}
export type PostSalesSuccess = {
  type: typeof POST_SALES_SUCCESS;
  payload: PostSalesSuccessPayload;
};
export type PostSalesFailure = {
  type: typeof POST_SALES_FAILURE;
  payload: PostSalesFailurePayload;
};
// post sales types

// get product by code types: http
export interface GetProductByCodeRequestPayload {
  code: string;
}
export interface GetProductByCodeSuccessPayload {
  product: IProduct;
}
export interface GetProductByCodeFailurePayload {
  error: string;
}

export interface GetProductByCodeRequest {
  type: typeof GET_PRODUCT_BY_CODE_REQUEST;
  payload: GetProductByCodeRequestPayload;
}
export type GetProductByCodeSuccess = {
  type: typeof GET_PRODUCT_BY_CODE_SUCCESS;
  payload: GetProductByCodeSuccessPayload;
};
export type GetProductByCodeFailure = {
  type: typeof GET_PRODUCT_BY_CODE_FAILURE;
  payload: GetProductByCodeFailurePayload;
};
// get product by code types

// update sale item payload: local
export interface UpdateSaleItemPayload {
  id: number;
  items_quantity: number;
}

export interface UpdateSaleItem {
  type: typeof UPDATE_SALE_ITEM_PRODUCT;
  payload: UpdateSaleItemPayload;
}
// end update sale item

//
export interface ClearSaleError {
  type: typeof CLEAR_SALE_ERROR;
}
//

//
export interface ClearSale {
  type: typeof CLEAR_SALE;
}
//

// all actions
export type SalesActions =
  | GetProductByCodeRequest
  | GetProductByCodeSuccess
  | GetProductByCodeFailure
  | UpdateSaleItem
  | ClearSaleError
  | PostSalesRequest
  | PostSalesSuccess
  | PostSalesFailure
  | ClearSale;
