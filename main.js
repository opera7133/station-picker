const kantoRailways = {
  "jr-east": {
    id: "jr-east",
    name: "JR東日本",
    railway: [
      {
        name: "山手線",
        id: "yamanote",
        icon: "jr-east/jy",
      },
      {
        name: "京浜東北線",
        id: "keihin-tohoku",
        icon: "jr-east/jk",
      },
      {
        name: "東海道線",
        id: "tokaido",
        icon: "jr-east/jo",
      },
      {
        name: "中央線快速",
        id: "chuo-rapid",
        icon: "jr-east/jc",
      },
      {
        name: "五日市線",
        id: "itsukaichi",
        icon: "jr-east/jc",
      },
      {
        name: "青梅線",
        id: "oume",
        icon: "jr-east/jc",
      },
      {
        name: "中央・総武各駅停車",
        id: "soubu",
        icon: "jr-east/jb",
      },
      {
        name: "総武快速線",
        id: "soubu-rapid",
        icon: "jr-east/jo",
      },
      {
        name: "京葉線",
        id: "keiyo",
        icon: "jr-east/je",
      },
      {
        name: "武蔵野線",
        id: "musashino",
        icon: "jr-east/jm",
      },
      {
        name: "鶴見線",
        id: "tsurumi",
        icon: "jr-east/ji",
      },
      {
        name: "鶴見線（大川支線）",
        id: "tsurumi-okawa",
        icon: "jr-east/ji",
      },
      {
        name: "鶴見線（海芝浦支線）",
        id: "tsurumi-umi-shibaura",
        icon: "jr-east/ji",
      },
      {
        name: "八高線",
        id: "hachiko",
        icon: "jr-east/hachiko",
      },
      {
        name: "総武本線",
        id: "soubu-honsen",
        icon: "jr-east/soubu-honsen",
      },
      {
        name: "成田線",
        id: "narita",
        icon: "jr-east/narita",
      },
      {
        name: "成田線（空港支線）",
        id: "narita-kuko",
        icon: "jr-east/narita",
      },
      {
        name: "成田線（我孫子支線）",
        id: "narita-abiko",
        icon: "jr-east/narita",
      },
      {
        name: "内房線",
        id: "uchibo",
        icon: "jr-east/uchibo",
      },
      {
        name: "東金線",
        id: "togane",
        icon: "jr-east/togane",
      },
      {
        name: "外房線",
        id: "sotobo",
        icon: "jr-east/sotobo",
      },
      {
        name: "久留里線",
        id: "kururi",
        icon: "jr-east/kururi",
      },
      {
        name: "鹿島線",
        id: "kashima",
        icon: "jr-east/kashima",
      },
    ],
  },
  "tokyo-metro": {
    id: "tokyo-metro",
    name: "東京メトロ",
    railway: [
      {
        name: "銀座線",
        id: "ginza",
        icon: "tokyo-metro/g",
      },
      {
        name: "丸ノ内線",
        id: "marunouchi",
        icon: "tokyo-metro/m",
      },
      {
        name: "丸ノ内分岐線",
        id: "marunouchi-bunki",
        icon: "tokyo-metro/mb",
      },
      {
        name: "日比谷線",
        id: "hibiya",
        icon: "tokyo-metro/h",
      },
      {
        name: "東西線",
        id: "tozai",
        icon: "tokyo-metro/t",
      },
      {
        name: "千代田線",
        id: "chiyoda",
        icon: "tokyo-metro/c",
      },
      {
        name: "有楽町線",
        id: "yurakucho",
        icon: "tokyo-metro/y",
      },
      {
        name: "半蔵門線",
        id: "hanzomon",
        icon: "tokyo-metro/z",
      },
      {
        name: "南北線",
        id: "namboku",
        icon: "tokyo-metro/n",
      },
      {
        name: "副都心線",
        id: "fukutoshin",
        icon: "tokyo-metro/f",
      },
    ],
  },
  toei: {
    id: "toei",
    name: "都営地下鉄",
    railway: [
      {
        name: "浅草線",
        id: "asakusa",
        icon: "toei/a",
      },
      {
        name: "三田線",
        id: "mita",
        icon: "toei/i",
      },
      {
        name: "新宿線",
        id: "shinjuku",
        icon: "toei/s",
      },
      {
        name: "大江戸線",
        id: "ooedo",
        icon: "toei/e",
      },
    ],
  },
  nt: {
    id: "nt",
    name: "日暮里・舎人ライナー",
    railway: [
      {
        name: "日暮里・舎人ライナー",
        id: "nt",
        icon: "nt/nt",
      },
    ],
  },
  "tokyo-sakura": {
    id: "tokyo-sakura",
    name: "東京さくらトラム",
    railway: [
      {
        name: "東京さくらトラム",
        id: "tokyo-sakura",
        icon: "tokyo-sakura/sa",
      },
    ],
  },
  rinkai: {
    id: "rinkai",
    name: "りんかい線",
    railway: [
      {
        name: "りんかい線",
        id: "rinkai",
        icon: "rinkai/rinkai",
      },
    ],
  },
  "tokyo-monorail": {
    id: "tokyo-monorail",
    name: "東京モノレール",
    railway: [
      {
        name: "東京モノレール",
        id: "tokyo-monorail",
        icon: "tokyo-monorail/mo",
      },
    ],
  },
  yurikamome: {
    id: "yurikamome",
    name: "ゆりかもめ",
    railway: [
      {
        name: "ゆりかもめ",
        id: "yurikamome",
        icon: "yurikamome/u",
      },
    ],
  },
  "tama-monorail": {
    id: "tama-monorail",
    name: "多摩都市モノレール",
    railway: [
      {
        name: "多摩都市モノレール",
        id: "tama-monorail",
        icon: "tama-monorail/tt",
      },
    ],
  },
  ks: {
    id: "ks",
    name: "京成電鉄",
    railway: [
      {
        name: "成田スカイアクセス線",
        id: "narita-skyaccess",
        icon: "keisei/ks_narita",
      },
      {
        name: "新京成線",
        id: "shin-keisei",
        icon: "keisei/sl",
      },
      {
        name: "本線",
        id: "honsen",
        icon: "keisei/ks",
      },
      {
        name: "押上線",
        id: "oshiage",
        icon: "keisei/ks",
      },
      {
        name: "金町線",
        id: "kanamachi",
        icon: "keisei/ks",
      },
      {
        name: "千葉線",
        id: "chiba",
        icon: "keisei/ks",
      },
      {
        name: "千原線",
        id: "chihara",
        icon: "keisei/ks",
      },
      {
        name: "東成田線",
        id: "higashi-narita",
        icon: "keisei/ks",
      },
      {
        name: "芝山鉄道線",
        id: "shibayama",
        icon: "keisei/sr",
      },
    ],
  },
  cm: {
    id: "cm",
    name: "千葉都市モノレール",
    railway: [
      {
        name: "1号線",
        id: "line1",
        icon: "cm/cm_",
      },
      {
        name: "2号線",
        id: "line2",
        icon: "cm/cm_",
      },
    ],
  },
  tb: {
    id: "tb",
    name: "東武鉄道",
    railway: [
      {
        name: "アーバンパークライン",
        id: "noda",
        icon: "tobu/td",
      },
      {
        name: "東上線",
        id: "tojo",
        icon: "tobu/tj",
      },
    ],
  },
  hs: {
    id: "hs",
    name: "北総鉄道",
    railway: [
      {
        name: "北総線",
        id: "hs",
        icon: "hokso/hs",
      },
    ],
  },
  km: {
    id: "km",
    name: "小湊鉄道",
    railway: [
      {
        name: "小湊鉄道線",
        id: "km",
        icon: "kominato/kominato",
      },
    ],
  },
  "yu-kari": {
    id: "yu-kari",
    name: "ユーカリが丘線",
    railway: [
      {
        name: "ユーカリが丘線",
        id: "yu-kari",
        icon: "yu-kari/square",
      },
    ],
  },
  tr: {
    id: "tr",
    name: "東葉高速鉄道",
    railway: [
      {
        name: "東葉高速線",
        id: "tr",
        icon: "toyo/tr",
      },
    ],
  },
  is: {
    id: "is",
    name: "いすみ鉄道",
    railway: [
      {
        name: "いすみ線",
        id: "is",
        icon: "isumi/isumi",
      },
    ],
  },
  cd: {
    id: "cd",
    name: "銚子電気鉄道",
    railway: [
      {
        name: "銚子電気鉄道線",
        id: "cd",
        icon: "cd/cd",
      },
    ],
  },
  ryutetsu: {
    id: "ryutetsu",
    name: "流鉄流山線",
    railway: [
      {
        name: "流鉄流山線",
        id: "ryutetsu",
        icon: "ryutetsu/rn",
      },
    ],
  },
  tx: {
    id: "tx",
    name: "つくばエクスプレス",
    railway: [
      {
        name: "つくばエクスプレス",
        id: "tx",
        icon: "tx/tx",
      },
    ],
  },
  kantetsu: {
    id: "kantetsu",
    name: "関東鉄道",
    railway: [
      {
        name: "常総線",
        id: "joso",
        icon: "kantetsu/kantetsu",
      },
      {
        name: "竜ヶ崎線",
        id: "ryugasaki",
        icon: "kantetsu/kantetsu",
      },
    ],
  },
  "kashima-rinkai": {
    id: "kashima-rinkai",
    name: "鹿島臨海鉄道大洗鹿島線",
    railway: [
      {
        name: "大洗鹿島線",
        id: "kashima-rinkai",
        icon: "kashima-rinkai/oarai",
      },
    ],
  },
  hitachinaka: {
    id: "hitachinaka",
    name: "ひたちなか海浜鉄道湊線",
    railway: [
      {
        name: "ひたちなか海浜鉄道湊線",
        id: "hitachinaka",
        icon: "hitachinaka/hitachinaka",
      },
    ],
  },
};

