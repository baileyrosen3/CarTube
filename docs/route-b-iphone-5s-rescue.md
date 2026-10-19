# Route B — iPhone 5s rescue for YouTube on the Cayenne PCM

Goal: live YouTube / YouTube Music (and maybe YouTube TV) on the 2019 Cayenne's PCM screen using the iPhone 5s (A7, iOS 12.5.x-class), the 2012 MacBook, and free jailbreak tooling.

## Phase 1 — Home-button flex repair (prerequisite for everything)

The dead button blocks: setup past Hello, DFU entry, AssistiveTouch — i.e., every software step below. Repair order:

1. Buy an **iPhone 5s home button flex cable** (aftermarket, a few euros). It restores click/return; **Touch ID is permanently lost** (button chip is paired to the logic board). That is expected and acceptable.
2. Replace following iFixit's *"iPhone 5s Home Button Replacement"* guide (ifixit.com — search that exact title; needs P2 pentalobe screwdriver, suction cup, spudger). The button + flex sit under the display assembly; fiddly adhesive but a one-afternoon job. A phone repair shop can also do it cheaply.
3. Reassemble → boot → should reach the Hebrew lock screen → press Home to unlock.

## Phase 2 — Activate the phone

1. Keep the Israeli SIM installed (it may be needed for activation on a carrier-locked unit).
2. Setup: language → keyboard → connect **WiFi** (hotspot from the Android phone works) → activation → (skip Touch ID configuration — it's dead) → done.
3. Confirm in **Settings → General → About**: model must show iPhone 5s; note **Software Version**. If it reads iOS 12.x → proceed. If it reads 11.x or lower, stop and report back — the jailbreak tooling differs.

## Phase 3 — checkra1n jailbreak (Mac, one-time + after every reboot)

- macOS support: checkra1n 0.12.4 beta (latest), DMG at [checkra.in/releases](https://checkra.in/releases/) (SHA256 published there). The "A7 doesn't work" limitation applies **only to the Linux build** — macOS handles the 5s.
- macOS version: 2012 MacBook runs at least High Sierra, optionally Catalina — both fine for checkra1n 0.12.4.
- Flow: install DMG → open checkra1n → *Options*: leave defaults (or check "Safe Mode" only if the first run fails) → *Start* → the app drives the device into DFU: follow its on-screen button-holding instructions (now possible with the repaired button) → pwned → phone reboots with **Cydia** installed.
- **Semi-tethered**: after every reboot the jailbreak is inactive — re-run checkra1n from the Mac. A car-dedicated phone rebooted rarely makes this tolerable; keep the phone on car USB power when parked.

## Phase 4 — NGXPlay11 + YouTube (free via Cydia/BigBoss)

1. Open **Cydia** → Sources → confirm **BigBoss** is enabled → search `NGXPlay11` → install (free).
2. App Store → YouTube → App Store offers the **last compatible version** for iOS 12 — install it (old build, works with a 360p-ish default).
3. Same store mechanism for **YouTube Music** (last compatible iOS 12 build) and, optionally, **YouTube TV** (live TV may fail DRM/geo on the old build — test, fall back to Bluetooth audio).
4. **Settings → NGXPlay**: enable it, adjust FPS (start ~15–20 on the A7; raise if smooth), tap **+** and add YouTube / YouTube Music.
5. Internet in the car: the phone joins the **Android phone's hotspot** (WiFi) — no cell service needed.

## Phase 5 — In-car validation (Cayenne PCM 5.X)

1. Plug the 5s into the center-console CarPlay USB port → CarPlay launches on the PCM.
2. Open the NGXPlay-provided app entry → YouTube appears on the PCM screen.
3. Play a video — confirm video renders, audio routes through the car.
4. Tune NGXPlay FPS + YouTube quality settings until stable; expect some stutter at high quality (A7/1 GB ceiling).
5. **Parked use only** for video — driver-visible moving images while driving are restricted in most EU member states (e.g. DE StVO §23a).

## Fallbacks

- NGXPlay11 misbehaves → try **CarBridge Legacy** (Havoc repo, iOS 10–12, paid) as the alternative tweak.
- Anything unresolvable → the fork ([v1.4-fork.1 IPA](https://github.com/baileyrosen3/CarTube/releases/tag/v1.4-fork.1)) + USB-archive + Bluetooth tiers remain standing.
