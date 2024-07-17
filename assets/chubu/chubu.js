const chubuRailways = {
  id: "chubu",
  name: "中部",
  railways: {
    "jr-central": {
      id: "jr-central",
      name: "JR東海",
      icon: "assets/chubu/jr-central/jr.svg",
      railway: [
        {
          name: "東海道本線",
          id: "tokaido",
          icon: "assets/chubu/jr-central/ca.svg",
        },
        {
          name: "東海道本線（赤坂支線）",
          id: "tokaido-akasaka",
          icon: "assets/chubu/jr-central/ca.svg",
        },
        {
          name: "御殿場線",
          id: "gotemba",
          icon: "assets/chubu/jr-central/cb.svg",
        },
        {
          name: "身延線",
          id: "minobu",
          icon: "assets/chubu/jr-central/cc.svg",
        },
        {
          name: "飯田線",
          id: "iida",
          icon: "assets/chubu/jr-central/cd.svg",
        },
        {
          name: "武豊線",
          id: "taketoyo",
          icon: "assets/chubu/jr-central/ce.svg",
        },
        {
          name: "中央本線",
          id: "chuo",
          icon: "assets/chubu/jr-central/cf.svg",
        },
        {
          name: "高山本線",
          id: "takayama",
          icon: "assets/chubu/jr-central/cg.svg",
        },
        {
          name: "太多線",
          id: "taita",
          icon: "assets/chubu/jr-central/ci.svg",
        },
      ],
    },
    "jr-west": {
      id: "jr-west",
      name: "JR西日本",
      icon: "assets/chubu/jr-west/jr.svg",
      railway: [
        {
          name: "小浜線",
          id: "obama",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "越美北線",
          id: "etsumi-north",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "七尾線",
          id: "nanao",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "城端線",
          id: "johana",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "氷見線",
          id: "himi",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "高山本線",
          id: "takayama",
          icon: "assets/chubu/jr-west/west.svg",
        },
        {
          name: "大糸線",
          id: "oito",
          icon: "assets/chubu/jr-west/west.svg",
        },
      ],
    },
    "jr-east": {
      id: "jr-east",
      name: "JR東日本",
      icon: "assets/chubu/jr-east/jr.svg",
      railway: [
        {
          name: "篠ノ井線",
          id: "shinonoi",
          icon: "assets/chubu/jr-east/shinonoi.svg",
        },
        {
          name: "信越本線（篠ノ井〜長野）",
          id: "shinetsu-sn",
          icon: "assets/chubu/jr-east/shinetsu.svg",
        },
        {
          name: "信越本線（直江津〜新潟）",
          id: "shinetsu-nn",
          icon: "assets/chubu/jr-east/shinetsu.svg",
        },
        {
          name: "白新線",
          id: "hakushin",
          icon: "assets/chubu/jr-east/hakushin.svg",
        },
        {
          name: "越後線",
          id: "echigo",
          icon: "assets/chubu/jr-east/echigo.svg",
        },
        {
          name: "弥彦線",
          id: "yahiko",
          icon: "assets/chubu/jr-east/yahiko.svg",
        },
        {
          name: "飯山線",
          id: "iiyama",
          icon: "assets/chubu/jr-east/iiyama.svg",
        },
        {
          name: "上越線",
          id: "joetsu",
          icon: "assets/chubu/jr-east/joetsu.svg",
        },
        {
          name: "小海線",
          id: "koumi",
          icon: "assets/chubu/jr-east/koumi.svg",
        },
        {
          name: "大糸線",
          id: "oito",
          icon: "assets/chubu/jr-east/oito.svg",
        },
      ],
    },
    meitetsu: {
      id: "meitetsu",
      name: "名古屋鉄道",
      icon: "assets/chubu/meitetsu/meitetsu.svg",
      railway: [
        {
          name: "名古屋本線",
          id: "nagoya",
          icon: "assets/chubu/meitetsu/nh.svg",
        },
        {
          name: "豊川線",
          id: "toyokawa",
          icon: "assets/chubu/meitetsu/tk.svg",
        },
        {
          name: "西尾線",
          id: "nishio",
          icon: "assets/chubu/meitetsu/gn.svg",
        },
        {
          name: "蒲郡線",
          id: "gamagori",
          icon: "assets/chubu/meitetsu/gn.svg",
        },
        {
          name: "三河線（海線）",
          id: "mikawa-umi",
          icon: "assets/chubu/meitetsu/mu.svg",
        },
        {
          name: "三河線（山線）",
          id: "mikawa-yama",
          icon: "assets/chubu/meitetsu/my.svg",
        },
        {
          name: "豊田線",
          id: "toyota",
          icon: "assets/chubu/meitetsu/tt.svg",
        },
        {
          name: "常滑線",
          id: "tokoname",
          icon: "assets/chubu/meitetsu/ta.svg",
        },
        {
          name: "空港線",
          id: "airport",
          icon: "assets/chubu/meitetsu/ta.svg",
        },
        {
          name: "築港線",
          id: "chikkou",
          icon: "assets/chubu/meitetsu/ch.svg",
        },
        {
          name: "河和線",
          id: "kowa",
          icon: "assets/chubu/meitetsu/kc.svg",
        },
        {
          name: "知多新線",
          id: "chita-new",
          icon: "assets/chubu/meitetsu/kc.svg",
        },
        {
          name: "瀬戸線",
          id: "seto",
          icon: "assets/chubu/meitetsu/st.svg",
        },
        {
          name: "津島線",
          id: "tsushima",
          icon: "assets/chubu/meitetsu/tb.svg",
        },
        {
          name: "尾西線",
          id: "bisai",
          icon: "assets/chubu/meitetsu/bs.svg",
        },
        {
          name: "犬山線",
          id: "inuyama",
          icon: "assets/chubu/meitetsu/iy.svg",
        },
        {
          name: "各務原線",
          id: "kakamigahara",
          icon: "assets/chubu/meitetsu/kg.svg",
        },
        {
          name: "広見線",
          id: "hiromi",
          icon: "assets/chubu/meitetsu/hm.svg",
        },
        {
          name: "小牧線",
          id: "komaki",
          icon: "assets/chubu/meitetsu/km.svg",
        },
        {
          name: "竹鼻線",
          id: "takehana",
          icon: "assets/chubu/meitetsu/th.svg",
        },
        {
          name: "羽島線",
          id: "hashima",
          icon: "assets/chubu/meitetsu/th.svg",
        },
      ],
    },
  },
};

