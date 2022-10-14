import {GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_REGISTER_FAILED} from "../actions/user";

const initialState = {
    user: '',
    refreshToken: '',
    accessToken: '',
    registerRequest: false,
    registerFailed: false,
    registerSuccess: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true
            };
        }
        case GET_REGISTER_SUCCESS: {
            console.log(action.data);
            return {
                ...state,
                user: action.data.user,
                registerRequest: false,
                registerFailed: false,
                registerSuccess: true
            }
        }
        case GET_REGISTER_FAILED: {
            return {
                ...state,
                registerFailed: true,
                registerRequest: false
            }
        }
        default: {
            return state;
        }
    }
}