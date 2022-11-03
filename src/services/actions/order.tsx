import { createOrder } from "../../utils/api";
import { BASKET_CLEAR } from "./basket";

export const CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILED = "CHECKOUT_FAILED";
export const CLEAR_ORDER = "CLEAR_ORDER";

export function checkOutSend(
  body: { ingredients: Array<string> },
  token: string
) {
  // Отправка заказа
  return function (dispatch: any) {
    dispatch({ type: CHECKOUT_REQUEST });
    createOrder(body, token)
      .then((data) => {
        dispatch({ type: CHECKOUT_SUCCESS, order: data });
        dispatch({ type: BASKET_CLEAR });
      })
      .catch(() => {
        dispatch({ type: CHECKOUT_FAILED });
        setTimeout(() => {
          dispatch({ type: CLEAR_ORDER });
        }, 3000);
      });
  };
}
