const newTaipeiMetroStations = {
  "new-taipei-metro-v-mountain": [
    { name: "紅樹林", en: "Hongshulin", orig: "紅樹林站", id: "hongshulin" },
    { name: "竿蓁林", en: "Ganzhenlin", orig: "竿蓁林站", id: "ganzhenlin" },
    {
      name: "淡金鄧公",
      en: "Danjin Denggong",
      orig: "淡金鄧公站",
      id: "danjin-denggong",
    },
    {
      name: "淡江大学",
      en: "Tamkang University",
      orig: "淡江大學站",
      id: "tamkang-university",
    },
    {
      name: "淡金北新",
      en: "Danjin Beixin",
      orig: "淡金北新站",
      id: "danjin-beixin",
    },
    {
      name: "新市一路",
      en: "Xinshi 1st Rd.",
      orig: "新市一路站",
      id: "xinshi-1st-rd",
    },
    {
      name: "淡水行政中心",
      en: "Tamsui District Office",
      orig: "淡水行政中心站",
      id: "tamsui-district-office",
    },
    {
      name: "浜海義山",
      en: "Binhai Yishan",
      orig: "濱海義山站",
      id: "binhai-yishan",
    },
    {
      name: "浜海沙崙",
      en: "Binhai Shalun",
      orig: "濱海沙崙站",
      id: "binhai-shalun",
    },
    {
      name: "淡海新市鎮",
      en: "Danhai New Town",
      orig: "淡海新市鎮站",
      id: "danhai-new-town",
    },
    { name: "崁頂", en: "Kanding", orig: "崁頂站", id: "kanding" },
  ],
  "new-taipei-metro-v-seaside": [
    {
      name: "淡水漁人碼頭",
      en: "Tamsui Fisherman's Wharf",
      orig: "淡水漁人碼頭站",
      id: "tamsui-fishermans-wharf",
    },
    { name: "沙崙", en: "Shalun", orig: "沙崙站", id: "shalun" },
    {
      name: "台北海洋大学",
      en: "Taipei College of Maritime Technology",
      orig: "台北海洋大學站",
      id: "taipei-college-of-maritime-technology",
    },
  ],
  "new-taipei-metro-k": [
    { name: "双城", en: "Shuangcheng", orig: "雙城站", id: "shuangcheng" },
    {
      name: "玫瑰中国城",
      en: "Rose China Town",
      orig: "玫瑰中國城站",
      id: "rose-china-town",
    },
    {
      name: "台北小城",
      en: "Taipei Xiaocheng",
      orig: "台北小城站",
      id: "taipei-xiaocheng",
    },
    {
      name: "耕莘安康院区",
      en: "Cardinal Tien Hospital Ankang Branch",
      orig: "耕莘安康院區站",
      id: "cardinal-tien-hospital-ankang-branch",
    },
    {
      name: "景文科大",
      en: "Jinwen University of Science and Technology",
      orig: "景文科大站",
      id: "jinwen-university-of-science-and-technology",
    },
    { name: "安康", en: "Ankang", orig: "安康站", id: "ankang" },
    {
      name: "陽光運動公園",
      en: "Sunshine Sports Park",
      orig: "陽光運動公園站",
      id: "sunshine-sports-park",
    },
    {
      name: "新和国小",
      en: "Xinhe Elementary School",
      orig: "新和國小",
      id: "xinhe-elementary-school",
    },
    { name: "十四張", en: "Shisizhang", orig: "十四張站", id: "shisizhang" },
  ],
  "new-taipei-metro-y": [
    { name: "大坪林", en: "Dapinglin", orig: "大坪林站", id: "dapinglin" },
    { name: "十四張", en: "Shisizhang", orig: "十四張站", id: "shisizhang" },
    {
      name: "秀朗橋",
      en: "Xiulang Bridge",
      orig: "秀朗橋站",
      id: "xiulang-bridge",
    },
    { name: "景平", en: "Jingping", orig: "景平站", id: "jingping" },
    { name: "景安", en: "Jing'an", orig: "景安站", id: "jing'an" },
    { name: "中和", en: "Zhonghe", orig: "中和站", id: "zhonghe" },
    { name: "橋和", en: "Qiaohe", orig: "橋和站", id: "qiaohe" },
    { name: "中原", en: "Zhongyuan", orig: "中原站", id: "zhongyuan" },
    { name: "板新", en: "Banxin", orig: "板新站", id: "banxin" },
    { name: "板橋", en: "Banqiao", orig: "板橋站", id: "banqiao" },
    {
      name: "新埔民生",
      en: "Xinpu Minsheng",
      orig: "新埔民生站",
      id: "xinpu-minsheng",
    },
    {
      name: "頭前庄",
      en: "Touqianzhuang",
      orig: "頭前庄站",
      id: "touqianzhuang",
    },
    { name: "幸福", en: "Xingfu", orig: "幸福站", id: "xingfu" },
    {
      name: "新北産業園区",
      en: "New Taipei Industrial Park",
      orig: "新北產業園區站",
      id: "new-taipei-industrial-park",
    },
  ],
};

generateRailwayStations(newTaipeiMetroStations, "metro", "taipei");
