> ### Fork
> Upstream [Avangelista/CarTube](https://github.com/Avangelista/CarTube) is archived (GPL-3.0). This fork carries:
> - **Force Highest Quality** — Settings toggle that keeps YouTube's web player pinned to its best available quality (`Scripts/MaxQuality.js`). Turn it off if playback stutters.
> - **Car-screen diagnostics** — Debug tab lists every UIScreen, flagging the car display, so you can tune zoom/quality against the dimensions your head unit actually reports.
> - **One-click IPA builds** — GitHub Actions workflow (`.github/workflows/build-ipa.yml`) builds and signs the IPA on CI; no Mac needed.
> - **Fork-aware update checks** — set the `FORK_*` constants in `CarTube/Util/Constants.swift` to your own repo after forking.
>
> iOS support is unchanged from upstream: CarPlay activation via TrollStore works on **iOS 14.0 – 15.4.1**. On iOS 15.4–16.6.1 use a Dopamine jailbreak + CarBridge instead; nothing here supports iOS 17+.

<h1 align="center">Supports iOS 14.0 - 15.4.1</h1>
<br/>
<br/>
<br/>
<br/>
<p align="center">
  <img align="center" src='https://raw.githubusercontent.com/Avangelista/CarTube/main/Icon/CarTubeTransparent.png'>
</p>
<h1 align="center">CarTube</h1>
<p align="center">YouTube on CarPlay, no jailbreak required!</p>
<p align="center">Supports iOS 14.0 - 15.4.1.</p>

## Features
- A full-feature app for YouTube - browse, search, watch videos and more in the car!
- Works on any device supporting [TrollStore](https://github.com/opa334/TrollStore), no jailbreak required
- Block ads
- Skip sponsored segments with SponsorBlock
- Bypass age restriction
- Swipe back and forward anywhere to go back and forward
- System integrations:
  - "Play on CarPlay" share extension
  - Instant paste of any copied YouTube URLs
  - If you were watching something on the YouTube app and then get in the car, it'll pop up on CarTube

## Credits
- [AdGuard Block YouTube Ads in Safari](https://github.com/AdguardTeam/BlockYouTubeAdsShortcut) - GPLv3
- [Simple YouTube Age Restriction Bypass](https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/) - MIT
- [Simple Sponsor Skipper](https://greasyfork.org/en/scripts/453320-simple-sponsor-skipper) - GNU AGPLv3
- [AutoHook](https://gist.github.com/JohnCoates/c0d77f130d033b206367db480f7c18ae)
- [Open in Yattee](https://github.com/yattee/yattee/tree/main/Open%20in%20Yattee) - GNU AGPLv3
- [NoSleep.js](https://github.com/richtr/NoSleep.js/) - MIT
- [Dynamic](https://github.com/mhdhejazi/Dynamic) - Apache License 2.0
- [Various from sourcelocation](https://github.com/sourcelocation) - GPLv3
