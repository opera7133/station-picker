const hokkaidoRailways = {
  id: "hokkaido",
  name: "北海道",
  railways: {
    "jr-hokkaido": {
      id: "jr-hokkaido",
      name: "JR北海道",
      icon: "assets/hokkaido/jr-hokkaido/jr.svg",
      railway: [
        {
          id: "hakodate-h",
          name: "函館本線（函館〜長万部）",
          icon: "assets/hokkaido/jr-hokkaido/blue.svg",
        },
        {
          id: "hakodate-sawara",
          name: "函館本線（砂原支線）",
          icon: "assets/hokkaido/jr-hokkaido/blue.svg",
        },
        {
          id: "hakodate-s",
          name: "函館本線（長万部〜札幌）",
          icon: "assets/hokkaido/jr-hokkaido/red.svg",
        },
        {
          id: "hakodate-a",
          name: "函館本線（札幌〜旭川）",
          icon: "assets/hokkaido/jr-hokkaido/yellow.svg",
        },
        {
          id: "nemuro",
          name: "根室本線（滝川〜富良野）",
          icon: "assets/hokkaido/jr-hokkaido/pink.svg",
        },
        {
          id: "hanasaki",
          name: "根室本線（新得〜根室）",
          icon: "assets/hokkaido/jr-hokkaido/lightgreen.svg",
        },
        {
          id: "chitose",
          name: "千歳線",
          icon: "assets/hokkaido/jr-hokkaido/blue.svg",
        },
        {
          id: "chitose-airport",
          name: "千歳線（空港線）",
          icon: "assets/hokkaido/jr-hokkaido/lightblue.svg",
        },
        {
          id: "muroran-main",
          name: "室蘭本線（長万部〜苫小牧）",
          icon: "assets/hokkaido/jr-hokkaido/blue.svg",
        },
        {
          id: "muroran-main-chiho",
          name: "室蘭本線（苫小牧〜岩見沢）",
          icon: "assets/hokkaido/jr-hokkaido/hokkaido.svg",
        },
        {
          id: "muroran",
          name: "室蘭支線",
          icon: "assets/hokkaido/jr-hokkaido/blue.svg",
        },
        {
          id: "sekisho",
          name: "石勝線",
          icon: "assets/hokkaido/jr-hokkaido/lightgreen.svg",
        },
        {
          id: "furano",
          name: "富良野線",
          icon: "assets/hokkaido/jr-hokkaido/purple.svg",
        },
        {
          id: "rumoi",
          name: "留萌本線",
          icon: "assets/hokkaido/jr-hokkaido/hokkaido.svg",
        },
        {
          id: "soya",
          name: "宗谷本線",
          icon: "assets/hokkaido/jr-hokkaido/brown.svg",
        },
        {
          id: "semmo",
          name: "釧網本線",
          icon: "assets/hokkaido/jr-hokkaido/pink.svg",
        },
        {
          id: "sekihoku",
          name: "石北本線",
          icon: "assets/hokkaido/jr-hokkaido/yellow.svg",
        },
        {
          id: "sassho",
          name: "札沼線",
          icon: "assets/hokkaido/jr-hokkaido/hokkaido.svg",
        },
        {
          id: "hidaka",
          name: "日高本線",
          icon: "assets/hokkaido/jr-hokkaido/hokkaido.svg",
        },
      ],
    },
  },
};

const sapporoRailways = {
  id: "sapporo",
  name: "札幌",
  railways: {
    "sapporo-metro": {
      id: "sapporo-metro",
      name: "札幌市営地下鉄",
      icon: "assets/hokkaido/sapporo-metro/sapporo-metro.svg",
      railway: [
        {
          id: "namboku",
          name: "南北線",
          icon: "assets/hokkaido/sapporo-metro/namboku.svg",
        },
        {
          id: "tozai",
          name: "東西線",
          icon: "assets/hokkaido/sapporo-metro/tozai.svg",
        },
        {
          id: "toho",
          name: "東豊線",
          icon: "assets/hokkaido/sapporo-metro/toho.svg",
        },
      ],
    },
    sapporo: {
      id: "sapporo",
      name: "札幌市電",
      icon: "assets/hokkaido/sapporo/sapporo.svg",
      railway: [
        {
          id: "sapporo",
          name: "札幌市電",
          icon: "assets/hokkaido/sapporo/sapporo.svg",
        },
      ],
    },
  },
};

const hakodateRailways = {
  id: "hakodate",
  name: "函館",
  railways: {
    hakodate: {
      id: "hakodate",
      name: "函館市電",
      icon: "assets/hokkaido/hakodate/hakodate.png",
      railway: [
        {
          id: "2",
          name: "2系統",
          icon: "assets/hokkaido/hakodate/y.svg",
        },
        {
          id: "5",
          name: "5系統",
          icon: "assets/hokkaido/hakodate/d.svg",
        },
      ],
    },
    isaribi: {
      id: "isaribi",
      name: "道南いさりび鉄道線",
      icon: "assets/hokkaido/isaribi/isaribi.svg",
      railway: [
        {
          id: "isaribi",
          name: "道南いさりび鉄道線",
          icon: "assets/hokkaido/isaribi/isaribi.svg",
        },
      ],
    },
  },
};

const hokkaidoRailwaysList = [
  hokkaidoRailways,
  sapporoRailways,
  hakodateRailways,
];
