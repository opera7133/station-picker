const prefectureTemplate = (prefecture, top = false) => `<details class="${
  top ? "border border-gray-200 rounded-md py-4 px-8" : "py-4"
}" id="${prefecture.id}">
          <summary class="relative text-xl py-2 cursor-pointer">
            <span class="ml-2">${prefecture.name}</span>
            <input
              type="checkbox"
              class="absolute top-1/2 -translate-y-1/2 right-0 mr-4"
              id="${prefecture.id}-toggle"
            />
          </summary>
        </details>`;

const railwayCompanyTemplate = (railwayCompany, prefecture) => `
  <details id="${prefecture}-${railwayCompany.id}">
            <summary class="relative py-4 text-lg cursor-pointer">
              <img
                loading="lazy"
                src="${railwayCompany.icon}"
                alt="${railwayCompany.name}"
                class="inline ml-2 w-8 object-contain h-8"
              />
              <span class="ml-2">${railwayCompany.name}</span>
              <input
                type="checkbox"
                class="absolute top-1/2 -translate-y-1/2 right-0 mr-4"
                id="${prefecture}-${railwayCompany.id}-toggle"
              />
            </summary>
          </details>`;

const railwayTemplate = (railway, key) => `
  <details class="ml-4" id="${key}-${railway.id}">
          <summary class="relative py-4 text-lg cursor-pointer">
            <img src="${railway.icon}" loading="lazy" alt="${railway.name}" class="inline object-contain ml-2 w-8 h-8">
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

const toggleList = [];

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

const flattenRailways = (railwaysList) => {
  const flattenList = [];
  for (const prefecture of railwaysList) {
    const railwayList = Object.keys(prefecture.railways).map((key) => {
      const railway = prefecture.railways[key];
      if (railway.railway.length === 1) {
        return [
          {
            id: `${prefecture.id}-${railway.id}`,
            name: railway.name,
          },
        ];
      } else {
        return railway.railway.map((station) => {
          return {
            id: `${prefecture.id}-${railway.id}-${station.id}`,
            name: `${railway.name}-${station.name}`,
          };
        });
      }
    });
    const railwayListFlatten = railwayList.flat();
    flattenList.push(...railwayListFlatten);
  }
  return flattenList;
};

const getRandomStation = () => {
  try {
    const waitTime = document.getElementById("wait-time").value * 1000 ?? 3000;
    const usingCrypto = document.getElementById("crypto").checked ?? false;
    const stationNames = new Set();
    const checkboxes = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).filter((checkbox) => !checkbox.id.includes("toggle"));
    if (checkboxes.length === 0) {
      alert("駅を選択してください");
      return;
    }
    // show loading
    if (!document.getElementById("result").classList.contains("hidden")) {
      document.getElementById("result").classList.add("hidden");
    }
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("loading").scrollIntoView({
      behavior: "smooth",
    });
    checkboxes.forEach((checkbox) => {
      stationNames.add({
        name: checkbox.parentElement.querySelector("label").textContent,
        railway: checkbox.parentElement.parentElement.parentElement.id,
      });
    });
    const allFlattenRailways = [
      ...flattenRailways(shinkansenRailwaysList),
      ...flattenRailways(hokkaidoRailwaysList),
      ...flattenRailways(tohokuRailwaysList),
      ...flattenRailways(kantoRailwaysList),
      ...flattenRailways(chubuRailwaysList),
      ...flattenRailways(kinkiRailwaysList),
      ...flattenRailways(chugokuRailwaysList),
      ...flattenRailways(shikokuRailwaysList),
      ...flattenRailways(kyushuRailwaysList),
    ];
    const stationNamesArray = Array.from(stationNames);
    const random = usingCrypto
      ? (() => {
          const array = new Uint32Array(1);
          crypto.getRandomValues(array);
          return array[0] % stationNamesArray.length;
        })()
      : Math.floor(Math.random() * stationNamesArray.length);
    const railwayName = allFlattenRailways.find(
      (railway) => railway.id === stationNamesArray[random].railway
    ).name;
    const tramRailways = [
      "札幌市電",
      "函館市電-2系統",
      "函館市電-5系統",
      "宇都宮芳賀ライトレール線",
      "東京さくらトラム",
      "東急電鉄-世田谷線",
      "富山地方鉄道-1系統",
      "富山地方鉄道-2系統",
      "富山地方鉄道-3系統",
      "富山地方鉄道-4系統",
      "富山地方鉄道-5系統",
      "富山地方鉄道-6系統",
      "万葉線",
      "豊橋鉄道-東田本線",
      "福井鉄道福武線",
      "京阪電気鉄道-石山坂本線",
      "京阪電気鉄道-京津線",
      "阪堺電気軌道-阪堺線",
      "阪堺電気軌道-上町線",
      "岡山電気軌道-東山本線",
      "岡山電気軌道-清輝橋線",
      "広島電鉄-1系統",
      "広島電鉄-2系統",
      "広島電鉄-3系統",
      "広島電鉄-5系統",
      "広島電鉄-6系統",
      "広島電鉄-7系統",
      "広島電鉄-8系統",
      "広島電鉄-9系統",
      "とさでん交通-伊野線",
      "とさでん交通-後免線",
      "とさでん交通-桟橋線",
      "伊予鉄道-1系統",
      "伊予鉄道-2系統",
      "伊予鉄道-3系統",
      "伊予鉄道-5系統",
      "伊予鉄道-6系統",
      "長崎電気軌道-1系統",
      "長崎電気軌道-3系統",
      "長崎電気軌道-4系統",
      "長崎電気軌道-5系統",
      "熊本市交通局-A系統",
      "熊本市交通局-B系統",
      "鹿児島市交通局-1系統",
      "鹿児島市交通局-2系統",
    ];
    const tramReigaiRailways = [
      "福井鉄道福武線",
      "万葉線",
      "伊予鉄道-1系統",
      "伊予鉄道-2系統",
    ];
    const tramReigaiStations = [
      "商工会議所前",
      "足羽山公園口",
      "福井城址大名町",
      "福井駅",
      "仁愛女子高校",
      "田原町",
      "六渡寺",
      "庄川口",
      "第一イン新湊 クロスベイ前",
      "新町口",
      "中新湊",
      "東新湊",
      "海王丸",
      "越ノ潟",
      "古町",
    ];
    let stationName = tramRailways.includes(railwayName)
      ? stationNamesArray[random].name + "停留所"
      : stationNamesArray[random].name + "駅";
    if (tramReigaiRailways.includes(railwayName)) {
      if (tramReigaiStations.includes(stationNamesArray[random].name)) {
        stationName = stationNamesArray[random].name + "駅";
      }
    }
    document.getElementById("result-station").textContent = stationName;
    document.getElementById("result-railway").textContent = railwayName;
    document.getElementById("all").textContent =
      "抽選駅数：" + stationNamesArray.length;
    document.getElementById(
      "result-map"
    ).src = `https://maps.google.co.jp/maps?output=embed&q=${railwayName.replace(
      /（(.*)）/g,
      ""
    )}%20${stationName}`;
    document.getElementById(
      "result-tweet"
    ).value = `今日の駅は${railwayName}の『${stationName}』です！\n#StationPicker\nhttps://station-picker.pages.dev/`;
    document.getElementById(
      "result-url"
    ).value = `https://station-picker.pages.dev/?stations=${convertCheckboxesToString()}`;
    document
      .getElementById("tweet")
      .addEventListener("click", () => tweet(railwayName, stationName));
    setTimeout(() => {
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");
      document.getElementById("result").scrollIntoView({
        behavior: "smooth",
      });
    }, waitTime);
  } catch (e) {
    alert(e);
  }
};

