const chugokuRailways = {
  id: "chugoku",
  name: "中国",
  railways: {
    "jr-west": {
      id: "jr-west",
      name: "JR西日本",
      icon: "assets/chugoku/jr-west/jr.svg",
      railway: [
        {
          id: "sanin-tottori",
          name: "山陰本線（城崎温泉〜米子）",
          icon: "assets/chugoku/jr-west/a.svg",
        },
        {
          id: "imbi",
          name: "因美線",
          icon: "assets/chugoku/jr-west/b_1.svg",
        },
        {
          id: "kabe",
          name: "可部線",
          icon: "assets/chugoku/jr-west/b_2.svg",
        },
        {
          id: "sakai",
          name: "境線",
          icon: "assets/chugoku/jr-west/c.svg",
        },
        {
          id: "sanin-shimane",
          name: "山陰本線（米子〜益田）",
          icon: "assets/chugoku/jr-west/d.svg",
        },
        {
          id: "kisuki",
          name: "木次線",
          icon: "assets/chugoku/jr-west/e.svg",
        },
        {
          id: "sanyo-hiroshima",
          name: "山陽本線（糸崎〜広島）",
          icon: "assets/chugoku/jr-west/g.svg",
        },
        {
          id: "kishin",
          name: "姫新線",
          icon: "assets/chugoku/jr-west/k.svg",
        },
        {
          id: "uno",
          name: "宇野線",
          icon: "assets/chugoku/jr-west/l.svg",
        },
        {
          id: "seto-ohashi",
          name: "瀬戸大橋線",
          icon: "assets/chugoku/jr-west/m.svg",
        },
        {
          id: "ako",
          name: "赤穂線（播州赤穂〜東岡山）",
          icon: "assets/chugoku/jr-west/n.svg",
        },
        {
          id: "geibi",
          name: "芸備線",
          icon: "assets/chugoku/jr-west/p.svg",
        },
        {
          id: "sanyo-iwakuni",
          name: "山陽本線（広島〜岩国）",
          icon: "assets/chugoku/jr-west/r.svg",
        },
        {
          id: "sanyo-okayama",
          name: "山陽本線（上郡〜岡山）",
          icon: "assets/chugoku/jr-west/s.svg",
        },
        {
          id: "tsuyama",
          name: "津山線",
          icon: "assets/chugoku/jr-west/t.svg",
        },
        {
          id: "kibi",
          name: "吉備線",
          icon: "assets/chugoku/jr-west/u.svg",
        },
        {
          id: "hakubi",
          name: "伯備線",
          icon: "assets/chugoku/jr-west/v.svg",
        },
        {
          id: "sanyo-fukuyama",
          name: "山陽本線（岡山〜福山）",
          icon: "assets/chugoku/jr-west/w.svg",
        },
        {
          id: "sanyo-itozaki",
          name: "山陽本線（福山〜糸崎）",
          icon: "assets/chugoku/jr-west/x.svg",
        },
        {
          id: "kure",
          name: "呉線",
          icon: "assets/chugoku/jr-west/y.svg",
        },
        {
          id: "fukuen",
          name: "福塩線",
          icon: "assets/chugoku/jr-west/z.svg",
        },
        {
          id: "mine",
          name: "美祢線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "sanyo-yamaguchi",
          name: "山陽本線（岩国〜下関）",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "sanin-yamaguchi",
          name: "山陰本線（益田〜下関）",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "senzaki",
          name: "仙崎線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "ube",
          name: "宇部線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "gantoku",
          name: "岩徳線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "yamaguchi",
          name: "山口線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "onoda",
          name: "小野田線",
          icon: "assets/chugoku/jr-west/west.svg",
        },
        {
          id: "motoyama",
          name: "小野田線（本山支線）",
          icon: "assets/chugoku/jr-west/west.svg",
        },
      ],
    },
  },
};

const tottoriRailways = {
  id: "tottori",
  name: "鳥取",
  railways: {
    wakasa: {
      id: "wakasa",
      name: "若桜鉄道若桜線",
      icon: "assets/chugoku/wakasa/wakasa.png",
      railway: [
        {
          id: "koge",
          name: "若桜鉄道若桜線",
          icon: "assets/chugoku/wakasa/wakasa.png",
        },
      ],
    },
    chizu: {
      id: "chizu",
      name: "智頭急行智頭線",
      icon: "assets/chugoku/chizu/chizu.png",
      railway: [
        {
          id: "chizu",
          name: "智頭急行智頭線",
          icon: "assets/chugoku/chizu/chizu.png",
        },
      ],
    },
  },
};

