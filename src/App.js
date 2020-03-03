import React from "react";
import "./App.css";
import "./index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./component/about";
import Home from "./component/home";
import Main from "./layouts/Main";
// import Register from "./component/register";
// import Login from "./component/login";

const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Main" component={Main} />
            {/* <Route path="/register" component={Register} /> */}
            {/* <Route path="/login" component={Login} /> */}
          </Switch>
        </Main>
      </Switch>
    </Router>
  );
};
export default App;
