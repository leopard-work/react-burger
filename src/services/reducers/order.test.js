import {
  CHECKOUT_ACTIONS,
  CHECKOUT_FAILED,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CLEAR_ORDER,
} from "../actions/order";

const testOrder = {
  ingredients: [],
  _id: "",
  owner: {
    name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  },
  status: "",
  name: "",
  createdAt: "",
  updatedAt: "",
  number: null,
  price: 0,
};

import { initialState, orderReducer } from "./order";
import renderer from "react-test-renderer";

import React from "react";

describe("Оформление заказа", () => {
  it("- исходное состояние", () => {
    expect(orderReducer(initialState, {})).toEqual(initialState);
    const tree = renderer.create(<>Исходное состояние</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CHECKOUT_REQUEST", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_REQUEST,
      })
    ).toEqual({
      ...initialState,
      orderRequest: true,
    });
    const tree = renderer.create(<>Запрос на отправку заказа</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CHECKOUT_SUCCESS", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_SUCCESS,
        order: testOrder,
      })
    ).toEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: false,
      orderModalOpen: true,
      orderInfo: testOrder,
    });
    const tree = renderer.create(<>Отправка заказа</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CHECKOUT_FAILED", () => {
    expect(
      orderReducer(initialState, {
        type: CHECKOUT_FAILED,
      })
    ).toEqual({
      ...initialState,
      orderFailed: true,
      orderRequest: false,
    });
    const tree = renderer.create(<>Ошибка отправки заказа</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
