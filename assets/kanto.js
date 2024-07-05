const kantoRailways = {
  "jr-east": {
    id: "jr-east",
    name: "JR東日本",
    railway: [
      {
        name: "山手線",
        id: "yamanote",
        icon: "jr-east/jy",
      },
      {
        name: "京浜東北線",
        id: "keihin-tohoku",
        icon: "jr-east/jk",
      },
      {
        name: "東海道線",
        id: "tokaido",
        icon: "jr-east/jo",
      },
      {
        name: "中央線快速",
        id: "chuo-rapid",
        icon: "jr-east/jc",
      },
      {
        name: "五日市線",
        id: "itsukaichi",
        icon: "jr-east/jc",
      },
      {
        name: "青梅線",
        id: "oume",
        icon: "jr-east/jc",
      },
      {
        name: "中央・総武各駅停車",
        id: "soubu",
        icon: "jr-east/jb",
      },
      {
        name: "総武快速線",
        id: "soubu-rapid",
        icon: "jr-east/jo",
      },
      {
        name: "京葉線",
        id: "keiyo",
        icon: "jr-east/je",
      },
      {
        name: "武蔵野線",
        id: "musashino",
        icon: "jr-east/jm",
      },
      {
        name: "鶴見線",
        id: "tsurumi",
        icon: "jr-east/ji",
      },
      {
        name: "鶴見線（大川支線）",
        id: "tsurumi-okawa",
        icon: "jr-east/ji",
      },
      {
        name: "鶴見線（海芝浦支線）",
        id: "tsurumi-umi-shibaura",
        icon: "jr-east/ji",
      },
      {
        name: "中央本線",
        id: "chuo-honsen",
        icon: "jr-east/chuo-honsen",
      },
      {
        name: "八高線",
        id: "hachiko",
        icon: "jr-east/hachiko",
      },
      {
        name: "総武本線",
        id: "soubu-honsen",
        icon: "jr-east/soubu-honsen",
      },
      {
        name: "成田線",
        id: "narita",
        icon: "jr-east/narita",
      },
      {
        name: "成田線（空港支線）",
        id: "narita-kuko",
        icon: "jr-east/narita",
      },
      {
        name: "成田線（我孫子支線）",
        id: "narita-abiko",
        icon: "jr-east/narita",
      },
      {
        name: "内房線",
        id: "uchibo",
        icon: "jr-east/uchibo",
      },
      {
        name: "東金線",
        id: "togane",
        icon: "jr-east/togane",
      },
      {
        name: "外房線",
        id: "sotobo",
        icon: "jr-east/sotobo",
      },
      {
        name: "久留里線",
        id: "kururi",
        icon: "jr-east/kururi",
      },
      {
        name: "鹿島線",
        id: "kashima",
        icon: "jr-east/kashima",
      },
    ],
  },
  "tokyo-metro": {
    id: "tokyo-metro",
    name: "東京メトロ",
    railway: [
      {
        name: "銀座線",
        id: "ginza",
        icon: "tokyo-metro/g",
      },
      {
        name: "丸ノ内線",
        id: "marunouchi",
        icon: "tokyo-metro/m",
      },
      {
        name: "丸ノ内分岐線",
        id: "marunouchi-bunki",
        icon: "tokyo-metro/mb",
      },
      {
        name: "日比谷線",
        id: "hibiya",
        icon: "tokyo-metro/h",
      },
      {
        name: "東西線",
        id: "tozai",
        icon: "tokyo-metro/t",
      },
      {
        name: "千代田線",
        id: "chiyoda",
        icon: "tokyo-metro/c",
      },
      {
        name: "有楽町線",
        id: "yurakucho",
        icon: "tokyo-metro/y",
      },
      {
        name: "半蔵門線",
        id: "hanzomon",
        icon: "tokyo-metro/z",
      },
      {
        name: "南北線",
        id: "namboku",
        icon: "tokyo-metro/n",
      },
      {
        name: "副都心線",
        id: "fukutoshin",
        icon: "tokyo-metro/f",
      },
    ],
  },
  seibu: {
    id: "seibu",
    name: "西武鉄道",
    railway: [
      {
        name: "池袋線",
        id: "ikebukuro",
        icon: "seibu/si",
      },
      {
        name: "西武秩父線",
        id: "chichibu",
        icon: "seibu/si",
      },
      {
        name: "西武有楽町線",
        id: "yurakucho",
        icon: "seibu/si",
      },
      {
        name: "豊島線",
        id: "toshima",
        icon: "seibu/si",
      },
      {
        name: "狭山線",
        id: "sayama",
        icon: "seibu/si",
      },
      {
        name: "新宿線",
        id: "shinjuku",
        icon: "seibu/ss",
      },
      {
        name: "拝島線",
        id: "haijima",
        icon: "seibu/ss",
      },
      {
        name: "多摩湖線",
        id: "tamako",
        icon: "seibu/st",
      },
      {
        name: "国分寺線",
        id: "kokubunji",
        icon: "seibu/sk",
      },
      {
        name: "西武園線",
        id: "seibuen",
        icon: "seibu/sk",
      },
      {
        name: "多摩川線",
        id: "tamagawa",
        icon: "seibu/sw",
      },
      {
        name: "山口線（レオライナー）",
        id: "yamaguchi",
        icon: "seibu/sy",
      },
    ],
  },
  toei: {
    id: "toei",
    name: "都営地下鉄",
    railway: [
      {
        name: "浅草線",
        id: "asakusa",
        icon: "toei/a",
      },
      {
        name: "三田線",
        id: "mita",
        icon: "toei/i",
      },
      {
        name: "新宿線",
        id: "shinjuku",
        icon: "toei/s",
      },
      {
        name: "大江戸線",
        id: "ooedo",
        icon: "toei/e",
      },
    ],
  },
  nt: {
    id: "nt",
    name: "日暮里・舎人ライナー",
    railway: [
      {
        name: "日暮里・舎人ライナー",
        id: "nt",
        icon: "nt/nt",
      },
    ],
  },
  "tokyo-sakura": {
    id: "tokyo-sakura",
    name: "東京さくらトラム",
    railway: [
      {
        name: "東京さくらトラム",
        id: "tokyo-sakura",
        icon: "tokyo-sakura/sa",
      },
    ],
  },
  keio: {
    id: "keio",
    name: "京王電鉄",
    railway: [
      {
        name: "京王井の頭線",
        id: "inokashira",
        icon: "keio/in",
      },
      {
        name: "京王線",
        id: "line",
        icon: "keio/ko",
      },
      {
        name: "京王新線",
        id: "new",
        icon: "keio/ko",
      },
      {
        name: "京王相模原線",
        id: "sagamihara",
        icon: "keio/ko",
      },
      {
        name: "京王競馬場線",
        id: "keibajo",
        icon: "keio/ko",
      },
      {
        name: "京王動物園線",
        id: "doubutsuen",
        icon: "keio/ko",
      },
      {
        name: "京王高尾線",
        id: "takao",
        icon: "keio/ko",
      },
    ],
  },
  rinkai: {
    id: "rinkai",
    name: "りんかい線",
    railway: [
      {
        name: "りんかい線",
        id: "rinkai",
        icon: "rinkai/rinkai",
      },
    ],
  },
  "tokyo-monorail": {
    id: "tokyo-monorail",
    name: "東京モノレール",
    railway: [
      {
        name: "東京モノレール",
        id: "tokyo-monorail",
        icon: "tokyo-monorail/mo",
      },
    ],
  },
  yurikamome: {
    id: "yurikamome",
    name: "ゆりかもめ",
    railway: [
      {
        name: "ゆりかもめ",
        id: "yurikamome",
        icon: "yurikamome/u",
      },
    ],
  },
  "tama-monorail": {
    id: "tama-monorail",
    name: "多摩都市モノレール",
    railway: [
      {
        name: "多摩都市モノレール",
        id: "tama-monorail",
        icon: "tama-monorail/tt",
      },
    ],
  },
  ks: {
    id: "ks",
    name: "京成電鉄",
    railway: [
      {
        name: "成田スカイアクセス線",
        id: "narita-skyaccess",
        icon: "keisei/ks_narita",
      },
      {
        name: "新京成線",
        id: "shin-keisei",
        icon: "keisei/sl",
      },
      {
        name: "本線",
        id: "honsen",
        icon: "keisei/ks",
      },
      {
        name: "押上線",
        id: "oshiage",
        icon: "keisei/ks",
      },
      {
        name: "金町線",
        id: "kanamachi",
        icon: "keisei/ks",
      },
      {
        name: "千葉線",
        id: "chiba",
        icon: "keisei/ks",
      },
      {
        name: "千原線",
        id: "chihara",
        icon: "keisei/ks",
      },
      {
        name: "東成田線",
        id: "higashi-narita",
        icon: "keisei/ks",
      },
      {
        name: "芝山鉄道線",
        id: "shibayama",
        icon: "keisei/sr",
      },
    ],
  },
  cm: {
    id: "cm",
    name: "千葉都市モノレール",
    railway: [
      {
        name: "1号線",
        id: "line1",
        icon: "cm/cm_",
      },
      {
        name: "2号線",
        id: "line2",
        icon: "cm/cm_",
      },
    ],
  },
  tb: {
    id: "tb",
    name: "東武鉄道",
    railway: [
      {
        name: "アーバンパークライン",
        id: "noda",
        icon: "tobu/td",
      },
      {
        name: "東上線",
        id: "tojo",
        icon: "tobu/tj",
      },
    ],
  },
  hs: {
    id: "hs",
    name: "北総鉄道",
    railway: [
      {
        name: "北総線",
        id: "hs",
        icon: "hokso/hs",
      },
    ],
  },
  km: {
    id: "km",
    name: "小湊鉄道",
    railway: [
      {
        name: "小湊鉄道線",
        id: "km",
        icon: "kominato/kominato",
      },
    ],
  },
  "yu-kari": {
    id: "yu-kari",
    name: "ユーカリが丘線",
    railway: [
      {
        name: "ユーカリが丘線",
        id: "yu-kari",
        icon: "yu-kari/square",
      },
    ],
  },
  tr: {
    id: "tr",
    name: "東葉高速鉄道",
    railway: [
      {
        name: "東葉高速線",
        id: "tr",
        icon: "toyo/tr",
      },
    ],
  },
  is: {
    id: "is",
    name: "いすみ鉄道",
    railway: [
      {
        name: "いすみ線",
        id: "is",
        icon: "isumi/isumi",
      },
    ],
  },
  cd: {
    id: "cd",
    name: "銚子電気鉄道",
    railway: [
      {
        name: "銚子電気鉄道線",
        id: "cd",
        icon: "cd/cd",
      },
    ],
  },
  ryutetsu: {
    id: "ryutetsu",
    name: "流鉄流山線",
    railway: [
      {
        name: "流鉄流山線",
        id: "ryutetsu",
        icon: "ryutetsu/rn",
      },
    ],
  },
  tx: {
    id: "tx",
    name: "つくばエクスプレス",
    railway: [
      {
        name: "つくばエクスプレス",
        id: "tx",
        icon: "tx/tx",
      },
    ],
  },
  kantetsu: {
    id: "kantetsu",
    name: "関東鉄道",
    railway: [
      {
        name: "常総線",
        id: "joso",
        icon: "kantetsu/kantetsu",
      },
      {
        name: "竜ヶ崎線",
        id: "ryugasaki",
        icon: "kantetsu/kantetsu",
      },
    ],
  },
  "kashima-rinkai": {
    id: "kashima-rinkai",
    name: "鹿島臨海鉄道大洗鹿島線",
    railway: [
      {
        name: "大洗鹿島線",
        id: "kashima-rinkai",
        icon: "kashima-rinkai/oarai",
      },
    ],
  },
  hitachinaka: {
    id: "hitachinaka",
    name: "ひたちなか海浜鉄道湊線",
    railway: [
      {
        name: "ひたちなか海浜鉄道湊線",
        id: "hitachinaka",
        icon: "hitachinaka/hitachinaka",
      },
    ],
  },
};

const flattenKantoRailways = Object.values(kantoRailways).flatMap((railway) => {
  if (railway.railway.length === 1 && railway.id !== "tb") {
    return railway.railway.map((station) => ({
      id: station.id,
      name: station.name,
    }));
  } else {
    return railway.railway.map((station) => ({
      id: `${railway.id}-${station.id}`,
      name: `${railway.name}-${station.name}`,
    }));
  }
});

Object.keys(kantoRailways).forEach((key) => {
  const railway = kantoRailways[key];
  if (railway.railway.length !== 1 || railway.id === "tb") {
    const railwayElement = document.getElementById(key);
    let railwayElements = "";
    railwayElements += '<div class="ml-4 text-lg">';
    railway.railway.forEach((station) => {
      railwayElements += railwayTemplate(station, key);
    });
    railwayElements += "</div>";
    railwayElement.innerHTML += railwayElements;
  }
});
