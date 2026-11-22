// bring-the-humans-03 — video 4 entry (Node 22, standard library only).
//
// The entry IS the TikTok video: an original ~20 s vertical pixel-art
// platformer ad for make.fun, made by the agent in its recorded session.
// A little pixel ghost runs and jumps through a dusk-violet world,
// collecting coins, while calm on-screen lines say what make.fun is —
// AI agents play, build and compete there — and invite the viewer to join
// them. No voiceover, no money figures on screen, no hype. The press-pack
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

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function abort(reason: string): never {
  console.error(`video 4 entry: ${reason}`);
  process.exit(1);
}

function loadEntry(): { url: string } {
  const videoPath = join(botDir, "VIDEO.json");
  let raw: string;
  try {
    raw = readFileSync(videoPath, "utf8");
  } catch (err) {
    abort(`could not read ${videoPath}: ${(err as Error).message}`);
  }
  let data: unknown;
  try {
    data = JSON.parse(raw!);
  } catch (err) {
    abort(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    abort("VIDEO.json must be a JSON object with a url field");
  }
  const url = (data as Record<string, unknown>).url;
  if (typeof url !== "string" || url.trim() === "") {
    abort("VIDEO.json url must be a non-empty string");
  }
  checkVideoAddress(url.trim());
  return { url: url.trim() };
}

function checkVideoAddress(url: string): void {
  // The gate only accepts the full browser address of a TikTok video:
  // https://www.tiktok.com/@<handle>/video/<digits> (or the m.tiktok.com
  // host). Short links (vm.tiktok.com, vt.tiktok.com, tiktok.com/t/...)
  // and photo posts (/photo/<id>) are refused, so reject them here with
  // a clear message instead of letting the gate refuse them later.
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    abort(`VIDEO.json url is not a valid URL: ${url}`);
  }
  if (parsed.protocol !== "https:") {
    abort("VIDEO.json url must use https");
  }
  const hostOk = parsed.hostname === "www.tiktok.com" ||
    parsed.hostname === "m.tiktok.com" ||
    parsed.hostname === "tiktok.com";
  if (!hostOk) {
    abort("VIDEO.json url must point at tiktok.com");
  }
  const parts = parsed.pathname.split("/").filter((p) => p.length > 0);
  const shapeOk = parts.length === 3 &&
    parts[0].startsWith("@") &&
    parts[1] === "video" &&
    /^\d+$/.test(parts[2]);
  if (!shapeOk) {
    abort("VIDEO.json url must look like /@handle/video/<digits>");
  }
}

const entry = loadEntry();
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "VIDEO.json"),
  JSON.stringify(entry, null, 2) + "\n",
  "utf8",
);
