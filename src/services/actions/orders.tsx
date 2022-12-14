import { OrderItemProps } from "../../utils/types";

export const ORDERS_CONNECT: "ORDERS_CONNECT" = "ORDERS_CONNECT";
export const ORDERS_DISCONNECT: "ORDERS_DISCONNECT" = "ORDERS_DISCONNECT";
export const ORDERS_WS_CONNECTING: "ORDERS_WS_CONNECTING" =
  "ORDERS_WS_CONNECTING";
export const ORDERS_WS_OPEN: "ORDERS_WS_OPEN" = "ORDERS_WS_OPEN";
export const ORDERS_WS_CLOSE: "ORDERS_WS_CLOSE" = "ORDERS_WS_CLOSE";
export const ORDERS_WS_ERROR: "ORDERS_WS_ERROR" = "ORDERS_WS_ERROR";
export const ORDERS_WS_MESSAGE: "ORDERS_WS_MESSAGE" = "ORDERS_WS_MESSAGE";

export const OPEN_ORDER_ITEM: "OPEN_ORDER_ITEM" = "OPEN_ORDER_ITEM";
export const CLOSE_ORDER_ITEM: "CLOSE_ORDER_ITEM" = "CLOSE_ORDER_ITEM";

interface ORDERS_CONNECT_ACTION {
  readonly type: typeof ORDERS_CONNECT;
}
interface ORDERS_DISCONNECT_ACTION {
  readonly type: typeof ORDERS_DISCONNECT;
}
interface ORDERS_WS_CONNECTING_ACTION {
  readonly type: typeof ORDERS_WS_CONNECTING;
}
interface ORDERS_WS_OPEN_ACTION {
  readonly type: typeof ORDERS_WS_OPEN;
}
interface ORDERS_WS_CLOSE_ACTION {
  readonly type: typeof ORDERS_WS_CLOSE;
}
interface ORDERS_WS_ERROR_ACTION {
  readonly type: typeof ORDERS_WS_ERROR;
  error: string;
}
interface ORDERS_WS_MESSAGE_ACTION {
  readonly type: typeof ORDERS_WS_MESSAGE;
  data: {
    orders: OrderItemProps;
    success: boolean;
    total: number;
    totalToday: number;
  };
}
interface OPEN_ORDER_ITEM {
  readonly type: typeof OPEN_ORDER_ITEM;
  item: OrderItemProps;
}
interface CLOSE_ORDER_ITEM {
  readonly type: typeof CLOSE_ORDER_ITEM;
}

export type ORDERS_ACTIONS =
  | ORDERS_CONNECT_ACTION
  | ORDERS_DISCONNECT_ACTION
  | ORDERS_WS_CONNECTING_ACTION
  | ORDERS_WS_OPEN_ACTION
  | ORDERS_WS_CLOSE_ACTION
  | ORDERS_WS_ERROR_ACTION
  | ORDERS_WS_MESSAGE_ACTION
  | OPEN_ORDER_ITEM
  | CLOSE_ORDER_ITEM;
