import "./entry.css";
import React, { Component } from "react";

import partyLeaderIcon from "./assets/crown-transparent.png";

class CharacterBadge extends Component {
  shortVocationName() {
    return {
      ROYAL_PALADIN: "RP",
      ELDER_DRUID: "ED",
      ELITE_KNIGHT: "EK",
      MASTER_SORCERER: "MS"
    }[this.props.vocation];
  }

  characterImage() {
    return {
      ROYAL_PALADIN: "https://vignette.wikia.nocookie.net/tibia/images/0/06/Chain_Bolter.gif/revision/latest?cb=20080619203720&path-prefix=en",
      ELDER_DRUID: "https://vignette.wikia.nocookie.net/tibia/images/8/8f/Glacial_Rod.gif/revision/latest?cb=20120622174236&path-prefix=en",
      ELITE_KNIGHT: "https://vignette.wikia.nocookie.net/tibia/images/e/e8/Crystalline_Axe.gif/revision/latest?cb=20120622190625&path-prefix=en",
      MASTER_SORCERER: "https://vignette.wikia.nocookie.net/tibia/images/4/4a/Wand_of_Darkness.gif/revision/latest?cb=20170725204545&path-prefix=en"
    }[this.props.vocation];
  }

  lootMasterIndicator(character) {
    return this.props.partyLeader && <img
      src={partyLeaderIcon}
      alt="Loot Master"
      className="loot-master-indicator"
      title="This character is a loot master."
    />;
  }

  render() {
    const { name, level } = this.props;

    return (
      <a
        className="character-badge"
        href="https://www.tibia.com/community/?subtopic=characters&name=Sajgonka+Orientu"
      >
        <img src={this.characterImage()} alt="" className="character-image" />
        <strong>{name}</strong>, {level}
        {this.shortVocationName()}
        {this.lootMasterIndicator()}
      </a>
    )
  }
}

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
          <a href={`hunt/${id}`} className="button primary">View</a>
          <a href={`hunt/${id}`} className="button secondary">Archive</a>
        </div>
        <hr />
        {characters.sort(this.partyOrder).map((character) =>
          <CharacterBadge key={character.id} {...character} />
        )}
      </li>
    )
  }
}