const flattenKantoRailways = Object.values(kantoRailways).flatMap((railway) => {
  if (railway.railway.length === 1 && railway.id !== "tb") {
    return railway.railway.map((station) => ({
      id: station.id,
      name: station.name,
    }));
  } else {
    return railway.railway.map((station) => ({
      id: `${railway.id}-${station.id}`,
      name: `${railway.name}-${station.name}`,
    }));
  }
});

const railwayTemplate = (railway, key) => `
  <details class="ml-4" id="${key}-${railway.id}">
          <summary class="relative py-4 text-lg cursor-pointer">
            <img src="assets/${railway.icon}.svg" alt="${railway.name}" class="inline ml-2 w-8 h-8">
            <span class="ml-2">${railway.name}</span>
            <input type="checkbox" class="absolute top-1/2 -translate-y-1/2 right-0 mr-4" id="${key}-${railway.id}-toggle">
          </summary>
        </details>
`;

const stationTemplate = (station, key) => `
      <div class="relative flex justify-between py-2">
        <label for="${`${key}-${station.id}`}">${station.name}</label>
        <input type="checkbox" class="mr-4" id="${`${key}-${station.id}`}" name="${`${key}-${station.id}`}">
      </div>
    `;

Object.keys(kantoRailways).forEach((key) => {
  const railway = kantoRailways[key];
  if (railway.railway.length !== 1 || railway.id === "tb") {
    const railwayElement = document.getElementById(key);
    let railwayElements = "";
    railwayElements += '<div class="ml-4 text-lg">';
    railway.railway.forEach((station) => {
      railwayElements += railwayTemplate(station, key);
    });
    railwayElements += "</div>";
    railwayElement.innerHTML += railwayElements;
  }
});

