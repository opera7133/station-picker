const eidenStations = {
  "eiden-eizan": [
    { name: "出町柳", yomi: "でまちやなぎ", id: "demachi-yanagi" },
    { name: "元田中", yomi: "もとたなか", id: "mototanaka" },
    {
      name: "茶山・京都芸術大学",
      yomi: "ちゃやま・きょうとげいじゅつだいがく",
      id: "chayama-kyoto-geijutsudaigaku",
    },
    { name: "一乗寺", yomi: "いちじょうじ", id: "ichijoji" },
    { name: "修学院", yomi: "しゅうがくいん", id: "shugakuin" },
    { name: "宝ヶ池", yomi: "たからがいけ", id: "takaragaike" },
    { name: "三宅八幡", yomi: "みやけはちまん", id: "miyakehachiman" },
    {
      name: "八瀬比叡山口",
      yomi: "やせひえいざんぐち",
      id: "yase-hieizanguchi",
    },
  ],
  "eiden-kurama": [
    { name: "出町柳", yomi: "でまちやなぎ", id: "demachi-yanagi" },
    { name: "元田中", yomi: "もとたなか", id: "mototanaka" },
    {
      name: "茶山・京都芸術大学",
      yomi: "ちゃやま・きょうとげいじゅつだいがく",
      id: "chayama-kyoto-geijutsudaigaku",
    },
    { name: "一乗寺", yomi: "いちじょうじ", id: "ichijoji" },
    { name: "修学院", yomi: "しゅうがくいん", id: "shugakuin" },
    { name: "宝ヶ池", yomi: "たからがいけ", id: "takaragaike" },
    { name: "八幡前", yomi: "はちまんまえ", id: "hachiman-mae" },
    { name: "岩倉", yomi: "いわくら", id: "iwakura" },
    { name: "木野", yomi: "きの", id: "kino" },
    {
      name: "京都精華大前",
      yomi: "きょうとせいかだいまえ",
      id: "kyoto-seikadai-mae",
    },
    { name: "二軒茶屋", yomi: "にけんちゃや", id: "nikenchaya" },
    { name: "市原", yomi: "いちはら", id: "ichihara" },
    { name: "二ノ瀬", yomi: "にのせ", id: "ninose" },
    { name: "貴船口", yomi: "きふねぐち", id: "kifuneguchi" },
    { name: "鞍馬", yomi: "くらま", id: "kurama" },
  ],
};

generateRailwayStations(eidenStations, "eiden", "kyoto");
