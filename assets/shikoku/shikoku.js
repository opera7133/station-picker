const shikokuRailways = {
  id: "shikoku",
  name: "四国",
  railways: {
    "jr-shikoku": {
      id: "jr-shikoku",
      name: "JR四国",
      icon: "assets/shikoku/jr-shikoku/jr.svg",
      railway: [
        {
          id: "yosan",
          name: "予讃線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "kotoku",
          name: "高徳線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "dosan",
          name: "土讃線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "honshi-bisan",
          name: "本四備讃線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "uchiko",
          name: "内子線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "yodo",
          name: "予土線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "naruto",
          name: "鳴門線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "tokusima",
          name: "徳島線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "mugi",
          name: "牟岐線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
      ],
    },
  },
};

const kagawaRailways = {
  id: "kagawa",
  name: "香川",
  railways: {
    kotoden: {
      id: "kotoden",
      name: "高松琴平電気鉄道",
      icon: "assets/shikoku/kotoden/kotoden.svg",
      railway: [
        {
          id: "kotohira",
          name: "琴平線",
          icon: "assets/shikoku/kotoden/kotoden.svg",
        },
        {
          id: "shido",
          name: "志度線",
          icon: "assets/shikoku/kotoden/kotoden.svg",
        },
        {
          id: "nagao",
          name: "長尾線",
          icon: "assets/shikoku/kotoden/kotoden.svg",
        },
      ],
    },
  },
};

const ehimeRailways = {
  id: "ehime",
  name: "愛媛",
  railways: {
    iyotetsu: {
      id: "iyotetsu",
      name: "伊予鉄道",
      icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
      railway: [
        {
          id: "yokogawara",
          name: "横河原線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "gunchu",
          name: "郡中線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "takahama",
          name: "高浜線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "johoku",
          name: "城北線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "jonan",
          name: "城南線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "hommachi",
          name: "本町線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "otemachi",
          name: "大手町線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
        {
          id: "hanazono",
          name: "花園線",
          icon: "assets/shikoku/iyotetsu/iyotetsu.svg",
        },
      ],
    },
  },
};

const kochiRailways = {
  id: "kochi",
  name: "高知",
  railways: {
    "tosa-kuroshio": {
      id: "tosa-kuroshio",
      name: "土佐くろしお鉄道",
      icon: "assets/shikoku/tosa-kuroshio/tkt.jpg",
      railway: [
        {
          id: "nakamura",
          name: "中村線",
          icon: "assets/shikoku/tosa-kuroshio/tkt.jpg",
        },
        {
          id: "sukumo",
          name: "宿毛線",
          icon: "assets/shikoku/tosa-kuroshio/tkt.jpg",
        },
        {
          id: "gomen-nahari",
          name: "ごめん・なはり線",
          icon: "assets/shikoku/tosa-kuroshio/tkt.jpg",
        },
      ],
    },
    tosaden: {
      id: "tosaden",
      name: "とさでん交通",
      icon: "assets/shikoku/tosaden/tosaden.png",
      railway: [
        {
          id: "ino",
          name: "伊野線",
          icon: "assets/shikoku/tosaden/tosaden.png",
        },
        {
          id: "gomen",
          name: "後免線",
          icon: "assets/shikoku/tosaden/tosaden.png",
        },
        {
          id: "sambashi",
          name: "桟橋線",
          icon: "assets/shikoku/tosaden/tosaden.png",
        },
        {
          id: "ekimae",
          name: "駅前線",
          icon: "assets/shikoku/tosaden/tosaden.png",
        },
      ],
    },
  },
};

const shikokuRailwaysList = [
  shikokuRailways,
  kagawaRailways,
  ehimeRailways,
  kochiRailways,
];
/*
for (const prefecture of shikokuRailwaysList) {
  if (prefecture.id === "shikoku") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "shikoku");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}
*/
