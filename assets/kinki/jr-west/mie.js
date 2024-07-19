const jrWestMieStations = {
  "jr-west-kansai": [
    { name: "亀山", id: "kameyama" },
    { name: "関", id: "seki" },
    { name: "加太", id: "kabuto" },
    { name: "柘植", id: "tsuge" },
    { name: "新堂", id: "shindo" },
    { name: "佐那具", id: "sanagu" },
    { name: "伊賀上野", id: "iga-ueno" },
    { name: "島ヶ原", id: "shimagahara" },
    { name: "月ヶ瀬口", id: "tsukigaseguchi" },
    { name: "大河原", id: "okawara" },
    { name: "笠置", id: "kasagi" },
    { name: "加茂", id: "kamo" },
  ],
};

generateRailwayStations(jrWestMieStations, "jr-west", "kinki");
