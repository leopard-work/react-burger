import { ItemProps } from "../../utils/types";

export const ADD_TO_BASKET: "ADD_TO_BASKET" = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET" = "REMOVE_FROM_BASKET";
export const SORT_BASKET: "SORT_BASKET" = "SORT_BASKET";
export const BASKET_CLEAR: "BASKET_CLEAR" = "BASKET_CLEAR";

interface ADD_TO_BASKET_ACTION {
  readonly type: typeof ADD_TO_BASKET;
  item: ItemProps;
}
interface REMOVE_FROM_BASKET_ACTION {
  readonly type: typeof REMOVE_FROM_BASKET;
  item: ItemProps & { uuid: string };
}
interface SORT_BASKET_ACTION {
  readonly type: typeof SORT_BASKET;
  index: number;
}
export interface BASKET_CLEAR_ACTION {
  readonly type: typeof BASKET_CLEAR;
}

export type BASKET_ACTIONS =
  | ADD_TO_BASKET_ACTION
  | REMOVE_FROM_BASKET_ACTION
  | SORT_BASKET_ACTION
  | BASKET_CLEAR_ACTION;
