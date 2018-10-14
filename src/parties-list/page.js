import React, { Component } from "react";
import { Route } from "react-router";

import loadResource from "common/load-resource";

import PartiesListMain from "./main";
import { partiesFixture } from "fixtures";

const PartiesListMainLoaded = loadResource(partiesFixture, { propName: "parties" })(PartiesListMain);

export default class PartyListPage extends Component {
  render() {
    return (
      <Route path="/" component={PartiesListMainLoaded} />
    );
  }
}
