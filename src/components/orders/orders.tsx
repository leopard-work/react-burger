import React from "react";
import styles from "./orders.module.css";
import { useDispatch } from "../../services/reducers";
import { WS_CONNECTION_START } from "../../services/actions/ws";

export const Orders = () => {
  const dispatch = useDispatch();
  dispatch({ type: WS_CONNECTION_START });

  return <div>sss</div>;
};
