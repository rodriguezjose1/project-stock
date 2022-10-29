import {
  GET_PRODUCT_BY_CODE_REQUEST,
  GET_PRODUCT_BY_CODE_SUCCESS,
  GET_PRODUCT_BY_CODE_FAILURE,
  POST_SALES_REQUEST,
  POST_SALES_SUCCESS,
  POST_SALES_FAILURE,
  CLEAR_SALE_ERROR,
  UPDATE_SALE_ITEM_PRODUCT,
  CLEAR_SALE,
} from './actionTypes';
import {
  ClearSale,
  ClearSaleError,
  GetProductByCodeFailure,
  GetProductByCodeFailurePayload,
  GetProductByCodeRequest,
  GetProductByCodeRequestPayload,
  GetProductByCodeSuccess,
  GetProductByCodeSuccessPayload,
  PostSalesFailure,
  PostSalesFailurePayload,
  PostSalesRequest,
  PostSalesRequestPayload,
  PostSalesSuccess,
  PostSalesSuccessPayload,
  UpdateSaleItem,
  UpdateSaleItemPayload,
} from './types';

export const postSalesRequest = (
  payload: PostSalesRequestPayload,
): PostSalesRequest => {
  return {
    type: POST_SALES_REQUEST,
    payload,
  };
};

export const postSalesSuccess = (
  payload: PostSalesSuccessPayload,
): PostSalesSuccess => ({
  type: POST_SALES_SUCCESS,
  payload,
});

export const postSalesFailure = (
  payload: PostSalesFailurePayload,
): PostSalesFailure => ({
  type: POST_SALES_FAILURE,
  payload,
});

export const getProductByCodeRequest = (
  payload: GetProductByCodeRequestPayload,
): GetProductByCodeRequest => {
  return {
    type: GET_PRODUCT_BY_CODE_REQUEST,
    payload,
  };
};

export const getProductByCodeSuccess = (
  payload: GetProductByCodeSuccessPayload,
): GetProductByCodeSuccess => ({
  type: GET_PRODUCT_BY_CODE_SUCCESS,
  payload,
});

export const getProductByCodeFailure = (
  payload: GetProductByCodeFailurePayload,
): GetProductByCodeFailure => ({
  type: GET_PRODUCT_BY_CODE_FAILURE,
  payload,
});

export const updateSaleItem = (
  payload: UpdateSaleItemPayload,
): UpdateSaleItem => ({
  type: UPDATE_SALE_ITEM_PRODUCT,
  payload,
});

export const clearSaleError = (): ClearSaleError => ({
  type: CLEAR_SALE_ERROR,
});

export const clearSale = (): ClearSale => ({
  type: CLEAR_SALE,
});