const setToggle = (railway) => {
  const toggle = document.getElementById(railway + "-toggle");
  toggle.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      `#${railway} input[type='checkbox']`
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = toggle.checked;
    });
  });
};

setToggle("kanto");
setToggle("chiba");
setToggle("tokyo");
setToggle("ibaraki");

const stationForm = document.getElementById("stations");
stationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length === 0) {
    alert("駅を選択してください");
    return;
  }
  const stationNames = new Set();
  checkboxes.forEach((checkbox) => {
    if (checkbox.id.includes("toggle")) return;
    stationNames.add({
      name: checkbox.parentElement.querySelector("label").textContent,
      railway: checkbox.parentElement.parentElement.parentElement.id,
    });
  });
  let stationNamesArray = Array.from(stationNames);
  for (const station of stationNamesArray) {
    const sameStation = stationNamesArray.find(
      (s) => s.name === station.name && s.railway !== station.railway
    );
    if (sameStation) {
      const index = stationNamesArray.findIndex(
        (s) => s.name === station.name && s.railway === station.railway
      );
      stationNamesArray.splice(index, 1);
    }
  }
  const random = Math.floor(Math.random() * stationNamesArray.length);
  const stationName = stationNamesArray[random].name + "駅";
  const railwayName = flattenKantoRailways.find(
    (railway) => railway.id === stationNamesArray[random].railway
  ).name;
  document.getElementById("result-station").textContent = stationName;
  document.getElementById("result-railway").textContent = railwayName;
  document.getElementById(
    "result-map"
  ).src = `https://maps.google.co.jp/maps?output=embed&q=${railwayName}%20${stationName}`;
  document.getElementById("result").classList.remove("hidden");
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

