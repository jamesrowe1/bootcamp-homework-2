import React from "react";
import Portfolio from "./components/Portfolio/Portfolio"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
        <Route path="/">
            <Header />
        </Route>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path={`${process.env.PUBLIC_URL}/home`}>
            <Home />
          </Route>
          <Route path="/users">
            <h1>Portfolio</h1>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/portfolio`}>
            <Portfolio />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes