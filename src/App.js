import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import News from "./components/AboutUs";
import Login from "./components/Login";
import UserPanel from "./components/UserPanel";
import ErrorPage from "./components/ErrorPage";

import "../src/style/main.scss";
const logo = "Hairdresser";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={UserPanel} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
