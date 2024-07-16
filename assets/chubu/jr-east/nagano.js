const jrEastNaganoStations = {
  "jr-east-oito": [],
  "jr-east-koumi": [],
  "jr-east-iiyama": [],
  "jr-east-shinonoi": [
    { name: "塩尻", id: "shiojiri" },
    { name: "広丘", id: "hirooka" },
    { name: "村井", id: "murai" },
    { name: "平田", id: "hirata" },
    { name: "南松本", id: "minami-matsumoto" },
    { name: "松本", id: "matsumoto" },
    { name: "北松本", id: "kita-matsumoto" },
    { name: "田沢", id: "tazawa" },
    { name: "明科", id: "akashina" },
    { name: "西条", id: "nishijo" },
    { name: "坂北", id: "sakakita" },
    { name: "聖高原", id: "hijiri-kogen" },
    { name: "冠着", id: "kamuriki" },
    { name: "姨捨", id: "obasute" },
    { name: "稲荷山", id: "inariyama" },
    { name: "篠ノ井", id: "shinonoi" },
  ],
};

generateRailwayStations(jrEastNaganoStations, "jr-east", "chubu");
