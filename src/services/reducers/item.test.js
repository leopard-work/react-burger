import { CLOSE_VIEW_ITEM, VIEW_ITEM } from "../actions/item";
import { initialState, itemReducer } from "./item";
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

describe("Открытие окна ингредиента", () => {
  it("- исходное состояние", () => {
    expect(itemReducer(initialState, {})).toEqual(initialState);
  });
  it("- обработка VIEW_ITEM", () => {
    expect(
      itemReducer(undefined, {
        type: VIEW_ITEM,
        item: testItem,
      })
    ).toEqual({
      viewItemElement: testItem,
      viewItemModalOpen: true,
    });
    const tree = renderer
      .create(<>Получение товара для открытия в модальном окне</>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("- обработка CLOSE_VIEW_ITEM", () => {
    expect(
      itemReducer(initialState, {
        type: CLOSE_VIEW_ITEM,
      })
    ).toEqual({
      viewItemElement: initialState.viewItemElement,
      viewItemModalOpen: false,
    });
    const tree = renderer
      .create(<>Закрытие модального окна и удаление товара</>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
