const seibuStations = {
  "seibu-ikebukuro": [
    {
      name: "池袋",
      id: "ikebukuro",
    },
    {
      name: "椎名町",
      id: "shiinamachi",
    },
    {
      name: "東長崎",
      id: "higashi-nagasaki",
    },
    {
      name: "江古田",
      id: "ekoda",
    },
    {
      name: "桜台",
      id: "sakuradai",
    },
    {
      name: "練馬",
      id: "nerima",
    },
    {
      name: "中村橋",
      id: "nakamurabashi",
    },
    {
      name: "富士見台",
      id: "fujimidai",
    },
    {
      name: "練馬高野台",
      id: "nerima-takanodai",
    },
    {
      name: "石神井公園",
      id: "shakujii-koen",
    },
    {
      name: "大泉学園",
      id: "oizumi-gakuen",
    },
    {
      name: "保谷",
      id: "hoya",
    },
    {
      name: "ひばりヶ丘",
      id: "hibarigaoka",
    },
    {
      name: "東久留米",
      id: "higashi-kurume",
    },
    {
      name: "清瀬",
      id: "kiyose",
    },
    {
      name: "秋津",
      id: "akitsu",
    },
    {
      name: "所沢",
      id: "tokorozawa",
    },
    {
      name: "西所沢",
      id: "nishi-tokorozawa",
    },
    {
      name: "小手指",
      id: "kotesashi",
    },
    {
      name: "狭山ヶ丘",
      id: "sayamagaoka",
    },
    {
      name: "武蔵藤沢",
      id: "musashi-fujisawa",
    },
    {
      name: "稲荷山公園",
      id: "inariyama-koen",
    },
    {
      name: "入間市",
      id: "iruma-shi",
    },
    {
      name: "仏子",
      id: "bushi",
    },
    {
      name: "元加治",
      id: "motokaji",
    },
    {
      name: "飯能",
      id: "hanno",
    },
    {
      name: "東飯能",
      id: "higashi-hanno",
    },
    {
      name: "高麗",
      id: "koma",
    },
    {
      name: "武蔵横手",
      id: "musashi-yokote",
    },
    {
      name: "東吾野",
      id: "higashi-agano",
    },
    {
      name: "吾野",
      id: "agano",
    },
  ],
  "seibu-chichibu": [
    {
      name: "吾野",
      id: "agano",
    },
    {
      name: "西吾野",
      id: "nishi-agano",
    },
    {
      name: "正丸",
      id: "shomaru",
    },
    {
      name: "芦ヶ久保",
      id: "ashigakubo",
    },
    {
      name: "横瀬",
      id: "yokoze",
    },
    {
      name: "西武秩父",
      id: "seibu-chichibu",
    },
  ],
  "seibu-yurakucho": [
    {
      name: "練馬",
      id: "nerima",
    },
    {
      name: "新桜台",
      id: "shin-sakuradai",
    },
    {
      name: "小竹向原",
      id: "kotake-mukaihara",
    },
  ],
  "seibu-toshima": [
    {
      name: "練馬",
      id: "nerima",
    },
    {
      name: "豊島園",
      id: "toshimaen",
    },
  ],
  "seibu-sayama": [
    {
      name: "西所沢",
      id: "nishi-tokorozawa",
    },
    {
      name: "下山口",
      id: "shimoyamaguchi",
    },
    {
      name: "西武球場前",
      id: "seibukyujo-mae",
    },
  ],
  "seibu-shinjuku": [
    {
      name: "西武新宿",
      id: "seibu-shinjuku",
    },
    {
      name: "高田馬場",
      id: "takanobaba",
    },
    {
      name: "下落合",
      id: "shimoochiai",
    },
    {
      name: "中井",
      id: "nakai",
    },
    {
      name: "新井薬師前",
      id: "araiyakushi-mae",
    },
    {
      name: "沼袋",
      id: "numabukuro",
    },
    {
      name: "野方",
      id: "nogata",
    },
    {
      name: "都立家政",
      id: "toritsu-kasei",
    },
    {
      name: "鷺ノ宮",
      id: "saginomiya",
    },
    {
      name: "下井草",
      id: "shimoigusa",
    },
    {
      name: "上石神井",
      id: "kamisyakuji",
    },
    {
      name: "武蔵関",
      id: "musashiseki",
    },
    {
      name: "東伏見",
      id: "higashi-fushimi",
    },
    {
      name: "西武柳沢",
      id: "seibu-yagisawa",
    },
    {
      name: "田無",
      id: "tanashi",
    },
    {
      name: "花小金井",
      id: "hanakoganei",
    },
    {
      name: "小平",
      id: "kodaira",
    },
    {
      name: "久米川",
      id: "kumegawa",
    },
    {
      name: "東村山",
      id: "higashi-murayama",
    },
    {
      name: "所沢",
      id: "tokorozawa",
    },
    {
      name: "航空公園",
      id: "kouku-koen",
    },
    {
      name: "新所沢",
      id: "shin-tokorozawa",
    },
    {
      name: "入曽",
      id: "iriso",
    },
    {
      name: "狭山市",
      id: "sayamashi",
    },
    {
      name: "新狭山",
      id: "shin-sayama",
    },
    {
      name: "南大塚",
      id: "minami-otsuka",
    },
    {
      name: "本川越",
      id: "hon-kawagoe",
    },
  ],
  "seibu-haijima": [
    {
      name: "小平",
      id: "kodaira",
    },
    {
      name: "萩山",
      id: "hagiyama",
    },
    {
      name: "小川",
      id: "ogawa",
    },
    {
      name: "東大和市",
      id: "higashi-yamato-shi",
    },
    {
      name: "玉川上水",
      id: "tamagawa-josui",
    },
    {
      name: "武蔵砂川",
      id: "musashi-sunagawa",
    },
    {
      name: "西武立川",
      id: "seibu-tachikawa",
    },
    {
      name: "拝島",
      id: "haijima",
    },
  ],
  "seibu-tamako": [
    {
      name: "国分寺",
      id: "kokubunji",
    },
    {
      name: "一橋学園",
      id: "hitotsubashi-gakuen",
    },
    {
      name: "青梅街道",
      id: "ome-kaido",
    },
    {
      name: "萩山",
      id: "hagiyama",
    },
    {
      name: "八坂",
      id: "yasaka",
    },
    {
      name: "武蔵大和",
      id: "musashi-yamato",
    },
    {
      name: "多摩湖",
      id: "tamako",
    },
  ],
  "seibu-kokubunji": [
    {
      name: "国分寺",
      id: "kokubunji",
    },
    {
      name: "恋ヶ窪",
      id: "koigakubo",
    },
    {
      name: "鷹の台",
      id: "takanodai",
    },
    {
      name: "小川",
      id: "ogawa",
    },
    {
      name: "東村山",
      id: "higashi-murayama",
    },
  ],
  "seibu-seibuen": [
    {
      name: "東村山",
      id: "higashi-murayama",
    },
    {
      name: "西武園",
      id: "seibuen",
    },
  ],
  "seibu-tamagawa": [
    {
      name: "武蔵境",
      id: "musashisakai",
    },
    {
      name: "新小金井",
      id: "shinkoganei",
    },
    {
      name: "多磨",
      id: "tama",
    },
    {
      name: "白糸台",
      id: "shiraitodai",
    },
    {
      name: "競艇場前",
      id: "kyoteijo-mae",
    },
    {
      name: "是政",
      id: "koremasa",
    },
  ],
  "seibu-yamaguchi": [
    {
      name: "多摩湖",
      id: "tamako",
    },
    {
      name: "西武球場前",
      id: "seibukyujo-mae",
    },
  ],
};

generateRailwayStations("seibu", seibuStations);
