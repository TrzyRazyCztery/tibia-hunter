import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

import PartiesListPage from "./parties-list/page";

export default class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <PartiesListPage />
      </BrowserRouter>
    );
  }
}
