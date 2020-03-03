import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
