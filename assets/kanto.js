const kantoRailways = {
  id: "kanto",
  name: "関東",
  railways: {
    "jr-east": {
      id: "jr-east",
      name: "JR東日本",
      icon: "assets/jr-east/jr.svg",
      railway: [
        {
          name: "山手線",
          id: "yamanote",
          icon: "assets/jr-east/jy.svg",
        },
        {
          name: "京浜東北・根岸線",
          id: "keihin-tohoku-negishi",
          icon: "assets/jr-east/jk.svg",
        },
        {
          name: "埼京線",
          id: "saikyo",
          icon: "assets/jr-east/ja.svg",
        },
        {
          name: "東海道線",
          id: "tokaido",
          icon: "assets/jr-east/jt.svg",
        },
        {
          name: "横須賀線",
          id: "yokosuka",
          icon: "assets/jr-east/jo.svg",
        },
        {
          name: "横浜線",
          id: "yokohama",
          icon: "assets/jr-east/jh.svg",
        },
        {
          name: "南武線",
          id: "nanbu",
          icon: "assets/jr-east/jn.svg",
        },
        {
          name: "中央線快速",
          id: "chuo-rapid",
          icon: "assets/jr-east/jc.svg",
        },
        {
          name: "五日市線",
          id: "itsukaichi",
          icon: "assets/jr-east/jc.svg",
        },
        {
          name: "青梅線",
          id: "oume",
          icon: "assets/jr-east/jc.svg",
        },
        {
          name: "中央・総武各駅停車",
          id: "soubu",
          icon: "assets/jr-east/jb.svg",
        },
        {
          name: "総武快速線",
          id: "soubu-rapid",
          icon: "assets/jr-east/jo.svg",
        },
        {
          name: "京葉線",
          id: "keiyo",
          icon: "assets/jr-east/je.svg",
        },
        {
          name: "武蔵野線",
          id: "musashino",
          icon: "assets/jr-east/jm.svg",
        },
        {
          name: "常磐線快速",
          id: "joban-rapid",
          icon: "assets/jr-east/jj.svg",
        },
        {
          name: "常磐線各駅停車",
          id: "joban-local",
          icon: "assets/jr-east/jl.svg",
        },
        {
          name: "鶴見線",
          id: "tsurumi",
          icon: "assets/jr-east/ji.svg",
        },
        {
          name: "鶴見線（大川支線）",
          id: "tsurumi-okawa",
          icon: "assets/jr-east/ji.svg",
        },
        {
          name: "鶴見線（海芝浦支線）",
          id: "tsurumi-umi-shibaura",
          icon: "assets/jr-east/ji.svg",
        },
        {
          name: "中央本線",
          id: "chuo-honsen",
          icon: "assets/jr-east/chuo-honsen.svg",
        },
        {
          name: "八高線",
          id: "hachiko",
          icon: "assets/jr-east/hachiko.svg",
        },
        {
          name: "川越線",
          id: "kawagoe",
          icon: "assets/jr-east/kawagoe.svg",
        },
        {
          name: "総武本線",
          id: "soubu-honsen",
          icon: "assets/jr-east/soubu-honsen.svg",
        },
        {
          name: "成田線",
          id: "narita",
          icon: "assets/jr-east/narita.svg",
        },
        {
          name: "成田線（空港支線）",
          id: "narita-kuko",
          icon: "assets/jr-east/narita.svg",
        },
        {
          name: "成田線（我孫子支線）",
          id: "narita-abiko",
          icon: "assets/jr-east/narita.svg",
        },
        {
          name: "内房線",
          id: "uchibo",
          icon: "assets/jr-east/uchibo.svg",
        },
        {
          name: "東金線",
          id: "togane",
          icon: "assets/jr-east/togane.svg",
        },
        {
          name: "外房線",
          id: "sotobo",
          icon: "assets/jr-east/sotobo.svg",
        },
        {
          name: "久留里線",
          id: "kururi",
          icon: "assets/jr-east/kururi.svg",
        },
        {
          name: "鹿島線",
          id: "kashima",
          icon: "assets/jr-east/kashima.svg",
        },
      ],
    },
    "tokyo-metro": {
      id: "tokyo-metro",
      name: "東京メトロ",
      icon: "assets/tokyo-metro/metro.svg",
      railway: [
        {
          name: "銀座線",
          id: "ginza",
          icon: "assets/tokyo-metro/g.svg",
        },
        {
          name: "丸ノ内線",
          id: "marunouchi",
          icon: "assets/tokyo-metro/m.svg",
        },
        {
          name: "丸ノ内分岐線",
          id: "marunouchi-bunki",
          icon: "assets/tokyo-metro/mb.svg",
        },
        {
          name: "日比谷線",
          id: "hibiya",
          icon: "assets/tokyo-metro/h.svg",
        },
        {
          name: "東西線",
          id: "tozai",
          icon: "assets/tokyo-metro/t.svg",
        },
        {
          name: "千代田線",
          id: "chiyoda",
          icon: "assets/tokyo-metro/c.svg",
        },
        {
          name: "有楽町線",
          id: "yurakucho",
          icon: "assets/tokyo-metro/y.svg",
        },
        {
          name: "半蔵門線",
          id: "hanzomon",
          icon: "assets/tokyo-metro/z.svg",
        },
        {
          name: "南北線",
          id: "namboku",
          icon: "assets/tokyo-metro/n.svg",
        },
        {
          name: "副都心線",
          id: "fukutoshin",
          icon: "assets/tokyo-metro/f.svg",
        },
      ],
    },
    seibu: {
      id: "seibu",
      name: "西武鉄道",
      icon: "assets/seibu/seibu.svg",
      railway: [
        {
          name: "池袋線",
          id: "ikebukuro",
          icon: "assets/seibu/si.svg",
        },
        {
          name: "西武秩父線",
          id: "chichibu",
          icon: "assets/seibu/si.svg",
        },
        {
          name: "西武有楽町線",
          id: "yurakucho",
          icon: "assets/seibu/si.svg",
        },
        {
          name: "豊島線",
          id: "toshima",
          icon: "assets/seibu/si.svg",
        },
        {
          name: "狭山線",
          id: "sayama",
          icon: "assets/seibu/si.svg",
        },
        {
          name: "新宿線",
          id: "shinjuku",
          icon: "assets/seibu/ss.svg",
        },
        {
          name: "拝島線",
          id: "haijima",
          icon: "assets/seibu/ss.svg",
        },
        {
          name: "多摩湖線",
          id: "tamako",
          icon: "assets/seibu/st.svg",
        },
        {
          name: "国分寺線",
          id: "kokubunji",
          icon: "assets/seibu/sk.svg",
        },
        {
          name: "西武園線",
          id: "seibuen",
          icon: "assets/seibu/sk.svg",
        },
        {
          name: "多摩川線",
          id: "tamagawa",
          icon: "assets/seibu/sw.svg",
        },
        {
          name: "山口線（レオライナー）",
          id: "yamaguchi",
          icon: "assets/seibu/sy.svg",
        },
      ],
    },
    tb: {
      id: "tb",
      name: "東武鉄道",
      icon: "assets/tobu/tobu.png",
      railway: [
        {
          name: "アーバンパークライン",
          id: "noda",
          icon: "assets/tobu/td.svg",
        },
        {
          name: "東上線",
          id: "tojo",
          icon: "assets/tobu/tj.svg",
        },
      ],
    },
    ks: {
      id: "ks",
      name: "京成電鉄",
      icon: "assets/keisei/ks.svg",
      railway: [
        {
          name: "成田スカイアクセス線",
          id: "narita-skyaccess",
          icon: "assets/keisei/ks_narita.svg",
        },
        {
          name: "新京成線",
          id: "shin-keisei",
          icon: "assets/keisei/sl.svg",
        },
        {
          name: "本線",
          id: "honsen",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "押上線",
          id: "oshiage",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "金町線",
          id: "kanamachi",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "千葉線",
          id: "chiba",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "千原線",
          id: "chihara",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "東成田線",
          id: "higashi-narita",
          icon: "assets/keisei/ks.svg",
        },
        {
          name: "芝山鉄道線",
          id: "shibayama",
          icon: "assets/keisei/sr.svg",
        },
      ],
    },
    tx: {
      id: "tx",
      name: "つくばエクスプレス",
      icon: "assets/tx/tx.svg",
      railway: [
        {
          name: "つくばエクスプレス",
          id: "tx",
          icon: "assets/tx/tx.svg",
        },
      ],
    },
  },
};

