import React from "react";
import Profile from "../components/profile/profile";
import { useLocation } from "react-router-dom";

function OrdersPage(props: { openOrder?: boolean }) {
  const location = useLocation();
  if (props.openOrder && !location.state) {
    return <Profile type="orders" openOrder={true} />;
  }
  return <Profile type="orders" openOrder={false} />;
}

export default OrdersPage;
