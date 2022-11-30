import {
  CHANGE_ACTIVE_TAB,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
} from "../actions/catalog";

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
const testItems = [testItem, testItem, testItem];

import { initialState, catalogReducer } from "./catalog";
import renderer from "react-test-renderer";
import { Link } from "../../components/app-header/app-header";
import React from "react";

describe("Каталог товаров", () => {
  it("- исходное состояние", () => {
    expect(catalogReducer(undefined, {})).toEqual(initialState);
    const tree = renderer.create(<>Исходное состояние</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_ITEMS_REQUEST", () => {
    expect(
      catalogReducer(undefined, {
        type: GET_ITEMS_REQUEST,
      })
    ).toEqual({
      ...initialState,
      itemsRequest: true,
    });
    const tree = renderer.create(<>Запрос каталога</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_ITEMS_SUCCESS", () => {
    expect(
      catalogReducer(undefined, {
        type: GET_ITEMS_SUCCESS,
        items: testItems,
      })
    ).toEqual({
      ...initialState,
      items: testItems,
      itemsRequest: false,
      itemsFailed: false,
    });
    const tree = renderer.create(<>Получение товаров</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка GET_ITEMS_FAILED", () => {
    expect(
      catalogReducer(undefined, {
        type: GET_ITEMS_FAILED,
      })
    ).toEqual({
      ...initialState,
      itemsFailed: true,
      itemsRequest: false,
    });
    const tree = renderer.create(<>Ошибка загрузки товаров</>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CHANGE_ACTIVE_TAB", () => {
    expect(
      catalogReducer(undefined, {
        type: CHANGE_ACTIVE_TAB,
        activeTab: "sauce",
      })
    ).toEqual({
      ...initialState,
      activeTab: "sauce",
    });
    const tree = renderer
      .create(<>Замена вкладки категории в каталоге</>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
