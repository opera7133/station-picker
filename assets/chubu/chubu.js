const chubuRailways = {
  id: "chubu",
  name: "中部",
  railways: {
    "jr-central": {
      id: "jr-central",
      name: "JR東海",
      icon: "assets/chubu/jr-central/jr.svg",
      railway: [
        {
          name: "東海道本線",
          id: "tokaido",
          icon: "assets/chubu/jr-central/ca.svg",
        },
        {
          name: "御殿場線",
          id: "gotemba",
          icon: "assets/chubu/jr-central/cb.svg",
        },
        {
          name: "身延線",
          id: "minobu",
          icon: "assets/chubu/jr-central/cc.svg",
        },
        {
          name: "飯田線",
          id: "iida",
          icon: "assets/chubu/jr-central/cd.svg",
        },
        {
          name: "武豊線",
          id: "taketoyo",
          icon: "assets/chubu/jr-central/ce.svg",
        },
        {
          name: "中央本線",
          id: "chuo",
          icon: "assets/chubu/jr-central/cf.svg",
        },
        {
          name: "高山本線",
          id: "takayama",
          icon: "assets/chubu/jr-central/cg.svg",
        },
        {
          name: "太多線",
          id: "taketoyo",
          icon: "assets/chubu/jr-central/ci.svg",
        },
        {
          name: "関西本線",
          id: "kansai",
          icon: "assets/chubu/jr-central/cj.svg",
        },
      ],
    },
    "jr-east": {
      id: "jr-east",
      name: "JR東日本",
      icon: "assets/chubu/jr-east/jr.svg",
      railway: [
        {
          name: "上越線",
          id: "joetsu",
          icon: "assets/chubu/jr-east/joetsu.svg",
        },
        {
          name: "小海線",
          id: "koumi",
          icon: "assets/chubu/jr-east/koumi.svg",
        },
      ],
    },
  },
};

const chubuRailwaysList = [chubuRailways];

const flattenChubuRailways = chubuRailwaysList.reduce((acc, prefecture) => {
  const railwayList = Object.keys(prefecture.railways).map((key) => {
    const railway = prefecture.railways[key];
    if (railway.railway.length === 1) {
      return [
        {
          id: railway.id,
          name: railway.name,
        },
      ];
    } else {
      return railway.railway.map((station) => {
        return {
          id: `${railway.id}-${station.id}`,
          name: `${railway.name}-${station.name}`,
        };
      });
    }
  });
  const railwayListFlatten = railwayList.flat();
  return [...Array.from(acc), ...railwayListFlatten];
}, []);

for (const prefecture of chubuRailwaysList) {
  if (prefecture.id === "chubu") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "chubu");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}

document.getElementById("stations").innerHTML += submitButton;

const chubuScripts = [];

generateScripts(chubuScripts, "chubu/");

for (const prefecture of chubuRailwaysList) {
  setToggle(prefecture.id);
}
