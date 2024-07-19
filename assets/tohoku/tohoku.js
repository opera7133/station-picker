const tohokuRailways = {
  id: "tohoku",
  name: "東北",
  railways: {},
};

const aomoriRailways = {
  id: "aomori",
  name: "青森",
  railways: {},
};

const iwateRailways = {
  id: "iwate",
  name: "岩手",
  railways: {},
};

const miyagiRailways = {
  id: "miyagi",
  name: "宮城",
  railways: {},
};

const akitaRailways = {
  id: "akita",
  name: "秋田",
  railways: {},
};

const yamagataRailways = {
  id: "yamagata",
  name: "山形",
  railways: {},
};

const fukushimaRailways = {
  id: "fukushima",
  name: "福島",
  railways: {},
};

const tohokuRailwaysList = [
  tohokuRailways,
  aomoriRailways,
  iwateRailways,
  miyagiRailways,
  akitaRailways,
  yamagataRailways,
  fukushimaRailways,
];
/*
for (const prefecture of tohokuRailwaysList) {
  if (prefecture.id === "tohoku") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "tohoku");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
*/
