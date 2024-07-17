const kantoRailways = {
  id: "kanto",
  name: "関東",
  railways: {
    "jr-east": {
      id: "jr-east",
      name: "JR東日本",
      icon: "assets/kanto/jr-east/jr.svg",
      railway: [
        {
          name: "山手線",
          id: "yamanote",
          icon: "assets/kanto/jr-east/jy.svg",
        },
        {
          name: "京浜東北・根岸線",
          id: "keihin-tohoku-negishi",
          icon: "assets/kanto/jr-east/jk.svg",
        },
        {
          name: "埼京線",
          id: "saikyo",
          icon: "assets/kanto/jr-east/ja.svg",
        },
        {
          name: "東海道線",
          id: "tokaido",
          icon: "assets/kanto/jr-east/jt.svg",
        },
        {
          name: "伊東線",
          id: "ito",
          icon: "assets/kanto/jr-east/jt.svg",
        },
        {
          name: "横須賀線",
          id: "yokosuka",
          icon: "assets/kanto/jr-east/jo.svg",
        },
        {
          name: "横浜線",
          id: "yokohama",
          icon: "assets/kanto/jr-east/jh.svg",
        },
        {
          name: "南武線",
          id: "nanbu",
          icon: "assets/kanto/jr-east/jn.svg",
        },
        {
          name: "南武支線",
          id: "nanbu-hamakawasaki",
          icon: "assets/kanto/jr-east/jn.svg",
        },
        {
          name: "中央線快速",
          id: "chuo-rapid",
          icon: "assets/kanto/jr-east/jc.svg",
        },
        {
          name: "五日市線",
          id: "itsukaichi",
          icon: "assets/kanto/jr-east/jc.svg",
        },
        {
          name: "青梅線",
          id: "oume",
          icon: "assets/kanto/jr-east/jc.svg",
        },
        {
          name: "中央・総武各駅停車",
          id: "soubu",
          icon: "assets/kanto/jr-east/jb.svg",
        },
        {
          name: "総武快速線",
          id: "soubu-rapid",
          icon: "assets/kanto/jr-east/jo.svg",
        },
        {
          name: "京葉線",
          id: "keiyo",
          icon: "assets/kanto/jr-east/je.svg",
        },
        {
          name: "武蔵野線",
          id: "musashino",
          icon: "assets/kanto/jr-east/jm.svg",
        },
        {
          name: "常磐線快速",
          id: "joban-rapid",
          icon: "assets/kanto/jr-east/jj.svg",
        },
        {
          name: "常磐線各駅停車",
          id: "joban-local",
          icon: "assets/kanto/jr-east/jl.svg",
        },
        {
          name: "鶴見線",
          id: "tsurumi",
          icon: "assets/kanto/jr-east/ji.svg",
        },
        {
          name: "鶴見線（大川支線）",
          id: "tsurumi-okawa",
          icon: "assets/kanto/jr-east/ji.svg",
        },
        {
          name: "鶴見線（海芝浦支線）",
          id: "tsurumi-umi-shibaura",
          icon: "assets/kanto/jr-east/ji.svg",
        },
        {
          name: "中央本線",
          id: "chuo-honsen",
          icon: "assets/kanto/jr-east/co.svg",
        },
        {
          name: "中央本線（辰野支線）",
          id: "chuo-tatsuno",
          icon: "assets/kanto/jr-east/co.svg",
        },
        {
          name: "常磐線",
          id: "joban",
          icon: "assets/kanto/jr-east/joban.svg",
        },
        {
          name: "八高線",
          id: "hachiko",
          icon: "assets/kanto/jr-east/hachiko.svg",
        },
        {
          name: "川越線",
          id: "kawagoe",
          icon: "assets/kanto/jr-east/kawagoe.svg",
        },
        {
          name: "相模線",
          id: "sagami",
          icon: "assets/kanto/jr-east/sagami.svg",
        },
        {
          name: "水戸線",
          id: "mito",
          icon: "assets/kanto/jr-east/mito.svg",
        },
        {
          name: "総武本線",
          id: "soubu-honsen",
          icon: "assets/kanto/jr-east/soubu-honsen.svg",
        },
        {
          name: "成田線",
          id: "narita",
          icon: "assets/kanto/jr-east/narita.svg",
        },
        {
          name: "成田線（空港支線）",
          id: "narita-kuko",
          icon: "assets/kanto/jr-east/narita.svg",
        },
        {
          name: "成田線（我孫子支線）",
          id: "narita-abiko",
          icon: "assets/kanto/jr-east/narita.svg",
        },
        {
          name: "内房線",
          id: "uchibo",
          icon: "assets/kanto/jr-east/uchibo.svg",
        },
        {
          name: "東金線",
          id: "togane",
          icon: "assets/kanto/jr-east/togane.svg",
        },
        {
          name: "外房線",
          id: "sotobo",
          icon: "assets/kanto/jr-east/sotobo.svg",
        },
        {
          name: "久留里線",
          id: "kururi",
          icon: "assets/kanto/jr-east/kururi.svg",
        },
        {
          name: "鹿島線",
          id: "kashima",
          icon: "assets/kanto/jr-east/kashima.svg",
        },
      ],
    },
    "tokyo-metro": {
      id: "tokyo-metro",
      name: "東京メトロ",
      icon: "assets/kanto/tokyo-metro/metro.svg",
      railway: [
        {
          name: "銀座線",
          id: "ginza",
          icon: "assets/kanto/tokyo-metro/g.svg",
        },
        {
          name: "丸ノ内線",
          id: "marunouchi",
          icon: "assets/kanto/tokyo-metro/m.svg",
        },
        {
          name: "丸ノ内分岐線",
          id: "marunouchi-bunki",
          icon: "assets/kanto/tokyo-metro/mb.svg",
        },
        {
          name: "日比谷線",
          id: "hibiya",
          icon: "assets/kanto/tokyo-metro/h.svg",
        },
        {
          name: "東西線",
          id: "tozai",
          icon: "assets/kanto/tokyo-metro/t.svg",
        },
        {
          name: "千代田線",
          id: "chiyoda",
          icon: "assets/kanto/tokyo-metro/c.svg",
        },
        {
          name: "有楽町線",
          id: "yurakucho",
          icon: "assets/kanto/tokyo-metro/y.svg",
        },
        {
          name: "半蔵門線",
          id: "hanzomon",
          icon: "assets/kanto/tokyo-metro/z.svg",
        },
        {
          name: "南北線",
          id: "namboku",
          icon: "assets/kanto/tokyo-metro/n.svg",
        },
        {
          name: "副都心線",
          id: "fukutoshin",
          icon: "assets/kanto/tokyo-metro/f.svg",
        },
      ],
    },
    seibu: {
      id: "seibu",
      name: "西武鉄道",
      icon: "assets/kanto/seibu/seibu.svg",
      railway: [
        {
          name: "池袋線",
          id: "ikebukuro",
          icon: "assets/kanto/seibu/si.svg",
        },
        {
          name: "西武秩父線",
          id: "chichibu",
          icon: "assets/kanto/seibu/si.svg",
        },
        {
          name: "西武有楽町線",
          id: "yurakucho",
          icon: "assets/kanto/seibu/si.svg",
        },
        {
          name: "豊島線",
          id: "toshima",
          icon: "assets/kanto/seibu/si.svg",
        },
        {
          name: "狭山線",
          id: "sayama",
          icon: "assets/kanto/seibu/si.svg",
        },
        {
          name: "新宿線",
          id: "shinjuku",
          icon: "assets/kanto/seibu/ss.svg",
        },
        {
          name: "拝島線",
          id: "haijima",
          icon: "assets/kanto/seibu/ss.svg",
        },
        {
          name: "多摩湖線",
          id: "tamako",
          icon: "assets/kanto/seibu/st.svg",
        },
        {
          name: "国分寺線",
          id: "kokubunji",
          icon: "assets/kanto/seibu/sk.svg",
        },
        {
          name: "西武園線",
          id: "seibuen",
          icon: "assets/kanto/seibu/sk.svg",
        },
        {
          name: "多摩川線",
          id: "tamagawa",
          icon: "assets/kanto/seibu/sw.svg",
        },
        {
          name: "山口線（レオライナー）",
          id: "yamaguchi",
          icon: "assets/kanto/seibu/sy.svg",
        },
      ],
    },
    tb: {
      id: "tb",
      name: "東武鉄道",
      icon: "assets/kanto/tobu/tobu.png",
      railway: [
        {
          name: "アーバンパークライン",
          id: "noda",
          icon: "assets/kanto/tobu/td.svg",
        },
        {
          name: "東上線",
          id: "tojo",
          icon: "assets/kanto/tobu/tj.svg",
        },
        {
          name: "越生線",
          id: "ogose",
          icon: "assets/kanto/tobu/tj.svg",
        },
        {
          name: "スカイツリーライン",
          id: "skytree",
          icon: "assets/kanto/tobu/ts.svg",
        },
        {
          name: "亀戸線",
          id: "kameido",
          icon: "assets/kanto/tobu/ts.svg",
        },
        {
          name: "大師線",
          id: "daishi",
          icon: "assets/kanto/tobu/ts.svg",
        },
        {
          name: "伊勢崎線",
          id: "isesaki",
          icon: "assets/kanto/tobu/ti.svg",
        },
        {
          name: "佐野線",
          id: "sano",
          icon: "assets/kanto/tobu/ti.svg",
        },
        {
          name: "小泉線",
          id: "koizumi",
          icon: "assets/kanto/tobu/ti.svg",
        },
        {
          name: "桐生線",
          id: "kiryu",
          icon: "assets/kanto/tobu/ti.svg",
        },
        {
          name: "日光線",
          id: "nikko",
          icon: "assets/kanto/tobu/tn.svg",
        },
        {
          name: "宇都宮線",
          id: "utsunomiya",
          icon: "assets/kanto/tobu/tn.svg",
        },
        {
          name: "鬼怒川線",
          id: "kinugawa",
          icon: "assets/kanto/tobu/tn.svg",
        },
      ],
    },
    odakyu: {
      id: "odakyu",
      name: "小田急電鉄",
      icon: "assets/kanto/odakyu/odakyu.svg",
      railway: [
        {
          name: "小田原線",
          id: "odawara",
          icon: "assets/kanto/odakyu/oh.svg",
        },
        {
          name: "江ノ島線",
          id: "enoshima",
          icon: "assets/kanto/odakyu/oe.svg",
        },
        {
          name: "多摩線",
          id: "tama",
          icon: "assets/kanto/odakyu/ot.svg",
        },
      ],
    },
    tokyu: {
      id: "tokyu",
      name: "東急電鉄",
      icon: "assets/kanto/tokyu/tokyu.svg",
      railway: [
        {
          name: "東横線",
          id: "toyoko",
          icon: "assets/kanto/tokyu/ty.svg",
        },
        {
          name: "目黒線",
          id: "meguro",
          icon: "assets/kanto/tokyu/mg.svg",
        },
        {
          name: "東急新横浜線",
          id: "shin-yokohama",
          icon: "assets/kanto/tokyu/sh.svg",
        },
        {
          name: "田園都市線",
          id: "denentoshi",
          icon: "assets/kanto/tokyu/dt.svg",
        },
        {
          name: "大井町線",
          id: "oimachi",
          icon: "assets/kanto/tokyu/om.svg",
        },
        {
          name: "池上線",
          id: "ikegami",
          icon: "assets/kanto/tokyu/ik.svg",
        },
        {
          name: "東急多摩川線",
          id: "tamagawa",
          icon: "assets/kanto/tokyu/tm.svg",
        },
        {
          name: "こどもの国線",
          id: "kodomonokuni",
          icon: "assets/kanto/tokyu/kd.svg",
        },
        {
          name: "世田谷線",
          id: "setagaya",
          icon: "assets/kanto/tokyu/sg.svg",
        },
      ],
    },
    kk: {
      id: "kk",
      name: "京浜急行電鉄",
      icon: "assets/kanto/keikyu/kk.svg",
      railway: [
        {
          name: "本線",
          id: "honsen",
          icon: "assets/kanto/keikyu/kk.svg",
        },
        {
          name: "空港線",
          id: "airport",
          icon: "assets/kanto/keikyu/kk.svg",
        },
        {
          name: "大師線",
          id: "daishi",
          icon: "assets/kanto/keikyu/kk.svg",
        },
        {
          name: "逗子線",
          id: "zushi",
          icon: "assets/kanto/keikyu/kk.svg",
        },
        {
          name: "久里浜線",
          id: "kurihama",
          icon: "assets/kanto/keikyu/kk.svg",
        },
      ],
    },
    ks: {
      id: "ks",
      name: "京成電鉄",
      icon: "assets/kanto/keisei/ks.svg",
      railway: [
        {
          name: "成田スカイアクセス線",
          id: "narita-skyaccess",
          icon: "assets/kanto/keisei/ks_narita.svg",
        },
        {
          name: "新京成線",
          id: "shin-keisei",
          icon: "assets/kanto/keisei/sl.svg",
        },
        {
          name: "本線",
          id: "honsen",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "押上線",
          id: "oshiage",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "金町線",
          id: "kanamachi",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "千葉線",
          id: "chiba",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "千原線",
          id: "chihara",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "東成田線",
          id: "higashi-narita",
          icon: "assets/kanto/keisei/ks.svg",
        },
        {
          name: "芝山鉄道線",
          id: "shibayama",
          icon: "assets/kanto/keisei/sr.svg",
        },
      ],
    },
    tx: {
      id: "tx",
      name: "つくばエクスプレス",
      icon: "assets/kanto/tx/tx.svg",
      railway: [
        {
          name: "つくばエクスプレス",
          id: "tx",
          icon: "assets/kanto/tx/tx.svg",
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
      icon: "assets/kanto/toei/toei.svg",
      railway: [
        {
          name: "浅草線",
          id: "asakusa",
          icon: "assets/kanto/toei/a.svg",
        },
        {
          name: "三田線",
          id: "mita",
          icon: "assets/kanto/toei/i.svg",
        },
        {
          name: "新宿線",
          id: "shinjuku",
          icon: "assets/kanto/toei/s.svg",
        },
        {
          name: "大江戸線",
          id: "ooedo",
          icon: "assets/kanto/toei/e.svg",
        },
      ],
    },
    nt: {
      id: "nt",
      name: "日暮里・舎人ライナー",
      icon: "assets/kanto/toei/nt.svg",
      railway: [
        {
          name: "日暮里・舎人ライナー",
          id: "nt",
          icon: "assets/kanto/toei/nt.svg",
        },
      ],
    },
    "tokyo-sakura": {
      id: "tokyo-sakura",
      name: "東京さくらトラム",
      icon: "assets/kanto/toei/sa.svg",
      railway: [
        {
          name: "東京さくらトラム",
          id: "tokyo-sakura",
          icon: "assets/kanto/toei/sa.svg",
        },
      ],
    },
    keio: {
      id: "keio",
      name: "京王電鉄",
      icon: "assets/kanto/keio/ko.svg",
      railway: [
        {
          name: "京王井の頭線",
          id: "inokashira",
          icon: "assets/kanto/keio/in.svg",
        },
        {
          name: "京王線",
          id: "line",
          icon: "assets/kanto/keio/ko.svg",
        },
        {
          name: "京王新線",
          id: "new",
          icon: "assets/kanto/keio/ko.svg",
        },
        {
          name: "京王相模原線",
          id: "sagamihara",
          icon: "assets/kanto/keio/ko.svg",
        },
        {
          name: "京王競馬場線",
          id: "keibajo",
          icon: "assets/kanto/keio/ko.svg",
        },
        {
          name: "京王動物園線",
          id: "doubutsuen",
          icon: "assets/kanto/keio/ko.svg",
        },
        {
          name: "京王高尾線",
          id: "takao",
          icon: "assets/kanto/keio/ko.svg",
        },
      ],
    },
    rinkai: {
      id: "rinkai",
      name: "りんかい線",
      icon: "assets/kanto/rinkai/r.svg",
      railway: [
        {
          name: "りんかい線",
          id: "rinkai",
          icon: "assets/kanto/rinkai/r.svg",
        },
      ],
    },
    "tokyo-monorail": {
      id: "tokyo-monorail",
      name: "東京モノレール",
      icon: "assets/kanto/tokyo-monorail/mo.svg",
      railway: [
        {
          name: "東京モノレール",
          id: "tokyo-monorail",
          icon: "assets/kanto/tokyo-monorail/mo.svg",
        },
      ],
    },
    yurikamome: {
      id: "yurikamome",
      name: "ゆりかもめ",
      icon: "assets/kanto/yurikamome/u.svg",
      railway: [
        {
          name: "ゆりかもめ",
          id: "yurikamome",
          icon: "assets/kanto/yurikamome/u.svg",
        },
      ],
    },
    "tama-monorail": {
      id: "tama-monorail",
      name: "多摩都市モノレール",
      icon: "assets/kanto/tama-monorail/tt.svg",
      railway: [
        {
          name: "多摩都市モノレール",
          id: "tama-monorail",
          icon: "assets/kanto/tama-monorail/tt.svg",
        },
      ],
    },
  },
};

const kanagawaRailways = {
  id: "kanagawa",
  name: "神奈川県",
  railways: {
    so: {
      id: "so",
      name: "相模鉄道",
      icon: "assets/kanto/sotetsu/sotetsu.svg",
      railway: [
        {
          name: "本線",
          id: "honsen",
          icon: "assets/kanto/sotetsu/so.svg",
        },
        {
          name: "いずみ野線",
          id: "izumino",
          icon: "assets/kanto/sotetsu/so.svg",
        },
        {
          name: "新横浜線",
          id: "shin-yokohama",
          icon: "assets/kanto/sotetsu/so.svg",
        },
      ],
    },
    "yokohama-metro": {
      id: "yokohama-metro",
      name: "横浜市営地下鉄",
      icon: "assets/kanto/yokohama-metro/yokohama-metro.svg",
      railway: [
        {
          name: "ブルーライン",
          id: "blue",
          icon: "assets/kanto/yokohama-metro/b.svg",
        },
        {
          name: "グリーンライン",
          id: "green",
          icon: "assets/kanto/yokohama-metro/g.svg",
        },
      ],
    },
    minatomirai: {
      id: "minatomirai",
      name: "みなとみらい線",
      icon: "assets/kanto/minatomirai/mm.svg",
      railway: [
        {
          name: "みなとみらい線",
          id: "minatomirai",
          icon: "assets/kanto/minatomirai/mm.svg",
        },
      ],
    },
    "shonan-monorail": {
      id: "shonan-monorail",
      name: "湘南モノレール",
      icon: "assets/kanto/shonan-monorail/shonan.svg",
      railway: [
        {
          name: "湘南モノレール江の島線",
          id: "shonan-monorail",
          icon: "assets/kanto/shonan-monorail/shonan.svg",
        },
      ],
    },
    enoshima: {
      id: "enoshima",
      name: "江ノ島電鉄",
      icon: "assets/kanto/enoshima/en.svg",
      railway: [
        {
          name: "江ノ島電鉄線",
          id: "enoshima",
          icon: "assets/kanto/enoshima/en.svg",
        },
      ],
    },
    "kanazawa-seaside": {
      id: "kanazawa-seaside",
      name: "金沢シーサイドライン",
      icon: "assets/kanto/kanazawa-seaside/seaside.svg",
      railway: [
        {
          name: "金沢シーサイドライン",
          id: "kanazawa-seaside",
          icon: "assets/kanto/kanazawa-seaside/seaside.svg",
        },
      ],
    },
    "izu-hakone-id": {
      id: "izu-hakone-id",
      name: "伊豆箱根鉄道大雄山線",
      icon: "assets/kanto/izu-hakone/id.svg",
      railway: [
        {
          name: "大雄山線",
          id: "izu-hakone-id",
          icon: "assets/kanto/izu-hakone/id.svg",
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
      icon: "assets/kanto/cm/cm.svg",
      railway: [
        {
          name: "1号線",
          id: "line1",
          icon: "assets/kanto/cm/cm_.svg",
        },
        {
          name: "2号線",
          id: "line2",
          icon: "assets/kanto/cm/cm_.svg",
        },
      ],
    },
    hs: {
      id: "hs",
      name: "北総鉄道",
      icon: "assets/kanto/hokso/hs.svg",
      railway: [
        {
          name: "北総線",
          id: "hs",
          icon: "assets/kanto/hokso/hs.svg",
        },
      ],
    },
    km: {
      id: "km",
      name: "小湊鉄道",
      icon: "assets/kanto/kominato/kominato.svg",
      railway: [
        {
          name: "小湊鉄道線",
          id: "km",
          icon: "assets/kanto/kominato/kominato.svg",
        },
      ],
    },
    "yu-kari": {
      id: "yu-kari",
      name: "ユーカリが丘線",
      icon: "assets/kanto/yu-kari/square.svg",
      railway: [
        {
          name: "ユーカリが丘線",
          id: "yu-kari",
          icon: "assets/kanto/yu-kari/square.svg",
        },
      ],
    },
    tr: {
      id: "tr",
      name: "東葉高速鉄道",
      icon: "assets/kanto/toyo/tr.svg",
      railway: [
        {
          name: "東葉高速線",
          id: "tr",
          icon: "assets/kanto/toyo/tr.svg",
        },
      ],
    },
    is: {
      id: "is",
      name: "いすみ鉄道",
      icon: "assets/kanto/isumi/isumi.svg",
      railway: [
        {
          name: "いすみ線",
          id: "is",
          icon: "assets/kanto/isumi/isumi.svg",
        },
      ],
    },
    cd: {
      id: "cd",
      name: "銚子電気鉄道",
      icon: "assets/kanto/choshi/cd.svg",
      railway: [
        {
          name: "銚子電気鉄道線",
          id: "cd",
          icon: "assets/kanto/choshi/cd.svg",
        },
      ],
    },
    ryutetsu: {
      id: "ryutetsu",
      name: "流鉄流山線",
      icon: "assets/kanto/ryutetsu/rn.png",
      railway: [
        {
          name: "流鉄流山線",
          id: "ryutetsu",
          icon: "assets/kanto/ryutetsu/rn.png",
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
      icon: "assets/kanto/sr/sr.svg",
      railway: [
        {
          name: "埼玉高速鉄道線",
          id: "sr",
          icon: "assets/kanto/sr/sr.svg",
        },
      ],
    },
    ns: {
      id: "ns",
      name: "ニューシャトル",
      icon: "assets/kanto/ns/ns.svg",
      railway: [
        {
          name: "ニューシャトル",
          id: "ns",
          icon: "assets/kanto/ns/ns.svg",
        },
      ],
    },
    chichibu: {
      id: "chichibu",
      name: "秩父鉄道秩父本線",
      icon: "assets/kanto/chichibu/chichibu.svg",
      railway: [
        {
          name: "秩父鉄道秩父本線",
          id: "chichibu",
          icon: "assets/kanto/chichibu/chichibu.svg",
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
      icon: "assets/kanto/kantetsu/kantetsu.svg",
      railway: [
        {
          name: "常総線",
          id: "joso",
          icon: "assets/kanto/kantetsu/kantetsu.svg",
        },
        {
          name: "竜ヶ崎線",
          id: "ryugasaki",
          icon: "assets/kanto/kantetsu/kantetsu.svg",
        },
      ],
    },
    "kashima-rinkai": {
      id: "kashima-rinkai",
      name: "鹿島臨海鉄道大洗鹿島線",
      icon: "assets/kanto/kashima-rinkai/oarai.svg",
      railway: [
        {
          name: "大洗鹿島線",
          id: "kashima-rinkai",
          icon: "assets/kanto/kashima-rinkai/oarai.svg",
        },
      ],
    },
    hitachinaka: {
      id: "hitachinaka",
      name: "ひたちなか海浜鉄道湊線",
      icon: "assets/kanto/hitachinaka/hitachinaka.svg",
      railway: [
        {
          name: "ひたちなか海浜鉄道湊線",
          id: "hitachinaka",
          icon: "assets/kanto/hitachinaka/hitachinaka.svg",
        },
      ],
    },
  },
};

const kantoRailwaysList = [
  kantoRailways,
  tokyoRailways,
  kanagawaRailways,
  chibaRailways,
  saitamaRailways,
  ibarakiRailways,
];

for (const prefecture of kantoRailwaysList) {
  if (prefecture.id === "kanto") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "kanto");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
