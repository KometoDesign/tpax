/* TPA X landing page embed · Total Waterpolo
   Embed once:  <div id="tpax-x"></div><script src="https://kometodesign.github.io/tpax/tpax.js" defer></script>
   data-offset = height of a sticky site header in px, if the site has one (total-waterpolo.com does not: leave it out).
   Everything is drawn inside a shadow root, so the theme's CSS can't touch it and ours can't leak out. */
(function () {
  'use strict';
  var CSS = '__CSS__';
  var me = document.currentScript;
  var BASE = (me && me.src ? me.src : location.href).replace(/[^\/]*(\?.*)?$/, '');
  var host = document.getElementById('tpax-x');
  if (!host) { host = document.createElement('div'); host.id = 'tpax-x'; (me && me.parentNode ? me.parentNode.insertBefore(host, me) : document.body.appendChild(host)); }
  if (host.__tpax) return; host.__tpax = true;
  var OPT = {
    offset: parseInt(host.getAttribute('data-offset') || '0', 10) || 0,
    data: host.getAttribute('data-src') || BASE + 'data/data.json',
    phase: host.getAttribute('data-phase') || '',
    fonts: host.getAttribute('data-fonts') || 'google'
  };

  // fonts load in the main document (font faces declared inside a shadow root are not reliable)
  if (!document.getElementById('tpax-fonts')) {
    var lk = document.createElement('link'); lk.id = 'tpax-fonts'; lk.rel = 'stylesheet';
    lk.href = OPT.fonts === 'self' ? BASE + 'fonts/fonts.css' : 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;1,800&family=Barlow:wght@400;600;700&display=swap';
    document.head.appendChild(lk);
  }
  var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
  root.innerHTML = '<style>' + CSS + '</style><div class="tpx" style="--tpx-offset:' + OPT.offset + 'px"><div class="wrap" style="padding:60px 16px;color:#9aa0a6">Loading TPA X…</div></div>';
  var APP = root.querySelector('.tpx');

  // ------------------------------------------------------------------ helpers
  function e(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // every file carries its own fingerprint (from the data): a new vote never makes anyone re-download unchanged photos.
  // Web copies (.webp, and the players' m/ s/ sizes) share the fingerprint of their master.
  function img(path) {
    var h = D && D.ah && D.ah[path.replace(/^players\/[sm]\//, 'players/').replace(/\.[a-z0-9]+$/i, '')];
    return BASE + 'img/' + path + (h ? '?v=' + h : '');
  }
  function vid(name) { var h = D && D.ah && D.ah['video/' + name]; return BASE + 'video/' + name + (h ? '?v=' + h : ''); }
  function webp(file) { return file.replace(/\.(jpe?g|png|svg)$/i, '.webp'); }
  function flag(nat, cls) { return nat ? '<img class="flag ' + (cls || '') + '" src="' + img('flags/' + nat + '.webp') + '" alt="' + e(nat) + '" width="30" height="20" loading="lazy" decoding="async">' : ''; }
  function crest(file, club) { return file ? '<img class="crest" src="' + img('crests/' + webp(file)) + '" alt="' + e(club || '') + '" width="22" height="22" loading="lazy" decoding="async">' : ''; }
  // a juror's role lines: national team with its flag, club with its crest (a coach of both gets both)
  function roles(j) {
    var L = j.lines && j.lines.length ? j.lines : [['flag', j.nat, j.role]];
    return L.map(function (l) { return '<em>' + (l[0] === 'crest' ? crest(l[1], l[2]) : l[0] === 'flag' ? flag(l[1]) : '') + '<span>' + e(l[2]).replace(/\*$/, '<sup class="ast">*</sup>') + '</span></em>'; }).join('');
  }
  // the open card's header keeps only the flags and crests, beside the name (the full lines stay on the closed card)
  function roleIcons(j) {
    var L = j.lines && j.lines.length ? j.lines : [['flag', j.nat, j.role]];
    var h = L.map(function (l) {
      var ic = l[0] === 'crest' ? crest(l[1], l[2]) : l[0] === 'flag' ? flag(l[1]) : '';
      return ic ? ic.replace(/ alt="[^"]*"/, ' alt="' + e(l[2].replace(/\*$/, '')) + '"') + (/\*$/.test(l[2]) ? '<sup class="ast">*</sup>' : '') : '';
    }).join('');
    return h ? '<span class="hc-ico">' + h + '</span>' : '';
  }
  var NATS = { ARG: 'Argentina', AUS: 'Australia', AUT: 'Austria', BEL: 'Belgium', BRA: 'Brazil', BUL: 'Bulgaria', CAN: 'Canada', CHN: 'China', CRO: 'Croatia', CZE: 'Czechia',
    ESP: 'Spain', FRA: 'France', GBR: 'Great Britain', GEO: 'Georgia', GER: 'Germany', GRE: 'Greece', HUN: 'Hungary', ISR: 'Israel', ITA: 'Italy', JPN: 'Japan', KAZ: 'Kazakhstan',
    MLT: 'Malta', MNE: 'Montenegro', NED: 'Netherlands', NZL: 'New Zealand', POL: 'Poland', POR: 'Portugal', ROU: 'Romania', RSA: 'South Africa', RUS: 'Russia', SLO: 'Slovenia',
    SRB: 'Serbia', SUI: 'Switzerland', SVK: 'Slovakia', TUR: 'Türkiye', UKR: 'Ukraine', USA: 'United States' };
  // a flag or crest with its name as a tooltip (hover, keyboard focus, or a tap on phones)
  function tip(html, text) {
    if (!html || !text) return html;
    var big = html.replace('class="flag', 'class="tbig flag').replace('class="crest', 'class="tbig crest').replace(' loading="lazy"', '');
    (D.crestLight || []).forEach(function (f) { var w = webp(f); big = big.split(img('crests/' + w)).join(img('crests/light/' + w)); });   // the white-on-dark crest has a version for the white card
    return '<span class="tip" tabindex="0" role="img" aria-label="' + e(text) + '">' + html + '<span class="tipbox" aria-hidden="true">' + big + '<b>' + e(text) + '</b></span></span>';
  }
  function initials(n) { return String(n || '').split(' ').map(function (w) { return w.charAt(0); }).join('').slice(0, 2); }
  function photo(kind, id, has, name, cls, eager, fy, size) {
    var inner = has ? '<img src="' + img(kind + '/' + (size ? size + '/' : '') + id + '.webp') + '" alt="" loading="' + (eager ? 'eager' : 'lazy') + '" decoding="async"' + (fy ? ' style="object-position:50% ' + fy + '%"' : '') + '>' : '<span class="ph" aria-hidden="true">' + e(initials(name)) + '</span>';
    return '<div class="photo ' + (cls || '') + '" role="img" aria-label="' + e(name) + '">' + inner + '</div>';
  }
  var SLOTS = ['GK', 'LW', 'CF', 'RW', 'LD', 'CB', 'RD'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function day(iso) { var d = new Date(iso); return d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  var MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function longDay(iso) { var d = new Date(iso + (iso.length === 10 ? 'T12:00:00' : '')); return d.getDate() + ' ' + MONTHS_LONG[d.getMonth()]; }
  function awardWord(a) { return a === 'w' ? 'women’s' : 'men’s'; }

  // ------------------------------------------------------------------ state
  var D = null, S = { award: null, sel: { w: null, m: null }, more: {}, open: null, oa: true, nav: 'top', hc: 0, vf: 'all', hx: false, mb: {}, team: null, edIx: 0, edOpen: false, edTab: 'w' };
  function live(a) {
    return (D.jurors || []).filter(function (j) { return !a || (j.ballots ? j.ballots.some(function (b) { return b.a === a; }) : j.a === a); })
      .sort(function (x, y) { return (y.posted || '').localeCompare(x.posted || '') || (y.order - x.order); });
  }
  function P(id) { return D.players[id] || { n: id, f: '', l: id, nat: '', club: '', crest: '', photo: false }; }
  function phase() { return OPT.phase || D.phase || 'vote'; }

  // ------------------------------------------------------------------ sections
  function nav() {
    var items = phase() === 'results'
      ? [['winners', 'Winners'], ['total7', 'Total 7s'], ['standings', 'Standings'], ['jury', 'All votes'], ['how', 'How it works'], ['legacy', 'Legacy'], ['h2h', 'T7 H2H']]
      : [['votes', 'Votes'], ['how', 'How it works'], ['legacy', 'Legacy'], ['h2h', 'T7 H2H']];
    return '<nav class="nav" aria-label="On this page"><div class="wrap"><a class="nav-logo" href="#tpx-' + items[0][0] + '" data-go="' + items[0][0] + '" aria-label="TPA X, back to the top"><img src="' + img('badge_outline.png') + '" alt="" width="39" height="34"></a>' +
      '<div class="nav-links">' + items.map(function (it, i) {
        return '<a href="#tpx-' + it[0] + '" data-go="' + it[0] + '" aria-current="' + (i === 0 ? 'true' : 'false') + '">' + it[1] + '</a>';
      }).join('') + '</div></div></nav>';
  }
  function heroVote() {
    // the trophy loop and the tagline above the fold, then the votes: one row, the card in the centre in focus
    var n = live().length, days = Math.max(0, Math.ceil((new Date(D.resultsDate + 'T12:00:00') - new Date()) / 86400000));
    return '<section class="hero" id="tpx-votes" aria-label="Latest votes">' + heroMedia() +
      '<div class="wrap hero-top"><p class="tagline"><span>10 years of celebrating</span> <span>water polo excellence</span></p></div>' +
      '<div class="vwrap">' + voteRow() + '</div></section>' + tracker(n, days);
  }
  function votesSection() {   // Results view: the same row of votes, with its own heading
    return '<section class="sec jsec" id="tpx-jury" aria-labelledby="tpx-jury-h"><div class="wrap stack" style="gap:8px"><h2 class="h2" id="tpx-jury-h">All votes</h2>' +
      '<p class="lede">Every verdict, every Total 7.</p></div><div class="vwrap">' + voteRow() + '</div></section>';
  }
  // the ballot a card shows: a media juror has one per award, picked on the card itself (or by the award filter)
  function ballotOf(j) {
    if (!j.ballots) return { a: j.a, picks: j.picks, tp: j.tp };
    var want = S.mb[j.id] || (S.vf === 'men' ? 'm' : S.vf === 'women' ? 'w' : j.ballots[0].a);
    return j.ballots.filter(function (b) { return b.a === want; })[0] || j.ballots[0];
  }
  function voteList() { var f = S.vf || 'all'; return f === 'all' ? live() : live(f === 'women' ? 'w' : 'm'); }
  function voteRow() {
    var f = S.vf || 'all', list = voteList();
    var tabs = '<div class="vtabs" role="group" aria-label="Show votes">' + [['all', 'All', live().length], ['women', 'Women', live('w').length], ['men', 'Men', live('m').length]].map(function (t) {
      return '<button type="button" data-vf="' + t[0] + '" aria-pressed="' + (f === t[0]) + '">' + t[1] + '<span>' + t[2] + '</span></button>';
    }).join('') + '</div>';
    var cards = list.length ? list.map(voteCard).join('') :
      '<li class="hc on"><article class="hcard glass hc-empty"><span class="hc-id"><small>' + (f === 'women' ? 'Women’s award' : f === 'men' ? 'Men’s award' : 'The jury') + '</small><strong>' + (live().length ? 'No votes yet' : 'First votes coming soon') + '</strong></span></article></li>';
    return tabs + '<ul class="hrow" aria-label="Votes">' + cards + '</ul>';
  }
  function tpLine(b) {
    var tpId = b.picks[b.tp], tp = P(tpId);
    return '<div class="hc-tp">' + photo('players', tpId, tp.photo, tp.n, '', false, tp.fy, 's') + '<span><small>Total Player' + (b.a ? ' · ' + (b.a === 'w' ? 'Women' : 'Men') : '') + '</small><b>' + e(tp.n) + '</b></span></div>';
  }
  function voteCard(j, i) {
    var b = ballotOf(j), x = !!S.hx, first = i === 0 && (S.vf || 'all') === 'all', media = !!j.ballots;
    var when = (j.posted ? day(j.posted) : 'Vote ' + j.order);
    var chip = media ? 'Women’s + Men’s' : (j.a === 'w' ? 'Women’s' : 'Men’s');
    var btabs = media ? '<div class="hc-btabs" role="group" aria-label="Ballot">' + j.ballots.map(function (bb) {
      return '<button type="button" data-bt="' + bb.a + '" aria-pressed="' + (bb.a === b.a) + '">' + (bb.a === 'w' ? 'Women' : 'Men') + '</button>'; }).join('') + '</div>' : '';
    return '<li class="hc' + (i === (S.hc || 0) ? ' on' : '') + (x ? ' x xd' : '') + (media ? ' media' : '') + '" data-hc="' + i + '" data-jid="' + e(j.id) + '"><article class="hcard glass" aria-label="Vote of ' + e(j.n) + '">' +
      '<button type="button" class="hc-hit" data-hc-go="' + i + '" aria-label="' + e(j.n) + ', ' + (media ? 'women’s and men’s awards' : awardWord(j.a) + ' award') + '">' +
        '<span class="hc-frame">' + photo('jurors', j.id, j.photo, j.n, 'hc-ph', i < 3, j.fy) + '<span class="hc-awd">' + chip + '</span></span>' +
        '<span class="hc-id' + (j.f && j.l ? '' : ' nofn') + '"><small>' + e((first ? 'Latest · ' : '') + when) + '</small>' + (j.f && j.l ? '<span class="fn">' + e(j.f) + '</span><strong>' + e(j.l) + '</strong>' : '<strong>' + e(j.n) + '</strong>') + roleIcons(j) + '</span></button>' +
      '<div class="hc-more"><div class="hc-more-in">' +
        '<div class="hc-rolesw"><div><div class="hc-roles">' + roles(j) + '</div></div></div>' +
        (j.note ? '<div class="hc-notew"><div><p class="hc-note"><sup class="ast">*</sup>' + e(j.note) + '</p></div></div>' : '') + btabs +
        '<div class="hc-tpw"><div>' + tpLine(b) + '</div></div>' +
        '<div class="hc-t7"><div class="hc-t7-in">' + (x && Math.abs(i - (S.hc || 0)) <= 2 ? t7Grid(j) : '') + '</div></div>' +
        '<div class="hc-act"><button type="button" class="glass-btn" data-x="' + i + '" aria-expanded="' + x + '">' + (x ? 'Close' : 'See their Total 7') + '</button>' +
          (j.ig ? '<a class="jig" href="' + e(j.ig) + '" target="_blank" rel="noopener"' + (x ? '' : ' tabindex="-1"') + '>On Instagram ↗</a>' : '') + '</div>' +
      '</div></div></article></li>';
  }
  function t7Grid(j) {
    var b = ballotOf(j);
    return formation(b.picks, b.tp, null, null, null, true);
  }
  // a media card's own switch: only this card changes ballot, with a quick cross-fade
  function setBallot(li, a) {
    var j = byId(li.getAttribute('data-jid'));
    if (!j || ballotOf(j).a === a) return;
    S.mb[j.id] = a;
    Array.prototype.forEach.call(li.querySelectorAll('[data-bt]'), function (bt) { bt.setAttribute('aria-pressed', String(bt.getAttribute('data-bt') === a)); });
    var parts = [[li.querySelector('.hc-tpw > div'), function () { return tpLine(ballotOf(j)); }], [li.querySelector('.hc-t7-in'), function () { return t7Grid(j); }]];
    parts.forEach(function (pt) {
      var box = pt[0]; if (!box || (box.classList.contains('hc-t7-in') && !box.firstChild)) return;
      var fresh = function () { if (box.classList.contains('hc-t7-in')) settleGrid(li); };   // the new ballot's tiles come in like any card's
      if (reduced() || !box.animate) { box.innerHTML = pt[1](); fresh(); return; }
      var out = box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 130, easing: 'ease-in', fill: 'forwards' });
      setTimeout(function () {   // fade out, swap, rise in
        box.innerHTML = pt[1](); out.cancel(); fresh();
        box.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 280, easing: EASE });
      }, 130);
    });
    preload(li);
  }
  function reduced() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  // a page scroll that runs in step with a card opening: same length, same ease-out; a touch or wheel stops it
  var tween = null;
  function glideScroll(dy, ms) {
    if (tween) tween.stop();
    if (reduced() || Math.abs(dy) < 2) { if (Math.abs(dy) >= 2) window.scrollTo(0, window.scrollY + dy); return; }
    var y0 = window.scrollY, t0 = 0, live = true, stop = function () { live = false; window.removeEventListener('wheel', stop); window.removeEventListener('touchstart', stop); tween = null; };
    window.addEventListener('wheel', stop, { passive: true }); window.addEventListener('touchstart', stop, { passive: true });
    tween = { stop: stop };
    requestAnimationFrame(function step(t) {
      if (!live) return; if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / ms), ease = 1 - Math.pow(1 - k, 3);
      window.scrollTo(0, y0 + dy * ease);
      if (k < 1) requestAnimationFrame(step); else stop();
    });
  }
  var EASE = 'cubic-bezier(.22,.8,.24,1)';
  var vhp = null;
  function availH() {   // an open card must fit here: the small viewport (browser bars shown) below the jump bar
    if (!vhp || !vhp.isConnected) { vhp = document.createElement('div'); vhp.setAttribute('aria-hidden', 'true'); vhp.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100svh;visibility:hidden;pointer-events:none'; root.appendChild(vhp); }
    var vh = Math.min(vhp.offsetHeight || 1e5, window.innerHeight);
    return vh - OPT.offset - (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight - 20;
  }
  // keep a card (or the opened card) fully in view below the jump bar
  function showCard(li, smooth) {
    var card = li.querySelector('.hcard'); if (!card) return;
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, top = OPT.offset + navH + 10, bottom = window.innerHeight - 10, r = card.getBoundingClientRect(), dy = 0;
    if (r.height > bottom - top || r.top < top) dy = r.top - top;
    else if (r.bottom > bottom) dy = r.bottom - bottom;
    if (Math.abs(dy) > 2) window.scrollTo({ top: window.scrollY + dy, behavior: smooth && !reduced() ? 'smooth' : 'auto' });
  }
  function depth(el, off, span, ks, ko, vw, reduce, flat) {
    if (!el) return;
    if (flat) { if (el._k !== 'flat') { el._k = 'flat'; el._wc = 'auto'; el.style.transform = ''; el.style.opacity = ''; el.style.willChange = 'auto'; } return; }
    var d = Math.min(1, Math.abs(off) / span), s = reduce ? 1 : 1 - ks * d, o = reduce ? 1 : 1 - ko * d, ox = off < -4 ? '100%' : off > 4 ? '0%' : '50%';
    var k = s.toFixed(3) + '|' + o.toFixed(3) + '|' + ox;
    if (el._k !== k) { el._k = k; el.style.transform = s < 1 ? 'scale(' + s.toFixed(3) + ')' : 'none'; el.style.opacity = o < 1 ? o.toFixed(3) : ''; el.style.transformOrigin = ox + ' 0'; }
    var wc = Math.abs(off) < vw * 1.2 ? 'transform' : 'auto'; if (el._wc !== wc) { el._wc = wc; el.style.willChange = wc; }
  }
  // the row: the card nearest the centre is in focus; the others shrink towards it and fade with their distance
  function heroRow() {
    var row = APP.querySelector('.hrow'); if (!row) return;
    var items = row.querySelectorAll('.hc'), reduce = reduced(), raf = 0;
    function fit() {   // the row keeps the tallest open card's height, so nothing below jumps while cards open and fold
      var h = 0;
      Array.prototype.forEach.call(items, function (li) {
        if (li.classList.contains('x')) return;
        var hit = li.querySelector('.hc-hit'), more = li.querySelector('.hc-more-in'), card = li.querySelector('.hcard');
        var full = hit && more ? hit.offsetHeight + more.scrollHeight + (li.classList.contains('on') ? 0 : 10) + 2 : (card ? card.offsetHeight : 0);
        if (full > h) h = full;
      });
      if (h) row.style.minHeight = (h + 28) + 'px';
    }
    function update() {
      raf = 0; var mid = row.scrollLeft + row.clientWidth / 2, best = null, bd = 1e9, geo = [];
      Array.prototype.forEach.call(items, function (li) {   // read everything first, then write
        var c = li.offsetLeft + li.offsetWidth / 2; geo.push([li, c, li.offsetWidth]);
        if (Math.abs(c - mid) < bd) { bd = Math.abs(c - mid); best = li; }
      });
      var flat = S.hx && row.clientWidth < 600;
      geo.forEach(function (g) { depth(g[0].querySelector('.hcard'), g[1] - mid, g[2] + 10, 0.14, 0.5, row.clientWidth, reduce, flat); });
      Array.prototype.forEach.call(items, function (li) {
        var on = li === best;
        if (li.classList.contains('on') !== on) li.classList.toggle('on', on);
        var b = li.querySelector('.glass-btn'); if (b) b.tabIndex = on ? 0 : -1;
        var ig = li.querySelector('.jig'); if (ig) ig.tabIndex = on && S.hx ? 0 : -1;
      });
      if (S.hx && !touching && best && bd < best.offsetWidth * 0.3) settleGrid(best);   // finger up and the card nearly in place: its tiles start coming in
      if (best && best.hasAttribute('data-hc')) {
        var nb = +best.getAttribute('data-hc'), moved = nb !== S.hc; S.hc = nb;
        // open row: the neighbours get their Total 7 once the swipe settles (building them mid-swipe can cost Safari its snap);
        // only a card you land on without one gets it straight away
        if (S.hx && moved) { var box = best.querySelector('.hc-t7-in'); if (box && !box.firstChild) grids(row); }
        clearTimeout(pre); pre = setTimeout(function () { preload(best); }, 450);   // only once you stay on a card
      }
    }
    var pre = 0;
    if (S.hx) { row.classList.add('open'); row.style.setProperty('--xw', xWidth(row) + 'px'); fitHero(row); grids(row); }
    if (S.hx) setTimeout(function () { settleGrid(row.querySelector('.hc.on')); }, 60);
    var target = row.querySelector('.hc.on') || items[0];
    if (target) row.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - row.clientWidth / 2;
    update(); fit();
    // when a swipe has settled: build the neighbours' grids, and if the card in focus was left short of the centre
    // (iOS Safari sometimes drops the snap while the page is busy loading photos), glide it into place
    var settle = 0, touching = false;
    function settled() {
      settle = 0; if (touching || !row.isConnected) return;
      var best = row.querySelector('.hc.on'); if (!best) return;
      var want = centreOf(best);
      if (Math.abs(want - row.scrollLeft) > 2) { row.scrollTo({ left: want, behavior: reduced() ? 'auto' : 'smooth' }); return; }
      if (S.hx) { grids(row); settleGrid(best); }
    }
    function later() { clearTimeout(settle); settle = setTimeout(settled, 160); }
    row.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(update); later(); }, { passive: true });
    row.addEventListener('touchstart', function () { touching = true; clearTimeout(settle); }, { passive: true });
    row.addEventListener('touchend', function () { touching = false; later(); }, { passive: true });
    row.addEventListener('touchcancel', function () { touching = false; later(); }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    heroFit = function () { if (row.isConnected) { if (S.hx) { row.style.setProperty('--xw', xWidth(row) + 'px'); fitHero(row); } fit(); update(); } };
  }
  var heroFit = null;
  window.addEventListener('resize', function () {
    if (heroFit) heroFit(); alignHero();
    var er = APP.querySelector('.edrail'); if (er && S.edOpen) fitRoad(er);
  }, { passive: true });
  // the card in focus fetches its seven pick photos ahead, so the grid is ready when it opens
  var preloaded = {};
  function preload(li) {
    var j = null; live().forEach(function (x) { if (li && x.id === li.getAttribute('data-jid')) j = x; });
    if (!j) return;
    [ballotOf(j)].forEach(function (b) {
      var key = j.id + ':' + b.a; if (preloaded[key]) return; preloaded[key] = true;
      SLOTS.forEach(function (s) { var p = P(b.picks[s]); if (p.photo) { var im = new Image(); im.decoding = 'async'; im.src = img('players/m/' + b.picks[s] + '.webp'); } });
    });
  }
  // the height a card will have once open, measured on a hidden copy, so the page can scroll while it opens
  function openHeight(li, w) {
    var c = li.cloneNode(true); c.classList.add('x', 'xd', 'measure', 'on'); c.removeAttribute('data-hc');
    c.style.cssText += ';position:absolute;left:0;top:0;width:' + w + 'px;visibility:hidden;pointer-events:none';
    c.style.setProperty('--xw', w + 'px');
    li.parentNode.appendChild(c); var h = c.querySelector('.hcard').offsetHeight; c.remove(); return h;
  }
  function xWidth(row) { return Math.max(260, Math.min(480, row.clientWidth - 32)); }
  function centreOf(li, w) { var row = li.parentNode; return li.offsetLeft + (w || li.offsetWidth) / 2 - row.clientWidth / 2; }
  function centreCard(li) { li.parentNode.scrollTo({ left: centreOf(li), behavior: reduced() ? 'auto' : 'smooth' }); }
  // "See their Total 7": the card widens, the photo eases into a banner, the Total Player line folds away, the grid unfolds
  // an open card never outgrows the screen: the photo banner gives way first, then the Total 7 grid (same sizes on every card)
  var GRID = null;
  function fitHero(row) {
    var w = xWidth(row), A = availH(), key = w + 'x' + A + 'x' + row.children.length + 'x' + (S.vf || 'all');
    if (row._fit === key) return; row._fit = key;
    var ghost = document.createElement('ul'); ghost.className = 'hrow open measure'; ghost.setAttribute('aria-hidden', 'true');
    ghost.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none;width:' + row.clientWidth + 'px;--xw:' + w + 'px;--bh:150px;--gw:360px';
    // cards share a handful of layouts (plain, with a note, media, a long name): one measured copy per layout keeps this quick with many jurors
    var J = {}, sigs = [], copies = {};
    live().forEach(function (x) { J[x.id] = x; });
    Array.prototype.forEach.call(row.querySelectorAll('.hc'), function (li, k) {
      var j = J[li.getAttribute('data-jid')] || {};
      var sig = (j.ballots ? 'M' : '') + '#' + (j.note || '') + '#' + ((j.l || j.n || '').length > 12 || (j.f || '').length > 18 ? (j.f || '') + '|' + (j.l || j.n) : '');
      sigs.push(sig);
      if (!GRID && k === 0 && j.id) { var g = li.cloneNode(true); g.className = 'hc x xd on'; g.removeAttribute('data-hc'); g.style.cssText = ''; g.querySelector('.hc-t7-in').innerHTML = t7Grid(j); ghost.appendChild(g); }
      if (copies[sig]) return;
      var c = li.cloneNode(true); c.className = 'hc x xd on'; c.removeAttribute('data-hc'); c.style.cssText = '';
      var box = c.querySelector('.hc-t7-in'); if (box) box.innerHTML = '<div class="form sq" style="height:0;padding:0"></div>';   // the grid's own top padding is already in GRID.h
      ghost.appendChild(c); copies[sig] = c;
    });
    row.parentNode.appendChild(ghost);
    var gEl = ghost.querySelector('.hc .form:not([style])');
    if (!GRID && gEl) GRID = { w: gEl.offsetWidth, h: gEl.offsetHeight };
    var H = {}; Object.keys(copies).forEach(function (sg) { H[sg] = copies[sg].querySelector('.hcard').offsetHeight; });
    var Fs = sigs.map(function (sg) { return H[sg]; }), sorted = Fs.slice().sort(function (p, q) { return p - q; });
    var Fmax = sorted[sorted.length - 1] || 0, Fmid = sorted[Math.floor((sorted.length - 1) / 2)] || 0;
    var W0 = Math.min(360, w - 22), extra = GRID ? GRID.h - GRID.w : 0.07 * W0;   // square tiles: the grid loses as much height as width
    ghost.remove();
    // one grid size for every card: a typical card keeps an 88 px photo strip, the tallest card still fits without its photo
    var gw = Math.min(W0, A - (Fmid - 150) - 88 - extra, A - (Fmax - 150) - extra);
    gw = Math.max(200, Math.round(gw)); var G = gw + extra;
    row.style.setProperty('--gw', gw + 'px');
    // each card's photo banner takes what is left of the screen (up to 150 px)
    Array.prototype.forEach.call(row.querySelectorAll('.hc'), function (li, k) {
      var bh = Math.max(0, Math.min(150, Math.floor(A - (Fs[k] - 150) - G))); if (bh < 44) bh = 0;   // a sliver of photo looks like a mistake
      li.style.setProperty('--bh', bh + 'px');
    });
  }
  function byId(id) { var j = null; live().forEach(function (x) { if (x.id === id) j = x; }); return j; }
  // the Total 7 grids of the open row: the card in focus and two either side (the rest fill in as you swipe)
  // the card you land on shows its player tiles one after another, each once its photo is decoded (dark shells until then),
  // so a swipe never shows tiles still loading; the cards either side get their photos decoded meanwhile
  function decoded(im) {
    if (!im) return Promise.resolve();
    var d = im.decode ? im.decode().catch(function () {}) : new Promise(function (r) { if (im.complete) r(); else { im.onload = r; im.onerror = r; } });
    return Promise.race([d, new Promise(function (r) { setTimeout(r, 900); })]);
  }
  function reveal(li) {
    var form = li && li.querySelector('.hc-t7-in .form'); if (!form || form._rev) return; form._rev = true;
    var tiles = form.querySelectorAll('.tile:not(.void)');
    if (reduced()) { Array.prototype.forEach.call(tiles, function (t) { t.classList.add('in'); }); return; }
    var ready = Array.prototype.map.call(tiles, function (t) { return decoded(t.querySelector('img')); }), chain = Promise.resolve();
    Array.prototype.forEach.call(tiles, function (t, i) {
      chain = chain.then(function () { return ready[i]; }).then(function () { t.classList.add('in'); return new Promise(function (r) { setTimeout(r, 75); }); });
    });
  }
  function warm(li) {
    var form = li && li.querySelector('.hc-t7-in .form'); if (!form || form._warm) return; form._warm = true;
    Array.prototype.forEach.call(form.querySelectorAll('.tile img'), function (im) { decoded(im); });
  }
  function settleGrid(li) { if (!li) return; reveal(li); warm(li.previousElementSibling); warm(li.nextElementSibling); }
  // the open row keeps Total 7 grids only near the card in focus: within 2 they are built, beyond 4 they are dropped,
  // so a long swipe through many jurors never piles up hundreds of photos (they come back from the cache)
  function grids(row) {
    var all = row.querySelectorAll('.hc'), at = S.hc || 0;
    Array.prototype.forEach.call(all, function (c, k) {
      var d = Math.abs(k - at), box = c.querySelector('.hc-t7-in'); if (!box) return;
      if (d > 4) { if (box.firstChild) box.innerHTML = ''; return; }
      if (d > 2 || box.firstChild) return;
      var j = byId(c.getAttribute('data-jid')); if (j) box.innerHTML = t7Grid(j);
    });
  }
  function expandCard(li, open) {
    var row = li.parentNode, wait = reduced() ? 0 : 520, all = row.querySelectorAll('.hc');
    if (!li.querySelector('[data-x]')) return;
    var w = xWidth(row), h = 0;
    if (open) {
      row.style.setProperty('--xw', w + 'px'); fitHero(row);
      S.hc = +li.getAttribute('data-hc') || 0; grids(row);
      h = openHeight(li, w); preload(li); settleGrid(li);
    }
    var flips = reduced() ? [] : Array.prototype.map.call(li.querySelectorAll('.hc-id > *'), function (el) { return [el, el.getBoundingClientRect()]; });
    var at = +li.getAttribute('data-hc') || 0, far = [];
    Array.prototype.forEach.call(all, function (c, k) { if (Math.abs(k - at) > 2) { c.classList.add('ni'); far.push(c); } });   // off screen: no animation
    setTimeout(function () { far.forEach(function (c) { c.classList.remove('ni'); }); }, wait + 80);
    S.hx = open; row.classList.toggle('open', open);
    Array.prototype.forEach.call(all, function (c) {
      c.classList.toggle('x', open); if (!open) c.classList.remove('xd');
      var bt = c.querySelector('[data-x]'); if (bt) { bt.setAttribute('aria-expanded', String(open)); bt.textContent = open ? 'Close' : 'See their Total 7'; }
      var ig = c.querySelector('.jig'); if (ig) ig.tabIndex = open && c === li ? 0 : -1;
    });
    if (flips.length) {   // the open card shows the name on one line: first name, last name, vote; each part glides to its new place
      row.scrollLeft = centreOf(li);
      flips.forEach(function (f) {
        var r = f[0].getBoundingClientRect(), dx = f[1].left - r.left, dy = f[1].top - r.top;
        if (!f[1].width || !r.width) { if (r.width && f[0].animate) f[0].animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, delay: 160, easing: 'ease-out', fill: 'backwards' }); return; }
        if ((Math.abs(dx) > 1 || Math.abs(dy) > 1) && f[0].animate) f[0].animate([{ transform: 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)' }, { transform: 'none' }], { duration: wait, easing: EASE });
      });
    }
    var t0 = 0, user = false, grab = function () { user = true; };   // a touch or wheel on the row ends it: the swipe is yours
    row.addEventListener('touchstart', grab, { passive: true }); row.addEventListener('wheel', grab, { passive: true });
    requestAnimationFrame(function keep(t) {   // widths change: the card in focus stays in the centre throughout
      if (!t0) t0 = t; if (!user) row.scrollLeft = centreOf(li);
      if (!user && t - t0 < wait + 60) requestAnimationFrame(keep);
      else { row.removeEventListener('touchstart', grab); row.removeEventListener('wheel', grab); }
    });
    setTimeout(function () {
      if (S.hx) Array.prototype.forEach.call(all, function (c) { c.classList.add('xd'); });
      else Array.prototype.forEach.call(row.querySelectorAll('.hc-t7-in .form'), function (f) { f._rev = false; Array.prototype.forEach.call(f.querySelectorAll('.tile.in'), function (t) { t.classList.remove('in'); }); });
    }, wait);
    // the page moves while the card opens: it ends fully in view below the jump bar
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, topL = OPT.offset + navH + 10, botL = window.innerHeight - 10;
    var r = li.querySelector('.hcard').getBoundingClientRect();
    var dy = open ? ((h > botL - topL || r.top < topL) ? r.top - topL : Math.max(0, r.top + h - botL)) : Math.min(0, r.top - topL);
    glideScroll(dy, open ? 520 : 420);
  }
  function setFilter(f) {
    if ((S.vf || 'all') === f) return;
    S.vf = f; S.hc = 0; S.mb = {};
    var wrap = APP.querySelector('.vwrap'); if (!wrap) return;
    var old = wrap.querySelector('.hrow');
    var swap = function () {
      wrap.innerHTML = voteRow(); heroRow();
      var nr = wrap.querySelector('.hrow');
      if (!reduced() && nr.animate) nr.animate([{ opacity: 0, transform: 'translateX(28px)' }, { opacity: 1, transform: 'none' }], { duration: 360, easing: EASE });
    };
    if (reduced() || !old || !old.animate) { swap(); return; }
    old.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-20px)' }], { duration: 170, easing: 'ease-in', fill: 'forwards' });
    setTimeout(swap, 170);
    Array.prototype.forEach.call(wrap.querySelectorAll('[data-vf]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-vf') === f)); });
  }
  function ago(iso) {
    var m = Math.max(0, Math.round((new Date() - new Date(iso)) / 60000));
    return m < 60 ? m + ' min ago' : m < 1440 ? Math.round(m / 60) + ' h ago' : Math.round(m / 1440) + ' d ago';
  }
  function tracker(n, days) {
    // the thin live band under the hero: the results reveal date leads, the vote counters follow small
    var w = live('w').length, m = live('m').length;
    var st = function (num, label) { return '<span class="trk-mini"><b>' + num + '</b> ' + label + '</span>'; };
    return '<section class="tracker" aria-label="Results reveal and live tracker"><div class="wrap">' +
      '<div class="trk-top"><span class="trk-live"><i aria-hidden="true"></i>Live</span></div>' +
      '<div class="reveal"><span class="eyebrow">Results reveal · ' + e(longDay(D.resultsDate)) + '</span><strong><b>' + days + '</b> day' + (days === 1 ? '' : 's') + ' to go</strong>' +
      '<span class="reveal-cd">Winners, Total 7s and standings, all on one day</span></div>' +
      '<div class="trk-row">' + st(n, n === 1 ? 'vote in' : 'votes in') + st(w, 'women’s') + st(m, 'men’s') + '</div>' +
      '<ol class="road2"><li class="on"><b>Vote</b><span>Now</span></li><li class="next"><b>Results</b><span>' + e(longDay(D.resultsDate)) + '</span></li></ol>' +
      '</div></section>';
  }
  function heroMedia() {
    var wide = window.matchMedia('(min-width: 900px)').matches;
    var poster = vid(wide ? 'hero_landscape.webp' : 'hero_portrait.webp');
    return '<div class="hero-media" aria-hidden="true"><img src="' + poster + '" alt="" fetchpriority="high"><video muted playsinline loop preload="none" data-src="' + vid(wide ? 'hero_landscape_web.mp4' : 'hero_portrait_web.mp4') + '"></video></div>';
  }
  function seg(label, extra) {
    var a = S.award;
    return '<div class="seg" role="group" aria-label="' + e(label) + '">' +
      '<button type="button" data-award="w" aria-pressed="' + (a === 'w') + '">Women' + (extra ? extra : '') + '</button>' +
      '<button type="button" data-award="m" aria-pressed="' + (a === 'm') + '">Men' + (extra ? extra : '') + '</button></div>';
  }
  function formation(picks, tpSlot, labelA, labelB, tag, compact) {
    var cell = function (slot) {
      var pid = picks[slot]; if (!pid) return '<div class="tile"><div class="photo"><span class="ph">' + slot + '</span></div></div>';
      var p = P(pid), tp = slot === tpSlot;
      return '<div class="tile' + (tp ? ' tp' : '') + '">' + photo('players', pid, p.photo, p.n, '', !!compact, compact ? p.fy : 0, 'm') + '<div class="shade"></div>' +
        (tp ? '<span class="tag">' + e(tag || 'Total Player') + '</span>' : '') +
        '<div class="meta"><span class="ids">' + tip(flag(p.nat), NATS[p.nat] || p.nat) + tip(crest(p.crest, p.club), p.club) + '</span>' +
        '<span class="plate"><i>' + slot + '</i><b>' + e(p.l) + '</b></span></div></div>';
    };
    var lab = function (a, b) { return compact ? '<div class="tile void" aria-hidden="true"></div>' : '<div class="tile label"><small>' + e(a) + '</small><b>' + e(b) + '</b></div>'; };
    return '<div class="form' + (compact ? ' sq' : '') + '">' + lab(labelA && labelA[0], labelA && labelA[1]) + cell('GK') + lab(labelB && labelB[0], labelB && labelB[1]) +
      cell('LW') + cell('CF') + cell('RW') + cell('LD') + cell('CB') + cell('RD') + '</div>';
  }
  function jxAnim(panel, card, open, done) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !panel.animate) { if (done) done(); return; }
    var gr = panel.parentNode.getBoundingClientRect(), cr = card.getBoundingClientRect(), h = panel.offsetHeight;
    var L = Math.max(0, cr.left - gr.left), R = Math.max(0, gr.right - cr.right);
    var from = { height: '0px', clipPath: 'inset(0px ' + R + 'px 0px ' + L + 'px round 6px)', opacity: 0.35 },
        to = { height: h + 'px', clipPath: 'inset(0px 0px 0px 0px round 6px)', opacity: 1 };
    var an = panel.animate(open ? [from, to] : [to, from], { duration: open ? 460 : 300, easing: 'cubic-bezier(.2,.7,.2,1)', fill: open ? 'none' : 'forwards' });
    an.onfinish = function () { if (done) done(); };
  }
  function jxShow(card, panel) {   // bring the open card and its panel into view, under the jump bar
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight; panel = panel || APP.querySelector('.jx');
    var top = card.getBoundingClientRect().top - OPT.offset - navH - 12, bottom = panel ? panel.getBoundingClientRect().bottom : 0;
    if (top < 0 || bottom > window.innerHeight) window.scrollTo({ top: window.scrollY + top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function team(key) { return D.h2hTeams[key]; }
  function h2hRedraw() { var sec = APP.querySelector('#tpx-h2h'); if (sec) { sec.outerHTML = h2h(); fitOpenGame(); var nsec = APP.querySelector('#tpx-h2h'); if (nsec) cachedImgs(nsec); } }
  function fitOpenGame() { var b = APP.querySelector('#tpx-h2h .game[aria-expanded="true"]'); if (b) fitGame(b.parentNode); }
  // the game that is open when the page loads: the one being voted on now, else the next one with both teams known
  function autoGame(games, X) {
    var state = function (g) { return X && g.id === X.id ? (phase() === 'results' ? 'result' : 'live') : g.state; };
    var ready = games.filter(function (g) { return g.a && g.b && team(g.a) && team(g.b); });
    var now = ready.filter(function (g) { return state(g) === 'live'; })[0];
    if (now) return now.id;
    var next = ready.filter(function (g) { return state(g) !== 'result' && state(g) !== 'draw' && state(g) !== 'closed'; })
      .map(function (g, i) { return [g.date || '9999', i, g]; }).sort(function (x, y) { return x[0] < y[0] ? -1 : x[0] > y[0] ? 1 : x[1] - y[1]; });
    return next.length ? next[0][2].id : null;
  }
  function gameToggle(id, btn) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, cur = APP.querySelector('#tpx-h2h .reel');
    var glide = function (el, open, done) {
      if (reduce || !el || !el.animate) { if (done) done(); return; }
      var h = el.offsetHeight, an = el.animate(open ? [{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }] : [{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }],
        { duration: open ? 480 : 320, easing: 'cubic-bezier(.2,.7,.2,1)', fill: open ? 'none' : 'forwards' });
      an.onfinish = function () { if (done) done(); };
      var f = el.querySelector('.fld, .frame');
      if (open && f && f.animate) f.animate([{ transform: 'translateY(-14px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 520, delay: 80, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
    };
    S.oa = false;   // the visitor's choice from now on
    if (S.open === id) { glide(cur, false, function () { S.open = null; h2hRedraw(); }); return; }
    var y0 = btn.getBoundingClientRect().top;
    S.open = id; h2hRedraw();
    var nb = APP.querySelector('#tpx-h2h [data-game="' + id + '"]'); if (!nb) return;
    window.scrollBy(0, nb.getBoundingClientRect().top - y0);   // a panel closing above must not move the bar you tapped
    nb.focus({ preventScroll: true });
    var li = nb.parentNode, reel = li.querySelector('.reel');
    fitGame(li);
    // the page moves while the game opens: bar, field and Vote now end fully in view below the jump bar
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, topL = OPT.offset + navH + 10, botL = window.innerHeight - 10;
    var top = nb.getBoundingClientRect().top, total = li.offsetHeight;
    var dy = (total > botL - topL || top < topL) ? top - topL : Math.max(0, top + total - botL);
    glide(reel, true);
    glideScroll(dy, 480);
  }
  // the open game never outgrows the screen. The field keeps field proportions (user 2026-11-23: "keep the field in field
  // proportion"): on a short screen the whole field is scaled down as one piece (CSS zoom: rings, names and spacing together),
  // so the formation never crowds; tight mode first trims the space around it.
  function fitGame(li) {
    var fld = li.querySelector('.fld'), half = fld && fld.querySelector('.half'), reel = li.querySelector('.reel'); if (!half) return;
    fld.style.zoom = ''; reel.classList.remove('tight');
    var A = availH(), x = li.offsetHeight - A; if (x <= 0) return;
    reel.classList.add('tight'); x = li.offsetHeight - A; if (x <= 0) return;
    var h = fld.offsetHeight; fld.style.zoom = Math.max(0.7, (h - x) / h).toFixed(3);
  }
  var IGI = '<svg class="igi" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.3" fill="currentColor"/></svg>';
  function h2h() {
    var a = S.award, games = D.h2h[a] || [], pool = D.h2hPool[a] || [], X = D.preview && D.h2hSample && D.h2hSample[a];
    if (S.oa) S.open = autoGame(games, X);
    var rounds = [['qf', 'Quarter-finals'], ['sf', 'Semi-finals'], ['f', 'Final'], ['bf', 'Bonus final · v the 2020 Timeless 7']];
    var yl = function (T) { return e(T.year) + (/Timeless/i.test(T.label) ? '<small>Timeless</small>' : ''); };
    var body = rounds.map(function (r) {
      var gs = games.filter(function (g) { return g.round === r[0]; }); if (!gs.length) return '';
      return '<div class="round"><h3>' + r[1] + '</h3><ul class="games">' + gs.map(function (g) {
        if (X && g.id === X.id) g = Object.assign({}, g, phase() === 'results' ? { state: 'result', pa: X.pa, pb: X.pb, winner: X.pa >= X.pb ? g.a : g.b, demo: true } : { state: 'live', demo: true });
        var A = g.a && team(g.a), B = g.b && team(g.b);
        if (!(A && B)) {
          var st0 = g.state === 'draw' ? 'Draw to come' : (g.date ? 'Next · ' + day(g.date) : (g.note || 'Next'));
          return '<li><div class="game off nt"><span class="yr">' + e(g.label) + '</span><span class="st">' + e(st0) + '</span></div></li>';
        }
        var open = S.open === g.id, done = g.state === 'result', live = g.state === 'live', closed = g.state === 'closed', ex = g.demo ? '<span class="ex">Example</span>' : '';   // closed: the 24 h poll is over, the result is not in yet
        var head;
        if (done) {   // decided: the bar becomes the vote split
          var aw = g.winner === g.a;
          head = '<span class="split' + (aw ? ' aw' : ' bw') + '" aria-hidden="true"><i style="width:' + g.pa + '%"></i></span>' +
            '<span class="yr' + (aw ? ' win' : '') + '">' + yl(A) + ex + '</span><span class="st pc"><b>' + g.pa + '%</b><b>' + g.pb + '%</b></span><span class="yr r' + (aw ? '' : ' win') + '">' + yl(B) + '</span>';
        } else {
          head = '<span class="yr">' + yl(A) + ex + '</span><span class="st">' + (live ? '<i class="lamp" aria-hidden="true"></i>Vote live' : closed ? 'Poll closed' : e(g.date ? 'Next · ' + day(g.date) : 'Up next')) + '</span><span class="yr r">' + yl(B) + '</span>';
        }
        var gi = g.img || (done ? g.imgResult : g.imgFaceoff);   // the game's Story graphic, once it exists
        var lab = (a === 'w' ? 'Women' : 'Men') + ' · ' + ({ qf: 'quarter-final ', sf: 'semi-final ', f: 'final', bf: 'bonus final' }[g.round] || '') + (g.round === 'qf' || g.round === 'sf' ? g.label.slice(-1) : '');
        var reel = open ? '<div class="reel">' + field(g, lab) +
          (done && g.ig ? '<a href="' + e(g.ig) + '" target="_blank" rel="noopener">Watch the reel on Instagram ↗</a>' : '') + '</div>' : '';
        var vote = live ? '<div class="vote-cta"><a class="vote-now" href="' + e(g.story || D.igStories || D.ig || 'https://www.instagram.com/') + '" target="_blank" rel="noopener" aria-label="Vote now: ' + e(A.year + ' v ' + B.year) + ' in our Instagram Story">' + IGI + '<b>Vote now</b></a><small>in our Instagram Story</small></div>' : '';
        var label = A.year + ' v ' + B.year + (done ? ', ' + g.pa + ' to ' + g.pb + ' percent' : live ? ', vote live' : closed ? ', poll closed, result soon' : ', up next');
        return '<li><button type="button" class="game' + (done ? ' res' : live ? ' live' : ' up') + '" data-game="' + e(g.id) + '" aria-expanded="' + open + '" aria-label="' + e(label) + '">' +
          head + '<span class="sg" aria-hidden="true">' + (open ? '–' : '+') + '</span></button>' + reel + vote + '</li>';
      }).join('') + '</ul></div>';
    }).join('');
    var teamsLine = '<div class="teams" role="group" aria-label="Total 7s in the draw">' + pool.map(function (k) {
      return '<button type="button" data-team="' + e(k) + '" aria-expanded="' + (S.team === k) + '">' + e(team(k).year) + (/Timeless/i.test(team(k).label) ? '<small>Timeless</small>' : '') + '<i aria-hidden="true">+</i></button>';
    }).join('') + '</div>' + (S.team && pool.indexOf(S.team) >= 0 ? teamPanel(S.team) : '');
    return '<section class="addon" id="tpx-h2h" aria-labelledby="tpx-h2h-h"><div class="wrap"><div class="paper">' +
      '<div class="chips"><span class="chip-red">Add-on</span><span class="chip-ink">TPA X</span></div>' +
      '<h2 class="h2" id="tpx-h2h-h">T7<br>Head-to-Head</h2>' +
      '<p class="lede">The great Total 7s of the past face off. You pick the winners in our Instagram Stories.</p>' +
      seg('Award') + '<span class="eyebrow" style="color:#4a4d52">In the draw</span>' + teamsLine + body +
      '</div></div></section>';
  }
  function teamPanel(k) {
    var T = team(k); if (!T) return '';
    var what = (T.a === 'w' ? 'women’s ' : 'men’s ') + (/Timeless/i.test(T.label) ? 'Timeless 7' : 'Total 7') + ' of ' + T.year;
    return '<div class="teamx" role="region" aria-label="The ' + e(what) + '"><div class="teamx-in">' +
      (T.col ? '<figure class="teamx-fig" style="--bg:' + T.col.bg + '"><img src="' + img('t7c/' + k + '.webp') + '" alt="The ' + e(what) + '" width="' + T.col.w + '" height="' + T.col.h + '" decoding="async"></figure>'
        : '<div class="teamx-list"><b>' + e(T.year) + '</b><small>' + e(/Timeless/i.test(T.label) ? 'Timeless 7' : 'Total 7') + '</small>' + t7list(T) + '</div>') + '</div></div>';
  }
  function teamToggle(k, btn) {
    var box = btn.closest('.teams'), old = box.parentNode.querySelector('.teamx'), reduce = reduced();
    var mark = function () { Array.prototype.forEach.call(box.querySelectorAll('[data-team]'), function (b) { b.setAttribute('aria-expanded', String(b.getAttribute('data-team') === S.team)); }); };
    var glide = function (el, from, to, done) {
      if (reduce || !el.animate) { if (done) done(); return; }
      el.animate([{ height: from + 'px', opacity: from ? 1 : 0 }, { height: to + 'px', opacity: to ? 1 : 0 }], { duration: to ? 460 : 300, easing: EASE }).onfinish = function () { if (done) done(); };
    };
    if (S.team === k) { S.team = null; mark(); if (old) { glide(old, old.offsetHeight, 0, function () { old.remove(); }); old.style.height = '0px'; } return; }
    S.team = k; mark();
    var tmp = document.createElement('div'); tmp.innerHTML = teamPanel(k); var panel = tmp.firstChild, from = old ? old.offsetHeight : 0;
    if (old) old.replaceWith(panel); else box.after(panel);
    var to = panel.offsetHeight; glide(panel, from, to);
    var inner = panel.querySelector('.teamx-in'); if (inner && inner.animate && !reduce) inner.animate([{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 80, easing: EASE, fill: 'backwards' });
  }
  // the H2H Story, coded: a top-down field, the first team at the top (red rings), the second rotated at the bottom
  // (white rings). Not to scale: three rows per half (GK; LD CB RD; LW CF RW) so the players stay readable.
  // spots as % of each half (x, y); every name sits below its ring (goalkeepers: beside it).
  // The top team attacks downwards, so its right side is on the viewer's left; the bottom team attacks upwards.
  // Formation (user 2026-11-23, same as the IG face-off): wings back on their own 2 m line, centre forwards back from the
  // halfway line (a clear middle), drivers between wing and centre forward on a slight forward curve, room between GK and CB.
  var SPOTS = {
    // user 2026-11-24 (website only, no sticker in the middle): set on the bottom half, CF 20 %, drivers 35 %, CB 59 %; the top half mirrors it
    a: { GK: [50, 10], CB: [50, 41], RW: [14, 21], LW: [86, 21], RD: [25, 65], LD: [75, 65], CF: [50, 80] },
    b: { CF: [50, 20], LD: [25, 35], RD: [75, 35], CB: [50, 59], LW: [14, 68], RW: [86, 68], GK: [50, 89] }
  };
  function field(g, lab) {
    var A = team(g.a), B = team(g.b), done = g.state === 'result', aw = done && g.winner === g.a, bw = done && g.winner === g.b;
    var kind = function (T) { return /Timeless/i.test(T.label) ? 'Timeless 7' : 'Total 7'; };
    var node = function (T, pos, side) {
      var p = T.line.filter(function (x) { return x.pos === pos; })[0], at = SPOTS[side][pos]; if (!p || !at) return '';
      var ring = p.ph ? '<img src="' + img('t7p/' + p.id + '.webp') + '" alt="" decoding="async" width="60" height="60">' : '<span>' + e(initials(p.n)) + '</span>';
      var edge = at[0] <= 20 ? ' el' : at[0] >= 80 ? ' er' : '';   // near a sideline the name tag opens inwards
      // a shorter field (small screens) keeps rings and names inside their half
      var top = at[1] + '%';
      // (in ring sizes: the ring keeps 4px from the edge, a name below it needs half a ring + gap + one line)
      if (side === 'a' && at[1] <= 25) top = 'max(' + top + ',calc(var(--rr) / 2 + 4px))';   // GK and wings near the top edge: the ring stays inside
      else if (side === 'a' && at[1] >= 60) top = 'min(' + top + ',calc(100% - var(--rr) / 2 - 26px))';
      else if (side === 'b' && pos === 'GK') top = 'min(' + top + ',calc(100% - var(--rr) / 2 - 4px))';
      else if (side === 'b' && at[1] >= 65) top = 'min(' + top + ',calc(100% - var(--rr) / 2 - 26px))';   // the wings near the bottom edge: the name stays inside
      return '<button type="button" class="fnode' + (pos === 'GK' ? ' gk' : '') + edge + '" data-fp aria-expanded="false" aria-label="' + e(p.n + ', ' + pos) + '" style="left:' + at[0] + '%;top:' + top + '">' +
        '<span class="ring">' + ring + '<i>' + pos + '</i></span><b>' + e(p.l) + '</b><span class="full" aria-hidden="true">' + (p.nat ? flag(p.nat) : '') + '<span>' + e(p.n) + '</span></span></button>';
    };
    var half = function (T, side, win, lose, pc) {
      return '<div class="half ' + side + (win ? ' win' : '') + (lose ? ' lose' : '') + '"><span class="goal" aria-hidden="true"></span>' +
        SLOTS.map(function (pos) { return node(T, pos, side); }).join('') +
        (done ? '<span class="bigpc" aria-hidden="true">' + pc + '<small>%</small></span>' : '') + '</div>';
    };
    var head = function (T, side, win, pc) {
      return '<div class="fhead ' + side + (done ? (win ? ' win' : ' lose') : '') + '"><b>' + e(T.year) + '</b><span><strong>' + kind(T) + (win ? ' · <em>Winner</em>' : '') + '</strong></span>' +   // user 2026-11-20: just "Total 7" (the year is beside it, the game is in the card)
        '</div>';   // user 2026-11-24: no % in the header, only the one at the centre line
    };
    return '<div class="fld' + (done ? ' done' : '') + '" role="img" aria-label="' + e(A.year + ' ' + kind(A) + ' v ' + B.year + ' ' + kind(B) + (done ? ', ' + g.pa + ' to ' + g.pb + ' percent' : '')) + '">' +
      head(A, 'a', aw, g.pa) + '<div class="pitch">' + half(A, 'a', aw, bw, g.pa) + half(B, 'b', bw, aw, g.pb) + '</div>' + head(B, 'b', bw, g.pb) + '</div>';
  }
  function t7list(T) {
    var line = SLOTS.map(function (s) { return T.line.filter(function (p) { return p.pos === s; })[0]; }).filter(Boolean);
    return '<ol class="t7l">' + line.map(function (p) {
      return '<li' + (p.tp ? ' class="tp"' : '') + '><i>' + p.pos + '</i><span>' + e(p.n) + (p.tp ? '<em>Total Player</em>' : '') + '</span></li>';
    }).join('') + '</ol>';
  }
  function how() {
    return '<section class="sec" id="tpx-how" aria-labelledby="tpx-how-h"><div class="wrap stack" style="gap:22px"><h2 class="h2" id="tpx-how-h">How it works</h2><ol class="steps">' +
      '<li><b>1</b><div><h3>The season</h3><p>' + e(D.season) + '. Club and national team.</p></div></li>' +
      '<li><b>2</b><div><h3>The vote</h3><p>Seven players, one per position: 3 points each. One Total Player: 5 more.</p></div></li>' +
      '<li><b>3</b><div><h3>The verdict</h3><p>Most points wins. Revealed on ' + e(longDay(D.resultsDate)) + '.</p></div></li></ol></div></section>';
  }
  // Road to TPA X: one edition at a time, centred. "See the Total 7s" turns the whole rail into its Total 7 view
  // (women first; tabs and a swipe switch to men), and every year keeps that view and tab, so years compare side by side.
  function legacy() {
    var open = !!S.edOpen, n = (D.editions || []).length;
    var cards = (D.editions || []).map(function (ed, i) {
      var natOf = function (k) { var T = team(k), p = T && T.line.filter(function (x) { return x.tp; })[0]; return p ? p.nat : ''; };
      var pic = function (key, name, lab, k) {
        var nat = natOf(k);
        return '<figure class="ed-fig"><div class="ed-ph">' + photo('hof', key, true, name, '', false, (D.hofFy || {})[key]) + (nat ? '<span class="ed-flag">' + tip(flag(nat), NATS[nat] || nat) + '</span>' : '') + '</div>' +
          '<figcaption><small>' + e(name.split(' ')[0]) + '</small><strong>' + e(name.split(' ').slice(1).join(' ')) + '</strong></figcaption></figure>';   // first name over surname: the photos show which award
      };
      var pics = (ed.wImg ? pic(ed.wImg, ed.w, '', 'w-' + ed.year) : '') + pic(ed.mImg, ed.m, '', 'm-' + ed.year);
      var t7 = (ed.t7 || []).filter(function (k) { return team(k) && team(k).col; });
      var kind = t7.length && /Timeless/i.test(team(t7[0]).label) ? 'Timeless 7' : 'Total 7';
      var label = 'See the ' + kind + (t7.length > 1 ? 's' : '');
      var slides = t7.map(function (k) {
        var c = team(k).col, aw = k.charAt(0);
        var line = SLOTS.map(function (sl) { return team(k).line.filter(function (p) { return p.pos === sl; })[0]; }).filter(Boolean);
        return '<figure class="ed-slide" data-aw="' + aw + '"><div class="ed-frame" style="--bg:' + c.bg + '"><img src="' + img('t7c/' + k + '.webp') + '" alt="The ' + (aw === 'w' ? 'women’s' : 'men’s') + ' ' + kind + ' of ' + ed.year + '" loading="lazy" decoding="async" width="' + c.w + '" height="' + c.h + '"></div>' +
          '<ol class="ed-l7">' + line.map(function (p) { return '<li' + (p.tp ? ' class="tp"' : '') + '><i>' + p.pos + '</i><span>' + e(p.n) + '</span></li>'; }).join('') + '</ol></figure>';
      }).join('');
      var tabs = t7.map(function (k) { var aw = k.charAt(0); return '<button type="button" data-et="' + aw + '" aria-pressed="false">' + (aw === 'w' ? 'Women' : 'Men') + '</button>'; }).join('');
      return '<li class="ed' + (i === (S.edIx || 0) ? ' on' : '') + '" data-ix="' + i + '" data-ey="' + ed.year + '"><div class="ed-in">' +
        '<div class="ed-top"><b>' + ed.year + '</b><span>' + (i + 1) + ' / ' + n + '</span></div>' +
        '<div class="ed-body"><div class="ed-body-in"><div class="ed-pics' + (ed.wImg ? '' : ' one') + '">' + pics + '</div>' +
          '<ul>' + ed.facts.map(function (f) { return '<li><b>' + e(f[0]).replace(/(\d)(st|nd|rd|th)\b/g, '$1<sup>$2</sup>') + '</b><span>' + e(f[1]) + '</span></li>'; }).join('') + '</ul></div></div>' +
        (t7.length ? '<div class="ed-t7"><div class="ed-t7-in"><div class="ed-tabs" role="group" aria-label="' + kind + ' of ' + ed.year + '">' + tabs + '</div><div class="ed-track"><div class="ed-strip">' + slides + '</div></div></div></div>' +
          '<button type="button" class="ed-go" data-eo data-label="' + e(label) + '" aria-expanded="' + open + '">' + (open ? 'Close' : e(label)) + '</button>' : '') + '</div></li>';
    }).join('');
    return '<section class="sec" id="tpx-legacy" aria-labelledby="tpx-road-h"><div class="wrap stack"><div><h2 class="h2" id="tpx-road-h">Road to TPA X</h2><span style="font-size:14px;color:#9aa0a6">' + n + ' editions · ' + D.hof.length + ' winners</span></div></div>' +
      '<ul class="edrail' + (open ? ' open' : '') + '" aria-label="Editions">' + cards + '</ul></section>';
  }
  // the edition rail: the card nearest the centre is in focus, the others shrink towards it and fade
  function edRail() {
    var row = APP.querySelector('.edrail'); if (!row) return;
    var items = row.querySelectorAll('.ed'), reduce = reduced(), raf = 0;
    function update() {
      raf = 0; var mid = row.scrollLeft + row.clientWidth / 2, best = null, bd = 1e9, geo = [];
      Array.prototype.forEach.call(items, function (li) {
        var c = li.offsetLeft + li.offsetWidth / 2; geo.push([li, c, li.offsetWidth]);
        if (Math.abs(c - mid) < bd) { bd = Math.abs(c - mid); best = li; }
      });
      var flat = row.classList.contains('open') && row.clientWidth < 600;
      // the card's inner layer shrinks, never the card itself: the browser takes its snap point from the card, so it stays true
      geo.forEach(function (g) { depth(g[0].firstElementChild, g[1] - mid, g[2] + 12, 0.08, 0.45, row.clientWidth, reduce, flat); });
      Array.prototype.forEach.call(items, function (li) { if (li.classList.contains('on') !== (li === best)) li.classList.toggle('on', li === best); });
      if (best) { S.edIx = +best.getAttribute('data-ix'); if (row.classList.contains('open')) edWarm(row); }
    }
    // a horizontal swipe on the collage of the card in focus moves its strip while there is a next slide that way;
    // otherwise (last slide, a vertical move, the rail still moving) the rail takes the swipe, natively
    var g = null;
    row.addEventListener('touchstart', function (ev) {
      g = null;
      if (!row.classList.contains('open') || ev.touches.length !== 1) return;
      var strip = ev.target.closest ? ev.target.closest('.ed-strip') : null, li = strip && strip.closest('.ed');
      if (!strip || !li.classList.contains('on') || strip.children.length < 2) return;
      var t = ev.touches[0];
      g = { li: li, strip: strip, x: t.clientX, y: t.clientY, t: ev.timeStamp, w: strip.parentNode.clientWidth, i: strip._i || 0, on: false };
    }, { passive: true });
    var move = function (ev) {
      if (!g) return;
      var t = ev.touches[0], dx = t.clientX - g.x, dy = t.clientY - g.y, n = g.strip.children.length;
      if (!g.on) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
        var off = g.li.offsetLeft + g.li.offsetWidth / 2 - row.scrollLeft - row.clientWidth / 2, ni = g.i + (dx < 0 ? 1 : -1);
        if (Math.abs(dy) >= Math.abs(dx) || Math.abs(off) > 6 || ni < 0 || ni >= n) { g = null; return; }
        g.on = true; g.strip.classList.add('drag');
      }
      if (ev.cancelable) ev.preventDefault();
      var pos = -g.i * g.w + dx, min = -(n - 1) * g.w;
      if (pos > 0) pos /= 3; else if (pos < min) pos = min + (pos - min) / 3;   // a little give past the ends
      g.strip.style.transform = 'translateX(' + pos.toFixed(1) + 'px)';
      var k = Math.max(0, Math.min(n - 1, Math.round(-pos / g.w))), aw = g.strip.children[k].getAttribute('data-aw');
      if (aw !== edTab()) { S.edTab = aw; edPress(g.li, aw); }   // the tab moves as soon as the next slide has half the frame
    };
    // this listener can hold a swipe back (inside an open card), so it is only there while the cards are open:
    // on the closed rail every touch would otherwise wait for the page's script before the rail could move
    row._move = function (open) {
      if (open && !row._mv) { row.addEventListener('touchmove', move, { passive: false }); row._mv = true; }
      else if (!open && row._mv) { row.removeEventListener('touchmove', move, { passive: false }); row._mv = false; }
    };
    row._move(row.classList.contains('open') || !!S.edOpen);
    var end = function (ev) {
      if (!g || !g.on) { g = null; return; }
      var t = ev.changedTouches && ev.changedTouches[0], dx = t ? t.clientX - g.x : 0, v = dx / Math.max(1, ev.timeStamp - g.t);
      var k = g.i; if (Math.abs(dx) > g.w * 0.22 || Math.abs(v) > 0.35) k = g.i + (dx < 0 ? 1 : -1);
      k = Math.max(0, Math.min(g.strip.children.length - 1, k));
      var li = g.li; g.strip.classList.remove('drag'); g = null;
      S.edTab = li.querySelector('.ed-strip').children[k].getAttribute('data-aw');
      edSlide(li, k, true); edTabs(li);   // the other years follow
    };
    row.addEventListener('touchend', end); row.addEventListener('touchcancel', end);
    if (S.edOpen) fitRoad(row);
    edTabs(null, true);
    var target = items[S.edIx || 0]; if (target) row.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - row.clientWidth / 2;
    update();
    row.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  }
  function edTab() { return S.edTab || 'w'; }
  // the open edition cards fit the screen: the collage frame gives up height (its edge colour fills the sides)
  function fitRoad(row, li) {
    var A = availH(), ghost = document.createElement('ul'), H = 0, FH = 0, mine = 0;
    ghost.className = 'edrail open measure'; ghost.setAttribute('aria-hidden', 'true');
    ghost.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none;width:' + row.clientWidth + 'px';
    Array.prototype.forEach.call(row.querySelectorAll('.ed'), function (x) { var c = x.cloneNode(true); c.style.cssText = ''; c._src = x; ghost.appendChild(c); });
    row.parentNode.appendChild(ghost);
    Array.prototype.forEach.call(ghost.children, function (c) {
      var hh = c.offsetHeight, f = c.querySelector('.ed-frame'); H = Math.max(H, hh); if (f) FH = Math.max(FH, f.offsetHeight);
      if (c._src === li) mine = hh;
    });
    ghost.remove();
    var fh = H > A && FH ? Math.max(170, FH - (H - A)) : 0;
    if (fh) row.style.setProperty('--fh', fh + 'px'); else row.style.removeProperty('--fh');
    return fh ? mine - (FH - fh) : mine;
  }
  // every year shows the active tab (or its only Total 7); the card in focus slides, the rest switch quietly
  function edPress(li, aw) { Array.prototype.forEach.call(li.querySelectorAll('[data-et]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-et') === aw)); }); }
  function edSlide(li, i, animate) {
    var strip = li.querySelector('.ed-strip'); if (!strip) return;
    i = Math.max(0, Math.min(strip.children.length - 1, i)); strip._i = i;
    if (!animate) strip.classList.add('ni');
    strip.style.transform = i ? 'translateX(' + (-100 * i) + '%)' : '';
    if (!animate) { void strip.offsetWidth; strip.classList.remove('ni'); }
  }
  function edTabs(from, instant) {
    var row = APP.querySelector('.edrail'); if (!row) return;
    Array.prototype.forEach.call(row.querySelectorAll('.ed'), function (li) {
      var strip = li.querySelector('.ed-strip'); if (!strip) return;
      var k = 0; Array.prototype.forEach.call(strip.children, function (sl, j) { if (sl.getAttribute('data-aw') === edTab()) k = j; });
      edPress(li, strip.children[k].getAttribute('data-aw'));
      if (li === from) return;
      edSlide(li, k, !instant && !reduced() && li.classList.contains('on') && row.classList.contains('open'));
    });
  }
  // the open rail: the card in focus and its neighbours load their collages now
  function edWarm(row) {
    var items = row.querySelectorAll('.ed'), at = S.edIx || 0;
    for (var k = Math.max(0, at - 1); k <= Math.min(items.length - 1, at + 1); k++) {
      Array.prototype.forEach.call(items[k].querySelectorAll('.ed-strip img[loading="lazy"]'), function (im) { im.loading = 'eager'; });
    }
  }
  // open or close the Total 7 view for the whole rail; the page moves in step so the card in focus ends in view
  function edOpen(open, li) {
    var row = APP.querySelector('.edrail'); if (!row) return;
    li = li || row.querySelector('.ed.on'); if (!li) return;
    var h = open ? fitRoad(row, li) : 0;
    S.edOpen = open; row.classList.toggle('open', open); if (open) edWarm(row);
    if (row._move) row._move(open);
    var t0 = 0;
    requestAnimationFrame(function keep(t) {   // widths change on phones: the card in focus stays in the centre throughout
      if (!t0) t0 = t;
      row.scrollLeft = li.offsetLeft + li.offsetWidth / 2 - row.clientWidth / 2;
      if (t - t0 < 620) requestAnimationFrame(keep); else edTabs(null, true);
    });
    Array.prototype.forEach.call(row.querySelectorAll('[data-eo]'), function (b) { b.setAttribute('aria-expanded', String(open)); b.textContent = open ? 'Close' : b.getAttribute('data-label'); });
    if (open) edTabs(null, true);
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, topL = OPT.offset + navH + 10, botL = window.innerHeight - 10, r = li.getBoundingClientRect();
    var dy = open ? ((h > botL - topL || r.top < topL) ? r.top - topL : Math.max(0, r.top + h - botL)) : Math.min(0, r.top - topL);
    glideScroll(dy, 520);
  }
  function partners() {   // more from Total Waterpolo: the shop and live scoring
    var card = function (href, logo, logoAlt, lw, lh, line, cta) {
      return '<article class="mcard"><div class="mbody"><img class="mlogo" src="' + img('more/' + logo) + '" alt="' + e(logoAlt) + '" width="' + lw + '" height="' + lh + '" loading="lazy" decoding="async"><p>' + e(line) + '</p>' +
        '<a class="mcta" href="' + href + '" target="_blank" rel="noopener">' + e(cta) + '</a></div></article>';
    };
    return '<section class="sec more" id="tpx-more" aria-labelledby="tpx-more-h"><div class="wrap stack"><h2 class="h2" id="tpx-more-h">More from Total Waterpolo</h2><div class="mcards">' +
      card('https://wearwaterpolo.com/', 'ww-logo.svg', 'WearWaterpolo', 987, 249, 'Our web store: match suits, balls and custom team gear, designed by Total Waterpolo.', 'Go to the webshop') +
      card('https://total-waterpolo.com/livescore-operator-for-totalscore/#tw-apply', 'ts-logo.png', 'TotalScore24', 640, 80, 'Sit poolside, log every goal as it happens and put your league on the map. Paid per match, in any country.', 'Apply for live scoring') +
      '</div></div></section>';
  }
  function hof() {
    var years = [], by = {};
    D.hof.forEach(function (h) { if (!by[h.year]) { by[h.year] = []; years.push(h.year); } by[h.year].push(h); });
    var rail = years.map(function (y) {
      return '<li class="hy" data-year="' + y + '">' + by[y].map(function (h) {
        return h.banner ? '<div class="hb"><img class="banner" src="' + img('banners/' + h.img + '.webp') + '" alt="' + e(h.n + ', ' + h.year) + '" loading="lazy" decoding="async" width="132" height="396"></div>'
          : '<div class="hb hp">' + photo('hof', h.img, true, h.n) + '<b>' + h.year + '</b><strong>' + e(h.n) + '</strong></div>';
      }).join('') + '</li>';
    }).join('');
    return '<section class="sec hofsec" id="tpx-hof" aria-labelledby="tpx-hof-h"><div class="hofscroll"><ul class="hofrail" aria-label="Winners by year">' + rail + '</ul></div>' +
      '<div class="wrap hofhead"><h2 class="h2" id="tpx-hof-h">Hall of Fame</h2><span class="hofn">' + D.hof.length + ' legends · ' + years.length + ' editions</span></div></section>';
  }
  // the banners drop out of the section's top edge one after another, each once its picture is in (so a fast scroll never shows gaps)
  function hofReveal() {
    var sec = APP.querySelector('#tpx-hof'), items = APP.querySelectorAll('.hofrail .hb');
    if (!sec || !items.length) return;
    var eager = function () { Array.prototype.forEach.call(items, function (it) { var im = it.querySelector('img'); if (im) im.loading = 'eager'; }); };
    var go = function () {
      eager(); var k = 0, step = reduced() ? 0 : 110;
      (function next() {
        if (k >= items.length) return;
        var it = items[k++], im = it.querySelector('img'), done = false;
        var show = function () { if (done) return; done = true; it.classList.add('in'); if (step) setTimeout(next, step); else next(); };
        if (!im || (im.complete && im.naturalWidth)) show();
        else { im.addEventListener('load', show, { once: true }); im.addEventListener('error', show, { once: true }); setTimeout(show, 1500); }
      })();
    };
    if (!('IntersectionObserver' in window)) { go(); return; }
    var pre = new IntersectionObserver(function (es) { if (es.some(function (x) { return x.isIntersecting; })) { pre.disconnect(); eager(); } }, { rootMargin: '900px 0px' });
    var io = new IntersectionObserver(function (es) { if (es.some(function (x) { return x.isIntersecting; })) { io.disconnect(); go(); } }, { threshold: 0.15 });
    pre.observe(sec); io.observe(sec.querySelector('.hofscroll') || sec);
  }
  function follow(results) {
    return '<section class="follow" aria-labelledby="tpx-f-h"><div class="wrap stack" style="gap:14px"><h2 class="h2" id="tpx-f-h">' + (results ? 'Relive the vote' : 'Follow the votes') + '</h2>' +
      '<p>' + (results ? 'Every verdict and every Total 7, on Instagram.' : 'Every verdict, live on Instagram.') + '</p>' +
      '<a class="btn" href="' + e(D.ig || '#') + '" target="_blank" rel="noopener">Total Waterpolo on Instagram</a></div></section>';
  }
  // ---------------- results
  // ------------------------------------------------------------------ results: the opener
  // Two glass cards on a red neon floor line, lit hard from above, in rising steam and embers (WebGL behind them).
  // The neon strikes, the top lights come on, the cards rise and the points count up, once, when it first comes into view.
  var opStop = null;
  function opener() {
    var X = D.preview && D.resultsSample, demo = false, year = String(D.resultsDate || '').slice(0, 4);
    var edge = function (a) {
      return '<svg class="op-edge" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="op-eg-' + a + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".22" stop-color="#fff" stop-opacity=".35"/><stop offset=".7" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#ff4d6d" stop-opacity=".95"/></linearGradient></defs>' +
        '<polygon points="0.5,0.5 99.5,0.5 99.5,99.5 0.5,99.5" fill="none" stroke="url(#op-eg-' + a + ')" stroke-width="1.4" vector-effect="non-scaling-stroke"/></svg>';
    };
    var card = function (a) {
      var row = X && X[a] ? X[a] : (D.standings[a] || [])[0], aw = a === 'w' ? 'Women’s' : 'Men’s';
      if (X && X[a]) demo = true;
      if (!row) return '<article class="op-win op-none" aria-label="' + aw + ' Total Player: to come"><div class="op-slab"><div class="op-pic"><span class="ph" aria-hidden="true">?</span></div>' +
        '<div class="op-txt"><span class="op-fn">' + aw + ' award</span><strong class="op-ln">To come</strong></div>' + edge(a) + '</div><div class="op-neon"></div></article>';
      var p = P(row.p), club = row.club || p.club, cr = row.crest || p.crest;
      return '<article class="op-win" aria-label="' + e(aw + ' Total Player ' + year + ': ' + p.n + ', ' + row.pts + ' points') + '"><div class="op-slab">' +
        '<div class="op-pic">' + (p.photo ? '<img src="' + img('players/' + row.p + '.webp') + '" alt="" decoding="async" fetchpriority="high" style="object-position:50% ' + (p.fy || 40) + '%">' : '<span class="ph" aria-hidden="true">' + e(initials(p.n)) + '</span>') + '</div>' +
        '<div class="op-txt"><span class="op-ids">' + (p.nat ? '<img class="flag" src="' + img('flags/' + p.nat + '.webp') + '" alt="' + e(NATS[p.nat] || p.nat) + '" width="30" height="20">' : '') + crest(cr, club) + '</span>' +
          '<span class="op-fn">' + e(p.f) + '</span><strong class="op-ln">' + e(p.l) + '</strong><span class="op-pts"><b data-n="' + row.pts + '">' + row.pts + '</b><span>points</span></span></div>' + edge(a) +
        '</div><div class="op-neon"></div></article>';
    };
    var cards = card('w') + card('m');   // women first, as everywhere on the page
    return '<section class="op" id="tpx-winners" aria-labelledby="tpx-w-h"><canvas class="op-fx" aria-hidden="true"></canvas>' +
      '<header class="op-top"><img src="' + img('badge.png') + '" alt="TPA X" width="136" height="119"><div class="op-kick"><span>Total Player Award ' + e(year) + '</span>' + (demo ? '<span class="op-chip">Example</span>' : '') + '</div>' +
      '<h1 id="tpx-w-h">The 10th Total Players</h1></header><div class="op-pair">' + cards + '</div></section>';
  }
  var OP_FOG = [
    'precision mediump float;',
    'uniform vec2 uRes;uniform float uT,uNeon,uTop,uFloor,uCardTop,uCw;uniform vec2 uCx;',
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}',
    'float cone(vec2 uv,float cx){float k=clamp((1.-uv.y)/max(.05,1.-uCardTop),0.,1.4);float hw=mix(.018,uCw*1.08,min(k,1.));',
    '  float dx=abs(uv.x-cx)/hw;return (smoothstep(1.,.55,dx)*.75+smoothstep(.6,0.,dx)*.5)*smoothstep(1.3,.98,k);}',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/uRes;float asp=uRes.x/uRes.y;vec2 p=vec2(uv.x*asp,uv.y);float t=uT;',
    '  vec2 q=vec2(p.x*1.5,p.y*1.15-t*.075);',
    '  vec2 w=vec2(fbm(q*1.3+vec2(0.,t*.05)),fbm(q*1.3+vec2(5.2,-t*.04)));',
    '  float s=fbm(q*2.1+w*1.7);',
    '  float above=uv.y-uFloor;',
    '  float d=smoothstep(.36,.84,s)*(exp(-max(above,0.)*2.)*1.15+.16);',
    '  float c=cone(uv,uCx.x)+cone(uv,uCx.y);',
    '  float src=exp(-length((uv-vec2(uCx.x,1.02))*vec2(9.,5.)))+exp(-length((uv-vec2(uCx.y,1.02))*vec2(9.,5.)));',
    '  vec3 col=vec3(.92,.93,1.)*(c*(.09+d*2.3)+src*.75)*uTop;',
    '  float hx=.5+.5*(exp(-pow((uv.x-uCx.x)/.28,2.))+exp(-pow((uv.x-uCx.y)/.28,2.)));',
    '  float rise=above>0.?exp(-above*3.2):exp(above*9.);',
    '  col+=vec3(1.,.09,.2)*rise*(.10+d*2.1)*hx*uNeon;',
    '  col+=vec3(1.,.28,.4)*(exp(-abs(above)*140.)*.75+exp(-abs(above)*22.)*.28)*uNeon*(.55+.45*hx);',
    '  if(above<0.){float st=.6+.4*n(vec2(uv.x*60.,uv.y*3.+t*.2));col+=vec3(1.,.1,.22)*exp(above*6.)*.22*st*hx*uNeon;}',
    '  col+=vec3(.035,.014,.02)*d;',
    '  col*=smoothstep(1.25,.35,length((uv-vec2(.5,.45))*vec2(min(asp,1.4)*.85,1.)));',
    '  col=1.-exp(-col*1.35);',
    '  gl_FragColor=vec4(col,1.);',
    '}'].join('\n');
  var OP_PV = [
    'attribute vec4 aA;attribute vec2 aB;',
    'uniform float uT,uScale,uTop,uNeon,uFloor,uCardTop,uCw;uniform vec2 uCx;',
    'varying float vA,vSoft;varying vec3 vC;',
    'void main(){',
    '  float y=fract(aA.y+uT*aA.w);float x=aA.x+sin(uT*.33+aB.x*6.283)*.025*(.4+aA.z);',
    '  gl_Position=vec4(vec2(x,y)*2.-1.,0.,1.);',
    '  float z=aA.z;gl_PointSize=mix(1.6,15.,z*z*z)*uScale;',
    '  float fade=smoothstep(0.,.1,y)*smoothstep(1.,.72,y);',
    '  float k=clamp((1.-y)/max(.05,1.-uCardTop),0.,1.4);float hw=mix(.03,uCw*1.25,min(k,1.));',
    '  float c=(smoothstep(1.,.2,abs(x-uCx.x)/hw)+smoothstep(1.,.2,abs(x-uCx.y)/hw))*smoothstep(1.35,.95,k);',
    '  float near=exp(-max(y-uFloor,0.)*2.5);',
    '  vC=mix(vec3(1.,.17,.27),vec3(1.,.96,.92),aB.y);',
    '  float red=(.25+.75*near)*(.6+.4*sin(uT*1.7+aB.x*40.))*uNeon;',
    '  float dust=(.04+c*1.1)*uTop;',
    '  vA=fade*mix(red,dust,aB.y)*mix(1.,.28,z*z);vSoft=z;',
    '}'].join('\n');
  var OP_PF = [
    'precision mediump float;varying float vA,vSoft;varying vec3 vC;',
    'void main(){vec2 d=gl_PointCoord-.5;float r=length(d)*2.;if(r>1.)discard;',
    '  float core=exp(-r*r*5.);float bok=smoothstep(1.,.78,r)*.55+.45*exp(-r*r*2.5);',
    '  gl_FragColor=vec4(vC*vA*mix(core,bok,smoothstep(.45,.8,vSoft)),1.);}'].join('\n');
  function openerFx() {
    if (opStop) { opStop(); opStop = null; }
    var stage = APP.querySelector('.op'); if (!stage) return;
    var cv = stage.querySelector('.op-fx'), reduce = reduced(), gl = null;
    try { gl = cv.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: 'high-performance' }); } catch (er) { gl = null; }
    var fog, pts, quad, pbuf, N = window.innerWidth < 600 ? 110 : 190, U = {};
    function prog(vs, fs) {
      var pr = gl.createProgram();
      [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]].forEach(function (x) {
        var sh = gl.createShader(x[0]); gl.shaderSource(sh, x[1]); gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
        gl.attachShader(pr, sh);
      });
      gl.linkProgram(pr); return pr;
    }
    if (gl) {
      try {
        fog = prog('attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}', OP_FOG); pts = prog(OP_PV, OP_PF);
        quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        var data = new Float32Array(N * 6), rnd = function (a, b) { return a + Math.random() * (b - a); };
        for (var i = 0; i < N; i++) {
          var white = Math.random() < .38 ? 1 : 0;
          data.set([rnd(0, 1), rnd(0, 1), Math.pow(Math.random(), 1.6), rnd(.008, .03) * (white ? .6 : 1), Math.random(), white], i * 6);
        }
        pbuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, pbuf); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        ['uRes', 'uT', 'uNeon', 'uTop', 'uFloor', 'uCardTop', 'uCw', 'uCx'].forEach(function (k) { U['f' + k] = gl.getUniformLocation(fog, k); });
        ['uT', 'uScale', 'uTop', 'uNeon', 'uFloor', 'uCardTop', 'uCw', 'uCx'].forEach(function (k) { U['p' + k] = gl.getUniformLocation(pts, k); });
        U.p = gl.getAttribLocation(fog, 'p'); U.aA = gl.getAttribLocation(pts, 'aA'); U.aB = gl.getAttribLocation(pts, 'aB');
      } catch (err) { gl = null; }
    }
    if (!gl) stage.classList.add('op-flat');   // no WebGL: a still gradient of the same light
    // where the light falls: the card centres, the top of the glass and the neon line, as fractions of the stage (y counts up)
    var geo = { cx: [.3, .7], top: .55, floor: .2, cw: .2 }, SCALE = .6;
    // the opener fills the first screen below the site header and the jump bar, and the pair is scaled so all of it shows:
    // the page's height is linear in the card width, so two measurements give the width that fits exactly
    var fitKey = '';
    function fit() {
      var vh = window.innerHeight, key = window.innerWidth + 'x' + vh; if (key === fitKey) return false; fitKey = key;
      var top = stage.getBoundingClientRect().top + window.scrollY, avail = Math.max(440, Math.round(vh - Math.min(top, vh * 0.35)));
      stage.style.setProperty('--opv', avail + 'px'); stage.style.removeProperty('--cw'); stage.classList.toggle('op-short', avail < 600);   // short phones: a smaller title, bigger cards
      var pair = stage.querySelector('.op-pair'), pb = parseFloat(getComputedStyle(stage).paddingBottom) || 0;
      var need = function () { return pair.getBoundingClientRect().bottom - stage.getBoundingClientRect().top + pb; };
      var phone = window.innerWidth < 900, max = phone ? Math.min(300, window.innerWidth * 0.43) : 340, min = phone ? 112 : 180;
      var w1 = stage.querySelector('.op-win').offsetWidth, h1 = need();
      stage.style.setProperty('--cw', (w1 - 40) + 'px'); var h2 = need();
      var w = h1 > h2 ? w1 + (avail - h1) * 40 / (h1 - h2) : w1;
      stage.style.setProperty('--cw', Math.floor(Math.max(min, Math.min(max, w))) + 'px');
      return true;
    }
    function measure() {
      if (!stage.isConnected) return;
      fit();
      var r = stage.getBoundingClientRect(), wins = stage.querySelectorAll('.op-win'), neon = stage.querySelector('.op-neon'), slab = stage.querySelector('.op-slab');
      if (!r.width || !slab || !neon) return;
      geo.cx = Array.prototype.map.call(wins, function (w) { var b = w.getBoundingClientRect(); return (b.left + b.width / 2 - r.left) / r.width; });
      var sb = slab.getBoundingClientRect(), nb = neon.getBoundingClientRect();
      geo.top = 1 - (sb.top - r.top) / r.height; geo.floor = 1 - (nb.top + 2 - r.top) / r.height; geo.cw = sb.width / 2 / r.width;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.max(2, Math.round(r.width * dpr * SCALE)); cv.height = Math.max(2, Math.round(r.height * dpr * SCALE));
      if (!raf && gl) draw(performance.now());   // a resize clears the canvas: paint the current frame again
    }
    var t0 = 0, played = false, on = false, raf = 0, nv = -1, tl = -1;
    function neonAt(s) { if (s < .15) return 0; if (s < .22) return .9; if (s < .3) return .1; if (s < .38) return 1; if (s < .43) return .3; return Math.min(1, .8 + (s - .43) * 2); }   // a tube striking
    function topAt(s) { if (s < .6) return 0; var k = Math.min(1, (s - .6) / .5); return k < .2 ? k * 3 : .6 + .4 * Math.min(1, (k - .2) / .8); }
    function countUp() {
      Array.prototype.forEach.call(stage.querySelectorAll('.op-pts b'), function (b, i) {
        var n = +b.getAttribute('data-n'), start = performance.now() + 1750 + i * 150;
        if (reduce) { b.textContent = n; return; }
        b.textContent = '0';
        (function step(now) {
          if (!b.isConnected) return;
          var k = Math.max(0, Math.min(1, (now - start) / 1300)), ez = 1 - Math.pow(1 - k, 4);
          b.textContent = Math.round(n * ez); if (k < 1) requestAnimationFrame(step);
        })(performance.now());
      });
    }
    function play() { played = true; t0 = performance.now(); stage.classList.add('go'); countUp(); }
    function draw(now) {
      var s = played ? (now - t0) / 1000 : 0, ln = reduce ? 1 : neonAt(s), lt = reduce ? 1 : topAt(s);
      if (ln.toFixed(2) !== nv) { nv = ln.toFixed(2); stage.style.setProperty('--nv', nv); }   // only while the lights come on
      if (lt.toFixed(2) !== tl) { tl = lt.toFixed(2); stage.style.setProperty('--tl', tl); }
      if (!gl) return;
      var T = reduce ? 4 : now / 1000;
      gl.viewport(0, 0, cv.width, cv.height);
      gl.disable(gl.BLEND); gl.useProgram(fog);
      gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(U.p); gl.vertexAttribPointer(U.p, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(U.fuRes, cv.width, cv.height); gl.uniform1f(U.fuT, T); gl.uniform1f(U.fuNeon, ln); gl.uniform1f(U.fuTop, lt);
      gl.uniform1f(U.fuFloor, geo.floor); gl.uniform1f(U.fuCardTop, geo.top); gl.uniform1f(U.fuCw, geo.cw); gl.uniform2f(U.fuCx, geo.cx[0], geo.cx[1]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.disableVertexAttribArray(U.p);
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.useProgram(pts);
      gl.bindBuffer(gl.ARRAY_BUFFER, pbuf);
      gl.enableVertexAttribArray(U.aA); gl.vertexAttribPointer(U.aA, 4, gl.FLOAT, false, 24, 0);
      gl.enableVertexAttribArray(U.aB); gl.vertexAttribPointer(U.aB, 2, gl.FLOAT, false, 24, 16);
      gl.uniform1f(U.puT, T); gl.uniform1f(U.puScale, cv.width / Math.max(1, stage.clientWidth)); gl.uniform1f(U.puTop, lt); gl.uniform1f(U.puNeon, ln);
      gl.uniform1f(U.puFloor, geo.floor); gl.uniform1f(U.puCardTop, geo.top); gl.uniform1f(U.puCw, geo.cw); gl.uniform2f(U.puCx, geo.cx[0], geo.cx[1]);
      gl.drawArrays(gl.POINTS, 0, N); gl.disableVertexAttribArray(U.aA); gl.disableVertexAttribArray(U.aB);
    }
    function frame(now) {
      raf = 0; if (!stage.isConnected) { stop(); return; }
      draw(now);
      if (on && !reduce) raf = requestAnimationFrame(frame);   // runs only while the opener is on screen
    }
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (en) {
      on = en[en.length - 1].isIntersecting;
      if (on && !played) play();
      if (on && !raf) raf = requestAnimationFrame(frame);
    }, { threshold: 0.12 }) : null;
    var ro = 'ResizeObserver' in window ? new ResizeObserver(function () { measure(); }) : null;
    function stop() {
      if (io) io.disconnect(); if (ro) ro.disconnect(); cancelAnimationFrame(raf); raf = 0;
      var lc = gl && gl.getExtension('WEBGL_lose_context'); if (lc) lc.loseContext(); gl = null;
    }
    opStop = stop;
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitKey = ''; measure(); });   // the names' font changes the heights
    if (io) io.observe(stage); else { on = true; play(); raf = requestAnimationFrame(frame); }
    if (ro) ro.observe(stage);
  }
  function total7s() {
    var a = S.award, t = D.total7[a] || {}, lead = (D.total7Leader || {})[a];
    var body = Object.keys(t).length ? formation(t, lead, [a === 'w' ? 'Women’s' : 'Men’s', 'Total 7'], ['Season', D.season], 'Total Player') : '<div class="empty">The ' + awardWord(a) + ' Total 7 goes up on ' + e(longDay(D.resultsDate)) + '.</div>';
    return '<section class="sec" id="tpx-total7" aria-labelledby="tpx-t7-h"><div class="wrap stack"><h2 class="h2" id="tpx-t7-h">The Total 7s</h2>' + seg('Award', '’s award') +
      '<div style="max-width:560px">' + body + '</div><span style="font-size:13px;color:#9aa0a6">Season ' + e(D.season) + '</span></div></section>';
  }
  function standings() {
    var a = S.award, rows = D.standings[a] || [];
    return '<section class="sec" id="tpx-standings" aria-labelledby="tpx-s-h"><div class="wrap stack"><h2 class="h2" id="tpx-s-h">Standings</h2>' + seg('Award', '’s award') +
      (rows.length ? '<ol class="stand">' + rows.map(function (r) {
        var p = P(r.p);
        return '<li><span class="rk">' + r.rank + '</span>' + photo('players', r.p, p.photo, p.n, '', false, p.fy, 's') + '<span><strong>' + flag(p.nat) + e(p.n) + '</strong><em>' + e(p.club) + ' · ' + r.votes + ' vote' + (r.votes === 1 ? '' : 's') + (r.tp ? ' · ' + r.tp + '× Total Player' : '') + '</em></span><span class="pt">' + r.pts + '</span></li>';
      }).join('') + '</ol>' : '<div class="empty">No ' + awardWord(a) + ' standings yet.</div>') + '</div></section>';
  }

  // ------------------------------------------------------------------ render + events
  function render() {
    var res = phase() === 'results';
    var html = nav() +
      (res ? opener() + total7s() + standings() + votesSection() + how() + legacy() + h2h() + partners() + hof() + follow(true)
           : heroVote() + how() + legacy() + h2h() + partners() + hof() + follow(false)) +
      (D.preview ? '<div class="notice">Preview · data from the award sheet on ' + e(day(D.updated)) + '. The ' + live().length + ' votes entered so far are shown as posted.</div>' : '');   // at the foot, so the fold matches the live page
    APP.innerHTML = html;
    startVideo();
    heroRow();
    alignHero(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(alignHero);
    edRail();
    fitOpenGame();
    openerFx();
    cachedImgs(APP);
    hofReveal();
  }
  // images the browser already has (a redraw, a revisit) show at once; the rest fade in on load (the 'ok' class, set by the load listener)
  function cachedImgs(box) { Array.prototype.forEach.call(box.querySelectorAll('img:not(.ok)'), function (im) { if (im.complete && im.naturalWidth) im.classList.add('ok'); }); }
  function rerender(keepY) { var y = window.scrollY; render(); if (keepY) window.scrollTo(0, y); }
  // phones: move the portrait trophy loop so its crest (40 % down the frame) sits midway between the tagline and the vote tabs
  function alignHero() {
    var media = APP.querySelector('.hero-media'), tg = APP.querySelector('.tagline'), tabs = APP.querySelector('.hero .vtabs');
    if (!media || !tg || !tabs) return;
    if (window.innerWidth >= 900) { media.style.removeProperty('--vy'); return; }
    var top = media.getBoundingClientRect().top, mid = (tg.getBoundingClientRect().bottom + tabs.getBoundingClientRect().top) / 2 - top;
    media.style.setProperty('--vy', Math.round(mid - 0.40 * media.offsetHeight) + 'px');
  }
  function startVideo() {
    var v = APP.querySelector('.hero-media video'); if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var net = navigator.connection; if (net && (net.saveData || /2g|3g/.test(net.effectiveType || ''))) return;   // data saver or a slow line: the still stays
    // the still is only a stand-in until the loop plays; hide it then, so the two never show on top of each other
    var still = APP.querySelector('.hero-media img');
    v.style.opacity = '0';
    v.addEventListener('playing', function () { v.style.opacity = ''; if (still) still.style.visibility = 'hidden'; }, { once: true });
    var play = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    var go = function () {
      v.src = v.getAttribute('data-src'); play();
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) play(); else v.pause(); }).observe(v);   // no decoding while it is off screen
    };
    if (document.readyState === 'complete') setTimeout(go, 300); else window.addEventListener('load', function () { setTimeout(go, 300); }, { once: true });
  }
  function go(id) {
    var el = root.getElementById ? root.getElementById('tpx-' + id) : APP.querySelector('#tpx-' + id); if (!el) return;
    var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - OPT.offset - navH + 1, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return; var big = APP.querySelector('.fnode.big');
    if (big) { big.classList.remove('big'); big.setAttribute('aria-expanded', 'false'); big.focus(); }
  });
  APP.addEventListener('load', function (ev) { var t = ev.target; if (t && t.tagName === 'IMG') { t.classList.add('ok'); if (t.parentNode && t.parentNode.classList) t.parentNode.classList.add('lo'); } }, true);
  APP.addEventListener('click', function (ev) {
    // H2H field: a tapped ring grows and shows the full name; a second tap, another ring or a tap elsewhere closes it
    var fp = ev.target.closest('[data-fp]'), big = APP.querySelector('.fnode.big');
    if (big && big !== fp) { big.classList.remove('big'); big.setAttribute('aria-expanded', 'false'); }
    if (fp) { var on = !fp.classList.contains('big'); fp.classList.toggle('big', on); fp.setAttribute('aria-expanded', String(on)); return; }
    var tp = ev.target.closest('.tip');
    if (tp) {   // phones: a tap shows the name for a moment
      Array.prototype.forEach.call(APP.querySelectorAll('.tip.on'), function (x) { if (x !== tp) x.classList.remove('on'); });
      tp.classList.toggle('on'); clearTimeout(tp._t); tp._t = setTimeout(function () { tp.classList.remove('on'); }, 2200);
      return;
    }
    // an open card closes with a tap anywhere on it (its ballot switch, tabs and links still work); a card at the side comes to the centre
    var ox = S.hx && ev.target.closest('.hc.x');
    if (ox && !ev.target.closest('[data-bt],a')) {
      if (ox.classList.contains('on')) expandCard(ox, false);
      else { centreCard(ox); setTimeout(function () { showCard(ox, true); }, reduced() ? 0 : 60); }
      return;
    }
    var oe = S.edOpen && ev.target.closest('.edrail.open .ed.on');
    if (oe && !ev.target.closest('[data-et],a')) { edOpen(false, oe); return; }
    var t = ev.target.closest('[data-award],[data-game],[data-go],[data-hc-go],[data-x],[data-bt],[data-vf],[data-et],[data-eo],[data-ey],[data-team]'); if (!t) return;
    if (t.hasAttribute('data-team')) { teamToggle(t.getAttribute('data-team'), t); return; }
    if (t.hasAttribute('data-et')) { S.edTab = t.getAttribute('data-et'); edTabs(null); return; }
    if (t.hasAttribute('data-eo') || t.hasAttribute('data-ey')) {   // the button opens or closes; a card off to the side comes to the centre
      var el = t.closest('.ed'), rail = el && el.parentNode;
      if (el && !el.classList.contains('on')) rail.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - rail.clientWidth / 2, behavior: reduced() ? 'auto' : 'smooth' });
      if (t.hasAttribute('data-eo')) edOpen(!S.edOpen, el);
      return;
    }
    if (t.hasAttribute('data-vf')) { setFilter(t.getAttribute('data-vf')); return; }
    if (t.hasAttribute('data-hc-go')) {   // a card: bring it to the centre and into view
      var li = t.closest('.hc'); if (!li) return;
      if (li.classList.contains('on') && li.querySelector('[data-x]')) { expandCard(li, !S.hx); return; }
      centreCard(li);
      setTimeout(function () { showCard(li, true); }, reduced() ? 0 : 60);
      return;
    }
    if (t.hasAttribute('data-x')) { var lx = t.closest('.hc'); if (lx) expandCard(lx, !S.hx); return; }
    if (t.hasAttribute('data-bt')) { var lb = t.closest('.hc'); if (lb) setBallot(lb, t.getAttribute('data-bt')); return; }
    if (t.hasAttribute('data-go')) { ev.preventDefault(); go(t.getAttribute('data-go')); return; }
    if (t.hasAttribute('data-award')) { S.award = t.getAttribute('data-award'); S.oa = true; S.team = null; rerender(true); return; }
    if (t.hasAttribute('data-game')) { gameToggle(t.getAttribute('data-game'), t); return; }
  });
  // jump bar highlights the section in view
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false; var links = APP.querySelectorAll('.nav-links a'); var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, cur = null;
      Array.prototype.forEach.call(links, function (a) { var el = APP.querySelector('#tpx-' + a.getAttribute('data-go')); if (el && el.getBoundingClientRect().top - OPT.offset - navH < 120) cur = a; });
      Array.prototype.forEach.call(links, function (a, i) { a.setAttribute('aria-current', String(cur ? a === cur : i === 0)); });
    });
  }, { passive: true });

  // ------------------------------------------------------------------ data: last copy first (instant for returning visitors), then fresh
  function start(data) {
    D = data;
    // game state from the posting schedule: live while its VOTE NOW story is up (liveFrom..liveTo), closed once it ends without a result
    (function () { var n = Date.now(); ['w', 'm'].forEach(function (a) { (D.h2h[a] || []).forEach(function (g) {
      if (!g.liveFrom || g.state === 'result' || g.state === 'draw') return;
      var f = Date.parse(g.liveFrom), t = Date.parse(g.liveTo);
      if (n >= f && n < t) g.state = 'live'; else if (n >= t) g.state = 'closed'; }); }); })();
    // the H2H toggle opens on the live game, else the next upcoming one: the Women/Men tab follows it (autoGame then expands the game)
    var hb = null; ['w', 'm'].forEach(function (a) { (D.h2h[a] || []).forEach(function (g) {
      if (!(g.a && g.b && team(g.a) && team(g.b)) || g.state === 'result' || g.state === 'draw' || g.state === 'closed') return;
      var k = (g.state === 'live' ? '0' : '1') + (g.date || '9999'); if (!hb || k < hb.k) hb = { k: k, a: a }; }); });
    if (!S.award) S.award = hb ? hb.a : live('w').length || !live('m').length ? 'w' : 'm';   // else women first, unless they have no votes yet
    render();
  }
  var KEY = 'tpax-x-data';
  try { var cached = JSON.parse(localStorage.getItem(KEY) || 'null'); if (cached && cached.v === 1) start(cached); } catch (er) {}
  fetch(/^(blob|data):/.test(OPT.data) ? OPT.data : OPT.data + (OPT.data.indexOf('?') < 0 ? '?' : '&') + 't=' + Math.floor(Date.now() / 60000), { cache: 'no-store' })   // a page that hands over its own data (a blob) gets no cache-buster
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (er) {} if (!D || d.updated !== D.updated || OPT.phase) start(d); })
    .catch(function () { if (!D) APP.innerHTML = '<div class="wrap" style="padding:60px 16px;color:#9aa0a6">The TPA X page could not load. Please refresh.</div>'; });
})();
