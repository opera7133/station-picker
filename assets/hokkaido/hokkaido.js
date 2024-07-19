const hokkaidoRailways = {
  id: "hokkaido",
  name: "北海道",
  railways: {},
};

const sapporoRailways = {
  id: "sapporo",
  name: "札幌",
  railways: {},
};

const hakodateRailways = {
  id: "hakodate",
  name: "函館",
  railways: {},
};

const hokkaidoRailwaysList = [
  hokkaidoRailways,
  sapporoRailways,
  hakodateRailways,
];
/*
for (const prefecture of hokkaidoRailwaysList) {
  if (prefecture.id === "hokkaido") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "hokkaido");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
*/
