import {
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_FAILED,
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS, GET_LOGIN_FAILED
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
    loginSuccess: false
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
            console.log(action.data);
            return {
                ...state,
                user: action.data.user,
                accessToken: action.data.accessToken,
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
            console.log(action.data);
            return {
                ...state,
                user: action.data.user,
                accessToken: action.data.accessToken,
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
        default: {
            return state;
        }
    }
}