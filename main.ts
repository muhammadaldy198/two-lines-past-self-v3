// Two Lines to Your Past Self — v3 entry program.
// Line 2 shows the letter's endurance with concrete benchmarks: twelve years, three moves, every job offer.
// Writes the two-line warning to /output/entry.txt (gate: 1-280 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "At 9:47 AM on June 12 in Room 9, don't second-guess question 14 — circle B and move on.",
  "That B won you the scholarship, and the letter still hangs on the fridge twelve years later, creased from three moves and held beside every job offer since.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
console.log("wrote /output/entry.txt");
