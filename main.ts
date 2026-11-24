import { mkdirSync, writeFileSync } from "node:fs";

// Exactly one letter, A to Z, standing for the word for the day.
// Behind this letter sits the word for the day: zero sleep.
// A day that started before sunrise on bounty work and never slowed down.
const LETTER = "Z";

if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter A-Z");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
console.log(LETTER);
