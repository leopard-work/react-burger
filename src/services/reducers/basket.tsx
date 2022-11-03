import {
  ADD_TO_BASKET,
  BASKET_CLEAR,
  REMOVE_FROM_BASKET,
  SORT_BASKET,
} from "../actions/basket";

const initialState = {
  basket: [], // Корзина
};

export const basketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      // Добавление товара в корзину
      if (action.item.type === "bun") {
        // Проверка булка или нет
        let itemFromBasket = state.basket.find((i: any) => i.type === "bun");
        if (itemFromBasket) {
          // Если булка есть
          const tempBasket = state.basket.filter(
            (i: any) => i.type !== action.item.type
          );
          return {
            ...state,
            basket: [...tempBasket, { ...action.item, count: 1 }],
          };
        } else {
          // Если булки нет
          return {
            ...state,
            basket: [...state.basket, { ...action.item, count: 1 }],
          };
        }
      } else {
        // Если не булка
        return {
          ...state,
          basket: [...state.basket, { ...action.item, count: 1 }],
        };
        // const itemFromBasket = state.basket.find(i => i._id === action.item._id);   // Проверка существования товара в корзине
        // if (itemFromBasket) {                                                       // Если товар есть в корзине
        //     state.basket.map((item) => {                                            // Увеличиваем количество
        //         if (item._id === action.item._id) {
        //             item.count++;
        //         }
        //         return state;
        //     })
        //     return {
        //         ...state
        //     }
        // }
        // else {                                                                      // Если товара нет, добавляем в корзину c увеличением счетчика
        //     return {
        //         ...state,
        //         basket: [...state.basket, {...action.item, count: 1}]
        //     }
        // }
      }
    }
    case REMOVE_FROM_BASKET: {
      // Удаление товара из корзины
      return {
        ...state,
        basket: state.basket.filter(
          (item: any) => item.uuid !== action.item.uuid
        ),
      };
      // if (action.item.count > 1) {                                                    // Если количество >1 уменьшаем количество
      //     state.basket.map((item) => {
      //         if (item._id === action.item._id) {
      //             item.count--;
      //         }
      //         return state;
      //     });
      //     return {
      //         ...state
      //     }
      // } else {                                                                        // Удаляем товар
      //     return {
      //         ...state,
      //         basket: state.basket.filter(item => item._id !== action.item._id)
      //     }
      // }
    }
    case SORT_BASKET: {
      // Сортировка корзины в зависимости от перемещенных элементов
      let tempBasket = [...state.basket];
      tempBasket[action.index] = tempBasket.splice(
        // @ts-ignore
        state.basket.indexOf(action.item),
        1,
        tempBasket[action.index]
      )[0];
      return {
        ...state,
        basket: tempBasket,
      };
    }
    case BASKET_CLEAR: {
      return {
        ...state,
        basket: [],
      };
    }
    default: {
      return state;
    }
  }
};
