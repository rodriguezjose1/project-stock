import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_SELECTED_USER,
    PUT_USERS_SUCCESS,
    PUT_USERS_FAILURE,
    PUT_USERS_REQUEST,
    POST_USERS_REQUEST,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
} from "./actionTypes";

export interface IUser {
    id: string;
    name: string;
    lastname: string;
    address: string;
    phone: string;
}

export interface IResponseUsers {
    users: IUser[];
    total: number;
    limit: number;
    page: number;
}

export interface UsersState {
    pending: boolean;
    users: IResponseUsers;
    error: string | null;
    selectedUser: IUser | null;
}

// fetch users types: http
export interface FetchUsersSuccessPayload {
    users: IResponseUsers;
}
export interface FetchUsersFailurePayload {
    error: string;
}

export interface FetchUsersRequest {
    type: typeof FETCH_USERS_REQUEST;
    payload: any
}
export type FetchUsersSuccess = {
    type: typeof FETCH_USERS_SUCCESS;
    payload: FetchUsersSuccessPayload;
};
export type FetchUsersFailure = {
    type: typeof FETCH_USERS_FAILURE;
    payload: FetchUsersFailurePayload;
};
// end users types

// put users types: http
export interface PutUsersRequestPayload {
    id: string,
    user: IUser;
}
export interface PutUsersSuccessPayload {
    user: IUser;
}
export interface PutUsersFailurePayload {
    error: string;
}

export interface PutUsersRequest {
    type: typeof PUT_USERS_REQUEST;
    payload: PutUsersRequestPayload;
}
export type PutUsersSuccess = {
    type: typeof PUT_USERS_SUCCESS;
    payload: PutUsersSuccessPayload;
};
export type PutUsersFailure = {
    type: typeof PUT_USERS_FAILURE;
    payload: PutUsersFailurePayload;
};
// end put types

// post users types: http
export interface PostUsersRequestPayload {
    user: IUser;
}
export interface PostUsersSuccessPayload {
    user: IUser;
}
export interface PostUsersFailurePayload {
    error: string;
}

export interface PostUsersRequest {
    type: typeof POST_USERS_REQUEST;
    payload: PostUsersRequestPayload;
}
export type PostUsersSuccess = {
    type: typeof POST_USERS_SUCCESS;
    payload: PostUsersSuccessPayload;
};
export type PostUsersFailure = {
    type: typeof POST_USERS_FAILURE;
    payload: PostUsersFailurePayload;
};
// end post types

// set selected user payload: local
export interface SetSelectedUserPayload {
    selectedUser: IUser;
}

export interface SetSelectedUser {
    type: typeof SET_SELECTED_USER;
    payload: SetSelectedUserPayload;
}
// end set selected user

// all actions
export type UsersActions =
    | FetchUsersRequest
    | FetchUsersSuccess
    | FetchUsersFailure
    | PutUsersRequest
    | PutUsersSuccess
    | PutUsersFailure
    | PostUsersRequest
    | PostUsersSuccess
    | PostUsersFailure
    | SetSelectedUser;
