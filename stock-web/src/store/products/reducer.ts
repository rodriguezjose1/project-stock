import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SET_SELECTED_PRODUCT,
    PUT_PRODUCTS_REQUEST,
    PUT_PRODUCTS_SUCCESS,
    PUT_PRODUCTS_FAILURE,
    POST_PRODUCTS_REQUEST,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_FAILURE
} from "./actionTypes";

import { ProductsActions, ProductsState } from "./types";

export const initialState: ProductsState = {
    pending: false,
    products: { products: [], total: 0, page: 0, limit: 10 },
    selectedProduct: null,
    error: null,
};

export default (state: ProductsState = initialState, action: ProductsActions) => {
    switch (action.type) {
        // fetch products
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: {
                    ...state.products,
                    products: action.payload.products.products,
                    total: action.payload.products.total,
                },
                error: null,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                pending: false,
                products: initialState.products,
                error: action.payload.error,
            };
        // put products
        case PUT_PRODUCTS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case PUT_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                product: action.payload.product,
                error: null,
            };
        case PUT_PRODUCTS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        // post products
        case POST_PRODUCTS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case POST_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                product: action.payload.product,
                error: null,
            };
        case POST_PRODUCTS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        // set selected products
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload.selectedProduct
            };
        default:
            return {
                ...state,
            };
    }
};