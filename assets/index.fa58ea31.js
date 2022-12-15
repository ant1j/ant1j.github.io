(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const m={};function _e(e){m.context=e}const xe=(e,t)=>e===t,C=Symbol("solid-proxy"),V=Symbol("solid-track"),R={equals:xe};let le=de;const E=1,U=2,re={owned:null,cleanups:null,context:null,owner:null};var g=null;let v=null,h=null,p=null,x=null,X=0;function B(e,t){const n=h,s=g,i=e.length===0,o=i?re:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>H(()=>Z(o)));g=o,h=null;try{return k(r,!0)}finally{h=n,g=s}}function Q(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ae(n,i));return[ue.bind(n),s]}function P(e,t,n){const s=Y(e,t,!1,E);I(s)}function Oe(e,t,n){le=Te;const s=Y(e,t,!1,E);s.user=!0,x?x.push(s):I(s)}function Ee(e,t,n){n=n?Object.assign({},R,n):R;const s=Y(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,I(s),ue.bind(s)}function fe(e){return k(e,!1)}function H(e){const t=h;h=null;try{return e()}finally{h=t}}function ve(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function ce(){return h}function ue(){const e=v;if(this.sources&&(this.state||e))if(this.state===E||e)I(this);else{const t=p;p=null,k(()=>F(this),!1),p=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ae(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=v&&v.running;r&&v.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?p.push(o):x.push(o),o.observers&&he(o)),r||(o.state=E)}if(p.length>1e6)throw p=[],new Error},!1)),t}function I(e){if(!e.fn)return;Z(e);const t=g,n=h,s=X;h=g=e,Ce(e,e.value,s),h=n,g=t}function Ce(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=E),ge(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ae(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=E,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==re&&(g.owned?g.owned.push(o):g.owned=[o]),o}function M(e){const t=v;if(e.state===0||t)return;if(e.state===U||t)return F(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===E||t)I(e);else if(e.state===U||t){const i=p;p=null,k(()=>F(e,n[0]),!1),p=i}}function k(e,t){if(p)return e();let n=!1;t||(p=[]),x?n=!0:x=[],X++;try{const s=e();return Ne(n),s}catch(s){p||(x=null),ge(s)}}function Ne(e){if(p&&(de(p),p=null),e)return;const t=x;x=null,t.length&&k(()=>le(t),!1)}function de(e){for(let t=0;t<e.length;t++)M(e[t])}function Te(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:M(s)}for(m.context&&_e(),t=0;t<n;t++)M(e[t])}function F(e,t){const n=v;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===E||n?i!==t&&M(i):(i.state===U||n)&&F(i,t))}}function he(e){const t=v;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=U,s.pure?p.push(s):x.push(s),s.observers&&he(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Pe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ge(e){throw e=Pe(e),e}const ke=Symbol("fallback");function te(e){for(let t=0;t<e.length;t++)e[t]()}function Le(e,t,n={}){let s=[],i=[],o=[],r=0,l=t.length>1?[]:null;return ve(()=>te(o)),()=>{let c=e()||[],u,f;return c[V],H(()=>{let d=c.length,y,$,A,O,w,b,S,_,N;if(d===0)r!==0&&(te(o),o=[],s=[],i=[],r=0,l&&(l=[])),n.fallback&&(s=[ke],i[0]=B($e=>(o[0]=$e,n.fallback())),r=1);else if(r===0){for(i=new Array(d),f=0;f<d;f++)s[f]=c[f],i[f]=B(a);r=d}else{for(A=new Array(d),O=new Array(d),l&&(w=new Array(d)),b=0,S=Math.min(r,d);b<S&&s[b]===c[b];b++);for(S=r-1,_=d-1;S>=b&&_>=b&&s[S]===c[_];S--,_--)A[_]=i[S],O[_]=o[S],l&&(w[_]=l[S]);for(y=new Map,$=new Array(_+1),f=_;f>=b;f--)N=c[f],u=y.get(N),$[f]=u===void 0?-1:u,y.set(N,f);for(u=b;u<=S;u++)N=s[u],f=y.get(N),f!==void 0&&f!==-1?(A[f]=i[u],O[f]=o[u],l&&(w[f]=l[u]),f=$[f],y.set(N,f)):o[u]();for(f=b;f<d;f++)f in A?(i[f]=A[f],o[f]=O[f],l&&(l[f]=w[f],l[f](f))):i[f]=B(a);i=i.slice(0,r=d),s=c.slice(0)}return i});function a(d){if(o[f]=d,l){const[y,$]=Q(f);return l[f]=$,t(c[f],y)}return t(c[f])}}}function pe(e,t){return H(()=>e(t||{}))}function je(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Ee(Le(()=>e.each,e.children,t||void 0))}function De(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,c=t[i-1].nextSibling,u=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const f=o<s?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],f),t[i]=n[o]}else{if(!u){u=new Map;let a=l;for(;a<o;)u.set(n[a],a++)}const f=u.get(t[r]);if(f!=null)if(l<f&&f<o){let a=r,d=1,y;for(;++a<i&&a<o&&!((y=u.get(t[a]))==null||y!==f+d);)d++;if(d>f-l){const $=t[r];for(;l<f;)e.insertBefore(n[l++],$)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const ne="_$DX_DELEGATE";function Ie(e,t,n,s={}){let i;return B(o=>{i=o,t===document?e():be(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ye(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Be(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Re))}}function se(e,t){t==null?e.removeAttribute("class"):e.className=t}function be(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);P(i=>K(e,t(),i,n),s)}function Re(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,s,i){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(m.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(m.context)return n;n=T(e,n,s)}else{if(o==="function")return P(()=>{let l=t();for(;typeof l=="function";)l=l();n=K(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(z(l,t,n,i))return P(()=>n=K(e,l,n,s,!0)),()=>n;if(m.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=T(e,n,s),r)return n}else c?n.length===0?ie(e,l,s):De(e,n,l):(n&&T(e),ie(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function z(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],c=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=z(e,l,c)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=z(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function ie(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const c=l.parentNode===e;!o&&!r?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const G=Symbol("store-raw"),j=Symbol("store-node"),Ue=Symbol("store-name");function we(e,t){let n=e[C];if(!n&&(Object.defineProperty(e,C,{value:n=new Proxy(e,Ke)}),!Array.isArray(e))){const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,r=s.length;o<r;o++){const l=s[o];if(i[l].get){const c=i[l].get.bind(n);Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:c})}}}return n}function q(e){let t;return e!=null&&typeof e=="object"&&(e[C]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function D(e,t=new Set){let n,s,i,o;if(n=e!=null&&e[G])return n;if(!q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,l=e.length;r<l;r++)i=e[r],(s=D(i,t))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,u=r.length;c<u;c++)o=r[c],!l[o].get&&(i=e[o],(s=D(i,t))!==i&&(e[o]=s))}return e}function ee(e){let t=e[j];return t||Object.defineProperty(e,j,{value:t={}}),t}function J(e,t,n){return e[t]||(e[t]=Se(n))}function Me(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===j||t===Ue||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function Ae(e){if(ce()){const t=ee(e);(t._||(t._=Se()))()}}function Fe(e){return Ae(e),Reflect.ownKeys(e)}function Se(e){const[t,n]=Q(e,{equals:!1,internal:!0});return t.$=n,t}const Ke={get(e,t,n){if(t===G)return e;if(t===C)return n;if(t===V)return Ae(e),n;const s=ee(e),i=s.hasOwnProperty(t);let o=i?s[t]():e[t];if(t===j||t==="__proto__")return o;if(!i){const r=Object.getOwnPropertyDescriptor(e,t);ce()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(o=J(s,t,o)())}return q(o)?we(o):o},has(e,t){return t===G||t===C||t===V||t===j||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Fe,getOwnPropertyDescriptor:Me};function W(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],o=e.length;n===void 0?delete e[t]:e[t]=n;let r=ee(e),l;(l=J(r,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==o&&(l=J(r,"length",o))&&l.$(e.length),(l=r._)&&l.$()}function me(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];W(e,i,t[i])}}function qe(e,t){if(typeof t=="function"&&(t=t(e)),t=D(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&W(e,n,i)}W(e,"length",s)}else me(e,t)}function L(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const r=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)L(e,[s[c]].concat(t),n);return}else if(l&&r==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&L(e,[c].concat(t),n);return}else if(l&&r==="object"){const{from:c=0,to:u=e.length-1,by:f=1}=s;for(let a=c;a<=u;a+=f)L(e,[a].concat(t),n);return}else if(t.length>1){L(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||s===void 0&&o==null||(o=D(o),s===void 0||q(i)&&q(o)&&!Array.isArray(o)?me(i,o):W(e,s,o))}function We(...[e,t]){const n=D(e||{}),s=Array.isArray(n),i=we(n);function o(...r){fe(()=>{s&&r.length===1?qe(n,r[0]):L(n,r)})}return[i,o]}function He(e,t){const n=localStorage.getItem(e),[s,i]=We(n?JSON.parse(n):t);return Oe(()=>localStorage.setItem(e,JSON.stringify(s))),[s,i]}function Ve(e,t){return[...e.slice(0,t),...e.slice(t+1)]}const ze="_App_163oz_1",Ge="_logo_163oz_5",Je="_header_163oz_10",Xe="_link_163oz_21",oe={App:ze,logo:Ge,header:Je,link:Xe},Qe=ye('<div><header><form><input placeholder="add new word" required><button>+</button></form></header></div>'),Ye=ye('<div><button><b>&gt;</b></button><input type="text"><button>x</button></div>'),Ze=()=>{const[e,t]=Q(""),[n,s]=He("words",[]),i=o=>{o.preventDefault(),fe(()=>{s(n.length,{text:e(),success:0,tries:0}),t("")})};return(()=>{const o=Qe.cloneNode(!0),r=o.firstChild,l=r.firstChild,c=l.firstChild;return l.addEventListener("submit",i),c.$$input=u=>t(u.currentTarget.value),be(r,pe(je,{each:n,children:(u,f)=>(()=>{const a=Ye.cloneNode(!0),d=a.firstChild,y=d.nextSibling,$=y.nextSibling;return d.$$click=A=>{const O=window.speechSynthesis;let w=new SpeechSynthesisUtterance;w.rate=.6,w.voice=O.getVoices()[0],w.text=u.text,O.speak(w),w.text=u.text.split("").map(b=>b===" "?"espace":b).join(", "),O.speak(w)},y.addEventListener("change",A=>s(f(),"text",A.currentTarget.value)),$.$$click=()=>s(A=>Ve(A,f())),P(()=>y.value=u.text),a})()}),null),P(u=>{const f=oe.App,a=oe.header;return f!==u._v$&&se(o,u._v$=f),a!==u._v$2&&se(r,u._v$2=a),u},{_v$:void 0,_v$2:void 0}),P(()=>c.value=e()),o})()};Be(["input","click"]);Ie(()=>pe(Ze,{}),document.getElementById("root"));
