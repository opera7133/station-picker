const kobeMetroStations = {
  "kobe-metro-seishin-yamate": [
    { name: "新神戸", id: "shin-kobe" },
    { name: "三宮", id: "sannomiya" },
    { name: "県庁前", id: "kencho-mae" },
    { name: "大倉山", id: "okurayama" },
    { name: "湊川公園", id: "minatogawa-koen" },
    { name: "上沢", id: "kamisawa" },
    { name: "長田", id: "nagata" },
    { name: "新長田", id: "shin-nagata" },
    { name: "板宿", id: "itayado" },
    { name: "妙法寺", id: "myohoji" },
    { name: "名谷", id: "myodani" },
    { name: "総合運動公園", id: "sogo-undo-koen" },
    { name: "学園都市", id: "gakuen-toshi" },
    { name: "伊川谷", id: "ikawadani" },
    { name: "西神南", id: "seishin-minami" },
    { name: "西神中央", id: "seishin-chuo" },
  ],
  "kobe-metro-hokushin": [
    { name: "新神戸", id: "shin-kobe" },
    { name: "谷上", id: "tanigami" },
  ],
  "kobe-metro-kaigan": [
    { name: "三宮・花時計前", id: "sannomiya-hanadokeimae" },
    { name: "旧居留地・大丸前", id: "kyukyoryuchi-daimaru-mae" },
    { name: "みなと元町", id: "minato-motomachi" },
    { name: "ハーバーランド", id: "harborland" },
    { name: "中央市場前", id: "chuoichiba-mae" },
    { name: "和田岬", id: "wadamisaki" },
    { name: "御崎公園", id: "misaki-koen" },
    { name: "苅藻", id: "karumo" },
    { name: "駒ヶ林", id: "komagabayashi" },
    { name: "新長田", id: "shin-nagata" },
  ],
};

generateRailwayStations(kobeMetroStations, "kobe-metro", "hyogo");
