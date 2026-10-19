# Route B — iPhone 5s rescue for YouTube on the Cayenne PCM (v2, iOS 10.0.1 reality)

Device: iPhone 5s (A7, TAC 01388300), **iOS 10.0.1**, restored to factory, home button intermittently working (rescued via force-restart), Hebrew locale, Israeli SIM, no cell service.

## Why the plan changed

- checkra1n supports **iOS 12.0+** only — 10.0.1 is out of range.
- The sideload-jailbreak alternative (Yalu-era) needs certificates that expire in 7 days on a free Apple ID — dead-on-arrival for a car-dedicated phone — and the 2016-era YouTube app likely can't stream modern YouTube. The BigBoss repo (home of NGXPlay) is offline since 2022.
- checkm8 is a bootROM exploit: **updating iOS does not affect jailbreak availability.**

## Chosen path: update → checkra1n → Havoc

### Phase 1 — Home-button workarounds (do first, while it works)

- **Settings → Accessibility → Touch → AssistiveTouch → ON** (floating dot = on-screen Home/Lock/Restart; survives OTA updates). If the button dies again you stay navigable.

### Phase 2 — Update to the 12.5.x Apple still offers

1. Free up storage if needed (Settings → General → iPhone Storage; OTA needs ~3 GB).
2. **Settings → General → Software Update** → it should offer an **iOS 12.5.x** build (12.5.8 class; whatever is signed today) → install over WiFi.
   - If it offers nothing / fails: report back — fallback is the messy 10.x sideload road, not recommended.
3. After the update: confirm AssistiveTouch still on; note the new version (12.5.x).

### Phase 3 — checkra1n on the 2012 MacBook

- macOS: checkra1n **0.12.4 beta** DMG from [checkra.in/releases](https://checkra.in/releases/) (A7 limitation is Linux-only; macOS handles the 5s).
- Plug the 5s into the Mac (Lightning → USB-A) → *Start* → follow the on-screen DFU button-holds (physical button; AssistiveTouch can't do DFU).
- In checkra1n **Options**, prefer **Sileo** over Cydia (both offered; Sileo + its repo infra are still alive) → exploit → reboot semi-tethered.
- Semi-tethered: after every reboot, re-run checkra1n from the Mac. Keep the phone on car USB power while parked.

### Phase 4 — CarBridge Legacy (Havoc — alive, unlike BigBoss)

1. Open Sileo → Sources → add **https://havoc.app** → search **CarBridge Legacy** (the iOS 10–12 build, [havoc.app/package/carbridgelegacy](https://havoc.app/package/carbridgelegacy)) → purchase (a couple of dollars) and install.
2. App Store → YouTube → install the **last compatible version** for iOS 12 (2021-22-era build; streams fine). Same for **YouTube Music**. YouTube TV: test, expect possible DRM/geo failure on the old build → Bluetooth audio fallback.
3. **Settings → CarBridge**: enable, add YouTube / YouTube Music to the CarPlay list, mirror-mode on.

### Phase 5 — In-car validation (Cayenne PCM 5.X)

1. 5s → center-console CarPlay USB → CarPlay launches on the PCM.
2. Open CarBridge → YouTube on the PCM screen → play a video (parked).
3. Tune FPS/quality; expect stutter limits from A7 + 1 GB RAM.
4. **Parked use only** for video — driver-visible moving images while driving are restricted in most EU member states (e.g. DE StVO §23a).

## Fallbacks

- CarBridge Legacy misbehaves → NGXPlay11 (.deb) can be hunted from community BigBoss mirrors; less reliable supply chain.
- Whole phone route collapses → the CarTube fork ([v1.4-fork.1](https://github.com/baileyrosen3/CarTube/releases/tag/v1.4-fork.1)) waits for a 6s–X-class device; USB-archive + Bluetooth tiers are already standing.
