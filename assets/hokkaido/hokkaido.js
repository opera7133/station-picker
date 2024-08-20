const hokkaidoRailways = {
  id: "hokkaido",
  name: "北海道",
  railways: {
    "jr-hokkaido": {
      id: "jr-hokkaido",
      name: "JR北海道",
      icon: "assets/hokkaido/jr-hokkaido/jr.svg",
      railway: [],
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
      icon: "assets/hokkaido/sapporo/sapporo-metro.svg",
      railway: [
        {
          id: "namboku",
          name: "南北線",
          icon: "assets/hokkaido/sapporo/namboku.svg",
        },
        {
          id: "tozai",
          name: "東西線",
          icon: "assets/hokkaido/sapporo/tozai.svg",
        },
        {
          id: "toho",
          name: "東豊線",
          icon: "assets/hokkaido/sapporo/toho.svg",
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
          icon: "assets/hokkaido/hakodate/y.png",
        },
        {
          id: "5",
          name: "5系統",
          icon: "assets/hokkaido/hakodate/d.png",
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
