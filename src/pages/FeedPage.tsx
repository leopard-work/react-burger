import React from "react";

import { Feed } from "../components/feed/feed";
import { useLocation } from "react-router-dom";
import { OrderItem } from "../components/orders/orders";
import styles from "../components/orders/orders.module.css";

function FeedPage(props: { openOrder?: boolean }) {
  const location = useLocation();
  if (props.openOrder && !location.state) {
    return (
      <div className="container pl-4 pr-4">
        <div className={styles.orderPage}>
          <OrderItem />
        </div>
      </div>
    );
  }
  return <Feed />;
}

export default FeedPage;
