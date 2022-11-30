import {
  ADD_TO_BASKET,
  BASKET_ACTIONS,
  BASKET_CLEAR,
  REMOVE_FROM_BASKET,
  SORT_BASKET,
} from "../actions/basket";

import { initialState, basketReducer } from "./basket";
import renderer from "react-test-renderer";

import React from "react";

const testItem = {
  _id: "",
  name: "testItem",
  type: "",
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: "",
  image_mobile: "",
  image_large: "",
  __v: 0,
  count: 0,
};
const testItem2 = { ...testItem, name: "testItem 2" };

describe("Корзина", () => {
  it("- исходное состояние", () => {
    expect(basketReducer(undefined, {})).toEqual(initialState);
    const tree = renderer.create(<>Исходное состояние</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка ADD_TO_BASKET", () => {
    expect(
      basketReducer(initialState, {
        type: ADD_TO_BASKET,
        item: testItem,
      })
    ).toEqual({
      ...initialState,
      basket: [...initialState.basket, { ...testItem, count: 1 }],
    });
    const tree = renderer.create(<>Добавление товара в корзину</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка REMOVE_FROM_BASKET", () => {
    expect(
      basketReducer(
        { ...initialState, basket: [testItem] },
        {
          type: REMOVE_FROM_BASKET,
          item: testItem,
        }
      )
    ).toEqual({
      ...initialState,
      basket: [],
    });
    const tree = renderer.create(<>Удаление товара из корзины</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка SORT_BASKET", () => {
    expect(
      basketReducer(
        { ...initialState, basket: [testItem, testItem2] },
        {
          type: SORT_BASKET,
          item: testItem,
          index: 1,
        }
      )
    ).toEqual({
      ...initialState,
      basket: [testItem2, testItem],
    });
    const tree = renderer
      .create(<>Сортировка корзины в зависимости от перемещенных элементов</>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка BASKET_CLEAR", () => {
    expect(
      basketReducer(
        { ...initialState, basket: [testItem] },
        {
          type: BASKET_CLEAR,
        }
      )
    ).toEqual({
      ...initialState,
      basket: [],
    });
    const tree = renderer.create(<>Чистка корзины</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// SORT_BASKET
