import React, { Component } from "react";
import PartiesList from "./list";

export default class PartiesListMain extends Component {
  render() {
    const { parties } = this.props;

    return (
      <div className='parties-list'>
        <h1>My Parties</h1>
        <PartiesList parties={parties} />
      </div>
    )
  }
}
