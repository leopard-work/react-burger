import {
  forgotUserAPI,
  infoUserAPI,
  loginUserAPI,
  logoutUserAPI,
  registerUserAPI,
  resetUserAPI,
  tokenUserAPI,
  updateUserAPI,
} from "../../utils/api";
import {
  LoginUserProps,
  TokenUserProps,
  UpdateUserProps,
  ResetUserProps,
  ForgotUserProps,
  RegisterUserProps,
  userDataProps,
} from "../../utils/types";
import { Dispatch } from "redux";

export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" =
  "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" =
  "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";
export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS" = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED: "GET_LOGIN_FAILED" = "GET_LOGIN_FAILED";
export const GET_TOKEN_REQUEST: "GET_TOKEN_REQUEST" = "GET_TOKEN_REQUEST";
export const GET_TOKEN_SUCCESS: "GET_TOKEN_SUCCESS" = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILED: "GET_TOKEN_FAILED" = "GET_TOKEN_FAILED";
export const GET_USERINFO_REQUEST: "GET_USERINFO_REQUEST" =
  "GET_USERINFO_REQUEST";
export const GET_USERINFO_SUCCESS: "GET_USERINFO_SUCCESS" =
  "GET_USERINFO_SUCCESS";
export const GET_USERINFO_FAILED: "GET_USERINFO_FAILED" = "GET_USERINFO_FAILED";
export const GET_UPDATEUSER_REQUEST: "GET_UPDATEUSER_REQUEST" =
  "GET_UPDATEUSER_REQUEST";
export const GET_UPDATEUSER_SUCCESS: "GET_UPDATEUSER_SUCCESS" =
  "GET_UPDATEUSER_SUCCESS";
export const GET_UPDATEUSER_FAILED: "GET_UPDATEUSER_FAILED" =
  "GET_UPDATEUSER_FAILED";
export const GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST" = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS: "GET_LOGOUT_SUCCESS" = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED: "GET_LOGOUT_FAILED" = "GET_LOGOUT_FAILED";
export const GET_FORGOT_REQUEST: "GET_FORGOT_REQUEST" = "GET_FORGOT_REQUEST";
export const GET_FORGOT_SUCCESS: "GET_FORGOT_SUCCESS" = "GET_FORGOT_SUCCESS";
export const GET_FORGOT_FAILED: "GET_FORGOT_FAILED" = "GET_FORGOT_FAILED";
export const SET_FORGOT_EMAIL: "SET_FORGOT_EMAIL" = "SET_FORGOT_EMAIL";
export const GET_RESET_REQUEST: "GET_RESET_REQUEST" = "GET_RESET_REQUEST";
export const GET_RESET_SUCCESS: "GET_RESET_SUCCESS" = "GET_RESET_SUCCESS";
export const GET_RESET_FAILED: "GET_RESET_FAILED" = "GET_RESET_FAILED";

