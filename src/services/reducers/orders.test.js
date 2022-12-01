import {
  ORDERS_CONNECT,
  ORDERS_DISCONNECT,
  ORDERS_WS_CONNECTING,
  ORDERS_WS_OPEN,
  ORDERS_WS_CLOSE,
  ORDERS_WS_ERROR,
  ORDERS_WS_MESSAGE,
  ORDERS_ACTIONS,
  OPEN_ORDER_ITEM,
  CLOSE_ORDER_ITEM,
} from "../actions/orders";

import { initialState, ordersReducer } from "./orders";
import renderer from "react-test-renderer";
import React from "react";

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

describe("Лента заказов", () => {
  it("- исходное состояние", () => {
    expect(ordersReducer(initialState, {})).toEqual(initialState);
    const tree = renderer.create(<>Исходное состояние</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_CONNECT", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_CONNECT,
      })
    ).toEqual({
      ...initialState,
      status: "connect...",
    });
    const tree = renderer.create(<>Подключение websocket</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_WS_CONNECTING", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_WS_CONNECTING,
      })
    ).toEqual({
      ...initialState,
      status: "connecting",
      connect: true,
    });
    const tree = renderer.create(<>websocket подключен</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_WS_OPEN", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_WS_OPEN,
      })
    ).toEqual({
      ...initialState,
      status: "open",
    });
    const tree = renderer.create(<>websocket открытие</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_WS_MESSAGE", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_WS_MESSAGE,
      })
    ).toEqual({
      ...initialState,
      status: "message",
      ordersData: undefined,
    });
    const tree = renderer.create(<>websocket получение сообщения</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_WS_CLOSE", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_WS_CLOSE,
      })
    ).toEqual({
      ...initialState,
      status: "close",
      connect: false,
    });
    const tree = renderer.create(<>websocket закрытие</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ORDERS_WS_ERROR", () => {
    expect(
      ordersReducer(initialState, {
        type: ORDERS_WS_ERROR,
        error: "test",
      })
    ).toEqual({
      ...initialState,
      status: "error",
      error: "test",
      connect: false,
    });
    const tree = renderer.create(<>websocket ошибка</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка OPEN_ORDER_ITEM", () => {
    expect(
      ordersReducer(initialState, {
        type: OPEN_ORDER_ITEM,
        item: testOrder,
      })
    ).toEqual({
      ...initialState,
      viewFullOrder: testOrder,
      viewFullOrderModalOpen: true,
    });
    const tree = renderer.create(<>открытие отдельного заказа</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CLOSE_ORDER_ITEM", () => {
    expect(
      ordersReducer(initialState, {
        type: CLOSE_ORDER_ITEM,
      })
    ).toEqual({
      ...initialState,
      viewFullOrderModalOpen: false,
    });
    const tree = renderer.create(<>закрытие отдельного заказа</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
