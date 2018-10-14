const characters = {
  SAJGONKA: {
    id: "2b2d7023-3b27-44a2-85fb-6d857829af56",
    name: "Sajgonka Orientu",
    vocation: "ELDER_DRUID",
    level: 357
  },
  SANCTALUX: {
    id: "1dd4e111-a8cf-449e-bc4b-2b21c4ea2e4b",
    name: "Sancta Lux",
    vocation: "ROYAL_PALADIN",
    level: 366
  },
  HENLOTH: {
    id: "4b247505-40d6-4a3d-a7db-a256b2347d48",
    name: "Henloth",
    vocation: "MASTER_SORCERER",
    level: 363
  },
  PRALIDOKSYM: {
    id: "acce6f31-fb52-4df3-9245-a4f884339949",
    name: "Elitarny Pralidoksym",
    vocation: "ELITE_KNIGHT",
    level: 388
  },
  TANKMCLOVIN: {
    id: "6df59975-39b5-45fa-a839-a2741d0f6aeb",
    name: "Tank McLovin",
    vocation: "ELITE_KNIGHT",
    level: 460
  }
};

const parties = {
  PARTY_1: {
    id: "493eb9b8-a807-4352-aaf7-385a11f7885c",
    characters: [
      { ...characters["SAJGONKA"], lootMaster: true },
      characters["HENLOTH"],
      characters["SANCTALUX"],
      characters["PRALIDOKSYM"]
    ],
    hunts: []
  },
  PARTY_2: {
    id: "dba72623-6a0a-4851-93b1-4ede30acb8c0",
    characters: [
      characters["SAJGONKA"],
      { ...characters["PRALIDOKSYM"], lootMaster: true }
    ],
    hunts: []
  },
  PARTY_3: {
    id: "e3ec15df-814e-4c2f-9c8a-ce47527da7a3",
    characters: [
      characters["PRALIDOKSYM"],
      { ...characters["SANCTALUX"], lootMaster: true },
      { ...characters["HENLOTH"], lootMaster: true },
      characters["SAJGONKA"]
    ],
    hunts: [
      {
        id: "c7c87140-270a-4feb-aed3-b0191769bb20",
        date: "2018-10-14T18:02:00.000+02:00",
        balances: [
          {
            characterId: characters["PRALIDOKSYM"].id,
            balance: 1102500
          },
          {
            characterId: characters["SAJGONKA"].id,
            balance: -440800
          },
          {
            characterId: characters["HENLOTH"].id,
            balance: -198000
          },
          {
            characterId: characters["SANCTALUX"].id,
            balance: 877000
          }
        ]
      },
      {
        id: "5b25404c-4b3a-4d80-b285-7c69927fb457",
        date: "2018-10-12T14:52:00.000+02:00",
        balances: [
          {
            characterId: characters["PRALIDOKSYM"].id,
            balance: 902500
          },
          {
            characterId: characters["SAJGONKA"].id,
            balance: -300800
          },
          {
            characterId: characters["HENLOTH"].id,
            balance: -298000
          },
          {
            characterId: characters["SANCTALUX"].id,
            balance: -55000
          }
        ]
      }
    ]
  }
};

const makeFixture = (fixture) => () => new Promise((resolve) => {
  return resolve(fixture);
});

export const partiesFixture = makeFixture([parties["PARTY_1"], parties["PARTY_2"], parties["PARTY_3"]]);
export const partyFixture = makeFixture(parties["PARTY_3"]);
