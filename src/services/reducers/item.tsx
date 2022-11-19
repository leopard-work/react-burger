import { CLOSE_VIEW_ITEM, VIEW_ITEM, VIEW_ITEM_ACTIONS } from "../actions/item";
import { ItemProps } from "../../utils/types";

type itemState = {
  viewItemModalOpen: boolean;
  viewItemElement: ItemProps;
};

const initialState: itemState = {
  viewItemModalOpen: false,
  viewItemElement: {
    _id: "",
    name: "",
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
  },
};

export const itemReducer = (
  state = initialState,
  action: VIEW_ITEM_ACTIONS
) => {
  switch (action.type) {
    case VIEW_ITEM: {
      // Подробный просмотр товара
      return {
        ...state,
        viewItemElement: action.item,
        viewItemModalOpen: true,
      };
    }
    case CLOSE_VIEW_ITEM: {
      // Закрытие окна и удаление информации подробного просмотра товара
      return {
        ...state,
        viewItemElement: initialState.viewItemElement,
        viewItemModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
