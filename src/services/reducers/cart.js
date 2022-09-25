import {
    GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS,
    ADD_TO_BASKET, REMOVE_FROM_BASKET, SORT_BASKET,
    CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILED, CLEAR_ORDER,
    VIEW_ITEM, CLOSE_VIEW_ITEM,
    CHANGE_ACTIVE_TAB
} from "../actions/cart";

const initialState = {
    items: {                                                                                // Меню
        data: [],
        success: false
    },
    itemsRequest: true,
    itemsFailed: false,

    basket: [],                                                                             // Корзина

    orderInfo: {},                                                                          // Информация о заказе
    orderModalOpen: false,                                                                  // Открытие окна с заказом
    orderRequest: false,
    orderFailed: false,

    viewItemModalOpen: false,                                                               // Открытие окна с информацией о товаре
    viewItemElement: {                                                                      // Подробная информация о товаре в всплывающем окне
        _id: '',
        name: '',
        type: '',
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        image: '',
        image_mobile: '',
        image_large: '',
        __v: 0
    },

    activeTab: 'one'                                                                        // Активаная вкладка навигации в меню
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
        case ADD_TO_BASKET: {                                                               // Добавление товара в корзину
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
        case REMOVE_FROM_BASKET: {                                                          // Удаление товара из корзины
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
                basket: []
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
                orderModalOpen: false
            }
        }
        case VIEW_ITEM: {                                                                   // Подробный просмотр товара
            return {
                ...state,
                viewItemElement: action.item,
                viewItemModalOpen: true
            }
        }
        case CLOSE_VIEW_ITEM: {                                                             // Закрытие окна и удаление информации подробного просмотра товара
            return {
                ...state,
                viewItemElement: initialState.viewItemElement,
                viewItemModalOpen: false
            }
        }
        case SORT_BASKET: {                                                                 // Сортировка корзины в зависимости от перемещенных элементов
            let tempBasket = [...state.basket];
            tempBasket[action.index] = tempBasket.splice(state.basket.indexOf(action.item), 1, tempBasket[action.index])[0];
            return {
                ...state,
                basket: tempBasket
            };
        }
        case CHANGE_ACTIVE_TAB: {                                                           // Установка активного элемента в навигации меню
            return {
                ...state,
                activeTab: action.activeTab
            }
        }
        default: {
            return state;
        }
    }
}