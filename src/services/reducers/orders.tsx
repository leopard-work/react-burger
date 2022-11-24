import {
  ORDERS_CONNECT,
  ORDERS_DISCONNECT,
  ORDERS_WS_CONNECTING,
  ORDERS_WS_OPEN,
  ORDERS_WS_CLOSE,
  ORDERS_WS_ERROR,
  ORDERS_WS_MESSAGE,
  ORDERS_ACTIONS,
  OPEN_ORDER_ITEM,
  CLOSE_ORDER_ITEM,
} from "../actions/orders";

const initialState: any = {
  orders: "",
  status: "",
  error: "",
  viewFullOrder: {
    _id: "",
  },
  viewFullOrderModalOpen: false,
};

export const ordersReducer = (state = initialState, action: ORDERS_ACTIONS) => {
  switch (action.type) {
    case ORDERS_CONNECT: {
      return {
        ...state,
        status: "connect...",
      };
    }
    case ORDERS_DISCONNECT: {
      return {
        ...state,
        status: "disconnect",
      };
    }
    case ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "connecting",
      };
    }
    case ORDERS_WS_OPEN: {
      return {
        ...state,
        status: "open",
      };
    }
    case ORDERS_WS_MESSAGE: {
      return {
        ...state,
        status: "message",
        orders: action.payload.data,
      };
    }
    case ORDERS_WS_CLOSE: {
      return {
        ...state,
        status: "close",
      };
    }
    case ORDERS_WS_ERROR: {
      return {
        ...state,
        status: "error",
        error: action.payload.error,
      };
    }
    case OPEN_ORDER_ITEM: {
      return {
        ...state,
        viewFullOrderModalOpen: true,
      };
    }
    case CLOSE_ORDER_ITEM: {
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
