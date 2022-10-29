import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getProductByCodeFailure, getProductByCodeSuccess } from "../sales/actions";
import { GET_PRODUCT_BY_CODE_REQUEST } from "../sales/actionTypes";

import { fetchProductsFailure, fetchProductsSuccess, postProductsFailure, postProductsSuccess, putProductsFailure, putProductsSuccess } from "./actions";
import { FETCH_PRODUCTS_REQUEST, POST_PRODUCTS_REQUEST, POST_PRODUCTS_SUCCESS, PUT_PRODUCTS_REQUEST, PUT_PRODUCTS_SUCCESS } from "./actionTypes";
import { IProduct, IResponseProducts } from "./types";

const url = 'http://192.168.1.155:3000/api/v1/stock/products';

const getProducts = ({ query = { page: 1, limit: 8 } }: any) => axios.get<IResponseProducts[]>(`${url}?${new URLSearchParams(query).toString()}`);
const getProductByCode = ({ code }: any) => axios.get<IResponseProducts[]>(`${url}/codes/${code}`);
const putProducts = ({ id, product }: { id: string, product: IProduct }) => axios.put(`${url}/${id}`, product);
const postProducts = (product: IProduct) => axios.post(url, product);

/*
  Worker Saga: Fired on FETCH_PRODUCTS_REQUEST action
*/
function* fetchProductSaga({ payload }: any): any {
    try {
        const response = yield call(getProducts, payload);
        yield put(
            fetchProductsSuccess({
                products: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchProductsFailure({
                error: e.message,
            })
        );
    }
}

function* getProductByCodeSaga({ payload }: any): any {
    try {
        const response = yield call(getProductByCode, payload);
        const product = response.data.data.product;

        console.log(response.data);
        if (product){
            yield put(
                getProductByCodeSuccess({
                    product: product,
                })
            );
        } else {
            throw { code: 'NOT_FOUND_PRODUCT' };
        }
    } catch (e: any) {
        let error;
        if (axios.isAxiosError(error)) error = e.response.data.error;
        else error = e;

        yield put(
            getProductByCodeFailure({
                error,
            })
        );
    }
}

function* putProductSaga({ payload }: any): any {
    try {
        const response = yield call(putProducts, payload);
        yield put(
            putProductsSuccess({
                product: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            putProductsFailure({
                error: e.message,
            })
        );
    }
}

function* postProductSaga({ payload }: any): any {
    try {
        const response = yield call(postProducts, payload);
        yield put(
            postProductsSuccess({
                product: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            postProductsFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_PRODUCTS_REQUEST` action.
  Allows concurrent increments.
*/
function* productsSaga() {
    yield all([takeLatest([FETCH_PRODUCTS_REQUEST, PUT_PRODUCTS_SUCCESS, POST_PRODUCTS_SUCCESS], fetchProductSaga)]);
    yield all([takeLatest(PUT_PRODUCTS_REQUEST, putProductSaga)]);
    yield all([takeLatest(POST_PRODUCTS_REQUEST, postProductSaga)]);
    yield all([takeLatest(GET_PRODUCT_BY_CODE_REQUEST, getProductByCodeSaga)])
}

export default productsSaga;