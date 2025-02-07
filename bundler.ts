import fs from "fs";
import path from "path";
import UglifyJS from "uglify-js";
import { fileURLToPath } from "url";

// read assets/**/*.js and bundle to one file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "assets");
const bundleFile = path.join(__dirname, "bundle.js");
const overseaBundleFile = path.join(__dirname, "oversea-bundle.js");

const parent = fs.readdirSync(assetsDir);
const regionfiles = parent
  .map((file) => {
    const filePath = path.join(assetsDir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      if (file !== "oversea") {
        return fs.readdirSync(filePath).map((f) => path.join(file, f));
      }
    }
    return file;
  })
  .flat()
  .filter((f) => f !== "")
  .filter((f) => f);

const overseaRegionFiles = parent
  .map((file) => {
    const filePath = path.join(assetsDir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      if (file === "oversea") {
        return fs
          .readdirSync(filePath)
          .map((f) => path.join(file, f))
          .map((f) => {
            const filePath = path.join(assetsDir, f);
            if (fs.lstatSync(filePath).isDirectory()) {
              return fs.readdirSync(filePath).map((ff) => path.join(f, ff));
            }
          })
          .flat() as string[];
      }
    }
    return "";
  })
  .flat()
  .filter((f) => f !== "")
  .filter((f) => f);

const regions = [
  "shinkansen",
  "hokkaido",
  "tohoku",
  "kanto",
  "chubu",
  "kinki",
  "chugoku",
  "shikoku",
  "kyushu",
  "tickets",
];
const overseaRegions = ["korea", "taiwan", "singapore"];
const files = regionfiles
  .map((f) => {
    if (f) {
      const filePath = path.join(assetsDir, f);
      if (fs.lstatSync(filePath).isDirectory()) {
        return fs.readdirSync(filePath).map((ff) => path.join(f, ff));
      }
      return f;
    } else {
      return "";
    }
  })
  .flat()
  .filter((f) => f !== "")
  .filter((f) => f.endsWith(".js"))
  .sort((a, b) => {
    if (!a.includes("/") || !b.includes("/")) {
      return 1;
    }
    if (a.match(/\//g)?.length === b.match(/\//g)?.length) {
      return a.localeCompare(b);
    } else {
      return a.match(/\//g)?.length! - b.match(/\//g)?.length!;
    }
  })
  .sort((a, b) => {
    const aIndex = regions.findIndex((r) => a.includes(r));
    const bIndex = regions.findIndex((r) => b.includes(r));
    return aIndex - bIndex;
  })
  .sort((a, b) => {
    if (a === "main.js") {
      return -1;
    }
    if (b === "main.js") {
      return 1;
    }
    return 0;
  });
const overseaFiles = overseaRegionFiles
  .map((f) => {
    if (f) {
      const filePath = path.join(assetsDir, f);
      if (fs.lstatSync(filePath).isDirectory()) {
        return fs.readdirSync(filePath).map((ff) => path.join(f, ff));
      }
      return f;
    } else {
      return "";
    }
  })
  .flat()
  .filter((f) => f !== "")
  .filter((f) => f.endsWith(".js"))
  .sort((a, b) => {
    if (!a.includes("/") || !b.includes("/")) {
      return 1;
    }
    if (a.match(/\//g)?.length === b.match(/\//g)?.length) {
      return a.localeCompare(b);
    } else {
      return a.match(/\//g)?.length! - b.match(/\//g)?.length!;
    }
  })
  .sort((a, b) => {
    const aIndex = overseaRegions.findIndex((r) => a.includes(r));
    const bIndex = overseaRegions.findIndex((r) => b.includes(r));
    return aIndex - bIndex;
  });

const content = files
  .map((file, i) => {
    const fn = fs.readFileSync(path.join(assetsDir, file), "utf8");
    const fileName = path.basename(file, ".js");
    if (regions.includes(fileName)) {
      const region = fileName;
      return (
        fn +
        `for (const prefecture of ${region}RailwaysList) {
  if (prefecture.id === "${region}") {
    generatePrefecture(prefecture, "stations", true);
  } else {
    generatePrefecture(prefecture, "${region}");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}`
      );
    } else {
      return fn;
    }
  })
  .join("\n");
const overseaContent = overseaFiles
  .map((file, i) => {
    const fn = fs.readFileSync(path.join(assetsDir, file), "utf8");
    const fileName = path.basename(file, ".js");
    if (overseaRegions.includes(fileName)) {
      const overseaRegion = fileName;
      return (
        fn +
        `for (const prefecture of ${overseaRegion}RailwaysList) {
  if (prefecture.id === "${overseaRegion}") {
    generatePrefecture(prefecture, "oversea-stations", true);
  } else {
    generatePrefecture(prefecture, "${overseaRegion}");
  }
  Object.keys(prefecture.railways).forEach((key) => {
    const railway = prefecture.railways[key];
    generateRailwayCompany(railway, prefecture.id);
    generateRailway(railway, prefecture.id);
  });
}`
      );
    } else {
      return fn;
    }
  })
  .join("\n");

let regionToggle = "";

for (const region of regions) {
  regionToggle += `for (const prefecture of ${region}RailwaysList) {
    setToggle(prefecture.id);
  }`;
}
for (const region of overseaRegions) {
  regionToggle += `for (const prefecture of ${region}RailwaysList) {
    setToggle(prefecture.id);
  }`;
}

const toggle = `${regionToggle}
for (const toggler of toggleList) {
  setToggle(toggler);
}

const allPrefectureCheckbox = document.getElementById("all-prefectures-toggle");
allPrefectureCheckbox.addEventListener("click", () => {
  const checkboxes = document.getElementById("stations").querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = allPrefectureCheckbox.checked;
  });
});

const queryStations = getUrlQueries().stations;
if (queryStations) {
  setCheckboxStateFromString(queryStations);
}`;

const minified = UglifyJS.minify(content, {
  warnings: true,
  compress: {
    passes: 2,
  },
  mangle: true,
});

const overseaMinified = UglifyJS.minify(overseaContent + toggle, {
  warnings: true,
  compress: {
    passes: 2,
  },
  mangle: true,
});

if (minified.error) {
  console.error(minified.error);
  process.exit(1);
}

if (minified.warnings) {
  console.error(minified.warnings);
}

fs.writeFileSync(bundleFile, minified.code);
fs.writeFileSync(overseaBundleFile, overseaMinified.code);
