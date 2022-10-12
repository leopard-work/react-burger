import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/HomePage";
import Page404 from "../../pages/Page404";

function App() {

    return (
      <>
          <AppHeader />
          <Router>
              <Switch>
                  <Route path="/" exact={true}>
                      <HomePage />
                  </Route>
                  <Route>
                      <Page404 />
                  </Route>
              </Switch>
          </Router>
      </>
    );
}


export default App;


