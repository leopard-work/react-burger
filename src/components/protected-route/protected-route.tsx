import React, { FC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../services/reducers";

type ProtectedRouteProps = {
  path: string;
  children: JSX.Element;
  exact?: boolean;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ path, children, exact }) => {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();

  if (user["user"]) {
    return (
      <Route path={path} exact={true}>
        {children}
      </Route>
    );
  } else {
    console.log("ok");
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
