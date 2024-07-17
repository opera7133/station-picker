const jrEastGunmaStations = {
  "jr-east-agatsuma": [
    { name: "渋川", id: "shibukawa" },
    { name: "金島", id: "kanashima" },
    { name: "祖母島", id: "ubashima" },
    { name: "小野上", id: "onogami" },
    { name: "小野上温泉", id: "onogami-onsen" },
    { name: "市城", id: "ichishiro" },
    { name: "中之条", id: "nakanojo" },
    { name: "群馬原町", id: "gunma-haramachi" },
    { name: "郷原", id: "gobara" },
    { name: "矢倉", id: "yagura" },
    { name: "岩島", id: "iwashima" },
    { name: "川原湯温泉", id: "kawarayu-onsen" },
    { name: "長野原草津口", id: "naganohara-kusatsuguchi" },
    { name: "群馬大津", id: "gunma-otsu" },
    { name: "羽根尾", id: "haneo" },
    { name: "袋倉", id: "fukurogura" },
    { name: "万座・鹿沢口", id: "manza-kazawaguchi" },
    { name: "大前", id: "omae" },
  ],
  "jr-east-shinetsu-ty": [
    { name: "高崎", id: "takasaki" },
    { name: "北高崎", id: "kita-takasaki" },
    { name: "群馬八幡", id: "gunma-yawata" },
    { name: "安中", id: "annaka" },
    { name: "磯部", id: "isobe" },
    { name: "松井田", id: "matsuida" },
    { name: "西松井田", id: "nishi-matsuida" },
    { name: "横川", id: "yokokawa" },
  ],
};

generateRailwayStations(jrEastGunmaStations, "jr-east", "kanto");
