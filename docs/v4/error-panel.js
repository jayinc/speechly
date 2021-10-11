!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function u(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e,n){t.classList[n?"add":"remove"](e)}function m(t){const e={};for(const n of t)e[n.name]=n.value;return e}let g;function C(t){g=t}const w=[],b=[],$=[],y=[],S=Promise.resolve();let x=!1;function v(t){$.push(t)}let N=!1;const k=new Set;function _(){if(!N){N=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];C(e),R(e.$$)}for(C(null),w.length=0;b.length;)b.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];k.has(e)||(k.add(e),e())}$.length=0}while(w.length);for(;y.length;)y.pop()();x=!1,N=!1,k.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const T=new Set;const E="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function A(t,e){-1===t.$$.dirty[0]&&(w.push(t),x||(x=!0,S.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(i,c,s,a,d,u,p=[-1]){const f=g;C(i);const h=i.$$={fragment:null,ctx:null,props:u,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:c.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let m=!1;if(h.ctx=s?s(i,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&d(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&A(i,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();c.intro&&((w=i.$$.fragment)&&w.i&&(T.delete(w),w.i(b))),function(t,n,i,c){const{fragment:s,on_mount:l,on_destroy:a,after_update:d}=t.$$;s&&s.m(n,i),c||v((()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(v)}(i,c.target,c.anchor,c.customElement),_()}var w,b;C(f)}let B;"function"==typeof HTMLElement&&(B=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var H,L,P,D,I,F=(function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.ClientState=void 0,(n=e.ClientState||(e.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(H={exports:{}},H.exports),H.exports);!function(t){t.Failed="Failed",t.NoBrowserSupport="NoBrowserSupport",t.NoAudioConsent="NoAudioConsent",t.Idle="Idle",t.Connecting="Connecting",t.Ready="Ready",t.Recording="Recording",t.Loading="Loading"}(L||(L={})),function(t){t.Poweron="poweron",t.Mic="mic",t.Error="error",t.Denied="denied"}(P||(P={})),function(t){t.Hold="hold",t.Click="click",t.Noninteractive="noninteractive"}(D||(D={})),function(t){t.None="none",t.Connecting="connecting",t.Busy="busy"}(I||(I={})),F.ClientState.Disconnected,P.Poweron,D.Click,I.None,F.ClientState.Disconnecting,P.Poweron,D.Noninteractive,I.Connecting,F.ClientState.Connecting,P.Poweron,D.Noninteractive,I.Connecting,F.ClientState.Connected,P.Mic,D.Hold,I.None,F.ClientState.Starting,P.Mic,D.Hold,I.Connecting,F.ClientState.Recording,P.Mic,D.Hold,I.None,F.ClientState.Stopping,P.Mic,D.Noninteractive,I.Busy,F.ClientState.Failed,P.Error,D.Click,I.None,F.ClientState.NoBrowserSupport,P.Error,D.Click,I.None,F.ClientState.NoAudioConsent,P.Denied,D.Click,I.None,L.Idle,P.Poweron,D.Click,I.None,L.Connecting,P.Poweron,D.Noninteractive,I.Connecting,L.Ready,P.Mic,D.Hold,I.None,L.Recording,P.Mic,D.Hold,I.None,L.Loading,P.Mic,D.Noninteractive,I.Busy,L.Failed,P.Error,D.Click,I.None,L.NoBrowserSupport,P.Error,D.Click,I.None,L.NoAudioConsent,P.Denied,D.Click,I.None;const{window:q}=E;function z(t){let e,n,o,r,i,d,f,h,m=t[2]===K&&j(t),g=t[2]===F.ClientState.NoAudioConsent&&O(),C=t[2]===F.ClientState.NoBrowserSupport&&U(),w=t[2]===Q&&G();return{c(){e=a("errorDiv"),n=a("errorLeft"),n.textContent="×",o=u(),m&&m.c(),r=u(),g&&g.c(),i=u(),C&&C.c(),d=u(),w&&w.c()},m(l,a){s(l,e,a),c(e,n),c(e,o),m&&m.m(e,null),c(e,r),g&&g.m(e,null),c(e,i),C&&C.m(e,null),c(e,d),w&&w.m(e,null),f||(h=p(n,"click",t[4]),f=!0)},p(t,n){t[2]===K?m?m.p(t,n):(m=j(t),m.c(),m.m(e,r)):m&&(m.d(1),m=null),t[2]===F.ClientState.NoAudioConsent?g?g.p(t,n):(g=O(),g.c(),g.m(e,i)):g&&(g.d(1),g=null),t[2]===F.ClientState.NoBrowserSupport?C||(C=U(),C.c(),C.m(e,d)):C&&(C.d(1),C=null),t[2]===Q?w?w.p(t,n):(w=G(),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},d(t){t&&l(e),m&&m.d(),g&&g.d(),C&&C.d(),w&&w.d(),f=!1,h()}}}function j(t){let e,n,o,r,i,p,h,m,g,C,w,b,$,y=t[1].appId+"";return{c(){e=a("errorRight"),n=a("h1"),n.textContent="Failed to connect Speechly",o=u(),r=a("p"),i=d("Please check that Speechly application id '"),p=d(y),h=d("' is valid."),m=u(),g=a("p"),C=a("a"),C.textContent="Troubleshooting",w=d("\n                \n            "),b=a("a"),$=d("Reload"),f(C,"href","https://docs.speechly.com/faq/#error-invalid-app-id"),f(b,"href",window.location.href)},m(t,l){s(t,e,l),c(e,n),c(e,o),c(e,r),c(r,i),c(r,p),c(r,h),c(e,m),c(e,g),c(g,C),c(g,w),c(g,b),c(b,$)},p(t,e){2&e&&y!==(y=t[1].appId+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(p,y)},d(t){t&&l(e)}}}function O(e){let n,o,r,i,p,h,m,g,C,w;return{c(){n=a("errorRight"),o=a("h1"),o.textContent="No Mic Permission",r=u(),i=a("p"),i.textContent="To use the voice interface, please allow your web browser access the\n            microphone and reload.",p=u(),h=a("p"),m=a("a"),m.textContent="Troubleshooting",g=d("\n                \n            "),C=a("a"),w=d("Reload"),f(m,"href","https://docs.speechly.com/faq/#error-no-audio-consent"),f(C,"href",window.location.href)},m(t,e){s(t,n,e),c(n,o),c(n,r),c(n,i),c(n,p),c(n,h),c(h,m),c(h,g),c(h,C),c(C,w)},p:t,d(t){t&&l(n)}}}function U(t){let e;return{c(){e=a("errorRight"),e.innerHTML='<h1>Unsupported Browser</h1> \n          <p>To use the voice interface, please visit this site using a supported\n            browser.</p> \n          <p><a href="https://docs.speechly.com/client-libraries/supported-browsers/#error-no-browser-support">Troubleshooting</a></p>'},m(t,n){s(t,e,n)},d(t){t&&l(e)}}}function G(e){let n,o,r,i,p,h,m,g,C,w;return{c(){n=a("errorRight"),o=a("h1"),o.textContent="HTTPS Required",r=u(),i=a("p"),i.textContent="To use the voice interface, please visit this site using the secure\n            https:// protocol.",p=u(),h=a("p"),m=a("a"),m.textContent="Troubleshooting",g=d("\n                \n            "),C=a("a"),w=d("Try with HTTPS"),f(m,"href","https://docs.speechly.com/faq/#error-https-required"),f(C,"href",window.location.href.replace(/^http(?!s)/,"https"))},m(t,e){s(t,n,e),c(n,o),c(n,r),c(n,i),c(n,p),c(n,h),c(h,m),c(h,g),c(h,C),c(C,w)},p:t,d(t){t&&l(n)}}}function J(e){let n,o,r,i,d,m=e[2]&&z(e);return{c(){n=a("link"),o=u(),r=a("main"),m&&m.c(),this.c=t,f(n,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),f(n,"rel","stylesheet"),h(r,"bottom","bottom"===e[0])},m(t,l){c(document.head,n),s(t,o,l),s(t,r,l),m&&m.m(r,null),i||(d=p(q,"message",e[3]),i=!0)},p(t,[e]){t[2]?m?m.p(t,e):(m=z(t),m.c(),m.m(r,null)):m&&(m.d(1),m=null),1&e&&h(r,"bottom","bottom"===t[0])},i:t,o:t,d(t){l(n),t&&l(o),t&&l(r),m&&m.d(),i=!1,d()}}}const K="InvaldAppId",Q="HttpsRequired";function V(t,e,n){let{placement:o=null}=e,r={};let i=null;const c=(t,e)=>{n(1,r={appId:e})},s=t=>{var e,o;switch(t){case F.ClientState.Failed:n(2,i=K);break;case F.ClientState.NoAudioConsent:case F.ClientState.NoBrowserSupport:if("https:"!==(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.protocol)&&("localhost"!==(o=window.location.hostname)&&"[::1]"!==o&&null===o.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))){n(2,i=Q);break}n(2,i=t)}};return t.$$set=t=>{"placement"in t&&n(0,o=t.placement)},[o,r,i,t=>{switch(t.data.type){case"holdstart":s(t.data.state);break;case"initialized":console.log(t.data),c(t.data.status,t.data.appId)}},()=>{n(2,i=null)}]}class W extends B{constructor(t){super(),this.shadowRoot.innerHTML="<style>main.bottom{position:fixed;bottom:0;left:0;right:0;min-height:10em;z-index:51;user-select:none;pointer-events:none}errorDiv{box-sizing:border-box;position:relative;width:100%;min-height:10em;background-color:white;user-select:text;pointer-events:all;color:black;display:flex;box-shadow:0 0 8px #00000040;flex-direction:row}errorLeft{box-sizing:border-box;width:2rem;background-color:red;padding:0.2rem 0.2rem;color:#ffffff;display:flex;flex-direction:column;align-items:center;justify-content:start;font-size:1.5rem;cursor:pointer}errorRight{background-color:white;padding:1rem 3rem 1rem 1rem;overflow:auto;flex-grow:1}h1{font-size:1.5rem;margin:0;padding:0 0 0.5rem 0;font-family:'Saira Condensed', sans-serif;text-transform:uppercase}p{margin:0;padding:0 0 0.5rem 0;color:#999}a{color:#000}</style>",M(this,{target:this.shadowRoot,props:m(this.attributes),customElement:!0},V,J,i,{placement:0}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["placement"]}get placement(){return this.$$.ctx[0]}set placement(t){this.$set({placement:t}),_()}}customElements.get("error-panel")?console.warn("Skipping re-defining customElement error-panel"):customElements.define("error-panel",W)}();
//# sourceMappingURL=error-panel.js.map
