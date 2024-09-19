import fs from "fs";
import path from "path";
import UglifyJS from "uglify-js";
import { fileURLToPath } from "url";

// read assets/**/*.js and bundle to one file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "assets");
const bundleFile = path.join(__dirname, "bundle.js");

const parent = fs.readdirSync(assetsDir);
const regionfiles = parent
  .map((file) => {
    const filePath = path.join(assetsDir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      return fs.readdirSync(filePath).map((f) => path.join(file, f));
    }
    return file;
  })
  .flat();
const regions = [
  "shinkansen",
  "hokkaido",
  "tohoku",
  "kanto",
  "chubu",
  "kinki",
  //"chugoku",
  "shikoku",
  "kyushu",
];
const files = regionfiles
  .map((f) => {
    const filePath = path.join(assetsDir, f);
    if (fs.lstatSync(filePath).isDirectory()) {
      return fs.readdirSync(filePath).map((ff) => path.join(f, ff));
    }
    return f;
  })
  .flat()
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

let regionToggle = "";

for (const region of regions) {
  regionToggle += `for (const prefecture of ${region}RailwaysList) {
    setToggle(prefecture.id);
  }`;
}

const toggle = `${regionToggle}
for (const toggler of toggleList) {
  setToggle(toggler);
}`;

const minified = UglifyJS.minify(content + toggle, { warnings: true });

if (minified.error) {
  console.error(minified.error);
  process.exit(1);
}

if (minified.warnings) {
  console.error(minified.warnings);
}

fs.writeFileSync(bundleFile, minified.code);
