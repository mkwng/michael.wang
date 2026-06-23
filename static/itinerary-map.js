/* Sticky trip map that follows the reader's scroll.
   Reads .stop[data-lat][data-lng][data-label] from the page — and, optionally,
   a finer-grained walking trail of [data-trail][data-lat][data-lng][data-label]
   waypoints (e.g. an in-page shopping walk), with the line drawn from the map
   shell's data-trail-path / data-tram-path. No build step. */
(function () {
  function n(v) { return parseFloat(v); }
  function parsePath(str) {
    return str.split(';').map(function (p) { var a = p.split(','); return [n(a[0]), n(a[1])]; });
  }

  function init() {
    var mapEl = document.getElementById('trip-map');
    if (!mapEl || typeof L === 'undefined') return;

    var stops = Array.prototype.slice.call(document.querySelectorAll('.stop[data-lat]'));
    var trail = Array.prototype.slice.call(document.querySelectorAll('[data-trail][data-lat]'));
    if (!stops.length && !trail.length) return;

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

    function stopIcon(label, on) {
      return L.divIcon({
        className: 'trip-pin-wrap',
        html: '<div class="trip-pin' + (on ? ' on' : '') + '">' + label + '</div>',
        iconSize: [32, 32], iconAnchor: [16, 16]
      });
    }
    function trailIcon(on, opt) {
      return L.divIcon({
        className: 'trail-pin-wrap',
        html: '<div class="trail-pin' + (on ? ' on' : '') + (opt ? ' opt' : '') + '"></div>',
        iconSize: [18, 18], iconAnchor: [9, 9]
      });
    }

    var shell = document.querySelector('.trip-map-shell');

    // lines first, so markers sit on top
    if (shell && shell.dataset.tramPath) {
      L.polyline(parsePath(shell.dataset.tramPath),
        { color: '#2E5BA8', weight: 3, opacity: .55, dashArray: '5,7' }).addTo(map);
    }
    if (trail.length) {
      var path = (shell && shell.dataset.trailPath)
        ? parsePath(shell.dataset.trailPath)
        : trail.map(function (t) { return [n(t.dataset.lat), n(t.dataset.lng)]; });
      L.polyline(path, { color: '#2E5BA8', weight: 4, opacity: .7 }).addTo(map);
    }

    // a unified, document-ordered list of tracked points (stops, then trail)
    var points = [];
    stops.forEach(function (s, i) {
      var ll = [n(s.dataset.lat), n(s.dataset.lng)];
      var pin = s.dataset.pin || (i + 1);
      var m = L.marker(ll, { icon: stopIcon(pin, false), keyboard: false }).addTo(map);
      m.on('click', function () { s.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
      points.push({ el: s, ll: ll, label: s.dataset.label || ('Stop ' + pin), marker: m, kind: 'stop', pin: pin });
    });
    trail.forEach(function (t) {
      var ll = [n(t.dataset.lat), n(t.dataset.lng)];
      var opt = t.hasAttribute('data-opt');
      var m = L.marker(ll, { icon: trailIcon(false, opt), keyboard: false }).addTo(map);
      if (t.dataset.label) m.bindTooltip(t.dataset.label);
      m.on('click', function () { t.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
      points.push({ el: t, ll: ll, label: t.dataset.label || '', marker: m, kind: 'trail', opt: opt });
    });

    function setIcon(p, on) {
      p.marker.setIcon(p.kind === 'stop' ? stopIcon(p.pin, on) : trailIcon(on, p.opt));
    }
    function zoomFor(p) { return p.kind === 'trail' ? 16 : 15; }

    function fitAll() {
      var all = points.map(function (p) { return p.ll; });
      if (all.length === 1) { map.setView(all[0], 15); }
      else { map.fitBounds(all, { padding: [40, 40] }); }
    }
    fitAll();

    var nowLabel = document.getElementById('mapNowLabel');
    var active = -1, userMoved = false;

    function setActive(i) {
      if (i < 0 || i >= points.length || i === active) return;
      if (active >= 0) setIcon(points[active], false);
      active = i;
      setIcon(points[i], true);
      if (nowLabel) nowLabel.textContent = points[i].label;
      if (userMoved) map.flyTo(points[i].ll, zoomFor(points[i]), { duration: 0.6 });
    }
    setActive(0);

    var els = points.map(function (p) { return p.el; });
    var io = new IntersectionObserver(function (entries) {
      var best = null;
      entries.forEach(function (e) {
        if (e.isIntersecting &&
            (!best || e.boundingClientRect.top < best.boundingClientRect.top)) {
          best = e;
        }
      });
      if (best) setActive(els.indexOf(best.target));
    }, { rootMargin: '-22% 0px -58% 0px', threshold: 0 });
    els.forEach(function (el) { io.observe(el); });

    // first scroll switches the map from "overview" to "follow" mode
    window.addEventListener('scroll', function () {
      if (!userMoved) {
        userMoved = true;
        if (active >= 0) map.flyTo(points[active].ll, zoomFor(points[active]), { duration: 0.7 });
      }
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
          if (!collapsed) {
            (userMoved && active >= 0)
              ? map.flyTo(points[active].ll, zoomFor(points[active]), { duration: 0.4 })
              : fitAll();
          }
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