const tokyoRailways = {
  id: "tokyo",
  name: "東京都",
  railways: {
    toei: {
      id: "toei",
      name: "都営地下鉄",
      icon: "assets/toei/toei.svg",
      railway: [
        {
          name: "浅草線",
          id: "asakusa",
          icon: "assets/toei/a.svg",
        },
        {
          name: "三田線",
          id: "mita",
          icon: "assets/toei/i.svg",
        },
        {
          name: "新宿線",
          id: "shinjuku",
          icon: "assets/toei/s.svg",
        },
        {
          name: "大江戸線",
          id: "ooedo",
          icon: "assets/toei/e.svg",
        },
      ],
    },
    nt: {
      id: "nt",
      name: "日暮里・舎人ライナー",
      icon: "assets/toei/nt.svg",
      railway: [
        {
          name: "日暮里・舎人ライナー",
          id: "nt",
          icon: "assets/toei/nt.svg",
        },
      ],
    },
    "tokyo-sakura": {
      id: "tokyo-sakura",
      name: "東京さくらトラム",
      icon: "assets/toei/sa.svg",
      railway: [
        {
          name: "東京さくらトラム",
          id: "tokyo-sakura",
          icon: "assets/toei/sa.svg",
        },
      ],
    },
    keio: {
      id: "keio",
      name: "京王電鉄",
      icon: "assets/keio/ko.svg",
      railway: [
        {
          name: "京王井の頭線",
          id: "inokashira",
          icon: "assets/keio/in.svg",
        },
        {
          name: "京王線",
          id: "line",
          icon: "assets/keio/ko.svg",
        },
        {
          name: "京王新線",
          id: "new",
          icon: "assets/keio/ko.svg",
        },
        {
          name: "京王相模原線",
          id: "sagamihara",
          icon: "assets/keio/ko.svg",
        },
        {
          name: "京王競馬場線",
          id: "keibajo",
          icon: "assets/keio/ko.svg",
        },
        {
          name: "京王動物園線",
          id: "doubutsuen",
          icon: "assets/keio/ko.svg",
        },
        {
          name: "京王高尾線",
          id: "takao",
          icon: "assets/keio/ko.svg",
        },
      ],
    },
    rinkai: {
      id: "rinkai",
      name: "りんかい線",
      icon: "assets/rinkai/r.svg",
      railway: [
        {
          name: "りんかい線",
          id: "rinkai",
          icon: "assets/rinkai/r.svg",
        },
      ],
    },
    "tokyo-monorail": {
      id: "tokyo-monorail",
      name: "東京モノレール",
      icon: "assets/tokyo-monorail/mo.svg",
      railway: [
        {
          name: "東京モノレール",
          id: "tokyo-monorail",
          icon: "assets/tokyo-monorail/mo.svg",
        },
      ],
    },
    yurikamome: {
      id: "yurikamome",
      name: "ゆりかもめ",
      icon: "assets/yurikamome/u.svg",
      railway: [
        {
          name: "ゆりかもめ",
          id: "yurikamome",
          icon: "assets/yurikamome/u.svg",
        },
      ],
    },
    "tama-monorail": {
      id: "tama-monorail",
      name: "多摩都市モノレール",
      icon: "assets/tama-monorail/tt.svg",
      railway: [
        {
          name: "多摩都市モノレール",
          id: "tama-monorail",
          icon: "assets/tama-monorail/tt.svg",
        },
      ],
    },
  },
};

