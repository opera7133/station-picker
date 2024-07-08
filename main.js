const submitButton = `
<button
        type="submit"
        class="block mx-auto mt-8 px-4 py-2 bg-black text-white rounded-md w-full hover:opacity-80 duration-100"
        id="submit"
      >
        抽選
      </button>`;

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

const railwayCompanyTemplate = (railwayCompany, landscape = fase) => `
  <details id="${railwayCompany.id}">
            <summary class="relative py-4 text-lg cursor-pointer">
              <img
                src="${railwayCompany.icon}"
                alt="${railwayCompany.name}"
                class="inline ml-2 w-8 ${landscape ? "h-4" : "h-8"}"
              />
              <span class="ml-2">${railwayCompany.name}</span>
              <input
                type="checkbox"
                class="absolute top-1/2 -translate-y-1/2 right-0 mr-4"
                id="${railwayCompany.id}-toggle"
              />
            </summary>
          </details>`;

const railwayTemplate = (railway, key) => `
  <details class="ml-4" id="${key}-${railway.id}">
          <summary class="relative py-4 text-lg cursor-pointer">
            <img src="${railway.icon}" alt="${railway.name}" class="inline ml-2 w-8 h-8">
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
  document.getElementById(
    "result-tweet"
  ).value = `今日の駅は${railwayName}の『${stationName}』です！\n#StationPicker\nhttps://dl.wmsci.com/station/`;
  document.getElementById("result").classList.remove("hidden");
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

function tweet(railway, station) {
  window.open(
    `https://x.com/intent/tweet?text=今日の駅は${railway}の『${station}』です！&hashtags=StationPicker&url=https://dl.wmsci.com/station/`
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
  document.getElementById(
    "result-tweet"
  ).value = `今日の駅は${railwayName}の『${stationName}』です！\n#StationPicker\nhttps://dl.wmsci.com/station/`;
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

document.getElementById("retry").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
});

const generatePrefecture = (prefecture, parent, top) => {
  const prefectureElement = document.getElementById(parent);
  prefectureElement.innerHTML += prefectureTemplate(prefecture, top);
};

const generateRailwayCompany = (railwayCompany, parent) => {
  const railwayCompanyElement = document.getElementById(parent);
  const landscape = railwayCompany.id === "tx";
  railwayCompanyElement.innerHTML += railwayCompanyTemplate(
    railwayCompany,
    landscape
  );
};

const generateRailway = (railway) => {
  if (railway.railway.length !== 1) {
    const railwayElement = document.getElementById(railway.id);
    let railwayElements = "";
    railwayElements += '<div class="ml-4 text-lg">';
    railway.railway.forEach((station) => {
      railwayElements += railwayTemplate(station, railway.id);
    });
    railwayElements += "</div>";
    railwayElement.innerHTML += railwayElements;
  }
};

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
    if ((stations.length === 0 || !stations) && stationElement) {
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
  "kanto",
  "jr-east/tokyo",
  "jr-east/chiba",
  "jr-east/saitama",
  "jr-east/ibaraki",
  "jr-east/kanagawa",
  "tokyo-metro/tokyo-metro",
  "tobu/chiba",
  "tobu/saitama",
  "seibu/seibu",
  "keisei/ks",
  "tx/tx",
  "toei/toei",
  "toei/nt",
  "toei/sakura",
  "keio/keio",
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
  "sr/sr",
  "ns/ns",
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

document.getElementById("ver").textContent = `バージョン：v${appVersion}`;
