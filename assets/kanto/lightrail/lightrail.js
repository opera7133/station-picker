const lightRailStations = [
  { name: "宇都宮駅東口", id: "utsunomiya-eki-higashiguchi" },
  { name: "東宿郷", id: "higashi-shukugo" },
  { name: "駅東公園前", id: "eki-higashi-koen-mae" },
  { name: "峰", id: "mine" },
  { name: "陽東3丁目", id: "yoto-3-chome" },
  { name: "宇都宮大学陽東キャンパス", id: "utsunomiya-daigaku-yoto-campus" },
  { name: "平石", id: "hiraishi" },
  { name: "平石中央小学校前", id: "hiraishi-chuo-shogakko-mae" },
  { name: "飛山城跡", id: "tobiyama-jo-ato" },
  { name: "清陵高校前", id: "seiryo-koko-mae" },
  { name: "清原地区市民センター前", id: "kiyohara-chiku-shimin-center-mae" },
  { name: "グリーンスタジアム前", id: "green-stadium-mae" },
  { name: "ゆいの杜西", id: "yuinomori-nishi" },
  { name: "ゆいの杜中央", id: "yuinomori-chuo" },
  { name: "ゆいの杜東", id: "yuinomori-higashi" },
  { name: "芳賀台", id: "hagadai" },
  {
    name: "波賀町工業団地管理センター前",
    id: "haga-machi-kogyo-danchi-kanri-center-mae",
  },
  { name: "かしの森公園前", id: "kashi-no-mori-koen-mae" },
  { name: "芳賀・高根沢工業団地", id: "haga-takanezawa-kogyo-danchi" },
];

generateStations(lightRailStations, "lightrail", "tochigi");
