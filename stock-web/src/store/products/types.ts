import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_SELECTED_PRODUCT,
    PUT_PRODUCTS_SUCCESS,
    PUT_PRODUCTS_FAILURE,
    PUT_PRODUCTS_REQUEST,
    POST_PRODUCTS_REQUEST,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_FAILURE,
} from "./actionTypes";

export interface IProduct {
    id: string;
    name: string;
    code: string;
    price: number;
    quantity: number;
}

export interface IResponseProducts {
    products: IProduct[];
    total: number;
    limit: number;
    page: number;
}

export interface ProductsState {
    pending: boolean;
    products: IResponseProducts;
    error: string | null;
    selectedProduct: IProduct | null;
}

// fetch products types: http
export interface FetchProductsSuccessPayload {
    products: IResponseProducts;
}
export interface FetchProductsFailurePayload {
    error: string;
}

export interface FetchProductsRequest {
    type: typeof FETCH_PRODUCTS_REQUEST;
    payload: any
}
export type FetchProductsSuccess = {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: FetchProductsSuccessPayload;
};
export type FetchProductsFailure = {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: FetchProductsFailurePayload;
};
// end products types

// put products types: http
export interface PutProductsRequestPayload {
    id: string,
    product: IProduct;
}
export interface PutProductsSuccessPayload {
    product: IProduct;
}
export interface PutProductsFailurePayload {
    error: string;
}

export interface PutProductsRequest {
    type: typeof PUT_PRODUCTS_REQUEST;
    payload: PutProductsRequestPayload;
}
export type PutProductsSuccess = {
    type: typeof PUT_PRODUCTS_SUCCESS;
    payload: PutProductsSuccessPayload;
};
export type PutProductsFailure = {
    type: typeof PUT_PRODUCTS_FAILURE;
    payload: PutProductsFailurePayload;
};
// end put types

// post products types: http
export interface PostProductsRequestPayload {
    product: IProduct;
}
export interface PostProductsSuccessPayload {
    product: IProduct;
}
export interface PostProductsFailurePayload {
    error: string;
}

export interface PostProductsRequest {
    type: typeof POST_PRODUCTS_REQUEST;
    payload: PostProductsRequestPayload;
}
export type PostProductsSuccess = {
    type: typeof POST_PRODUCTS_SUCCESS;
    payload: PostProductsSuccessPayload;
};
export type PostProductsFailure = {
    type: typeof POST_PRODUCTS_FAILURE;
    payload: PostProductsFailurePayload;
};
// end post types

// set selected product payload: local
export interface SetSelectedProductPayload {
    selectedProduct: IProduct;
}

export interface SetSelectedProduct {
    type: typeof SET_SELECTED_PRODUCT;
    payload: SetSelectedProductPayload;
}
// end set selected product

// all actions
export type ProductsActions =
    | FetchProductsRequest
    | FetchProductsSuccess
    | FetchProductsFailure
    | PutProductsRequest
    | PutProductsSuccess
    | PutProductsFailure
    | PostProductsRequest
    | PostProductsSuccess
    | PostProductsFailure
    | SetSelectedProduct;
