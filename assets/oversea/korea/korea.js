const koreaRailways = {
  id: "korea",
  name: "韓国",
  railways: {
    ktx: {
      id: "ktx",
      name: "韓国高速鉄道",
      icon: "assets/oversea/korea/ktx/ktx.svg",
      railway: [
        {
          id: "gyeongbu",
          name: "京釜高速線",
          icon: "assets/oversea/korea/ktx/ktx.svg",
        },
        {
          id: "honam",
          name: "湖南高速線",
          icon: "assets/oversea/korea/ktx/ktx.svg",
        },
        {
          id: "suseo",
          name: "水西平沢高速線",
          icon: "assets/oversea/korea/ktx/srt.svg",
        },
      ],
    },
    korail: {
      id: "korail",
      name: "韓国鉄道公社",
      icon: "assets/oversea/korea/korail/korail.svg",
      railway: [
        {
          id: "gyeongbu-metro",
          name: "京釜線（首都圏電鉄）",
          icon: "assets/oversea/korea/seoul-metro/1.svg",
        },
        {
          id: "gyeongbu",
          name: "京釜線",
          icon: "assets/oversea/korea/seoul-metro/1.svg",
        },
        {
          id: "byeongjeom",
          name: "餅店基地線",
          icon: "assets/oversea/korea/seoul-metro/1.svg",
        },
        {
          id: "janghang",
          name: "長項線",
          icon: "assets/oversea/korea/seoul-metro/1.svg",
        },
        {
          id: "ilsan",
          name: "一山線",
          icon: "assets/oversea/korea/seoul-metro/3.svg",
        },
        {
          id: "gwacheon",
          name: "果川線",
          icon: "assets/oversea/korea/seoul-metro/4.svg",
        },
        {
          id: "ansan",
          name: "安山線",
          icon: "assets/oversea/korea/seoul-metro/4.svg",
        },
        {
          id: "gyeongui",
          name: "京義線",
          icon: "assets/oversea/korea/korail/gyeongui.svg",
        },
        {
          id: "yongsan",
          name: "龍山線",
          icon: "assets/oversea/korea/korail/gyeongui.svg",
        },
        {
          id: "gyeongwon",
          name: "京元線",
          icon: "assets/oversea/korea/korail/gyeongui.svg",
        },
        {
          id: "jungang",
          name: "中央線",
          icon: "assets/oversea/korea/korail/gyeongui.svg",
        },
        {
          id: "gyeongchun",
          name: "京春線",
          icon: "assets/oversea/korea/korail/gyeongchun.svg",
        },
        {
          id: "gyeongchun-mangwu",
          name: "京春線（忘憂線）",
          icon: "assets/oversea/korea/korail/gyeongchun.svg",
        },
        {
          id: "bundang",
          name: "盆唐線",
          icon: "assets/oversea/korea/korail/bundang.svg",
        },
        {
          id: "suin",
          name: "水仁線",
          icon: "assets/oversea/korea/korail/suin.svg",
        },
        {
          id: "gyeonggang-metro",
          name: "京江線（首都圏電鉄）",
          icon: "assets/oversea/korea/korail/gyeonggang.svg",
        },
        {
          id: "gyeonggang",
          name: "京江線",
          icon: "assets/oversea/korea/korail/gyeonggang.svg",
        },
        {
          id: "seohae-metro",
          name: "西海線（首都圏電鉄）",
          icon: "assets/oversea/korea/korail/seohae.svg",
        },
        {
          id: "seohae",
          name: "西海線",
          icon: "assets/oversea/korea/korail/seohae.svg",
        },
        {
          id: "donghae",
          name: "東海線",
          icon: "assets/oversea/korea/korail/donghae.svg",
        },
        {
          id: "chungbuk",
          name: "忠北線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "honam",
          name: "湖南線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "jeolla",
          name: "全羅線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "gyeongjeon",
          name: "慶全線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "gwangju",
          name: "光州線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "gyeongbuk",
          name: "慶北線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "daegu",
          name: "大邱線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "samcheok",
          name: "三陟線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "jungbu-naeryuk",
          name: "中部内陸線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "taebaek",
          name: "太白線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "jeongseon",
          name: "旌善線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "yeongdong",
          name: "嶺東線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
        {
          id: "gyooe",
          name: "郊外線",
          icon: "assets/oversea/korea/korail/korail.svg",
        },
      ],
    },
    gtx: {
      id: "gtx",
      name: "首都圏広域急行鉄道A路線",
      icon: "assets/oversea/korea/gtx/a.svg",
      railway: [
        {
          id: "gtx-a",
          name: "A路線",
          icon: "assets/oversea/korea/gtx/a.svg",
        },
      ],
    },
  },
};

const seoulRailways = {
  id: "seoul",
  name: "ソウル・仁川",
  railways: {
    "seoul-metro": {
      id: "seoul-metro",
      name: "ソウル交通公社",
      icon: "assets/oversea/korea/seoul-metro/metro.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/seoul-metro/1.svg",
        },
        {
          id: "line-2",
          name: "2号線",
          icon: "assets/oversea/korea/seoul-metro/2.svg",
        },
        {
          id: "line-2-seongsu",
          name: "2号線(聖水支線)",
          icon: "assets/oversea/korea/seoul-metro/2.svg",
        },
        {
          id: "line-2-sinjeong",
          name: "2号線(新亭支線)",
          icon: "assets/oversea/korea/seoul-metro/2.svg",
        },
        {
          id: "line-3",
          name: "3号線",
          icon: "assets/oversea/korea/seoul-metro/3.svg",
        },
        {
          id: "line-4",
          name: "4号線",
          icon: "assets/oversea/korea/seoul-metro/4.svg",
        },
        {
          id: "line-jinjeop",
          name: "榛接線",
          icon: "assets/oversea/korea/seoul-metro/4.svg",
        },
        {
          id: "line-5",
          name: "5号線",
          icon: "assets/oversea/korea/seoul-metro/5.svg",
        },
        {
          id: "line-hanam",
          name: "河南線",
          icon: "assets/oversea/korea/seoul-metro/5.svg",
        },
        {
          id: "line-6",
          name: "6号線",
          icon: "assets/oversea/korea/seoul-metro/6.svg",
        },
        {
          id: "line-7",
          name: "7号線",
          icon: "assets/oversea/korea/seoul-metro/7.svg",
        },
        {
          id: "line-8",
          name: "8号線",
          icon: "assets/oversea/korea/seoul-metro/8.svg",
        },
        {
          id: "line-9",
          name: "9号線",
          icon: "assets/oversea/korea/seoul-metro/9.svg",
        },
      ],
    },
    "incheon-metro": {
      id: "incheon-metro",
      name: "仁川交通公社",
      icon: "assets/oversea/korea/incheon-metro/metro.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/incheon-metro/1.svg",
        },
        {
          id: "line-2",
          name: "2号線",
          icon: "assets/oversea/korea/incheon-metro/2.svg",
        },
      ],
    },
    arex: {
      id: "arex",
      name: "仁川国際空港線",
      icon: "assets/oversea/korea/arex/arex.svg",
      railway: [
        {
          id: "arex",
          name: "仁川国際空港線",
          icon: "assets/oversea/korea/arex/arex.svg",
        },
      ],
    },
    shinbundang: {
      id: "shinbundang",
      name: "新盆唐線",
      icon: "assets/oversea/korea/shinbundang/shinbundang.svg",
      railway: [
        {
          id: "shinbundang",
          name: "新盆唐線",
          icon: "assets/oversea/korea/shinbundang/shinbundang.svg",
        },
      ],
    },
    "incheon-maglev": {
      id: "incheon-maglev",
      name: "仁川空港磁気浮上鉄道",
      icon: "assets/oversea/korea/incheon-maglev/incheon.svg",
      railway: [
        {
          id: "incheon-maglev",
          name: "仁川空港磁気浮上鉄道",
          icon: "assets/oversea/korea/incheon-maglev/incheon.svg",
        },
      ],
    },
    "seoul-sillim": {
      id: "seoul-sillim",
      name: "ソウル軽電鉄新林線",
      icon: "assets/oversea/korea/seoul-sillim/sillim.svg",
      railway: [
        {
          id: "seoul-sillim",
          name: "ソウル軽電鉄新林線",
          icon: "assets/oversea/korea/seoul-sillim/sillim.svg",
        },
      ],
    },
    "ui-lrt": {
      id: "ui-lrt",
      name: "ソウル軽電鉄牛耳新設線",
      icon: "assets/oversea/korea/ui-lrt/ui-lrt.svg",
      railway: [
        {
          id: "ui-lrt",
          name: "ソウル軽電鉄牛耳新設線",
          icon: "assets/oversea/korea/ui-lrt/ui-lrt.svg",
        },
      ],
    },
    goldline: {
      id: "goldline",
      name: "金浦ゴールドライン",
      icon: "assets/oversea/korea/gimpo-goldline/goldline.svg",
      railway: [
        {
          id: "goldline",
          name: "金浦ゴールドライン",
          icon: "assets/oversea/korea/gimpo-goldline/goldline.svg",
        },
      ],
    },
    "u-line": {
      id: "u-line",
      name: "議政府軽電鉄",
      icon: "assets/oversea/korea/u-line/u-line.svg",
      railway: [
        {
          id: "u-line",
          name: "議政府軽電鉄",
          icon: "assets/oversea/korea/u-line/u-line.svg",
        },
      ],
    },
    everline: {
      id: "everline",
      name: "龍仁軽電鉄",
      icon: "assets/oversea/korea/everline/everline.svg",
      railway: [
        {
          id: "everline",
          name: "龍仁軽電鉄",
          icon: "assets/oversea/korea/everline/everline.svg",
        },
      ],
    },
  },
};

