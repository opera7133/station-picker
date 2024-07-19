const jrWestHyogoStations = {
  "jr-west-kobe": [],
  "jr-west-fukuchiyama": [
    { name: "尼崎", id: "amagasaki" },
    { name: "塚口", id: "tsukaguchi" },
    { name: "猪名寺", id: "inadera" },
    { name: "伊丹", id: "itami" },
    { name: "北伊丹", id: "kita-itami" },
    { name: "川西池田", id: "kawanishi-ikeda" },
    { name: "中山寺", id: "nakayamadera" },
    { name: "宝塚", id: "takarazuka" },
    { name: "生瀬", id: "namaze" },
    { name: "西宮名塩", id: "nishinomiya-najio" },
    { name: "武田尾", id: "takedao" },
    { name: "道場", id: "dojo" },
    { name: "三田", id: "sanda" },
    { name: "新三田", id: "shin-sanda" },
    { name: "広野", id: "hirono" },
    { name: "相野", id: "aino" },
    { name: "藍本", id: "aimoto" },
    { name: "草野", id: "kusano" },
    { name: "古市", id: "furichi" },
    { name: "南矢代", id: "minamiyashiro" },
    { name: "篠山口", id: "sasayamaguchi" },
    { name: "丹波大山", id: "tamba-oyama" },
    { name: "下滝", id: "shimotaki" },
    { name: "谷川", id: "tanikawa" },
    { name: "柏原", id: "kaibara" },
    { name: "石生", id: "iso" },
    { name: "黒井", id: "kuroi" },
    { name: "市島", id: "ichijima" },
    { name: "丹波竹田", id: "tamba-takeda" },
    { name: "福知山", id: "fukuchiyama" },
  ],
  "jr-west-kakogawa": [],
  "jr-west-bantan": [],
  "jr-west-kishin": [],
  "jr-west-sanyo": [],
  "jr-west-ako": [],
};

generateRailwayStations(jrWestHyogoStations, "jr-west", "kinki");
