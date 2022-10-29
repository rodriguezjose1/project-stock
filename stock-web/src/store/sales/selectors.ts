import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.sales.pending;

const getSale = (state: AppState) => state.sales.sale;

const getSales = (state: AppState) => state.sales.sales;

const getError = (state: AppState) => state.sales.error;

const getSaleItems = (state: AppState) => state.sales.saleItems;

const getProductByCode = (state: AppState) => state.sales.productByCode;

export const getSalesSelector = createSelector(getSales, (sales) => sales);

export const getSaleSelector = createSelector(getSale, (sale) => sale);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getSaleItemsSelector = createSelector(getSaleItems, (saleItems) => saleItems);

export const getProductByCodeSelector = createSelector(getProductByCode, (productByCode) => productByCode);