const stationForm = document.getElementById("stations");
stationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  getRandomStation();
});

function tweet(railway, station) {
  window.open(
    `https://x.com/intent/tweet?text=今日の駅は${railway}の『${station}』です！&hashtags=StationPicker&url=https://station-picker.pages.dev/`
  );
}

document.getElementById("retry-same").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");
  getRandomStation();
});

document.getElementById("retry").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
});

const generatePrefecture = (prefecture, parent, top) => {
  const prefectureElement = document.getElementById(parent);
  prefectureElement.innerHTML += prefectureTemplate(prefecture, top);
};

const generateRailwayCompany = (railwayCompany, parent) => {
  if (railwayCompany.railway.length === 0) {
    return;
  }
  const railwayCompanyElement = document.getElementById(parent);
  railwayCompanyElement.innerHTML += railwayCompanyTemplate(
    railwayCompany,
    parent
  );
  toggleList.push(`${parent}-${railwayCompany.id}`);
};

const generateRailway = (railway, prefecture) => {
  if (railway.railway.length !== 1) {
    const railwayElement = document.getElementById(
      `${prefecture}-${railway.id}`
    );
    let railwayElements = "";
    railwayElements += '<div class="ml-4 text-lg">';
    railway.railway.forEach((station) => {
      railwayElements += railwayTemplate(
        station,
        `${prefecture}-${railway.id}`
      );
    });
    railwayElements += "</div>";
    railwayElement.innerHTML += railwayElements;
  }
};

