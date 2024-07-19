const chugokuRailways = {
  id: "chugoku",
  name: "中国",
  railways: {},
};

const tottoriRailways = {
  id: "tottori",
  name: "鳥取",
  railways: {},
};

const shimaneRailways = {
  id: "shimane",
  name: "島根",
  railways: {},
};

const okayamaRailways = {
  id: "okayama",
  name: "岡山",
  railways: {},
};

const hiroshimaRailways = {
  id: "hiroshima",
  name: "広島",
  railways: {},
};

const yamaguchiRailways = {
  id: "yamaguchi",
  name: "山口",
  railways: {},
};

const chugokuRailwaysList = [
  chugokuRailways,
  tottoriRailways,
  shimaneRailways,
  okayamaRailways,
  hiroshimaRailways,
  yamaguchiRailways,
];
/*
for (const prefecture of chugokuRailwaysList) {
  if (prefecture.id === "chugoku") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "chugoku");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
*/
