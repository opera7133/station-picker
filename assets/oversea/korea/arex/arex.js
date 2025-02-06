const arexStations = [
  { name: "ソウル", en: "Seoul", orig: "서울역", id: "seoul" },
  { name: "孔徳", en: "Gongdeok", orig: "공덕역", id: "gongdeok" },
  {
    name: "弘大入口",
    en: "Hongik Univ.",
    orig: "홍대입구역",
    id: "hongik-univ",
  },
  {
    name: "デジタルメディアシティ",
    en: "Digital Media City",
    orig: "디지털미디어시티",
    id: "digital-media-city",
  },
  { name: "麻谷ナル", en: "Magongnaru", orig: "마곡나루역", id: "magongnaru" },
  {
    name: "金浦空港",
    en: "Gimpo Int'l Airport",
    orig: "김포공항",
    id: "gimpo-intl-airport",
  },
  { name: "桂陽", en: "Gyeyang", orig: "계양역", id: "gyeyang" },
  { name: "黔岩", en: "Geomam", orig: "검암역", id: "geomam" },
  {
    name: "青羅国際都市",
    en: "Cheongna Int'l City",
    orig: "청라국제도시역",
    id: "cheongna-intl-city",
  },
  { name: "永宗", en: "Yeongjong", orig: "영종역", id: "yeongjong" },
  { name: "雲西", en: "Unseo", orig: "운서역", id: "unseo" },
  {
    name: "空港貨物ターミナル",
    en: "Incheon Int'l Airport Cargo Terminal",
    orig: "공항화물청사역",
    id: "incheon-intl-airport-cargo-terminal",
  },
  {
    name: "仁川国際空港1ターミナル",
    en: "Incheon Int'l Airport Terminal 1",
    orig: "인천공항1터미널역",
    id: "incheon-intl-airport-terminal-1",
  },
  {
    name: "仁川国際空港2ターミナル",
    en: "Incheon Int'l Airport Terminal 2",
    orig: "인천공항2터미널역",
    id: "incheon-intl-airport-terminal-2",
  },
];

generateStations(arexStations, "arex", "seoul");
