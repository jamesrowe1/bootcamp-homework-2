import React from "react";
import Portfolio from "./components/Portfolio/Portfolio"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div id="wrapper">  
        <Route path="/">
            <Header />
        </Route>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/users">
            <h1>Portfolio</h1>
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <Route path="/">
            <Footer />
        </Route>
        
    </Router>
  );
}

export default Routes