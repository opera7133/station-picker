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
  document.getElementById(
    "result-tweet"
  ).value = `今日の駅は${railwayName}の『${stationName}』です！\nhttps://dl.wmsci.com/station/`;
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
  document.getElementById(
    "result-tweet"
  ).value = `今日の駅は${railwayName}の『${stationName}』です！\nhttps://dl.wmsci.com/station/`;
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
  "kanto",
  "jr-east/tokyo",
  "jr-east/chiba",
  "jr-east/kanagawa",
  "tokyo-metro/tokyo-metro",
  "tobu/chiba",
  "tobu/saitama",
  "seibu/seibu",
  "keisei/ks",
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
