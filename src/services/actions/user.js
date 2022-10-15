import {infoUserAPI, loginUserAPI, logoutUserAPI, registerUserAPI, tokenUserAPI, updateUserAPI} from "../../utils/api";

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';
export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';
export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';
export const GET_USERINFO_REQUEST = 'GET_USERINFO_REQUEST';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAILED = 'GET_USERINFO_FAILED';
export const GET_UPDATEUSER_REQUEST = 'GET_UPDATEUSER_REQUEST';
export const GET_UPDATEUSER_SUCCESS = 'GET_UPDATEUSER_SUCCESS';
export const GET_UPDATEUSER_FAILED = 'GET_UPDATEUSER_FAILED';
export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';

export function registerUser(body) {
    return function(dispatch) {
        dispatch({type: GET_REGISTER_REQUEST});
        registerUserAPI(body).then((data) => {
            if (data.success) dispatch({type: GET_REGISTER_SUCCESS, data: data});
            else dispatch({type: GET_REGISTER_FAILED});
        }).catch(() => {
            dispatch({type: GET_REGISTER_FAILED});
        })
    };
}

export function loginUser(body) {
    return function(dispatch) {
        dispatch({type: GET_LOGIN_REQUEST});
        loginUserAPI(body).then((data) => {
            if (data.success) dispatch({type: GET_LOGIN_SUCCESS, data: data});
            else dispatch({type: GET_LOGIN_FAILED});
        }).catch(() => {
            dispatch({type: GET_LOGIN_FAILED});
        })
    };
}

export function tokenUser(body) {
    return function(dispatch) {
        dispatch({type: GET_TOKEN_REQUEST});
        tokenUserAPI(body).then((data) => {
            if (data.success) {
                dispatch({type: GET_TOKEN_SUCCESS, data: data});
                dispatch(infoUser(null, data.accessToken.split('Bearer ')[1]));
            }
            else dispatch({type: GET_TOKEN_FAILED});
        }).catch(() => {
            dispatch({type: GET_TOKEN_FAILED});
        })
    };
}

export function infoUser(body, token) {
    return function(dispatch) {
        dispatch({type: GET_USERINFO_REQUEST});
        infoUserAPI(body, token).then((data) => {
            console.log(data);
            if (data.success) dispatch({type: GET_USERINFO_SUCCESS, data: data});
            else dispatch({type: GET_USERINFO_FAILED});
        }).catch(() => {
            dispatch({type: GET_USERINFO_FAILED});
        })
    };
}

export function updateUser(body, auth) {
    return function(dispatch) {
        dispatch({type: GET_UPDATEUSER_REQUEST});
        updateUserAPI(body, auth).then((data) => {
            console.log(data);
            if (data.success) dispatch({type: GET_UPDATEUSER_SUCCESS, data: data});
            else dispatch({type: GET_UPDATEUSER_FAILED});
        }).catch(() => {
            dispatch({type: GET_UPDATEUSER_FAILED});
        })
    };
}

export function logoutUserAction(body) {
    return function(dispatch) {
        dispatch({type: GET_LOGOUT_REQUEST});
        logoutUserAPI(body).then((data) => {
            console.log(data);
            if (data.success) dispatch({type: GET_UPDATEUSER_SUCCESS, data: data});
            else dispatch({type: GET_LOGOUT_FAILED});
        }).catch(() => {
            dispatch({type: GET_LOGOUT_FAILED});
        })
    };
}