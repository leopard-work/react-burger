import {createOrder, loadIngredients} from "../../utils/api";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const VIEW_ITEM = 'VIEW_ITEM';
export const CLOSE_VIEW_ITEM = 'CLOSE_VIEW_ITEM';
export const SORT_BASKET = 'SORT_BASKET';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export function getItems() {
    return function(dispatch) {
        dispatch({type: GET_ITEMS_REQUEST});
        loadIngredients().then((data) => {
            dispatch({type: GET_ITEMS_SUCCESS, items: data});
        }).catch(() => {
            dispatch({type: GET_ITEMS_FAILED});
        })
    };
}

export function checkOutSend(body) {
    return function(dispatch) {
        dispatch({type: CHECKOUT_REQUEST});
        createOrder(body).then((data) => {
            dispatch({type: CHECKOUT_SUCCESS, order: data});
        }).catch(() => {
            dispatch({type: CHECKOUT_FAILED});
        })
    }
}

export function addToBasket(payload) {

}