import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { catalogReducer } from "./catalog";
import { basketReducer } from "./basket";
import { itemReducer } from "./item";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { ordersReducer } from "./orders";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector,
} from "react-redux";
import { socketMiddleware } from "../middleware/socketMiddleware";
import {
  ORDERS_CONNECT,
  ORDERS_DISCONNECT,
  ORDERS_WS_CLOSE,
  ORDERS_WS_CONNECTING,
  ORDERS_WS_ERROR,
  ORDERS_WS_MESSAGE,
  ORDERS_WS_OPEN,
} from "../actions/orders";

const ordersWsActions = {
  wsConnect: ORDERS_CONNECT,
  wsDisconnect: ORDERS_DISCONNECT,
  wsConnecting: ORDERS_WS_CONNECTING,
  onOpen: ORDERS_WS_OPEN,
  onClose: ORDERS_WS_CLOSE,
  onError: ORDERS_WS_ERROR,
  onMessage: ORDERS_WS_MESSAGE,
};

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  basket: basketReducer,
  item: itemReducer,
  order: orderReducer,
  user: userReducer,
  orders: ordersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware(ordersWsActions)),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
