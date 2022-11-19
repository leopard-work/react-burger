import { ItemProps } from "../../utils/types";

export const VIEW_ITEM: "VIEW_ITEM" = "VIEW_ITEM";
export const CLOSE_VIEW_ITEM: "CLOSE_VIEW_ITEM" = "CLOSE_VIEW_ITEM";

interface VIEW_ITEM_ACTION {
  readonly type: typeof VIEW_ITEM;
  readonly item: ItemProps;
}
interface CLOSE_VIEW_ITEM_ACTION {
  readonly type: typeof CLOSE_VIEW_ITEM;
}

export type VIEW_ITEM_ACTIONS = VIEW_ITEM_ACTION | CLOSE_VIEW_ITEM_ACTION;
