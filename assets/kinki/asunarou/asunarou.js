const asunarouStations = {
  "asunarou-utsube": [
    {
      name: "あすなろう四日市",
      yomi: "あすなろうよっかいち",
      id: "asunarou-yokkaichi",
    },
    { name: "赤堀", yomi: "あかほり", id: "akahori" },
    { name: "日永", yomi: "ひなが", id: "hinaga" },
    { name: "南日永", yomi: "みなみひなが", id: "minami-hinaga" },
    { name: "泊", yomi: "とまり", id: "tomari" },
    { name: "追分", yomi: "おいわけ", id: "oiwake" },
    { name: "小古曽", yomi: "おごそ", id: "ogoso" },
    { name: "内部", yomi: "うつべ", id: "utsube" },
  ],
  "asunarou-hachioji": [
    { name: "日永", yomi: "ひなが", id: "hinaga" },
    { name: "西日野", yomi: "にしひの", id: "nishihino" },
  ],
};

generateRailwayStations(asunarouStations, "asunarou", "mie");