const busanRailways = {
  id: "busan",
  name: "釜山",
  railways: {
    "busan-metro": {
      id: "busan-metro",
      name: "釜山交通公社",
      icon: "assets/oversea/korea/busan-metro/metro.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/busan-metro/1.svg",
        },
        {
          id: "line-2",
          name: "2号線",
          icon: "assets/oversea/korea/busan-metro/2.svg",
        },
        {
          id: "line-3",
          name: "3号線",
          icon: "assets/oversea/korea/busan-metro/3.svg",
        },
        {
          id: "line-4",
          name: "4号線",
          icon: "assets/oversea/korea/busan-metro/4.svg",
        },
      ],
    },
    "busan-gimhae": {
      id: "busan-gimhae",
      name: "釜山-金海軽電鉄",
      icon: "assets/oversea/korea/busan-gimhae/busan-gimhae.svg",
      railway: [
        {
          id: "busan-gimhae",
          name: "釜山-金海軽電鉄",
          icon: "assets/oversea/korea/busan-gimhae/busan-gimhae.svg",
        },
      ],
    },
  },
};

const daeguRailways = {
  id: "daegu",
  name: "大邱",
  railways: {
    dtro: {
      id: "dtro",
      name: "大邱交通公社",
      icon: "assets/oversea/korea/dtro/dtro.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/dtro/1.svg",
        },
        {
          id: "line-2",
          name: "2号線",
          icon: "assets/oversea/korea/dtro/2.svg",
        },
        {
          id: "line-3",
          name: "3号線",
          icon: "assets/oversea/korea/dtro/3.svg",
        },
      ],
    },
  },
};

const gwangjuRailways = {
  id: "gwangju",
  name: "光州",
  railways: {
    grtc: {
      id: "grtc",
      name: "光州交通公社1号線",
      icon: "assets/oversea/korea/grtc/1.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/grtc/1.svg",
        },
      ],
    },
  },
};

const daejeonRailways = {
  id: "daejeon",
  name: "大田",
  railways: {
    djet: {
      id: "djet",
      name: "大田交通公社1号線",
      icon: "assets/oversea/korea/djet/1.svg",
      railway: [
        {
          id: "line-1",
          name: "1号線",
          icon: "assets/oversea/korea/djet/1.svg",
        },
      ],
    },
  },
};

const koreaRailwaysList = [
  koreaRailways,
  seoulRailways,
  busanRailways,
  daeguRailways,
  gwangjuRailways,
  daejeonRailways,
];