const generateStations = (stations, railway, prefecture) => {
  const stationElement = document.getElementById(`${prefecture}-${railway}`);
  let stationElements = "";
  stationElements += '<div class="ml-4 text-lg">';
  stations.forEach((station) => {
    stationElements += stationTemplate(station, railway);
  });
  stationElements += "</div>";
  stationElement.innerHTML += stationElements;
  toggleList.push(`${prefecture}-${railway}`);
};

const generateRailwayStations = (railwayStations, railway, prefecture) => {
  Object.keys(railwayStations).forEach((key) => {
    const stations = railwayStations[key];
    const stationElement = document.getElementById(`${prefecture}-${key}`);
    if (!stationElement) {
      alert(`${prefecture}-${key} is not found`);
      return;
    }
    if ((stations.length === 0 || !stations) && stationElement) {
      stationElement.remove();
      return;
    }
    let stationElements = "";
    stationElements += '<div class="ml-4 text-lg">';
    stations.forEach((station) => {
      if (!station || !station.name || !station.id) {
        alert(`${station.toString()} key is not found`);
        return;
      }
      stationElements += stationTemplate(station, key);
    });
    stationElements += "</div>";
    stationElement.innerHTML += stationElements;
    toggleList.push(`${prefecture}-${key}`);
  });
};

const convertCheckboxesToString = () => {
  const checkboxes = document
    .getElementById("stations")
    .querySelectorAll('input[type="checkbox"]');
  const binaryArray = Array.from(checkboxes)
    .map((checkbox) => (checkbox.checked ? "1" : "0"))
    .join("");

  let encoded = "";
  let currentChar = binaryArray[0];
  let count = 0;

  for (let char of binaryArray) {
    if (char === currentChar) {
      count++;
    } else {
      encoded += `${currentChar}${count},`;
      currentChar = char;
      count = 1;
    }
  }
  encoded += `${currentChar}${count}`;
  return LZString.compressToEncodedURIComponent(btoa(encoded));
};

const setCheckboxStateFromString = (encodedString) => {
  const checkboxes = document
    .getElementById("stations")
    .querySelectorAll('input[type="checkbox"]');
  const binaryArray = [];

  if (!encodedString) {
    return;
  }
  if (!encodedString.match(/^[A-Za-z0-9+/=]+$/)) {
    alert("エンコード文字列が不正です");
    return;
  }
  try {
    const segments = atob(
      LZString.decompressFromEncodedURIComponent(encodedString)
    ).split(",");
    for (let segment of segments) {
      if (segment.length > 1) {
        const char = segment[0];
        const count = parseInt(segment.slice(1), 10);
        binaryArray.push(char.repeat(count));
      }
    }
    const binaryString = binaryArray.join("");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = binaryString[i] === "1";
    }
  } catch (e) {
    console.error(e);
    alert("エンコード文字列が不正です");
    return;
  }
};

const getUrlQueries = () => {
  const queryStr = window.location.search.slice(1);
  const queries = {};

  if (!queryStr) {
    return queries;
  }

  queryStr.split("&").forEach((queryStr) => {
    const queryArr = queryStr.split("=");
    queries[queryArr[0]] = queryArr[1];
  });

  return queries;
};

const copyResultUrlToClipboard = () => {
  const resultUrl = document.getElementById("result-url");
  resultUrl.select();
  navigator.clipboard.writeText(resultUrl.value);
};

const appVersion = "2.0.9";

document.getElementById("ver").textContent = "バージョン：" + appVersion;
