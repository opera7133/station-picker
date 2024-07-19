const kyushuRailways = {
  id: "kyushu",
  name: "九州",
  railways: {
    "jr-kyushu": {
      id: "jr-kyushu",
      name: "JR九州",
      icon: "assets/kyushu/jr-kyushu/jr.svg",
      railway: [
        {
          id: "kagoshima-main",
          name: "鹿児島本線",
          icon: "assets/kyushu/jr-kyushu/ja.svg",
        },
        {
          id: "nagasaki",
          name: "長崎本線",
          icon: "assets/kyushu/jr-kyushu/jh.svg",
        },
      ],
    },
    mr: {
      id: "mr",
      name: "松浦鉄道西九州線",
      icon: "assets/kyushu/mr/mr.png",
      railway: [
        {
          id: "mr",
          name: "松浦鉄道西九州線",
          icon: "assets/kyushu/mr/mr.png",
        },
      ],
    },
    hisatsu: {
      id: "hisatsu",
      name: "肥薩おれんじ鉄道線",
      icon: "assets/kyushu/hisatsu/hisatsu.svg",
      railway: [
        {
          id: "hisatsu",
          name: "肥薩おれんじ鉄道線",
          icon: "assets/kyushu/hisatsu/hisatsu.svg",
        },
      ],
    },
  },
};

const fukuokaRailways = {
  id: "fukuoka",
  name: "福岡",
  railways: {
    "jr-west": {
      id: "jr-west",
      name: "JR西日本（博多南線）",
      icon: "assets/kyushu/jr-west/jr.svg",
      railway: [
        {
          id: "hakata-minami",
          name: "博多南線",
          icon: "assets/kyushu/jr-west/west.svg",
        },
      ],
    },
    nishitetsu: {
      id: "nishitetsu",
      name: "西日本鉄道",
      icon: "assets/kyushu/nishitetsu/n.svg",
      railway: [
        {
          id: "tenjin-ohmuta",
          name: "天神大牟田線",
          icon: "assets/kyushu/nishitetsu/t.svg",
        },
        {
          id: "dazaifu",
          name: "太宰府線",
          icon: "assets/kyushu/nishitetsu/d.svg",
        },
        {
          id: "amagi",
          name: "甘木線",
          icon: "assets/kyushu/nishitetsu/a.svg",
        },
        {
          id: "kaizuka",
          name: "貝塚線",
          icon: "assets/kyushu/nishitetsu/nk.svg",
        },
      ],
    },
    "fukuoka-metro": {
      id: "fukuoka-metro",
      name: "福岡市交通局",
      icon: "assets/kyushu/fukuoka-metro/fukuoka.svg",
      railway: [
        {
          id: "kuko",
          name: "空港線",
          icon: "assets/kyushu/fukuoka-metro/k.svg",
        },
        {
          id: "hakozaki",
          name: "箱崎線",
          icon: "assets/kyushu/fukuoka-metro/h.svg",
        },
        {
          id: "nanakuma",
          name: "七隈線",
          icon: "assets/kyushu/fukuoka-metro/n.svg",
        },
      ],
    },
    "kitakyushu-monorail": {
      id: "kitakyushu-monorail",
      name: "北九州モノレール",
      icon: "assets/kyushu/kitakyushu-monorail/kitakyushu-monorail.svg",
      railway: [
        {
          id: "kitakyushu-monorail",
          name: "北九州モノレール",
          icon: "assets/kyushu/kitakyushu-monorail/kitakyushu-monorail.svg",
        },
      ],
    },
    chikuho: {
      id: "chikuho",
      name: "筑豊電気鉄道線",
      icon: "assets/kyushu/chikuho/chikuho.svg",
      railway: [
        {
          id: "chikuho",
          name: "筑豊電気鉄道線",
          icon: "assets/kyushu/chikuho/chikuho.svg",
        },
      ],
    },
    heichiku: {
      id: "heichiku",
      name: "平成筑豊鉄道",
      icon: "assets/kyushu/heichiku/heichiku.svg",
      railway: [
        {
          id: "ita",
          name: "伊田線",
          icon: "assets/kyushu/heichiku/ita.svg",
        },
        {
          id: "itoda",
          name: "糸田線",
          icon: "assets/kyushu/heichiku/itoda.svg",
        },
        {
          id: "tagawa",
          name: "田川線",
          icon: "assets/kyushu/heichiku/tagawa.svg",
        },
        {
          id: "mojiko",
          name: "門司港レトロ観光線",
          icon: "assets/kyushu/heichiku/mojiko.svg",
        },
      ],
    },
    amagi: {
      id: "amagi",
      name: "甘木鉄道甘木線",
      icon: "assets/kyushu/amagi/amagi.png",
      railway: [
        {
          id: "amagi",
          name: "甘木鉄道甘木線",
          icon: "assets/kyushu/amagi/amagi.png",
        },
      ],
    },
  },
};