const chibaRailways = {
  id: "chiba",
  name: "千葉県",
  railways: {
    cm: {
      id: "cm",
      name: "千葉都市モノレール",
      icon: "assets/cm/cm.svg",
      railway: [
        {
          name: "1号線",
          id: "line1",
          icon: "assets/cm/cm_.svg",
        },
        {
          name: "2号線",
          id: "line2",
          icon: "assets/cm/cm_.svg",
        },
      ],
    },
    hs: {
      id: "hs",
      name: "北総鉄道",
      icon: "assets/hokso/hs.svg",
      railway: [
        {
          name: "北総線",
          id: "hs",
          icon: "assets/hokso/hs.svg",
        },
      ],
    },
    km: {
      id: "km",
      name: "小湊鉄道",
      icon: "assets/kominato/kominato.svg",
      railway: [
        {
          name: "小湊鉄道線",
          id: "km",
          icon: "assets/kominato/kominato.svg",
        },
      ],
    },
    "yu-kari": {
      id: "yu-kari",
      name: "ユーカリが丘線",
      icon: "assets/yu-kari/square.svg",
      railway: [
        {
          name: "ユーカリが丘線",
          id: "yu-kari",
          icon: "assets/yu-kari/square.svg",
        },
      ],
    },
    tr: {
      id: "tr",
      name: "東葉高速鉄道",
      icon: "assets/toyo/tr.svg",
      railway: [
        {
          name: "東葉高速線",
          id: "tr",
          icon: "assets/toyo/tr.svg",
        },
      ],
    },
    is: {
      id: "is",
      name: "いすみ鉄道",
      icon: "assets/isumi/isumi.svg",
      railway: [
        {
          name: "いすみ線",
          id: "is",
          icon: "assets/isumi/isumi.svg",
        },
      ],
    },
    cd: {
      id: "cd",
      name: "銚子電気鉄道",
      icon: "assets/choshi/cd.svg",
      railway: [
        {
          name: "銚子電気鉄道線",
          id: "cd",
          icon: "assets/choshi/cd.svg",
        },
      ],
    },
    ryutetsu: {
      id: "ryutetsu",
      name: "流鉄流山線",
      icon: "assets/ryutetsu/rn.png",
      railway: [
        {
          name: "流鉄流山線",
          id: "ryutetsu",
          icon: "assets/ryutetsu/rn.png",
        },
      ],
    },
  },
};

