import {
  CHANGE_ACTIVE_TAB,
  GET_ITEMS_ACTIONS,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
} from "../actions/catalog";
import { ItemProps } from "../../utils/types";

type catalogState = {
  items: {
    data: Array<ItemProps>;
    success: boolean;
  };
  itemsRequest: boolean;
  itemsFailed: boolean;
  activeTab: string;
};

export const initialState: catalogState = {
  items: {
    // Меню
    data: [],
    success: false,
  },
  itemsRequest: true,
  itemsFailed: false,

  activeTab: "one", // Активаная вкладка навигации в меню
};

export const catalogReducer = (
  state = initialState,
  action: GET_ITEMS_ACTIONS
) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.items,
        itemsRequest: false,
        itemsFailed: false,
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
      };
    }
    case CHANGE_ACTIVE_TAB: {
      // Установка активного элемента в навигации меню
      return {
        ...state,
        activeTab: action.activeTab,
      };
    }
    default: {
      return state;
    }
  }
};
