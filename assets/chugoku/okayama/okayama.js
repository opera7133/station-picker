const okayamaStations = {
  "okayama-higashiyama": [
    { name: "岡山駅前", id: "okayama-eki-mae" },
    { name: "西側緑道公園", id: "nishigawa-ryokudo-koen" },
    { name: "柳川", id: "yanagawa" },
    { name: "城下", id: "shiroshita" },
    { name: "県庁通り", id: "kencho-dori" },
    { name: "西大寺町・岡山芸術創造劇場ハレノワ前", id: "saidaiji-cho" },
    { name: "小橋", id: "kobashi" },
    { name: "中納言", id: "chunagon" },
    { name: "門田屋敷", id: "kadota-yashiki" },
    { name: "東山・おかでんミュージアム駅", id: "higashiyama" },
  ],
  "okayama-seikibashi": [
    { name: "岡山駅前", id: "okayama-eki-mae" },
    { name: "西側緑道公園", id: "nishigawa-ryokudo-koen" },
    { name: "柳川", id: "yanagawa" },
    { name: "郵便局前", id: "yubinkyoku-mae" },
    { name: "田町", id: "tamachi" },
    { name: "新西大寺町筋", id: "shin-saidaiji-cho-suji" },
    { name: "大雲寺前", id: "daiunji-mae" },
    { name: "東中央町", id: "higashi-chuo-cho" },
    { name: "清輝橋", id: "seiki-bashi" },
  ],
};

generateRailwayStations(okayamaStations, "okayama", "okayama");