const saitamaRailways = {
  id: "saitama",
  name: "埼玉県",
  railways: {
    sr: {
      id: "sr",
      name: "埼玉高速鉄道線",
      icon: "assets/sr/sr.svg",
      railway: [
        {
          name: "埼玉高速鉄道線",
          id: "sr",
          icon: "assets/sr/sr.svg",
        },
      ],
    },
    ns: {
      id: "ns",
      name: "ニューシャトル",
      icon: "assets/ns/ns.svg",
      railway: [
        {
          name: "ニューシャトル",
          id: "ns",
          icon: "assets/ns/ns.svg",
        },
      ],
    },
  },
};

const ibarakiRailways = {
  id: "ibaraki",
  name: "茨城県",
  railways: {
    kantetsu: {
      id: "kantetsu",
      name: "関東鉄道",
      icon: "assets/kantetsu/kantetsu.svg",
      railway: [
        {
          name: "常総線",
          id: "joso",
          icon: "assets/kantetsu/kantetsu.svg",
        },
        {
          name: "竜ヶ崎線",
          id: "ryugasaki",
          icon: "assets/kantetsu/kantetsu.svg",
        },
      ],
    },
    "kashima-rinkai": {
      id: "kashima-rinkai",
      name: "鹿島臨海鉄道大洗鹿島線",
      icon: "assets/kashima-rinkai/oarai.svg",
      railway: [
        {
          name: "大洗鹿島線",
          id: "kashima-rinkai",
          icon: "assets/kashima-rinkai/oarai.svg",
        },
      ],
    },
    hitachinaka: {
      id: "hitachinaka",
      name: "ひたちなか海浜鉄道湊線",
      icon: "assets/hitachinaka/hitachinaka.svg",
      railway: [
        {
          name: "ひたちなか海浜鉄道湊線",
          id: "hitachinaka",
          icon: "assets/hitachinaka/hitachinaka.svg",
        },
      ],
    },
  },
};

const kantoRailwaysList = [
  kantoRailways,
  tokyoRailways,
  chibaRailways,
  saitamaRailways,
  ibarakiRailways,
];

/*
return railway list
{
  id: string,
  name: string
}[]
*/
const flattenKantoRailways = kantoRailwaysList.reduce((acc, prefecture) => {
  const railwayList = Object.keys(prefecture.railways).map((key) => {
    const railway = prefecture.railways[key];
    return {
      id: railway.id,
      name: railway.name,
    };
  });
  return [...Array.from(acc), ...railwayList];
}, []);

for (const prefecture of kantoRailwaysList) {
  if (prefecture.id === "kanto") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "kanto");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway);
  });
  setToggle(prefecture.id);
}

document.getElementById("stations").innerHTML += submitButton;
