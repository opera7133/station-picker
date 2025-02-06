const sillimStations = [
  { name: "セッカン", en: "Saetgang", orig: "샛강역", id: "saetgang" },
  { name: "大方", en: "Daebang", orig: "대방역", id: "daebang" },
  {
    name: "ソウル地方兵務庁",
    en: "Seoul Regional Office of Military Manpower",
    orig: "서울지방병무청역",
    id: "seoul-regional-office-of-military-manpower",
  },
  { name: "ポラメ", en: "Boramae", orig: "보라매역", id: "boramae" },
  {
    name: "ポラメ公園",
    en: "Boramae Park",
    orig: "보라매공원역",
    id: "boramae-park",
  },
  {
    name: "ポラメ病院",
    en: "Boramae Medical Center",
    orig: "보라매병원역",
    id: "boramae-medical-center",
  },
  { name: "堂谷", en: "Danggok", orig: "당곡역", id: "danggok" },
  { name: "新林", en: "Sillim", orig: "신림역", id: "sillim" },
  { name: "書院", en: "Seowon", orig: "서원역", id: "seowon" },
  {
    name: "ソウル大ベンチャータウン",
    en: "Seoul National Univ. Venture Town",
    orig: "서울대벤처타운역",
    id: "seoul-national-univ-venture-town",
  },
  { name: "冠岳山", en: "Gwanaksan", orig: "관악산역", id: "gwanaksan" },
];

generateStations(sillimStations, "seoul-sillim", "seoul");
