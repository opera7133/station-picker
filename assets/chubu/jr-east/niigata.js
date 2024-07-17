const jrEastNiigataStations = {
  "jr-east-hakushin": [
    {
      name: "新潟",
      id: "niigata",
    },
    {
      name: "東新潟",
      id: "higashi-niigata",
    },
    {
      name: "大形",
      id: "ogata",
    },
    {
      name: "新崎",
      id: "niizaki",
    },
    {
      name: "早通",
      id: "hayadori",
    },
    {
      name: "豊栄",
      id: "toyosaka",
    },
    {
      name: "黒山",
      id: "kuroyama",
    },
    {
      name: "佐々木",
      id: "sasaki",
    },
    {
      name: "西新発田",
      id: "nishi-shibata",
    },
    {
      name: "新発田",
      id: "shibata",
    },
  ],
  "jr-east-shinetsu-sn": [],
  "jr-east-shinetsu-nn": [],
  "jr-east-joetsu": [],
  "jr-east-yahiko": [
    {
      name: "弥彦",
      id: "yahiko",
    },
    {
      name: "矢作",
      id: "yahagi",
    },
    {
      name: "吉田",
      id: "yoshida",
    },
    {
      name: "西燕",
      id: "nishi-tsubame",
    },
    {
      name: "燕",
      id: "tsubame",
    },
    {
      name: "燕三条",
      id: "tsubame-sanjo",
    },
    {
      name: "北三条",
      id: "kita-sanjo",
    },
    {
      name: "東三条",
      id: "higashi-sanjo",
    },
  ],
  "jr-east-echigo": [],
};

generateRailwayStations(jrEastNiigataStations, "jr-east", "chubu");
