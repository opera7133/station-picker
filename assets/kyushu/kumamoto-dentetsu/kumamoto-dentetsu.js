const kumamotoDentetsuStations = {
  "kumamoto-dentetsu-honsen": [
    { name: "藤崎宮前", id: "fujisakigu-mae" },
    { name: "黒髪町", id: "kurokami-machi" },
    { name: "北熊本", id: "kita-kumamoto" },
    { name: "亀井", id: "kamei" },
    { name: "八景水谷", id: "hakenomiya" },
    { name: "堀川", id: "horikawa" },
    { name: "新須屋", id: "shin-suya" },
    { name: "須屋", id: "suya" },
    { name: "三ツ石", id: "mitsuishi" },
    { name: "黒石", id: "kuroishi" },
    { name: "熊本高専前", id: "kumamoto-kosen-mae" },
    { name: "再春医療センター前", id: "saishun-iryo-center-mae" },
    { name: "御代志", id: "miyoshi" },
  ],
  "kumamoto-dentetsu-kami-kumamoto": [
    { name: "上熊本", id: "kami-kumamoto" },
    { name: "韓々坂", id: "kankanzaka" },
    { name: "池田", id: "ikeda" },
    { name: "打越", id: "uchigoshi" },
    { name: "坪井川公園", id: "tsuboigawa-koen" },
    { name: "北熊本", id: "kita-kumamoto" },
  ],
};

generateRailwayStations(
  kumamotoDentetsuStations,
  "kumamoto-dentetsu",
  "kumamoto"
);
