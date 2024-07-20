const keihanKyotoStations = {
  "keihan-oto": [
    { name: "三条", yomi: "さんじょう", id: "sanjo" },
    {
      name: "神宮丸太町",
      yomi: "じんぐうまるたまち",
      id: "jingu-maruta-machi",
    },
    { name: "出町柳", yomi: "でまちやなぎ", id: "demachiyanagi" },
  ],
  "keihan-uji": [
    { name: "中書島", yomi: "ちゅうしょじま", id: "chushojima" },
    { name: "観月橋", yomi: "かんげつきょう", id: "kangetsukyo" },
    {
      name: "桃山南口",
      yomi: "ももやまみなみぐち",
      id: "momoyama-minamiguchi",
    },
    { name: "六地蔵", yomi: "ろくじぞう", id: "rokujizo" },
    { name: "木幡", yomi: "こわた", id: "kowata" },
    { name: "黄檗", yomi: "おうばく", id: "obaku" },
    { name: "三室戸", yomi: "みむろど", id: "mimurodo" },
    { name: "宇治", yomi: "うじ", id: "uji" },
  ],
};

generateRailwayStations(keihanKyotoStations, "keihan", "kinki");
