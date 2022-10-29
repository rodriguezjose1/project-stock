import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_SELECTED_USER,
    PUT_USERS_REQUEST,
    PUT_USERS_SUCCESS,
    PUT_USERS_FAILURE,
    POST_USERS_REQUEST,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
} from "./actionTypes";

import { UsersActions, UsersState } from "./types";

export const initialState: UsersState = {
    pending: false,
    users: { users: [], total: 0, page: 0, limit: 10 },
    selectedUser: null,
    error: null,
};

export default (state: UsersState = initialState, action: UsersActions) => {
    switch (action.type) {
        // fetch users
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: {
                    ...state.users,
                    users: action.payload.users.users,
                    total: action.payload.users.total,
                },
                error: null,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                pending: false,
                users: initialState.users,
                error: action.payload.error,
            };
        // put users
        case PUT_USERS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case PUT_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.user,
                error: null,
            };
        case PUT_USERS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        // post users
        case POST_USERS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case POST_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.user,
                error: null,
            };
        case POST_USERS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        // set selected users
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload.selectedUser
            };
        default:
            return {
                ...state,
            };
    }
};