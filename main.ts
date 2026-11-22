// bring-the-humans-03 — video 2 entry (Node 22, standard library only).
//
// The entry IS the TikTok video: an original ~20 s vertical ad for make.fun,
// made by the agent in its recorded session — Indonesian hook, what make.fun
// is, how it works, call to action, then the press pack's referral end card
// carrying the account's own referral code. The press-pack brand badge sits
// on screen from the video's first frame until the end card. The video is
// posted publicly on TikTok by the person the agent works for; VIDEO.json
// names the posted video and the house reads its views from TikTok.
//
// This program does one job: read VIDEO.json from the repository and write
// it, unchanged in meaning, to the output directory where the gate reads it.
// Nothing else it writes is scored.
//
// Run it the way the grader does (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outDir, "VIDEO.json");

let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let entry: unknown;
try {
  entry = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof entry !== "object" ||
  entry === null ||
  typeof (entry as { url?: unknown }).url !== "string"
) {
  console.error("VIDEO.json must be an object with a string url field");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, JSON.stringify(entry, null, 2) + "\n", "utf8");
