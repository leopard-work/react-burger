import {createOrder} from "../../utils/api";

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export function checkOutSend(body) {                                // Отправка заказа
    return function(dispatch) {
        dispatch({type: CHECKOUT_REQUEST});
        createOrder(body).then((data) => {
            dispatch({type: CHECKOUT_SUCCESS, order: data});
        }).catch(() => {
            dispatch({type: CHECKOUT_FAILED});
            setTimeout(() => {
                dispatch({type: CLEAR_ORDER});
            }, 3000);
        })
    }
}