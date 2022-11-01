import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({ path, children, page, exact }) => {
  const user = useSelector((state) => state.user);

  if (!user.user) {
    if (page === "resetPage") {
      if (!user.forgotEmail) {
        return <Redirect to={{ pathname: "/" }} />;
      }
    }
    return (
      <Route path={path} exact={true}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
};

AuthRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
  exact: PropTypes.bool,
};

export default AuthRoute;
