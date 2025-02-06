const korailStations = {
  "korail-chungbuk": [
    { name: "鳥致院", en: "Jochiwon", orig: "조치원역", id: "jochiwon" },
    { name: "五松", en: "Osong", orig: "오송역", id: "osong" },
    { name: "清州", en: "Cheongju", orig: "청주역", id: "cheongju" },
    { name: "梧根場", en: "Ogeunjang", orig: "오근장역", id: "ogeunjang" },
    {
      name: "清州空港",
      en: "Cheongju Int'l Airport",
      orig: "청주공항역",
      id: "cheongju-int-l-airport",
    },
    { name: "内秀", en: "Naesu", orig: "내수역", id: "naesu" },
    { name: "曽坪", en: "Jeungpyeong", orig: "증평역", id: "jeungpyeong" },
    { name: "道安", en: "Doan", orig: "도안역", id: "doan" },
    { name: "甫川", en: "Bocheon", orig: "보천역", id: "bocheon" },
    { name: "陰城", en: "Eumseong", orig: "음성역", id: "eumseong" },
    { name: "蘇伊", en: "Soi", orig: "소이역", id: "soi" },
    { name: "周徳", en: "Judeok", orig: "주덕역", id: "judeok" },
    { name: "達川", en: "Dalcheon", orig: "달천역", id: "dalcheon" },
    { name: "忠州", en: "Chungju", orig: "충주역", id: "chungju" },
    { name: "牧杏", en: "Mokhaeng", orig: "목행역", id: "mokhaeng" },
    { name: "東良", en: "Dongnyang", orig: "동량역", id: "dongnyang" },
    { name: "三灘", en: "Samtan", orig: "삼탄역", id: "samtan" },
    { name: "公田", en: "Gongjeon", orig: "공전역", id: "gongjeon" },
    { name: "鳳陽", en: "Bongyang", orig: "봉양역", id: "bongyang" },
  ],
  "korail-honam": [
    { name: "西大田", en: "Seodaejeon", orig: "서대전역", id: "seodaejeon" },
    { name: "佳水院", en: "Gasuwon", orig: "가수원역", id: "gasuwon" },
    {
      name: "黒石里",
      en: "Heukseong-ri",
      orig: "흑석리역",
      id: "heukseong-ri",
    },
    { name: "鶏龍", en: "Gyeryong", orig: "계룡역", id: "gyeryong" },
    { name: "開泰寺", en: "Gaetaesa", orig: "개태사역", id: "gaetaesa" },
    { name: "連山", en: "Yeonsan", orig: "연산역", id: "yeonsan" },
    { name: "夫皇", en: "Buhwang", orig: "부황역", id: "buhwang" },
    { name: "論山", en: "Nonsan", orig: "논산역", id: "nonsan" },
    { name: "江景", en: "Ganggyeong", orig: "강경역", id: "ganggyeong" },
    { name: "龍東", en: "Yongdong", orig: "용동역", id: "yongdong" },
    { name: "咸悦", en: "Hamyeol", orig: "함열역", id: "hamyeol" },
    { name: "黄登", en: "Hwangdeung", orig: "황등역", id: "hwangdeung" },
    { name: "益山", en: "Iksan", orig: "익산역", id: "iksan" },
    { name: "芙蓉", en: "Buyong", orig: "부용역", id: "buyong" },
    { name: "臥龍", en: "Waryong", orig: "와룡역", id: "waryong" },
    { name: "金堤", en: "Gimje", orig: "김제역", id: "gimje" },
    { name: "甘谷", en: "Gamgok", orig: "감곡역", id: "gamgok" },
    { name: "新泰仁", en: "Sintaein", orig: "신태인역", id: "sintaein" },
    { name: "楚江", en: "Chogang", orig: "초강역", id: "chogang" },
    { name: "井邑", en: "Jeongeup", orig: "정읍역", id: "jeongeup" },
    { name: "川原", en: "Cheonwon", orig: "천원역", id: "cheonwon" },
    { name: "蘆嶺", en: "Noryeong", orig: "노령역", id: "noryeong" },
    { name: "白羊寺", en: "Baegyangsa", orig: "백양사역", id: "baegyangsa" },
    { name: "安平", en: "Anpyeong", orig: "안평역", id: "anpyeong" },
    { name: "長城", en: "Jangseong", orig: "장성역", id: "jangseong" },
    { name: "林谷", en: "Imgok", orig: "임곡역", id: "imgok" },
    { name: "河南", en: "Hanam", orig: "하남역", id: "hanam" },
    {
      name: "光州松汀",
      en: "Gwangju Songjeong",
      orig: "광주송정역",
      id: "gwangju-songjeong",
    },
    { name: "老安", en: "Noan", orig: "노안역", id: "noan" },
    { name: "羅州", en: "Naju", orig: "나주역", id: "naju" },
    { name: "多侍", en: "Dasi", orig: "다시역", id: "dasi" },
    { name: "古幕院", en: "Gomagwon", orig: "고막원역", id: "gomagwon" },
    { name: "咸平", en: "Hampyeong", orig: "함평역", id: "hampyeong" },
    { name: "務安", en: "Muan", orig: "무안역", id: "muan" },
    { name: "夢灘", en: "Mongtan", orig: "몽탄역", id: "mongtan" },
    { name: "一老", en: "Illo", orig: "일로역", id: "illo" },
    { name: "任城里", en: "Imseong-ri", orig: "임성리역", id: "imseong-ri" },
    { name: "木浦", en: "Mokpo", orig: "목포역", id: "mokpo" },
  ],
  "korail-jeolla": [
    { name: "益山", en: "Iksan", orig: "익산역", id: "iksan" },
    { name: "東益山", en: "Dongiksan", orig: "동익산역", id: "dongiksan" },
    { name: "参礼", en: "Samnye", orig: "삼례역", id: "samnye" },
    { name: "東山", en: "Dongsan", orig: "동산역", id: "dongsan" },
    { name: "全州", en: "Jeonju", orig: "전주역", id: "jeonju" },
    { name: "新里", en: "Sin-ri", orig: "신리역", id: "sin-ri" },
    {
      name: "竹林温泉",
      en: "Jungnim oncheon",
      orig: "죽림온천역",
      id: "jungnim-oncheon",
    },
    { name: "館村", en: "Gwanchon", orig: "관촌역", id: "gwanchon" },
    { name: "任実", en: "Imsil", orig: "임실역", id: "imsil" },
    { name: "鳳泉", en: "Bongcheon", orig: "봉천역", id: "bongcheon" },
    { name: "獒樹", en: "Osu", orig: "오수역", id: "osu" },
    { name: "書道", en: "Seodo", orig: "서도역", id: "seodo" },
    { name: "山城", en: "Sanseong", orig: "산성역", id: "sanseong" },
    { name: "南原", en: "Namwon", orig: "남원역", id: "namwon" },
    { name: "周生", en: "Jusaeng", orig: "주생역", id: "jusaeng" },
    { name: "甕井", en: "Ongjeong", orig: "옹정역", id: "ongjeong" },
    { name: "金池", en: "Geumji", orig: "금지역", id: "geumji" },
    { name: "谷城", en: "Gokseong", orig: "곡성역", id: "gokseong" },
    { name: "鴨緑", en: "Amnok", orig: "압록역", id: "amnok" },
    { name: "求礼口", en: "Guryegu", orig: "구례구역", id: "guryegu" },
    { name: "鳳徳", en: "Bongdeok", orig: "봉덕역", id: "bongdeok" },
    { name: "槐木", en: "Goemok", orig: "괴목역", id: "goemok" },
    { name: "開雲", en: "Gaeun", orig: "개운역", id: "gaeun" },
    { name: "東雲", en: "Dongun", orig: "동운역", id: "dongun" },
    { name: "順天", en: "Suncheon", orig: "순천역", id: "suncheon" },
    { name: "星山", en: "Seongsan", orig: "성산역", id: "seongsan" },
    { name: "栗村", en: "Yulchon", orig: "율촌역", id: "yulchon" },
    { name: "徳陽", en: "Deogyang", orig: "덕양역", id: "deogyang" },
    { name: "麗川", en: "Yeocheon", orig: "여천역", id: "yeocheon" },
    {
      name: "麗水エキスポ",
      en: "Yeosu EXPO",
      orig: "여수엑스포역",
      id: "yeosu-expo",
    },
  ],
  "korail-gyeongjeon": [
    { name: "三浪津", en: "Samnangjin", orig: "삼랑진역", id: "samnangjin" },
    { name: "洛東江", en: "Nakdonggang", orig: "낙동강역", id: "nakdonggang" },
    { name: "翰林亭", en: "Hallimjeong", orig: "한림정역", id: "hallimjeong" },
    { name: "進永", en: "Jinyeong", orig: "진영역", id: "jinyeong" },
    { name: "進礼", en: "Jillye", orig: "진례역", id: "jillye" },
    {
      name: "昌原中央",
      en: "Changwonjungang",
      orig: "창원중앙역",
      id: "changwonjungang",
    },
    { name: "昌原", en: "Changwon", orig: "창원역", id: "changwon" },
    { name: "馬山", en: "Masan", orig: "마산역", id: "masan" },
    { name: "中里", en: "Jung-ri", orig: "중리역", id: "jung-ri" },
    { name: "咸安", en: "Haman", orig: "함안역", id: "haman" },
    { name: "郡北", en: "Gunbuk", orig: "군북역", id: "gunbuk" },
    { name: "班城", en: "Banseong", orig: "반성역", id: "banseong" },
    { name: "晋州", en: "Jinju", orig: "진주역", id: "jinju" },
    { name: "浣紗", en: "Wansa", orig: "완사역", id: "wansa" },
    { name: "北川", en: "Bukcheon", orig: "북천역", id: "bukcheon" },
    { name: "横川", en: "Hoengcheon", orig: "횡천역", id: "hoengcheon" },
    { name: "河東", en: "Hadong", orig: "하동역", id: "hadong" },
    { name: "津上", en: "Jinsang", orig: "진상역", id: "jinsang" },
    { name: "光陽", en: "Gwangyang", orig: "광양역", id: "gwangyang" },
    { name: "順天", en: "Suncheon", orig: "순천역", id: "suncheon" },
    { name: "元倉", en: "Wonchang", orig: "원창역", id: "wonchang" },
    { name: "九龍", en: "Guryong", orig: "구룡역", id: "guryong" },
    { name: "筏橋", en: "Beolgyo", orig: "벌교역", id: "beolgyo" },
    { name: "鳥城", en: "Joseong", orig: "조성역", id: "joseong" },
    { name: "礼堂", en: "Yedang", orig: "예당역", id: "yedang" },
    { name: "得粮", en: "Deungnyang", orig: "득량역", id: "deungnyang" },
    { name: "宝城", en: "Boseong", orig: "보성역", id: "boseong" },
    { name: "広谷", en: "Gwanggok", orig: "광곡역", id: "gwanggok" },
    { name: "鳴鳳", en: "Myeongbong", orig: "명봉역", id: "myeongbong" },
    { name: "梨陽", en: "Iyang", orig: "이양역", id: "iyang" },
    { name: "綾州", en: "Neungju", orig: "능주역", id: "neungju" },
    { name: "和順", en: "Hwasun", orig: "화순역", id: "hwasun" },
    { name: "南平", en: "Nampyeong", orig: "남평역", id: "nampyeong" },
    { name: "孝泉", en: "Hyocheon", orig: "효천역", id: "hyocheon" },
    { name: "西光州", en: "Seogwangju", orig: "서광주역", id: "seogwangju" },
    {
      name: "光州松汀",
      en: "Gwangjusongjeong",
      orig: "광주송정역",
      id: "gwangjusongjeong",
    },
  ],
  "korail-gwangju": [
    {
      name: "極楽江",
      en: "Geungnakgang",
      orig: "극락강역",
      id: "geungnakgang",
    },
    { name: "光州", en: "Gwangju", orig: "광주역", id: "gwangju" },
  ],
  "korail-gyeongbuk": [
    { name: "金泉", en: "Gimcheon", orig: "김천역", id: "gimcheon" },
    { name: "玉山", en: "Oksan", orig: "옥산역", id: "oksan" },
    { name: "青里", en: "Cheongni", orig: "청리역", id: "cheongri" },
    { name: "尚州", en: "Sangju", orig: "상주역", id: "sangju" },
    { name: "白元", en: "Baegwon", orig: "백원역", id: "baegwon" },
    { name: "咸昌", en: "Hamchang", orig: "함창역", id: "hamchang" },
    { name: "店村", en: "Jeomchon", orig: "점촌역", id: "jeomchon" },
    { name: "龍宮", en: "Yonggung", orig: "용궁역", id: "yonggung" },
    { name: "開浦", en: "Gaepo", orig: "개포역", id: "gaepo" },
    { name: "醴泉", en: "Yecheon", orig: "예천역", id: "yecheon" },
    { name: "魚登", en: "Eodeung", orig: "어등역", id: "eodeung" },
    { name: "栄州", en: "Yeongju", orig: "영주역", id: "yeongju" },
  ],
  "korail-daegu": [
    { name: "佳川", en: "Gacheon", orig: "가천역", id: "gacheon" },
    { name: "琴江", en: "Geumgang", orig: "금강역", id: "geumgang" },
    { name: "清泉", en: "Cheongcheon", orig: "청천역", id: "cheongcheon" },
    { name: "河陽", en: "Hayang", orig: "하양역", id: "hayang" },
    { name: "琴湖", en: "Geumho", orig: "금호역", id: "geumho" },
    { name: "永川", en: "Yeongcheon", orig: "영천역", id: "yeongcheon" },
  ],
  "korail-samcheok": [
    { name: "東海", en: "Donghae", orig: "동해역", id: "donghae" },
    { name: "湫岩", en: "Chuam", orig: "추암역", id: "chujeon" },
    {
      name: "三陟海辺",
      en: "Samcheok haebyeon",
      orig: "삼척해변역",
      id: "samcheok-haebyeon",
    },
    { name: "三陟", en: "Samcheok", orig: "삼척역", id: "samcheok" },
  ],
  "korail-jungbu-naeryuk": [
    { name: "夫鉢", en: "Bubal", orig: "부발역", id: "bubal" },
    { name: "加南", en: "Ganam", orig: "가남역", id: "ganam" },
    {
      name: "甘谷長湖院",
      en: "GamgokJanghowon",
      orig: "감곡장호원역",
      id: "gamgok-janghowon",
    },
    {
      name: "仰城温泉",
      en: "Angseong Oncheon",
      orig: "앙성온천역",
      id: "angseong-oncheon",
    },
    { name: "忠州", en: "Chungju", orig: "충주역", id: "chungju" },
    { name: "乷味", en: "Salmi", orig: "살미역", id: "salmi" },
    {
      name: "水安堡温泉",
      en: "Suanbooncheon",
      orig: "수안보온천역",
      id: "suanbooncheon",
    },
    { name: "延豊", en: "Yeonpung", orig: "연풍역", id: "yeonpung" },
    { name: "聞慶", en: "Mungyeong", orig: "문경역", id: "mungyeong" },
  ],
  "korail-taebaek": [
    { name: "堤川", en: "Jecheon", orig: "제천역", id: "jecheon" },
    { name: "立石里", en: "Ipseok-ri", orig: "입석리역", id: "ipseok-ri" },
    { name: "双龍", en: "Ssangnyong", orig: "쌍룡역", id: "ssangnyong" },
    { name: "淵堂", en: "Yeondang", orig: "연당역", id: "yeondang" },
    { name: "寧越", en: "Yeongwol", orig: "영월역", id: "yeongwol" },
    { name: "石項", en: "Seokhang", orig: "석항역", id: "seokhang" },
    { name: "礼美", en: "Yemi", orig: "예미역", id: "yemi" },
    {
      name: "ミンドゥンサン",
      en: "Mindungsan",
      orig: "민둥산역",
      id: "mindungsan",
    },
    { name: "舎北", en: "Sabuk", orig: "사북역", id: "sabuk" },
    { name: "古汗", en: "Gohan", orig: "고한역", id: "gohan" },
    { name: "杻田", en: "Chujeon", orig: "추전역", id: "chujeon" },
    { name: "太白", en: "Taebaek", orig: "태백역", id: "taebaek" },
    { name: "文曲", en: "Mungok", orig: "문곡역", id: "mungok" },
    { name: "栢山", en: "Baeksan", orig: "백산역", id: "baeksan" },
  ],
  "korail-jeongseon": [
    {
      name: "ミンドゥンサン",
      en: "Mindungsan",
      orig: "민둥산역",
      id: "mindungsan",
    },
    { name: "別於谷", en: "Byeoreogok", orig: "별어곡역", id: "byeoreogok" },
    { name: "仙坪", en: "Seonpyeong", orig: "선평역", id: "seonpyeong" },
    { name: "旌善", en: "Jeongseon", orig: "정선역", id: "jeongseon" },
    { name: "羅田", en: "Najeon", orig: "나전역", id: "najeon" },
    { name: "アウラジ", en: "Auraji", orig: "아우라지역", id: "auraji" },
    { name: "九切里", en: "Gujeol-ri", orig: "구절리역", id: "gujeol-ri" },
  ],
  "korail-yeongdong": [
    { name: "栄州", en: "Yeongju", orig: "영주역", id: "yeongju" },
    { name: "奉化", en: "Bonghwa", orig: "봉화역", id: "bonghwa" },
    { name: "巨村", en: "Geochon", orig: "거촌역", id: "geochon" },
    { name: "鳳城", en: "Bongseong", orig: "봉성역", id: "bongseong" },
    { name: "法田", en: "Beopjeon", orig: "법전역", id: "beopjeon" },
    { name: "春陽", en: "Chunyang", orig: "춘양역", id: "chunyang" },
    { name: "鹿洞", en: "Nokdong", orig: "녹동역", id: "nokdong" },
    { name: "林基", en: "Imgi", orig: "임기역", id: "imgi" },
    { name: "県洞", en: "Hyeondong", orig: "현동역", id: "hyeondong" },
    { name: "汾川", en: "Buncheon", orig: "분천역", id: "buncheon" },
    { name: "肥洞", en: "Bidong", orig: "비동역", id: "bidong" },
    { name: "両元", en: "Yangwon", orig: "양원역", id: "yangwon" },
    { name: "承富", en: "Seungbu", orig: "승부역", id: "seungbu" },
    { name: "石浦", en: "Seokpo", orig: "석포역", id: "seokpo" },
    { name: "銅店", en: "Dongjeom", orig: "동점역", id: "dongjeom" },
    { name: "鉄岩", en: "Cheoram", orig: "철암역", id: "cheoram" },
    { name: "栢山", en: "Baeksan", orig: "백산역", id: "baeksan" },
    { name: "東栢山", en: "Dongbaeksan", orig: "동백산역", id: "dongbaeksan" },
    { name: "道渓", en: "Dogye", orig: "도계역", id: "dogye" },
    { name: "古士里", en: "Gosa-ri", orig: "고사리역", id: "gosa-ri" },
    { name: "下古士里", en: "Hagosa-ri", orig: "하고사리역", id: "hagosa-ri" },
    { name: "馬次里", en: "Macha-ri", orig: "마차리역", id: "macha-ri" },
    { name: "新基", en: "Singi", orig: "신기역", id: "singi" },
    { name: "未老", en: "Miro", orig: "미로역", id: "miro" },
    { name: "東海", en: "Donghae", orig: "동해역", id: "donghae" },
    { name: "墨湖", en: "Mukho", orig: "묵호역", id: "mukho" },
    { name: "望祥", en: "Mangsang", orig: "망상역", id: "mangsang" },
    {
      name: "望祥海水浴場",
      en: "Mangsang beach",
      orig: "망상해수욕장역",
      id: "mangsang-beach",
    },
    { name: "玉渓", en: "Okgye", orig: "옥계역", id: "okgye" },
    {
      name: "正東津",
      en: "Jeongdongjin",
      orig: "정동진역",
      id: "jeongdongjin",
    },
    { name: "安仁", en: "Anin", orig: "안인역", id: "anin" },
    { name: "江陵", en: "Gangneung", orig: "강릉역", id: "gangneung" },
  ],
  "korail-gyooe": [
    { name: "陵谷", en: "Neunggok", orig: "능곡역", id: "neunggok" },
    { name: "大谷", en: "Daegok", orig: "대곡역", id: "daegok" },
    { name: "大井", en: "Daejeong", orig: "대정역", id: "daejeong" },
    { name: "元陵", en: "Wolleung", orig: "원릉역", id: "wolleung" },
    { name: "三陵", en: "Samneung", orig: "삼릉역", id: "samneung" },
    { name: "碧蹄", en: "Byeokje", orig: "벽제역", id: "byeokje" },
    { name: "日迎", en: "Iryeong", orig: "일영역", id: "iryeong" },
    { name: "長興", en: "Jangheung", orig: "장흥역", id: "jangheung" },
    { name: "温陵", en: "Olleung", orig: "온릉역", id: "olleung" },
    { name: "松湫", en: "Songchu", orig: "송추역", id: "songchu" },
    { name: "議政府", en: "Uijeongbu", orig: "의정부역", id: "uijeongbu" },
  ],
};

generateRailwayStations(korailStations, "korail", "korea");
