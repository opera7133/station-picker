const hankyuHyogoStations = {
  "hankyu-kobe": [],
  "hankyu-kobe-kosoku": [],
  "hankyu-itami": [
    { name: "塚口", id: "tsukaguchi" },
    { name: "稲野", id: "inano" },
    { name: "新伊丹", id: "shin-itami" },
    { name: "伊丹", id: "itami" },
  ],
  "hankyu-imazu-kita": [],
  "hankyu-imazu-minami": [
    { name: "西宮北口", id: "nishinomiya-kitaguchi" },
    { name: "阪神国道", id: "hanshin-kokudo" },
    { name: "今津", id: "imazu" },
  ],
  "hankyu-koyo": [
    { name: "夙川", id: "shukugawa" },
    { name: "苦楽園口", id: "kurakuen-guchi" },
    { name: "甲陽園", id: "koyo-en" },
  ],
};

generateRailwayStations(hankyuHyogoStations, "hankyu", "kinki");