const niigataRailways = {
  id: "niigata",
  name: "新潟",
  railways: {
    tokimeki: {
      id: "tokimeki",
      name: "えちごトキめき鉄道",
      icon: "assets/chubu/echigo-tokimeki/tokimeki.svg",
      railway: [
        {
          name: "日本海ひすいライン",
          id: "nihonkai",
          icon: "assets/chubu/echigo-tokimeki/tokimeki.svg",
        },
        {
          name: "妙高はねうまライン",
          id: "myoko",
          icon: "assets/chubu/echigo-tokimeki/tokimeki.svg",
        },
      ],
    },
    hokuhoku: {
      id: "hokuhoku",
      name: "北越急行ほくほく線",
      icon: "assets/chubu/hokuhoku/hokuhoku.svg",
      railway: [
        {
          name: "北越急行ほくほく線",
          id: "hokuhoku",
          icon: "assets/chubu/hokuhoku/hokuhoku.svg",
        },
      ],
    },
  },
};

const toyamaRailways = {
  id: "toyama",
  name: "富山",
  railways: {
    ainokaze: {
      id: "ainokaze",
      name: "あいの風とやま鉄道線",
      icon: "assets/chubu/ainokaze/ainokaze.svg",
      railway: [
        {
          name: "あいの風とやま鉄道線",
          id: "ainokaze",
          icon: "assets/chubu/ainokaze/ainokaze.svg",
        },
      ],
    },
    chitetsu: {
      id: "chitetsu",
      name: "富山地方鉄道",
      icon: "assets/chubu/chitetsu/chitetsu.svg",
      railway: [
        {
          name: "本線",
          id: "honsen",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
        {
          name: "富山軌道線",
          id: "toyama-kido",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
        {
          name: "立山線",
          id: "tateyama",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
        {
          name: "不二越線",
          id: "fujikoshi",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
        {
          name: "上滝線",
          id: "kamidaki",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
        {
          name: "富山港線",
          id: "toyamako",
          icon: "assets/chubu/chitetsu/chitetsu.svg",
        },
      ],
    },
    manyo: {
      id: "manyo",
      name: "万葉線",
      icon: "assets/chubu/manyo/manyo.jpg",
      railway: [
        {
          name: "万葉線",
          id: "manyo",
          icon: "assets/chubu/manyo/manyo.jpg",
        },
      ],
    },
  },
};

const ishikawaRailways = {
  id: "ishikawa",
  name: "石川",
  railways: {
    "ir-ishikawa": {
      id: "ir-ishikawa",
      name: "IRいしかわ鉄道線",
      icon: "assets/chubu/ir-ishikawa/ir.svg",
      railway: [
        {
          name: "IRいしかわ鉄道線",
          id: "ir-ishikawa",
          icon: "assets/chubu/ir-ishikawa/ir.svg",
        },
      ],
    },
    nototetsu: {
      id: "nototetsu",
      name: "能登鉄道七尾線",
      icon: "assets/chubu/nototetsu/noto.svg",
      railway: [
        {
          name: "能登鉄道七尾線",
          id: "nototetsu",
          icon: "assets/chubu/nototetsu/noto.svg",
        },
      ],
    },
    hokuriku: {
      id: "hokuriku",
      name: "北陸鉄道",
      icon: "assets/chubu/hokuriku/hokuriku.svg",
      railway: [
        {
          name: "石川線",
          id: "ishikawa",
          icon: "assets/chubu/hokuriku/hokuriku.svg",
        },
        {
          name: "浅野川線",
          id: "asanogawa",
          icon: "assets/chubu/hokuriku/hokuriku.svg",
        },
      ],
    },
  },
};

const fukuiRailways = {
  id: "fukui",
  name: "福井",
  railways: {
    hapiline: {
      id: "hapiline",
      name: "ハピラインふくい線",
      icon: "assets/chubu/hapiline/hapiline.svg",
      railway: [
        {
          name: "ハピラインふくい線",
          id: "hapiline",
          icon: "assets/chubu/hapiline/hapiline.svg",
        },
      ],
    },
    echizen: {
      id: "echizen",
      name: "えちぜん鉄道",
      icon: "assets/chubu/echizen/echizen.svg",
      railway: [
        {
          name: "勝山永平寺線",
          id: "katsuyama",
          icon: "assets/chubu/echizen/echizen.svg",
        },
        {
          name: "三国芦原線",
          id: "awara",
          icon: "assets/chubu/echizen/echizen.svg",
        },
      ],
    },
    fukui: {
      id: "fukui",
      name: "福井鉄道福武線",
      icon: "assets/chubu/fukui/fukui.svg",
      railway: [
        {
          name: "福井鉄道福武線",
          id: "fukubu",
          icon: "assets/chubu/fukui/fukui.svg",
        },
      ],
    },
  },
};

const yamanashiRailways = {
  id: "yamanashi",
  name: "山梨",
  railways: {
    fujikyuko: {
      id: "fujikyuko",
      name: "富士急行線",
      icon: "assets/chubu/fujikyuko/fujikyuko.svg",
      railway: [
        {
          name: "富士急行線",
          id: "fujikyuko",
          icon: "assets/chubu/fujikyuko/fujikyuko.svg",
        },
      ],
    },
  },
};

const naganoRailways = {
  id: "nagano",
  name: "長野",
  railways: {
    alpico: {
      id: "alpico",
      name: "アルピコ交通上高地線",
      icon: "assets/chubu/alpico/alpico.svg",
      railway: [
        {
          name: "アルピコ交通上高地線",
          id: "alpico",
          icon: "assets/chubu/alpico/alpico.svg",
        },
      ],
    },
    shinano: {
      id: "shinano",
      name: "しなの鉄道",
      icon: "assets/chubu/shinano/shinano.svg",
      railway: [
        {
          name: "しなの鉄道線",
          id: "shinano",
          icon: "assets/chubu/shinano/shinano.svg",
        },
        {
          name: "北しなの線",
          id: "kita-shinano",
          icon: "assets/chubu/shinano/shinano.svg",
        },
      ],
    },
    ueda: {
      id: "ueda",
      name: "上田電鉄別所線",
      icon: "assets/chubu/ueda/ueda.svg",
      railway: [
        {
          name: "上田電鉄別所線",
          id: "ueda",
          icon: "assets/chubu/ueda/ueda.svg",
        },
      ],
    },
    nagaden: {
      id: "nagaden",
      name: "長野電鉄長野線",
      icon: "assets/chubu/nagaden/n.png",
      railway: [
        {
          name: "長野線",
          id: "nagaden",
          icon: "assets/chubu/nagaden/n.png",
        },
      ],
    },
  },
};

const gifuRailways = {
  id: "gifu",
  name: "岐阜",
  railways: {
    aketetsu: {
      id: "aketetsu",
      name: "明知鉄道線",
      icon: "assets/chubu/aketetsu/aketetsu.svg",
      railway: [
        {
          name: "明知鉄道線",
          id: "aketetsu",
          icon: "assets/chubu/aketetsu/aketetsu.svg",
        },
      ],
    },
    yoro: {
      id: "yoro",
      name: "養老鉄道養老線",
      icon: "assets/chubu/yoro/yoro.svg",
      railway: [
        {
          name: "養老鉄道養老線",
          id: "yoro",
          icon: "assets/chubu/yoro/yoro.svg",
        },
      ],
    },
    tarutetsu: {
      id: "tarutetsu",
      name: "樽見鉄道樽見線",
      icon: "assets/chubu/tarutetsu/tarutetsu.svg",
      railway: [
        {
          name: "樽見鉄道樽見線",
          id: "tarutetsu",
          icon: "assets/chubu/tarutetsu/tarutetsu.svg",
        },
      ],
    },
    nagatetsu: {
      id: "nagatetsu",
      name: "長良川鉄道越美南線",
      icon: "assets/chubu/nagatetsu/nagatetsu.svg",
      railway: [
        {
          name: "長良川鉄道越美南線",
          id: "nagatetsu",
          icon: "assets/chubu/nagatetsu/nagatetsu.svg",
        },
      ],
    },
  },
};

const shizuokaRailways = {
  id: "shizuoka",
  name: "静岡",
  railways: {
    shizutetsu: {
      id: "shizutetsu",
      name: "静岡鉄道静岡清水線",
      icon: "assets/chubu/shizutetsu/shizutetsu.svg",
      railway: [
        {
          name: "静岡鉄道静岡清水線",
          id: "shizutetsu",
          icon: "assets/chubu/shizutetsu/shizutetsu.svg",
        },
      ],
    },
    enshu: {
      id: "enshu",
      name: "遠州鉄道鉄道線",
      icon: "assets/chubu/enshu/enshu.svg",
      railway: [
        {
          name: "遠州鉄道線",
          id: "enshu",
          icon: "assets/chubu/enshu/enshu.svg",
        },
      ],
    },
    gakunan: {
      id: "gakunan",
      name: "岳南電車岳南鉄道線",
      icon: "assets/chubu/gakunan/gakunan.svg",
      railway: [
        {
          name: "岳南電車岳南鉄道線",
          id: "gakunan",
          icon: "assets/chubu/gakunan/gakunan.svg",
        },
      ],
    },
    "izu-hakone": {
      id: "izu-hakone",
      name: "伊豆箱根鉄道駿豆線",
      icon: "assets/chubu/izu-hakone/is.svg",
      railway: [
        {
          name: "伊豆箱根鉄道駿豆線",
          id: "izu-hakone",
          icon: "assets/chubu/izu-hakone/is.svg",
        },
      ],
    },
    izukyu: {
      id: "izukyu",
      name: "伊豆急行線",
      icon: "assets/chubu/izukyu/izukyu.svg",
      railway: [
        {
          name: "伊豆急行線",
          id: "izukyu",
          icon: "assets/chubu/izukyu/izukyu.svg",
        },
      ],
    },
    tenhama: {
      id: "tenhama",
      name: "天竜浜名湖線",
      icon: "assets/chubu/tenhama/tenhama.svg",
      railway: [
        {
          name: "天竜浜名湖線",
          id: "tenhama",
          icon: "assets/chubu/tenhama/tenhama.svg",
        },
      ],
    },
    oigawa: {
      id: "oigawa",
      name: "大井川鐵道",
      icon: "assets/chubu/oigawa/oigawa.svg",
      railway: [
        {
          name: "大井川本線",
          id: "oigawa",
          icon: "assets/chubu/oigawa/oigawa.svg",
        },
        {
          name: "井川線",
          id: "ikawa",
          icon: "assets/chubu/oigawa/oigawa.svg",
        },
      ],
    },
  },
};

const aichiRailways = {
  id: "aichi",
  name: "愛知",
  railways: {
    "nagoya-metro": {
      id: "nagoya-metro",
      name: "名古屋市交通局",
      icon: "assets/chubu/nagoya-metro/metro.svg",
      railway: [
        {
          name: "東山線",
          id: "higashiyama",
          icon: "assets/chubu/nagoya-metro/h.svg",
        },
        {
          name: "名城線",
          id: "meijo",
          icon: "assets/chubu/nagoya-metro/m.svg",
        },
        {
          name: "名港線",
          id: "meiko",
          icon: "assets/chubu/nagoya-metro/e.svg",
        },
        {
          name: "鶴舞線",
          id: "tsurumai",
          icon: "assets/chubu/nagoya-metro/t.svg",
        },
        {
          name: "桜通線",
          id: "sakuradori",
          icon: "assets/chubu/nagoya-metro/s.svg",
        },
        {
          name: "上飯田線",
          id: "kamiiida",
          icon: "assets/chubu/nagoya-metro/k.svg",
        },
      ],
    },
    "aichi-kanjo": {
      id: "aichi-kanjo",
      name: "愛知環状鉄道線",
      icon: "assets/chubu/aichi-kanjo/aichi-kanjo.svg",
      railway: [
        {
          name: "愛知環状鉄道線",
          id: "aichi-kanjo",
          icon: "assets/chubu/aichi-kanjo/aichi-kanjo.svg",
        },
      ],
    },
    "nagoya-rinkai": {
      id: "nagoya-rinkai",
      name: "あおなみ線",
      icon: "assets/chubu/nagoya-rinkai/aonami.svg",
      railway: [
        {
          name: "あおなみ線",
          id: "aonami",
          icon: "assets/chubu/nagoya-rinkai/aonami.svg",
        },
      ],
    },
    tkj: {
      id: "tkj",
      name: "東海交通事業城北線",
      icon: "assets/chubu/tkj/tkj.svg",
      railway: [
        {
          name: "東海交通事業城北線",
          id: "tkj",
          icon: "assets/chubu/tkj/tkj.svg",
        },
      ],
    },
    linimo: {
      id: "linimo",
      name: "愛知高速交通東部丘陵線",
      icon: "assets/chubu/linimo/linimo.svg",
      railway: [
        {
          name: "愛知高速交通東部丘陵線",
          id: "linimo",
          icon: "assets/chubu/linimo/linimo.svg",
        },
      ],
    },
    toyotetsu: {
      id: "toyotetsu",
      name: "豊橋鉄道",
      icon: "assets/chubu/toyotetsu/toyotetsu.svg",
      railway: [
        {
          name: "渥美線",
          id: "atsumi",
          icon: "assets/chubu/toyotetsu/toyotetsu.svg",
        },
        {
          name: "東田本線",
          id: "azumada",
          icon: "assets/chubu/toyotetsu/toyotetsu.svg",
        },
      ],
    },
  },
};

const chubuRailwaysList = [
  chubuRailways,
  niigataRailways,
  toyamaRailways,
  ishikawaRailways,
  fukuiRailways,
  yamanashiRailways,
  naganoRailways,
  gifuRailways,
  shizuokaRailways,
  aichiRailways,
];

for (const prefecture of chubuRailwaysList) {
  if (prefecture.id === "chubu") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "chubu");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
