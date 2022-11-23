import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_ACTIONS,
  OPEN_ORDER_ITEM,
  CLOSE_ORDER_ITEM,
} from "../actions/ws";

const initialState: any = {
  test: "",
  ordersRequest: false,
  ordersFailed: false,
  viewFullOrder: {
    _id: "",
  },
  viewFullOrderModalOpen: false,
};

export const ordersReducer = (state = initialState, action: WS_ACTIONS) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      // Отправка заказа
      return {
        ...state,
        ordersRequest: true,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        ordersRequest: false,
        ordersFailed: false,
        test: action.payload,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        ordersFailed: true,
        ordersRequest: false,
      };
    }
    case WS_GET_MESSAGE: {
      // Удаление информации о заказе
      return {
        ...state,
        test: action.payload,
        ordersFailed: false,
      };
    }
    case OPEN_ORDER_ITEM: {
      // Удаление информации о заказе
      return {
        ...state,
        viewFullOrderModalOpen: true,
      };
    }
    case CLOSE_ORDER_ITEM: {
      // Удаление информации о заказе
      return {
        ...state,
        viewFullOrderModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
