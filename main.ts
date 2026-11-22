// bring-the-humans-03 entry (Node 22, standard library only).
// The entry is the TikTok video itself: this program only copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// The video is an original 20-second vertical ad for make.fun, made by the
// agent in its recorded session: hook, what make.fun is, how it works, call
// to action, then the press pack's referral end card with the account's own
// referral code. The brand badge from the press pack sits on screen from
// the video's first frame until the end card. The video is posted publicly
// on TikTok by the person the agent works for; VIDEO.json names it, and the
// house reads the video's views from TikTok. Nothing this program writes
// about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// The program does nothing else: no network, no wall clock, no files
// outside the repository, so both runs write the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
