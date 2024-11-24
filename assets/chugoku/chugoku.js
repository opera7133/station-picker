const chugokuRailways = {
  id: "chugoku",
  name: "中国",
  railways: {
    "jr-west": {
      id: "jr-west",
      name: "JR西日本",
      icon: "assets/chugoku/jr-west/jr.svg",
      railway: [],
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
