const keifukuStations = {
  "keifuku-arashiyama": [
    { name: "四条大宮", yomi: "しじょうおおみや", id: "shijo-omiya" },
    { name: "西院", yomi: "さい", id: "sai" },
    {
      name: "西大路三条",
      yomi: "にしおおじさんじょう",
      id: "nishioji-sanjo",
    },
    { name: "山ノ内", yomi: "やまのうち", id: "yamanouchi" },
    {
      name: "嵐電天神川",
      yomi: "らんでんてんじんがわ",
      id: "randen-tenjingawa",
    },
    { name: "蚕ノ社", yomi: "かいこのやしろ", id: "kaikonoyashiro" },
    {
      name: "太秦広隆寺",
      yomi: "うずまさこうりゅうじ",
      id: "uzumasa-koryuji",
    },
    { name: "帷子ノ辻", yomi: "かたびらのつじ", id: "katabiranotsuji" },
    { name: "有栖川", yomi: "ありすがわ", id: "arisugawa" },
    { name: "車折神社", yomi: "くるまざきじんじゃ", id: "kurumazaki-jinja" },
    { name: "鹿王院", yomi: "ろくおういん", id: "rokuoin" },
    { name: "嵐電嵯峨", yomi: "らんでんさが", id: "randen-saga" },
    { name: "嵐山", yomi: "あらしやま", id: "arashiyama" },
  ],
  "keifuku-kitano": [
    { name: "帷子ノ辻", yomi: "かたびらのつじ", id: "katabiranotsuji" },
    { name: "撮影所前", yomi: "さつえいしょまえ", id: "satsueisho-mae" },
    { name: "常盤", yomi: "ときわ", id: "tokiwa" },
    { name: "鳴滝", yomi: "なるたき", id: "narutaki" },
    { name: "宇多野", yomi: "うたの", id: "utano" },
    { name: "御室仁和寺", yomi: "おむろにんなじ", id: "omuro-ninna-ji" },
    {
      name: "等持院・立命館大学衣笠キャンパス前",
      yomi: "とうじいん・りつめいかんだいがくきぬがさきゃんぱすまえ",
      id: "tojiin-ritsumeikan-daigaku-kinugasacampus-mae",
    },
    {
      name: "北野白梅町",
      yomi: "きたのはくばいちょう",
      id: "kitano-hakubai-cho",
    },
  ],
};

generateRailwayStations(keifukuStations, "keifuku", "kyoto");
