import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Bye } from "../pages/Bye";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <BrowserRouter>
      <header>
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/bye">bye</Link>
        </div>
        <div>
          <Link to="/register">register</Link>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bye" component={Bye} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
