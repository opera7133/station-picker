const tobuGunmaStations = {
  "tb-kiryu": [
    {
      name: "太田",
      id: "ota",
    },
    {
      name: "三枚橋",
      id: "sanmaibashi",
    },
    {
      name: "治良門橋",
      id: "jiroenbashi",
    },
    {
      name: "藪塚",
      id: "yabuzuka",
    },
    {
      name: "阿左美",
      id: "azami",
    },
    {
      name: "新桐生",
      id: "shin-kiryu",
    },
    {
      name: "相老",
      id: "aioi",
    },
    {
      name: "赤城",
      id: "akagi",
    },
  ],
  "tb-koizumi": [
    {
      name: "館林",
      id: "tatebayashi",
    },
    {
      name: "成島",
      id: "narushima",
    },
    {
      name: "本中野",
      id: "honnakano",
    },
    {
      name: "篠塚",
      id: "shinozuka",
    },
    {
      name: "東小泉",
      id: "higashi-koizumi",
    },
    {
      name: "小泉町",
      id: "koizumi-machi",
    },
    {
      name: "西小泉",
      id: "nishi-koizumi",
    },
  ],
  "tb-koizumi-ota": [
    {
      name: "東小泉",
      id: "higashi-koizumi",
    },
    {
      name: "竜舞",
      id: "ryumai",
    },
    {
      name: "太田",
      id: "ota",
    },
  ],
};

generateRailwayStations(tobuGunmaStations, "tb", "kanto");