interface GET_REGISTER_REQUEST_ACTION {
  readonly type: typeof GET_REGISTER_REQUEST;
}
interface GET_REGISTER_SUCCESS_ACTION {
  readonly type: typeof GET_REGISTER_SUCCESS;
  data: userDataProps;
}
interface GET_REGISTER_FAILED_ACTION {
  readonly type: typeof GET_REGISTER_FAILED;
}
interface GET_LOGIN_REQUEST_ACTION {
  readonly type: typeof GET_LOGIN_REQUEST;
}
interface GET_LOGIN_SUCCESS_ACTION {
  readonly type: typeof GET_LOGIN_SUCCESS;
  data: userDataProps;
}
interface GET_LOGIN_FAILED_ACTION {
  readonly type: typeof GET_LOGIN_FAILED;
}
interface GET_TOKEN_REQUEST_ACTION {
  readonly type: typeof GET_TOKEN_REQUEST;
}
interface GET_TOKEN_SUCCESS_ACTION {
  readonly type: typeof GET_TOKEN_SUCCESS;
  data: userDataProps;
}
interface GET_TOKEN_FAILED_ACTION {
  readonly type: typeof GET_TOKEN_FAILED;
}
interface GET_USERINFO_REQUEST_ACTION {
  readonly type: typeof GET_USERINFO_REQUEST;
}
interface GET_USERINFO_SUCCESS_ACTION {
  readonly type: typeof GET_USERINFO_SUCCESS;
  data: userDataProps;
}
interface GET_USERINFO_FAILED_ACTION {
  readonly type: typeof GET_USERINFO_FAILED;
}
interface GET_UPDATEUSER_REQUEST_ACTION {
  readonly type: typeof GET_UPDATEUSER_REQUEST;
}
interface GET_UPDATEUSER_SUCCESS_ACTION {
  readonly type: typeof GET_UPDATEUSER_SUCCESS;
  data: userDataProps;
}
interface GET_UPDATEUSER_FAILED_ACTION {
  readonly type: typeof GET_UPDATEUSER_FAILED;
}
interface GET_LOGOUT_REQUEST_ACTION {
  readonly type: typeof GET_LOGOUT_REQUEST;
}
interface GET_LOGOUT_SUCCESS_ACTION {
  readonly type: typeof GET_LOGOUT_SUCCESS;
}
interface GET_LOGOUT_FAILED_ACTION {
  readonly type: typeof GET_LOGOUT_FAILED;
}
interface GET_FORGOT_REQUEST_ACTION {
  readonly type: typeof GET_FORGOT_REQUEST;
}
interface GET_FORGOT_SUCCESS_ACTION {
  readonly type: typeof GET_FORGOT_SUCCESS;
}
interface GET_FORGOT_FAILED_ACTION {
  readonly type: typeof GET_FORGOT_FAILED;
}
interface SET_FORGOT_EMAIL_ACTION {
  readonly type: typeof SET_FORGOT_EMAIL;
  data: string | undefined;
}
interface GET_RESET_REQUEST_ACTION {
  readonly type: typeof GET_RESET_REQUEST;
}
interface GET_RESET_SUCCESS_ACTION {
  readonly type: typeof GET_RESET_SUCCESS;
}
interface GET_RESET_FAILED_ACTION {
  readonly type: typeof GET_RESET_FAILED;
}

type GET_REGISTER_ACTIONS =
  | GET_REGISTER_REQUEST_ACTION
  | GET_REGISTER_SUCCESS_ACTION
  | GET_REGISTER_FAILED_ACTION;

type GET_LOGIN_ACTIONS =
  | GET_LOGIN_REQUEST_ACTION
  | GET_LOGIN_SUCCESS_ACTION
  | GET_LOGIN_FAILED_ACTION;

type GET_TOKEN_ACTIONS =
  | GET_TOKEN_REQUEST_ACTION
  | GET_TOKEN_SUCCESS_ACTION
  | GET_TOKEN_FAILED_ACTION;

type GET_USERINFO_ACTIONS =
  | GET_USERINFO_REQUEST_ACTION
  | GET_USERINFO_SUCCESS_ACTION
  | GET_USERINFO_FAILED_ACTION;

type GET_UPDATEUSER_ACTIONS =
  | GET_UPDATEUSER_REQUEST_ACTION
  | GET_UPDATEUSER_SUCCESS_ACTION
  | GET_UPDATEUSER_FAILED_ACTION;

type GET_LOGOUT_ACTIONS =
  | GET_LOGOUT_REQUEST_ACTION
  | GET_LOGOUT_SUCCESS_ACTION
  | GET_LOGOUT_FAILED_ACTION;

type GET_FORGOT_ACTIONS =
  | GET_FORGOT_REQUEST_ACTION
  | GET_FORGOT_SUCCESS_ACTION
  | GET_FORGOT_FAILED_ACTION
  | SET_FORGOT_EMAIL_ACTION;

type GET_RESET_ACTIONS =
  | GET_RESET_REQUEST_ACTION
  | GET_RESET_SUCCESS_ACTION
  | GET_RESET_FAILED_ACTION;

export type GET_USER_ALL_ACTIONS =
  | GET_REGISTER_ACTIONS
  | GET_LOGIN_ACTIONS
  | GET_TOKEN_ACTIONS
  | GET_USERINFO_ACTIONS
  | GET_UPDATEUSER_ACTIONS
  | GET_LOGOUT_ACTIONS
  | GET_FORGOT_ACTIONS
  | GET_RESET_ACTIONS;

