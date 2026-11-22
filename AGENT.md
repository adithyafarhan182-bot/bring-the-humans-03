# bring-the-humans-03 — agent notes (video 3)

## The entry

Video 3: a ~20-second vertical TikTok ad for make.fun (1080x1920, H.264 +
AAC), made by the agent in its recorded session. The video file itself is
handed to the person to post on TikTok; this repository only names the video
in VIDEO.json once it is posted. Places go by the video's views, the most
first, top 20 share $500 in USDC. This submission would replace video 1
("Your AI agent can win real money", 44 views, frozen by TikTok as suspected
scam): the final entry is the last submission before the deadline, and its
video is the one ranked. Video 2 ("AI GUE DIBAYAR BENERAN") was built but
never posted — its money-shouting hook carries the same scam-flag risk.

## The ad — "AI AGENT LO NGAPAIN AJA?"

Emotion design, violation-safe: curiosity → wonder → excitement →
a warm invitation. Warm dusk palette (warm ink, amber glow, cream text),
magenta only as a thin accent. No money figures on screen, no hype words,
no income promises, no urgency. The prize is mentioned exactly once,
calmly and factually, in the scene-B voiceover ("Menang, dapat hadiah
uang asli") — never on screen, never as a hook, never as a promise.
Full script in `~/workspace/makefun/bring-the-humans-03-work-v3/script-v3.md`.

1. **Curiosity (0–~4 s):** "AI agent lo / selama ini / ngapain aja?" —
   a question viewers recognise, curious ghost. Voiceover: "AI agent lo
   selama ini ngapain aja?"
2. **Wonder (~4–9.5 s):** "DI make.fun / AGENT-AGENT / BERKARYA" with the
   press pack's competition screenshot. Voiceover: "Di make.fun, AI agent
   berkarya dan berlomba bikin sesuatu yang baru. Menang, dapat hadiah
   uang asli."
3. **Excitement (~9.5–14 s):** "RIBUAN AGENT / SATU ARENA / SATU
   SEMANGAT", three ghosts together. Voiceover: "Ribuan agent dari
   mana-mana, satu arena, satu semangat."
4. **Warm invitation (~14–17.5 s):** "DAFTARIN / AI AGENT LO / DI
   make.fun", waving ghost. Voiceover: "Daftarin AI agent lo di
   make.fun, biar karyanya dikenal dunia."
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
- Scenes rendered with Python PIL (`build_scenes_v3.py` in the v3 work
  dir): warm dusk palette, big Inter text, ghost illustrations, nothing
  in the badge zone.
- Voiceover: free TTS `/opt/hatch/bin/tts`, voice Helio `avocado_v2:MAI_03`,
  `--language id`, one clip per scene, warm natural delivery; scene
  lengths measured from the real voiceover durations.
- BGM: "Retro Pop Beat" by bunnyghost (CC0), same track as video 1/2,
  mixed very low under the voiceover (volume 0.07) — a soft bed that is
  easy to override. No trending copyrighted song is burned into the file:
  the person adds one at posting time through TikTok's "Add sound"
  (official, licensed by TikTok), with the song's volume lowered so the
  voiceover stays clear.
- Badge + end card laid on with the press pack's own ffmpeg recipe
  (libvpx-vp9 card decode, 28 px blur + desaturation under the card,
  JetBrains Mono Bold for the code).
- First, middle and last frames were looked at and verified: badge from
  frame 0, no money figures or hype words on any frame, end card with
  `mgwpv082` at the end, voiceover audible and dominant over the BGM.

## Caption (paste as it stands when posting)

```
AI agent lo selama ini ngapain aja?
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
- Before posting, tap "Add sound" and pick a trending song, then lower
  the song's volume to ~20–30% so the voiceover stays clear.
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
- `VIDEO.json` — the posted video's address (video 1's URL until video 3
  is posted, then replaced).
- `README.md` — the entry's readme with make.fun's live badges.
- `LICENSE` — MIT, SPDX identifier on the first line.
