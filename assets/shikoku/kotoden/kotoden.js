const kotodenStations = {
  "kotoden-kotohira": [
    { name: "高松築港", id: "takamatsu-chicko" },
    { name: "片原町", id: "katahara-machi" },
    { name: "瓦町", id: "kawara-machi" },
    { name: "栗林公園", id: "ritsurin-koen" },
    { name: "三条", id: "sanjo" },
    { name: "伏石", id: "fuseishi" },
    { name: "太田", id: "ota" },
    { name: "仏生山", id: "busshozan" },
    { name: "空港通り", id: "kuko-dori" },
    { name: "一宮", id: "ichinomiya" },
    { name: "円座", id: "enza" },
    { name: "岡本", id: "okamoto" },
    { name: "挿頭丘", id: "kazashigaoka" },
    { name: "畑田", id: "hatada" },
    { name: "陶", id: "sue" },
    { name: "綾川", id: "ayagawa" },
    { name: "滝宮", id: "takinomiya" },
    { name: "羽床", id: "hayuka" },
    { name: "栗熊", id: "kurikuma" },
    { name: "岡田", id: "okada" },
    { name: "羽間", id: "hazama" },
    { name: "榎井", id: "enai" },
    { name: "琴電琴平", id: "kotoden-kotohira" },
  ],
  "kotoden-nagao": [
    { name: "高松築港", id: "takamatsu-chicko" },
    { name: "片原町", id: "katahara-machi" },
    { name: "瓦町", id: "kawara-machi" },
    { name: "花園", id: "hanazono" },
    { name: "林道", id: "hayashimichi" },
    { name: "木太東口", id: "kita-higashiguchi" },
    { name: "元山", id: "motoyama" },
    { name: "水田", id: "mizuta" },
    { name: "西前田", id: "nishimaeda" },
    { name: "高田", id: "takata" },
    { name: "池戸", id: "ikenobe" },
    { name: "農学部前", id: "nogakubu-mae" },
    { name: "平木", id: "hiragi" },
    { name: "学園通り", id: "gakuen-dori" },
    { name: "白山", id: "shirayama" },
    { name: "井戸", id: "ido" },
    { name: "公文明", id: "kumommyo" },
    { name: "長尾", id: "nagao" },
  ],
  "kotoden-shido": [
    { name: "瓦町", id: "kawara-machi" },
    { name: "今橋", id: "imabashi" },
    { name: "松島二丁目", id: "matsushima-2" },
    { name: "沖松島", id: "oki-matsushima" },
    { name: "春日川", id: "kasugagawa" },
    { name: "潟元", id: "katamoto" },
    { name: "琴電屋島", id: "kotoden-yashima" },
    { name: "古高松", id: "furutakamatsu" },
    { name: "八栗", id: "yakuri" },
    { name: "六万寺", id: "rokumanji" },
    { name: "大町", id: "omachi" },
    { name: "八栗新道", id: "yakuri-shinmichi" },
    { name: "塩屋", id: "shioya" },
    { name: "房前", id: "fusazaki" },
    { name: "原", id: "hara" },
    { name: "琴電志度", id: "kotoden-shido" },
  ],
};

generateRailwayStations(kotodenStations, "kotoden", "kagawa");
