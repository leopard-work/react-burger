import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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
    getDefaultMiddleware().concat(
      socketMiddleware("wss://norma.nomoreparties.space/orders/all")
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
