# MIRA QUEST · Opportunity & Apollo 11 Eagle

A cinematic, interactive NASA-mission story for curious young space enthusiasts. Rebuilt November 14, 2026 from the supplied MIRA Quest artwork, mission photographs, audio and storm simulation.

## Start

Open `index.html` with a local static server (recommended), or deploy the unzipped root directly to Vercel (`Framework Preset: Other`, no build command, output directory `.`). This is a build-free HTML/CSS/JavaScript site.

For local development: `python3 -m http.server 8000` in this directory, then visit `http://localhost:8000`.

## Chapters

- **Opportunity:** Approach Mars, locate the rover, meet it through a long fictional conversation grounded in NASA mission history; study sols, the 2004 landing, Berry Bowl evidence, instruments, hypothetical route planning, historical stops one by one, a second water clue, the 2018 dust storm, and a longer farewell. Selected player response choices change what Opportunity says next.
- **Eagle:** Travel to the Moon through the same arrival structure; find Apollo 11's descent stage, experience a character-led story, learn about the two-stage lunar module, guided landing, EASEP experiments, real Apollo images, ascent-stage departure and the descent-stage legacy. Selected player responses change Eagle’s immediate reply.

## Audio

Eight original audio assets are unchanged by filename. One exclusive audio channel handles all current scene music/ambience. It pauses and resets on every scene change; shorter signal and travel files loop if the scene remains active. The 2018 storm video uses its own embedded audio only after the music stops. Audio starts upon the first user click (Begin Journey) because browsers block sound autoplay before a gesture. The volume/mute control is in the top-right menu.

## Structure

- `src/story.js` — narrative beats, source-based historical and science content.
- `src/game-next.js` — scene engine, image discovery, mission-specific interactions, navigation, audio and progression.
- `game-next.css` — responsive cinematic interface.
- `assets/art/` — generated scene art and the provided transparent cutouts.
- `assets/photos/` — bundled NASA images and references.
- `assets/audio/` — supplied audio filenames retained.
- `assets/video/mars-sandstorm.mp4` — supplied dramatized storm simulation, not actual rover footage.
- `assets/source-originals/` — originals retained for provenance. Not required by the game runtime.

## Accuracy and disclosure

All rover/personified-hardware dialogue is a storytelling reconstruction, not a real communication from a machine. NASA mission science and historical events form the base. Generated scene visuals and storm video are clearly flagged as reconstructions. Some supplied image captions/source records still require final visual-by-visual attribution review; see `CREDITS.md`. Never portray the creative storm simulation as NASA camera footage.

## Important release notes

A static rendering/state progression harness confirmed that both stories advance through all acts and end correctly. JavaScript syntax and referenced-file checks have been performed. Real browser visual testing was blocked by the current environment; therefore mobile layout, autoplay permissions, image fidelity, and audio timing need manual smoke testing in a browser before public submission. A 15-minute-plus total reading/exploration duration is the design target, not a guarantee for every player.
