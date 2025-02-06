const shinbundangStations = [
  { name: "新沙", en: "Sinsa", orig: "신사역", id: "sinsa" },
  { name: "論峴", en: "Nonhyeon", orig: "논현역", id: "nonhyeon" },
  { name: "新論峴", en: "Sinnonhyeon", orig: "신논현역", id: "sinnonhyeon" },
  { name: "江南", en: "Gangnam", orig: "강남역", id: "gangnam" },
  { name: "良才", en: "Yangjae", orig: "양재역", id: "yangjae" },
  {
    name: "良才市民の森",
    en: "Yangjae Citizen's Forest",
    orig: "양재시민의숲역",
    id: "yangjae-citizen-s-forest",
  },
  {
    name: "清渓山入口",
    en: "Cheonggyesan",
    orig: "청계산입구역",
    id: "cheonggyesan-entrance",
  },
  { name: "板橋", en: "Pangyo", orig: "판교역", id: "pangyo" },
  { name: "亭子", en: "Jeongja", orig: "정자역", id: "jeongja" },
  { name: "美金", en: "Migeum", orig: "미금역", id: "migeum" },
  { name: "東川", en: "Dongcheon", orig: "동천역", id: "dongcheon" },
  {
    name: "水枝区庁",
    en: "Suji-gu Office",
    orig: "수지구청역",
    id: "suji-gu-office",
  },
  { name: "星福", en: "Seongbok", orig: "성복역", id: "seongbok" },
  { name: "上峴", en: "Sanghyeon", orig: "상현역", id: "sanghyeon" },
  {
    name: "光教中央",
    en: "Gwanggyo Jungang",
    orig: "광교중앙역",
    id: "gwanggyo-jungang",
  },
  { name: "光教", en: "Gwanggyo", orig: "광교역", id: "gwanggyo" },
];

generateStations(shinbundangStations, "shinbundang", "seoul");
