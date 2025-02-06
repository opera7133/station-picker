const incheonMaglevStations = [
  {
    name: "仁川国際空港1ターミナル",
    en: "Incheon Int'l Airport Terminal 1",
    orig: "인천공항1터미널역",
    id: "incheon-intl-airport-terminal-1",
  },
  {
    name: "長期駐車場",
    en: "Long Term Parking",
    orig: "장기주차장역",
    id: "long-term-parking",
  },
  {
    name: "合同庁舎",
    en: "Administration Complex",
    orig: "합동청사역",
    id: "administration-complex",
  },
  {
    name: "パラダイスシティ",
    en: "Paradise City",
    orig: "파라다이스시티역",
    id: "paradise-city",
  },
  {
    name: "ウォーターパーク",
    en: "Water Park",
    orig: "워터파크역",
    id: "water-park",
  },
  { name: "龍遊", en: "Yongyu", orig: "용유역", id: "yongyu" },
];

generateStations(incheonMaglevStations, "incheon-maglev", "seoul");
