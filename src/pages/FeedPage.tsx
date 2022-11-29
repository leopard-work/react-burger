import React from "react";

import { Feed } from "../components/feed/feed";
import { useLocation } from "react-router-dom";

function FeedPage(props: { openOrder?: boolean }) {
  const location = useLocation();

  if (props.openOrder && !location.state) {
    return <Feed openOrder={true} />;
  }
  return <Feed openOrder={false} />;
}

export default FeedPage;
