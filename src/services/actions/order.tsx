import { createOrder } from "../../utils/api";
import { BASKET_CLEAR, BasketClearAction } from "./basket";
import { Dispatch } from "redux";

export const CHECKOUT_REQUEST: "CHECKOUT_REQUEST" = "CHECKOUT_REQUEST";
export const CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS" = "CHECKOUT_SUCCESS";
export const CHECKOUT_FAILED: "CHECKOUT_FAILED" = "CHECKOUT_FAILED";
export const CLEAR_ORDER: "CLEAR_ORDER" = "CLEAR_ORDER";

interface CheckoutRequestAction {
  readonly type: typeof CHECKOUT_REQUEST;
}
interface CheckoutFailedAction {
  readonly type: typeof CHECKOUT_SUCCESS;
}
interface CheckoutSuccessAction {
  readonly type: typeof CHECKOUT_FAILED;
}
interface ClearOrderAction {
  readonly type: typeof CLEAR_ORDER;
}

type CheckoutActions =
  | CheckoutRequestAction
  | CheckoutFailedAction
  | CheckoutSuccessAction
  | ClearOrderAction
  | BasketClearAction;

type CheckoutDispatch = Dispatch<CheckoutActions>;

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
