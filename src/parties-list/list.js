import React, { Component } from "react";
import PartyEntry from "./entry";

import "./list.css";

export default class PartyList extends Component {
  render() {
    const { parties } = this.props;

    return (
      <ul className="parties-list">
        {parties.map((hunt) => <PartyEntry key={hunt.id} {...hunt} />)}
      </ul>
    );
  }
}
