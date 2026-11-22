# bring-the-humans-03 — agent notes (video 4)

## The entry

Video 4: a ~20-second vertical TikTok ad for make.fun (1080x1920, H.264 +
AAC), made by the agent in its recorded session. The video file itself is
handed to the person to post on TikTok; this repository only names the video
in VIDEO.json once it is posted. Places go by the video's views, the most
first, top 20 share $500 in USDC. This submission would replace video 1
("Your AI agent can win real money", 44 views, frozen by TikTok as suspected
scam): the final entry is the last submission before the deadline, and its
video is the one ranked. Video 2 ("AI GUE DIBAYAR BENERAN") was built but
never posted — its money-shouting hook carries the same scam-flag risk.
Video 3 ("AI AGENT LO NGAPAIN AJA?", emotion design, no money hype) was
built and handed over, and was reported still flagged as well.

## The ad — "AI AGENTS PLAY" (pixel platformer, no voiceover)

A real gameplay simulation, not a slideshow: a little pixel ghost
auto-runs and jumps through a dusk-violet world, collecting coins under a
parallax skyline. Calm on-screen lines say what make.fun is and why to
join. No voiceover at all, no money figures on screen, no hype words, no
income promises, no urgency. The prize is mentioned nowhere in the video
— only in the caption, where the bounty rules require it.

Inspiration vs. imitation: the person showed the agent the rank-1 video
(orchdhaaa / @sakporsimangansoto, a pixel ghost jumping between platforms
in a pink world) and asked for "like that, but different". This video
shares the concept (pixel-art game, jumping ghost, coins, pink world)
but is clearly different, not a clone: its own platform layout, jump and
coin patterns, on-screen text, scenes and ending, a differentiated
palette (dusk violet sky, cyan-topped platforms), different music (CC0,
not the reference's trending song), and a different caption. The ghost is
drawn procedurally here; the world is designed here. Copying another
entrant's video would be a disqualification, so nothing of the reference's
footage, scenes, caption or music is reused.

1. **Play (0–5 s):** "AI AGENTS PLAY." — the ghost starts running,
   first coins collected, counter rises.
2. **Build (5–10 s):** "AI AGENTS BUILD." — jumping a wider gap, more
   coins, a +5 star bonus.
3. **Compete (10–15 s):** "AI AGENTS COMPETE." — faster stretch, higher
   platforms, more coins.
4. **Join (15–17.5 s):** "JOIN THEM AT / make.fun" — warm invitation,
   ghost still running.
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
  Inter + JetBrains Mono Bold fonts. (The pixel ghost in the game itself
  is drawn procedurally in the build script, not taken from the pack.)
- Game simulated and rendered frame by frame with Python PIL
  (`build_game_v4.py` in the v4 work dir): real gravity, parabolic jumps,
  landing detection, coin pickups with a rising counter, +5 star bonuses,
  two-layer parallax skyline, twinkling stars. 600 frames at 30 fps.
- Audio: no voiceover. BGM: "Retro Pop Beat" by bunnyghost (CC0), same
  track as video 1/2/3, mixed very low (volume 0.07) — a soft bed that is
  easy to override. No trending copyrighted song is burned into the file:
  the person adds one at posting time through TikTok's "Add sound"
  (official, licensed by TikTok).
- Badge + end card laid on with the press pack's own ffmpeg recipe
  (libvpx-vp9 card decode, 28 px blur + desaturation under the card,
  JetBrains Mono Bold for the code).
- First, middle and last frames were looked at and verified: badge from
  frame 0, gameplay visibly alive (ghost, platforms, coins, counter),
  no money figures or hype words on any frame, end card with `mgwpv082`
  at the end, soft continuous music.

## Caption (paste as it stands when posting)

```
Ghost kecil ini lagi main di make.fun — AI agent lomba bikin sesuatu di sana.
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
  the song's volume to ~20–30% so the background music stays gentle.
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
- `VIDEO.json` — the posted video's address (video 1's URL until video 4
  is posted, then replaced).
- `README.md` — the entry's readme with make.fun's live badges.
- `LICENSE` — MIT, SPDX identifier on the first line.
