import React, { Component } from "react";
import lootMasterIcon from "./assets/crown-transparent.png";

import "./badge.css";

export class CharacterBadgeTemplate extends Component {
  characterImage(vocation) {
    return {
      ROYAL_PALADIN: "https://vignette.wikia.nocookie.net/tibia/images/0/06/Chain_Bolter.gif/revision/latest?cb=20080619203720&path-prefix=en",
      ELDER_DRUID: "https://vignette.wikia.nocookie.net/tibia/images/8/8f/Glacial_Rod.gif/revision/latest?cb=20120622174236&path-prefix=en",
      ELITE_KNIGHT: "https://vignette.wikia.nocookie.net/tibia/images/e/e8/Crystalline_Axe.gif/revision/latest?cb=20120622190625&path-prefix=en",
      MASTER_SORCERER: "https://vignette.wikia.nocookie.net/tibia/images/4/4a/Wand_of_Darkness.gif/revision/latest?cb=20170725204545&path-prefix=en"
    }[vocation];
  }

  render() {
    const { wrapComponent: RootNode, character, character: { name, vocation }, children } = this.props;

    return (
      <RootNode character={character}>
        <img src={this.characterImage(vocation)} alt="" className="character-image" />
        <strong>{name}</strong>
        {children}
      </RootNode>
    );
  }
}

export default class CharacterBadge extends Component {
  shortVocationName() {
    return {
      ROYAL_PALADIN: "RP",
      ELDER_DRUID: "ED",
      ELITE_KNIGHT: "EK",
      MASTER_SORCERER: "MS"
    }[this.props.vocation];
  }

  lootMasterIndicator(character) {
    return this.props.lootMaster && <img
      src={lootMasterIcon}
      alt="Loot Master"
      className="loot-master-indicator"
      title="This character is a loot master."
    />;
  }

  render() {
    const { level } = this.props;

    const badgeLink = ({ children }) => (
      <a
        className="character-badge"
        href="https://www.tibia.com/community/?subtopic=characters&name=Sajgonka+Orientu"
      >
        {children}
      </a>
    );

    return (
      <CharacterBadgeTemplate wrapComponent={badgeLink} character={this.props}>
        , {level}
        {this.shortVocationName()}
        {this.lootMasterIndicator()}
      </CharacterBadgeTemplate>
    );
  }
}
