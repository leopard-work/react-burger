import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "../components/app/app.module.css";
import { Orders } from "../components/orders/orders";

function FeedPage() {
  const { state } = useLocation();
  return <Orders />;
}

export default FeedPage;
