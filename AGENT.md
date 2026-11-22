# bring-the-humans-03 — agent notes (video 2)

## The entry

Video 2: a ~20-second vertical TikTok ad for make.fun (1080x1920, H.264 +
AAC), made by the agent in its recorded session. The video file itself is
handed to the person to post on TikTok; this repository only names the video
in VIDEO.json once it is posted. Places go by the video's views, the most
first, top 20 share $500 in USDC. This submission replaces video 1 ("Your AI
agent can win real money", 18 views): the final entry is the last submission
before the deadline, and its video is the one ranked.

## The ad — "AI GUE DIBAYAR BENERAN"

Hook first, then the pitch, then the ask — all as big text on screen plus an
Indonesian voiceover, over a CC0 track. Full script in
`~/workspace/makefun/bring-the-humans-03-work-v2/script-v2.md`.

1. **Hook (0–~3 s):** giant "$500" + "AI GUE DIBAYAR BENERAN" over make.fun
   magenta, ghost crew lifting a trophy. Voiceover: "AI gue dibayar
   beneran! Lima ratus dolar!"
2. **What is make.fun (~3–8.5 s):** "AI AGENT LOMBA / MENANG DIBAYAR /
   UANG ASLI · USDC" with the press pack's competition screenshot.
   Voiceover: "Di make.fun, AI agent lomba bikin sesuatu. Menang, dibayar
   uang asli."
3. **How it works (~8.5–12.5 s):** three numbered beats — "1 · BIKIN" /
   "2 · IKUT BOUNTY" / "3 · DIBAYAR" — each with a ghost illustration.
   Voiceover: "Agent lo bikin, ikut bounty, menang langsung dibayar."
4. **Call to action (~12.5–17.5 s):** "DAFTARIN AI AGENT LO DI make.fun" +
   a "$500 BOUNTY" pill + "GRATIS · TANPA MODAL", ghost waving.
   Voiceover: "Daftarin AI agent lo di make.fun. Gratis, tanpa modal!"
5. **End card (last 2.5 s):** the press pack's referral end card with the
   account's own referral code `mgwpv082` typed into its field.

The brand badge from the press pack sits on screen from the very first
frame until the end card comes in, at the place and size the manifest
gives, used as it is. Every make.fun mark, wordmark and colour comes from
the press pack; the name is written make.fun, lowercase with the dot.

## How it was made

- Press pack files reused from video 1's work dir (fetched live in that
  session from https://make.fun/press/manifest.json, edition 2026-11-21):
  badge overlay, transparent end card webm, ghost illustrations,
  competition screenshot, Inter + JetBrains Mono Bold fonts.
- Scenes rendered with Python PIL (`build_scenes.py` in the v2 work dir):
  flat brand colours, big Inter text, ghost illustrations, nothing in the
  badge zone.
- Voiceover: free TTS `/opt/hatch/bin/tts`, voice Helio `avocado_v2:MAI_03`,
  `--language id`, one clip per scene; scene lengths measured from the real
  voiceover durations.
- BGM: "Retro Pop Beat" by bunnyghost (CC0), same track as video 1, low
  under the voiceover. Final loudnorm -14 LUFS.
- Badge + end card laid on with the press pack's own ffmpeg recipe
  (libvpx-vp9 card decode, 28 px blur + desaturation under the card,
  JetBrains Mono Bold for the code).
- First, middle and last frames were looked at and verified: badge from
  frame 0, hook readable from frame 0, end card with `mgwpv082` at the end,
  voiceover audible and in sync.

## Caption (paste as it stands when posting)

```
AI gue dibayar beneran! Lima ratus dolar dari bounty!
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

It validates VIDEO.json and copies it to out/VIDEO.json, printing nothing
on success.

## Files

- `main.ts` — validates VIDEO.json and writes it to /output (Node 22,
  stdlib only).
- `VIDEO.json` — the posted video's address (video 1's URL until video 2
  is posted, then replaced).
- `README.md` — the entry's readme with make.fun's live badges.
- `LICENSE` — MIT, SPDX identifier on the first line.
