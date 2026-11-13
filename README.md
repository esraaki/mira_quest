# MIRA QUEST — Opportunity + Eagle playable edition

**Their missions ended. Their stories didn't.**

A cinematic, interactive and science-grounded game about NASA hardware left on Mars and the Moon. This package preserves the original MIRA Quest v2 introduction and Opportunity chapter, expands Opportunity with evidence-driven gameplay, and adds a playable Apollo 11 Eagle descent-stage chapter. Ingenuity is deliberately reserved for a future chapter, as requested.

## Play

Deploy the contents of this folder to **Vercel → Other** as a static site. No npm install, build command or framework is needed. `vercel.json` specifies no build and serves the folder root. Alternatively, for local testing:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080` in a browser. Double-clicking `index.html` may work in some browsers but a web server is the reliable option for video, audio, and local persistence.

Start with **Begin Journey**, advance the five intro screens using Next, enter a name, answer the transmission, and select either **Signal 01 / Eagle** or **Signal 02 / Opportunity**. Signal 03 / Ingenuity is a future chapter. Both playable chapters lead to a gallery and back to signal selection. A shared archive is unlocked when both chapters are complete.

## Changes

- Reused the original title art, intro scripts, signal system, cinematic travel, Opportunity dialogue, panoramic encounter, mission comparison, gallery, and timeline.
- Expanded Opportunity with Eagle Crater landing memory, instrument investigation, rover-route choice, multiple water-evidence discoveries, and a storm finale using your simulation video.
- Added Eagle's Moon approach, lunar scan, search, first-contact dialogue, two-stage engineering exploration, descent exercise, EASEP science photographs, ascent stage departure, and ending.
- Extended the gallery with mission-specific NASA photos and engineering evidence. Each item provides a historical source URL.
- Replaced compressed filename variants with normalized production filenames. Original assets retain their original runtime paths, e.g. `assets/audio/opening.mp3` and `assets/art/opportunity/g24.png`. New art uses `assets/art/opportunity/g39.png` etc.
- Preserved the old eight audio filenames, added `equipment.mp3` and `lunar-ascent.mp3`, and bundled your storm simulation in `assets/video/mars-sandstorm.mp4`.
- The storm simulation normally plays muted; a button lets the player enable its *simulated* storm sound. It is not actual sound recorded on Mars.
- Included `assets/source-originals/` to retain supplied image originals by descriptive name for future work.

## Structure

```text
index.html / styles.css / expansion.css
src/game.js
assets/art/title, intro, selection, travel, signals, opportunity, eagle
assets/photos
assets/audio
assets/video
assets/source-originals
assets/ASSET-MANIFEST.json
CREDITS.md
```

## Accuracy and disclosure

- NASA historical imagery is **evidence**. Cinematic AI-generated scenes are **reconstructions**, not originals, and fictional conversations are not real transmissions.
- Apollo 11 **Eagle's descent stage** is the hardware left on the lunar surface. The ascent stage carried astronauts away. EASEP instruments were deployed separately.
- Opportunity's evidence of ancient water **does not prove life**. The route-choice and lunar descent interactions are conceptual exercises, not reconstructed NASA controls.
- Not all user-provided filenames denote true full-resolution assets: `PIA22909 ... full resolution.jpg` is only **900 × 201 pixels** and is not suitable for detailed zoom. `PIA23178 ... Map.png` is only **629 × 486 pixels**. High-resolution replacements will improve archival clarity.
- The source-image record is based on the names and materials provided; confirm the exact NASA source and captions for each image before publishing.
- The user-provided sound and simulation-video licenses have **not been independently verified**. Obtain permission/source details prior to public submission. A third-party news photograph was excluded from the distributable build.
- Confirm the organizer's AI watermark, credit, and submission rules. In-game disclosures identify synthetic scenes; this does **not** guarantee compliance with every possible required visible watermark.

## QA status

JavaScript syntax checked with Node. Render smoke tests exercised 34 scene types, plus action-flow tests for Eagle and Opportunity chapter extensions with mocked DOM. Media codecs verified (`h264/aac` storm video). The asset library was visually inspected via contact sheet. **Full rendered browser playtesting was not completed in this environment**, so verify click targets, soundtrack, video playback, responsive layout, and progression in a real browser before publishing.
