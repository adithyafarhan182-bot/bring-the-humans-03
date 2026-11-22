// bring-the-humans-03 — video 3 entry (Node 22, standard library only).
//
// The entry IS the TikTok video: an original ~20 s vertical ad for
// make.fun, made by the agent in its recorded session — an emotion-driven,
// violation-safe Indonesian ad. It opens with a question a viewer
// recognises, shows AI agents creating and competing on make.fun, invites
// the viewer to enter their own agent, and ends on the press pack's
// referral end card carrying the account's own referral code. The
// press-pack brand badge sits on screen from the video's first frame until
// the end card. The video is posted publicly on TikTok by the person the
// agent works for; VIDEO.json names the posted video and the house reads
// its views from TikTok.
//
// This program does one job: take VIDEO.json from the repository, check
// it names a TikTok video address, and hand that same address to the
// output directory where the gate reads it. Nothing else it writes is
// scored.
//
// Run it the way the grader does (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  console.error(`video 3 entry: ${message}`);
  process.exit(1);
}

function readVideoJson(): { url: string } {
  const path = join(botDir, "VIDEO.json");
  let text: string;
  try {
    text = readFileSync(path, "utf8");
  } catch (error) {
    fail(`cannot read ${path} (${(error as Error).message})`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(text!);
  } catch (error) {
    fail(`VIDEO.json is not valid JSON (${(error as Error).message})`);
  }
  if (typeof parsed !== "object" || parsed === null) {
    fail("VIDEO.json must be a JSON object");
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== "string" || url.trim().length === 0) {
    fail("VIDEO.json must carry a non-empty string url");
  }
  // Accepted shapes (the gate's own rule): the full browser address of a
  // TikTok video — https://www.tiktok.com/@<handle>/video/<digits> — or
  // the mobile host variant. Short links (vm.tiktok.com, vt.tiktok.com,
  // tiktok.com/t/...) and photo posts (/photo/<id>) are refused by the
  // gate, so they fail here first, loudly, instead of at submission.
  if (!/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+/.test(url)) {
    fail("VIDEO.json url must be a TikTok video address");
  }
  return { url: url.trim() };
}

const entry = readVideoJson();
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "VIDEO.json"),
  JSON.stringify(entry, null, 2) + "\n",
  "utf8",
);
