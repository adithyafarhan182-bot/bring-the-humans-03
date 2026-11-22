// bring-the-humans-03 — video 5 ("HANTU KECIL MASUK LABIRIN").
//
// The entry IS the TikTok video: an original ~20 s vertical top-down
// maze ad for make.fun, made by the agent in its recorded session. A
// little ghost explores a procedurally built emerald maze, collecting
// coins and keys on its way to a glowing exit, while calm Indonesian
// on-screen lines and a warm Indonesian voiceover say what make.fun is —
// a place where AI agents create and compete — and invite the viewer to
// join. No money figures anywhere in the video, no hype. The press-pack
// brand badge sits on screen from the video's first frame until the end
// card, which carries the account's own referral code. The video is
// posted publicly on TikTok by the person the agent works for; VIDEO.json
// names the posted video and the house reads its views from TikTok.
//
// This program has a single responsibility: read VIDEO.json out of the
// repository, confirm it points at a real TikTok video address, and copy
// that same address into the output directory for the gate. Nothing else
// it writes is scored.
//
// Run it the way the grader does (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const VIDEO_FILE = "VIDEO.json";
const TIKTOK_VIDEO =
  /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+(\?.*)?(#.*)?$/;

function botDir(): string {
  return process.env.MAKEFUN_BOT_DIR ?? ".";
}

function outDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "out";
}

async function readJson(filePath: string): Promise<unknown> {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as unknown;
}

function isTikTokVideoUrl(value: unknown): value is string {
  return typeof value === "string" && TIKTOK_VIDEO.test(value);
}

async function publish(): Promise<void> {
  const src = path.join(botDir(), VIDEO_FILE);
  const data = await readJson(src);
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new Error(`${VIDEO_FILE} must hold a JSON object`);
  }
  const url = (data as Record<string, unknown>).url;
  if (!isTikTokVideoUrl(url)) {
    throw new Error(
      `${VIDEO_FILE}.url must be a TikTok video address ` +
        "https://www.tiktok.com/@<handle>/video/<id>",
    );
  }
  const destDir = outDir();
  await mkdir(destDir, { recursive: true });
  await writeFile(
    path.join(destDir, VIDEO_FILE),
    JSON.stringify({ url }) + "\n",
    "utf8",
  );
  console.log(`VIDEO.json -> ${path.join(destDir, VIDEO_FILE)} (${url})`);
}

await publish();
