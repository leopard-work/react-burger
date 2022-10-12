import {CHECKOUT_FAILED, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CLEAR_ORDER} from "../actions/order";

const initialState = {
    orderInfo: {},                                                                          // Информация о заказе
    orderModalOpen: false,                                                                  // Открытие окна с заказом
    orderRequest: false,
    orderFailed: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST: {                                                            // Отправка заказа
            return {
                ...state,
                orderRequest: true
            }
        }
        case CHECKOUT_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: false,
                orderModalOpen: true,
                orderInfo: action.order,
            };
        }
        case CHECKOUT_FAILED: {
            return {
                ...state,
                orderFailed: true,
                orderRequest: false
            }
        }
        case CLEAR_ORDER: {                                                                 // Удаление информации о заказе
            return {
                ...state,
                orderInfo: {},
                orderFailed: false,
                orderModalOpen: false
            }
        }
        default: {
            return state;
        }
    }
}