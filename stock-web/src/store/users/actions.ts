import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    SET_SELECTED_USER,
    PUT_USERS_REQUEST,
    PUT_USERS_FAILURE,
    PUT_USERS_SUCCESS,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
    POST_USERS_REQUEST
} from "./actionTypes";
import {
    FetchUsersRequest,
    FetchUsersSuccess,
    FetchUsersSuccessPayload,
    FetchUsersFailure,
    FetchUsersFailurePayload,
    PutUsersRequest,
    PutUsersSuccess,
    PutUsersSuccessPayload,
    PutUsersFailure,
    PutUsersFailurePayload,
    SetSelectedUserPayload,
    SetSelectedUser,
    PutUsersRequestPayload,
    PostUsersSuccessPayload,
    PostUsersSuccess,
    PostUsersFailurePayload,
    PostUsersFailure,
    PostUsersRequest,
    PostUsersRequestPayload,
} from "./types";

// Put users
export const fetchUsersRequest = (payload: any): FetchUsersRequest => ({
    type: FETCH_USERS_REQUEST,
    payload
});
export const fetchUsersSuccess = (
    payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
    type: FETCH_USERS_SUCCESS,
    payload,
});
export const fetchUsersFailure = (
    payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
    type: FETCH_USERS_FAILURE,
    payload,
});

export const putUsersRequest = (
    payload: PutUsersRequestPayload
): PutUsersRequest => {
    return {
        type: PUT_USERS_REQUEST,
        payload,
    }
};

export const putUsersSuccess = (
    payload: PutUsersSuccessPayload
): PutUsersSuccess => ({
    type: PUT_USERS_SUCCESS,
    payload,
});

export const putUsersFailure = (
    payload: PutUsersFailurePayload
): PutUsersFailure => ({
    type: PUT_USERS_FAILURE,
    payload,
});

export const postUsersRequest = (
    payload: PostUsersRequestPayload
): PostUsersRequest => {
    return {
        type: POST_USERS_REQUEST,
        payload,
    }
};

export const postUsersSuccess = (
    payload: PostUsersSuccessPayload
): PostUsersSuccess => ({
    type: POST_USERS_SUCCESS,
    payload,
});

export const postUsersFailure = (
    payload: PostUsersFailurePayload
): PostUsersFailure => ({
    type: POST_USERS_FAILURE,
    payload,
});


export const setSelectedUser = (
    payload: SetSelectedUserPayload
): SetSelectedUser => ({
    type: SET_SELECTED_USER,
    payload,
});