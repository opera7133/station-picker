const kobeShinStations = {
  "kobe-shin-rokko-island": [
    { name: "住吉", id: "sumiyoshi" },
    { name: "魚崎", id: "uozaki" },
    { name: "南魚崎", id: "minami-uozaki" },
    { name: "アイランド北口", id: "island-kitaguchi" },
    { name: "アイランドセンター", id: "island-center" },
    { name: "マリンパーク", id: "marine-park" },
  ],
  "kobe-shin-port-island": [
    { name: "三宮", id: "sannomiya" },
    { name: "貿易センター", id: "boeki-center" },
    { name: "ポートターミナル", id: "port-terminal" },
    { name: "中公園", id: "naka-koen" },
    { name: "みなとじま", id: "minatojima" },
    { name: "市民広場", id: "shimin-hiroba" },
    { name: "医療センター", id: "iryo-center" },
    { name: "計算科学センター", id: "keisan-kagaku-center" },
    { name: "神戸空港", id: "kobe-airport" },
    { name: "南公園", id: "minami-koen" },
    { name: "中埠頭", id: "naka-futo" },
    { name: "北埠頭", id: "kita-futo" },
  ],
};

generateRailwayStations(kobeShinStations, "kobe-shin", "hyogo");
