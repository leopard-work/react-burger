import {
    ADD_TO_BASKET,
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS
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
                if (itemFromBasket) {
                    state.basket.map((item) => {                                            // Увеличивам количество
                        if (item._id === action.item._id) {
                            item.count++;
                        }
                        return state;
                    })
                }
                else {                                                                      // Если товара нет, добавляем в корзину c увеличением счетчика
                    return {
                        ...state,
                        basket: [...state.basket, {...action.item, count: 1}]
                    }
                }
            }
        }
        default: {
            return state;
        }
    }
}