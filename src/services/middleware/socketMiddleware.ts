import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../reducers";
import {
  WS_ACTIONS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/ws";

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: WS_ACTIONS) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === "WS_CONNECTION_START") {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: data });
        };

        socket.onclose = (event) => {
          //dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (type === "WS_SEND_MESSAGE") {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
