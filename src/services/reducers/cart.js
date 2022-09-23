import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from "../actions/cart";

const initialState = {
    items: {
        data: [],
        success: false
    },
    itemsRequest: false,
    itemsFailed: false,

    basket: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            };
        }
        case GET_ITEMS_SUCCESS: {
            return {
                ...state,
                items: action.items,
                itemsRequest: false,
                itemsFailed: false
            }
        }
        case GET_ITEMS_FAILED: {
            return {
                ...state,
                itemsFailed: true,
                itemsRequest: false
            }
        }
        case ADD_TO_BASKET: {
            if (action.item.type === "bun") {                                               // Проверка булка или нет
                let itemFromBasket = state.basket.find(i => i.type === "bun");
                if (itemFromBasket) {                                                       // Если булка есть
                    const tempBasket = state.basket.filter(i => i.type !== action.item.type);
                    return {
                        ...state,
                        basket: [...tempBasket, {...action.item, count: 1}]
                    }
                }
                else {                                                                      // Если булки нет
                    return {
                        ...state,
                        basket: [...state.basket, {...action.item, count: 1}]
                    }
                }
            }
            else {                                                                          // Если не булка
                const itemFromBasket = state.basket.find(i => i._id === action.item._id);   // Проверка существования товара в корзине
                if (itemFromBasket) {                                                       // Если товар есть в корзине
                    state.basket.map((item) => {                                            // Увеличиваем количество
                        if (item._id === action.item._id) {
                            item.count++;
                        }
                        return state;
                    })
                    return {
                        ...state
                    }
                }
                else {                                                                      // Если товара нет, добавляем в корзину c увеличением счетчика
                    return {
                        ...state,
                        basket: [...state.basket, {...action.item, count: 1}]
                    }
                }
            }
        }
        case REMOVE_FROM_BASKET: {
            if (action.item.count > 1) {                                                    // Если количество >1 уменьшаем количество
                state.basket.map((item) => {
                    if (item._id === action.item._id) {
                        item.count--;
                    }
                    return state;
                });
                return {
                    ...state
                }
            } else {                                                                        // Удаляем товар
                return {
                    ...state,
                    basket: state.basket.filter(item => item._id !== action.item._id)
                }
            }
        }
        default: {
            return state;
        }
    }
}