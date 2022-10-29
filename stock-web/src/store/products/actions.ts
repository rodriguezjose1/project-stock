import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
    SET_SELECTED_PRODUCT,
    PUT_PRODUCTS_REQUEST,
    PUT_PRODUCTS_FAILURE,
    PUT_PRODUCTS_SUCCESS,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_FAILURE,
    POST_PRODUCTS_REQUEST,
} from "./actionTypes";
import {
    FetchProductsRequest,
    FetchProductsSuccess,
    FetchProductsSuccessPayload,
    FetchProductsFailure,
    FetchProductsFailurePayload,

    PutProductsRequest,
    PutProductsRequestPayload,
    PutProductsSuccess,
    PutProductsSuccessPayload,
    PutProductsFailure,
    PutProductsFailurePayload,

    SetSelectedProductPayload,
    SetSelectedProduct,

    PostProductsSuccessPayload,
    PostProductsSuccess,
    PostProductsFailurePayload,
    PostProductsFailure,
    PostProductsRequest,
    PostProductsRequestPayload,
} from "./types";

// Put products
export const fetchProductsRequest = (payload: any): FetchProductsRequest => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload
});
export const fetchProductsSuccess = (
    payload: FetchProductsSuccessPayload
): FetchProductsSuccess => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
});
export const fetchProductsFailure = (
    payload: FetchProductsFailurePayload
): FetchProductsFailure => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload,
});

export const putProductsRequest = (
    payload: PutProductsRequestPayload
): PutProductsRequest => {
    return {
        type: PUT_PRODUCTS_REQUEST,
        payload,
    }
};

export const putProductsSuccess = (
    payload: PutProductsSuccessPayload
): PutProductsSuccess => ({
    type: PUT_PRODUCTS_SUCCESS,
    payload,
});

export const putProductsFailure = (
    payload: PutProductsFailurePayload
): PutProductsFailure => ({
    type: PUT_PRODUCTS_FAILURE,
    payload,
});

export const postProductsRequest = (
    payload: PostProductsRequestPayload
): PostProductsRequest => {
    return {
        type: POST_PRODUCTS_REQUEST,
        payload,
    }
};

export const postProductsSuccess = (
    payload: PostProductsSuccessPayload
): PostProductsSuccess => ({
    type: POST_PRODUCTS_SUCCESS,
    payload,
});

export const postProductsFailure = (
    payload: PostProductsFailurePayload
): PostProductsFailure => ({
    type: POST_PRODUCTS_FAILURE,
    payload,
});


export const setSelectedProduct = (
    payload: SetSelectedProductPayload
): SetSelectedProduct => ({
    type: SET_SELECTED_PRODUCT,
    payload,
});