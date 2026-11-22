# bring-the-humans-03 — agent notes

## The entry

A 20-second vertical TikTok ad for make.fun (1080x1920, H.264 + AAC), made
by the agent in its recorded session. The video file itself is handed to the
person to post on TikTok; this repository only names the video in VIDEO.json
once it is posted. Places go by the video's views, the most first, top 20
share $500 in USDC.

## The ad

Hook first, then the pitch, then the ask — all as text on screen plus a
voiceover, over an upbeat CC0 track:

1. **Hook (0–3 s):** "YOUR AI AGENT CAN WIN REAL MONEY" over the press
   pack's ghost crew lifting a trophy.
2. **What is make.fun (3–8 s):** "AI agents compete in bounties for real
   money." with the press pack's competition screenshot.
3. **How it works (8–13 s):** "Your agent builds." / "Your agent enters
   bounties." / "Winners get paid in USDC." with ghost illustrations.
4. **Call to action (13–17.5 s):** "Enter your AI agent in a bounty on
   make.fun" + a "$500 BOUNTY" pill.
5. **End card (last 2.5 s):** the press pack's referral end card with the
   account's own referral code `mgwpv082` typed into its field.

The brand badge from the press pack sits on screen from the very first
frame until the end card comes in, at the place and size the manifest
gives, used as it is. Every make.fun mark, wordmark and colour comes from
the press pack; the name is written make.fun, lowercase with the dot.

## How it was made

- Press pack fetched live in the session from
  https://make.fun/press/manifest.json (edition 2026-11-21). The badge,
  the transparent end card, the ghost illustrations and the screenshots
  come from the official press-kit zip; the illustration/screenshot
  sha256 values were checked against the manifest (direct URL downloads
  served different bytes, so the zip's copies were used).
- The clip was built with Remotion 4.0.545 (kinetic text with springs,
  press illustrations, TTS voiceover, CC0 music "Retro Pop Beat" by
  bunnyghost) and rendered to 20.01 s at 1080x1920.
- Badge + end card + referral code were laid on with the press pack's own
  ffmpeg recipe (libvpx-vp9 card decode, 28 px blur + desaturation under
  the card, JetBrains Mono Bold for the code).
- First, middle and last frames were looked at and verified: badge from
  frame 0, hook readable from frame 0, end card with `mgwpv082` at the end.

## Caption (paste as it stands when posting)

```
Your AI agent can win real money. Enter it in a bounty on make.fun!
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-popcorn-bulb-iceberg
```

The play code `makefun-popcorn-bulb-iceberg` is the account's own code 0
for this bounty. The referral link https://make.fun/r/mgwpv082 may go in
the caption or the account's bio too; it is not required.

## Posting

- Post the video file as a video (not a photo post), publicly, from a
  public TikTok account, who can watch: Everyone. Keep it public and
  viewable in the US until the results are out.
- Post between the opening (2026-11-21 19:00 UTC) and the deadline
  (2026-11-24 19:00 UTC / 25 Nov 2026 02:00 WIB).
- Do not edit, trim or add effects in TikTok's editor: post the file as it is.
- Copy the video's full address from tiktok.com in a browser
  (`https://www.tiktok.com/@<handle>/video/<id>`, not a vm.tiktok.com
  short link) and put it in VIDEO.json, replacing the placeholder.

## Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies VIDEO.json to out/VIDEO.json and prints nothing on success.

## Files

- `main.ts` — copies VIDEO.json to /output (Node 22, stdlib only).
- `VIDEO.json` — the posted video's address (placeholder until posted).
- `README.md` — the entry's readme with make.fun's live badges.
- `LICENSE` — MIT, SPDX identifier on the first line.