type GET_REGISTER_DISPATCH = Dispatch<GET_REGISTER_ACTIONS>;
type GET_LOGIN_DISPATCH = Dispatch<GET_LOGIN_ACTIONS>;
export type GET_TOKEN_DISPATCH = Dispatch<GET_TOKEN_ACTIONS>;
type GET_USERINFO_DISPATCH = Dispatch<GET_USERINFO_ACTIONS>;
type GET_UPDATEUSER_DISPATCH = Dispatch<GET_UPDATEUSER_ACTIONS>;
type GET_LOGOUT_DISPATCH = Dispatch<GET_LOGOUT_ACTIONS>;
type GET_FORGOT_DISPATCH = Dispatch<GET_FORGOT_ACTIONS>;
type GET_RESET_DISPATCH = Dispatch<GET_RESET_ACTIONS>;

export function registerUser(body: RegisterUserProps) {
  return function (dispatch: GET_REGISTER_DISPATCH) {
    dispatch({ type: GET_REGISTER_REQUEST });
    registerUserAPI(body)
      .then((data) => {
        if (data.success) dispatch({ type: GET_REGISTER_SUCCESS, data: data });
        else dispatch({ type: GET_REGISTER_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_REGISTER_FAILED });
      });
  };
}

export function loginUser(body: LoginUserProps) {
  return function (dispatch: GET_LOGIN_DISPATCH) {
    dispatch({ type: GET_LOGIN_REQUEST });
    loginUserAPI(body)
      .then((data) => {
        if (data.success) dispatch({ type: GET_LOGIN_SUCCESS, data: data });
        else dispatch({ type: GET_LOGIN_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_LOGIN_FAILED });
      });
  };
}

export function tokenUser(body: { token: string | undefined }) {
  return function (dispatch: GET_TOKEN_DISPATCH) {
    dispatch({ type: GET_TOKEN_REQUEST });
    tokenUserAPI(body)
      .then((data) => {
        if (data.success) {
          dispatch({ type: GET_TOKEN_SUCCESS, data: data });
          // @ts-ignore
          dispatch(infoUser(null, data.accessToken.split("Bearer ")[1]));
        } else dispatch({ type: GET_TOKEN_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_TOKEN_FAILED });
      });
  };
}

export function infoUser(body: null, token: string) {
  return function (dispatch: GET_USERINFO_DISPATCH) {
    dispatch({ type: GET_USERINFO_REQUEST });
    infoUserAPI(token)
      .then((data) => {
        if (data.success) dispatch({ type: GET_USERINFO_SUCCESS, data: data });
        else dispatch({ type: GET_USERINFO_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_USERINFO_FAILED });
      });
  };
}

export function updateUser(body: UpdateUserProps, auth: string) {
  return function (dispatch: GET_UPDATEUSER_DISPATCH) {
    dispatch({ type: GET_UPDATEUSER_REQUEST });
    updateUserAPI(body, auth)
      .then((data) => {
        if (data.success)
          dispatch({ type: GET_UPDATEUSER_SUCCESS, data: data });
        else dispatch({ type: GET_UPDATEUSER_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_UPDATEUSER_FAILED });
      });
  };
}

export function logoutUserAction(body: TokenUserProps) {
  return function (dispatch: GET_LOGOUT_DISPATCH) {
    dispatch({ type: GET_LOGOUT_REQUEST });
    logoutUserAPI(body)
      .then((data) => {
        if (data.success) {
          dispatch({ type: GET_LOGOUT_SUCCESS, data: data });
        } else dispatch({ type: GET_LOGOUT_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_LOGOUT_FAILED });
      });
  };
}

export function forgotUser(body: ForgotUserProps) {
  return function (dispatch: GET_FORGOT_DISPATCH) {
    dispatch({ type: GET_FORGOT_REQUEST });
    forgotUserAPI(body)
      .then((data) => {
        if (data.success) {
          dispatch({ type: GET_FORGOT_SUCCESS, data: data });
          dispatch({ type: SET_FORGOT_EMAIL, data: body.email });
        } else dispatch({ type: GET_FORGOT_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_FORGOT_FAILED });
      });
  };
}

export function resetUser(body: ResetUserProps) {
  return function (dispatch: GET_RESET_DISPATCH) {
    dispatch({ type: GET_RESET_REQUEST });
    resetUserAPI(body)
      .then((data) => {
        if (data.success) dispatch({ type: GET_RESET_SUCCESS });
        else dispatch({ type: GET_RESET_FAILED });
      })
      .catch(() => {
        dispatch({ type: GET_RESET_FAILED });
      });
  };
}
