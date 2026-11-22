# bring-the-humans-03 — agent notes (video 5)

## The entry

Video 5: a ~20-second vertical TikTok ad for make.fun (1080x1920, H.264 +
AAC), made by the agent in its recorded session. The video file itself is
handed to the person to post on TikTok; this repository only names the video
in VIDEO.json once it is posted. Places go by the video's views, the most
first, top 20 share $500 in USDC. This submission would replace video 1
("Your AI agent can win real money", 44 views, frozen by TikTok as suspected
scam): the final entry is the last submission before the deadline, and its
video is the one ranked. Video 2 ("AI GUE DIBAYAR BENERAN") was built but
never posted — its money-shouting hook carries the same scam-flag risk.
Video 3 ("AI AGENT LO NGAPAIN AJA?", emotion design, no money hype) was
built and handed over, and was reported still flagged as well. Video 4
("AI AGENTS PLAY", pixel platformer, no voiceover, English text) was built
and handed over but not posted; the person then asked for a different game
in Bahasa Indonesia — this video 5.

## The ad — "HANTU KECIL MASUK LABIRIN" (top-down maze, Bahasa Indonesia)

A real maze simulation, not a slideshow: a little ghost explores a
procedurally generated emerald maze (top-down view), following the solved
path while the camera follows it, collecting coins and keys on its way to
a glowing exit. Calm Indonesian on-screen lines and a warm Indonesian
voiceover say what make.fun is and why to join. No money figures or money
words anywhere in the video — in text or voice — no hype, no income
promises, no urgency. The prize is mentioned nowhere in the video — only
in the caption, where the bounty rules require it.

A different genre from video 4 on purpose: top-down maze instead of a
side-scrolling platformer, Indonesian instead of English, voiceover
instead of silence, an emerald-and-amber palette instead of dusk violet.
Nothing of video 4's gameplay, layout or scenes is reused; the ghost is
drawn procedurally here and the maze is generated here.

1. **Masuk (0–~3 s):** "HANTU KECIL / MASUK LABIRIN" — the ghost enters
   the maze, first coins collected. VO: "Hantu kecil masuk labirin."
2. **Berkarya (~3–~9 s):** "DI make.fun / AI AGENT BERKARYA / DAN
   BERLOMBA" — the ghost turns corners, collects a key. VO: "Di make.fun,
   AI agent berkarya dan berlomba bikin sesuatu yang baru."
3. **Karya baru (~9–~14 s):** "SETIAP JALAN / ADA KARYA BARU" — deeper
   in the maze, second key, more coins. VO: "Setiap jalan, ada karya baru."
4. **Gabung (~14–~17.5 s):** "GABUNG DI / make.fun" — the exit glows as
   the ghost approaches it. VO: "Gabung di make.fun, biar karyamu dikenal
   dunia."
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
  Inter + JetBrains Mono Bold fonts. (The ghost in the game and the maze
  itself are drawn/generated procedurally in the build script, not taken
  from the pack.)
- Maze generated and solved in Python (`build_maze_v5.py` in the v5 work
  dir): recursive-backtracker maze, 15x25 rooms, BFS solution, the ghost
  follows the solution path at a constant speed, camera smooth-follows
  it, coins spin and sparkle on pickup, keys light up in the HUD, the
  exit door glows as the ghost nears it. 600 frames at 30 fps, PIL.
- Voiceover: Indonesian, free TTS (`/opt/hatch/bin/tts`, voice Helio
  `avocado_v2:MAI_03`, `--language id`), one clip per scene; scene
  lengths measured from the real VO durations.
- Audio: VO dominant. BGM: "Retro Pop Beat" by bunnyghost (CC0), same
  track as video 1/2/3/4, mixed very low (volume 0.07) — a soft bed that
  is easy to override. No trending copyrighted song is burned into the
  file: the person adds one at posting time through TikTok's "Add sound"
  (official, licensed by TikTok).
- Badge + end card laid on with the press pack's own ffmpeg recipe
  (libvpx-vp9 card decode, 28 px blur + desaturation under the card,
  JetBrains Mono Bold for the code).
- First, middle and last frames were looked at and verified: badge from
  frame 0, maze visibly alive (ghost moving, walls, coins, keys, exit),
  no money figures or money words on any frame or in the voiceover, end
  card with `mgwpv082` at the end, continuous voiceover and soft music.

## Caption (paste as it stands when posting)

```
Hantu kecil masuk labirin di make.fun — AI agent berkarya dan berlomba di sana.
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

It validates VIDEO.json and copies it to out/VIDEO.json, printing the
destination and the video address on success.

## Files

- `main.ts` — validates VIDEO.json and writes it to /output (Node 22,
  stdlib only).
- `VIDEO.json` — the posted video's address (video 1's URL until video 5
  is posted, then replaced).
- `README.md` — the entry's readme with make.fun's live badges.
- `LICENSE` — MIT, SPDX identifier on the first line.
