import {registerUserAPI} from "../../utils/api";

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';

export function registerUser(body) {
    return function(dispatch) {
        dispatch({type: GET_REGISTER_REQUEST});
        registerUserAPI(body).then((data) => {
            if (data.success) dispatch({type: GET_REGISTER_SUCCESS, data: data});
            else dispatch({type: GET_REGISTER_FAILED});
        }).catch(() => {
            dispatch({type: GET_REGISTER_FAILED});
        })
    };
}