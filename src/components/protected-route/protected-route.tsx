import React, { FC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

type ProtectedRouteProps = {
  path: string;
  children: JSX.Element;
  exact?: boolean;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ path, children, exact }) => {
  // @ts-ignore
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

export default ProtectedRoute;
