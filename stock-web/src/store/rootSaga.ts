import { all, fork } from "redux-saga/effects";

import usersSaga from "./users/sagas";
import productsSaga from "./products/sagas";
import salesSaga from "./sales/sagas";

export function* rootSaga() {
  yield all([
    fork(usersSaga),
    fork(productsSaga),
    fork(salesSaga),
  ]);
}