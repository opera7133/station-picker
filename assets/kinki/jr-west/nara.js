const jrWestNaraStations = {
  "jr-west-manyo": [
    { name: "奈良", id: "nara" },
    { name: "京終", id: "kyobate" },
    { name: "帯解", id: "obitoke" },
    { name: "櫟本", id: "ichinomoto" },
    { name: "天理", id: "tenri" },
    { name: "長柄", id: "nagara" },
    { name: "柳本", id: "yanagimoto" },
    { name: "巻向", id: "makimuku" },
    { name: "三輪", id: "miwa" },
    { name: "桜井", id: "sakurai" },
    { name: "香久山", id: "kaguyama" },
    { name: "畝傍", id: "unebi" },
    { name: "金橋", id: "kanahashi" },
    { name: "高田", id: "takada" },
  ],
};

generateRailwayStations(jrWestNaraStations, "jr-west", "kinki");
