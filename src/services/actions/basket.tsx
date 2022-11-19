export const ADD_TO_BASKET: "ADD_TO_BASKET" = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET" = "REMOVE_FROM_BASKET";
export const SORT_BASKET: "SORT_BASKET" = "SORT_BASKET";
export const BASKET_CLEAR: "BASKET_CLEAR" = "BASKET_CLEAR";

export interface BasketClearAction {
  readonly type: typeof BASKET_CLEAR;
}
