const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFile = path.join(__dirname, "input_countries.csv");
const canadaFile = path.join(__dirname, "canada.txt");
const usaFile = path.join(__dirname, "usa.txt");

// a) Delete canada.txt and usa.txt if already exist
function deleteIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted existing file: ${path.basename(filePath)}`);
  }
}

deleteIfExists(canadaFile);
deleteIfExists(usaFile);

// Create write streams
const canadaWriteStream = fs.createWriteStream(canadaFile, { flags: "a" });
const usaWriteStream = fs.createWriteStream(usaFile, { flags: "a" });

// Write headers (sample output format)
const header = "country,year,population\n";
canadaWriteStream.write(header);
usaWriteStream.write(header);

let canadaCount = 0;
let usaCount = 0;

// Read CSV using stream
fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    
    const country = (row.country || row.Country || "").toString().trim().toLowerCase();
    const year = (row.year || row.Year || "").toString().trim();
    const population = (row.population || row.Population || "").toString().trim();

    if (!country) return;

    // b) Filter Canada -> canada.txt
    if (country === "canada") {
      canadaWriteStream.write(`canada,${year},${population}\n`);
      canadaCount++;
    }

    // c) Filter United States -> usa.txt
    if (country === "united states" || country === "united states of america") {
      usaWriteStream.write(`united states,${year},${population}\n`);
      usaCount++;
    }
  })
  .on("end", () => {
    canadaWriteStream.end();
    usaWriteStream.end();

    console.log("Done!");
    console.log(`Canada rows written: ${canadaCount}`);
    console.log(`USA rows written: ${usaCount}`);
    console.log("Created files: canada.txt, usa.txt");
  })
  .on("error", (err) => {
    console.error("Error reading CSV:", err);
  });
