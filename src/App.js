import React, { Component } from 'react';
import 'normalize.css';

import "./style.css";
import { huntsFixture } from "./fixtures";
import crownTransparent from "./crown-transparent.png";

const playerIcons = {
  ROYAL_PALADIN: "https://vignette.wikia.nocookie.net/tibia/images/0/06/Chain_Bolter.gif/revision/latest?cb=20080619203720&path-prefix=en",
  ELDER_DRUID: "https://vignette.wikia.nocookie.net/tibia/images/8/8f/Glacial_Rod.gif/revision/latest?cb=20120622174236&path-prefix=en",
  ELITE_KNIGHT: "https://vignette.wikia.nocookie.net/tibia/images/e/e8/Crystalline_Axe.gif/revision/latest?cb=20120622190625&path-prefix=en",
  MASTER_SORCERER: "https://vignette.wikia.nocookie.net/tibia/images/4/4a/Wand_of_Darkness.gif/revision/latest?cb=20170725204545&path-prefix=en"
};

const vocationShorts = {
  ROYAL_PALADIN: "RP",
  ELDER_DRUID: "ED",
  ELITE_KNIGHT: "EK",
  MASTER_SORCERER: "MS"
};

const ordering = ["ELITE_KNIGHT", "ELDER_DRUID", "ROYAL_PALADIN", "MASTER_SORCERER"];

const sortCharacters = (characters) => characters.sort((character1, character2) => ordering.indexOf(character1.vocation) > ordering.indexOf(character2.vocation));

const CharacterBadge = ({ level, name, vocation, partyLeader }) => (
  <a href="https://www.tibia.com/community/?subtopic=characters&name=Sajgonka+Orientu" className="player-badge">
    <img src={playerIcons[vocation]} className="vocation-image" alt="" />
    <strong>{name}</strong> , {level} {vocationShorts[vocation]} {partyLeader && <img src={crownTransparent} alt="Party Leader" title="This character is party leader." />}
  </a>
);

const HuntEntry = ({ id, characters }) => (
  <li>
    <div className="actions">
      <a href={`hunt/${id}`} className="button primary">View</a>
      <a href={`hunt/${id}`} className="button secondary">Archive</a>
    </div>

    <hr />
    {sortCharacters(characters).map((character) => <CharacterBadge key={character.id} {...character} />)}
  </li>
);

const HuntsList = ({ hunts }) => (
  <ul className="hunts-list">
    {hunts.map((hunt) => <HuntEntry key={hunt.id} {...hunt} />)}
  </ul>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { hunts: null };
  }

  componentDidMount() {
    huntsFixture().then((data) => {
      this.setState({ hunts: data });
    });
  }

  render() {
    const { hunts } = this.state;

    return hunts === null ? <p>Loading...</p> : (
      <div className="main-page">
        <h1>My Hunts</h1>
        <HuntsList hunts={hunts} />
      </div>
    );
  }
}

export default App;
