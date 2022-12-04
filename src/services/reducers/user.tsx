import Cookies from "js-cookie";

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
  GET_USERINFO_REQUEST,
  GET_UPDATEUSER_REQUEST,
  GET_UPDATEUSER_SUCCESS,
  GET_UPDATEUSER_FAILED,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  GET_FORGOT_REQUEST,
  GET_FORGOT_SUCCESS,
  GET_FORGOT_FAILED,
  SET_FORGOT_EMAIL,
  GET_RESET_REQUEST,
  GET_RESET_SUCCESS,
  GET_RESET_FAILED,
  GET_USER_ALL_ACTIONS,
} from "../actions/user";

type userState = {
  user: string;
  refreshToken: string;
  accessToken: string;
  registerRequest: boolean;
  registerFailed: boolean;
  registerSuccess: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  loginSuccess: boolean;
  tokenRequest: boolean;
  tokenFailed: boolean;
  tokenSuccess: boolean;
  userCheck: boolean;
  userInfoRequest: boolean;
  userInfoFailed: boolean;
  userInfoSuccess: boolean;
  updateUserRequest: boolean;
  updateUserFailed: boolean;
  updateUserSuccess: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
  logoutSuccess: boolean;
  forgotRequest: boolean;
  forgotFailed: boolean;
  forgotSuccess: boolean;
  forgotEmail: string;
  resetRequest: boolean;
  resetFailed: boolean;
  resetSuccess: boolean;
};

export const initialState: userState = {
  user: "",
  refreshToken: "",
  accessToken: "",
  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,
  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,
  tokenRequest: false,
  tokenFailed: false,
  tokenSuccess: false,
  userCheck: true,
  userInfoRequest: false,
  userInfoFailed: false,
  userInfoSuccess: false,
  updateUserRequest: false,
  updateUserFailed: false,
  updateUserSuccess: false,
  logoutRequest: false,
  logoutFailed: false,
  logoutSuccess: false,
  forgotRequest: false,
  forgotFailed: false,
  forgotSuccess: false,
  forgotEmail: "",
  resetRequest: false,
  resetFailed: false,
  resetSuccess: false,
};

export const userReducer = (
  state = initialState,
  action: GET_USER_ALL_ACTIONS
) => {
  switch (action.type) {
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case GET_REGISTER_SUCCESS: {
      Cookies.set("token", action.data.refreshToken, { expires: 7, path: "/" });
      return {
        ...state,
        user: action.data.user,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
        registerRequest: false,
        registerFailed: false,
        registerSuccess: true,
      };
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
      };
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      Cookies.set("token", action.data.refreshToken, { expires: 7, path: "/" });
      return {
        ...state,
        user: action.data.user,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
        loginRequest: false,
        loginFailed: false,
        loginSuccess: true,
        resetSuccess: false,
      };
    }
    case GET_LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case GET_TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
      };
    }
    case GET_TOKEN_SUCCESS: {
      Cookies.set("token", action.data.refreshToken, { expires: 7, path: "/" });
      return {
        ...state,
        accessToken: action.data.accessToken.split("Bearer ")[1],
        refreshToken: action.data.refreshToken,
        tokenRequest: false,
        tokenFailed: false,
        tokenSuccess: true,
        userCheck: false,
      };
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        tokenFailed: true,
        tokenRequest: false,
        userCheck: false,
      };
    }
    case GET_USERINFO_REQUEST: {
      return {
        ...state,
        userInfoRequest: true,
      };
    }
    case GET_USERINFO_SUCCESS: {
      return {
        ...state,
        user: action.data.user,
        userInfoRequest: false,
        userInfoFailed: false,
        userInfoSuccess: true,
      };
    }
    case GET_USERINFO_FAILED: {
      return {
        ...state,
        userInfoFailed: true,
        userInfoRequest: false,
      };
    }
    case GET_UPDATEUSER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
      };
    }
    case GET_UPDATEUSER_SUCCESS: {
      return {
        ...state,
        user: action.data.user,
        updateUserRequest: false,
        updateUserFailed: false,
        updateUserSuccess: true,
      };
    }
    case GET_UPDATEUSER_FAILED: {
      return {
        ...state,
        updateUserFailed: true,
        updateUserRequest: false,
      };
    }
    case GET_LOGOUT_REQUEST: {
      Cookies.remove("token");
      return initialState;
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...initialState,
        userCheck: false,
      };
    }
    case GET_LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
      };
    }
    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
      };
    }
    case GET_FORGOT_SUCCESS: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: false,
        forgotSuccess: true,
      };
    }
    case GET_FORGOT_FAILED: {
      return {
        ...state,
        forgotFailed: true,
        forgotRequest: false,
      };
    }
    case SET_FORGOT_EMAIL: {
      return {
        ...state,
        forgotEmail: action.data,
      };
    }
    case GET_RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
      };
    }
    case GET_RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: false,
        resetSuccess: true,
        forgotSuccess: false,
      };
    }
    case GET_RESET_FAILED: {
      return {
        ...state,
        resetFailed: true,
        resetRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
