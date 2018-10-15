import React, { Component } from "react";
// import { Route } from "react-router";
import './page.css'

import loadResource from "common/load-resource";

import OverallStatistics from "./overall-statistics"
import PartiesListMain from "./main";
import { partiesFixture } from "fixtures";

const PartiesListMainLoaded = loadResource(partiesFixture, { propName: "parties" })(PartiesListMain);
const OverallStatisticsLoaded = loadResource(partiesFixture, { propName: "parties"})(OverallStatistics);

export default class PartyListPage extends Component {
  render() {
    return (
      <div className='parties-page'>
        <PartiesListMainLoaded /><OverallStatisticsLoaded />
      </div>
    );
  }
}
