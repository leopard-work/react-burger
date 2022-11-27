import React, { useEffect } from "react";

import { Feed } from "../components/feed/feed";
import { useLocation, useParams } from "react-router-dom";
import { OrderModalItem } from "../components/orders/orders";
import styles from "../components/orders/orders.module.css";
import { OPEN_ORDER_ITEM } from "../services/actions/orders";
import { OrderItemProps } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../services/reducers";

function FeedPage(props: { openOrder?: boolean }) {
  const location = useLocation();

  if (props.openOrder && !location.state) {
    return <Feed openOrder={true} />;
  }
  return <Feed openOrder={false} />;
}

export default FeedPage;
