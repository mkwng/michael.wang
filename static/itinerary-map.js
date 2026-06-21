/* Sticky trip map that follows the reader's scroll.
   Reads .stop[data-lat][data-lng][data-label] from the page. No build step. */
(function () {
  function init() {
    var mapEl = document.getElementById('trip-map');
    if (!mapEl || typeof L === 'undefined') return;

    var stops = Array.prototype.slice.call(document.querySelectorAll('.stop[data-lat]'));
    if (!stops.length) return;

    var coords = stops.map(function (s) {
      return [parseFloat(s.dataset.lat), parseFloat(s.dataset.lng)];
    });

    var map = L.map('trip-map', {
      scrollWheelZoom: false,   // don't hijack page scroll on desktop
      zoomControl: false,
      attributionControl: true
    });
    L.control.zoom({ position: 'bottomleft' }).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function icon(n, on) {
      return L.divIcon({
        className: 'trip-pin-wrap',
        html: '<div class="trip-pin' + (on ? ' on' : '') + '">' + n + '</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
    }

    var markers = coords.map(function (c, i) {
      var m = L.marker(c, { icon: icon(i + 1, false), keyboard: false }).addTo(map);
      m.on('click', function () {
        stops[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return m;
    });

    function fitAll() {
      if (coords.length === 1) { map.setView(coords[0], 15); }
      else { map.fitBounds(coords, { padding: [46, 46] }); }
    }
    fitAll();

    var nowLabel = document.getElementById('mapNowLabel');
    var active = -1, userMoved = false;

    function setActive(i) {
      if (i < 0 || i >= markers.length || i === active) return;
      active = i;
      markers.forEach(function (m, j) { m.setIcon(icon(j + 1, j === i)); });
      if (nowLabel) nowLabel.textContent = stops[i].dataset.label || ('Stop ' + (i + 1));
      if (userMoved) map.flyTo(coords[i], 15, { duration: 0.7 });
    }
    setActive(0);

    // a thin activation band in the upper reading area
    var io = new IntersectionObserver(function (entries) {
      var best = null;
      entries.forEach(function (e) {
        if (e.isIntersecting &&
            (!best || e.boundingClientRect.top < best.boundingClientRect.top)) {
          best = e;
        }
      });
      if (best) setActive(stops.indexOf(best.target));
    }, { rootMargin: '-22% 0px -58% 0px', threshold: 0 });
    stops.forEach(function (s) { io.observe(s); });

    // first scroll switches the map from "overview" to "follow" mode
    window.addEventListener('scroll', function () {
      if (!userMoved) { userMoved = true; if (active >= 0) map.flyTo(coords[active], 15, { duration: 0.7 }); }
    }, { passive: true });

    // collapse / expand
    var toggle = document.getElementById('mapToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var collapsed = document.body.classList.toggle('map-collapsed');
        toggle.setAttribute('aria-expanded', String(!collapsed));
        toggle.textContent = collapsed ? 'Map' : 'Hide map';
        setTimeout(function () {
          map.invalidateSize();
          if (!collapsed) { userMoved && active >= 0 ? map.flyTo(coords[active], 15, { duration: 0.4 }) : fitAll(); }
        }, 330);
      });
    }

    window.addEventListener('resize', function () { map.invalidateSize(); });
    setTimeout(function () { map.invalidateSize(); }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
