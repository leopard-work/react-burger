import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthRouteProps } from "../../utils/types";
import { useAppSelector } from "../../services/reducers";

const AuthRoute: FC<AuthRouteProps> = ({ path, children, page, exact }) => {
  const user = useAppSelector((state) => state.user);

  if (!user["user"]) {
    if (page === "resetPage") {
      if (!user["forgotEmail"]) {
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
