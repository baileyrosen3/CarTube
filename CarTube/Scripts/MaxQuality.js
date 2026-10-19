// CarTube fork: forces YouTube's web player to its highest available quality.
//
// Configuration is injected at document start by CarPlayViewController via
// window.__cartube (see "Quality config" in CarPlayViewController.swift).
// The script no-ops unless window.__cartube.quality.enabled is truthy.
//
// YouTube's web player exposes two internal APIs we use, both of which have
// existed for years in the HTML5 player:
//   - getAvailableQualityData(): list of {quality: "hd1080", ...} entries
//   - setPlaybackQualityRange(min, max): apply a quality without a page reload
// Both calls are defensive: if YouTube renames either, we degrade to the
// site's default quality instead of throwing.

(function () {
  "use strict";
  try {
    var config = window.__cartube && window.__cartube.quality;
    if (!config || !config.enabled) return;
  } catch (e) { return; }

  // Rank of YouTube web quality labels; higher is better. "highres" is the
  // legacy label above 4K.
  var RANK = {
    highres: 4320,
    hd2160: 2160,
    hd1440: 1440,
    hd1080: 1080,
    hd720: 720,
    large: 480,
    medium: 360,
    small: 240,
    tiny: 144
  };

  function player() {
    try { return document.getElementById("movie_player"); } catch (e) { return null; }
  }

  function availableQualities(p) {
    try {
      var data = p.getAvailableQualityData();
      return (data && data.length) ? data : null;
    } catch (e) { return null; }
  }

  function currentQuality(p) {
    try { return p.getPlaybackQuality(); } catch (e) { return null; }
  }

  // Best explicit (non-"auto") quality the player currently offers.
  function bestAvailable(p) {
    var data = availableQualities(p);
    if (!data) return null;
    var best = null, bestRank = -1;
    for (var i = 0; i < data.length; i++) {
      var label = data[i] && data[i].quality;
      if (!label || label === "auto") continue;
      var rank = RANK[label] || 0;
      if (rank > bestRank) { bestRank = rank; best = label; }
    }
    return best;
  }

  function setQuality(p, quality) {
    var applied = false;
    try {
      if (typeof p.setPlaybackQualityRange === "function") {
        p.setPlaybackQualityRange(quality, quality);
        applied = true;
      }
    } catch (e) {}
    if (!applied) {
      try {
        if (typeof p.setPlaybackQuality === "function") {
          p.setPlaybackQuality(quality);
          applied = true;
        }
      } catch (e) {}
    }
    return applied;
  }

  function apply() {
    var p = player();
    if (!p) return;
    var best = bestAvailable(p);
    if (!best) return;
    var current = currentQuality(p);
    // "auto" is YouTube choosing for us; override it too.
    if (!current || current === "auto" || (RANK[current] || 0) < RANK[best]) {
      setQuality(p, best);
    }
  }

  // m.youtube.com is a single-page app: navigating between videos does not
  // reload the document, so document-injected scripts would apply exactly
  // once and miss every subsequent video. React to navigations and player
  // rebuilding instead, with a coalesced debounce so we don't hammer the
  // player during scroll storms on a 60Hz car display.

  var scheduled = false;
  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(function () {
      scheduled = false;
      apply();
    }, 500);
  }

  setInterval(scheduleApply, 2000);

  // Fires after every SPA navigation in the YouTube web app.
  window.addEventListener("yt-navigate-finish", scheduleApply, true);
  window.addEventListener("yt-player-updated", scheduleApply, true);
  window.addEventListener("yt-page-data-updated", scheduleApply, true);

  // Catch everything else (player element re-created mid-nav, etc.).
  try {
    var observer = new MutationObserver(scheduleApply);
    observer.observe(document.documentElement || document, { childList: true, subtree: true });
  } catch (e) {}
})();
