import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Source and destination paths
const sourcePath = path.join(__dirname, "../src/utils/buildTimeData.ts");
const destPath = path.join(__dirname, "../dist/server/buildTimeData.js");

// Ensure destination directory exists
const destDir = path.dirname(destPath);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy the file
try {
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Successfully copied ${sourcePath} to ${destPath}`);
} catch (error) {
  console.error("Error copying file:", error.message);
  process.exit(1);
}
