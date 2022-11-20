export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";

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

export type WS_ACTIONS =
  | WS_CONNECTION_START_ACTION
  | WS_CONNECTION_SUCCESS_ACTION
  | WS_CONNECTION_ERROR_ACTION
  | WS_GET_MESSAGE_ACTION
  | WS_SEND_MESSAGE_ACTION;
