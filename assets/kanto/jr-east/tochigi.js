const jrEastTochigiStations = {
  "jr-east-ryomo": [],
  "jr-east-utsunomiya": [],
  "jr-east-karasuyama": [
    { name: "宇都宮", id: "utsunomiya" },
    { name: "岡本", id: "okamoto" },
    { name: "下野花岡", id: "shimotsuke-hanaoka" },
    { name: "仁井田", id: "nita" },
    { name: "神於山", id: "konoyama" },
    { name: "大金", id: "ogane" },
    { name: "小塙", id: "kobana" },
    { name: "滝", id: "taki" },
    { name: "烏山", id: "karasuyama" },
  ],
  "jr-east-nikko": [
    { name: "宇都宮", id: "utsunomiya" },
    { name: "鶴田", id: "tsuruta" },
    { name: "鹿沼", id: "kanuma" },
    { name: "文挟", id: "fubasami" },
    { name: "下野大沢", id: "shimotsuke-osawa" },
    { name: "今市", id: "imaichi" },
    { name: "日光", id: "nikko" },
  ],
};

generateRailwayStations(jrEastTochigiStations, "jr-east", "kanto");
