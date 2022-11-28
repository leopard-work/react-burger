import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ForgotPage from "../../pages/ForgotPage";
import ResetPage from "../../pages/ResetPage";
import ProfilePage from "../../pages/ProfilePage";
import OrdersPage from "../../pages/OrdrersPage";
import FeedPage from "../../pages/FeedPage";
import ProtectedRoute from "../protected-route/protected-route";
import Cookies from "js-cookie";
import { GET_TOKEN_FAILED, tokenUser } from "../../services/actions/user";
import AuthRoute from "../auth-route/auth-route";
import { getItems } from "../../services/actions/catalog";
import { useAppSelector, useAppDispatch } from "../../services/reducers";

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const init = async () => {
    if (!user["user"] && Cookies.get("token")) {
      const body = { token: Cookies.get("token") };
      await dispatch(tokenUser(body));
    } else {
      await dispatch({ type: GET_TOKEN_FAILED });
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (user["tokenRequest"] || user["userInfoRequest"] || user["userCheck"]) {
    return (
      <div className={`${styles.loading} text text_type_main-medium`}>
        Загрузка ...
      </div>
    );
  } else {
    return (
      <Router>
        <AppHeader />
        <main className={styles.main + " pb-10"}>
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/ingredients/:id" exact={true}>
              <HomePage openItem={true} />
            </Route>
            <Route path="/feed" exact={true}>
              <FeedPage />
            </Route>
            <Route path="/feed/:id" exact={true}>
              <FeedPage openOrder={true} />
            </Route>
            <AuthRoute path="/login" exact={true}>
              <LoginPage />
            </AuthRoute>
            <AuthRoute path="/register" exact={true}>
              <RegisterPage />
            </AuthRoute>
            <AuthRoute path="/forgot-password" exact={true}>
              <ForgotPage />
            </AuthRoute>
            <AuthRoute path="/reset-password" exact={true} page="resetPage">
              <ResetPage />
            </AuthRoute>

            <ProtectedRoute path="/profile/orders/:id" exact={true}>
              <OrdersPage openOrder={true} />
            </ProtectedRoute>
            <ProtectedRoute path="/profile/orders" exact={true}>
              <OrdersPage />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" exact={true}>
              <ProfilePage />
            </ProtectedRoute>

            <Route>
              <Page404 />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
