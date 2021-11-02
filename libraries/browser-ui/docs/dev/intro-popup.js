!function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function i(e){e.forEach(n)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t}function a(e){return 0===Object.keys(e).length}const c="undefined"!=typeof window;let d=c?()=>window.performance.now():()=>Date.now(),u=c?e=>requestAnimationFrame(e):e;const m=new Set;function f(e){m.forEach((t=>{t.c(e)||(m.delete(t),t.f())})),0!==m.size&&u(f)}let p=!1;const h=new Set;function g(e,t){p&&h.delete(t),t.parentNode!==e&&e.appendChild(t)}function b(e,t,n){p&&h.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function C(e){p?h.add(e):e.parentNode&&e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function y(){return v(" ")}function V(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function L(e,t,n){e.classList[n?"add":"remove"](t)}function z(e){const t={};for(const n of e)t[n.name]=n.value;return t}const _=new Set;let M,S=0;function E(e,t,n,o,i,r,s,l=0){const a=16.666/o;let c="{\n";for(let e=0;e<=1;e+=a){const o=t+(n-t)*r(e);c+=100*e+`%{${s(o,1-o)}}\n`}const d=c+`100% {${s(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${l}`,m=e.ownerDocument;_.add(m);const f=m.__svelte_stylesheet||(m.__svelte_stylesheet=m.head.appendChild(x("style")).sheet),p=m.__svelte_rules||(m.__svelte_rules={});p[u]||(p[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${u} ${o}ms linear ${i}ms 1 both`,S+=1,u}function N(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-o.length;i&&(e.style.animation=o.join(", "),S-=i,S||u((()=>{S||(_.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),_.clear())})))}function P(e){M=e}function H(){if(!M)throw new Error("Function called outside component initialization");return M}const A=[],B=[],Z=[],F=[],D=Promise.resolve();let R=!1;function j(e){Z.push(e)}let T=!1;const O=new Set;function I(){if(!T){T=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];P(t),q(t.$$)}for(P(null),A.length=0;B.length;)B.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];O.has(t)||(O.add(t),t())}Z.length=0}while(A.length);for(;F.length;)F.pop()();R=!1,T=!1,O.clear()}}function q(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}let G;function U(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Q=new Set;let Y;function J(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function K(e,t,n,o){if(e&&e.o){if(Q.has(e))return;Q.add(e),Y.c.push((()=>{Q.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const W={duration:0};function X(n,o,s,l){let a=o(n,s),c=l?0:1,p=null,h=null,g=null;function b(){g&&N(n,g)}function C(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function x(o){const{delay:r=0,duration:s=300,easing:l=t,tick:x=e,css:w}=a||W,v={start:d()+r,b:o};o||(v.group=Y,Y.r+=1),p||h?h=v:(w&&(b(),g=E(n,c,o,s,r,l,w)),o&&x(0,1),p=C(v,s),j((()=>U(n,o,"start"))),function(e){let t;0===m.size&&u(f),new Promise((n=>{m.add(t={c:e,f:n})}))}((e=>{if(h&&e>h.start&&(p=C(h,s),h=null,U(n,p.b,"start"),w&&(b(),g=E(n,c,p.b,p.duration,0,l,a.css))),p)if(e>=p.end)x(c=p.b,1-c),U(n,p.b,"end"),h||(p.b?b():--p.group.r||i(p.group.c)),p=null;else if(e>=p.start){const t=e-p.start;c=p.a+p.d*l(t/p.duration),x(c,1-c)}return!(!p&&!h)})))}return{run(e){r(a)?(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then((()=>{a=a(),x(e)})):x(e)},end(){b(),p=h=null}}}const ee="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function te(e){e&&e.c()}function ne(e,t,o,s){const{fragment:l,on_mount:a,on_destroy:c,after_update:d}=e.$$;l&&l.m(t,o),s||j((()=>{const t=a.map(n).filter(r);c?c.push(...t):i(t),e.$$.on_mount=[]})),d.forEach(j)}function oe(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){-1===e.$$.dirty[0]&&(A.push(e),R||(R=!0,D.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(t,n,r,s,l,a,c=[-1]){const d=M;P(t);const u=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:c,skip_bound:!1};let m=!1;if(u.ctx=r?r(t,n.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return u.ctx&&l(u.ctx[e],u.ctx[e]=i)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](i),m&&ie(t,e)),n})):[],u.update(),m=!0,i(u.before_update),u.fragment=!!s&&s(u.ctx),n.target){if(n.hydrate){p=!0;const e=function(e){return Array.from(e.childNodes)}(n.target);u.fragment&&u.fragment.l(e),e.forEach(C)}else u.fragment&&u.fragment.c();n.intro&&J(t.$$.fragment),ne(t,n.target,n.anchor,n.customElement),function(){p=!1;for(const e of h)e.parentNode.removeChild(e);h.clear()}(),I()}P(d)}let se;"function"==typeof HTMLElement&&(se=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(n).filter(r);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!a(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class le{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!a(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(e,{delay:n=0,duration:o=400,easing:i=t}={}){const r=+getComputedStyle(e).opacity;return{delay:n,duration:o,easing:i,css:e=>"opacity: "+e*r}}var ce,de,ue,me,fe,pe=(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ClientState=void 0,(n=t.ClientState||(t.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(ce={exports:{}},ce.exports),ce.exports);function he(e){let t,n,o,i;return{c(){t=w("svg"),n=w("g"),o=w("path"),i=w("rect"),$(o,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),$(i,"x","20"),$(i,"y","1"),$(i,"width","16"),$(i,"height","37"),$(i,"rx","8"),$(n,"fill","#000"),$(n,"fill-rule","evenodd"),$(t,"class","buttonIconEl"),$(t,"viewBox","0 0 56 56"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,r){b(e,t,r),g(t,n),g(n,o),g(n,i)},d(e){e&&C(t)}}}function ge(e){let t,n,o,i;return{c(){t=w("svg"),n=w("g"),o=w("path"),i=w("path"),$(o,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),$(o,"fill-rule","nonzero"),$(i,"d","M37 13.081V31a8 8 0 11-16 0v-1.919l16-16zM26 1a8 8 0 018 8v1.319L18 26.318V9a8 8 0 018-8zM37.969 7.932l3.74-7.35 3.018 2.625zM39.654 10.608l7.531-3.359.695 3.94z"),$(n,"fill","#000"),$(n,"fill-rule","evenodd"),$(t,"class","buttonIconEl"),$(t,"viewBox","0 0 56 56"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,r){b(e,t,r),g(t,n),g(n,o),g(n,i)},d(e){e&&C(t)}}}function be(e){let t,n,o,i;return{c(){t=w("svg"),n=w("g"),o=w("path"),i=w("path"),$(o,"d","M36 14.828V30a8 8 0 01-15.961.79l15.96-15.962zM28 1a8 8 0 018 8v.172L20 25.173V9a8 8 0 018-8z"),$(i,"d","M42 26h4v4c0 9.265-7 16.895-16 17.89V55h-4v-7.11c-8.892-.982-15.833-8.444-15.997-17.56L10 30v-4h4v4c0 7.732 6.268 14 14 14 7.628 0 13.83-6.1 13.997-13.687L42 30v-4z"),$(n,"fill","#000"),$(n,"fill-rule","nonzero"),$(t,"class","buttonIconEl"),$(t,"viewBox","0 0 56 56"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,r){b(e,t,r),g(t,n),g(n,o),g(n,i)},d(e){e&&C(t)}}}function Ce(e){let t,n,o,i;return{c(){t=w("svg"),n=w("g"),o=w("path"),i=w("rect"),$(o,"d","M52 28c0 13.255-10.745 24-24 24S4 41.255 4 28c0-8.921 4.867-16.705 12.091-20.842l1.984 3.474C12.055 14.08 8 20.566 8 28c0 11.046 8.954 20 20 20s20-8.954 20-20c0-7.434-4.056-13.92-10.075-17.368L39.91 7.16C47.133 11.296 52 19.079 52 28z"),$(o,"fill-rule","nonzero"),$(i,"x","24"),$(i,"y","1"),$(i,"width","8"),$(i,"height","23"),$(i,"rx","4"),$(n,"fill","#000"),$(n,"fill-rule","evenodd"),$(t,"class","buttonIconEl"),$(t,"viewBox","0 0 56 56"),$(t,"xmlns","http://www.w3.org/2000/svg")},m(e,r){b(e,t,r),g(t,n),g(n,o),g(n,i)},d(e){e&&C(t)}}}function xe(t){let n,o,i,r,s=t[0]===ue.Mic&&he(),l=t[0]===ue.Error&&ge(),a=t[0]===ue.Denied&&be(),c=t[0]===ue.Poweron&&Ce();return{c(){n=x("div"),s&&s.c(),o=y(),l&&l.c(),i=y(),a&&a.c(),r=y(),c&&c.c(),k(n,"position","absolute"),k(n,"width","60%"),k(n,"height","60%"),k(n,"top","50%"),k(n,"left","50%"),k(n,"transform","translate(-50%, -50%)"),k(n,"pointer-events","none"),k(n,"transition","0.25s"),k(n,"opacity","var(--icon-opacity)")},m(e,t){b(e,n,t),s&&s.m(n,null),g(n,o),l&&l.m(n,null),g(n,i),a&&a.m(n,null),g(n,r),c&&c.m(n,null)},p(e,[t]){e[0]===ue.Mic?s||(s=he(),s.c(),s.m(n,o)):s&&(s.d(1),s=null),e[0]===ue.Error?l||(l=ge(),l.c(),l.m(n,i)):l&&(l.d(1),l=null),e[0]===ue.Denied?a||(a=be(),a.c(),a.m(n,r)):a&&(a.d(1),a=null),e[0]===ue.Poweron?c||(c=Ce(),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:e,o:e,d(e){e&&C(n),s&&s.d(),l&&l.d(),a&&a.d(),c&&c.d()}}}function we(e,t,n){let{icon:o=ue.Mic}=t;return e.$$set=e=>{"icon"in e&&n(0,o=e.icon)},[o]}!function(e){e.Failed="Failed",e.NoBrowserSupport="NoBrowserSupport",e.NoAudioConsent="NoAudioConsent",e.Idle="Idle",e.Connecting="Connecting",e.Ready="Ready",e.Recording="Recording",e.Loading="Loading"}(de||(de={})),function(e){e.Poweron="poweron",e.Mic="mic",e.Error="error",e.Denied="denied"}(ue||(ue={})),function(e){e.Hold="hold",e.Click="click",e.Noninteractive="noninteractive"}(me||(me={})),function(e){e.None="none",e.Connecting="connecting",e.Busy="busy"}(fe||(fe={})),pe.ClientState.Disconnected,ue.Poweron,me.Click,fe.None,pe.ClientState.Disconnecting,ue.Poweron,me.Noninteractive,fe.Connecting,pe.ClientState.Connecting,ue.Poweron,me.Noninteractive,fe.Connecting,pe.ClientState.Connected,ue.Mic,me.Hold,fe.None,pe.ClientState.Starting,ue.Mic,me.Hold,fe.Connecting,pe.ClientState.Recording,ue.Mic,me.Hold,fe.None,pe.ClientState.Stopping,ue.Mic,me.Noninteractive,fe.Busy,pe.ClientState.Failed,ue.Error,me.Click,fe.None,pe.ClientState.NoBrowserSupport,ue.Error,me.Click,fe.None,pe.ClientState.NoAudioConsent,ue.Denied,me.Click,fe.None,de.Idle,ue.Poweron,me.Click,fe.None,de.Connecting,ue.Poweron,me.Noninteractive,fe.Connecting,de.Ready,ue.Mic,me.Hold,fe.None,de.Recording,ue.Mic,me.Hold,fe.None,de.Loading,ue.Mic,me.Noninteractive,fe.Busy,de.Failed,ue.Error,me.Click,fe.None,de.NoBrowserSupport,ue.Error,me.Click,fe.None,de.NoAudioConsent,ue.Denied,me.Click,fe.None;class ve extends le{constructor(e){super(),re(this,e,we,xe,s,{icon:0})}}function ye(t){let n,o,i,r,s,l,a,c,d,u,m;return{c(){n=w("svg"),o=w("path"),i=w("path"),r=w("path"),s=w("defs"),l=w("linearGradient"),a=w("stop"),c=w("stop"),d=w("linearGradient"),u=w("stop"),m=w("stop"),$(o,"fill-rule","evenodd"),$(o,"clip-rule","evenodd"),$(o,"d","M134.88 10.0009H138.714L142.333 20.2854L145.864 10.0009H149.632L143.684 24.7084C142.626 27.3015 140.938 29.1472 138.621 30.2455L136.873 27.7812C138.476 27.0848 139.641 25.9476 140.367 24.3696L134.88 10.0009ZM133.172 4.84959V24.2862H129.552V4.84959H133.172ZM112.699 24.2862V4.84959H116.319V11.5625C117.81 10.5273 119.434 10.0106 121.191 10.0122C124.494 10.0122 126.145 11.7837 126.143 15.3267V24.2862H122.528V15.2828C122.528 13.7093 121.741 12.9218 120.166 12.9201C118.899 12.9201 117.617 13.522 116.319 14.7257V24.2862H112.699ZM110.314 23.8777C109.131 24.1521 107.811 24.2882 106.355 24.2861C101.077 24.2861 98.4392 21.8141 98.4401 16.87C98.4401 12.2889 101.078 9.99922 106.355 10.0009C107.813 10.0009 109.133 10.137 110.314 10.4093V13.2638C109.105 12.9918 107.869 12.8563 106.63 12.8598C103.578 12.8598 102.053 14.1965 102.055 16.87C102.055 19.9098 103.58 21.4289 106.63 21.4272C107.87 21.4318 109.106 21.2947 110.314 21.0188V23.8777ZM87.2328 15.9101H93.2092C93.3393 13.8636 92.3843 12.8389 90.3441 12.836C88.4345 12.8364 87.3974 13.8607 87.2328 15.9089V15.9101ZM96.6096 18.5451H87.2328C87.2328 20.4665 88.8071 21.4272 91.9555 21.4272C93.4107 21.4272 94.8627 21.2905 96.2922 21.0188V23.8777C95.0299 24.1521 93.4025 24.2882 91.4102 24.2861C86.2119 24.2861 83.6142 21.8511 83.6171 16.981C83.6171 12.3259 85.9959 9.99922 90.7534 10.0009C95.511 10.0026 97.463 12.8506 96.6096 18.5451ZM72.4099 15.9101H78.3863C78.5169 13.8636 77.5621 12.8389 75.5219 12.836C73.6122 12.8364 72.5749 13.8607 72.4099 15.9089V15.9101ZM81.7872 18.5451H72.4099C72.4099 20.4665 73.9841 21.4272 77.1325 21.4272C78.588 21.4272 80.0402 21.2905 81.4699 21.0188V23.8777C80.2071 24.1521 78.5798 24.2882 76.5879 24.2861C71.3891 24.2861 68.7912 21.8511 68.7942 16.981C68.7942 12.3259 71.1732 9.99922 75.9311 10.0009C80.689 10.0026 82.6411 12.8506 81.7872 18.5451ZM53.2787 10.5856C55.1791 10.1962 57.2814 10.0013 59.5856 10.0009C64.6353 10.0009 67.1602 12.2657 67.1602 16.7953C67.1602 21.7942 64.8482 24.2928 60.2241 24.2912C59.0807 24.2931 57.9489 24.0623 56.8981 23.613V29.4657H53.2787V10.5856ZM56.8981 20.5609C57.8905 21.0528 58.9943 21.2943 60.2102 21.2943C62.4599 21.2943 63.5839 19.7859 63.5822 16.7691C63.5822 14.2027 62.2998 12.9201 59.7348 12.9214C58.5239 12.9214 57.5781 12.9841 56.9012 13.1096L56.8981 20.5609ZM36.0182 23.4744V20.212C37.9744 20.936 40.1855 21.298 42.6514 21.298C45.6424 21.298 47.1394 20.3017 47.1423 18.3092C47.1423 16.8562 46.2198 16.1322 44.3843 16.1322H41.0507C37.0585 16.1322 35.0615 14.3191 35.0598 10.6929C35.0598 6.70661 37.9031 4.71261 43.5896 4.71094C45.7725 4.71094 47.8423 5.02797 49.799 5.66203V8.92436C47.8112 8.19474 45.708 7.8269 43.5896 7.83838C40.3152 7.83838 38.678 8.78969 38.678 10.6923C38.678 12.1403 39.4702 12.8693 41.0538 12.8693H44.3843C48.633 12.8693 50.7572 14.6824 50.7567 18.3086C50.7567 22.3878 48.0549 24.4267 42.6514 24.4255C40.1855 24.4255 37.9744 24.1084 36.0182 23.4744Z"),$(o,"fill","#302666"),$(i,"fill-rule","evenodd"),$(i,"clip-rule","evenodd"),$(i,"d","M14.7612 0C22.9132 0 29.5224 6.5874 29.5224 14.7068C29.5224 23.1268 22.7085 30.3284 14.8166 31.8717V29.4131C17.8347 28.4538 23.9585 25.3169 26.214 18.8632C26.4118 18.321 26.5705 17.7654 26.6888 17.2006L26.6982 17.1599L26.7058 17.1229L26.7134 17.0858L26.7203 17.0501L26.7272 17.0149L26.7341 16.9798L26.7411 16.9453V16.9415L26.7474 16.9077V16.9039L26.753 16.87V16.8656L26.7593 16.8324V16.8274L26.765 16.7954V16.7891L26.7707 16.7577V16.7508L26.7763 16.7201V16.7132L26.782 16.6824V16.6749L26.787 16.6448V16.6366L26.7921 16.6065V16.5984L26.7965 16.5689V16.5595L26.8003 16.5312V16.5212L26.804 16.493V16.4829L26.8078 16.4553V16.444L26.8122 16.4177V16.4058L26.816 16.3794V16.3675L26.8191 16.3418V16.3286L26.8223 16.3035V16.2903L26.8254 16.2659V16.2514L26.8286 16.227V16.2125V16.1893V16.1736V16.1511V16.1347L26.8317 16.1128V16.0958V16.0745V16.0576V16.0362V16.0187V15.998V15.9798V15.9597V15.9409V15.9208V15.9014V15.8825V15.8625V15.8443V15.8236V15.806V15.7847V15.7671V15.7451V15.7288V15.7056V15.6899V15.6667V15.6517V15.6272V15.6128V15.5883V15.5739V15.5488V15.5356V15.5093V15.4967V15.4704V15.4578V15.4308V15.4189V15.3913V15.3706V15.3424V15.3317V15.3028V15.2928V15.2633V15.2539V15.2238V15.215V15.1843V15.1761V15.1447V15.1372V15.1046V15.0977V15.0651V15.0588V15.0255V14.7062V14.6667C26.9262 7.96134 21.4523 2.54336 14.7222 2.56469C7.99203 2.58603 2.55277 8.04039 2.57417 14.7432C2.59621 21.4385 8.04807 26.8515 14.7612 26.8515H14.7895L14.8154 29.4162H14.7612C6.61175 29.4137 0 22.8288 0 14.7068C0 6.58489 6.61175 0 14.7612 0Z"),$(i,"fill","url(#paint0_linear)"),$(r,"fill-rule","evenodd"),$(r,"clip-rule","evenodd"),$(r,"d","M12.3985 8.87104V16.3368C12.3985 16.8506 11.9804 17.2672 11.4647 17.2672C10.9489 17.2672 10.5308 16.8506 10.5308 16.3368V8.87104C10.5308 8.3572 10.9489 7.94065 11.4647 7.94065C11.9804 7.94065 12.3985 8.3572 12.3985 8.87104ZM18.9914 13.5305V20.9962C18.9914 21.5101 18.5733 21.9266 18.0576 21.9266C17.5418 21.9266 17.1237 21.5101 17.1237 20.9962V13.5305C17.1237 13.0167 17.5418 12.6001 18.0576 12.6001C18.5733 12.6001 18.9914 13.0167 18.9914 13.5305ZM22.2909 16.4082V18.1216C22.2997 18.4596 22.1237 18.7758 21.8313 18.9474C21.5388 19.119 21.1759 19.119 20.8835 18.9474C20.591 18.7758 20.415 18.4596 20.4239 18.1216V16.4082C20.415 16.0702 20.591 15.754 20.8835 15.5824C21.1759 15.4108 21.5388 15.4108 21.8313 15.5824C22.1237 15.754 22.2997 16.0702 22.2909 16.4082ZM15.6949 5.94809V12.8542C15.6949 13.368 15.2768 13.7846 14.7611 13.7846C14.2454 13.7846 13.8273 13.368 13.8273 12.8542V5.94809C13.8273 5.43425 14.2454 5.0177 14.7611 5.0177C15.2768 5.0177 15.6949 5.43425 15.6949 5.94809ZM15.6949 16.5588V23.4637C15.6949 23.9775 15.2768 24.3941 14.7611 24.3941C14.2454 24.3941 13.8273 23.9775 13.8273 23.4637V16.5588C13.8273 16.045 14.2454 15.6284 14.7611 15.6284C15.2768 15.6284 15.6949 16.045 15.6949 16.5588ZM9.10148 11.7487V13.4615C9.11029 13.7995 8.93431 14.1157 8.64186 14.2873C8.3494 14.4589 7.98652 14.4589 7.69406 14.2873C7.40161 14.1157 7.22563 13.7995 7.23445 13.4615V11.7487C7.22563 11.4107 7.40161 11.0945 7.69406 10.9229C7.98652 10.7513 8.3494 10.7513 8.64186 10.9229C8.93431 11.0945 9.11029 11.4107 9.10148 11.7487Z"),$(r,"fill","url(#paint1_linear)"),$(a,"stop-color","#53A3F9"),$(c,"offset","1"),$(c,"stop-color","#15E8B5"),$(l,"id","paint0_linear"),$(l,"x1","17.4837"),$(l,"y1","24.6178"),$(l,"x2","23.4572"),$(l,"y2","12.6602"),$(l,"gradientUnits","userSpaceOnUse"),$(u,"stop-color","#53A3F9"),$(m,"offset","1"),$(m,"stop-color","#15E8B5"),$(d,"id","paint1_linear"),$(d,"x1","16.1513"),$(d,"y1","19.984"),$(d,"x2","20.1445"),$(d,"y2","13.2781"),$(d,"gradientUnits","userSpaceOnUse"),$(n,"width","150"),$(n,"height","32"),$(n,"viewBox","0 0 150 32"),$(n,"fill","none"),$(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){b(e,n,t),g(n,o),g(n,i),g(n,r),g(n,s),g(s,l),g(l,a),g(l,c),g(s,d),g(d,u),g(d,m)},p:e,i:e,o:e,d(e){e&&C(n)}}}class Ve extends le{constructor(e){super(),re(this,e,null,ye,s,{})}}const{window:$e}=ee;function ke(e){let t,n,o,r,s,l,a,c,d,u,m,f,p,h,w,z,_,M,S,E,N,P,H,A,B,Z,F,D,R,T,O,I,q,G,U,Q,Y,W,ee,ie,re,se,le,ae,ce,de,ue,me,fe,pe,he,ge,be,Ce,xe,we,ye,$e,ke,Le,ze,_e,Me,Se,Ee,Ne,Pe,He;return R=new ve({}),W=new Ve({}),de=new ve({}),we=new ve({}),{c(){t=x("modalbg"),o=y(),r=x("modalcontent"),s=x("div"),l=x("div"),a=x("button"),c=y(),d=x("div"),u=x("main"),m=x("div"),f=x("video"),p=x("source"),w=v("\n                  Your browser does not support the video tag."),z=y(),_=x("div"),M=x("h2"),M.textContent="Find your favourites faster with voice search",S=y(),E=x("p"),N=v("Search Evolve Clothing Gallery's "),P=x("b"),P.textContent="categories",H=v(", "),A=x("b"),A.textContent="designers",B=v(" and "),Z=x("b"),Z.textContent="colors",F=v(" by pressing and holding the\n                "),D=x("span"),te(R.$$.fragment),T=y(),O=x("b"),O.textContent="push‑to‑talk button",I=v(".\n                "),q=x("a"),q.textContent="More info",G=y(),U=x("div"),Q=x("div"),Y=x("div"),te(W.$$.fragment),ee=y(),ie=x("h3"),ie.textContent="Voice Search Quick Start",re=y(),se=x("ul"),le=x("li"),ae=v("Press and hold the\n                  "),ce=x("span"),te(de.$$.fragment),ue=v("\n                  push‑to‑talk button."),me=y(),fe=x("li"),fe.textContent="Allow your browser to use the mic on the 1st time.",pe=y(),he=x("li"),he.innerHTML="Make your first search, e.g. <i>&quot;Show me new arrivals&quot;</i>",ge=y(),be=x("li"),Ce=v("Release the\n                  "),xe=x("span"),te(we.$$.fragment),ye=v("\n                  push‑to‑talk button to stop listening."),$e=y(),ke=x("li"),ke.textContent="Speechly detects your voice command and your search results are shown.",Le=v("\n              Learn more at "),ze=x("a"),ze.textContent="speechly.com",_e=y(),Me=x("div"),Se=x("button"),Se.textContent="Got it!",$(a,"class","close"),p.src!==(h=e[0])&&$(p,"src",h),$(p,"type","video/mp4"),$(f,"class","usageImage"),$(f,"width","100%"),$(f,"height","auto"),f.autoplay=!0,f.muted=!0,f.loop=!0,$(m,"class","imageContainer"),k(D,"width","1.75rem"),k(D,"height","1.75rem"),k(D,"vertical-align","middle"),k(D,"margin","-0.25rem -0.5rem 0 -0.5rem"),k(D,"position","relative"),k(D,"display","inline-block"),$(q,"class","more"),$(q,"href","#info"),$(_,"class","bodyTextContainer"),$(Y,"class","sidePanelLogo"),k(ce,"width","1.5rem"),k(ce,"height","1.5rem"),k(ce,"vertical-align","middle"),k(ce,"margin","-0.20rem -0.35rem 0 -0.35rem"),k(ce,"position","relative"),k(ce,"display","inline-block"),k(xe,"width","1.5rem"),k(xe,"height","1.5rem"),k(xe,"vertical-align","middle"),k(xe,"margin","-0.20rem -0.35rem 0 -0.35rem"),k(xe,"position","relative"),k(xe,"display","inline-block"),$(se,"class","mt-l mb-l"),$(ze,"href","https://speechly.com/"),$(Q,"class","sidePanelText"),$(U,"class","sidePanel"),L(U,"forceVisible",e[3]),$(d,"class","layout"),$(Se,"class","wide"),$(Me,"class","buttonLayout"),$(l,"class","primaryLayout"),$(s,"class","page"),$(r,"class",e[2])},m(n,i){b(n,t,i),b(n,o,i),b(n,r,i),g(r,s),g(s,l),g(l,a),g(l,c),g(l,d),g(d,u),g(u,m),g(m,f),g(f,p),g(f,w),g(u,z),g(u,_),g(_,M),g(_,S),g(_,E),g(E,N),g(E,P),g(E,H),g(E,A),g(E,B),g(E,Z),g(E,F),g(E,D),ne(R,D,null),g(E,T),g(E,O),g(E,I),g(E,q),g(d,G),g(d,U),g(U,Q),g(Q,Y),ne(W,Y,null),g(Q,ee),g(Q,ie),g(Q,re),g(Q,se),g(se,le),g(le,ae),g(le,ce),ne(de,ce,null),g(le,ue),g(se,me),g(se,fe),g(se,pe),g(se,he),g(se,ge),g(se,be),g(be,Ce),g(be,xe),ne(we,xe,null),g(be,ye),g(se,$e),g(se,ke),g(Q,Le),g(Q,ze),g(l,_e),g(l,Me),g(Me,Se),Ne=!0,Pe||(He=[V(t,"click",e[6]),V(a,"click",e[6]),V(q,"click",e[11]),V(Se,"click",e[6]),V(l,"click",e[7]),V(r,"click",e[6])],Pe=!0)},p(e,t){(!Ne||1&t&&p.src!==(h=e[0]))&&$(p,"src",h),8&t&&L(U,"forceVisible",e[3]),(!Ne||4&t)&&$(r,"class",e[2])},i(o){Ne||(j((()=>{n||(n=X(t,e[5],{},!0)),n.run(1)})),J(R.$$.fragment,o),J(W.$$.fragment,o),J(de.$$.fragment,o),J(we.$$.fragment,o),j((()=>{Ee||(Ee=X(r,e[5],{},!0)),Ee.run(1)})),Ne=!0)},o(o){n||(n=X(t,e[5],{},!1)),n.run(0),K(R.$$.fragment,o),K(W.$$.fragment,o),K(de.$$.fragment,o),K(we.$$.fragment,o),Ee||(Ee=X(r,e[5],{},!1)),Ee.run(0),Ne=!1},d(e){e&&C(t),e&&n&&n.end(),e&&C(o),e&&C(r),oe(R),oe(W),oe(de),oe(we),e&&Ee&&Ee.end(),Pe=!1,i(He)}}}function Le(t){let n,o,r,s,l,a,c=t[4]&&ke(t);return{c(){n=x("link"),o=y(),r=x("modal"),c&&c.c(),this.c=e,$(n,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),$(n,"rel","stylesheet"),k(r,"--remsize",t[1])},m(e,i){g(document.head,n),b(e,o,i),b(e,r,i),c&&c.m(r,null),s=!0,l||(a=V($e,"keydown",t[8]),l=!0)},p(e,[t]){e[4]?c?(c.p(e,t),16&t&&J(c,1)):(c=ke(e),c.c(),J(c,1),c.m(r,null)):c&&(Y={r:0,c:[],p:Y},K(c,1,1,(()=>{c=null})),Y.r||i(Y.c),Y=Y.p),(!s||2&t)&&k(r,"--remsize",e[1])},i(e){s||(J(c),s=!0)},o(e){K(c),s=!1},d(e){C(n),e&&C(o),e&&C(r),c&&c.d(),l=!1,a()}}}function ze(e,t,n){let o,{video:i=""}=t,{hide:r}=t,{remsize:s="1.0rem"}=t,{position:l="fixed"}=t;const a=(()=>{const e=H();return(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,composed:!0}))}})(),c=(d=ae,function(e,t){if(!e.hasOwnProperty("ownerDocument")){Object.defineProperty(e,"ownerDocument",{get:function(){return e.parentElement}});let t=e;for(;t.parentElement;)t=t.parentElement;e.parentElement.head=t}return d(e,t)});var d;let u=!1,m=!1;!function(e){H().$$.on_mount.push(e)}((()=>{n(10,u=!0)}));const f=()=>{n(4,o=!1),a("speechlyintroclosed"),window.postMessage({type:"speechlyintroclosed"},"*")};return e.$$set=e=>{"video"in e&&n(0,i=e.video),"hide"in e&&n(9,r=e.hide),"remsize"in e&&n(1,s=e.remsize),"position"in e&&n(2,l=e.position)},e.$$.update=()=>{1536&e.$$.dirty&&n(4,o=u&&(void 0===r||"true"!==r))},[i,s,l,m,o,c,f,e=>{e.stopPropagation()},e=>{u&&"Escape"===e.key&&(e.preventDefault(),f())},r,u,()=>{n(3,m=!m)}]}class _e extends se{constructor(e){super(),this.shadowRoot.innerHTML="<style>modal{font-size:var(--remsize);pointer-events:none;height:100%}modalbg{position:fixed;top:0;bottom:0;left:0;right:0;overflow:hidden;z-index:2000;pointer-events:auto;background:linear-gradient(180deg, #413783f0, #302865c0 80%)}modalcontent{z-index:2001;pointer-events:auto}modalcontent.fixed{position:fixed;top:0;left:0;right:0;bottom:0;overflow-x:hidden;overflow-y:auto}modalcontent.absolute{position:absolute;top:0;left:0;right:0;height:100vh}.page{box-sizing:border-box;width:100%;min-height:100%;padding:2rem 1rem;display:flex;flex-direction:row;align-items:center;justify-content:center}h2,h3{font-family:'Saira Condensed', sans-serif;padding:0;margin:0;text-transform:uppercase;color:#302865;line-height:120%}h2{font-size:135%}p{line-height:150%}b{color:#302865}ul{min-width:8rem;padding:0 1rem 0 0;list-style-type:none}li{border-left:2px solid #38E7B6;margin:0.75rem 0;padding-left:6px;line-height:135%}.primaryLayout{position:relative;box-sizing:border-box;width:100%;background-color:#ffffff;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;border-radius:1rem;box-shadow:0 0.25rem 1.25rem #0008}.layout{box-sizing:border-box;width:100%;display:flex;flex-direction:column;align-self:stretch;align-items:flex-start;justify-content:flex-start}.buttonLayout{box-sizing:border-box;width:100%;display:flex;flex-direction:column;align-self:stretch;align-items:center;justify-content:center;border-radius:0 0 1rem 1rem;background:linear-gradient(180deg, #d9e3eb, #F7FAFC 15%)}main{position:relative;box-sizing:border-box;width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;flex-grow:1}button.wide{box-sizing:border-box;min-width:12rem;max-width:100%;padding:0.75rem;margin:1rem;background-color:#302865;border:none;border-radius:10rem;transition:0.3s;font-family:'Saira Condensed', sans-serif;font-size:120%;text-transform:uppercase;color:#fff;line-height:120%}button.wide:hover{background-color:#6251a5;transition:0.3s}a,a:visited{color:#302865}a:hover{color:#6251a5}.sidePanel{box-sizing:border-box;width:100%;background:#F7FAFC;color:#728195;font-size:85%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;max-height:0rem;transition:0.5s;overflow:hidden}.sidePanelText{padding:0.75rem 0.75rem 1.5rem 0.75rem}.more{white-space:nowrap}.forceVisible{max-height:50rem;transition:0.5s}.mt-m{margin-top:0.75em}.mb-m{margin-bottom:0.75em}.mx-m{margin-left:0.75em;margin-right:0.75em}.mt-l{margin-top:1.5em}.mb-l{margin-bottom:1.5em}.imageContainer{box-sizing:border-box;width:100%;padding:1.0rem}.bodyTextContainer{padding:0 2.25rem}.sidePanelLogo{width:85%;padding:0.75rem 0 0.75rem 0}.usageImage{box-sizing:border-box;width:100%;border-radius:0.5rem;overflow:hidden}@media(max-width: 480px){.page{font-size:88%}.imageContainer{padding:0 0 1rem 0}.sidePanelText{padding:1.5rem 2.25rem}.sidePanelLogo{display:none}.usageImage{border-radius:1rem 1rem 0 0}}@media(min-width: 480px) and (max-width: 688px){.page{font-size:100%;padding:2rem 2rem}.primaryLayout{width:600px}.layout{flex-direction:row;justify-content:flex-start}.more{display:none}.sidePanel{max-height:50rem;width:11rem;flex-shrink:0;min-height:100%;align-self:stretch;flex-direction:column;border-radius:0 1rem 0 0}}@media(min-width: 688px){.page{padding:2rem 0;font-size:100%}.primaryLayout{width:600px}.layout{flex-direction:row;justify-content:flex-start}.more{display:none}.sidePanel{max-height:50rem;width:12.5rem;flex-shrink:0;min-height:100%;align-self:stretch;flex-direction:column;border-radius:0 1rem 0 0}}.close{--button-size:1.5rem;display:block;box-sizing:border-box;position:absolute;z-index:1000;top:0.25rem;right:0.25rem;margin:0;padding:0;width:var(--button-size);height:var(--button-size);border:0;color:black;border-radius:1.5rem;background:transparent;box-shadow:0 0 0 1px transparent;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close:before,.close:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:calc(var(--button-size) - 0.5rem);height:1px;background:#728195;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close:hover{background:#6251a5}.close:hover:before,.close:hover:after{height:2px;background:white}.close:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close:active{transform:scale(0.9)}.close:hover,.close:focus,.close:active{outline:none}</style>",re(this,{target:this.shadowRoot,props:z(this.attributes),customElement:!0},ze,Le,l,{video:0,hide:9,remsize:1,position:2}),e&&(e.target&&b(e.target,this,e.anchor),e.props&&(this.$set(e.props),I()))}static get observedAttributes(){return["video","hide","remsize","position"]}get video(){return this.$$.ctx[0]}set video(e){this.$set({video:e}),I()}get hide(){return this.$$.ctx[9]}set hide(e){this.$set({hide:e}),I()}get remsize(){return this.$$.ctx[1]}set remsize(e){this.$set({remsize:e}),I()}get position(){return this.$$.ctx[2]}set position(e){this.$set({position:e}),I()}}customElements.get("intro-popup")?console.warn("Skipping re-defining customElement intro-popup"):customElements.define("intro-popup",_e)}();
//# sourceMappingURL=intro-popup.js.map