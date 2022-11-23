export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";
export const OPEN_ORDER_ITEM: "OPEN_ORDER_ITEM" = "OPEN_ORDER_ITEM";
export const CLOSE_ORDER_ITEM: "CLOSE_ORDER_ITEM" = "CLOSE_ORDER_ITEM";

interface WS_CONNECTION_START_ACTION {
  readonly type: typeof WS_CONNECTION_START;
  payload: any;
}
interface WS_CONNECTION_SUCCESS_ACTION {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  payload: any;
}
interface WS_CONNECTION_ERROR_ACTION {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: any;
}
interface WS_GET_MESSAGE_ACTION {
  readonly type: typeof WS_GET_MESSAGE;
  payload: any;
}
interface WS_SEND_MESSAGE_ACTION {
  readonly type: typeof WS_SEND_MESSAGE;
  payload: any;
}
interface OPEN_ORDER_ITEM {
  readonly type: typeof OPEN_ORDER_ITEM;
  payload: any;
}

interface CLOSE_ORDER_ITEM {
  readonly type: typeof CLOSE_ORDER_ITEM;
  payload: any;
}

export type WS_ACTIONS =
  | WS_CONNECTION_START_ACTION
  | WS_CONNECTION_SUCCESS_ACTION
  | WS_CONNECTION_ERROR_ACTION
  | WS_GET_MESSAGE_ACTION
  | WS_SEND_MESSAGE_ACTION
  | OPEN_ORDER_ITEM
  | CLOSE_ORDER_ITEM;
