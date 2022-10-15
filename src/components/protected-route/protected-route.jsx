import React, {useEffect} from "react";
import {Redirect, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {tokenUser} from "../../services/actions/user";
import Cookies from 'js-cookie';
import styles from "../app/app.module.css";

const ProtectedRoute = ({path, children}) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const init = async () => {
        if (!user.user && Cookies.get('token')) {
            const body = {token: Cookies.get('token')}
            await dispatch(tokenUser(body));
        }
    };

    useEffect(() => {
        init();
    }, []);

    if (user.tokenRequest || user.userInfoRequest) {
        return (
            <div className={`${styles.loading} text text_type_main-medium`}>Загрузка ...</div>
        );
    }
    else {
        if (user.user) {
            return (
                <Route path={path} exact={true}>
                    {children}
                </Route>
            );
        } else {
            return (
                <div>redirect</div>
                // <Redirect
                //     to={{
                //         pathname: "/login"
                //     }}
                // />
            );
        }
    }

}

export default ProtectedRoute;