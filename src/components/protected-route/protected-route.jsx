import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ path, children, exact }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (user.user) {
    return (
      <Route path={path} exact={true}>
        {children}
      </Route>
    );
  } else {
    //if (user.tokenSuccess || !Cookies.get("token"))
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
