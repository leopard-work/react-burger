import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ForgotPage from "../../pages/ForgotPage";
import ResetPage from "../../pages/ResetPage";

function App() {

    return (
      <>
          <Router>
              <AppHeader />
              <main className={styles.main + " pb-10"}>
                  <Switch>
                      <Route path="/" exact={true}>
                          <HomePage />
                      </Route>
                      <Route path="/login" exact={true}>
                          <LoginPage />
                      </Route>
                      <Route path="/register" exact={true}>
                          <RegisterPage />
                      </Route>
                      <Route path="/forgot-password" exact={true}>
                          <ForgotPage />
                      </Route>
                      <Route path="/reset-password" exact={true}>
                          <ResetPage />
                      </Route>
                      <Route path="/profile" exact={true}>
                          <LoginPage />
                      </Route>
                      <Route>
                          <Page404 />
                      </Route>
                  </Switch>
              </main>
          </Router>
      </>
    );
}


export default App;


