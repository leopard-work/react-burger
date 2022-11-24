import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../reducers";

export type TWsActions = {
  wsConnect: string;
  wsDisconnect: string;
  wsConnecting: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export const socketMiddleware = (wsActions: TWsActions): Middleware => {
  return (store) => {
    console.log("socketMiddleware");
    let socket: WebSocket | null = null;
    //socket = new WebSocket("wss://norma.nomoreparties.space/orders/all");
    //console.log(socket);
    let url = "";
    return (next) => (action) => {
      console.log("socketMiddleware next");
      const { type, payload } = action;
      const { dispatch } = store;
      const {
        wsConnect,
        wsConnecting,
        wsDisconnect,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsConnect) {
        url = payload;
        socket = new WebSocket(url);
        dispatch({ type: wsConnecting });
      }

      if (socket) {
        if (type === wsDisconnect) {
          socket.close();
          dispatch({ type: onClose });
        }

        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parseData = JSON.parse(data);
          dispatch({ type: onMessage, data: parseData });
        };

        socket.onerror = (error) => {
          dispatch({ type: onError, error: JSON.stringify(error) });
        };

        socket.onclose = (event) => {
          if (event.code === 1000) {
            dispatch({ type: onClose });
          }
          dispatch({ type: onError, error: event.code.toString() });
        };
      }

      next(action);
    };
  };
};

/*export const socketMiddleware = (
  wsActions: TWsActions
): Middleware<{}, RootState> => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    console.log("test 1");

    return (next) => (action) => {
      console.log("test 2");

      // const { dispatch, getState } = store;
      // const { type, payload } = action;
      //
      // if (type === "WS_CONNECTION_START") {
      //   socket = new WebSocket(wsUrl);
      // }
      // if (socket) {
      //   socket.onopen = (event) => {
      //     dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
      //   };
      //
      //   socket.onerror = (event) => {
      //     dispatch({ type: WS_CONNECTION_ERROR, payload: event });
      //   };
      //
      //   socket.onmessage = (event) => {
      //     const { data } = event;
      //     dispatch({ type: WS_GET_MESSAGE, payload: data });
      //   };
      //
      //   socket.onclose = (event) => {
      //     //dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
      //   };
      //
      //   if (type === "WS_SEND_MESSAGE") {
      //     const message = payload;
      //     socket.send(JSON.stringify(message));
      //   }
      // }

      next(action);
    };
  }) as Middleware;
};*/
