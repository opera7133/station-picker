const sendaiMetroStations = {
  "sendai-metro-namboku": [
    { name: "泉中央", id: "izumi-chuo" },
    { name: "八乙女", id: "yaotome" },
    { name: "黒松", id: "kuromatsu" },
    { name: "旭ヶ丘", id: "asahigaoka" },
    { name: "台原", id: "dainohara" },
    { name: "北仙台", id: "kita-sendai" },
    { name: "北四番丁", id: "kita-yonbancho" },
    { name: "勾当台公園", id: "kotodai-koen" },
    { name: "広瀬通", id: "hirose-dori" },
    { name: "仙台", id: "sendai" },
    { name: "五橋", id: "itsutsubashi" },
    { name: "愛宕橋", id: "atagobashi" },
    { name: "河原町", id: "kawara-machi" },
    { name: "長町一丁目", id: "nagamachi-icchome" },
    { name: "長町", id: "nagamachi" },
    { name: "長町南", id: "nagamachi-minami" },
    { name: "富沢", id: "tomizawa" },
  ],
  "sendai-metro-tozai": [
    { name: "八木山動物公園", id: "yagiyama-dobutsu-koen" },
    { name: "青葉山", id: "aobayama" },
    { name: "川内", id: "kawauchi" },
    { name: "国際センター", id: "kokusai-center" },
    { name: "大町西公園", id: "omachi-nishi-koen" },
    { name: "青葉通一番町", id: "aoba-dori-ichiban-cho" },
    { name: "仙台", id: "sendai" },
    { name: "宮城野通", id: "miyagino-dori" },
    { name: "連坊", id: "rembo" },
    { name: "薬師堂", id: "yakushido" },
    { name: "卸町", id: "oroshi-machi" },
    { name: "六丁の目", id: "rokuchonome" },
    { name: "荒井", id: "arai" },
  ],
};

generateRailwayStations(sendaiMetroStations, "sendai-metro", "miyagi");