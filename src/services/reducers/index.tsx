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
import { store } from "../../index";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  basket: basketReducer,
  item: itemReducer,
  order: orderReducer,
  user: userReducer,
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
