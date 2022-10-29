import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { postSalesFailure, postSalesSuccess } from "./actions";
import { POST_SALES_REQUEST } from "./actionTypes";
import { ISale } from "./types";

const url = 'http://192.168.1.155:3000/api/v1/stock/sales';

const postSales = (sale: ISale) => axios.post(url, sale);

/*
  Worker Saga: Fired on FETCH_PRODUCTS_REQUEST action
*/
function* postSalesSaga({ payload }: any): any {
    try {
        const response = yield call(postSales, payload.sale);
        yield put(
            postSalesSuccess({
                sale: response.data.data.sale,
            })
        );
    } catch (e: any) {
        yield put(
            postSalesFailure({
                error: e.message,
            })
        );
    }
}

function* salesSaga() {
    yield all([takeLatest([POST_SALES_REQUEST], postSalesSaga)]);
}

export default salesSaga;