function tweet(railway, station) {
  window.open(
    `https://x.com/intent/tweet?text=今日の駅は${railway}の『${station}』です！&url=https://dl.wmsci.com/station/`
  );
}

document.getElementById("retry-same").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length === 0) {
    alert("駅を選択してください");
    return;
  }
  const stationNames = new Set();
  checkboxes.forEach((checkbox) => {
    if (checkbox.id.includes("toggle")) return;
    stationNames.add({
      name: checkbox.parentElement.querySelector("label").textContent,
      railway: checkbox.parentElement.parentElement.parentElement.id,
    });
  });
  let stationNamesArray = Array.from(stationNames);
  for (const station of stationNamesArray) {
    const sameStation = stationNamesArray.find(
      (s) => s.name === station.name && s.railway !== station.railway
    );
    if (sameStation) {
      const index = stationNamesArray.findIndex(
        (s) => s.name === station.name && s.railway === station.railway
      );
      stationNamesArray.splice(index, 1);
    }
  }
  const random = Math.floor(Math.random() * stationNamesArray.length);
  const stationName = stationNamesArray[random].name + "駅";
  const railwayName = flattenKantoRailways.find(
    (railway) => railway.id === stationNamesArray[random].railway
  ).name;
  document.getElementById("result-station").textContent = stationName;
  document.getElementById("result-railway").textContent = railwayName;
  document.getElementById(
    "result-map"
  ).src = `https://maps.google.co.jp/maps?output=embed&q=${railwayName}%20${stationName}`;
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

document.getElementById("retry").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
});

const generateStations = (railway, stations) => {
  const stationElement = document.getElementById(railway);
  let stationElements = "";
  stationElements += '<div class="ml-4 text-lg">';
  stations.forEach((station) => {
    stationElements += stationTemplate(station, railway);
  });
  stationElements += "</div>";
  stationElement.innerHTML += stationElements;
  setToggle(railway);
};

const generateRailwayStations = (railway, railwayStations) => {
  Object.keys(railwayStations).forEach((key) => {
    const stations = railwayStations[key];
    const stationElement = document.getElementById(key);
    if (stations.length === 0 && stationElement) {
      stationElement.remove();
      return;
    }
    let stationElements = "";
    stationElements += '<div class="ml-4 text-lg">';
    stations.forEach((station) => {
      stationElements += stationTemplate(station, key);
    });
    stationElements += "</div>";
    stationElement.innerHTML += stationElements;
    const stationToggle = document.getElementById(`${key}-toggle`);
    stationToggle.addEventListener("click", (event) => {
      const checkboxes = document.querySelectorAll(
        `#${key} input[type="checkbox"]`
      );
      checkboxes.forEach((checkbox) => {
        checkbox.checked = event.target.checked;
      });
    });
  });
  setToggle(railway);
};

const kantoScripts = [
  "jr-east/tokyo",
  "jr-east/chiba",
  "jr-east/kanagawa",
  "tokyo-metro/tokyo-metro",
  "tobu/chiba",
  "tobu/saitama",
  "keisei/ks",
  "toei/toei",
  "toei/nt",
  "toei/sakura",
  "rinkai/rinkai",
  "tokyo-monorail/tokyo-monorail",
  "yurikamome/yurikamome",
  "tama-monorail/tama-monorail",
  "hokso/hs",
  "cm/cm",
  "yu-kari/yu-kari",
  "kominato/kominato",
  "isumi/isumi",
  "toyo/toyo",
  "choshi/choshi",
  "ryutetsu/ryutetsu",
  "tx/tx",
  "kantetsu/kantetsu",
  "kashima-rinkai/kashima-rinkai",
  "hitachinaka/hitachinaka",
];

for (const script of kantoScripts) {
  const scriptElement = document.createElement("script");
  scriptElement.src = `assets/${script}.js`;
  scriptElement.onload = () => {
    const railwayStations = window[script.replace(/-|\/|\.|/g, "_")];
    if (railwayStations) {
      generateRailwayStations(script, railwayStations);
    }
  };
  document.body.appendChild(scriptElement);
}
