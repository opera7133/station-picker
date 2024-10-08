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
            <img src="${railway.icon}" alt="${railway.name}" class="inline object-contain ml-2 w-8 h-8">
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
    const stationNames = new Set();
    const checkboxes = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).filter((checkbox) => !checkbox.id.includes("toggle"));
    if (checkboxes.length === 0) {
      alert("駅を選択してください");
      return;
    }
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
    const random = Math.floor(Math.random() * stationNamesArray.length);
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
    let stationName = tramRailways.includes(railwayName)
      ? stationNamesArray[random].name + "停留所"
      : stationNamesArray[random].name + "駅";
    if (railwayName === "福井鉄道福武線") {
      // 鉄道線
      const reigai = [
        "商工会議所前",
        "足羽山公園口",
        "福井城址大名町",
        "福井駅",
        "仁愛女子高校",
        "田原町",
      ];
      if (reigai.includes(stationNamesArray[random].name)) {
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
    ).value = `今日の駅は${railwayName}の『${stationName}』です！\n#StationPicker\nhttps://dl.wmsci.com/station/`;
    document.getElementById("result").classList.remove("hidden");
    document
      .getElementById("tweet")
      .addEventListener("click", () => tweet(railwayName, stationName));
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
    `https://x.com/intent/tweet?text=今日の駅は${railway}の『${station}』です！&hashtags=StationPicker&url=https://dl.wmsci.com/station/`
  );
}

document.getElementById("retry-same").addEventListener("click", () => {
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

const appVersion = "1.7.0";

document.getElementById("ver").textContent = "バージョン：" + appVersion;
