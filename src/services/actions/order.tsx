import { createOrder } from "../../utils/api";
import { BASKET_CLEAR, BASKET_CLEAR_ACTION } from "./basket";
import { Dispatch } from "redux";
import { OrderProps } from "../../utils/types";

export const CHECKOUT_REQUEST: "CHECKOUT_REQUEST" = "CHECKOUT_REQUEST";
export const CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS" = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILED: "CHECKOUT_FAILED" = "CHECKOUT_FAILED";
export const CLEAR_ORDER: "CLEAR_ORDER" = "CLEAR_ORDER";

interface CHECKOUT_REQUEST_ACTION {
  readonly type: typeof CHECKOUT_REQUEST;
}
interface CHECKOUT_SUCCESS_ACTION {
  readonly type: typeof CHECKOUT_SUCCESS;
  order: OrderProps;
}
interface CHECKOUT_FAILED_ACTION {
  readonly type: typeof CHECKOUT_FAILED;
}
interface CLEAR_ORDER_ACTION {
  readonly type: typeof CLEAR_ORDER;
}

export type CHECKOUT_ACTIONS =
  | CHECKOUT_REQUEST_ACTION
  | CHECKOUT_SUCCESS_ACTION
  | CHECKOUT_FAILED_ACTION
  | CLEAR_ORDER_ACTION
  | BASKET_CLEAR_ACTION;

type CheckoutDispatch = Dispatch<CHECKOUT_ACTIONS>;

export function checkOutSend(
  body: { ingredients: Array<string> },
  token: string
) {
  // Отправка заказа
  return function (dispatch: CheckoutDispatch) {
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
