const batadenStations = {
  "bataden-kitamatsue": [
    { name: "電鉄出雲市", id: "dentetsu-izumo-shi" },
    { name: "出雲科学館パークタウン前", id: "izumo-kagakukan-parktown-mae" },
    { name: "大津町", id: "otsu-machi" },
    { name: "武志", id: "takeshi" },
    { name: "川跡", id: "kawato" },
    { name: "大寺", id: "otera" },
    { name: "美談", id: "midami" },
    { name: "旅伏", id: "tabushi" },
    { name: "雲州平田", id: "unshu-hirata" },
    { name: "布崎", id: "nunosaki" },
    { name: "湖遊館新駅", id: "koyukan-shin-eki" },
    { name: "園", id: "sono" },
    { name: "一畑口", id: "ichibata-guchi" },
    { name: "伊野灘", id: "inonada" },
    { name: "津ノ森", id: "tsunomori" },
    { name: "高ノ宮", id: "takanomiya" },
    { name: "松江フォーゲルパーク", id: "matsue-vogel-park" },
    { name: "秋鹿町", id: "aika-machi" },
    { name: "長江", id: "nagae" },
    { name: "朝日ヶ丘", id: "asahigaoka" },
    { name: "松江イングリッシュガーデン前", id: "matsue-english-garden-mae" },
    { name: "松江しんじ湖温泉", id: "matsue-shinjiko-onsen" },
  ],
  "bataden-taisha": [
    { name: "川跡", id: "kawato" },
    { name: "高浜", id: "takahama" },
    { name: "遙堪", id: "yokan" },
    { name: "浜山公園北口", id: "hamayama-koen-kitaguchi" },
    { name: "出雲大社前", id: "izumo-taisha-mae" },
  ],
};

generateRailwayStations(batadenStations, "bataden", "shimane");
