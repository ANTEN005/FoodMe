import React from "react";
import { Route, Switch } from "react-router-dom";
import FeedPage from "./Components/FeedPage/FeedPage";
import NotFound from "./Components/Layout/NotFound";
import Login from './Components/LoginPage/Login';

export default () =>
  <Switch>
    <Route path="/" exact component={FeedPage} />
    <Route path="/login" exact component={Login} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;