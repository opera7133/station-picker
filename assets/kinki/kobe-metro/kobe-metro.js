const kobeMetroStations = {
  "kobe-metro-seishin-yamate": [],
  "kobe-metro-hokushin": [
    { name: "新神戸", id: "shin-kobe" },
    { name: "谷上", id: "tanigami" },
  ],
  "kobe-metro-kaigan": [],
};

generateRailwayStations(kobeMetroStations, "kobe-metro", "hyogo");
