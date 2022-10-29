import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.products.pending;

const getProducts = (state: AppState) => state.products.products;

const getError = (state: AppState) => state.products.error;

const getSelectedProduct = (state: AppState) => state.products.selectedProduct;

export const getProductsSelector = createSelector(getProducts, (products) => products);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getSelectedProductSelector = createSelector(getSelectedProduct, (product) => product);