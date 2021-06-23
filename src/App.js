import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";


import Home from "./pages/Home"
import ContactPage from "./pages/Contact"
import Portfolio from "./pages/Portfolio"


function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;