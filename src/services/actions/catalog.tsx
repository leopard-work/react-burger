import { loadIngredients } from "../../utils/api";
import { Dispatch } from "redux";

export const GET_ITEMS_REQUEST: "GET_ITEMS_REQUEST" = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS" = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED: "GET_ITEMS_FAILED" = "GET_ITEMS_FAILED";
export const CHANGE_ACTIVE_TAB: "CHANGE_ACTIVE_TAB" = "CHANGE_ACTIVE_TAB";

interface GetItemsRequestAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}
interface GetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED;
}
interface GetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
}

type GetItemsActions =
  | GetItemsRequestAction
  | GetItemsFailedAction
  | GetItemsSuccessAction;

type GetItemsDispatch = Dispatch<GetItemsActions>;

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
