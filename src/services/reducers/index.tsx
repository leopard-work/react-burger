import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { catalogReducer } from "./catalog";
import { basketReducer } from "./basket";
import { itemReducer } from "./item";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector,
} from "react-redux";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  basket: basketReducer,
  item: itemReducer,
  order: orderReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
