const everlineStations = [
  { name: "器興", en: "Giheung", orig: "기흥역", id: "giheung" },
  { name: "江南大", en: "Kangnam Univ.", orig: "강남대역", id: "kangnam-univ" },
  { name: "支石", en: "Jiseok", orig: "지석역", id: "jiseok" },
  { name: "御井", en: "Eojeong", orig: "어정역", id: "eojeong" },
  { name: "東栢", en: "Dongbaek", orig: "동백역", id: "dongbaek" },
  { name: "草堂", en: "Chodang", orig: "초당역", id: "chodang" },
  { name: "三街", en: "Samga", orig: "삼가역", id: "samga" },
  {
    name: "市庁・龍仁大",
    en: "City Hall·Yongin Univ.",
    orig: "시청·용인대역",
    id: "city-hall-yongin-univ",
  },
  { name: "明知大", en: "Myongji Univ.", orig: "명지대역", id: "myongji-univ" },
  { name: "金良場", en: "Gimnyangjang", orig: "김량장역", id: "gimnyangjang" },
  {
    name: "龍仁中央市場",
    en: "Yongin Jungang Market",
    orig: "용인중앙시장역",
    id: "yongin-jungang-market",
  },
  { name: "古陳", en: "Gojin", orig: "고진역", id: "gojin" },
  { name: "洑坪", en: "Bopyeong", orig: "보평역", id: "bopyeong" },
  { name: "屯田", en: "Dunjeon", orig: "둔전역", id: "dunjeon" },
  {
    name: "前垈・エバーランド",
    en: "Jeondae·Everland",
    orig: "전대·에버랜드역",
    id: "jeondae-everland",
  },
];

generateStations(everlineStations, "everline", "seoul");
