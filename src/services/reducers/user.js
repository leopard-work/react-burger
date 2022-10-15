import Cookies from 'js-cookie';

import {
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_FAILED,
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILED,
    GET_TOKEN_FAILED,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_REQUEST,
    GET_USERINFO_FAILED,
    GET_USERINFO_SUCCESS,
    GET_USERINFO_REQUEST
} from "../actions/user";

const initialState = {
    user: '',
    refreshToken: '',
    accessToken: '',
    registerRequest: false,
    registerFailed: false,
    registerSuccess: false,
    loginRequest: false,
    loginFailed: false,
    loginSuccess: false,
    tokenRequest: false,
    tokenFailed: false,
    tokenSuccess: false,
    userInfoRequest: false,
    userInfoFailed: false,
    userInfoSuccess: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true
            };
        }
        case GET_REGISTER_SUCCESS: {
            Cookies.set('token', action.data.refreshToken, { expires: 7, path: '/' });
            return {
                ...state,
                user: action.data.user,
                accessToken: action.data.accessToken.split('Bearer ')[1],
                refreshToken: action.data.refreshToken,
                registerRequest: false,
                registerFailed: false,
                registerSuccess: true
            }
        }
        case GET_REGISTER_FAILED: {
            return {
                ...state,
                registerFailed: true,
                registerRequest: false
            }
        }
        case GET_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true
            };
        }
        case GET_LOGIN_SUCCESS: {
            Cookies.set('token', action.data.refreshToken, { expires: 7, path: '/' });
            return {
                ...state,
                user: action.data.user,
                accessToken: action.data.accessToken.split('Bearer ')[1],
                refreshToken: action.data.refreshToken,
                loginRequest: false,
                loginFailed: false,
                loginSuccess: true
            }
        }
        case GET_LOGIN_FAILED: {
            return {
                ...state,
                loginFailed: true,
                loginRequest: false
            }
        }
        case GET_TOKEN_REQUEST: {
            return {
                ...state,
                tokenRequest: true
            };
        }
        case GET_TOKEN_SUCCESS: {
            Cookies.set('token', action.data.refreshToken, { expires: 7, path: '/' });
            return {
                ...state,
                accessToken: action.data.accessToken.split('Bearer ')[1],
                refreshToken: action.data.refreshToken,
                tokenRequest: false,
                tokenFailed: false,
                tokenSuccess: true
            }
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                tokenFailed: true,
                tokenRequest: false
            }
        }
        case GET_USERINFO_REQUEST: {
            console.log('x');
            return {
                ...state,
                userInfoRequest: true
            };
        }
        case GET_USERINFO_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                userInfoRequest: false,
                userInfoFailed: false,
                userInfoSuccess: true
            }
        }
        case GET_USERINFO_FAILED: {
            return {
                ...state,
                userInfoFailed: true,
                userInfoRequest: false
            }
        }
        default: {
            return state;
        }
    }
}