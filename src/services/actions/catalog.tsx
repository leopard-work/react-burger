import { loadIngredients } from "../../utils/api";
import { Dispatch } from "redux";
import { ItemProps } from "../../utils/types";

export const GET_ITEMS_REQUEST: "GET_ITEMS_REQUEST" = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS" = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED: "GET_ITEMS_FAILED" = "GET_ITEMS_FAILED";
export const CHANGE_ACTIVE_TAB: "CHANGE_ACTIVE_TAB" = "CHANGE_ACTIVE_TAB";

interface GET_ITEMS_REQUEST_ACTION {
  readonly type: typeof GET_ITEMS_REQUEST;
}
interface GET_ITEMS_SUCCESS_ACTION {
  readonly type: typeof GET_ITEMS_FAILED;
}
interface GET_ITEMS_FAILED_ACTION {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: {
    data: Array<ItemProps>;
    success: boolean;
  };
}
interface CHANGE_ACTIVE_TAB_ACTION {
  readonly type: typeof CHANGE_ACTIVE_TAB;
  readonly activeTab: string;
}

export type GET_ITEMS_ACTIONS =
  | GET_ITEMS_REQUEST_ACTION
  | GET_ITEMS_SUCCESS_ACTION
  | GET_ITEMS_FAILED_ACTION
  | CHANGE_ACTIVE_TAB_ACTION;

type GetItemsDispatch = Dispatch<GET_ITEMS_ACTIONS>;

export function getItems() {
  // Загрузка меню
  return function (dispatch: GetItemsDispatch) {
    dispatch({ type: GET_ITEMS_REQUEST });
    loadIngredients()
      .then((data) => {
        dispatch({ type: GET_ITEMS_SUCCESS, items: data });
      })
      .catch(() => {
        dispatch({ type: GET_ITEMS_FAILED });
      });
  };
}
