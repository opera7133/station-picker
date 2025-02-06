const taiwanRailways = {
  id: "taiwan",
  name: "台湾",
  railways: {
    tra: {
      id: "tra",
      name: "台湾鉄路管理局",
      icon: "assets/oversea/taiwan/tra/tra.svg",
      railway: [
        {
          id: "main-north",
          name: "縦貫線 (北段)",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "main-coastal",
          name: "縦貫線 (海岸線)",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "main-taichung",
          name: "縦貫線 (台中線)",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "main-chengzhui",
          name: "縦貫線 (成追線)",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "main-south",
          name: "縦貫線 (南段)",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "pingtung",
          name: "屏東線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "yilan",
          name: "宜蘭線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "north-link",
          name: "北廻線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "taitung",
          name: "台東線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "south-link",
          name: "南廻線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        // 以下は支線
        {
          id: "pingxi",
          name: "平溪線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "shenao",
          name: "深澳線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "neiwan",
          name: "内湾線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "liujia",
          name: "六家線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "jiji",
          name: "集集線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
        {
          id: "shalun",
          name: "沙崙線",
          icon: "assets/oversea/taiwan/tra/tra.svg",
        },
      ],
    },
    thsr: {
      id: "thsr",
      name: "台湾高速鉄道",
      icon: "assets/oversea/taiwan/thsr/thsr.svg",
      railway: [
        {
          id: "thsr",
          name: "台湾高速鉄道",
          icon: "assets/oversea/taiwan/thsr/thsr.svg",
        },
      ],
    },
  },
};

const taipeiRailways = {
  id: "taipei",
  name: "台北",
  railways: {
    "taipei-metro": {
      id: "taipei-metro",
      name: "台北捷運",
      icon: "assets/oversea/taiwan/taipei-metro/metro.svg",
      railway: [
        {
          id: "br",
          name: "文湖線",
          icon: "assets/oversea/taiwan/taipei-metro/br.svg",
        },
        {
          id: "r",
          name: "淡水信義線",
          icon: "assets/oversea/taiwan/taipei-metro/r.svg",
        },
        {
          id: "r-xinbeitou",
          name: "新北投支線",
          icon: "assets/oversea/taiwan/taipei-metro/r.svg",
        },
        {
          id: "g",
          name: "松山新店線",
          icon: "assets/oversea/taiwan/taipei-metro/g.svg",
        },
        {
          id: "g-xiaobitan",
          name: "小碧潭支線",
          icon: "assets/oversea/taiwan/taipei-metro/g.svg",
        },
        {
          id: "o",
          name: "中和新蘆線",
          icon: "assets/oversea/taiwan/taipei-metro/o.svg",
        },
        {
          id: "o-luzhou",
          name: "蘆洲線",
          icon: "assets/oversea/taiwan/taipei-metro/o.svg",
        },
        {
          id: "bl",
          name: "板南線",
          icon: "assets/oversea/taiwan/taipei-metro/bl.svg",
        },
      ],
    },
    "taoyuan-metro": {
      id: "taoyuan-metro",
      name: "桃園機場捷運",
      icon: "assets/oversea/taiwan/taoyuan-metro/metro.svg",
      railway: [
        {
          id: "taoyuan-metro",
          name: "桃園機場捷運",
          icon: "assets/oversea/taiwan/taoyuan-metro/metro.svg",
        },
      ],
    },
    "new-taipei-metro": {
      id: "new-taipei-metro",
      name: "新北捷運",
      icon: "assets/oversea/taiwan/new-taipei-metro/metro.svg",
      railway: [
        {
          id: "v-mountain",
          name: "淡海軽軌緑山線",
          icon: "assets/oversea/taiwan/new-taipei-metro/v.svg",
        },
        {
          id: "v-seaside",
          name: "淡海軽軌藍海線",
          icon: "assets/oversea/taiwan/new-taipei-metro/v.svg",
        },
        {
          id: "k",
          name: "安坑軽軌",
          icon: "assets/oversea/taiwan/new-taipei-metro/k.svg",
        },
        {
          id: "y",
          name: "環状線",
          icon: "assets/oversea/taiwan/taipei-metro/y.svg",
        },
      ],
    },
  },
};

const taichungRailways = {
  id: "taichung",
  name: "台中",
  railways: {
    "taichung-metro": {
      id: "taichung-metro",
      name: "台中捷運緑線",
      icon: "assets/oversea/taiwan/taichung-metro/metro.svg",
      railway: [
        {
          id: "green",
          name: "綠線",
          icon: "assets/oversea/taiwan/taichung-metro/green.svg",
        },
      ],
    },
  },
};

const kaohsiungRailways = {
  id: "kaohsiung",
  name: "高雄",
  railways: {
    krtc: {
      id: "krtc",
      name: "高雄捷運",
      icon: "assets/oversea/taiwan/krtc/metro.svg",
      railway: [
        { id: "red", name: "紅線", icon: "assets/oversea/taiwan/krtc/red.svg" },
        {
          id: "orange",
          name: "橙線",
          icon: "assets/oversea/taiwan/krtc/orange.svg",
        },
        {
          id: "circular",
          name: "環状線",
          icon: "assets/oversea/taiwan/krtc/circular.svg",
        },
      ],
    },
  },
};

const taiwanRailwaysList = [
  taiwanRailways,
  taipeiRailways,
  taichungRailways,
  kaohsiungRailways,
];
