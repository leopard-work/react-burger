import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthRouteProps } from "../../utils/types";

const AuthRoute: FC<AuthRouteProps> = ({ path, children, page, exact }) => {
  // @ts-ignore
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

export default AuthRoute;
