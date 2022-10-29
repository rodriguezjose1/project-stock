import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUsersFailure, fetchUsersSuccess, postUsersFailure, postUsersRequest, postUsersSuccess, putUsersFailure, putUsersSuccess } from "./actions";
import { FETCH_USERS_REQUEST, POST_USERS_REQUEST, POST_USERS_SUCCESS, PUT_USERS_REQUEST, PUT_USERS_SUCCESS } from "./actionTypes";
import { IResponseUsers, IUser, PutUsersRequestPayload } from "./types";

const url = 'http://192.168.1.155:3000/api/v1/stock/users';

const getUsers = ({ page = 1, limit = 8 }: any) => axios.get<IResponseUsers[]>(`${url}?page=${page}&limit=${limit}`);
const putUsers = ({ id, user }: { id: string, user: IUser }) => axios.put(`${url}/${id}`, user);
const postUsers = (user: IUser) => axios.post(url, user);

/*
  Worker Saga: Fired on FETCH_USERS_REQUEST action
*/
function* fetchUserSaga({ payload }: any): any {
    try {
        const response = yield call(getUsers, payload);
        yield put(
            fetchUsersSuccess({
                users: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchUsersFailure({
                error: e.message,
            })
        );
    }
}

function* putUserSaga({ payload }: any): any {
    try {
        const response = yield call(putUsers, payload);
        yield put(
            putUsersSuccess({
                user: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            putUsersFailure({
                error: e.message,
            })
        );
    }
}

function* postUserSaga({ payload }: any): any {
    try {
        const response = yield call(postUsers, payload);
        yield put(
            postUsersSuccess({
                user: response.data.data,
            })
        );
    } catch (e: any) {
        yield put(
            postUsersFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_USERS_REQUEST` action.
  Allows concurrent increments.
*/
function* usersSaga() {
    yield all([takeLatest([FETCH_USERS_REQUEST, PUT_USERS_SUCCESS, POST_USERS_SUCCESS], fetchUserSaga)]);
    yield all([takeLatest(PUT_USERS_REQUEST, putUserSaga)]);
    yield all([takeLatest(POST_USERS_REQUEST, postUserSaga)]);
}

export default usersSaga;