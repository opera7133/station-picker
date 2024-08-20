const tohokuRailways = {
  id: "tohoku",
  name: "東北",
  railways: {
    "jr-east": {
      id: "jr-east",
      name: "JR東日本",
      icon: "assets/tohoku/jr-east/jr.svg",
      railway: [],
    },
  },
};

const aomoriRailways = {
  id: "aomori",
  name: "青森",
  railways: {
    tsugaru: {
      id: "tsugaru",
      name: "津軽鉄道線",
      icon: "assets/tohoku/tsugaru/tsugaru.svg",
      railway: [
        {
          id: "tsugaru",
          name: "津軽鉄道線",
          icon: "assets/tohoku/tsugaru/tsugaru.svg",
        },
      ],
    },
    aoimori: {
      id: "aoimori",
      name: "青い森鉄道線",
      icon: "assets/tohoku/aoimori/aoimori.svg",
      railway: [
        {
          id: "aoimori",
          name: "青い森鉄道線",
          icon: "assets/tohoku/aoimori/aoimori.svg",
        },
      ],
    },
  },
};

const iwateRailways = {
  id: "iwate",
  name: "岩手",
  railways: {
    "igr-iwate": {
      id: "igr-iwate",
      name: "IGRいわて銀河鉄道線",
      icon: "assets/tohoku/igr-iwate/igr.svg",
      railway: [
        {
          id: "igr-iwate",
          name: "IGRいわて銀河鉄道線",
          icon: "assets/tohoku/igr-iwate/igr.svg",
        },
      ],
    },
    sanriku: {
      id: "sanriku",
      name: "三陸鉄道リアス線",
      icon: "assets/tohoku/sanriku/sanriku.png",
      railway: [
        {
          id: "sanriku",
          name: "三陸鉄道リアス線",
          icon: "assets/tohoku/sanriku/sanriku.png",
        },
      ],
    },
  },
};

const miyagiRailways = {
  id: "miyagi",
  name: "宮城",
  railways: {
    "sendai-metro": {
      id: "sendai-metro",
      name: "仙台市地下鉄",
      icon: "assets/tohoku/sendai-metro/sendai-metro.svg",
      railway: [
        {
          id: "namboku",
          name: "南北線",
          icon: "assets/tohoku/sendai-metro/sendai-metro.svg",
        },
        {
          id: "tozai",
          name: "東西線",
          icon: "assets/tohoku/sendai-metro/sendai-metro.svg",
        },
      ],
    },
    abukuma: {
      id: "abukuma",
      name: "阿武隈急行線",
      icon: "assets/tohoku/abukuma/abukuma.svg",
      railway: [
        {
          id: "abukuma",
          name: "阿武隈急行線",
          icon: "assets/tohoku/abukuma/abukuma.svg",
        },
      ],
    },
  },
};

const akitaRailways = {
  id: "akita",
  name: "秋田",
  railways: {
    "akita-nairiku": {
      id: "akita-nairiku",
      name: "秋田内陸縦貫鉄道線",
      icon: "assets/tohoku/akita-nairiku/anjt.png",
      railway: [
        {
          id: "akita-nairiku",
          name: "秋田内陸縦貫鉄道線",
          icon: "assets/tohoku/akita-nairiku/anjt.png",
        },
      ],
    },
    "yuri-kogen": {
      id: "yuri-kogen",
      name: "由利高原鉄道鳥海山ろく線",
      icon: "assets/tohoku/yuri-kogen/yuri-kogen.png",
      railway: [
        {
          id: "yuri-kogen",
          name: "由利高原鉄道鳥海山ろく線",
          icon: "assets/tohoku/yuri-kogen/yuri-kogen.png",
        },
      ],
    },
  },
};

const yamagataRailways = {
  id: "yamagata",
  name: "山形",
  railways: {
    yamagata: {
      id: "yamagata",
      name: "山形鉄道フラワー長井線",
      icon: "assets/tohoku/yamagata/yamagata.svg",
      railway: [
        {
          id: "yamagata",
          name: "山形鉄道フラワー長井線",
          icon: "assets/tohoku/yamagata/yamagata.svg",
        },
      ],
    },
  },
};

const fukushimaRailways = {
  id: "fukushima",
  name: "福島",
  railways: {
    aizu: {
      id: "aizu",
      name: "会津鉄道会津線",
      icon: "assets/tohoku/aizu/aizu.svg",
      railway: [
        {
          id: "aizu",
          name: "会津鉄道会津線",
          icon: "assets/tohoku/aizu/aizu.svg",
        },
      ],
    },
    fukushima: {
      id: "fukushima",
      name: "福島交通飯坂線",
      icon: "assets/tohoku/fukushima/fukushima.svg",
      railway: [
        {
          id: "fukushima",
          name: "福島交通飯坂線",
          icon: "assets/tohoku/fukushima/fukushima.svg",
        },
      ],
    },
  },
};

const tohokuRailwaysList = [
  tohokuRailways,
  aomoriRailways,
  iwateRailways,
  miyagiRailways,
  akitaRailways,
  yamagataRailways,
  fukushimaRailways,
];
