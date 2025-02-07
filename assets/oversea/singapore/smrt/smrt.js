const smrtStations = {
  "smrt-north-south": [
    {
      name: "ジュロン・イースト",
      en: "Jurong East",
      orig: "裕廊东站",
      id: "jurong-east",
    },
    {
      name: "ブキ・バトック",
      en: "Bukit Batok",
      orig: "武吉巴督站",
      id: "bukit-batok",
    },
    {
      name: "ブキ・ゴンバック",
      en: "Bukit Gombak",
      orig: "武吉甘柏站",
      id: "bukit-gombak",
    },
    {
      name: "ブリックランド",
      en: "Brickland",
      orig: "红砖站",
      id: "brickland",
    },
    {
      name: "チョア・チュー・カン",
      en: "Choa Chu Kang",
      orig: "蔡厝港站",
      id: "choa-chu-kang",
    },
    { name: "ユー・ティー", en: "Yew Tee", orig: "油池站", id: "yew-tee" },
    {
      name: "スンガイ・カドゥット",
      en: "Sungei Kadut",
      orig: "双溪加株站",
      id: "sungai-kadut",
    },
    { name: "クランジ", en: "Kranji", orig: "克兰芝站", id: "kranji" },
    { name: "マルシリン", en: "Marsiling", orig: "马西岭站", id: "marsiling" },
    { name: "ウッドランズ", en: "Woodlands", orig: "兀兰站", id: "woodlands" },
    {
      name: "アドミラルティ",
      en: "Admiralty",
      orig: "海军部站",
      id: "admiralty",
    },
    { name: "センバワン", en: "Sembawang", orig: "三巴旺站", id: "sembawang" },
    { name: "キャンベラ", en: "Canberra", orig: "坎贝拉站", id: "canberra" },
    { name: "イーシュン", en: "Yishun", orig: "义顺站", id: "yishun" },
    { name: "カーティブ", en: "Khatib", orig: "卡迪站", id: "khatib" },
    {
      name: "ヨー・チュー・カン",
      en: "Yio Chu Kang",
      orig: "杨厝港站",
      id: "yio-chu-kang",
    },
    {
      name: "アン・モ・キオ",
      en: "Ang Mo Kio",
      orig: "宏茂桥站",
      id: "ang-mo-kio",
    },
    { name: "ビシャン", en: "Bishan", orig: "碧山站", id: "bishan" },
    { name: "ブラッデル", en: "Braddell", orig: "布莱德站", id: "braddell" },
    { name: "トア・パヨ", en: "Toa Payoh", orig: "大巴窑站", id: "toa-payoh" },
    { name: "ノベナ", en: "Novena", orig: "诺维娜站", id: "novena" },
    { name: "ニュートン", en: "Newton", orig: "纽顿站", id: "newton" },
    { name: "オーチャード", en: "Orchard", orig: "乌节站", id: "orchard" },
    { name: "サマセット", en: "Somerset", orig: "索美塞站", id: "somerset" },
    {
      name: "ドビー・ゴート",
      en: "Dhoby Ghaut",
      orig: "多美歌站",
      id: "dhoby-ghaut",
    },
    {
      name: "シティホール",
      en: "City Hall",
      orig: "政府大厦站",
      id: "city-hall",
    },
    {
      name: "ラッフルズ・プレイス",
      en: "Raffles Place",
      orig: "莱佛士坊站",
      id: "raffles-place",
    },
    {
      name: "マリーナ・ベイ",
      en: "Marina Bay",
      orig: "滨海湾站",
      id: "marina-bay",
    },
    {
      name: "マリーナ・サウス・ピア",
      en: "Marina South Pier",
      orig: "滨海南码头站",
      id: "marina-south-pier",
    },
  ],
  "smrt-east-west": [
    {
      name: "パシール・リス",
      en: "Pasir Ris",
      orig: "巴西立站",
      id: "pasir-ris",
    },
    { name: "タンピネス", en: "Tampines", orig: "淡滨尼站", id: "tampines" },
    { name: "シメイ", en: "Simei", orig: "四美站", id: "simei" },
    {
      name: "タナ・メラ",
      en: "Tanah Merah",
      orig: "丹那美拉站",
      id: "tanah-merah",
    },
    { name: "ベドック", en: "Bedok", orig: "勿洛站", id: "bedok" },
    {
      name: "ケンバンガン",
      en: "Kembangan",
      orig: "景万岸站",
      id: "kembangan",
    },
    { name: "ユーノス", en: "Eunos", orig: "友诺士站", id: "eunos" },
    {
      name: "パヤ・レバー",
      en: "Paya Lebar",
      orig: "巴耶利峇站",
      id: "paya-lebar",
    },
    {
      name: "アルジュニード",
      en: "Aljunied",
      orig: "阿裕尼站",
      id: "aljunied",
    },
    { name: "カラン", en: "Kallang", orig: "加冷站", id: "kallang" },
    { name: "ラベンダー", en: "Lavender", orig: "劳明达站", id: "lavender" },
    { name: "ブギス", en: "Bugis", orig: "武吉士站", id: "bugis" },
    {
      name: "シティ・ホール",
      en: "City Hall",
      orig: "政府大厦站",
      id: "city-hall",
    },
    {
      name: "ラッフルズ・プレイス",
      en: "Raffles Place",
      orig: "莱佛士坊站",
      id: "raffles-place",
    },
    {
      name: "タンジョン・パガー",
      en: "Tanjong Pagar",
      orig: "丹戎巴葛站",
      id: "tanjong-pagar",
    },
    {
      name: "アウトラム・パーク",
      en: "Outram Park",
      orig: "欧南园站",
      id: "outram-park",
    },
    {
      name: "ティオン・バル",
      en: "Tiong Bahru",
      orig: "中峇鲁站",
      id: "tiong-bahru",
    },
    { name: "レッドヒル", en: "Redhill", orig: "红山站", id: "redhill" },
    {
      name: "クイーンズタウン",
      en: "Queenstown",
      orig: "女皇镇站",
      id: "queenstown",
    },
    {
      name: "コモンウェルス",
      en: "Commonwealth",
      orig: "联邦站",
      id: "commonwealth",
    },
    {
      name: "ブオナ・ヴィスタ",
      en: "Buona Vista",
      orig: "波那维斯达站",
      id: "buona-vista",
    },
    { name: "ドーヴァー", en: "Dover", orig: "杜佛站", id: "dover" },
    { name: "クレメンティ", en: "Clementi", orig: "金文泰站", id: "clementi" },
    {
      name: "ジュロン・イースト",
      en: "Jurong East",
      orig: "裕廊东站",
      id: "jurong-east",
    },
    {
      name: "チャイニーズ・ガーデン",
      en: "Chinese Garden",
      orig: "裕华园站",
      id: "chinese-garden",
    },
    { name: "レイクサイド", en: "Lakeside", orig: "湖畔站", id: "lakeside" },
    { name: "ブーン・レイ", en: "Boon Lay", orig: "文礼站", id: "boon-lay" },
    { name: "パイオニア", en: "Pioneer", orig: "先驱站", id: "pioneer" },
    { name: "ジュー・クーン", en: "Joo Koon", orig: "裕群站", id: "joo-koon" },
    {
      name: "ガル・サークル",
      en: "Gul Circle",
      orig: "卡尔圈站",
      id: "gul-circle",
    },
    {
      name: "トゥアス・クレセント",
      en: "Tuas Crescent",
      orig: "大士弯站",
      id: "tuas-crescent",
    },
    {
      name: "トゥアス・ウエスト・ロード",
      en: "Tuas West Road",
      orig: "大士西路站",
      id: "tuas-west-road",
    },
    {
      name: "トゥアス・リンク",
      en: "Tuas Link",
      orig: "大士连路站",
      id: "tuas-link",
    },
  ],
  "smrt-east-west-changi": [
    {
      name: "タナ・メラ",
      en: "Tanah Merah",
      orig: "丹那美拉站",
      id: "tanah-merah",
    },
    {
      name: "エキスポ",
      en: "Expo",
      orig: "博览站",
      id: "expo",
    },
    {
      name: "チャンギ・エアポート",
      en: "Changi Airport",
      orig: "樟宜机场站",
      id: "changi-airport",
    },
  ],
  "smrt-circle": [
    {
      name: "ドビー・ゴート",
      en: "Dhoby Ghaut",
      orig: "多美歌站",
      id: "dhoby-ghaut",
    },
    {
      name: "ブラス・バサー",
      en: "Bras Basah",
      orig: "百胜站",
      id: "bras-basah",
    },
    {
      name: "エスプラネード",
      en: "Esplanade",
      orig: "滨海中心站",
      id: "esplanade",
    },
    {
      name: "プロムナード",
      en: "Promenade",
      orig: "宝门廊站",
      id: "promenade",
    },
    {
      name: "ニコール・ハイウェイ",
      en: "Nicoll Highway",
      orig: "尼诰大道站",
      id: "nicoll-highway",
    },
    { name: "スタジアム", en: "Stadium", orig: "体育场站", id: "stadium" },
    {
      name: "マウントバッテン",
      en: "Mountbatten",
      orig: "蒙巴登站",
      id: "mountbatten",
    },
    { name: "ダコタ", en: "Dakota", orig: "达科达站", id: "dakota" },
    {
      name: "パヤ・レバー",
      en: "Paya Lebar",
      orig: "巴耶利峇站",
      id: "paya-lebar",
    },
    {
      name: "マクファーソン",
      en: "MacPherson",
      orig: "麦波申站",
      id: "macpherson",
    },
    { name: "タイ・セン", en: "Tai Seng", orig: "大成站", id: "tai-seng" },
    { name: "バートレイ", en: "Bartley", orig: "巴特礼站", id: "bartley" },
    {
      name: "セラングーン",
      en: "Serangoon",
      orig: "实龙岗站",
      id: "serangoon",
    },
    {
      name: "ロロン・チュアン",
      en: "Lorong Chuan",
      orig: "罗弄泉站",
      id: "lorong-chuan",
    },
    { name: "ビシャン", en: "Bishan", orig: "碧山站", id: "bishan" },
    {
      name: "メリーマウント",
      en: "Marymount",
      orig: "玛丽蒙站",
      id: "marymount",
    },
    {
      name: "カルデコット",
      en: "Caldecott",
      orig: "加利谷站",
      id: "caldecott",
    },
    {
      name: "ブキ・ブラウン",
      en: "Bukit Brown",
      orig: "武吉布朗站",
      id: "bukit-brown",
    },
    {
      name: "ボタニック・ガーデン",
      en: "Botanic Gardens",
      orig: "植物园站",
      id: "botanic-gardens",
    },
    {
      name: "ファーラー・ロード",
      en: "Farrer Road",
      orig: "花拉路站",
      id: "farrer-road",
    },
    {
      name: "ホーランド・ビレッジ",
      en: "Holland Village",
      orig: "荷兰村站",
      id: "holland-village",
    },
    {
      name: "ブオナ・ヴィスタ",
      en: "Buona Vista",
      orig: "波那维斯达站",
      id: "buona-vista",
    },
    { name: "ワン・ノース", en: "one-north", orig: "纬壹站", id: "one-north" },
    {
      name: "ケント・リッジ",
      en: "Kent Ridge",
      orig: "肯特岗站",
      id: "kent-ridge",
    },
    {
      name: "ハウ・パー・ヴィラ",
      en: "Haw Par Villa",
      orig: "西海岸站",
      id: "haw-par-villa",
    },
    {
      name: "パシール・パンジャン",
      en: "Pasir Panjang",
      orig: "巴西班让站",
      id: "pasir-panjang",
    },
    {
      name: "ラブラドール・パーク",
      en: "Labrador Park",
      orig: "拉柏多公园站",
      id: "labrador-park",
    },
    {
      name: "テロック・ブランガー",
      en: "Telok Blangah",
      orig: "直落布兰雅站",
      id: "telok-blangah",
    },
    {
      name: "ハーバー・フロント",
      en: "HarbourFront",
      orig: "港湾站",
      id: "harbourfront",
    },
  ],
  "smrt-circle-ex": [
    {
      name: "プロムナード",
      en: "Promenade",
      orig: "宝门廊站",
      id: "promenade",
    },
    {
      name: "ベイフロント",
      en: "Bayfront",
      orig: "海湾舫站",
      id: "bayfront",
    },
    {
      name: "マリーナ・ベイ",
      en: "Marina Bay",
      orig: "滨海湾站",
      id: "marina-bay",
    },
  ],
  "smrt-thomson-east-coast": [
    {
      name: "ウッドランズ・ノース",
      en: "Woodlands North",
      orig: "兀兰北站",
      id: "woodlands-north",
    },
    { name: "ウッドランズ", en: "Woodlands", orig: "兀兰站", id: "woodlands" },
    {
      name: "ウッドランズ・サウス",
      en: "Woodlands South",
      orig: "兀兰南站",
      id: "woodlands-south",
    },
    {
      name: "スプリングリーフ",
      en: "Springleaf",
      orig: "春叶站",
      id: "springleaf",
    },
    { name: "レンター", en: "Lentor", orig: "伦多站", id: "lentor" },
    { name: "メイフラワー", en: "Mayflower", orig: "美华站", id: "mayflower" },
    {
      name: "ブライト・ヒル",
      en: "Bright Hill",
      orig: "光明山站",
      id: "bright-hill",
    },
    {
      name: "アッパー・トムソン",
      en: "Upper Thomson",
      orig: "汤申路上段站",
      id: "upper-thomson",
    },
    {
      name: "カルデコット",
      en: "Caldecott",
      orig: "加利谷站",
      id: "caldecott",
    },
    { name: "スティーブンス", en: "Stevens", orig: "史蒂芬站", id: "stevens" },
    { name: "ネイピア", en: "Napier", orig: "纳比雅站", id: "napier" },
    {
      name: "オーチャード・ブルバード",
      en: "Orchard Boulevard",
      orig: "乌节林荫道站",
      id: "orchard-boulevard",
    },
    { name: "オーチャード", en: "Orchard", orig: "乌节站", id: "orchard" },
    {
      name: "グレート・ワールド",
      en: "Great World",
      orig: "大世界站",
      id: "great-world",
    },
    { name: "ハブロック", en: "Havelock", orig: "合乐站", id: "havelock" },
    {
      name: "アウトラム・パーク",
      en: "Outram Park",
      orig: "欧南园站",
      id: "outram-park",
    },
    { name: "マクスウェル", en: "Maxwell", orig: "麥士威站", id: "maxwell" },
    {
      name: "シェントン・ウェイ",
      en: "Shenton Way",
      orig: "珊顿道站",
      id: "shenton-way",
    },
    {
      name: "マリーナ・ベイ",
      en: "Marina Bay",
      orig: "滨海湾站",
      id: "marina-bay",
    },
    {
      name: "ガーデンズ・バイ・ザ・ベイ",
      en: "Gardens by the Bay",
      orig: "滨海湾花园站",
      id: "gardens-by-the-bay",
    },
    {
      name: "タンジョン・ルー",
      en: "Tanjong Rhu",
      orig: "丹戎禺站",
      id: "tanjong-rhu",
    },
    {
      name: "カトン・パーク",
      en: "Katong Park",
      orig: "加东公园站",
      id: "katong-park",
    },
    {
      name: "タンジョン・カトン",
      en: "Tanjong Katong",
      orig: "丹戎加东站",
      id: "tanjong-katong",
    },
    {
      name: "マリン・パレード",
      en: "Marine Parade",
      orig: "马林百列站",
      id: "marine-parade",
    },
    {
      name: "マリン・テラス",
      en: "Marine Terrace",
      orig: "馬林台站",
      id: "marine-terrace",
    },
    { name: "シグラップ", en: "Siglap", orig: "实乞纳站", id: "siglap" },
    { name: "ベイショア", en: "Bayshore", orig: "碧湾站", id: "bayshore" },
  ],
  "smrt-bukit-panjang": [
    {
      name: "チョア・チュー・カン",
      en: "Choa Chu Kang",
      orig: "蔡厝港站",
      id: "choa-chu-kang",
    },
    {
      name: "サウス・ビュー",
      en: "South View",
      orig: "南景站",
      id: "south-view",
    },
    { name: "キート・ホン", en: "Keat Hong", orig: "吉丰站", id: "keat-hong" },
    {
      name: "テック・ウィー",
      en: "Teck Whye",
      orig: "德惠站",
      id: "teck-whye",
    },
    { name: "フェニックス", en: "Phoenix", orig: "凤凰站", id: "phoenix" },
    {
      name: "ブキ・パンジャン",
      en: "Bukit Panjang",
      orig: "武吉班让站",
      id: "bukit-panjang",
    },
    { name: "ペティル", en: "Petir", orig: "柏提站", id: "petir" },
    { name: "ペンディング", en: "Pending", orig: "秉定站", id: "pending" },
    { name: "バンキット", en: "Bangkit", orig: "万吉站", id: "bangkit" },
    { name: "ファジャー", en: "Fajar", orig: "法嘉站", id: "fajar" },
    { name: "セガー", en: "Segar", orig: "实加站", id: "segar" },
    { name: "ジェラパン", en: "Jelapang", orig: "泽拉邦站", id: "jelapang" },
    { name: "センジャ", en: "Senja", orig: "信加站", id: "senja" },
  ],
};

generateRailwayStations(smrtStations, "smrt", "singapore");
