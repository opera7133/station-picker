const traOtherStations = {
  "tra-pingxi": [
    {
      name: "三貂嶺",
      en: "Sandiaoling",
      orig: "三貂嶺車站",
      id: "sandiaoling",
    },
    { name: "大華", en: "Dahua", orig: "大華車站", id: "dahua" },
    { name: "十分", en: "Shifen", orig: "十分車站", id: "shifen" },
    { name: "望古", en: "Wanggu", orig: "望古車站", id: "wanggu" },
    { name: "嶺脚", en: "Lingjiao", orig: "嶺腳車站", id: "lingjiao" },
    { name: "平渓", en: "Pingxi", orig: "平溪車站", id: "pingxi" },
    { name: "菁桐", en: "Jingtong", orig: "菁桐車站", id: "jingtong" },
  ],
  "tra-shenao": [
    { name: "瑞芳", en: "Ruifang", orig: "瑞芳車站", id: "ruifang" },
    { name: "海科館", en: "Haikeguan", orig: "海科館車站", id: "haikeguan" },
    { name: "八斗子", en: "Badouzi", orig: "八斗子車站", id: "badouzi" },
  ],
  "tra-neiwan": [
    { name: "新竹", en: "Hsinchu", orig: "新竹車站", id: "hsinchu" },
    {
      name: "北新竹",
      en: "North Hsinchu",
      orig: "北新竹車站",
      id: "north-hsinchu",
    },
    { name: "千甲", en: "Qianjia", orig: "千甲車站", id: "qianjia" },
    { name: "新荘", en: "Xinzhuang", orig: "新莊車站", id: "xinzhuang" },
    { name: "竹中", en: "Zhuzhong", orig: "竹中車站", id: "zhuzhong" },
    { name: "上員", en: "Shangyuan", orig: "上員車站", id: "shangyuan" },
    { name: "栄華", en: "Ronghua", orig: "榮華車站", id: "ronghua" },
    { name: "竹東", en: "Zhudong", orig: "竹東車站", id: "zhudong" },
    { name: "横山", en: "Hengshan", orig: "橫山車站", id: "hengshan" },
    { name: "九讃頭", en: "Jiuzantou", orig: "九讚頭車站", id: "jiuzantou" },
    { name: "合興", en: "Hexing", orig: "合興車站", id: "hexing" },
    { name: "富貴", en: "Fugui", orig: "富貴車站", id: "fugui" },
    { name: "内湾", en: "Neiwan", orig: "內灣車站", id: "neiwan" },
  ],
  "tra-liujia": [
    { name: "竹中", en: "Zhuzhong", orig: "竹中車站", id: "zhuzhong" },
    { name: "六家", en: "Liujia", orig: "六家車站", id: "liujia" },
  ],
  "tra-jiji": [
    { name: "二水", en: "Ershui", orig: "二水車站", id: "ershui" },
    { name: "源泉", en: "Yuanquan", orig: "源泉車站", id: "yuanquan" },
    { name: "濁水", en: "Zhuoshui", orig: "濁水車站", id: "zhuoshui" },
    { name: "龍泉", en: "Longquan", orig: "龍泉車站", id: "longquan" },
    { name: "集集", en: "Jiji", orig: "集集車站", id: "jiji" },
    { name: "水里", en: "Shuili", orig: "水里車站", id: "shuili" },
    { name: "車埕", en: "Checheng", orig: "車埕車站", id: "checheng" },
  ],
  "tra-shalun": [
    { name: "中洲", en: "Zhongzhou", orig: "中洲車站", id: "zhongzhou" },
    {
      name: "長栄大学",
      en: "Chang Jung Christian University",
      orig: "長榮大學車站",
      id: "chang-jung-christian-university",
    },
    { name: "沙崙", en: "Shalun", orig: "沙崙車站", id: "shalun" },
  ],
};

generateRailwayStations(traOtherStations, "tra", "taiwan");
