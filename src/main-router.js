import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import React, { Component } from "react";

import PartiesListPage from "./parties-list/page";
import PartyPage from "./party/page";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/party" component={PartyPage} />
        <Route path="/" component={PartiesListPage} />
      </Switch>
    );
  }
}

export default class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}