const shimaneRailways = {
  id: "shimane",
  name: "島根",
  railways: {
    bataden: {
      id: "bataden",
      name: "一畑電車",
      icon: "assets/chugoku/bataden/bataden.svg",
      railway: [
        {
          id: "kitamatsue",
          name: "北松江線",
          icon: "assets/chugoku/bataden/bataden.svg",
        },
        {
          id: "taisha",
          name: "大社線",
          icon: "assets/chugoku/bataden/bataden.svg",
        },
      ],
    },
  },
};

const okayamaRailways = {
  id: "okayama",
  name: "岡山",
  railways: {
    mizushima: {
      id: "mizushima",
      name: "水島臨海鉄道水島本線",
      icon: "assets/chugoku/mizushima/mizushima.svg",
      railway: [
        {
          id: "mizushima",
          name: "水島臨海鉄道水島本線",
          icon: "assets/chugoku/mizushima/mizushima.svg",
        },
      ],
    },
    okayama: {
      id: "okayama",
      name: "岡山電気軌道",
      icon: "assets/chugoku/okayama/okayama.svg",
      railway: [
        {
          id: "higashiyama",
          name: "東山本線",
          icon: "assets/chugoku/okayama/okayama.svg",
        },
        {
          id: "seikibashi",
          name: "清輝橋線",
          icon: "assets/chugoku/okayama/okayama.svg",
        },
      ],
    },
    ibara: {
      id: "ibara",
      name: "井原鉄道井原線",
      icon: "assets/chugoku/ibara/ibara.svg",
      railway: [
        {
          id: "ibara",
          name: "井原鉄道井原線",
          icon: "assets/chugoku/ibara/ibara.svg",
        },
      ],
    },
  },
};

const hiroshimaRailways = {
  id: "hiroshima",
  name: "広島",
  railways: {
    hiroshima: {
      id: "hiroshima",
      name: "広島電鉄",
      icon: "assets/chugoku/hiroshima/hiroshima.svg",
      railway: [
        {
          id: "1",
          name: "1系統",
          icon: "assets/chugoku/hiroshima/1.svg",
        },
        {
          id: "2",
          name: "2系統",
          icon: "assets/chugoku/hiroshima/2.svg",
        },
        {
          id: "3",
          name: "3系統",
          icon: "assets/chugoku/hiroshima/3.svg",
        },
        {
          id: "5",
          name: "5系統",
          icon: "assets/chugoku/hiroshima/5.svg",
        },
        {
          id: "6",
          name: "6系統",
          icon: "assets/chugoku/hiroshima/6.svg",
        },
        {
          id: "7",
          name: "7系統",
          icon: "assets/chugoku/hiroshima/7.svg",
        },
        {
          id: "8",
          name: "8系統",
          icon: "assets/chugoku/hiroshima/8.svg",
        },
        {
          id: "9",
          name: "9系統",
          icon: "assets/chugoku/hiroshima/9.svg",
        },
      ],
    },
    astram: {
      id: "astram",
      name: "広島新交通アストラムライン",
      icon: "assets/chugoku/astram/astram.svg",
      railway: [
        {
          id: "astram",
          name: "広島新交通アストラムライン",
          icon: "assets/chugoku/astram/astram.svg",
        },
      ],
    },
  },
};

const yamaguchiRailways = {
  id: "yamaguchi",
  name: "山口",
  railways: {
    nishikigawa: {
      id: "nishikigawa",
      name: "錦川鉄道錦川清流線",
      icon: "assets/chugoku/nishikigawa/nishikigawa.png",
      railway: [
        {
          id: "nishikigawa",
          name: "錦川鉄道錦川清流線",
          icon: "assets/chugoku/nishikigawa/nishikigawa.png",
        },
      ],
    },
  },
};

const chugokuRailwaysList = [
  chugokuRailways,
  tottoriRailways,
  shimaneRailways,
  okayamaRailways,
  hiroshimaRailways,
  yamaguchiRailways,
];
