const ktxStations = {
  "ktx-gyeongbu": [
    { name: "幸信", en: "Haengsin", orig: "행신역", id: "haengsin" },
    { name: "ソウル", en: "Seoul", orig: "서울역", id: "seoul" },
    { name: "光明", en: "Gwangmyeong", orig: "광명역", id: "gwangmyeong" },
    {
      name: "天安牙山",
      en: "Cheonan-Asan",
      orig: "천안아산역",
      id: "cheonan-asan",
    },
    { name: "五松", en: "Osong", orig: "오송역", id: "osong" },
    { name: "大田", en: "Daejeon", orig: "대전역", id: "daejeon" },
    {
      name: "金泉（亀尾）",
      en: "Gimcheon(Gumi)",
      orig: "김천(구미)역",
      id: "gimcheon-gumi",
    },
    { name: "西大邱", en: "Seodaegu", orig: "서대구역", id: "seodaegu" },
    { name: "東大邱", en: "Dongdaegu", orig: "동대구역", id: "dongdaegu" },
    { name: "慶州", en: "Gyeongju", orig: "경주역", id: "gyeongju" },
    { name: "蔚山", en: "Ulsan", orig: "울산역", id: "ulsan" },
    { name: "釜山", en: "Busan", orig: "부산역", id: "busan" },
  ],
  "ktx-honam": [
    { name: "五松", en: "Osong", orig: "오송역", id: "osong" },
    { name: "公州", en: "Gongju", orig: "공주역", id: "gongju" },
    { name: "益山", en: "Iksan", orig: "익산역", id: "iksan" },
    { name: "井邑", en: "Jeongeup", orig: "정읍역", id: "jeongeup" },
    {
      name: "光州松汀",
      en: "Gwangju Songjeong",
      orig: "광주송정역",
      id: "gwangju-songjeong",
    },
  ],
  "ktx-suseo": [
    { name: "水西", en: "Suseo", orig: "수서역", id: "suseo" },
    { name: "東灘", en: "Dongtan", orig: "동탄역", id: "dongtan" },
    {
      name: "平沢芝制",
      en: "PyeongtaekJije",
      orig: "평택지제역",
      id: "pyeongtaekjije",
    },
    {
      name: "天安牙山",
      en: "Cheonan-Asan",
      orig: "천안아산역",
      id: "cheonanasan",
    },
  ],
};

generateRailwayStations(ktxStations, "ktx", "korea");
