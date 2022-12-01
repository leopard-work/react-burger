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
import { OrderItemProps } from "../../utils/types";

type ordersState = {
  ordersData: {
    success: boolean;
    orders: any;
    total: number;
    totalToday: number;
  };
  status: string;
  connect: boolean;
  error: string;
  viewFullOrder: OrderItemProps;
  viewFullOrderModalOpen: boolean;
};

export const initialState: ordersState = {
  ordersData: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
  status: "",
  connect: false,
  error: "",
  viewFullOrder: {
    _id: "",
    ingredients: [],
    status: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    number: 0,
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
      return initialState;
    }
    case ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "connecting",
        connect: true,
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
        ordersData: action.data,
      };
    }
    case ORDERS_WS_CLOSE: {
      return {
        ...state,
        status: "close",
        connect: false,
      };
    }
    case ORDERS_WS_ERROR: {
      return {
        ...state,
        status: "error",
        error: action.error,
        connect: false,
      };
    }
    case OPEN_ORDER_ITEM: {
      return {
        ...state,
        viewFullOrderModalOpen: true,
        viewFullOrder: action.item,
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
