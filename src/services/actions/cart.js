import {loadIngredients} from "../../utils/api";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

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