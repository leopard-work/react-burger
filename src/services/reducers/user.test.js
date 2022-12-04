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

import { initialState, userReducer } from "./user";
import renderer from "react-test-renderer";
import React from "react";
import { ordersReducer } from "./orders";

const testData = {
  user: {
    email: "test@test.test",
    name: "test",
  },
  accessToken: "12345",
  refreshToken: "12345",
};

describe("Работа с пользователем", () => {
  it("- исходное состояние", () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
    const tree = renderer.create(<>Исходное состояние</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_REGISTER_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_REGISTER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      registerRequest: true,
    });
    const tree = renderer.create(<>Регистрация запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_REGISTER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_REGISTER_SUCCESS,
        data: testData,
      })
    ).toEqual({
      ...initialState,
      user: testData.user,
      accessToken: undefined,
      refreshToken: testData.refreshToken,
      registerRequest: false,
      registerFailed: false,
      registerSuccess: true,
    });
    const tree = renderer.create(<>Регистрация завершена</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_REGISTER_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_REGISTER_FAILED,
      })
    ).toEqual({
      ...initialState,
      registerFailed: true,
      registerRequest: false,
    });
    const tree = renderer.create(<>Регистрация ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_LOGIN_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGIN_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loginRequest: true,
    });
    const tree = renderer.create(<>Авторизация запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_LOGIN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGIN_SUCCESS,
        data: testData,
      })
    ).toEqual({
      ...initialState,
      user: testData.user,
      accessToken: undefined,
      refreshToken: testData.refreshToken,
      loginRequest: false,
      loginFailed: false,
      loginSuccess: true,
      resetSuccess: false,
    });
    const tree = renderer.create(<>Авторизация завершена</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_LOGIN_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGIN_FAILED,
      })
    ).toEqual({
      ...initialState,
      loginFailed: true,
      loginRequest: false,
    });
    const tree = renderer.create(<>Авторизация ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_TOKEN_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_TOKEN_REQUEST,
      })
    ).toEqual({
      ...initialState,
      tokenRequest: true,
    });
    const tree = renderer.create(<>Получение токена запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_TOKEN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_TOKEN_SUCCESS,
        data: testData,
      })
    ).toEqual({
      ...initialState,
      accessToken: undefined,
      refreshToken: testData.refreshToken,
      tokenRequest: false,
      tokenFailed: false,
      tokenSuccess: true,
      userCheck: false,
    });
    const tree = renderer.create(<>Получение токена завершено</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_TOKEN_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_TOKEN_FAILED,
      })
    ).toEqual({
      ...initialState,
      tokenFailed: true,
      tokenRequest: false,
      userCheck: false,
    });
    const tree = renderer.create(<>Получение токена ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_USERINFO_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_USERINFO_REQUEST,
      })
    ).toEqual({
      ...initialState,
      userInfoRequest: true,
    });
    const tree = renderer.create(<>Получение информации запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_USERINFO_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_USERINFO_SUCCESS,
        data: testData,
      })
    ).toEqual({
      ...initialState,
      user: testData.user,
      userInfoRequest: false,
      userInfoFailed: false,
      userInfoSuccess: true,
    });
    const tree = renderer.create(<>Получение информации завершено</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_USERINFO_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_USERINFO_FAILED,
      })
    ).toEqual({
      ...initialState,
      userInfoFailed: true,
      userInfoRequest: false,
    });
    const tree = renderer.create(<>Получение информации ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_UPDATEUSER_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_UPDATEUSER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      updateUserRequest: true,
    });
    const tree = renderer.create(<>Обновление информации запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_UPDATEUSER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_UPDATEUSER_SUCCESS,
        data: testData,
      })
    ).toEqual({
      ...initialState,
      user: testData.user,
      updateUserRequest: false,
      updateUserFailed: false,
      updateUserSuccess: true,
    });
    const tree = renderer.create(<>Обновление информации завершено</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_UPDATEUSER_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_UPDATEUSER_FAILED,
      })
    ).toEqual({
      ...initialState,
      updateUserFailed: true,
      updateUserRequest: false,
    });
    const tree = renderer.create(<>Обновление информации ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_LOGOUT_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGOUT_REQUEST,
      })
    ).toEqual({
      ...initialState,
    });
    const tree = renderer.create(<>Выход запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_LOGOUT_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGOUT_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      userCheck: false,
    });
    const tree = renderer.create(<>Выход успешно</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_LOGOUT_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_LOGOUT_FAILED,
      })
    ).toEqual({
      ...initialState,
      logoutFailed: true,
      logoutRequest: false,
    });
    const tree = renderer.create(<>Выход ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_FORGOT_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_FORGOT_REQUEST,
      })
    ).toEqual({
      ...initialState,
      forgotRequest: true,
    });
    const tree = renderer.create(<>Забыли пароль запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_FORGOT_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_FORGOT_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: true,
    });
    const tree = renderer.create(<>Забыли пароль успешно</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_FORGOT_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_FORGOT_FAILED,
      })
    ).toEqual({
      ...initialState,
      forgotFailed: true,
      forgotRequest: false,
    });
    const tree = renderer.create(<>Забыли пароль ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка SET_FORGOT_EMAIL", () => {
    expect(
      userReducer(initialState, {
        type: SET_FORGOT_EMAIL,
        data: testData.user.email,
      })
    ).toEqual({
      ...initialState,
      forgotEmail: testData.user.email,
    });
    const tree = renderer.create(<>Запоминание email</>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("- обработка GET_RESET_REQUEST", () => {
    expect(
      userReducer(initialState, {
        type: GET_RESET_REQUEST,
      })
    ).toEqual({
      ...initialState,
      resetRequest: true,
    });
    const tree = renderer.create(<>Обновление пароля запрос</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_RESET_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_RESET_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      resetRequest: false,
      resetFailed: false,
      resetSuccess: true,
      forgotSuccess: false,
    });
    const tree = renderer.create(<>Обновление пароля успешно</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_RESET_FAILED", () => {
    expect(
      userReducer(initialState, {
        type: GET_RESET_FAILED,
      })
    ).toEqual({
      ...initialState,
      resetFailed: true,
      resetRequest: false,
    });
    const tree = renderer.create(<>Обновление пароля ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
