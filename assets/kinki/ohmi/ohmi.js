const ohmiStations = {
  "ohmi-hikone-taga-taisha": [
    { name: "米原", id: "maibara" },
    { name: "フジテック前", id: "fujitec-mae" },
    { name: "鳥居本", id: "toriimoto" },
    { name: "彦根", id: "hikone" },
    { name: "ひこね芹川", id: "hikone-serikawa" },
    { name: "彦根口", id: "hikone-guchi" },
    { name: "高宮", id: "takamiya" },
    { name: "スクリーン", id: "screen" },
    { name: "多賀大社前", id: "tagataisha-mae" },
  ],
  "ohmi-koto-omiji": [],
  "ohmi-minakuchi-gamono": [],
  "ohmi-manyo-akane": [
    { name: "八日市", id: "yokaichi" },
    { name: "新八日市", id: "shin-yokaichi" },
    { name: "太郎坊宮前", id: "tarobogu-mae" },
    { name: "市辺", id: "ichinobe" },
    { name: "平田", id: "hirata" },
    { name: "武佐", id: "musa" },
    { name: "近江八幡", id: "omi-hachiman" },
  ],
};

generateRailwayStations(ohmiStations, "ohmi", "shiga");
