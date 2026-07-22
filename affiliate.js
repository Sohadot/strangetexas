/* Strange Texas — Amazon affiliate "shelf".
 *
 * TO ACTIVATE: put your Amazon Associates tracking tag between the quotes
 * on the AMAZON_TAG line below (for example "strangetx-20"), then commit.
 * Until a tag is set, NOTHING renders — so this file is safe to ship as-is.
 *
 * One tag here activates the shelf on every article at once.
 */
(function () {
  "use strict";

  var AMAZON_TAG = ""; // <-- paste your Amazon Associates tag here to go live

  if (!AMAZON_TAG) return; // stays completely invisible until activated

  // Themed reading lists. Search-based links (no fragile product IDs).
  var SHELVES = {
    folklore: ["Weird Texas legends & folklore", "Texas cryptids & monsters", "Texas ghost & mystery stories"],
    haunted:  ["Haunted Texas guide", "Texas ghost stories", "Most haunted places in Texas"],
    travel:   ["Texas travel guide", "Big Bend National Park guidebook", "Texas state parks & hiking"],
    crime:    ["Texas true crime", "Unsolved murders true crime", "Texas cold cases"],
    nature:   ["Texas wildlife field guide", "Texas natural history", "Texas weather & the sky"],
    culture:  ["Texas history & culture", "Texas roadside oddities", "Texas festivals & folklife"]
  };

  function amazon(query) {
    return "https://www.amazon.com/s?k=" + encodeURIComponent(query) +
           "&tag=" + encodeURIComponent(AMAZON_TAG);
  }

  var css =
    ".strange-shelf{margin-top:3.5rem;padding:1.8rem 2rem;background:rgba(200,134,10,0.04);border:1px solid rgba(200,134,10,0.15);}" +
    ".strange-shelf .shelf-title{font-family:'Cinzel Decorative',serif;font-size:0.9rem;color:#c8860a;letter-spacing:0.06em;display:block;margin-bottom:1.1rem;}" +
    ".strange-shelf .shelf-list{list-style:none;margin:0;padding:0;}" +
    ".strange-shelf .shelf-list li{margin-bottom:0.65rem;}" +
    ".strange-shelf .shelf-link{color:#e8dcc8;text-decoration:none;font-size:0.95rem;border-bottom:1px solid rgba(200,134,10,0.25);transition:color .2s;}" +
    ".strange-shelf .shelf-link:hover{color:#c8860a;}" +
    ".strange-shelf .shelf-disclosure{margin:1.2rem 0 0;font-size:0.72rem;font-style:italic;color:rgba(232,220,200,0.4);}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var boxes = document.querySelectorAll("[data-shelf]");
  for (var i = 0; i < boxes.length; i++) {
    var el = boxes[i];
    var items = SHELVES[el.getAttribute("data-shelf")] || SHELVES.folklore;
    var html = '<span class="shelf-title">From the Strange Texas Shelf</span><ul class="shelf-list">';
    for (var j = 0; j < items.length; j++) {
      html += '<li><a class="shelf-link" href="' + amazon(items[j]) +
              '" target="_blank" rel="sponsored noopener nofollow">' + items[j] + ' &rarr;</a></li>';
    }
    html += '</ul><p class="shelf-disclosure">As an Amazon Associate, Strange Texas earns from qualifying purchases.</p>';
    el.innerHTML = html;
  }
})();
