import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthRoute = ({path, children, page}) => {
    const user = useSelector(state => state.user);

    if (!user.user) {
        if (page === "resetPage") {
            if (!user.forgotEmail) {
                return (
                    <Redirect to={{pathname: "/"}}/>
                );
            }
        }
        return (
            <Route path={path} exact={true}>
                {children}
            </Route>
        );
    } else {
        return (
            <Redirect to={{pathname: "/"}}/>
        );
    }
}

export default AuthRoute;