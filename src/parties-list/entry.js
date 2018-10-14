import "./entry.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import CharacterBadge from "characters/badge";

export default class HuntEntry extends Component {
  partyOrder(characterOne, characterTwo) {
    const vocationOrdering = [
      "ELITE_KNIGHT",
      "ELDER_DRUID",
      "ROYAL_PALADIN",
      "MASTER_SORCERER"
    ];

    return (
      vocationOrdering.indexOf(characterOne.vocation) >
      vocationOrdering.indexOf(characterTwo.vocation)
    );
  }

  render() {
    const { id, characters } = this.props;

    return (
      <li>
        <div className="actions">
          <Link to={`party/${id}`} className="button primary">View</Link>
        </div>
        <hr />
        {characters.sort(this.partyOrder).map((character) =>
          <CharacterBadge key={character.id} {...character} />
        )}
      </li>
    )
  }
}
