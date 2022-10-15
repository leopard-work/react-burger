import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import Cookies from 'js-cookie';

const ProtectedRoute = ({path, children}) => {
    const user = useSelector(state => state.user);

    if (user.user) {
        return (
            <Route path={path} exact={true}>
                {children}
            </Route>
        );
    } else {
        if (user.tokenSuccess || !Cookies.get('token'))
        return (
            <Redirect
                to={{
                    pathname: "/login"
                }}
            />
        );
    }
}

export default ProtectedRoute;