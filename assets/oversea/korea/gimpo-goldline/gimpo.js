const goldlineStations = [
  { name: "陽村", en: "Yangchon", orig: "양촌역", id: "yangchon" },
  { name: "九来", en: "Gurae", orig: "구래역", id: "gurae" },
  { name: "麻山", en: "Masan", orig: "마산역", id: "masan" },
  { name: "場基", en: "Janggi", orig: "장기역", id: "janggi" },
  { name: "雲陽", en: "Unyang", orig: "운양역", id: "unyang" },
  {
    name: "傑浦北辺",
    en: "Geolpo Bukbyeon",
    orig: "걸포북변역",
    id: "geolpo-bukbyeon",
  },
  { name: "沙隅", en: "Sau", orig: "사우역", id: "sau" },
  { name: "豊舞", en: "Pungmu", orig: "풍무역", id: "pungmu" },
  { name: "高村", en: "Gochon", orig: "고촌역", id: "gochon" },
  {
    name: "金浦空港",
    en: "Gimpo Int'l Airport",
    orig: "김포공항역",
    id: "gimpo-intl-airport",
  },
];

generateStations(goldlineStations, "goldline", "seoul");
