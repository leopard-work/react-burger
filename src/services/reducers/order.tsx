import {
  CHECKOUT_ACTIONS,
  CHECKOUT_FAILED,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CLEAR_ORDER,
} from "../actions/order";
import { OrderProps } from "../../utils/types";

type orderState = {
  orderInfo: {
    order: OrderProps;
  };
  orderModalOpen: boolean;
  orderRequest: boolean;
  orderFailed: boolean;
};

const initialState: orderState = {
  orderInfo: {
    order: {
      ingredients: [],
      _id: "",
      owner: {
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      status: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      number: null,
      price: 0,
    },
  }, // Информация о заказе
  orderModalOpen: false, // Открытие окна с заказом
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (
  state = initialState,
  action: CHECKOUT_ACTIONS
) => {
  switch (action.type) {
    case CHECKOUT_REQUEST: {
      // Отправка заказа
      return {
        ...state,
        orderRequest: true,
      };
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
        orderRequest: false,
      };
    }
    case CLEAR_ORDER: {
      // Удаление информации о заказе
      return {
        ...state,
        orderInfo: initialState.orderInfo,
        orderFailed: false,
        orderModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
