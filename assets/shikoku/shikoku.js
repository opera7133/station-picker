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
          id: "honshi-bisan",
          name: "本四備讃線",
          icon: "assets/shikoku/jr-shikoku/shikoku.svg",
        },
        {
          id: "yosan",
          name: "予讃線（高松〜松山）",
          icon: "assets/shikoku/jr-shikoku/y.svg",
        },
        {
          id: "uchiko",
          name: "予讃線・内子線（松山〜宇和島）",
          icon: "assets/shikoku/jr-shikoku/u.svg",
        },
        {
          id: "ainoaru-yosan",
          name: "予讃線（向井原〜伊予大洲）",
          icon: "assets/shikoku/jr-shikoku/s.svg",
        },
        {
          id: "dosan-d",
          name: "土讃線（多度津〜高知）",
          icon: "assets/shikoku/jr-shikoku/d.svg",
        },
        {
          id: "dosan-k",
          name: "土讃線（高知〜窪川）",
          icon: "assets/shikoku/jr-shikoku/k.svg",
        },
        {
          id: "yodo",
          name: "予土線",
          icon: "assets/shikoku/jr-shikoku/g.svg",
        },
        {
          id: "kotoku",
          name: "高徳線",
          icon: "assets/shikoku/jr-shikoku/t.svg",
        },
        {
          id: "naruto",
          name: "鳴門線",
          icon: "assets/shikoku/jr-shikoku/n.svg",
        },
        {
          id: "tokusima",
          name: "徳島線",
          icon: "assets/shikoku/jr-shikoku/b.svg",
        },
        {
          id: "mugi",
          name: "牟岐線",
          icon: "assets/shikoku/jr-shikoku/m.svg",
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
          icon: "assets/shikoku/kotoden/k.svg",
        },
        {
          id: "nagao",
          name: "長尾線",
          icon: "assets/shikoku/kotoden/n.svg",
        },
        {
          id: "shido",
          name: "志度線",
          icon: "assets/shikoku/kotoden/s.svg",
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
          icon: "assets/shikoku/iyotetsu/yokogawara.svg",
        },
        {
          id: "gunchu",
          name: "郡中線",
          icon: "assets/shikoku/iyotetsu/gunchu.svg",
        },
        {
          id: "takahama",
          name: "高浜線",
          icon: "assets/shikoku/iyotetsu/takahama.svg",
        },
        {
          id: "1",
          name: "1系統",
          icon: "assets/shikoku/iyotetsu/1.svg",
        },
        {
          id: "2",
          name: "2系統",
          icon: "assets/shikoku/iyotetsu/2.svg",
        },
        {
          id: "3",
          name: "3系統",
          icon: "assets/shikoku/iyotetsu/3.svg",
        },
        {
          id: "5",
          name: "5系統",
          icon: "assets/shikoku/iyotetsu/5.svg",
        },
        {
          id: "6",
          name: "6系統",
          icon: "assets/shikoku/iyotetsu/6.svg",
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
          icon: "assets/shikoku/tosa-kuroshio/tk.svg",
        },
        {
          id: "sukumo",
          name: "宿毛線",
          icon: "assets/shikoku/tosa-kuroshio/tk.svg",
        },
        {
          id: "gomen-nahari",
          name: "ごめん・なはり線",
          icon: "assets/shikoku/tosa-kuroshio/gn.svg",
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
