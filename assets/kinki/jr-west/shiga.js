const jrWestShigaStations = {
  "jr-west-hokuriku": [
    { name: "敦賀", id: "tsuruga" },
    { name: "近江塩津", id: "omi-shiotsu" },
    { name: "余呉", id: "yogo" },
    { name: "木之本", id: "kinomoto" },
    { name: "高月", id: "takatsuki" },
    { name: "河毛", id: "kawake" },
    { name: "虎姫", id: "torahime" },
    { name: "長浜", id: "nagahama" },
    { name: "田村", id: "tamura" },
    { name: "坂田", id: "sakata" },
    { name: "米原", id: "maibara" },
  ],
  "jr-west-biwako": [
    { name: "米原", id: "maibara" },
    { name: "彦根", id: "hikone" },
    { name: "南彦根", id: "minami-hikone" },
    { name: "河瀬", id: "kawase" },
    { name: "稲枝", id: "inae" },
    { name: "能登川", id: "notogawa" },
    { name: "安土", id: "azuchi" },
    { name: "近江八幡", id: "omihachiman" },
    { name: "篠原", id: "shinohara" },
    { name: "野洲", id: "yasu" },
    { name: "守山", id: "moriyama" },
    { name: "栗東", id: "ritto" },
    { name: "草津", id: "kusatsu" },
    { name: "南草津", id: "minami-kusatsu" },
    { name: "瀬田", id: "seta" },
    { name: "石山", id: "ishiyama" },
    { name: "膳所", id: "zeze" },
    { name: "大津", id: "otsu" },
    { name: "山科", id: "yamashina" },
    { name: "京都", id: "kyoto" },
  ],
  "jr-west-kosai": [
    { name: "近江塩津", id: "omi-shiotsu" },
    { name: "永原", id: "nagahara" },
    { name: "マキノ", id: "makino" },
    { name: "近江中庄", id: "omi-nakasho" },
    { name: "近江今津", id: "omi-imazu" },
    { name: "新旭", id: "shin-asahi" },
    { name: "安曇川", id: "adogawa" },
    { name: "近江高島", id: "omi-takashima" },
    { name: "北小松", id: "kita-komatsu" },
    { name: "近江舞子", id: "omi-maiko" },
    { name: "比良", id: "hira" },
    { name: "志賀", id: "shiga" },
    { name: "蓬莱", id: "horai" },
    { name: "和邇", id: "wani" },
    { name: "小野", id: "ono" },
    { name: "堅田", id: "katata" },
    { name: "おごと温泉", id: "ogotoonsen" },
    { name: "比叡山坂本", id: "hieizan-sakamoto" },
    { name: "唐崎", id: "karasaki" },
    { name: "大津京", id: "otsukyo" },
    { name: "山科", id: "yamashina" },
  ],
  "jr-west-kusatsu": [
    { name: "柘植", id: "tsuge" },
    { name: "油日", id: "aburahi" },
    { name: "甲賀", id: "koka" },
    { name: "寺庄", id: "terasho" },
    { name: "甲南", id: "konan" },
    { name: "貴生川", id: "kibukawa" },
    { name: "三雲", id: "mikumo" },
    { name: "甲西", id: "kosei" },
    { name: "石部", id: "ishibe" },
    { name: "手原", id: "tehara" },
    { name: "草津", id: "kusatsu" },
  ],
};

generateRailwayStations(jrWestShigaStations, "jr-west", "kinki");
