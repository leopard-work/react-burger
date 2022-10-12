import {combineReducers} from "redux";
import {catalogReducer} from "./catalog";
import {basketReducer} from "./basket";
import {itemReducer} from "./item";
import {orderReducer} from "./order";


export const rootReducer = combineReducers({
    catalog: catalogReducer,
    basket: basketReducer,
    item: itemReducer,
    order: orderReducer
});