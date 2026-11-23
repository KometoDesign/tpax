/* TPA X landing page embed · Total Waterpolo
   Embed once:  <div id="tpax-x"></div><script src="https://kometodesign.github.io/tpax/tpax.js" defer></script>
   data-offset = height of a sticky site header in px, if the site has one (total-waterpolo.com does not: leave it out).
   Everything is drawn inside a shadow root, so the theme's CSS can't touch it and ours can't leak out. */
(function () {
'use strict';
var CSS = ':host{all:initial;display:block}*,*::before,*::after{box-sizing:border-box}.tpx{--ink:#0B0B0C;--panel:#141518;--panel2:#1b1c20;--line:#2c2e33;--line2:#3a3d42;--muted:#9aa0a6;--soft:#c9ccd1;--dim:#6b6f76;--red:#E11937;--white:#fff;--paper:#fff;--paperline:#d9dadc;--papermuted:#4a4d52;--cond:\'Barlow Condensed\',\'Arial Narrow\',sans-serif;--sans:\'Barlow\',system-ui,-apple-system,\'Segoe UI\',sans-serif;background:var(--ink);color:var(--white);font:400 16px/1.45 var(--sans);-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;overflow:clip}.tpx img{display:block;max-width:100%}.tpx a{color:inherit}.tpx .btn{color:#fff}.tpx button{font:inherit;color:inherit}.tpx :focus-visible{outline:3px solid var(--red);outline-offset:2px}.wrap{width:100%;max-width:1120px;margin:0 auto;padding:0 16px}.cond{font-family:var(--cond)}.it{font-style:italic}.up{text-transform:uppercase}.h2{margin:0;font:800 40px/1 var(--cond);text-transform:uppercase;letter-spacing:.005em}.lede{margin:0;font-size:15px;line-height:1.5;color:var(--soft);max-width:62ch}.eyebrow{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}.sec{padding:40px 0;border-top:1px solid var(--line)}.stack{display:flex;flex-direction:column;gap:16px}.chips{display:flex;font:700 15px/1 var(--cond);letter-spacing:.06em;text-transform:uppercase}.chips span{padding:7px 10px}.chip-red{background:var(--red);color:#fff}.chip-white{background:#fff;color:var(--ink)}.chip-ink{background:var(--ink);color:#fff}.btn{display:flex;align-items:center;justify-content:center;min-height:52px;padding:0 20px;border:0;background:var(--red);color:#fff;text-decoration:none;font:700 20px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;cursor:pointer}.btn-line{background:transparent;border:1px solid #fff;font-size:17px;min-height:48px}.btn-ink{background:var(--ink)}.notice{background:#fff3a6;color:#2a2600;font:600 13px/1.4 var(--sans);padding:8px 16px;text-align:center}.photo{position:relative;overflow:hidden;background:#1d1f23}.photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.12) brightness(.96)}.photo .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:800 40px/1 var(--cond);color:#3d4046;background:repeating-linear-gradient(135deg,#1a1b1f 0 10px,#1f2125 10px 20px)}.cut{clip-path:polygon(0 0,100% 0,100% 87%,0 100%)}.flag{width:30px;height:20px;object-fit:cover;outline:1px solid rgba(255,255,255,.85);flex:0 0 auto}.crest{width:22px;height:22px;object-fit:contain;flex:0 0 auto}.nav{position:sticky;z-index:20;top:var(--tpx-offset,0px);background:rgba(11,11,12,.94);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border-bottom:1px solid var(--line)}.nav .wrap{display:flex;align-items:center;gap:16px}.nav-logo{flex:0 0 auto;display:flex;align-items:center;height:48px;padding-right:16px;border-right:1px solid var(--line)}.nav-logo img{display:block;height:34px;width:auto}.nav-links{display:flex;gap:22px;min-width:0;overflow-x:auto;scrollbar-width:none}.nav-links::-webkit-scrollbar{display:none}.nav a{display:flex;align-items:center;height:48px;white-space:nowrap;text-decoration:none;color:var(--muted);font:700 17px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;border-bottom:3px solid transparent}.nav a[aria-current="true"]{color:#fff;border-bottom-color:var(--red)}.hero{position:relative;isolation:isolate;overflow:hidden}.hero-media{position:absolute;inset:0;z-index:-1;background:#050506}.hero-media img,.hero-media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%;opacity:.88}.hero-media::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,11,12,.2) 0%,rgba(11,11,12,0) 22%,rgba(11,11,12,.18) 44%,rgba(11,11,12,.82) 74%,#0B0B0C 100%)}.hero-top{display:flex;flex-direction:column;gap:12px;padding-top:18px;min-height:max(220px,calc(100vh - 372px));min-height:max(220px,calc(100svh - 372px))}.tagline{margin:auto 0 0;max-width:12ch;font:italic 800 46px/.9 var(--cond);text-transform:uppercase;letter-spacing:-.005em;text-wrap:balance;text-shadow:0 2px 28px rgba(0,0,0,.6)}.glass{border-radius:6px}.glass::before{border-radius:inherit}.vwrap{margin-top:16px}.vtabs{display:flex;justify-content:center;gap:6px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}.tpx .vtabs button{display:flex;align-items:center;gap:7px;height:34px;padding:0 14px;border:1px solid rgba(255,255,255,.3);border-radius:3px;background:rgba(11,11,12,.42);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;font:700 15px/1 var(--cond);letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s,border-color .25s}.vtabs button span{font:600 11px/1 var(--sans);letter-spacing:0;opacity:.7}.tpx .vtabs button[aria-pressed="true"]{background:#fff;color:var(--ink);border-color:#fff}.hrow{--cw:208px;position:relative;display:flex;align-items:flex-start;gap:10px;margin:12px 0 0;padding:6px calc(50% - var(--cw) / 2) 22px;list-style:none;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain;transition:padding .5s cubic-bezier(.22,.8,.24,1)}.hrow.open{padding-inline:calc(50% - var(--xw,340px) / 2)}.hrow.open .hc-more{grid-template-rows:1fr}.hrow.open .hc-more-in{padding:0 10px 10px;opacity:1;visibility:visible;transition:opacity .28s .08s,visibility 0s,padding .34s cubic-bezier(.2,.7,.2,1)}.hrow.open .hc:not(.on) .hcard{border-color:rgba(255,255,255,.2)}.hrow::-webkit-scrollbar{display:none}.hc{flex:0 0 var(--cw);scroll-snap-align:center;transition:flex-basis .5s cubic-bezier(.22,.8,.24,1)}.hc.x{flex-basis:var(--xw,340px)}.hcard{display:flex;flex-direction:column;transform-origin:50% 0;transition:border-color .3s}.hc.on .hcard{border-color:rgba(255,255,255,.34)}.tpx .hc-hit{display:flex;flex-direction:column;width:100%;padding:6px 6px 0;border:0;background:transparent;color:#fff;text-align:left;cursor:pointer;border-radius:6px 6px 0 0}.hc-frame{position:relative;display:block;width:100%}.hc-ph{height:calc((var(--cw) - 12px) * 5 / 6);border-radius:3px;transition:height .5s cubic-bezier(.22,.8,.24,1)}.hc.x .hc-ph{height:var(--bh,150px)}.hc.x .hc-frame{overflow:hidden;border-radius:3px}.hc-awd{position:absolute;left:6px;top:6px;padding:4px 6px 3px;background:rgba(11,11,12,.78);border-radius:2px;font:700 12px/1 var(--cond);letter-spacing:.06em;text-transform:uppercase}.hc-id{display:flex;flex-direction:column;gap:2px;width:100%;box-sizing:border-box;padding:10px 4px 7px}.hc-id .fn{font:600 14px/1.1 var(--sans);color:#d5d8dc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hc-id small{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#ff4d68}.hc-id strong{font:800 28px/.92 var(--cond);text-transform:uppercase;overflow-wrap:anywhere}.hc-more{display:grid;grid-template-rows:0fr;transition:grid-template-rows .34s cubic-bezier(.2,.7,.2,1)}.hc.on .hc-more{grid-template-rows:1fr}.hc-more-in{min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px;padding:0 10px;opacity:0;visibility:hidden;transition:opacity .2s,visibility 0s linear .34s,padding .34s cubic-bezier(.2,.7,.2,1)}.hc.on .hc-more-in{padding:0 10px 10px;opacity:1;visibility:visible;transition:opacity .28s .08s,visibility 0s,padding .34s cubic-bezier(.2,.7,.2,1)}.hc-roles{display:flex;flex-direction:column;gap:6px;padding-top:3px}.hc-roles em{display:flex;align-items:flex-start;gap:7px;font-style:normal;font-size:13px;line-height:1.1;color:#d5d8dc}.hc-roles em .flag,.hc-roles em .crest{flex:0 0 21px;width:21px;height:14px;margin-top:-.5px}.hc-roles em .crest{height:18px;margin-top:-2.5px}.hc-tp{display:grid;grid-template-columns:38px minmax(0,1fr);gap:8px;align-items:center;padding-top:10px;border-top:1px solid rgba(255,255,255,.16)}.hc-tp .photo{width:38px;height:38px;border-radius:2px;box-shadow:inset 0 -2px 0 var(--red)}.hc-tp small{display:block;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#d5d8dc}.hc-tp b{display:block;font:700 18px/1.05 var(--cond);text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tpx .glass-btn{min-height:42px;border:1px solid rgba(255,255,255,.45);border-radius:3px;background:rgba(225,25,55,.88);color:#fff;font:700 16px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;cursor:pointer}.hc-empty{padding:16px}.hc-tpw{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s cubic-bezier(.22,.8,.24,1),opacity .25s,margin-top .45s cubic-bezier(.22,.8,.24,1)}.hc-tpw > div{min-height:0;overflow:hidden}.hc.x .hc-tpw{grid-template-rows:0fr;opacity:0;margin-top:-10px}.hc-t7{display:grid;grid-template-rows:0fr;margin-top:-10px;transition:grid-template-rows .5s cubic-bezier(.22,.8,.24,1),margin-top .5s cubic-bezier(.22,.8,.24,1)}.hc-t7-in{min-height:0;overflow:hidden;opacity:0;transition:opacity .2s}.hc.x .hc-t7{grid-template-rows:1fr;margin-top:0}.hc.x .hc-t7-in{opacity:1;transition:opacity .4s .15s}.hc.xd .hc-t7-in,.hc.xd .hc-more-in{overflow:visible}.hc.x .hcard{border-color:rgba(255,255,255,.4)}.hc-t7 .form{max-width:var(--gw,360px);margin-inline:auto;transition:max-width .5s cubic-bezier(.22,.8,.24,1)}.hc-t7 .tile{transition:opacity .3s,transform .5s cubic-bezier(.22,.8,.24,1)}.hc:not(.x) .hc-t7 .tile{opacity:0}.hc-t7 .tile:not(.void){background:#26282d}.hc-t7 .tile:not(.void):not(.in){transform:scale(.95);box-shadow:none}.hc-t7 .tile > *,.hc-t7 .tile.tp::before,.hc-t7 .tile.tp::after{transition:opacity .4s cubic-bezier(.22,.8,.24,1)}.hc-t7 .tile:not(.in) > *,.hc-t7 .tile.tp:not(.in)::before,.hc-t7 .tile.tp:not(.in)::after{opacity:0}.hc-t7 .tile .photo{background:#1d1f23}@keyframes tpxSheen{to{background-position:-220% 0}}.tpx img:not(.ok){opacity:0}.tpx img.ok{transition:opacity .4s cubic-bezier(.2,.7,.2,1)}.hc-t7 .tile .photo img.ok{transition-duration:.5s}.hc-t7 .tile.tp .photo{background:var(--red);animation:none}.measure,.measure *{transition:none!important;animation:none!important}@media (prefers-reduced-motion:reduce){.hc-more,.hc-more-in{transition:none}}.bignum{display:flex;align-items:flex-end;gap:12px}.bignum b{font:italic 800 150px/.8 var(--cond);color:var(--red)}.bignum span{font:800 40px/.92 var(--cond);text-transform:uppercase;padding-bottom:6px}.pills{display:flex;flex-wrap:wrap;gap:8px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.pills span{border:1px solid var(--line2);padding:8px 10px;color:var(--soft)}.pills span:first-child{border-color:#fff;color:#fff}.latest{display:grid;grid-template-columns:92px minmax(0,1fr);gap:14px;align-items:center;padding:12px;background:var(--panel);border:0;text-align:left;cursor:pointer;width:100%}.latest .photo{width:92px;height:115px}.latest small{display:block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red)}.latest strong{display:block;font:700 26px/1 var(--cond);text-transform:uppercase;margin:4px 0}.latest em{display:block;font-style:normal;font-size:13px;color:var(--muted)}.latest u{display:block;text-decoration:none;font-size:14px;font-weight:600;margin-top:6px}.road2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0;padding:0;list-style:none}.road2 li{display:flex;flex-direction:column;gap:4px;padding-top:10px;border-top:4px solid var(--line)}.road2 li.on{border-top-color:var(--red)}.road2 b{font:700 20px/1 var(--cond);text-transform:uppercase}.road2 span{font-size:13px;color:var(--soft)}.glass{position:relative;background:linear-gradient(135deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.06) 45%,rgba(255,255,255,.03) 100%);-webkit-backdrop-filter:blur(18px) saturate(1.5);backdrop-filter:blur(18px) saturate(1.5);border:1px solid rgba(255,255,255,.2);box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.04),0 24px 48px rgba(0,0,0,.45);color:#fff}.glass::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 28%);mix-blend-mode:screen}.tracker{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#101113}.tracker .wrap{display:flex;flex-direction:column;gap:14px;padding-top:16px;padding-bottom:18px}.trk-top{display:flex;justify-content:space-between;align-items:center}.trk-live{display:flex;align-items:center;gap:8px;font:700 13px/1 var(--cond);letter-spacing:.1em;text-transform:uppercase}.trk-live i{width:9px;height:9px;border-radius:50%;background:var(--red);box-shadow:0 0 0 0 rgba(225,25,55,.6);animation:tpxPing 1.8s ease-out infinite}@keyframes tpxPing{0%{box-shadow:0 0 0 0 rgba(225,25,55,.6)}80%,100%{box-shadow:0 0 0 9px rgba(225,25,55,0)}}.trk-upd{font-size:12px;color:var(--muted)}.reveal{display:flex;flex-direction:column;gap:4px}.reveal .eyebrow{color:#ff4d68}.reveal strong{font:italic 800 64px/.86 var(--cond);text-transform:uppercase;letter-spacing:-.005em}.reveal strong b{color:var(--red);font-variant-numeric:tabular-nums}.reveal-cd{font-size:14px;color:var(--soft)}.reveal .eyebrow{font-size:13px}.reveal-cd b{font:italic 800 22px/1 var(--cond);color:var(--red);font-variant-numeric:tabular-nums}.trk-row{display:flex;flex-wrap:wrap;gap:6px 16px;padding-top:10px;border-top:1px solid var(--line)}.trk-mini{font-size:13px;color:var(--soft)}.trk-mini b{font:italic 800 20px/1 var(--cond);color:#fff;font-variant-numeric:tabular-nums}.tracker .road2 li.next{border-top-color:#5d6168}.tracker .road2 li.next b{color:#fff}.tracker .road2 li.next span{color:var(--soft)}.tracker .road2 li{padding-top:8px}.seg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid var(--line2);max-width:420px}.seg button{height:46px;border:0;background:transparent;color:#fff;font:700 17px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;cursor:pointer}.seg button[aria-pressed="true"]{background:#fff;color:var(--ink)}.rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -16px;padding:2px 16px 8px;list-style:none;scrollbar-width:thin;scrollbar-color:#3a3d42 transparent}.rail li{flex:0 0 148px;scroll-snap-align:start}.card{width:148px;padding:0;border:0;background:transparent;text-align:left;display:flex;flex-direction:column;gap:6px;cursor:pointer}.card .photo{width:148px;height:184px}.card .bar{height:4px;background:transparent}.card[aria-pressed="true"] .bar{background:var(--red)}.card small{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--red)}.card strong{font:700 21px/1.02 var(--cond);text-transform:uppercase}.card em{font-style:normal;font-size:12px;color:var(--muted);display:flex;gap:6px;align-items:center}.card em .flag{width:18px;height:12px}.empty{padding:28px 16px;border:1px dashed var(--line2);color:var(--soft);font-size:15px;text-align:center}.vote{display:flex;flex-direction:column;gap:14px;padding:16px;background:var(--panel);border-top:4px solid var(--red);max-width:760px}.vote-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.vote-head small{display:block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red)}.vote-head strong{display:block;font:800 32px/.95 var(--cond);text-transform:uppercase;margin:4px 0}.vote-head em{font-style:normal;font-size:13px;color:var(--muted)}.vote-head .flag{width:48px;height:32px;outline-width:2px}.vote-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--line);padding-top:4px;font-size:13px;color:var(--muted)}.vote-foot a{min-height:44px;display:flex;align-items:center;font-size:14px;font-weight:600;color:#fff;text-decoration:none}.jsec{background:radial-gradient(55% 32% at 92% 6%,rgba(225,25,55,.22),transparent 70%),radial-gradient(45% 30% at 0% 62%,rgba(225,25,55,.14),transparent 70%),var(--ink)}.jig{display:flex;justify-content:flex-end;align-items:center;min-height:44px;font-size:14px;font-weight:600;text-decoration:none}.form{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px 6px;padding-top:9px}.tile{position:relative;aspect-ratio:4/5}.tile .photo{position:absolute;inset:0}.tile .meta{position:absolute;left:5px;right:5px;bottom:6px;display:flex;flex-direction:column;align-items:flex-start;gap:4px}.tile .ids{display:flex;gap:4px;align-items:center}.tile .ids .flag{width:21px;height:14px}.tile .ids .crest{width:16px;height:16px}.plate{display:flex;font:700 12px/1 var(--cond);text-transform:uppercase;max-width:100%}.plate i{font-style:normal;background:var(--red);color:#fff;padding:3px 4px}.plate b{font-weight:700;background:var(--ink);color:#fff;padding:3px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tile .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,11,12,0) 50%,rgba(11,11,12,.75) 100%)}.tile.tp .photo{background:var(--red)}.tile.tp .photo img{mix-blend-mode:luminosity;filter:grayscale(1) contrast(1.15)}.tile.tp{box-shadow:inset 0 0 0 3px var(--red)}.tile.tp .plate i{background:#fff;color:var(--ink)}.tile .tag{position:absolute;left:50%;top:0;z-index:3;transform:translate(-50%,-58%);padding:3px 6px 2px;border-radius:2px;background:var(--red);color:#fff;font:700 10px/1.2 var(--sans);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.35)}.form.sq .tile{aspect-ratio:1/1}.form.sq{gap:14px 6px}.tile.void{pointer-events:none}.tile.tp{overflow:visible}.tile.tp::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(0deg,rgba(255,51,85,.55) 0%,rgba(255,51,85,0) 45%);z-index:1}.tile.tp::after{content:"";position:absolute;left:4%;right:4%;bottom:-5px;height:3px;border-radius:3px;background:#ff4060;box-shadow:0 0 6px 1px rgba(255,64,96,.95),0 0 18px 4px rgba(225,25,55,.7),0 0 38px 10px rgba(225,25,55,.35);z-index:2}.tile.tp .meta,.tile.tp .tag{z-index:3}.tile.label{display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:6px 2px}.tile.label small{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}.tile.label b{font:italic 800 28px/.95 var(--cond)}.addon{padding:44px 0 56px}.addon .wrap{padding-right:28px}.paper{background:var(--paper);color:var(--ink);box-shadow:12px 12px 0 var(--red);padding:22px 18px 24px;display:flex;flex-direction:column;gap:16px;max-width:780px}.paper .h2{font-size:46px;line-height:.9}.paper .lede{color:#3f4247}.paper .seg{border-color:var(--ink)}.paper .seg button{color:var(--ink)}.paper .seg button[aria-pressed="true"]{background:var(--ink);color:#fff}.round h3{margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--papermuted)}.games{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}.game{position:relative;width:100%;min-height:56px;border:0;padding:0 14px;display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr) 22px;align-items:center;gap:8px;background:var(--ink);color:#fff;text-align:left;cursor:pointer}.game[aria-expanded="true"]{background:var(--red)}.game .yr{font:italic 800 26px/1 var(--cond)}.game .yr.r{text-align:right}.game .st{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-align:center}.game .sg{font:700 24px/1 var(--cond);text-align:right}.game.off{background:#ecedef;color:#5d6168;cursor:default}.paper .game{color:#fff}.game.nt{grid-template-columns:auto minmax(0,1fr);gap:14px}.game.nt .yr{font-size:22px}.game.nt .st{text-align:left}.games{gap:10px}.paper .game.off{color:#5d6168}.game .win{color:var(--red)}.game[aria-expanded="true"] .win{color:#fff;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px}.ex{position:absolute;left:10px;top:-9px;display:inline-block;padding:2px 5px;background:#fff3a6;color:#2a2600;font:700 10px/1.2 var(--sans);letter-spacing:.06em;text-transform:uppercase;vertical-align:middle}.reel{display:flex;flex-direction:column;align-items:center;gap:12px;padding:14px 10px 16px;background:var(--ink);color:#fff;overflow:hidden}.reel .frame{width:min(300px,78vw);aspect-ratio:9/16;background:#1d1f23;overflow:hidden}.reel .frame img{width:100%;height:100%;object-fit:cover}.reel a{min-height:44px;display:flex;align-items:center;font-size:14px;font-weight:600;color:#fff;text-decoration:none}.game.up{background:#2a2c31}.game.up .st{color:#b9bdc3}.game .yr small{display:block;margin-top:3px;font:700 10px/1 var(--sans);letter-spacing:.08em;text-transform:uppercase;opacity:.8}.lamp{display:inline-block;width:8px;height:8px;margin-right:7px;border-radius:50%;background:#ff2b4a;vertical-align:1px;box-shadow:0 0 8px 2px rgba(255,43,74,.75);animation:tpxBlink 1.1s ease-in-out infinite}@keyframes tpxBlink{0%,100%{opacity:1}50%{opacity:.18;box-shadow:0 0 2px 0 rgba(255,43,74,.2)}}.game[aria-expanded="true"] .lamp{background:#fff;box-shadow:0 0 8px 2px rgba(255,255,255,.7)}.game.res{background:#2c2e33;isolation:isolate}.game.res[aria-expanded="true"]{background:#2c2e33;box-shadow:inset 0 0 0 2px #fff}.split{position:absolute;inset:0;z-index:-1;background:#3a3d42}.split.bw{background:var(--red)}.split i{position:absolute;left:0;top:0;bottom:0;background:#3a3d42;transform-origin:left;animation:tpxGrow .9s cubic-bezier(.2,.7,.2,1) both}.split.aw i{background:var(--red)}@keyframes tpxGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}.game.res .win,.game.res[aria-expanded="true"] .win{color:#fff;text-decoration:none}.game.res .yr:not(.win){color:rgba(255,255,255,.72)}.game .st.pc{display:flex;justify-content:space-between;gap:18px;min-width:110px}.game .st.pc b{font:italic 800 22px/1 var(--cond);letter-spacing:0}.steps{list-style:none;margin:0;padding:0;display:grid;gap:18px}.steps li{display:grid;grid-template-columns:40px minmax(0,1fr);gap:12px}.steps b{font:italic 800 40px/.9 var(--cond);color:#5d6168}.steps h3{margin:0 0 4px;font:700 22px/1.1 var(--cond);text-transform:uppercase}.steps p{margin:0;font-size:15px;line-height:1.45;color:var(--soft)}.big8{display:flex;align-items:baseline;gap:12px;padding:12px 0;border-top:1px solid var(--line)}.big8 b{font:italic 800 72px/.9 var(--cond);color:var(--red)}.big8 span{font-size:15px;color:var(--soft)}.hrail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -16px;padding:2px 16px 8px;list-style:none;scrollbar-width:thin;scrollbar-color:#3a3d42 transparent}.ed{flex:0 0 300px;scroll-snap-align:start}.ed-in{display:flex;flex-direction:column;background:var(--panel);transform-origin:50% 0}.ed-top{display:flex;align-items:baseline;justify-content:space-between;padding:14px 14px 10px}.ed-top b{font:italic 800 64px/.9 var(--cond);color:var(--red)}.ed-top span{font-size:12px;font-weight:700;color:var(--muted)}.ed-pics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;padding:0 14px}.ed-pics.one{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.ed-fig{margin:0;display:flex;flex-direction:column;gap:8px}.ed-fig .photo{aspect-ratio:4/5;max-width:100%}.ed-fig small{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.ed-fig strong{display:block;font:700 21px/1 var(--cond);text-transform:uppercase}.ed-names{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding:12px 14px 4px}.ed-names small{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.ed-names strong{display:block;font:700 22px/1 var(--cond);text-transform:uppercase}.ed-body ul{list-style:none;margin:0;padding:10px 14px 14px;display:grid;grid-template-columns:minmax(52px,max-content) minmax(0,1fr);column-gap:8px}.ed-body li{grid-column:1/-1;display:grid;grid-template-columns:subgrid;align-items:baseline;padding:9px 0;border-top:1px solid var(--line)}.ed-body li b{font:italic 800 26px/1 var(--cond);white-space:nowrap}.ed-body li b sup{position:relative;top:-.62em;margin-left:1px;font-size:.5em;line-height:0;vertical-align:baseline;letter-spacing:.02em}.ed-body li span{font-size:13px;line-height:1.35;color:var(--soft)}.tpx .ed-go{margin:auto 14px 14px;min-height:42px;border:1px solid rgba(255,255,255,.4);border-radius:3px;background:transparent;font:700 16px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;cursor:pointer}.t7l{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}.t7l li{display:grid;grid-template-columns:30px minmax(0,1fr);align-items:start;column-gap:8px}.t7l i{font:700 13px/1 var(--cond);font-style:normal;text-align:center;padding:4px 0 3px;background:var(--red);color:#fff;border-radius:2px}.t7l span{font-size:13px;line-height:1.15;color:var(--soft);padding-top:2px}.t7l li.tp i{background:#fff;color:var(--ink)}.t7l li.tp span{font-weight:700;color:#fff}.t7l em{display:block;margin-top:2px;font-style:normal;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#ff4d68}.hof{flex:0 0 132px;scroll-snap-align:start}.hof .hofc{width:132px;display:flex;flex-direction:column;gap:6px}.hof .photo{width:132px;height:300px}.hof b{font:italic 800 24px/1 var(--cond);color:var(--red)}.hof strong{font:700 17px/1.05 var(--cond);text-transform:uppercase}.hof.hb{flex-basis:132px}.hof .banner{width:132px;height:396px;object-fit:cover;display:block}.hofsec{background:#fff;color:var(--ink);border-top:0}.hofsec .h2{color:var(--ink)}.hofn{font-size:14px;color:var(--papermuted)}.hofrail{gap:10px;padding-top:6px;padding-bottom:26px;scrollbar-color:#c9cbcf transparent}.hof.ny{margin-left:22px}.hofc{filter:drop-shadow(0 10px 14px rgba(11,11,12,.22)) drop-shadow(0 2px 3px rgba(11,11,12,.18))}.hof .banner{clip-path:polygon(0 0,100% 0,100% 0,50% 0,0 0);transform:translateY(-14px);opacity:.4;transition:clip-path .9s cubic-bezier(.22,.8,.24,1) var(--d,0ms),transform .9s cubic-bezier(.22,.8,.24,1) var(--d,0ms),opacity .5s ease var(--d,0ms)}.hof.in .banner{clip-path:polygon(0 0,100% 0,100% 81.1%,50% 100%,0 81.1%);transform:none;opacity:1}.partners{display:grid;gap:16px}.pcard{display:flex;flex-direction:column;gap:8px;padding:18px 16px;background:var(--panel)}.pcard h3{margin:0;font:800 30px/1 var(--cond);text-transform:uppercase}.pcard p{margin:0;font-size:15px;color:var(--soft)}.pcard a{min-height:48px;display:flex;align-items:center;font:700 18px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;text-decoration:none}.pcard .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.pcard .two a{justify-content:center;border:1px solid #fff;font:600 14px/1 var(--sans);text-transform:none;letter-spacing:0}.follow{background:var(--red);padding:44px 0}.follow .h2{font-size:44px;line-height:.95}.follow .btn{background:var(--ink);width:100%;max-width:420px}.stand{list-style:none;margin:0;padding:0}.stand li{display:grid;grid-template-columns:34px 44px minmax(0,1fr) auto;gap:10px;align-items:center;min-height:60px;border-top:1px solid var(--line)}.stand .rk{font:italic 800 22px/1 var(--cond);color:#5d6168}.stand .photo{width:44px;height:44px}.stand strong{display:flex;align-items:center;gap:8px;font:700 20px/1.05 var(--cond);text-transform:uppercase}.stand strong .flag{width:21px;height:14px}.stand em{display:block;font-style:normal;font-size:12px;color:var(--muted)}.stand .pt{font:italic 800 28px/1 var(--cond)}.stand li:first-child .pt{color:var(--red)}@media (min-width:900px){.wrap{padding:0 32px}.rail,.hrail{margin:0 -32px;padding-left:32px;padding-right:32px}.hero-top{min-height:300px;padding-top:24px}.tagline{max-width:20ch;font-size:60px}.hrow{--cw:248px;gap:18px}.reveal strong{font-size:88px}.h2{font-size:56px}.steps{grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}.partners{grid-template-columns:repeat(2,minmax(0,1fr))}.juryflex{display:grid;grid-template-columns:minmax(0,1fr);gap:20px}.stand{max-width:760px}}@media (prefers-reduced-motion:reduce){.tpx *{scroll-behavior:auto!important;transition:none!important;animation:none!important}}.fld{width:100%;max-width:520px;display:flex;flex-direction:column;gap:10px;color:#fff}.fhead{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px}.fhead > b{font:italic 800 46px/.85 var(--cond);letter-spacing:-.01em;color:var(--red)}.fhead.b > b{color:#fff}.fhead strong{display:block;font:700 15px/1.05 var(--cond);letter-spacing:.04em;text-transform:uppercase}.fhead strong em{font-style:normal;color:#ff4d68}.fhead small{display:block;margin-top:0;font-size:11px;line-height:1;color:var(--muted)}.fhead > i{font:italic 800 34px/1 var(--cond);font-style:italic;color:var(--red)}.fhead.b > i{color:#8b9097}.pitch{position:relative;border:1.5px solid rgba(255,255,255,.75);border-radius:2px}.half{position:relative;height:var(--hh,236px)}.half.a{border-bottom:1.5px solid rgba(255,255,255,.75)}.goal{position:absolute;left:50%;width:62px;height:8px;margin-left:-31px;border:1.5px solid rgba(255,255,255,.75);background:var(--ink)}.half.a .goal{top:-9px;border-bottom:0}.half.b .goal{bottom:-9px;border-top:0}.fnode{--rr:40px;position:absolute;z-index:1;display:flex;flex-direction:column;align-items:center;gap:7px;width:96px;margin-left:-48px;margin-top:calc(var(--rr) / -2);transition:margin .38s cubic-bezier(.22,.8,.24,1),opacity .3s}.fnode.gk{flex-direction:row;width:auto;margin-left:calc(var(--rr) / -2);gap:10px}.tpx .fnode{padding:0;border:0;background:none;color:inherit;font:inherit;cursor:zoom-in}.tpx .fnode.big{cursor:zoom-out}.fnode:focus-visible .ring{outline:2px solid #fff;outline-offset:3px}.fnode .ring{position:relative;flex:0 0 auto;width:var(--rr);height:var(--rr);transition:width .38s cubic-bezier(.22,.8,.24,1),height .38s cubic-bezier(.22,.8,.24,1),box-shadow .38s;border-radius:50%;border:2px solid var(--red);background:#2a2c31;display:flex;align-items:center;justify-content:center}.half.b .fnode .ring{border-color:#fff}.fnode .ring img{width:100%;height:100%;border-radius:50%;object-fit:cover;filter:grayscale(1) contrast(1.1)}.fnode .ring > span{font:800 17px/1 var(--cond);color:#8b9097}.fnode .ring i{position:absolute;left:50%;bottom:-7px;transform:translateX(-50%);padding:2px 4px 1px;background:var(--red);color:#fff;font:700 10px/1 var(--cond);font-style:normal;letter-spacing:.04em;border-radius:1px}.half.b .fnode .ring i{background:#fff;color:var(--ink)}.fnode b{max-width:100%;font:700 12px/1.05 var(--cond);letter-spacing:.02em;text-transform:uppercase;text-align:center;overflow-wrap:anywhere}.fnode.gk b{text-align:left}.half.win{background:#fff;color:var(--ink)}.half.win .fnode b{color:var(--ink)}.half.lose .fnode{opacity:.32}.bigpc{position:absolute;left:50%;top:50%;z-index:0;transform:translate(-50%,-50%);font:italic 800 150px/1 var(--cond);letter-spacing:-.02em;color:var(--red);opacity:.16;pointer-events:none}.half.a .bigpc{top:auto;bottom:2px;transform:translateX(-50%);font-size:92px}.half.b .bigpc{top:2px;transform:translateX(-50%);font-size:92px}.bigpc small{font-size:.5em}.half.lose .bigpc{color:#8b9097;opacity:.22}@media (min-width:600px){.half{height:var(--hh,262px)}.fnode{--rr:48px}.fnode b{font-size:13px}.fhead > b{font-size:56px}}.tip{position:relative;display:inline-flex;align-items:center;cursor:pointer;border-radius:2px;outline:none}.tip:focus-visible{box-shadow:0 0 0 2px #fff}.teams{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.tpx .teams button{position:relative;display:flex;align-items:baseline;gap:6px;min-height:44px;padding:8px 30px 8px 12px;border:1px solid transparent;border-radius:3px;background:#ecedef;color:var(--ink);font:italic 800 22px/1 var(--cond);text-align:left;cursor:pointer;transition:background .25s,color .25s}.teams button small{font:700 10px/1 var(--sans);font-style:normal;letter-spacing:.08em;text-transform:uppercase;color:var(--papermuted)}.teams button i{position:absolute;right:10px;top:50%;margin-top:-9px;font:700 18px/18px var(--sans);font-style:normal;transition:transform .35s cubic-bezier(.22,.8,.24,1)}.tpx .teams button:hover{background:#e0e1e4}.tpx .teams button[aria-expanded="true"]{background:var(--ink);color:#fff}.teams button[aria-expanded="true"] small{color:#b9bdc3}.teams button[aria-expanded="true"] i{transform:rotate(45deg)}.teamx{overflow:hidden}.teamx-in{display:flex;justify-content:center;padding:14px;background:var(--ink);border-radius:3px}.teamx-fig{margin:0;width:min(320px,100%);aspect-ratio:4/5;background:var(--bg,#fff);border-radius:3px;overflow:hidden}.teamx-fig img{display:block;width:100%;height:100%;object-fit:contain}.teamx-list{width:min(320px,100%);display:flex;flex-direction:column;gap:6px;color:#fff}.teamx-list b{font:italic 800 34px/1 var(--cond);color:var(--red)}.teamx-list small{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}@media (min-width:600px){.teams{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:899px){.tagline{margin:4px 0 0}.hero-media img,.hero-media video{transform:translateY(var(--vy,0px))}}.edrail{--ew:min(300px,78vw);display:flex;align-items:flex-start;gap:12px;margin:0;padding:8px calc(50% - var(--ew) / 2) 22px;list-style:none;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain}.edrail::-webkit-scrollbar{display:none}.edrail .ed{flex:0 0 var(--ew);transition:flex-basis .5s cubic-bezier(.22,.8,.24,1);scroll-snap-align:center;scroll-snap-stop:always;cursor:pointer}.edrail .ed.on{cursor:default}.edrail .ed.on > .ed-in{box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),0 14px 34px rgba(0,0,0,.4)}.edrail.open .ed.on > .ed-in{box-shadow:inset 0 0 0 1px rgba(255,77,104,.7),0 14px 34px rgba(0,0,0,.45)}.ed-body{display:grid;grid-template-rows:1fr;transition:grid-template-rows .5s cubic-bezier(.22,.8,.24,1),opacity .3s}.ed-body-in{min-height:0;overflow:hidden}.edrail.open .ed-body{grid-template-rows:0fr;opacity:0}.ed-t7{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.22,.8,.24,1)}.ed-t7-in{min-height:0;overflow:hidden;opacity:0;transform:translateY(10px);transition:opacity .2s,transform .5s cubic-bezier(.22,.8,.24,1)}.edrail.open .ed-t7{grid-template-rows:1fr}.edrail.open .ed-t7-in{opacity:1;transform:none;transition:opacity .4s .14s,transform .55s .08s cubic-bezier(.22,.8,.24,1)}.ed-tabs{display:flex;gap:6px;padding:2px 14px 10px}.tpx .ed-tabs button{flex:1;height:36px;border:1px solid rgba(255,255,255,.3);border-radius:3px;background:transparent;color:#fff;font:700 15px/1 var(--cond);letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s,border-color .25s}.tpx .ed-tabs button[aria-pressed="true"]{background:#fff;color:var(--ink);border-color:#fff}.ed-track{position:relative;margin:0 14px 12px;overflow:hidden;transition:margin .5s cubic-bezier(.22,.8,.24,1)}.ed-strip{display:flex;align-items:flex-start;transition:transform .36s cubic-bezier(.22,.8,.24,1)}.ed-strip.drag,.ed-strip.ni{transition:none}.edrail.open .ed.on .ed-strip{will-change:transform}.ed-slide{flex:0 0 100%;min-width:0;margin:0;display:flex;flex-direction:column;gap:10px}.ed-frame{aspect-ratio:4/5;background:var(--bg,#fff);border-radius:3px;overflow:hidden}.ed-frame img{display:block;width:100%;height:100%;object-fit:contain}.ed-l7{list-style:none;margin:0;padding:0 2px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px 12px}.ed-l7 li{display:flex;align-items:flex-start;gap:7px;min-width:0}.ed-l7 i{flex:0 0 26px;display:flex;align-items:center;justify-content:center;height:18px;padding:0 0 1px;border-radius:2px;background:var(--red);color:#fff;font:700 12px/1 var(--cond);font-style:normal}.ed-l7 span{min-width:0;padding-top:2px;font-size:13px;line-height:1.15;color:var(--soft);overflow-wrap:anywhere}.ed-l7 li.tp i{background:#fff;color:var(--ink)}.ed-l7 li.tp span{font-weight:700;color:#fff}.edrail.open .tpx .ed-go,.tpx .edrail.open .ed-go{background:var(--red);border-color:var(--red)}@media (min-width:900px){.edrail{--ew:340px}}@media (max-width:599px){.edrail.open{--ew:calc(100vw - 20px);gap:10px}.edrail.open .ed-track{margin:0 8px 10px}.edrail.open .ed-tabs{padding:2px 8px 10px}.edrail.open .ed-l7{padding:0 4px}.edrail.open .ed-top{padding:8px 10px 6px}.edrail.open .ed-top b{font-size:44px}}.ed-top{transition:padding .5s cubic-bezier(.22,.8,.24,1)}.ed-top b{transition:font-size .5s cubic-bezier(.22,.8,.24,1)}.fnode b{transition:opacity .2s}.fnode .full{position:absolute;top:100%;left:50%;z-index:2;padding:5px 9px 4px;border-radius:3px;background:#fff;color:var(--ink);font:700 14px/1.1 var(--cond);letter-spacing:.03em;text-transform:uppercase;white-space:nowrap;box-shadow:0 6px 18px rgba(0,0,0,.45);opacity:0;transform:translate(-50%,-6px) scale(.92);pointer-events:none;transition:opacity .22s,transform .38s cubic-bezier(.22,.8,.24,1)}.fnode.gk .full{left:calc(var(--rr) / 2)}.fnode.el .full{left:24px;transform:translateY(-6px) scale(.92);transform-origin:left top}.fnode.er .full{left:auto;right:24px;transform:translateY(-6px) scale(.92);transform-origin:right top}.fnode.big{--rr:96px;z-index:6;opacity:1}.fnode.big .ring{box-shadow:0 12px 30px rgba(0,0,0,.55)}.fnode.big .ring i{bottom:-9px;padding:3px 6px 2px;font-size:12px}.fnode.big b{opacity:0}.fnode.big .full{opacity:1;transform:translate(-50%,-14px)}.fnode.big.el .full,.fnode.big.er .full{transform:translateY(-14px)}.fnode.gk.big .full{transform:translate(-50%,6px)}.half.b .fnode.gk.big{margin-top:calc(var(--rr) / -2 - 24px)}.half.b .fnode.gk .full{top:auto;bottom:100%}.half.b .fnode.gk.big .full{transform:translate(-50%,-14px)}.half.win .fnode .full{background:var(--ink);color:#fff}.tipbox{position:absolute;left:-6px;bottom:calc(100% + 8px);z-index:7;display:flex;flex-direction:column;align-items:center;gap:7px;min-width:84px;max-width:170px;padding:10px 10px 8px;border-radius:4px;background:#fff;color:var(--ink);box-shadow:0 10px 26px rgba(0,0,0,.45);opacity:0;transform:translateY(6px) scale(.94);transform-origin:12px 100%;pointer-events:none;transition:opacity .18s,transform .28s cubic-bezier(.22,.8,.24,1)}.tipbox .tbig.flag{width:60px;height:40px;border-radius:2px;box-shadow:0 0 0 1px rgba(11,11,12,.12)}.tipbox .tbig.crest{width:52px;height:52px;object-fit:contain}.tipbox b{font:700 12px/1.2 var(--sans);letter-spacing:0;text-transform:none;text-align:center;white-space:normal}.tip:hover .tipbox,.tip:focus-visible .tipbox,.tip.on .tipbox{opacity:1;transform:none}sup.ast{margin-left:1px;font-size:.95em;font-weight:700;line-height:0;color:#ff4d68}.hc-notew{display:grid;grid-template-rows:0fr;margin-top:-10px;transition:grid-template-rows .5s cubic-bezier(.22,.8,.24,1),margin-top .5s cubic-bezier(.22,.8,.24,1)}.hc-notew > div{min-height:0;overflow:hidden}.hc.x .hc-notew{grid-template-rows:1fr;margin-top:0}.hc-note{margin:0;padding:8px 10px;border-left:2px solid var(--red);background:rgba(225,25,55,.1);font-size:12px;line-height:1.35;color:#d5d8dc;opacity:0;transition:opacity .3s}.hc.x .hc-note{opacity:1;transition:opacity .4s .15s}.hc-note sup.ast{margin:0 4px 0 0}.ed-ph{position:relative}.ed-flag{position:absolute;left:6px;bottom:6px;z-index:2;display:flex}.ed-flag .flag{display:block;width:24px;height:16px;border-radius:1px;box-shadow:0 1px 4px rgba(0,0,0,.5)}.hc-btabs{display:flex;gap:6px}.tpx .hc-btabs button{flex:1;height:32px;border:1px solid rgba(255,255,255,.3);border-radius:3px;background:transparent;color:#fff;font:700 14px/1 var(--cond);letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s,border-color .25s}.tpx .hc-btabs button[aria-pressed="true"]{background:#fff;color:var(--ink);border-color:#fff}.hrow.open .hcard.glass{-webkit-backdrop-filter:none;backdrop-filter:none;background:#1b1c20;box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 16px 32px rgba(0,0,0,.45)}.hrow.open .hcard.glass::before{display:none}.edrail.open .ed-frame{height:var(--fh,auto)}.fnode .full{display:block;width:max-content}.fnode .full .flag{display:inline-block;width:21px;height:14px;margin:0 6px 0 0;vertical-align:-2px;border-radius:1px;box-shadow:0 0 0 1px rgba(0,0,0,.14)}.vote-cta{display:flex;flex-direction:column;align-items:center;gap:7px;margin:16px 0 6px}.tpx .vote-now{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 28px 0 22px;border-radius:999px;background:var(--red);color:#fff;text-decoration:none;box-shadow:0 3px 0 #9e0f25,0 10px 22px -6px rgba(225,25,55,.55);transition:transform .12s cubic-bezier(.2,.7,.2,1),box-shadow .12s cubic-bezier(.2,.7,.2,1),background-color .15s;-webkit-tap-highlight-color:transparent}.vote-now b{font:800 21px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase}.vote-now .igi{width:22px;height:22px;flex:none}.tpx .vote-now:active{transform:translateY(3px);box-shadow:0 0 0 #9e0f25,0 4px 10px -4px rgba(225,25,55,.5)}@media (hover:hover){.tpx .vote-now:hover{background:#f0213f}}.vote-cta small{font-size:12px;font-weight:600;color:var(--papermuted)}.tpx .vote-now:focus-visible{outline:3px solid var(--ink);outline-offset:3px}@media (prefers-reduced-motion:reduce){.tpx .vote-now{transition:none}}.hc.x.on .hcard,.edrail.open .ed.on{cursor:pointer}.reel.tight{padding:8px 10px}.reel.tight .fld{gap:6px}.reel.tight .fnode b{font-size:11px;letter-spacing:0}.reel.tight .fhead > b{font-size:36px}.reel.tight .fhead > i{font-size:28px}@media (min-width:900px){.hero{--mh:clamp(560px,calc(100vh - 50px),980px);--mh:clamp(560px,calc(100svh - 50px),980px)}.hero-media{bottom:auto;height:var(--mh)}.hero-top{min-height:calc(var(--mh) * .6);padding-top:36px;justify-content:flex-start}.tagline{margin:0;max-width:none;font-size:clamp(56px,5vw,80px);line-height:.92}.tagline span{display:block}}@media (min-width:900px){.addon .wrap{padding-right:32px}.addon .paper{margin-inline:auto;position:relative;left:-6px}}.hofsec{padding:0 0 48px}.hofscroll{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:#c9cbcf transparent;overscroll-behavior-x:contain}.hofrail{display:flex;align-items:flex-start;gap:30px;width:max-content;margin:0;padding:0 calc(50vw - 66px) 28px;list-style:none}.hy{display:flex;gap:10px;scroll-snap-align:center;scroll-snap-stop:always}.hb{width:132px;filter:drop-shadow(0 10px 14px rgba(11,11,12,.22)) drop-shadow(0 2px 3px rgba(11,11,12,.18))}.hb .banner{display:block;width:132px;height:396px;object-fit:cover;clip-path:polygon(0 0,100% 0,100% 81.1%,50% 100%,0 81.1%);transform:translateY(-102%);transition:transform .85s cubic-bezier(.3,1.22,.52,1)}.hb.in .banner{transform:none}.hb.hp{display:flex;flex-direction:column;gap:6px;filter:none;opacity:0;transform:translateY(-24px);transition:opacity .5s,transform .7s cubic-bezier(.22,.8,.24,1)}.hb.hp.in{opacity:1;transform:none}.hb.hp .photo{width:132px;height:300px}.hb.hp b{font:italic 800 24px/1 var(--cond);color:var(--red)}.hb.hp strong{font:700 17px/1.05 var(--cond);text-transform:uppercase}.hofhead{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center}@media (min-width:900px){.hofscroll{scroll-snap-type:none}.hofrail{padding:0 32px 28px;margin:0 auto}.hy{scroll-snap-stop:normal}}@media (prefers-reduced-motion:reduce){.hb .banner,.hb.hp{transition:none}}.mcards{display:grid;gap:16px}.mcard{display:flex;flex-direction:column;background:var(--panel);border-radius:3px;overflow:hidden}.mbody{display:flex;flex-direction:column;align-items:flex-start;gap:18px;padding:30px 24px 26px}.mlogo{display:block;width:auto;height:52px}.mcard:first-child .mlogo{margin-left:-12px}.mcard:last-child .mlogo{height:34px;margin:9px 0}.mbody p{margin:0;max-width:44ch;font-size:15px;line-height:1.45;color:var(--soft)}.tpx .mcta{display:inline-flex;align-items:center;min-height:46px;padding:0 20px;border-radius:3px;background:var(--red);color:#fff;font:700 17px/1 var(--cond);letter-spacing:.04em;text-transform:uppercase;text-decoration:none;transition:background .2s}.tpx .mcta:hover{background:#c4142f}.tpx .mcta:focus-visible{outline:3px solid #fff;outline-offset:2px}@media (min-width:900px){.mcards{grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}}.hc-ico{display:none}.hc.x .hc-id{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"fn vote" "ln ico";column-gap:12px;row-gap:2px;align-items:center;padding:9px 4px 8px}.hc.x .hc-id small{grid-area:vote;justify-self:end}.hc.x .hc-id .fn{grid-area:fn}.hc.x .hc-id strong{grid-area:ln}.hc.x .hc-id.nofn strong{grid-row:1 / span 2;align-self:end}.hc.x .hc-ico{grid-area:ico;display:flex;align-items:center;justify-self:end;gap:10px}.hc-ico .flag{width:30px;height:20px}.hc-ico .crest{width:26px;height:26px;object-fit:contain}.hc-ico sup.ast{margin:0 0 0 -7px;align-self:center;font-size:14px;line-height:1;transform:translateY(-7px)}.hc-rolesw{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s cubic-bezier(.22,.8,.24,1),opacity .25s,margin-top .45s cubic-bezier(.22,.8,.24,1)}.hc-rolesw > div{min-height:0;overflow:hidden}.hc.x .hc-rolesw{grid-template-rows:0fr;opacity:0;margin-top:-10px}.hc-act{display:flex;gap:12px;align-items:stretch}.hc-act .glass-btn{flex:1 1 auto}.hc-act .jig{flex:0 0 auto;min-height:42px;padding:0 2px}.hc:not(.x) .hc-act .jig{display:none}.hc.ni,.hc.ni *{transition:none!important}.op{--void:#040405;--neon:#ff2d55;--ease:cubic-bezier(.2,.75,.2,1);position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:var(--opv,calc(100svh - 50px));padding:22px 16px 44px;background:var(--void);--cw:clamp(148px,min(43vw,calc((100svh - 380px) * .52)),300px);--pa:4/5}.op-fx{position:absolute;inset:0;width:100%;height:100%;z-index:-1;display:block}.op::after{content:"";position:absolute;left:0;right:0;bottom:0;height:56px;z-index:-1;pointer-events:none;background:linear-gradient(rgba(11,11,12,0),var(--ink))}.op.op-flat{background:radial-gradient(60% 40% at 50% 100%,rgba(225,25,55,.45),transparent 70%),radial-gradient(40% 50% at 50% 0%,rgba(255,255,255,.12),transparent 70%),var(--void)}.op-top{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;margin-bottom:clamp(22px,4svh,44px)}.op-top img{width:46px;height:auto;opacity:.95;filter:drop-shadow(0 0 12px rgba(255,255,255,.25))}.op-kick{display:flex;align-items:center;gap:10px;font:700 13px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:#9b9ea6}.op-chip{padding:3px 6px 2px;border-radius:2px;background:#f3df73;color:var(--ink);font:700 11px/1.2 var(--sans);letter-spacing:.08em}.op h1{margin:0;font:800 clamp(46px,9vw,104px)/.9 var(--cond);text-transform:uppercase;letter-spacing:.005em;text-wrap:balance;color:#fff;text-shadow:0 -1px 0 rgba(255,255,255,.4),0 0 18px rgba(255,255,255,.18)}.op-pair{display:flex;justify-content:center;align-items:stretch;gap:clamp(12px,4vw,56px);width:100%}.op-win{position:relative;width:var(--cw);display:flex;flex-direction:column;align-items:stretch}.op-win > .op-slab{flex:1 1 auto}.op-win::before{content:"";position:absolute;z-index:2;top:-16px;left:8%;right:8%;height:34px;pointer-events:none;background:radial-gradient(50% 50% at 50% 55%,rgba(255,255,255,.55),rgba(255,255,255,0));filter:blur(7px);opacity:var(--tl,1)}.op-slab{position:relative;padding:calc(var(--cw) * .05);background:linear-gradient(180deg,rgba(255,255,255,.17) 0%,rgba(255,255,255,.05) 34%,rgba(255,255,255,.035) 70%,rgba(255,45,85,.16) 100%),rgba(255,255,255,.07);-webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);box-shadow:inset 0 -40px 46px -34px rgba(255,45,85,.62),inset 0 34px 44px -30px rgba(255,255,255,.5)}.op-slab::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(112deg,transparent 30%,rgba(255,255,255,.13) 39%,rgba(255,255,255,.02) 46%,transparent 52%) no-repeat;background-size:260% 100%;background-position:100% 0}.op-edge{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}.op-pic{position:relative;aspect-ratio:var(--pa);overflow:hidden;background:#111}.op-pic img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.18) brightness(.92)}.op-pic .ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font:800 64px/1 var(--cond);color:#3a3d42}.op-pic::before,.op-pic::after{content:"";position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen}.op-pic::before{background:radial-gradient(120% 70% at 50% -8%,rgba(255,255,255,.42),rgba(255,255,255,0) 58%)}.op-pic::after{background:linear-gradient(0deg,rgba(255,40,80,.62) 0%,rgba(255,40,80,.18) 26%,rgba(255,40,80,0) 48%)}.op-txt{display:flex;flex-direction:column;padding:calc(var(--cw) * .06) 2px calc(var(--cw) * .03)}.op-ids{display:flex;align-items:center;gap:calc(var(--cw) * .03 + 4px);min-height:calc(var(--cw) * .07 + 16px)}.op-ids .flag{width:calc(var(--cw) * .06 + 14px);height:auto;aspect-ratio:3/2;box-shadow:0 0 0 1px rgba(255,255,255,.55)}.op-ids .crest{width:auto;height:calc(var(--cw) * .07 + 16px);filter:drop-shadow(0 1px 3px rgba(0,0,0,.5))}.op-fn{margin-top:calc(var(--cw) * .045);font:600 calc(var(--cw) * .07 + 6px)/1.05 var(--sans);color:#d9dade}.op-ln{font:800 calc(var(--cw) * .19 + 2px)/.9 var(--cond);text-transform:uppercase;letter-spacing:.005em;overflow-wrap:anywhere;color:#fff;text-shadow:0 -1px 0 rgba(255,255,255,.4),0 0 18px rgba(255,255,255,.18)}.op-pts{display:flex;align-items:baseline;gap:8px;margin-top:calc(var(--cw) * .04)}.op-pts b{font:800 calc(var(--cw) * .3 + 4px)/.82 var(--cond);font-variant-numeric:tabular-nums;color:#fff;text-shadow:0 0 6px rgba(255,90,120,.9),0 0 22px rgba(255,45,85,.85),0 0 46px rgba(225,25,55,.6)}.op-pts span{font:800 calc(var(--cw) * .07 + 5px)/1 var(--cond);letter-spacing:.06em;text-transform:uppercase;color:#ffb3c1}.op-neon{position:relative;height:4px;margin:10px 6% 0;border-radius:4px;background:#ffd5dd;opacity:var(--nv,1);box-shadow:0 0 3px 1px var(--neon),0 0 12px 3px rgba(255,45,85,.95),0 0 34px 10px rgba(255,35,75,.6),0 0 90px 28px rgba(225,25,55,.35)}.op-neon::after{content:"";position:absolute;left:-12%;right:-12%;top:8px;height:46px;border-radius:50%;background:radial-gradient(50% 50% at 50% 0%,rgba(255,45,85,.45),rgba(255,45,85,0));filter:blur(6px)}.op-top,.op-win,.op-txt > *{transition:opacity .9s var(--ease),transform 1s var(--ease),filter .9s var(--ease)}.op:not(.go) .op-top{opacity:0;transform:translateY(-14px);filter:blur(6px)}.op:not(.go) .op-win{opacity:0;transform:translateY(46px) scale(.96)}.op:not(.go) .op-txt > *{opacity:0;transform:translateY(8px)}.op.go .op-top{transition-delay:.75s}.op.go .op-win:nth-child(1){transition-delay:1.05s}.op.go .op-win:nth-child(2){transition-delay:1.25s}.op.go .op-win .op-txt > *{transition-delay:1.7s}.op.go .op-win:nth-child(2) .op-txt > *{transition-delay:1.85s}.op.go .op-slab::after{animation:opSweep 1.5s 1.5s var(--ease) both}@keyframes opSweep{from{background-position:100% 0}to{background-position:-60% 0}}.op.op-short{padding-top:14px}.op.op-short .op-top{gap:6px;margin-bottom:16px}.op.op-short .op-top img{width:34px}.op.op-short h1{font-size:38px}.op.op-short .op-kick{font-size:11px}@media (min-width:900px){.op{padding:30px 32px 76px;--cw:clamp(220px,calc((100svh - 325px) / 1.88),340px);--pa:1/1}.op-top img{width:54px}.op h1{font-size:clamp(56px,min(6.4vw,10svh),96px)}}@media (prefers-reduced-motion:reduce){.op-top,.op-win,.op-txt > *{transition:none}.op.go .op-slab::after{animation:none}}';
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
if (!document.getElementById('tpax-fonts')) {
var lk = document.createElement('link'); lk.id = 'tpax-fonts'; lk.rel = 'stylesheet';
lk.href = OPT.fonts === 'self' ? BASE + 'fonts/fonts.css' : 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;1,800&family=Barlow:wght@400;600;700&display=swap';
document.head.appendChild(lk);
}
var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
root.innerHTML = '<style>' + CSS + '</style><div class="tpx" style="--tpx-offset:' + OPT.offset + 'px"><div class="wrap" style="padding:60px 16px;color:#9aa0a6">Loading TPA X…</div></div>';
var APP = root.querySelector('.tpx');
function e(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function img(path) {
var h = D && D.ah && D.ah[path.replace(/^players\/[sm]\//, 'players/').replace(/\.[a-z0-9]+$/i, '')];
return BASE + 'img/' + path + (h ? '?v=' + h : '');
}
function vid(name) { var h = D && D.ah && D.ah['video/' + name]; return BASE + 'video/' + name + (h ? '?v=' + h : ''); }
function webp(file) { return file.replace(/\.(jpe?g|png|svg)$/i, '.webp'); }
function flag(nat, cls) { return nat ? '<img class="flag ' + (cls || '') + '" src="' + img('flags/' + nat + '.webp') + '" alt="' + e(nat) + '" width="30" height="20" loading="lazy" decoding="async">' : ''; }
function crest(file, club) { return file ? '<img class="crest" src="' + img('crests/' + webp(file)) + '" alt="' + e(club || '') + '" width="22" height="22" loading="lazy" decoding="async">' : ''; }
function roles(j) {
var L = j.lines && j.lines.length ? j.lines : [['flag', j.nat, j.role]];
return L.map(function (l) { return '<em>' + (l[0] === 'crest' ? crest(l[1], l[2]) : l[0] === 'flag' ? flag(l[1]) : '') + '<span>' + e(l[2]).replace(/\*$/, '<sup class="ast">*</sup>') + '</span></em>'; }).join('');
}
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
function tip(html, text) {
if (!html || !text) return html;
var big = html.replace('class="flag', 'class="tbig flag').replace('class="crest', 'class="tbig crest').replace(' loading="lazy"', '');
(D.crestLight || []).forEach(function (f) { var w = webp(f); big = big.split(img('crests/' + w)).join(img('crests/light/' + w)); });
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
var D = null, S = { award: null, sel: { w: null, m: null }, more: {}, open: null, oa: true, nav: 'top', hc: 0, vf: 'all', hx: false, mb: {}, team: null, edIx: 0, edOpen: false, edTab: 'w' };
function live(a) {
return (D.jurors || []).filter(function (j) { return !a || (j.ballots ? j.ballots.some(function (b) { return b.a === a; }) : j.a === a); })
.sort(function (x, y) { return (y.posted || '').localeCompare(x.posted || '') || (y.order - x.order); });
}
function P(id) { return D.players[id] || { n: id, f: '', l: id, nat: '', club: '', crest: '', photo: false }; }
function phase() { return OPT.phase || D.phase || 'vote'; }
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
var n = live().length, days = Math.max(0, Math.ceil((new Date(D.resultsDate + 'T12:00:00') - new Date()) / 86400000));
return '<section class="hero" id="tpx-votes" aria-label="Latest votes">' + heroMedia() +
'<div class="wrap hero-top"><p class="tagline"><span>10 years of celebrating</span> <span>water polo excellence</span></p></div>' +
'<div class="vwrap">' + voteRow() + '</div></section>' + tracker(n, days);
}
function votesSection() {
return '<section class="sec jsec" id="tpx-jury" aria-labelledby="tpx-jury-h"><div class="wrap stack" style="gap:8px"><h2 class="h2" id="tpx-jury-h">All votes</h2>' +
'<p class="lede">Every verdict, every Total 7.</p></div><div class="vwrap">' + voteRow() + '</div></section>';
}
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
function setBallot(li, a) {
var j = byId(li.getAttribute('data-jid'));
if (!j || ballotOf(j).a === a) return;
S.mb[j.id] = a;
Array.prototype.forEach.call(li.querySelectorAll('[data-bt]'), function (bt) { bt.setAttribute('aria-pressed', String(bt.getAttribute('data-bt') === a)); });
var parts = [[li.querySelector('.hc-tpw > div'), function () { return tpLine(ballotOf(j)); }], [li.querySelector('.hc-t7-in'), function () { return t7Grid(j); }]];
parts.forEach(function (pt) {
var box = pt[0]; if (!box || (box.classList.contains('hc-t7-in') && !box.firstChild)) return;
var fresh = function () { if (box.classList.contains('hc-t7-in')) settleGrid(li); };
if (reduced() || !box.animate) { box.innerHTML = pt[1](); fresh(); return; }
var out = box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 130, easing: 'ease-in', fill: 'forwards' });
setTimeout(function () {
box.innerHTML = pt[1](); out.cancel(); fresh();
box.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 280, easing: EASE });
}, 130);
});
preload(li);
}
function reduced() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
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
function availH() {
if (!vhp || !vhp.isConnected) { vhp = document.createElement('div'); vhp.setAttribute('aria-hidden', 'true'); vhp.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100svh;visibility:hidden;pointer-events:none'; root.appendChild(vhp); }
var vh = Math.min(vhp.offsetHeight || 1e5, window.innerHeight);
return vh - OPT.offset - (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight - 20;
}
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
function heroRow() {
var row = APP.querySelector('.hrow'); if (!row) return;
var items = row.querySelectorAll('.hc'), reduce = reduced(), raf = 0;
function fit() {
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
Array.prototype.forEach.call(items, function (li) {
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
if (S.hx && !touching && best && bd < best.offsetWidth * 0.3) settleGrid(best);
if (best && best.hasAttribute('data-hc')) {
var nb = +best.getAttribute('data-hc'), moved = nb !== S.hc; S.hc = nb;
if (S.hx && moved) { var box = best.querySelector('.hc-t7-in'); if (box && !box.firstChild) grids(row); }
clearTimeout(pre); pre = setTimeout(function () { preload(best); }, 450);
}
}
var pre = 0;
if (S.hx) { row.classList.add('open'); row.style.setProperty('--xw', xWidth(row) + 'px'); fitHero(row); grids(row); }
if (S.hx) setTimeout(function () { settleGrid(row.querySelector('.hc.on')); }, 60);
var target = row.querySelector('.hc.on') || items[0];
if (target) row.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - row.clientWidth / 2;
update(); fit();
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
var preloaded = {};
function preload(li) {
var j = null; live().forEach(function (x) { if (li && x.id === li.getAttribute('data-jid')) j = x; });
if (!j) return;
[ballotOf(j)].forEach(function (b) {
var key = j.id + ':' + b.a; if (preloaded[key]) return; preloaded[key] = true;
SLOTS.forEach(function (s) { var p = P(b.picks[s]); if (p.photo) { var im = new Image(); im.decoding = 'async'; im.src = img('players/m/' + b.picks[s] + '.webp'); } });
});
}
function openHeight(li, w) {
var c = li.cloneNode(true); c.classList.add('x', 'xd', 'measure', 'on'); c.removeAttribute('data-hc');
c.style.cssText += ';position:absolute;left:0;top:0;width:' + w + 'px;visibility:hidden;pointer-events:none';
c.style.setProperty('--xw', w + 'px');
li.parentNode.appendChild(c); var h = c.querySelector('.hcard').offsetHeight; c.remove(); return h;
}
function xWidth(row) { return Math.max(260, Math.min(480, row.clientWidth - 32)); }
function centreOf(li, w) { var row = li.parentNode; return li.offsetLeft + (w || li.offsetWidth) / 2 - row.clientWidth / 2; }
function centreCard(li) { li.parentNode.scrollTo({ left: centreOf(li), behavior: reduced() ? 'auto' : 'smooth' }); }
var GRID = null;
function fitHero(row) {
var w = xWidth(row), A = availH(), key = w + 'x' + A + 'x' + row.children.length + 'x' + (S.vf || 'all');
if (row._fit === key) return; row._fit = key;
var ghost = document.createElement('ul'); ghost.className = 'hrow open measure'; ghost.setAttribute('aria-hidden', 'true');
ghost.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none;width:' + row.clientWidth + 'px;--xw:' + w + 'px;--bh:150px;--gw:360px';
var J = {}, sigs = [], copies = {};
live().forEach(function (x) { J[x.id] = x; });
Array.prototype.forEach.call(row.querySelectorAll('.hc'), function (li, k) {
var j = J[li.getAttribute('data-jid')] || {};
var sig = (j.ballots ? 'M' : '') + '#' + (j.note || '') + '#' + ((j.l || j.n || '').length > 12 || (j.f || '').length > 18 ? (j.f || '') + '|' + (j.l || j.n) : '');
sigs.push(sig);
if (!GRID && k === 0 && j.id) { var g = li.cloneNode(true); g.className = 'hc x xd on'; g.removeAttribute('data-hc'); g.style.cssText = ''; g.querySelector('.hc-t7-in').innerHTML = t7Grid(j); ghost.appendChild(g); }
if (copies[sig]) return;
var c = li.cloneNode(true); c.className = 'hc x xd on'; c.removeAttribute('data-hc'); c.style.cssText = '';
var box = c.querySelector('.hc-t7-in'); if (box) box.innerHTML = '<div class="form sq" style="height:0;padding:0"></div>';
ghost.appendChild(c); copies[sig] = c;
});
row.parentNode.appendChild(ghost);
var gEl = ghost.querySelector('.hc .form:not([style])');
if (!GRID && gEl) GRID = { w: gEl.offsetWidth, h: gEl.offsetHeight };
var H = {}; Object.keys(copies).forEach(function (sg) { H[sg] = copies[sg].querySelector('.hcard').offsetHeight; });
var Fs = sigs.map(function (sg) { return H[sg]; }), sorted = Fs.slice().sort(function (p, q) { return p - q; });
var Fmax = sorted[sorted.length - 1] || 0, Fmid = sorted[Math.floor((sorted.length - 1) / 2)] || 0;
var W0 = Math.min(360, w - 22), extra = GRID ? GRID.h - GRID.w : 0.07 * W0;
ghost.remove();
var gw = Math.min(W0, A - (Fmid - 150) - 88 - extra, A - (Fmax - 150) - extra);
gw = Math.max(200, Math.round(gw)); var G = gw + extra;
row.style.setProperty('--gw', gw + 'px');
Array.prototype.forEach.call(row.querySelectorAll('.hc'), function (li, k) {
var bh = Math.max(0, Math.min(150, Math.floor(A - (Fs[k] - 150) - G))); if (bh < 44) bh = 0;
li.style.setProperty('--bh', bh + 'px');
});
}
function byId(id) { var j = null; live().forEach(function (x) { if (x.id === id) j = x; }); return j; }
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
Array.prototype.forEach.call(all, function (c, k) { if (Math.abs(k - at) > 2) { c.classList.add('ni'); far.push(c); } });
setTimeout(function () { far.forEach(function (c) { c.classList.remove('ni'); }); }, wait + 80);
S.hx = open; row.classList.toggle('open', open);
Array.prototype.forEach.call(all, function (c) {
c.classList.toggle('x', open); if (!open) c.classList.remove('xd');
var bt = c.querySelector('[data-x]'); if (bt) { bt.setAttribute('aria-expanded', String(open)); bt.textContent = open ? 'Close' : 'See their Total 7'; }
var ig = c.querySelector('.jig'); if (ig) ig.tabIndex = open && c === li ? 0 : -1;
});
if (flips.length) {
row.scrollLeft = centreOf(li);
flips.forEach(function (f) {
var r = f[0].getBoundingClientRect(), dx = f[1].left - r.left, dy = f[1].top - r.top;
if (!f[1].width || !r.width) { if (r.width && f[0].animate) f[0].animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, delay: 160, easing: 'ease-out', fill: 'backwards' }); return; }
if ((Math.abs(dx) > 1 || Math.abs(dy) > 1) && f[0].animate) f[0].animate([{ transform: 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)' }, { transform: 'none' }], { duration: wait, easing: EASE });
});
}
var t0 = 0, user = false, grab = function () { user = true; };
row.addEventListener('touchstart', grab, { passive: true }); row.addEventListener('wheel', grab, { passive: true });
requestAnimationFrame(function keep(t) {
if (!t0) t0 = t; if (!user) row.scrollLeft = centreOf(li);
if (!user && t - t0 < wait + 60) requestAnimationFrame(keep);
else { row.removeEventListener('touchstart', grab); row.removeEventListener('wheel', grab); }
});
setTimeout(function () {
if (S.hx) Array.prototype.forEach.call(all, function (c) { c.classList.add('xd'); });
else Array.prototype.forEach.call(row.querySelectorAll('.hc-t7-in .form'), function (f) { f._rev = false; Array.prototype.forEach.call(f.querySelectorAll('.tile.in'), function (t) { t.classList.remove('in'); }); });
}, wait);
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
function jxShow(card, panel) {
var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight; panel = panel || APP.querySelector('.jx');
var top = card.getBoundingClientRect().top - OPT.offset - navH - 12, bottom = panel ? panel.getBoundingClientRect().bottom : 0;
if (top < 0 || bottom > window.innerHeight) window.scrollTo({ top: window.scrollY + top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
function team(key) { return D.h2hTeams[key]; }
function h2hRedraw() { var sec = APP.querySelector('#tpx-h2h'); if (sec) { sec.outerHTML = h2h(); fitOpenGame(); var nsec = APP.querySelector('#tpx-h2h'); if (nsec) cachedImgs(nsec); } }
function fitOpenGame() { var b = APP.querySelector('#tpx-h2h .game[aria-expanded="true"]'); if (b) fitGame(b.parentNode); }
function autoGame(games, X) {
var state = function (g) { return X && g.id === X.id ? (phase() === 'results' ? 'result' : 'live') : g.state; };
var ready = games.filter(function (g) { return g.a && g.b && team(g.a) && team(g.b); });
var now = ready.filter(function (g) { return state(g) === 'live'; })[0];
if (now) return now.id;
var next = ready.filter(function (g) { return state(g) !== 'result' && state(g) !== 'draw'; })
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
S.oa = false;
if (S.open === id) { glide(cur, false, function () { S.open = null; h2hRedraw(); }); return; }
var y0 = btn.getBoundingClientRect().top;
S.open = id; h2hRedraw();
var nb = APP.querySelector('#tpx-h2h [data-game="' + id + '"]'); if (!nb) return;
window.scrollBy(0, nb.getBoundingClientRect().top - y0);
nb.focus({ preventScroll: true });
var li = nb.parentNode, reel = li.querySelector('.reel');
fitGame(li);
var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, topL = OPT.offset + navH + 10, botL = window.innerHeight - 10;
var top = nb.getBoundingClientRect().top, total = li.offsetHeight;
var dy = (total > botL - topL || top < topL) ? top - topL : Math.max(0, top + total - botL);
glide(reel, true);
glideScroll(dy, 480);
}
function fitGame(li) {
var fld = li.querySelector('.fld'), half = fld && fld.querySelector('.half'), reel = li.querySelector('.reel'); if (!half) return;
fld.style.removeProperty('--hh'); reel.classList.remove('tight');
var A = availH(), x = li.offsetHeight - A; if (x <= 0) return;
reel.classList.add('tight'); x = li.offsetHeight - A; if (x <= 0) return;
fld.style.setProperty('--hh', Math.max(194, half.offsetHeight - Math.ceil(x / 2)) + 'px');
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
var open = S.open === g.id, done = g.state === 'result', live = g.state === 'live', ex = g.demo ? '<span class="ex">Example</span>' : '';
var head;
if (done) {
var aw = g.winner === g.a;
head = '<span class="split' + (aw ? ' aw' : ' bw') + '" aria-hidden="true"><i style="width:' + g.pa + '%"></i></span>' +
'<span class="yr' + (aw ? ' win' : '') + '">' + yl(A) + ex + '</span><span class="st pc"><b>' + g.pa + '%</b><b>' + g.pb + '%</b></span><span class="yr r' + (aw ? '' : ' win') + '">' + yl(B) + '</span>';
} else {
head = '<span class="yr">' + yl(A) + ex + '</span><span class="st">' + (live ? '<i class="lamp" aria-hidden="true"></i>Vote live' : e(g.date ? 'Next · ' + day(g.date) : 'Up next')) + '</span><span class="yr r">' + yl(B) + '</span>';
}
var gi = g.img || (done ? g.imgResult : g.imgFaceoff);
var lab = (a === 'w' ? 'Women' : 'Men') + ' · ' + ({ qf: 'quarter-final ', sf: 'semi-final ', f: 'final', bf: 'bonus final' }[g.round] || '') + (g.round === 'qf' || g.round === 'sf' ? g.label.slice(-1) : '');
var reel = open ? '<div class="reel">' + field(g, lab) +
(done && g.ig ? '<a href="' + e(g.ig) + '" target="_blank" rel="noopener">Watch the reel on Instagram ↗</a>' : '') + '</div>' : '';
var vote = live ? '<div class="vote-cta"><a class="vote-now" href="' + e(g.story || D.igStories || D.ig || 'https://www.instagram.com/') + '" target="_blank" rel="noopener" aria-label="Vote now: ' + e(A.year + ' v ' + B.year) + ' in our Instagram Story">' + IGI + '<b>Vote now</b></a><small>in our Instagram Story</small></div>' : '';
var label = A.year + ' v ' + B.year + (done ? ', ' + g.pa + ' to ' + g.pb + ' percent' : live ? ', vote live' : ', up next');
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
var SPOTS = {
a: { GK: [50, 10], CB: [50, 31], RW: [11, 18], LW: [89, 18], RD: [25, 48], LD: [75, 48], CF: [50, 63] },
b: { CF: [50, 31], LD: [25, 41], RD: [75, 41], CB: [50, 62], LW: [11, 74], RW: [89, 74], GK: [50, 89] }
};
function field(g, lab) {
var A = team(g.a), B = team(g.b), done = g.state === 'result', aw = done && g.winner === g.a, bw = done && g.winner === g.b;
var kind = function (T) { return /Timeless/i.test(T.label) ? 'Timeless 7' : 'Total 7'; };
var node = function (T, pos, side) {
var p = T.line.filter(function (x) { return x.pos === pos; })[0], at = SPOTS[side][pos]; if (!p || !at) return '';
var ring = p.ph ? '<img src="' + img('t7p/' + p.id + '.webp') + '" alt="" decoding="async" width="60" height="60">' : '<span>' + e(initials(p.n)) + '</span>';
var edge = at[0] <= 20 ? ' el' : at[0] >= 80 ? ' er' : '';
var top = at[1] + '%';
if (side === 'a' && pos === 'GK') top = 'max(' + top + ',22px)';
else if (side === 'a' && at[1] <= 20) top = 'max(' + top + ',24px)';
else if (side === 'a' && at[1] >= 60) top = 'min(' + top + ',calc(100% - 42px))';
else if (side === 'b' && pos === 'GK') top = 'min(' + top + ',calc(100% - 22px))';
else if (side === 'b' && at[1] >= 70) top = 'min(' + top + ',calc(100% - 42px))';
return '<button type="button" class="fnode' + (pos === 'GK' ? ' gk' : '') + edge + '" data-fp aria-expanded="false" aria-label="' + e(p.n + ', ' + pos) + '" style="left:' + at[0] + '%;top:' + top + '">' +
'<span class="ring">' + ring + '<i>' + pos + '</i></span><b>' + e(p.l) + '</b><span class="full" aria-hidden="true">' + (p.nat ? flag(p.nat) : '') + '<span>' + e(p.n) + '</span></span></button>';
};
var half = function (T, side, win, lose, pc) {
return '<div class="half ' + side + (win ? ' win' : '') + (lose ? ' lose' : '') + '"><span class="goal" aria-hidden="true"></span>' +
SLOTS.map(function (pos) { return node(T, pos, side); }).join('') +
(done ? '<span class="bigpc" aria-hidden="true">' + pc + '<small>%</small></span>' : '') + '</div>';
};
var head = function (T, side, win, pc) {
return '<div class="fhead ' + side + '"><b>' + e(T.year) + '</b><span><strong>' + kind(T) + (win ? ' · <em>Winner</em>' : '') + '</strong></span>' +   // user 2026-11-20: just "Total 7" (the year is beside it, the game is in the card)
(done ? '<i>' + pc + '%</i>' : '') + '</div>';
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
function legacy() {
var open = !!S.edOpen, n = (D.editions || []).length;
var cards = (D.editions || []).map(function (ed, i) {
var natOf = function (k) { var T = team(k), p = T && T.line.filter(function (x) { return x.tp; })[0]; return p ? p.nat : ''; };
var pic = function (key, name, lab, k) {
var nat = natOf(k);
return '<figure class="ed-fig"><div class="ed-ph">' + photo('hof', key, true, name, '', false, (D.hofFy || {})[key]) + (nat ? '<span class="ed-flag">' + tip(flag(nat), NATS[nat] || nat) + '</span>' : '') + '</div>' +
'<figcaption><small>' + e(name.split(' ')[0]) + '</small><strong>' + e(name.split(' ').slice(1).join(' ')) + '</strong></figcaption></figure>';
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
geo.forEach(function (g) { depth(g[0].firstElementChild, g[1] - mid, g[2] + 12, 0.08, 0.45, row.clientWidth, reduce, flat); });
Array.prototype.forEach.call(items, function (li) { if (li.classList.contains('on') !== (li === best)) li.classList.toggle('on', li === best); });
if (best) { S.edIx = +best.getAttribute('data-ix'); if (row.classList.contains('open')) edWarm(row); }
}
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
if (pos > 0) pos /= 3; else if (pos < min) pos = min + (pos - min) / 3;
g.strip.style.transform = 'translateX(' + pos.toFixed(1) + 'px)';
var k = Math.max(0, Math.min(n - 1, Math.round(-pos / g.w))), aw = g.strip.children[k].getAttribute('data-aw');
if (aw !== edTab()) { S.edTab = aw; edPress(g.li, aw); }
};
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
edSlide(li, k, true); edTabs(li);
};
row.addEventListener('touchend', end); row.addEventListener('touchcancel', end);
if (S.edOpen) fitRoad(row);
edTabs(null, true);
var target = items[S.edIx || 0]; if (target) row.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - row.clientWidth / 2;
update();
row.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
}
function edTab() { return S.edTab || 'w'; }
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
function edWarm(row) {
var items = row.querySelectorAll('.ed'), at = S.edIx || 0;
for (var k = Math.max(0, at - 1); k <= Math.min(items.length - 1, at + 1); k++) {
Array.prototype.forEach.call(items[k].querySelectorAll('.ed-strip img[loading="lazy"]'), function (im) { im.loading = 'eager'; });
}
}
function edOpen(open, li) {
var row = APP.querySelector('.edrail'); if (!row) return;
li = li || row.querySelector('.ed.on'); if (!li) return;
var h = open ? fitRoad(row, li) : 0;
S.edOpen = open; row.classList.toggle('open', open); if (open) edWarm(row);
if (row._move) row._move(open);
var t0 = 0;
requestAnimationFrame(function keep(t) {
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
function partners() {
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
var cards = card('w') + card('m');
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
if (!gl) stage.classList.add('op-flat');
var geo = { cx: [.3, .7], top: .55, floor: .2, cw: .2 }, SCALE = .6;
var fitKey = '';
function fit() {
var vh = window.innerHeight, key = window.innerWidth + 'x' + vh; if (key === fitKey) return false; fitKey = key;
var top = stage.getBoundingClientRect().top + window.scrollY, avail = Math.max(440, Math.round(vh - Math.min(top, vh * 0.35)));
stage.style.setProperty('--opv', avail + 'px'); stage.style.removeProperty('--cw'); stage.classList.toggle('op-short', avail < 600);
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
if (!raf && gl) draw(performance.now());
}
var t0 = 0, played = false, on = false, raf = 0, nv = -1, tl = -1;
function neonAt(s) { if (s < .15) return 0; if (s < .22) return .9; if (s < .3) return .1; if (s < .38) return 1; if (s < .43) return .3; return Math.min(1, .8 + (s - .43) * 2); }
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
if (ln.toFixed(2) !== nv) { nv = ln.toFixed(2); stage.style.setProperty('--nv', nv); }
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
if (on && !reduce) raf = requestAnimationFrame(frame);
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
if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitKey = ''; measure(); });
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
function render() {
var res = phase() === 'results';
var html = nav() +
(res ? opener() + total7s() + standings() + votesSection() + how() + legacy() + h2h() + partners() + hof() + follow(true)
: heroVote() + how() + legacy() + h2h() + partners() + hof() + follow(false)) +
(D.preview ? '<div class="notice">Preview · data from the award sheet on ' + e(day(D.updated)) + '. The ' + live().length + ' votes entered so far are shown as posted.</div>' : '');
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
function cachedImgs(box) { Array.prototype.forEach.call(box.querySelectorAll('img:not(.ok)'), function (im) { if (im.complete && im.naturalWidth) im.classList.add('ok'); }); }
function rerender(keepY) { var y = window.scrollY; render(); if (keepY) window.scrollTo(0, y); }
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
var net = navigator.connection; if (net && (net.saveData || /2g|3g/.test(net.effectiveType || ''))) return;
var still = APP.querySelector('.hero-media img');
v.style.opacity = '0';
v.addEventListener('playing', function () { v.style.opacity = ''; if (still) still.style.visibility = 'hidden'; }, { once: true });
var play = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
var go = function () {
v.src = v.getAttribute('data-src'); play();
if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) play(); else v.pause(); }).observe(v);
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
var fp = ev.target.closest('[data-fp]'), big = APP.querySelector('.fnode.big');
if (big && big !== fp) { big.classList.remove('big'); big.setAttribute('aria-expanded', 'false'); }
if (fp) { var on = !fp.classList.contains('big'); fp.classList.toggle('big', on); fp.setAttribute('aria-expanded', String(on)); return; }
var tp = ev.target.closest('.tip');
if (tp) {
Array.prototype.forEach.call(APP.querySelectorAll('.tip.on'), function (x) { if (x !== tp) x.classList.remove('on'); });
tp.classList.toggle('on'); clearTimeout(tp._t); tp._t = setTimeout(function () { tp.classList.remove('on'); }, 2200);
return;
}
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
if (t.hasAttribute('data-eo') || t.hasAttribute('data-ey')) {
var el = t.closest('.ed'), rail = el && el.parentNode;
if (el && !el.classList.contains('on')) rail.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - rail.clientWidth / 2, behavior: reduced() ? 'auto' : 'smooth' });
if (t.hasAttribute('data-eo')) edOpen(!S.edOpen, el);
return;
}
if (t.hasAttribute('data-vf')) { setFilter(t.getAttribute('data-vf')); return; }
if (t.hasAttribute('data-hc-go')) {
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
var ticking = false;
window.addEventListener('scroll', function () {
if (ticking) return; ticking = true;
requestAnimationFrame(function () {
ticking = false; var links = APP.querySelectorAll('.nav-links a'); var navH = (APP.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight, cur = null;
Array.prototype.forEach.call(links, function (a) { var el = APP.querySelector('#tpx-' + a.getAttribute('data-go')); if (el && el.getBoundingClientRect().top - OPT.offset - navH < 120) cur = a; });
Array.prototype.forEach.call(links, function (a, i) { a.setAttribute('aria-current', String(cur ? a === cur : i === 0)); });
});
}, { passive: true });
function start(data) {
D = data;
if (!S.award) S.award = live('w').length || !live('m').length ? 'w' : 'm';
render();
}
var KEY = 'tpax-x-data';
try { var cached = JSON.parse(localStorage.getItem(KEY) || 'null'); if (cached && cached.v === 1) start(cached); } catch (er) {}
fetch(/^(blob|data):/.test(OPT.data) ? OPT.data : OPT.data + (OPT.data.indexOf('?') < 0 ? '?' : '&') + 't=' + Math.floor(Date.now() / 60000), { cache: 'no-store' })
.then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
.then(function (d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (er) {} if (!D || d.updated !== D.updated || OPT.phase) start(d); })
.catch(function () { if (!D) APP.innerHTML = '<div class="wrap" style="padding:60px 16px;color:#9aa0a6">The TPA X page could not load. Please refresh.</div>'; });
})();
