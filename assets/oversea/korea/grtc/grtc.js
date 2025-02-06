const grtcStations = [
  { name: "鹿洞", en: "Nokdong", orig: "녹동역", id: "nokdong" },
  { name: "所台", en: "Sotae", orig: "소태역", id: "sotae" },
  {
    name: "鶴洞・証心寺入口",
    en: "Hakdong, Jeungsimsa",
    orig: "학동·증심사입구역",
    id: "hakdong-jeungsimsa",
  },
  { name: "南光州", en: "Namgwangju", orig: "남광주역", id: "namgwangju" },
  {
    name: "文化殿堂",
    en: "Culture Complex",
    orig: "문화전당역",
    id: "culture-complex",
  },
  {
    name: "錦南路4街",
    en: "Geumnamno 4(sa)-ga",
    orig: "금남로4가역",
    id: "geumnamno-4-ga",
  },
  {
    name: "錦南路5街",
    en: "Geumnamno 5(o)-ga",
    orig: "금남로5가역",
    id: "geumnamno-5-ga",
  },
  {
    name: "良洞市場",
    en: "Yangdong Market",
    orig: "양동시장역",
    id: "yangdong-market",
  },
  { name: "トルゴゲ", en: "Dolgogae", orig: "돌고개역", id: "dolgogae" },
  { name: "農城", en: "Nongseong", orig: "농성역", id: "nongseong" },
  { name: "花亭", en: "Hwajeong", orig: "화정역", id: "hwajeong" },
  { name: "双村", en: "Ssangchon", orig: "쌍촌역", id: "ssangchon" },
  { name: "雲泉", en: "Uncheon", orig: "운천역", id: "uncheon" },
  { name: "尚武", en: "Sangmu", orig: "상무역", id: "sangmu" },
  {
    name: "金大中コンベンションセンター",
    en: "Kim Daejung Convention Center",
    orig: "김대중컨벤션센터역",
    id: "kim-daejung-convention-center",
  },
  { name: "空港", en: "Airport", orig: "공항역", id: "airport" },
  {
    name: "松汀公園",
    en: "Songjeong Park",
    orig: "송정공원역",
    id: "songjeong-park",
  },
  {
    name: "光州松汀駅",
    en: "Gwangju Songjeong Station",
    orig: "광주송정역",
    id: "gwangju-songjeong-station",
  },
  { name: "道山", en: "Dosan", orig: "도산역", id: "dosan" },
  { name: "平洞", en: "Pyeongdong", orig: "평동역", id: "pyeongdong" },
];

generateStations(grtcStations, "grtc", "gwangju");
