import React, { Component } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import loadResource from "common/load-resource";
import { partyFixture } from "fixtures";

import CharacterBadge, { CharacterBadgeTemplate } from "characters/badge";

import "./style.css";

class MembersList extends Component {
  render() {
    const { characters } = this.props;

    return (
      <div className="members-list">
        <h2>Members:</h2>
        {characters.map((character) => <CharacterBadge key={character.id} {...character} />)}
      </div>
    )
  }
}

class AllHuntsSummary extends Component {
  totalTeamBalance() {
    const { hunts } = this.props.party;

    const profit = hunts.reduce((result, hunt) => {
      const profits = hunt.balances.filter(({ balance }) => balance > 0);
      return result + profits.reduce((result, profit) => result + profit.balance, 0);
    }, 0);

    const waste = hunts.reduce((result, hunt) => {
      const wastes = hunt.balances.filter(({ balance }) => balance < 0);
      return result + wastes.reduce((result, waste) => result + waste.balance, 0);
    }, 0) * -1;

    const balance = profit - waste;

    return {
      profit,
      waste,
      balance
    };
  }

  perCharacterBalance() {
    const { hunts, characters } = this.props.party;

    const collectedBalances = hunts.reduce((result, hunt) => [...result, ...hunt.balances], []);
    const balancesByPlayer = collectedBalances.reduce((result, balance) => {
      const characterName = characters.find(({ id }) => id === balance.characterId).name;
      return { ...result, [characterName]: (result[characterName] || 0) + balance.balance };
    }, {});

    return balancesByPlayer;
  }

  render() {
    const { profit, waste, balance } = this.totalTeamBalance();
    const charactersBalance = this.perCharacterBalance();

    return (
      <div className="all-summary">
        <h2>Summary:</h2>
        <p>So far, your team profited <strong>{profit.toLocaleString()}</strong> gps, wasting <strong>{waste.toLocaleString()}</strong> gp in supplies.</p>
        <p>Total balance is <strong>{balance.toLocaleString()}</strong> gp.</p>
        <ul>
          {Object.keys(charactersBalance).map((characterName) => <li key={characterName}><strong>{characterName}</strong>: {charactersBalance[characterName].toLocaleString()} gp</li>)}
        </ul>
      </div>
    );
  }
}

class CharacterBalanceBadge extends Component {
  render() {
    const { balance } = this.props;

    const listEntry = ({children}) => (<li className="character-badge">{children}</li>);

    return (
      <CharacterBadgeTemplate character={balance.character} wrapComponent={listEntry}>
        <span className={`balance ${balance.balance > 0 ? "balance-profit" : "balance-waste"}`}>{balance.balance.toLocaleString()}</span>
      </CharacterBadgeTemplate>
    );
  }
}

class HuntEntry extends Component {
  totalBalance() {
    const { balances } = this.props;

    return balances.reduce((result, { balance }) => result + balance, 0);
  }

  render() {
    const { date, balances } = this.props;

    return (
      <li>
        <h3>{new Date(date).toLocaleString()}</h3>
        <p><strong>Total balance:</strong> {this.totalBalance().toLocaleString()}</p>
        <ul className="hunt-profit-characters">
          {balances.map((balance) => <CharacterBalanceBadge key={balance.id} balance={balance} />)}
        </ul>
      </li>
    );
  }
}

class HuntsList extends Component {
  combineHuntsWithCharacters() {
    const { hunts, characters } = this.props.party;

    return hunts.map((hunt) => ({
      ...hunt,
      balances: hunt.balances.map((balance) => {
        const character = characters.find(({id}) => id === balance.characterId);

        return { balance: balance.balance, character };
      })
    }));
  }

  render() {
    const hunts = this.combineHuntsWithCharacters();

    return (
      <ul className="hunts-list">
        {hunts.map((hunt) => <HuntEntry key={hunt.id} {...hunt} />)}
      </ul>
    );
  }
}

class PartyMain extends Component {
  render() {
    const { party } = this.props;

    return (
      <div className="party-page">
        <h1>Party <Link to="/" className="button secondary back-button">Back</Link></h1>
        <MembersList characters={party.characters} />
        <AllHuntsSummary party={party} />
        <HuntsList party={party} />
      </div>
    );
  }
}

const LoadedPartyMain = loadResource(partyFixture, { propName: "party" })(PartyMain);

export default class PartyPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route path={`${match.path}/:id`} component={LoadedPartyMain} />
      </div>
    )
  }
}
