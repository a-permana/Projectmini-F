import React, { useState } from "react";
import "./App.css";
import "./index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./component/about";
import Home from "./component/home";
import Main from "./layouts/Main";
import Register from "./component/register";
import Login from "./component/login";
import Article from "./folder/article";

const token = JSON.parse(sessionStorage.getItem("persisted_state_hook:token"));
const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          {(() => {
            if (!token) {
              return (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                </Switch>
              );
            } else if (token.token.admin === true) {
              return (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/article" component={Article} />
                </Switch>
              );
            } else if (token.token.admin === false) {
              return (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                </Switch>
              );
            }
          })()}
        </Main>
      </Switch>
    </Router>
  );
};
export default App;
