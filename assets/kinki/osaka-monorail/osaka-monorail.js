const osakaMonorailStations = {
  "osaka-monorail-honsen": [
    { name: "大阪空港", id: "osaka-airport" },
    { name: "蛍池", id: "hotarugaike" },
    { name: "柴原阪大前", id: "shibahara-handai-mae" },
    { name: "少路", id: "shoji" },
    { name: "千里中央", id: "senri-chuo" },
    { name: "山田", id: "yamada" },
    { name: "万博記念公園", id: "bampaku-kinen-koen" },
    { name: "宇野辺", id: "unobe" },
    { name: "南茨木", id: "minami-ibaraki" },
    { name: "沢良宜", id: "sawaragi" },
    { name: "摂津", id: "settsu" },
    { name: "南摂津", id: "minami-settsu" },
    { name: "大日", id: "dainichi" },
    { name: "門真市", id: "kadomashi" },
  ],
  "osaka-monorail-saito": [
    { name: "万博記念公園", id: "bampaku-kinen-koen" },
    { name: "公園東口", id: "koen-higashi-guchi" },
    { name: "阪大病院前", id: "handai-byoin-mae" },
    { name: "豊川", id: "toyokawa" },
    { name: "彩都西", id: "saito-nishi" },
  ],
};

generateRailwayStations(osakaMonorailStations, "osaka-monorail", "osaka");