const nagasakiRailways = {
  id: "nagasaki",
  name: "長崎",
  railways: {
    nagasaki: {
      id: "nagasaki",
      name: "長崎電気軌道",
      icon: "assets/kyushu/nagasaki/nagasaki.png",
      railway: [
        {
          id: "1",
          name: "1系統",
          icon: "assets/kyushu/nagasaki/1.svg",
        },
        {
          id: "3",
          name: "3系統",
          icon: "assets/kyushu/nagasaki/3.svg",
        },
        {
          id: "4",
          name: "4系統",
          icon: "assets/kyushu/nagasaki/4.svg",
        },
        {
          id: "5",
          name: "5系統",
          icon: "assets/kyushu/nagasaki/5.svg",
        },
      ],
    },
    shimatetsu: {
      id: "shimatetsu",
      name: "島原鉄道島原鉄道線",
      icon: "assets/kyushu/shimatetsu/shimatetsu.svg",
      railway: [
        {
          id: "shimatetsu",
          name: "島原鉄道島原鉄道線",
          icon: "assets/kyushu/shimatetsu/shimatetsu.svg",
        },
      ],
    },
  },
};

const kumamotoRailways = {
  id: "kumamoto",
  name: "熊本",
  railways: {
    kumamoto: {
      id: "kumamoto",
      name: "熊本市交通局",
      icon: "assets/kyushu/kumamoto/kumamoto.jpg",
      railway: [
        {
          id: "a",
          name: "A系統",
          icon: "assets/kyushu/kumamoto/a.svg",
        },
        {
          id: "b",
          name: "B系統",
          icon: "assets/kyushu/kumamoto/b.svg",
        },
      ],
    },
    kumagawa: {
      id: "kumagawa",
      name: "くま川鉄道湯前線",
      icon: "assets/kyushu/kumagawa/kumagawa.png",
      railway: [
        {
          id: "kumagawa",
          name: "くま川鉄道湯前線",
          icon: "assets/kyushu/kumagawa/kumagawa.png",
        },
      ],
    },
    "kumamoto-dentetsu": {
      id: "kumamoto-dentetsu",
      name: "熊本電気鉄道",
      icon: "assets/kyushu/kumamoto-dentetsu/kumamoto-dentetsu.svg",
      railway: [
        {
          id: "kikuchi",
          name: "菊池線",
          icon: "assets/kyushu/kumamoto-dentetsu/kumamoto-dentetsu.svg",
        },
        {
          id: "fujisaki",
          name: "藤崎線",
          icon: "assets/kyushu/kumamoto-dentetsu/kumamoto-dentetsu.svg",
        },
      ],
    },
    "minami-aso": {
      id: "minami-aso",
      name: "南阿蘇鉄道高森線",
      icon: "assets/kyushu/minami-aso/minami-aso.png",
      railway: [
        {
          id: "minami-aso",
          name: "南阿蘇鉄道高森線",
          icon: "assets/kyushu/minami-aso/minami-aso.png",
        },
      ],
    },
  },
};

const kagoshimaRailways = {
  id: "kagoshima",
  name: "鹿児島",
  railways: {
    kagoshima: {
      id: "kagoshima",
      name: "鹿児島市交通局",
      icon: "assets/kyushu/kagoshima/kagoshima.svg",
      railway: [
        {
          id: "1",
          name: "1系統",
          icon: "assets/kyushu/kagoshima/i.svg",
        },
        {
          id: "2",
          name: "2系統",
          icon: "assets/kyushu/kagoshima/n.svg",
        },
      ],
    },
  },
};
const okinawaRailways = {
  id: "okinawa",
  name: "沖縄",
  railways: {
    "okinawa-monorail": {
      id: "okinawa-monorail",
      name: "沖縄都市モノレール線",
      icon: "assets/kyushu/okinawa-monorail/yuirail.svg",
      railway: [
        {
          id: "okinawa-monorail",
          name: "沖縄都市モノレール線",
          icon: "assets/kyushu/okinawa-monorail/yuirail.svg",
        },
      ],
    },
  },
};

const kyushuRailwaysList = [
  kyushuRailways,
  fukuokaRailways,
  nagasakiRailways,
  kumamotoRailways,
  kagoshimaRailways,
  okinawaRailways,
];
/*
for (const prefecture of kyushuRailwaysList) {
  if (prefecture.id === "kyushu") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "kyushu");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
*/
