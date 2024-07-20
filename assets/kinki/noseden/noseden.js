const nosedenStations = {
  "noseden-myoken": [
    { name: "川西能勢口", id: "kawanishi-noseguchi" },
    { name: "絹延橋", id: "kinunobe-bashi" },
    { name: "滝山", id: "takiyama" },
    { name: "鶯の森", id: "uguisu-no-mori" },
    { name: "鼓滝", id: "tsuzumigataki" },
    { name: "多田", id: "tada" },
    { name: "平野", id: "hirano" },
    { name: "一の鳥居前", id: "ichinotorii" },
    { name: "畦野", id: "uneno" },
    { name: "山下", id: "yamashita" },
    { name: "笹部", id: "sasabe" },
    { name: "光風台", id: "kofudai" },
    { name: "ときわ台", id: "tokiwadai" },
    { name: "妙見口", id: "myoken-guchi" },
  ],
  "noseden-nissei": [
    { name: "山下", id: "yamashita" },
    { name: "日生中央", id: "nissei-chuo" },
  ],
};

generateRailwayStations(nosedenStations, "noseden", "hyogo");
