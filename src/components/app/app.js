import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";
import LoginPage from "../../pages/LoginPage";

function App() {

    return (
      <>
          <AppHeader />
          <main className={styles.main + " pb-10"}>
              <Router>
                  <Switch>
                      <Route path="/" exact={true}>
                          <HomePage />
                      </Route>
                      <Route path="/login" exact={true}>
                          <LoginPage />
                      </Route>
                      <Route>
                          <Page404 />
                      </Route>
                  </Switch>
              </Router>
          </main>
      </>
    );
}


export default App;


