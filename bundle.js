(function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,e$5=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$5)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$4,defineProperty:e$4,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$4(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$2?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=globalThis,i$3=t=>t,s$1=t$1.trustedTypes,e$3=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$3,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m$1:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$:g):c===$||c===g?c=p$1:c===_||c===m$1?c=v:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$3(t).nextSibling;i$3(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s=globalThis;let i$2 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$2._$litElement$=true,i$2["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$2});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$2});(s.litElementVersions??=[]).push("4.2.2");

  /*
    SOURCE OF TRUTH for every la-* token.

    This file scopes the token set to :host inside every Lit component's
    shadow root. Light-DOM pages (prototypes, docs, previews) can't read those
    shadow-scoped values, so the same set is exposed at :root in two GENERATED
    mirrors — dev/la-tokens-root.css and docs-src/tokens.css — written by
    scripts/generate-token-css.cjs on every npm build (`prebuild` hook).
    Never edit the mirrors by hand; edit here and run `npm run build`.
  */
  const tokens = i$5 `
  :host {
    /* ── Core palette — primitives ────────────────────
       Hue scales. The ONLY place a colour hex appears.
       Every semantic token below is a var() alias so that the
       relationship between intent (danger) and hue (red-500) is
       explicit. Add a primitive only when ≥2 semantic tokens
       resolve to the same value — single-consumer values stay
       inline (e.g. --la-color-primary, locked-bg, the cool-grey
       border family). See decision 41. */
    --la-red-500:    oklch(0.581 0.171 25.273); /* #CC4643 · base red — urgent / danger / border-danger */
    --la-red-700:    oklch(0.493 0.159 26.346); /* #A92F2C · darker red — danger-hover / urgent-text / danger-text */
    --la-red-50:     oklch(0.972 0.011 17.342); /* #FDF3F3 · tint  — urgent-bg / surface-danger */

    --la-amber-500:  oklch(0.769 0.165 70.08); /* #F59E0B · base amber — proactive / warning / border-warning */
    --la-amber-700:  oklch(0.555 0.146 48.998); /* #B45309 · darker amber — proactive-text / warning-text */
    --la-amber-50:   oklch(0.987 0.021 95.277); /* #FFFBEB · tint  — proactive-bg / surface-warning */

    --la-green-500:  oklch(0.522 0.109 158.297); /* #1F7C51 · base green — resolved / success / success-text */
    --la-green-600:  oklch(0.647 0.133 157.808); /* #32A66E · punchier green — border-success accent only */
    --la-green-700:  oklch(0.446 0.089 160.23); /* #196343 · darker green — success-hover / resolved-text */
    --la-green-50:   oklch(0.975 0.015 158.255); /* #EFFAF3 · tint  — resolved-bg / surface-success */

    --la-blue-500:   oklch(0.582 0.138 242.423); /* #0482C5 · base blue — processing / info */
    --la-blue-600:   oklch(0.623 0.188 259.815); /* #3B82F6 · focus blue — border-focus only */
    --la-blue-700:   oklch(0.479 0.084 228.87); /* #1B6683 · darker blue — processing-text / info-text */
    --la-blue-50:    oklch(0.979 0.014 207.878); /* #EEFBFD · tint  — processing-bg / surface-info */

    --la-purple-500: oklch(0.469 0.152 301.701); /* #6B3FA0 · base purple — doc */
    --la-purple-50:  oklch(0.944 0.031 302.303); /* #F0E8FE · tint  — doc-bg */

    --la-indigo-500: oklch(0.521 0.182 268.945); /* #405CD0 · brand accent blue — accent interactive elements, links, attention colour */
    --la-indigo-50:  oklch(0.962 0.018 272.314); /* #EEF2FF · tint  — accent-bg */

    --la-white:      oklch(1 0 0); /* #FFFFFF · used as bg, all -fg foregrounds, text-invert */

    /* ── Semantic colours — status ────────────────────
       Status colours describe a STATE on something — overdue
       legal-area row, processing job, resolved insight. */
    --la-color-urgent:          var(--la-red-500);    /* "you must act now" — overdue items, breach states, blocking errors. Solid on alert icons, badges, urgent dot in legal-area rows */
    --la-color-urgent-bg:       var(--la-red-50);     /* tinted surface paired with -urgent-text on alerts and urgent legal-area row highlights */
    --la-color-urgent-text:     var(--la-red-700);    /* readable dark-red text on -urgent-bg, kept dark enough for AA contrast */

    --la-color-proactive:       var(--la-amber-500);  /* heads-up — "attention but not blocking yet". Pending reviews, upcoming deadlines, soft warnings */
    --la-color-proactive-bg:    var(--la-amber-50);   /* surface for proactive alerts and row highlights */
    --la-color-proactive-text:  var(--la-amber-700);  /* readable amber-on-amber for body text inside proactive surfaces */

    --la-color-resolved:        var(--la-green-500);  /* done, signed, sorted. Success badges, signed-document chips, resolved insight markers */
    --la-color-resolved-bg:     var(--la-green-50);   /* surface for success messages and resolved-state rows */
    --la-color-resolved-text:   var(--la-green-700);  /* readable green text on -resolved-bg */

    --la-color-processing:      var(--la-blue-500);   /* "we're working on it" — automated jobs, document analysis in flight, processing widgets */
    --la-color-processing-bg:   var(--la-blue-50);    /* surface for processing widgets and live-status rows */
    --la-color-processing-text: var(--la-blue-700);   /* readable text on -processing-bg */

    --la-color-doc:             var(--la-purple-500); /* document classification — distinguishes document chips from generic status badges (Contract, Filed) */
    --la-color-doc-bg:          var(--la-purple-50);  /* tinted surface for document chips and category labels */

    --la-color-locked-bg:       oklch(0.968 0.007 247.896); /* #F1F5F9 · soft inset background for gated content panels (la-unlock-panel) — bluish grey, no shared primitive */
    --la-color-locked-text:     var(--la-color-text-muted); /* muted label text on locked panels — soft enough to read as "not yet active" without disappearing */

    /* ── Action colours ───────────────────────────────
       Action colours drive interactive elements — buttons, focus
       outlines. Actions get the full -hover / -fg / -text set;
       signals (warning, info) carry only base + -text by design,
       since they live on alerts and badges, not buttons. */
    --la-color-primary:         oklch(0.21 0.006 285.885); /* #18181B · primary action — only on interactive elements (buttons, active states, links). Never decorative. Marks "the next obvious step" */
    --la-color-primary-hover:   oklch(0.274 0.005 286.033); /* #27272A · hover state of primary buttons and active rails */
    --la-color-primary-fg:      var(--la-white);      /* text and icons on top of solid -primary surfaces */

    --la-color-secondary-bg:      var(--la-white);    /* resting fill for secondary buttons and outlined controls */
    --la-color-secondary-text:    var(--la-color-text); /* label colour on secondary buttons — full strength dark on white */
    --la-color-secondary-border:  oklch(0.915 0.002 247.841); /* #E2E3E4 · 1px outline of secondary buttons — slightly heavier than universal -border for clear button affordance */
    --la-color-secondary-hover:   oklch(0.967 0.002 247.839); /* #F3F4F5 · hover fill for secondary buttons and ghost interactions */

    --la-color-success:           var(--la-green-500); /* solid success buttons (Sign, Approve) and success accent on icons */
    --la-color-success-hover:     var(--la-green-700); /* hover state for solid success buttons */
    --la-color-success-fg:        var(--la-white);     /* text on solid success */
    --la-color-success-text:      var(--la-green-500); /* dark text on tinted surface */
    --la-color-danger:            var(--la-red-500);   /* solid destructive buttons (Delete, Revoke). Same hue as -urgent — irreversible action and urgent state share weight */
    --la-color-danger-hover:      var(--la-red-700);   /* hover state for solid danger buttons */
    --la-color-danger-fg:         var(--la-white);     /* text on solid danger */
    --la-color-danger-text:       var(--la-red-700);   /* readable text on tinted-danger surfaces (alerts, ghost-danger button hover) */

    --la-color-accent:            var(--la-indigo-500); /* brand accent blue — attention colour, links, and accent interactive elements alongside the near-black primary */
    --la-color-accent-hover:      oklch(0.469 0.183 270.49); /* #374ABF · hover state for accent buttons and active elements */
    --la-color-accent-bg:         var(--la-indigo-50); /* tinted surface for accent badges, provisional states, and accent-tinted rows */
    --la-color-accent-fg:         var(--la-white);     /* text on solid accent surfaces */

    --la-color-neutral:           oklch(0.373 0.031 259.733); /* #374151 · neutral CTA — softer than primary's near-black. Used where primary feels too heavy or where two solid CTAs sit side by side */
    --la-color-neutral-hover:     oklch(0.331 0.027 261.562); /* #2E3644 · hover state for neutral buttons */
    --la-color-neutral-fg:        var(--la-white);     /* text on solid -neutral surfaces */

    --la-color-warning:           var(--la-amber-500); /* warning signal — non-blocking attention on icons and badges. Signal, not action: no -hover/-fg by design */
    --la-color-warning-text:      var(--la-amber-700); /* readable warning text on tinted-warning surfaces */
    --la-color-info:              var(--la-blue-500);  /* info signal — neutral informational accent on icons and badges. Signal, not action: no -hover/-fg by design */
    --la-color-info-text:         var(--la-blue-700);  /* readable info text on tinted-info surfaces */

    /* ── Surfaces ─────────────────────────────────── */
    --la-color-bg:                var(--la-white);    /* plain white — default surface for cards, widgets, modals */
    --la-color-bg-subtle:         oklch(0.985 0 0); /* #FAFAFA · page chrome — page header, tab bar, sidebar bg. Subtle depth separation from white cards without using a shadow */
    --la-color-bg-muted:          oklch(0.97 0 0); /* #F5F5F5 · warm neutral grey — hover state bg for interactive rows (e.g. la-document-item, sidebar nav) */
    --la-color-bg-page:           var(--la-color-bg); /* semantic name for page-level body bg */
    --la-color-bg-surface:        oklch(0.991 0 0); /* #FCFCFC · slightly off-white for aside panels and secondary content shells — a hair separation from pure white */
    --la-color-bg-active:         oklch(0.955 0 0); /* #F0F0F0 · active selection background — selected nav item, pressed state of a row */
    --la-color-bg-invert:         oklch(0.205 0 0); /* #171717 · dark surface for inverted contexts — dark toasts, tooltips, code blocks */

    --la-color-surface-success:   var(--la-green-50); /* success alert background, success-row highlights, ghost-success button hover */
    --la-color-surface-warning:   var(--la-amber-50); /* warning alert background, notification bars */
    --la-color-surface-danger:    var(--la-red-50);   /* danger alert background, ghost-danger button hover */
    --la-color-surface-info:      var(--la-blue-50);  /* info alert background, processing-state surfaces */

    /* Scrim — overlay backdrop for modals, sheets, and any UI that dims the page behind a surface */
    --la-color-scrim:             rgba(0, 0, 0, 0.2);

    /* ── Text ───────────────────────────────────────── */
    --la-color-text:              oklch(0.263 0.015 235.56); /* #1E262B · primary readable text — body copy, headings, table values */
    --la-color-text-secondary:    oklch(0.446 0.026 256.802); /* #4B5563 · supporting copy and secondary labels — paragraph text under a heading, form helper text */
    --la-color-text-muted:        oklch(0.551 0.023 264.364); /* #6B7280 · captions, meta, dates — not the main message but still legible */
    --la-color-text-faint:        oklch(0.714 0.019 261.325); /* #9CA3AF · hint copy and placeholder text — recedes into the background */
    --la-color-text-disabled:     oklch(0.872 0.009 258.338); /* #D1D5DB · disabled label text — paired with opacity: 0.4 on interactive elements */
    --la-color-text-invert:       var(--la-white);    /* text on dark/inverted surfaces — toasts, tooltips, dark-mode chrome */

    /* ── Borders ────────────────────────────────────── */
    --la-color-border:            oklch(0.9 0.021 276.933); /* #DADDEC · default interactive border — buttons, inputs, cards, toasts */
    --la-color-border-light:      oklch(0.95 0.01 273.354); /* #ECEEF5 · structural dividers — table rows, panel edges, section lines. Quieter than the interactive border */
    --la-color-border-focus:      var(--la-blue-600); /* focus ring on form controls — paired with --la-input-shadow-focus */
    --la-color-border-active:     oklch(0.21 0.006 285.885); /* #18181B · active/selected outline — sidebar nav rail, active tab, selected card. Coincides with --la-color-primary but kept separate (border vs button concept) */
    --la-color-border-success:    var(--la-green-600); /* success alert border, ghost-success button hover border — punchier than -success base */
    --la-color-border-warning:    var(--la-amber-500); /* warning alert border */
    --la-color-border-danger:     var(--la-red-500);  /* danger alert border, ghost-danger button hover border */

    /* ── Shadows ────────────────────────────────────── */
    /* xs — form-control scale. Subtle 1px depth for checkboxes, secondary
       buttons, inputs. Not an elevation shadow. See decision 40. */
    --la-shadow-xs:    0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --la-shadow-sm:    0 1px 2px rgba(3, 7, 18, 0.08);
    --la-shadow-sm-up: 0 -1px 2px rgba(3, 7, 18, 0.08); /* sm, cast upward — for sticky footers / bottom bars */
    --la-shadow-md:    0 0 0 1px #F1F3FA, 0 1px 2px -1px rgba(3,7,18,.08), 0 2px 4px 0 rgba(3,7,18,.04);
    /* card — soft three-layer card lift. Pairs with a 1px border (the border
       carries the edge, the shadow carries the elevation). For in-place
       cards on near-white surfaces — la-upload-box has-file, etc. */
    --la-shadow-card:
      0 1px 2px 0 rgba(3, 7, 18, 0.04),
      0 4px 8px -2px rgba(3, 7, 18, 0.06),
      0 8px 16px -4px rgba(3, 7, 18, 0.04);
    --la-shadow-float: 0 2px 8px rgba(3, 7, 18, 0.08), 0 8px 24px rgba(3, 7, 18, 0.08);
    --la-shadow-lg:    0 16px 48px rgba(0, 0, 0, 0.12);
    /* popover — for floating menus / select panels / dropdowns. Four-layer
       stack: hairline outline replaces the border, then contact, mid lift,
       and ambient falloff. Apply with no border. */
    --la-shadow-popover:
      0 0 0 1px rgba(3, 7, 18, 0.04),
      0 1px 2px rgba(3, 7, 18, 0.05),
      0 6px 12px -2px rgba(3, 7, 18, 0.06),
      0 16px 32px -8px rgba(3, 7, 18, 0.10);

    /* Candidate — Framer smooth shadow (3-layer negative-spread stack).
       Softer and more perceptually smooth than --la-shadow-card.
       Good for elevated cards or panels on white surfaces.
    --la-shadow-framer:
      rgba(0, 0, 0, 0.07)  0px 0.602187px 0.602187px -1.25px,
      rgba(0, 0, 0, 0.063) 0px 2.28853px  2.28853px  -2.5px,
      rgba(0, 0, 0, 0.024) 0px 10px       10px       -3.75px;
    */

    /* ── Input ──────────────────────────────────────── */
    --la-input-shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.12);

    /* ── Spacing ────────────────────────────────────── */
    --la-space-3xs:   2px;
    --la-space-2xs:   6px;
    --la-space-xs:    4px;
    --la-space-sm:    8px;
    --la-space-md:    12px;
    --la-space-lg:    16px;
    --la-space-xl:    24px;
    --la-space-2xl:   32px;
    --la-space-3xl:   44px;

    /* ── Border radius ──────────────────────────────── */
    --la-radius-sm:     10px;
    --la-radius-md:     12px;
    --la-radius-lg:     16px;
    --la-radius-xl:     20px;
    --la-radius-xl1:    24px;
    --la-radius-xl2:    28px;
    --la-radius-2xl:    32px;
    --la-radius-pill:   9999px;

    /* ── Spinner sizing ─────────────────────────────── */
    --la-spinner-sm:    12px;
    --la-spinner-md:    16px;
    --la-spinner-lg:    24px;
    --la-radius-circle: 50%;

    /* ── Focus ring ────────────────────────────────── */
    --la-focus-ring-width:  2px;
    --la-focus-ring-offset: 2px;

    /* ── Checkbox ───────────────────────────────────── */
    --la-checkbox-size:       16px;
    --la-checkbox-icon-size:  11px;
    --la-checkbox-offset:     1px;

    /* ── Switch ─────────────────────────────────────── */
    /* Off-state bg uses its own token — the shared --la-color-bg-* scale
       tops out at a warm light grey; the switch track needs more visible
       presence against white surfaces (iOS-convention). On-state reuses
       --la-color-primary / -primary-hover from the shared scale. */
    --la-switch-bg-off:       oklch(0.915 0.002 247.841); /* #E2E3E4 */
    --la-switch-bg-off-hover: oklch(0.872 0.009 258.338); /* #D1D5DB */

    /* ── Toast sizing ───────────────────────────────── */
    --la-toast-min-width: 260px;
    --la-toast-max-width: 340px;

    /* ── Button sizing ──────────────────────────────── */
    /* Button heights live off the --la-space scale — they're typography-driven
       dimensions, not layout distances. See decisions/12-button-padding-off-scale.md. */
    --la-button-height-sm:      28px;
    --la-button-height-default: 32px;
    --la-button-height-md:      36px;
    --la-button-height-lg:      44px;

    /* ── Info hint sizing ───────────────────────────── */
    /* Deliberately off the shared button-height scale — info-hint is inline
       text companion sizing, not a standalone button. See decisions/32-info-hint-token-family.md. */
    --la-info-hint-height-sm:      16px;
    --la-info-hint-height-default: 20px;
    --la-info-hint-height-lg:      24px;
    --la-info-hint-icon-sm:        12px;
    --la-info-hint-icon-default:   14px;
    --la-info-hint-icon-lg:        16px;

    /* ── Typography ─────────────────────────────────── */
    --la-font-family:         'Inter', system-ui, -apple-system, sans-serif; /* Inter is self-hosted (variable woff2) via @font-face in la-base-root.css — no longer relies on a local install. Fallbacks only show if the webfont fails. See decision 85. */
    --la-font-family-mono:    ui-monospace, SFMono-Regular, 'JetBrains Mono', Menlo, monospace; /* OS-default mono stack — used for <code>, <kbd>, and any monospace UI (no web font loaded) */
    --la-font-signature:      'Meow Script', 'Snell Roundhand', 'Brush Script MT', cursive; /* self-hosted OFL script for adopted e-signatures (.sig-mark); @font-face in la-base-root.css */
    /* Font sizes are in rem so the scale respects the user's browser font-size preference (Geist-style).
       Comments show the px equivalent at the 16px default root for Figma sync — designers continue to think in px. */
    --la-font-size-xs:        0.625rem;   /* 10px */
    --la-font-size-sm:        0.6875rem;  /* 11px */
    --la-font-size-md:        0.8125rem;  /* 13px */
    --la-font-size-base:      0.8125rem;  /* 13px */
    --la-font-size-lg:        0.875rem;   /* 14px */
    --la-font-size-xl:        1rem;       /* 16px */
    --la-font-size-2xl:       1.125rem;   /* 18px */
    --la-font-size-3xl:       1.25rem;    /* 20px */
    --la-font-size-4xl:       1.5rem;     /* 24px */

    --la-font-weight-normal:   400;
    --la-font-weight-medium:   500;
    --la-font-weight-semibold: 600;
    --la-font-weight-bold:     700;

    --la-line-height: 1.5;

    /* ── Navigation ─────────────────────────────────── */
    --la-nav-bg:              oklch(0.985 0 0); /* #FAFAFA */
    --la-nav-bg-active:       oklch(0.949 0 0); /* #EEEEEE */
    --la-nav-bg-hover:        oklch(0.274 0.005 286.033); /* #27272A */
    --la-nav-icon-color:      oklch(0.263 0.015 235.56); /* #1E262B */

    /* ── Sidebar ────────────────────────────────────── */
    --la-sidebar-width:             220px;
    --la-sidebar-collapsed-width:   56px;
    --la-sidebar-collapsed-inset:   6px;
    --la-nav-header-padding-h:       22px;
    --la-nav-collapsed-header-padding: 22px;
    --la-nav-padding-h:             12px;
    --la-nav-padding-v:             8px;
    --la-nav-item-padding-h:        9px;
    --la-nav-item-padding-v:        9px;
    --la-nav-item-gap:              4px;
    --la-nav-item-radius:           10px;
    --la-sidebar-collapsed-padding: 8px;
    --la-nav-logo-size:             21px;
    --la-nav-logo-wordmark-height:  14px;
    --la-nav-logo-gap:              12px;
    --la-nav-logo-padding-v:        0px;
    --la-nav-expand-icon-size:      19px;
    --la-nav-logo-collapsed-offset-x: 6px;
    --la-nav-logo-collapsed-offset-y: 3px;
    --la-sidebar-padding-top:        8px;
    --la-nav-item-icon-size:        17px;
    --la-nav-sub-height:            26px;
    --la-nav-sub-padding-v:         6px;
    --la-nav-sub-padding-h:         12px;

    /* ── Page header ─────────────────────────────────── */
    --la-ph-padding-left:   32px;
    --la-ph-padding-right:  20px;
    --la-ph-title-size:     18px;
    --la-ph-title-weight:   600;
    --la-ph-bg:             oklch(0.985 0 0); /* #FAFAFA */
    --la-ph-height:         40px;
    --la-ph-padding-v:      0px;
    --la-ph-gap:            0px;

    /* ── Main content area ───────────────────────────────── */
    --la-main-margin:       8px;
    --la-main-radius:       var(--la-radius-md);
    --la-main-shadow:       var(--la-shadow-md);
    --la-aside-width:       320px;
    --la-drawer-size:       var(--la-aside-width);

    /* ── Animation durations ─────────────────────────── */
    --la-dur-fast:    150ms;
    --la-dur-base:    200ms;
    --la-dur-modal:   330ms;
    --la-dur-slow:    500ms;

    /* ── Motion — easing curves ──────────────────────── */
    --ease-out:       cubic-bezier(0.23, 1, 0.32, 1);
    --ease-in-out:    cubic-bezier(0.77, 0, 0.175, 1);
    --ease:           cubic-bezier(0.4, 0, 0.2, 1);
    --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring-sm: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-snappy:    cubic-bezier(0.16, 1, 0.3, 1);
    --ease-drawer:    cubic-bezier(0.32, 0.72, 0, 1);

    /* ── Motion — durations ──────────────────────────── */
    --dur-instant:  100ms;
    --dur-fast:     150ms;
    --dur-base:     200ms;
    --dur-modal:    250ms;
    --dur-page:     350ms;

    /* ── Motion — stagger ────────────────────────────── */
    --stagger-sm: 30ms;
    --stagger-md: 50ms;
    --stagger-lg: 60ms;

    /* ── Motion — scale presets ──────────────────────── */
    --scale-press:  0.97;
    --scale-enter:  0.96;
    --scale-hover:  1.02;

    /* ── Base ───────────────────────────────────────── */
    font-family: var(--la-font-family);
    line-height: var(--la-line-height);
    color: var(--la-color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    /* "cv11" (Inter single-story a) removed 2026-07-21 — reverted to the
       default double-story a for consistency with light-DOM page text, which
       never carried the alternate. "tnum" = tabular numbers (relied on),
       "ss01" = open digits (does not affect the a). */
    font-feature-settings: "ss01", "tnum";
    /* Inherited default — kills orphaned last-line words in body text
       across the shadow root. Headings that want even line lengths opt
       into text-wrap: balance in their own rule. See decision 83. */
    text-wrap: pretty;
  }
`;

  /**
   * Phosphor Icons — styles for Lit shadow roots.
   *
   * Shadow DOM blocks external stylesheet rules, so the per-icon ::before
   * content rules from the page-level Phosphor CSS never reach elements
   * inside a shadow root. This module fixes that by:
   *
   *   1. Detecting the Phosphor <link> stylesheets already in the page <head>.
   *   2. Injecting matching <link> tags into each shadow root that uses
   *      ${iconStyles} so every icon class (including ::before content)
   *      is available inside the component.
   *
   * The browser caches the CSS after the page-level load, so the shadow DOM
   * <link> tags resolve instantly from cache — no extra network cost.
   *
   * Setup — every preview page <head> must load Phosphor CSS:
   *   <link rel="stylesheet" href="path/to/phosphor/regular/style.css">
   *   <link rel="stylesheet" href="path/to/phosphor/fill/style.css">
   *   <link rel="stylesheet" href="path/to/phosphor/bold/style.css">
   *
   * Usage — include at the top of any component's render():
   *   import { iconStyles } from '../styles/icons.js';
   *   render() { return html`${iconStyles} ...`; }
   */
  // Capture absolute hrefs of Phosphor <link> stylesheets at module load time.
  // The <link> tags are always placed before <script src="bundle.js"> in every
  // preview page, so they are in the DOM when this code runs.
  const _phosphorHrefs = typeof document !== 'undefined'
      ? Array.from(document.querySelectorAll('link[rel="stylesheet"][href*="phosphor"]')).map((link) => link.href)
      : [];
  const iconStyles = b `
  ${_phosphorHrefs.map((href) => b `<link rel="stylesheet" href="${href}">`)}
`;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r(r){return n({...r,state:true,attribute:false})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$2=(e,t,c)=>(c.configurable=true,c.enumerable=true,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$1(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$2(n,s,{get(){return o(this)}})}}

  var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaBadge = class LaBadge extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'neutral';
          this.type = 'badge';
          this.appearance = 'filled';
          this.size = 'default';
      }
      render() {
          return b `<span><slot name="icon"></slot><slot></slot></span>`;
      }
  };
  exports.LaBadge.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      /* ── Badge (pill) base ── */
      span {
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-xs);
        padding: 1px 7px;
        border-radius: var(--la-radius-pill);
        background: var(--la-color-bg-subtle);
        border: var(--la-badge-border, 1px solid var(--la-color-border-light));
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-normal);
        white-space: nowrap;
      }

      ::slotted([slot='icon']) {
        font-size: var(--la-font-size-md);
      }

      /* ── Counter (circle) overrides ── */
      :host([type='counter']) span {
        height: 20px;
        min-width: 20px;
        padding: 0;
        border: 0;
        border-radius: var(--la-radius-circle);
        justify-content: center;
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-medium);
        font-variant-numeric: tabular-nums;
        line-height: 1;
        gap: 0;
      }

      :host([type='counter'][size='sm']) span {
        height: 16px;
        min-width: 16px;
        font-size: var(--la-font-size-xs);
      }

      /* ── Badge variants — shared bg, variant-coloured text ── */
      :host([variant='danger']) span {
        color: var(--la-color-urgent-text);
      }
      :host([variant='warning']) span {
        color: var(--la-color-proactive-text);
      }
      :host([variant='success']) span {
        color: var(--la-color-resolved-text);
      }
      :host([variant='neutral']) span {
        color: var(--la-color-locked-text);
      }
      :host([variant='info']) span {
        color: var(--la-color-processing-text);
      }
      :host([variant='accent']) span {
        color: var(--la-color-doc);
      }
      :host([variant='primary']) span {
        background: var(--la-color-primary);
        border-color: var(--la-color-primary);
        color: var(--la-color-primary-fg);
      }

      /* ── Counter filled variants ── */
      :host([type='counter'][variant='danger']) span {
        background: var(--la-color-danger);
        color: var(--la-color-danger-fg);
      }
      :host([type='counter'][variant='warning']) span {
        background: var(--la-color-warning);
        color: var(--la-color-text-invert);
      }
      :host([type='counter'][variant='success']) span {
        background: var(--la-color-success);
        color: var(--la-color-success-fg);
      }
      :host([type='counter'][variant='neutral']) span {
        background: var(--la-color-neutral);
        color: var(--la-color-neutral-fg);
      }
      :host([type='counter'][variant='info']) span {
        background: var(--la-color-info);
        color: var(--la-color-text-invert);
      }
      :host([type='counter'][variant='primary']) span {
        background: var(--la-color-primary);
        color: var(--la-color-primary-fg);
      }

      /* ── Counter ghost variants ── */
      :host([type='counter'][appearance='ghost'][variant='danger']) span {
        background: var(--la-color-surface-danger);
        color: var(--la-color-danger-text);
      }
      :host([type='counter'][appearance='ghost'][variant='warning']) span {
        background: var(--la-color-surface-warning);
        color: var(--la-color-warning-text);
      }
      :host([type='counter'][appearance='ghost'][variant='success']) span {
        background: var(--la-color-surface-success);
        color: var(--la-color-success-text);
      }
      :host([type='counter'][appearance='ghost'][variant='neutral']) span {
        background: var(--la-color-locked-bg);
        color: var(--la-color-locked-text);
      }
      :host([type='counter'][appearance='ghost'][variant='info']) span {
        background: var(--la-color-surface-info);
        color: var(--la-color-info-text);
      }
      :host([type='counter'][appearance='ghost'][variant='primary']) span {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }
    `,
  ];
  __decorate$16([
      n({ reflect: true })
  ], exports.LaBadge.prototype, "variant", void 0);
  __decorate$16([
      n({ reflect: true })
  ], exports.LaBadge.prototype, "type", void 0);
  __decorate$16([
      n({ reflect: true })
  ], exports.LaBadge.prototype, "appearance", void 0);
  __decorate$16([
      n({ reflect: true })
  ], exports.LaBadge.prototype, "size", void 0);
  exports.LaBadge = __decorate$16([
      t('la-badge')
  ], exports.LaBadge);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o=o=>o??A;

  var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaIconButton = class LaIconButton extends i$2 {
      constructor() {
          super(...arguments);
          this.label = '';
          this.size = 'default';
          this.variant = 'default';
          this.disabled = false;
      }
      firstUpdated(_changedProperties) {
          super.firstUpdated(_changedProperties);
          if (!this.label) {
              console.warn('[la-icon-button] Missing label — set label="Describe action" for screen readers.');
          }
      }
      render() {
          return b `
      ${iconStyles}
      <button
        part="button"
        type="button"
        aria-label=${this.label}
        aria-expanded=${o(this.expanded === undefined ? undefined : String(this.expanded))}
        aria-pressed=${o(this.pressed === undefined ? undefined : String(this.pressed))}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
      }
  };
  exports.LaIconButton.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
      }
      button {
        /* Square button — width and height share the --la-button-height-* family with la-button
           so text + icon buttons at the same size line up cleanly in a row. */
        box-sizing: border-box;
        flex-shrink: 0;
        width: var(--la-button-height-default);
        height: var(--la-button-height-default);
        border: none;
        background: none;
        cursor: pointer;
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-2xl);
        border-radius: var(--la-radius-circle);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        font-family: inherit;
        transition: background var(--dur-fast) var(--ease),
          color var(--dur-fast) var(--ease),
          transform var(--dur-fast) var(--ease);
      }
      button:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }
      button:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: 2px;
      }
      button:active {
        transform: scale(var(--scale-press));
      }
      :host([size='sm']) button {
        width: var(--la-button-height-sm);
        height: var(--la-button-height-sm);
        font-size: var(--la-font-size-lg);
      }
      :host([size='lg']) button {
        width: var(--la-button-height-lg);
        height: var(--la-button-height-lg);
        font-size: var(--la-font-size-3xl);
      }
      :host([variant='primary']) button {
        background: var(--la-color-primary);
        color: var(--la-color-primary-fg);
      }
      :host([variant='primary']) button:hover {
        background: var(--la-color-primary-hover);
        color: var(--la-color-primary-fg);
      }
      :host([variant='outline']) button {
        background: transparent;
        color: var(--la-color-text-secondary);
        border: 1px solid var(--la-color-secondary-border);
      }
      :host([variant='outline']) button:hover {
        background: var(--la-color-secondary-hover);
        color: var(--la-color-text);
      }
      :host([variant='danger']) button {
        background: var(--la-color-danger);
        color: var(--la-color-danger-fg);
      }
      :host([variant='danger']) button:hover {
        background: var(--la-color-danger-hover);
        color: var(--la-color-danger-fg);
      }
      :host([disabled]) {
        opacity: 0.4;
        pointer-events: none;
      }
      :host([disabled]) button {
        cursor: not-allowed;
      }
      :host([pressed]) button {
        background: var(--la-color-bg-active);
        color: var(--la-color-text);
      }
      :host([pressed]) button:hover {
        background: var(--la-color-bg-muted);
      }
    `,
  ];
  __decorate$15([
      n()
  ], exports.LaIconButton.prototype, "label", void 0);
  __decorate$15([
      n({ type: Boolean })
  ], exports.LaIconButton.prototype, "expanded", void 0);
  __decorate$15([
      n({ type: Boolean, reflect: true })
  ], exports.LaIconButton.prototype, "pressed", void 0);
  __decorate$15([
      n({ reflect: true })
  ], exports.LaIconButton.prototype, "size", void 0);
  __decorate$15([
      n({ reflect: true })
  ], exports.LaIconButton.prototype, "variant", void 0);
  __decorate$15([
      n({ type: Boolean, reflect: true })
  ], exports.LaIconButton.prototype, "disabled", void 0);
  exports.LaIconButton = __decorate$15([
      t('la-icon-button')
  ], exports.LaIconButton);

  var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  const COLLAPSE_AT = 4;
  exports.LaBreadcrumb = class LaBreadcrumb extends i$2 {
      constructor() {
          super(...arguments);
          this.items = [];
          this._expanded = false;
      }
      updated(changed) {
          if (changed.has('items')) {
              this._expanded = false;
          }
      }
      render() {
          if (this.items.length === 0)
              return b ``;
          const collapsed = this.items.length >= COLLAPSE_AT && !this._expanded;
          return b `
      ${iconStyles}
      <nav aria-label="Breadcrumb">
        ${collapsed ? this._renderCollapsed() : this._renderFull()}
      </nav>
    `;
      }
      _renderFull() {
          const last = this.items.length - 1;
          return b `${this.items.map((item, i) => {
            if (i === last) {
                return b `<span class="crumb-current" aria-current="page">${item.label}</span>`;
            }
            return b `
        ${this._renderAnchor(item, i)}
        <span class="crumb-separator" aria-hidden="true">/</span>
      `;
        })}`;
      }
      _renderCollapsed() {
          const first = this.items[0];
          const parent = this.items[this.items.length - 2];
          const current = this.items[this.items.length - 1];
          const parentIndex = this.items.length - 2;
          return b `
      ${this._renderAnchor(first, 0)}
      <span class="crumb-separator" aria-hidden="true">/</span>
      <la-icon-button size="sm" label="Show full path" @click=${this._expand}>
        <i class="ph-bold ph-dots-three"></i>
      </la-icon-button>
      <span class="crumb-separator" aria-hidden="true">/</span>
      ${this._renderAnchor(parent, parentIndex)}
      <span class="crumb-separator" aria-hidden="true">/</span>
      <span class="crumb-current" aria-current="page">${current.label}</span>
    `;
      }
      _renderAnchor(item, index) {
          return item.href
              ? b `<a class="crumb-link" href=${item.href}>${item.label}</a>`
              : b `<button class="crumb-link" type="button" @click=${() => this._handleClick(item, index)}>${item.label}</button>`;
      }
      _expand() {
          this._expanded = true;
      }
      _handleClick(item, index) {
          this.dispatchEvent(new CustomEvent('la-breadcrumb', {
              bubbles: true,
              composed: true,
              detail: { label: item.label, index },
          }));
      }
  };
  exports.LaBreadcrumb.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        align-items: center;
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }

      nav {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      .crumb-link {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        text-decoration: none;
        white-space: nowrap;
        transition: color var(--dur-fast) var(--ease);
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        font-family: inherit;
        line-height: inherit;
      }

      .crumb-link:hover {
        color: var(--la-color-text);
      }

      .crumb-separator {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-disabled);
        margin: 0 var(--la-space-sm);
        flex-shrink: 0;
        user-select: none;
      }

      .crumb-current {
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
      }

    `,
  ];
  __decorate$14([
      n({ type: Array })
  ], exports.LaBreadcrumb.prototype, "items", void 0);
  __decorate$14([
      r()
  ], exports.LaBreadcrumb.prototype, "_expanded", void 0);
  exports.LaBreadcrumb = __decorate$14([
      t('la-breadcrumb')
  ], exports.LaBreadcrumb);

  var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaSpinner = class LaSpinner extends i$2 {
      constructor() {
          super(...arguments);
          this.size = 'sm';
          this.appearance = 'default';
          this.label = 'Loading';
      }
      render() {
          return b `
      <span role="status" aria-label=${this.label}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"></circle>
          <circle
            class="arc"
            cx="12"
            cy="12"
            r="9"
            stroke-width="2.5"
            pathLength="100"
          ></circle>
        </svg>
      </span>
    `;
      }
  };
  exports.LaSpinner.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
        line-height: 0;
      }

      :host([appearance='invert']) {
        color: var(--la-color-text-invert);
      }

      svg {
        display: block;
        width: var(--la-spinner-sm);
        height: var(--la-spinner-sm);
        transform-origin: center;
        animation: la-spinner-spin 1.5s linear infinite;
      }

      :host([size='md']) svg {
        width: var(--la-spinner-md);
        height: var(--la-spinner-md);
      }

      :host([size='lg']) svg {
        width: var(--la-spinner-lg);
        height: var(--la-spinner-lg);
      }

      .track {
        fill: none;
        stroke: currentColor;
        opacity: 0.2;
      }

      .arc {
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        transform-origin: center;
        animation: la-spinner-dash 1.4s var(--ease-in-out) infinite;
      }

      @keyframes la-spinner-spin {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes la-spinner-dash {
        0% {
          stroke-dasharray: 5 100;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 70 100;
          stroke-dashoffset: -25;
        }
        100% {
          stroke-dasharray: 5 100;
          stroke-dashoffset: -100;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        svg {
          animation: none;
        }
        .arc {
          animation: none;
          stroke-dasharray: 60 100;
        }
      }
    `,
  ];
  __decorate$13([
      n({ reflect: true })
  ], exports.LaSpinner.prototype, "size", void 0);
  __decorate$13([
      n({ reflect: true })
  ], exports.LaSpinner.prototype, "appearance", void 0);
  __decorate$13([
      n()
  ], exports.LaSpinner.prototype, "label", void 0);
  exports.LaSpinner = __decorate$13([
      t('la-spinner')
  ], exports.LaSpinner);

  var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaButton = class LaButton extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'primary';
          this.size = 'default';
          this.pill = false;
          this.block = false;
          this.disabled = false;
          this.loading = false;
          this.loadingLabel = '';
          this.hideLabel = false;
          /** Tracks whether the icon-left slot has consumer-supplied content.
           *  Reflected to the `has-icon-left` host attribute so CSS can route
           *  the spinner placement (leading-area vs middle-area). */
          this._hasIconLeft = false;
      }
      willUpdate(changedProps) {
          if (changedProps.has('loadingLabel')) {
              if (this.loadingLabel) {
                  this.setAttribute('has-loading-label', '');
              }
              else {
                  this.removeAttribute('has-loading-label');
              }
          }
      }
      _onIconLeftSlotChange(e) {
          const slot = e.target;
          const nodes = slot.assignedNodes({ flatten: true });
          const hasContent = nodes.some((n) => {
              if (n.nodeType === Node.ELEMENT_NODE)
                  return true;
              if (n.nodeType === Node.TEXT_NODE) {
                  return (n.textContent || '').trim().length > 0;
              }
              return false;
          });
          this._hasIconLeft = hasContent;
          if (hasContent) {
              this.setAttribute('has-icon-left', '');
          }
          else {
              this.removeAttribute('has-icon-left');
          }
      }
      _onClick(e) {
          if (this.loading || this.disabled) {
              e.preventDefault();
              e.stopImmediatePropagation();
          }
      }
      _spinnerSize() {
          return this.size === 'sm' ? 'sm' : 'md';
      }
      _spinnerAppearance() {
          return this.variant === 'primary' ||
              this.variant === 'success' ||
              this.variant === 'danger'
              ? 'invert'
              : 'default';
      }
      render() {
          return b `<button
      part="button"
      ?disabled=${this.disabled}
      aria-busy=${this.loading ? 'true' : A}
      @click=${this._onClick}
    >
      <span class="leading-area">
        <la-spinner
          class="leading-spinner"
          size=${this._spinnerSize()}
          appearance=${this._spinnerAppearance()}
          label="Loading"
          aria-hidden="true"
        ></la-spinner>
        <span class="icon-left-slot">
          <slot name="icon-left" @slotchange=${this._onIconLeftSlotChange}></slot>
        </span>
      </span>
      <span class="middle-area">
        <span class="default-content"><slot></slot></span>
        <span class="loading-state">
          ${!this._hasIconLeft || this.hideLabel
            ? b `<la-spinner
                class="middle-spinner"
                size=${this._spinnerSize()}
                appearance=${this._spinnerAppearance()}
                label="Loading"
                aria-hidden="true"
              ></la-spinner>`
            : A}
          <span class="loading-text">${this.loadingLabel}</span>
        </span>
      </span>
      <slot name="icon-right"></slot>
    </button>`;
      }
  };
  exports.LaButton.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-block;
      }
      :host([block]) {
        display: block;
        width: 100%;
      }
      :host([block]) button {
        width: 100%;
      }
      button {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--la-space-2xs);
        height: var(--la-button-height-default);
        padding: 0 var(--la-space-lg);
        border-radius: var(--la-radius-md);
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-normal);
        border: none;
        cursor: pointer;
        font-family: inherit;
        line-height: var(--la-line-height);
        transition: background var(--dur-fast) var(--ease),
          color var(--dur-fast) var(--ease),
          transform var(--dur-fast) var(--ease);
      }
      slot {
        display: contents;
      }
      button:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: 2px;
      }
      button:active {
        transform: scale(var(--scale-press));
      }
      :host([variant='primary']) button {
        background: var(--la-color-primary);
        color: var(--la-color-primary-fg);
      }
      :host([variant='primary']) button:hover {
        background: var(--la-color-primary-hover);
      }
      :host([variant='secondary']) button {
        background: var(--la-color-secondary-bg);
        color: var(--la-color-secondary-text);
        border: 1px solid var(--la-color-secondary-border);
        box-shadow: var(--la-shadow-xs);
      }
      :host([variant='secondary']) button:hover {
        background: var(--la-color-secondary-hover);
      }
      :host([variant='success']) button {
        background: var(--la-color-success);
        color: var(--la-color-success-fg);
      }
      :host([variant='success']) button:hover {
        background: var(--la-color-success-hover);
      }
      :host([variant='danger']) button {
        background: var(--la-color-danger);
        color: var(--la-color-danger-fg);
      }
      :host([variant='danger']) button:hover {
        background: var(--la-color-danger-hover);
      }
      :host([variant='destructive']) button {
        background: var(--la-color-secondary-bg);
        color: var(--la-color-danger-text);
        border: 1px solid var(--la-color-secondary-border);
        box-shadow: var(--la-shadow-xs);
      }
      :host([variant='destructive']) button:hover {
        background: var(--la-color-surface-danger);
        border-color: var(--la-color-border-danger);
      }
      :host([variant='ghost']) button {
        background: transparent;
        color: var(--la-color-text-secondary);
        font-weight: var(--la-font-weight-normal);
      }
      :host([variant='ghost']) button:hover {
        background: var(--la-color-secondary-hover);
        color: var(--la-color-text);
      }
      :host([size='sm']) button {
        height: var(--la-button-height-sm);
        font-size: var(--la-font-size-sm);
        padding: 0 var(--la-space-md);
      }
      :host([size='sm'][variant='secondary']) button {
        box-shadow: var(--la-shadow-xs);
      }

      :host([size='md']) button {
        height: var(--la-button-height-md);
        font-size: var(--la-font-size-base);
        padding: 0 var(--la-space-lg);
      }
      :host([size='lg']) button {
        height: var(--la-button-height-lg);
        font-size: var(--la-font-size-lg);
        padding: 0 var(--la-space-lg);
        border-radius: var(--la-radius-lg);
      }
      :host([pill]) button {
        border-radius: var(--la-radius-pill);
      }
      :host([disabled]) {
        opacity: 0.4;
        pointer-events: none;
      }
      :host([disabled]) button {
        cursor: not-allowed;
      }

      /* ── Loading state — auto-routed by icon-left presence ─────
         If the button has a consumer-supplied icon-left, the spinner
         stacks on top of that icon (replacing it during loading) and
         the label stays. If the button has no icon-left, the spinner
         shows centred in the label area and the label fades out. In
         both cases, the button's resting width is preserved — no
         phantom space, no width jump on toggle. */

      /* Leading area — only present when consumer supplies icon-left.
         When no icon-left, the area is display: none; no width
         contribution; no flex gap to neighbours. */
      .leading-area {
        display: grid;
        grid-template-areas: 'stack';
        align-items: center;
        justify-items: center;
      }
      :host(:not([has-icon-left])) .leading-area,
      :host([hide-label]) .leading-area {
        /* No leading area when there's no icon-left to show, OR when
           hide-label is set — Pattern C should always centre the
           spinner in the button, regardless of icon-left presence. */
        display: none;
      }
      .leading-spinner,
      .icon-left-slot {
        grid-area: stack;
        display: inline-flex;
        align-items: center;
        transition: opacity var(--dur-base) var(--ease-out),
          transform var(--dur-base) var(--ease-out);
      }
      .leading-spinner {
        opacity: 0;
        transform: scale(var(--scale-enter));
      }
      :host([loading][has-icon-left]) .leading-spinner {
        opacity: 1;
        transform: scale(1);
      }
      :host([loading][has-icon-left]) .icon-left-slot {
        opacity: 0;
        transform: scale(var(--scale-enter));
      }

      /* Middle area — grid-stack of resting label and loading state.
         Resting holds the consumer's default slot content; loading
         state holds the centred spinner (only when no icon-left)
         and the loading-label text (only when set). The cell auto-
         sizes to whichever child is widest, so the simple case (no
         icon, no loading-label) never changes width. */
      .middle-area {
        display: grid;
        grid-template-areas: 'stack';
        align-items: center;
        justify-items: center;
      }
      .default-content,
      .loading-state {
        grid-area: stack;
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-2xs);
        transition: opacity var(--dur-base) var(--ease-out),
          transform var(--dur-base) var(--ease-out);
      }
      .loading-state {
        opacity: 0;
        transform: scale(var(--scale-enter));
      }
      :host([loading]) .loading-state {
        opacity: 1;
        transform: scale(1);
      }

      /* Default-content fading rules — depends on which loading
         pattern is active. Default content stays visible only when
         the spinner takes the icon's place (Pattern B with icon).
         It fades out in: no-icon-left case, has-loading-label case,
         hide-label case. */
      :host([loading]:not([has-icon-left])) .default-content,
      :host([loading][has-loading-label]) .default-content,
      :host([loading][hide-label]) .default-content {
        opacity: 0;
        transform: scale(var(--scale-enter));
      }

      /* Loading-text inside loading-state — visible only when
         loading-label is set and hide-label is not. */
      .loading-text:empty {
        display: none;
      }
      :host([hide-label]) .loading-text {
        display: none;
      }

      /* Click suppression — pointer-events on host plus a JS guard
         in _onClick. Belt-and-braces per the locked spec. */
      :host([loading]) {
        pointer-events: none;
      }
      :host([loading]) button {
        cursor: not-allowed;
      }

      @media (prefers-reduced-motion: reduce) {
        .leading-spinner,
        .icon-left-slot,
        .default-content,
        .loading-state {
          transition: none;
        }
      }
    `,
  ];
  __decorate$12([
      n({ reflect: true })
  ], exports.LaButton.prototype, "variant", void 0);
  __decorate$12([
      n({ reflect: true })
  ], exports.LaButton.prototype, "size", void 0);
  __decorate$12([
      n({ type: Boolean, reflect: true })
  ], exports.LaButton.prototype, "pill", void 0);
  __decorate$12([
      n({ type: Boolean, reflect: true })
  ], exports.LaButton.prototype, "block", void 0);
  __decorate$12([
      n({ type: Boolean, reflect: true })
  ], exports.LaButton.prototype, "disabled", void 0);
  __decorate$12([
      n({ type: Boolean, reflect: true })
  ], exports.LaButton.prototype, "loading", void 0);
  __decorate$12([
      n({ attribute: 'loading-label' })
  ], exports.LaButton.prototype, "loadingLabel", void 0);
  __decorate$12([
      n({ type: Boolean, reflect: true, attribute: 'hide-label' })
  ], exports.LaButton.prototype, "hideLabel", void 0);
  __decorate$12([
      r()
  ], exports.LaButton.prototype, "_hasIconLeft", void 0);
  exports.LaButton = __decorate$12([
      t('la-button')
  ], exports.LaButton);

  var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaCard = class LaCard extends i$2 {
      constructor() {
          super(...arguments);
          this.heading = '';
          this.nopadding = false;
      }
      render() {
          return b `
      <div class="card">
        ${this.heading
            ? b `<div class="header">${this.heading}</div>`
            : ''}
        <div class="body"><slot></slot></div>
      </div>
    `;
      }
  };
  exports.LaCard.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .card {
        border: 1px solid var(--la-color-border);
        border-radius: var(--la-radius-lg);
        background: var(--la-color-bg);
        overflow: hidden;
      }
      .header {
        padding: 10px 14px;
        border-bottom: 1px solid var(--la-color-border-light);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
      }
      .body {
        padding: 14px;
      }
      :host([nopadding]) .body {
        padding: 0;
      }
    `,
  ];
  __decorate$11([
      n()
  ], exports.LaCard.prototype, "heading", void 0);
  __decorate$11([
      n({ type: Boolean, reflect: true })
  ], exports.LaCard.prototype, "nopadding", void 0);
  exports.LaCard = __decorate$11([
      t('la-card')
  ], exports.LaCard);

  var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaPanel = class LaPanel extends i$2 {
      constructor() {
          super(...arguments);
          this.clickable = false;
          this.dimmed = false;
          this.heading = '';
      }
      render() {
          return b `
      <div class="panel" part="panel">
        ${this.heading ? b `<div class="heading">${this.heading}</div>` : A}
        <slot></slot>
      </div>
    `;
      }
  };
  exports.LaPanel.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
      }
      .panel {
        border-radius: var(--la-radius-lg);
        background: var(--la-color-bg-subtle);
        padding: var(--la-space-lg);
      }
      :host([clickable]) .panel {
        cursor: pointer;
      }
      :host([dimmed]) .panel {
        opacity: 0.7;
      }
      .heading {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-md);
      }
    `,
  ];
  __decorate$10([
      n({ type: Boolean, reflect: true })
  ], exports.LaPanel.prototype, "clickable", void 0);
  __decorate$10([
      n({ type: Boolean, reflect: true })
  ], exports.LaPanel.prototype, "dimmed", void 0);
  __decorate$10([
      n()
  ], exports.LaPanel.prototype, "heading", void 0);
  exports.LaPanel = __decorate$10([
      t('la-panel')
  ], exports.LaPanel);

  var __decorate$$ = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-list-item — three-column row primitive for lists.
   *
   *   icon (leading)  |  content (flex-grow)  |  meta (trailing)  |  actions (trailing)
   *
   * Non-interactive by default — use inside static lists (directors, contacts,
   * invoices, etc.). Flip `clickable` to make the row a native button with hover,
   * focus-visible, and keyboard activation. Actions inside the `actions` slot
   * never bubble their click to the row — consumers can put per-row action
   * buttons (edit, remove, more) without hijacking the row click.
   */
  exports.LaListItem = class LaListItem extends i$2 {
      constructor() {
          super(...arguments);
          /** Tints the row background with `--la-color-surface-danger`. */
          this.error = false;
          /** When true, the row renders as a native button — tab-focusable, keyboard-activated, hover + focus styles. */
          this.clickable = false;
      }
      /** Stop clicks inside the actions slot from bubbling to the row click. */
      _onActionsClick(e) {
          e.stopPropagation();
      }
      render() {
          const inner = b `
      <span class="icon"><slot name="icon"></slot></span>
      <span class="content"><slot></slot></span>
      <span class="meta"><slot name="meta"></slot></span>
      <span class="actions" @click=${this._onActionsClick}><slot name="actions"></slot></span>
    `;
          return this.clickable
              ? b `<button class="row" type="button">${inner}</button>`
              : b `<div class="row">${inner}</div>`;
      }
  };
  exports.LaListItem.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /* ── Row shell ─────────────────────────────── */
      .row {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        padding: var(--la-space-sm) var(--la-space-md);
        border-bottom: 1px solid var(--la-color-border-light);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
        position: relative;
        box-sizing: border-box;
      }
      :host(:last-child) .row {
        border-bottom: none;
      }

      /* ── Clickable — native button reset + interactive states ── */
      button.row {
        appearance: none;
        -webkit-appearance: none;
        background: none;
        border: none;
        border-bottom: 1px solid var(--la-color-border-light);
        font: inherit;
        color: inherit;
        text-align: left;
        width: 100%;
        margin: 0;
        cursor: pointer;
        z-index: 0;
      }
      button.row::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--la-color-bg-muted);
        opacity: 0;
        transition: opacity var(--dur-fast) var(--ease);
        pointer-events: none;
        z-index: -1;
      }
      button.row:hover::before {
        opacity: 1;
      }
      button.row:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: calc(var(--la-focus-ring-offset) * -1);
      }

      /* ── Error state ───────────────────────────── */
      :host([error]) .row {
        background: var(--la-color-surface-danger);
      }
      :host([error]) button.row::before {
        display: none;
      }

      /* ── Columns ───────────────────────────────── */
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: var(--la-font-size-lg);
        color: var(--la-color-text-muted);
      }
      .icon:empty {
        display: none;
      }
      .content {
        flex: 1;
        min-width: 0;
      }
      .meta {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        white-space: nowrap;
        flex-shrink: 0;
      }
      .meta:empty {
        display: none;
      }

      /* ── Actions slot — click-stopped container ── */
      .actions {
        display: flex;
        align-items: center;
        gap: var(--la-space-xs);
        flex-shrink: 0;
      }
      .actions:empty {
        display: none;
      }
    `,
  ];
  __decorate$$([
      n({ type: Boolean, reflect: true })
  ], exports.LaListItem.prototype, "error", void 0);
  __decorate$$([
      n({ type: Boolean, reflect: true })
  ], exports.LaListItem.prototype, "clickable", void 0);
  exports.LaListItem = __decorate$$([
      t('la-list-item')
  ], exports.LaListItem);

  var __decorate$_ = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaCheckbox = class LaCheckbox extends i$2 {
      constructor() {
          super(...arguments);
          this.checked = false;
          this.indeterminate = false;
          this.disabled = false;
          this.label = '';
      }
      updated(changed) {
          if (changed.has('indeterminate') && this.input) {
              this.input.indeterminate = this.indeterminate;
          }
      }
      handleChange(e) {
          const target = e.target;
          this.checked = target.checked;
          this.indeterminate = false;
          this.dispatchEvent(new CustomEvent('la-change', {
              detail: { checked: this.checked },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          return b `
      <input
        type="checkbox"
        aria-label=${this.label}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this.handleChange}
        @click=${(e) => e.stopPropagation()}
      />
    `;
      }
  };
  exports.LaCheckbox.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
        line-height: 0;
      }
      :host([disabled]) {
        opacity: 0.4;
        pointer-events: none;
      }

      input {
        appearance: none;
        -webkit-appearance: none;
        width: var(--la-checkbox-size);
        height: var(--la-checkbox-size);
        border: 1px solid var(--la-color-secondary-border);
        border-radius: var(--la-radius-sm);
        background: var(--la-color-bg);
        box-shadow: var(--la-shadow-xs);
        cursor: pointer;
        margin: 0;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition:
          background var(--dur-fast) var(--ease),
          border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
      }
      input:hover {
        border-color: var(--la-color-text-muted);
      }
      input:checked,
      input:indeterminate {
        background: var(--la-color-primary);
        border-color: var(--la-color-primary);
        box-shadow: none;
      }
      input:checked::after {
        content: '';
        width: var(--la-checkbox-icon-size);
        height: var(--la-checkbox-icon-size);
        background: var(--la-color-primary-fg);
        -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'><path d='M3 8l3.5 3.5L13 5' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>") no-repeat center / contain;
                mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'><path d='M3 8l3.5 3.5L13 5' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg>") no-repeat center / contain;
      }
      input:indeterminate::after {
        content: '';
        width: calc(var(--la-checkbox-icon-size) - 4px);
        height: 1.5px;
        background: var(--la-color-primary-fg);
        border-radius: 1px;
      }
      input:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
    `,
  ];
  __decorate$_([
      n({ type: Boolean, reflect: true })
  ], exports.LaCheckbox.prototype, "checked", void 0);
  __decorate$_([
      n({ type: Boolean, reflect: true })
  ], exports.LaCheckbox.prototype, "indeterminate", void 0);
  __decorate$_([
      n({ type: Boolean, reflect: true })
  ], exports.LaCheckbox.prototype, "disabled", void 0);
  __decorate$_([
      n()
  ], exports.LaCheckbox.prototype, "label", void 0);
  __decorate$_([
      e$1('input')
  ], exports.LaCheckbox.prototype, "input", void 0);
  exports.LaCheckbox = __decorate$_([
      t('la-checkbox')
  ], exports.LaCheckbox);

  var __decorate$Z = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-switch — binary on/off toggle.
   *
   * Wraps a native `<input type="checkbox" role="switch">` styled as a pill
   * track + circular thumb. Keeps form-submission semantics and screen-reader
   * behaviour (role="switch" + aria-checked) via the native element.
   *
   * API mirrors la-checkbox:
   *   - `checked` (boolean, reflected)
   *   - `disabled` (boolean, reflected)
   *   - `label` (aria-label for the input)
   *   - `la-change` event with `{ checked }` detail
   *
   * Sizing (32/18/14 px) is hardcoded for v1 since there's only one size.
   * If a sm / lg variant lands, graduate to a --la-switch-* token family.
   */
  exports.LaSwitch = class LaSwitch extends i$2 {
      constructor() {
          super(...arguments);
          this.checked = false;
          this.disabled = false;
          this.label = '';
      }
      _handleChange(e) {
          const target = e.target;
          this.checked = target.checked;
          this.dispatchEvent(new CustomEvent('la-change', {
              detail: { checked: this.checked },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          return b `
      <label class="track">
        <input
          type="checkbox"
          role="switch"
          aria-label=${this.label}
          aria-checked=${this.checked ? 'true' : 'false'}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
          @click=${(e) => e.stopPropagation()}
        />
        <span class="thumb" aria-hidden="true"></span>
      </label>
    `;
      }
  };
  exports.LaSwitch.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
        line-height: 0;
      }
      :host([disabled]) {
        opacity: 0.4;
      }
      :host([disabled]) .track {
        cursor: not-allowed;
      }

      .track {
        position: relative;
        width: 32px;
        height: 18px;
        border-radius: var(--la-radius-pill);
        background: var(--la-switch-bg-off);
        border: 1px solid var(--la-color-secondary-border);
        cursor: pointer;
        transition:
          background var(--dur-fast) var(--ease),
          border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
        box-sizing: border-box;
      }
      :host(:not([disabled])) .track:hover {
        background: var(--la-switch-bg-off-hover);
        box-shadow: var(--la-shadow-sm);
      }
      :host([checked]:not([disabled])) .track:hover {
        background: var(--la-color-primary-hover);
      }

      /* Native input — hidden but kept in the DOM for form + a11y semantics */
      input {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        opacity: 0;
        cursor: inherit;
      }

      .thumb {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 14px;
        height: 14px;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg);
        box-shadow: var(--la-shadow-sm);
        pointer-events: none;
        transition: transform var(--dur-fast) var(--ease);
      }

      :host([checked]) .track {
        background: var(--la-color-primary);
        border-color: var(--la-color-primary);
      }
      :host([checked]) .thumb {
        /* track 32 − thumb 14 − left 1 − right 1 = 16px travel */
        transform: translateX(14px);
      }

      input:focus-visible + .thumb,
      input:focus-visible {
        outline: none;
      }
      :host(:focus-within) .track {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
    `,
  ];
  __decorate$Z([
      n({ type: Boolean, reflect: true })
  ], exports.LaSwitch.prototype, "checked", void 0);
  __decorate$Z([
      n({ type: Boolean, reflect: true })
  ], exports.LaSwitch.prototype, "disabled", void 0);
  __decorate$Z([
      n()
  ], exports.LaSwitch.prototype, "label", void 0);
  exports.LaSwitch = __decorate$Z([
      t('la-switch')
  ], exports.LaSwitch);

  var __decorate$Y = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  // filled=true: checked state uses success-surface fill instead of primary border
  exports.LaChoice = class LaChoice extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'default';
          this.checked = false;
          this.invalid = false;
          this.filled = false;
          this.description = '';
          this._handleClick = () => {
              this.checked = !this.checked;
              this.dispatchEvent(new CustomEvent('la-change', {
                  detail: { checked: this.checked },
                  bubbles: true,
                  composed: true,
              }));
          };
          this._handleKeydown = (e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  this._handleClick();
              }
          };
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'checkbox');
          if (!this.hasAttribute('tabindex'))
              this.setAttribute('tabindex', '0');
          this.addEventListener('click', this._handleClick);
          this.addEventListener('keydown', this._handleKeydown);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this.removeEventListener('click', this._handleClick);
          this.removeEventListener('keydown', this._handleKeydown);
      }
      updated(changed) {
          if (changed.has('checked')) {
              this.setAttribute('aria-checked', String(this.checked));
          }
      }
      render() {
          const rowClass = `row${this.variant === 'contained' ? ' row--contained' : ''}`;
          return b `
      <div class=${rowClass}>
        <div class="checkbox-wrap" aria-hidden="true">
          <la-checkbox ?checked=${this.checked} tabindex="-1"></la-checkbox>
        </div>
        <div class="content">
          <span class="label"><slot></slot></span>
          ${this.description ? b `<span class="description">${this.description}</span>` : ''}
        </div>
      </div>
    `;
      }
  };
  exports.LaChoice.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        cursor: pointer;
        user-select: none;
      }
      :host(:focus-visible) {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
        border-radius: var(--la-radius-sm);
      }
      .row {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        box-sizing: border-box;
      }
      .row--contained {
        background: var(--la-color-bg-subtle);
        border-radius: var(--la-radius-xl);
        padding: var(--la-space-md);
        border: 1px solid transparent;
        position: relative;
        z-index: 0;
      }
      .row--contained::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--la-color-secondary-hover);
        opacity: 0;
        transition: opacity var(--dur-fast) var(--ease);
        pointer-events: none;
        z-index: -1;
      }
      .row--contained:hover::before {
        opacity: 1;
      }
      :host([checked]) .row--contained {
        border: 1px solid var(--la-color-primary);
      }
      :host([filled][checked]) .row--contained {
        background: var(--la-color-surface-success);
        border-color: transparent;
      }

      /* Wrap la-checkbox to intercept clicks — host handles toggle */
      .checkbox-wrap {
        flex-shrink: 0;
        margin-top: var(--la-checkbox-offset);
        pointer-events: none;
        display: flex;
        border-radius: var(--la-radius-sm);
      }
      /* Invalid ring around the checkbox */
      :host([invalid]) .checkbox-wrap {
        outline: 1.5px solid var(--la-color-border-danger);
        outline-offset: 1px;
      }
      :host([invalid]) .content .label {
        color: var(--la-color-danger-text);
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-3xs);
        flex: 1;
        min-width: 0;
      }
      .label {
        line-height: var(--la-line-height);
      }
      .description {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        line-height: var(--la-line-height);
      }
      @media (prefers-reduced-motion: reduce) {
        .row--contained::before { transition: none; }
      }
    `,
  ];
  __decorate$Y([
      n({ reflect: true })
  ], exports.LaChoice.prototype, "variant", void 0);
  __decorate$Y([
      n({ type: Boolean, reflect: true })
  ], exports.LaChoice.prototype, "checked", void 0);
  __decorate$Y([
      n({ type: Boolean, reflect: true })
  ], exports.LaChoice.prototype, "invalid", void 0);
  __decorate$Y([
      n({ type: Boolean, reflect: true })
  ], exports.LaChoice.prototype, "filled", void 0);
  __decorate$Y([
      n()
  ], exports.LaChoice.prototype, "description", void 0);
  exports.LaChoice = __decorate$Y([
      t('la-choice')
  ], exports.LaChoice);

  var __decorate$X = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * Stepped progress indicator for multi-step linear flows. Each step renders
   * as an equal-width segment in a horizontal bar; the bar fills with primary
   * colour left-to-right as steps are completed, and skipped steps appear as
   * visible grey gaps in the primary fill.
   *
   * Display-only — state is driven entirely by the `steps` property; the
   * component emits no events. Used by the unlock flow; reusable for any
   * linear multi-step flow (onboarding, KYC, sign-up).
   */
  exports.LaStepper = class LaStepper extends i$2 {
      constructor() {
          super(...arguments);
          /**
           * Ordered list of steps to render. Each step is a `{ label, status }`
           * object. Each step renders as an equal-width segment in a horizontal
           * bar; the bar fills left-to-right as steps are completed.
           *
           * - `pending` — light rail. The empty track ahead.
           * - `active` — solid primary. Position is the last primary segment.
           * - `complete` — solid primary. Indistinguishable from `active` by
           *   design — the transition point shows the user's place.
           * - `skipped` — solid muted. Visible grey gap in the primary fill.
           * - `processing` — deferred; muted-primary tint until consumers wire
           *   the document-upload path.
           *
           * The `label` is kept for accessibility (exposed via `aria-label` on
           * each segment) and for future callers that may reintroduce visible
           * text. The component does not render labels visually — the surrounding
           * flow names each step in its own copy.
           */
          this.steps = [];
      }
      render() {
          return b `
      <div class="steps" role="list">
        ${this.steps.map((step) => b `<div
            class="step ${step.status}"
            role="listitem"
            aria-label=${step.label
            ? `Step ${step.label}, ${step.status}`
            : `Step ${step.status}`}
          ></div>`)}
      </div>
    `;
      }
  };
  exports.LaStepper.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /*
        Visual language — a horizontal bar segmented by step.
        Each step is an equal-width pill. The bar fills with primary
        colour left-to-right as steps are completed; skipped steps
        appear as grey gaps in the primary fill.

        | Status     | Treatment                                              |
        |------------|--------------------------------------------------------|
        | pending    | light rail — the empty track ahead                     |
        | active     | solid primary — position is the last primary segment   |
        | complete   | solid primary                                          |
        | skipped    | solid muted — visible gap in the primary fill          |
        | processing | deferred; muted-primary tint until consumers wire the  |
        |            | document-upload path                                   |

        Completion is reached when every segment is primary — the bar
        itself becomes the celebration. Per-step animation is
        intentionally absent; that moment belongs to la-unlock-panel.
      */
      .steps {
        display: flex;
        align-items: stretch;
        gap: var(--la-space-xs);
      }
      .step {
        width: 32px;
        height: 2px;
        border-radius: 1px;
        background: var(--la-color-border-light);
        transition: background-color var(--dur-fast) var(--ease);
      }
      .step.pending {
        background: var(--la-color-border-light);
      }
      .step.active,
      .step.complete {
        background: var(--la-color-primary);
      }
      .step.skipped {
        background: var(--la-color-border);
      }
      /* Deferred: processing state (document-upload path, not wired yet).
         Muted-primary tint to read as 'in progress but unresolved'. */
      .step.processing {
        background: var(--la-color-bg-muted);
      }

      @media (prefers-reduced-motion: reduce) {
        .step {
          transition: none;
        }
      }
    `,
  ];
  __decorate$X([
      n({ type: Array })
  ], exports.LaStepper.prototype, "steps", void 0);
  exports.LaStepper = __decorate$X([
      t('la-stepper')
  ], exports.LaStepper);

  var __decorate$W = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaInput = class LaInput extends i$2 {
      constructor() {
          super(...arguments);
          this._inputId = `la-input-${Math.random().toString(36).slice(2, 8)}`;
          this.type = 'text';
          this.name = '';
          this.placeholder = '';
          this.value = '';
          this.label = '';
          this.hint = '';
          this.required = false;
          this.optional = false;
          this.disabled = false;
          this.error = false;
          this._hasIconLeft = false;
          this._hasIconRight = false;
      }
      _checkLeft(e) {
          this._hasIconLeft = e.target.assignedElements().length > 0;
      }
      _checkRight(e) {
          this._hasIconRight = e.target.assignedElements().length > 0;
      }
      _handleInput(e) {
          this.value = e.target.value;
          this.dispatchEvent(new CustomEvent('la-change', { detail: { value: this.value }, bubbles: true, composed: true }));
      }
      render() {
          const shellClass = [
              'input-shell',
              this._hasIconLeft ? 'has-left' : '',
              this._hasIconRight ? 'has-right' : '',
          ].filter(Boolean).join(' ');
          return b `
      ${iconStyles}
      ${this.label ? b `
        <label for=${this._inputId}>
          ${this.label}${this.required ? b `<span class="req" aria-hidden="true">*</span>` : ''}${this.optional ? b `<span class="opt">Optional</span>` : ''}
        </label>` : ''}
      <div class=${shellClass}>
        <span class="icon icon--left" aria-hidden="true">
          <slot name="icon-left" @slotchange=${this._checkLeft}></slot>
        </span>
        <input
          id=${this._inputId}
          type=${this.type}
          name=${this.name}
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this._handleInput}
        />
        <span class="icon icon--right" aria-hidden="true">
          <slot name="icon-right" @slotchange=${this._checkRight}></slot>
        </span>
      </div>
      ${this.hint ? b `<div class="hint">${this.hint}</div>` : ''}
    `;
      }
  };
  exports.LaInput.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      label {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-2xs);
      }
      .req {
        color: var(--la-color-danger);
        margin-left: 2px;
      }
      .opt {
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text-muted);
        margin-left: var(--la-space-xs);
      }
      .input-shell {
        position: relative;
        display: flex;
        align-items: center;
      }
      .icon {
        position: absolute;
        display: flex;
        align-items: center;
        color: var(--la-color-text-muted);
        pointer-events: none;
        font-size: var(--la-font-size-base);
      }
      .icon--left  { left:  var(--la-space-md); }
      .icon--right { right: var(--la-space-md); }
      input {
        width: 100%;
        box-sizing: border-box;
        font-family: inherit;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-md);
        border: 1px solid var(--la-color-border);
        background: var(--la-color-bg);
        outline: none;
        line-height: var(--la-line-height);
        transition: border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
      }
      input:focus {
        border-color: var(--la-color-border-focus);
        box-shadow: var(--la-input-shadow-focus);
      }
      input::placeholder {
        color: var(--la-color-text-disabled);
      }
      input:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      /* icon padding compensation */
      .has-left  input { padding-left:  calc(var(--la-space-md) + var(--la-font-size-base) + var(--la-space-sm)); }
      .has-right input { padding-right: calc(var(--la-space-md) + var(--la-font-size-base) + var(--la-space-sm)); }
      :host([error]) input {
        border-color: var(--la-color-border-danger);
      }
      :host([error]) input:focus {
        box-shadow: none;
      }
      .hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-xs);
      }
      :host([error]) .hint {
        color: var(--la-color-danger-text);
      }
    `,
  ];
  __decorate$W([
      n({ reflect: true })
  ], exports.LaInput.prototype, "type", void 0);
  __decorate$W([
      n()
  ], exports.LaInput.prototype, "name", void 0);
  __decorate$W([
      n()
  ], exports.LaInput.prototype, "placeholder", void 0);
  __decorate$W([
      n()
  ], exports.LaInput.prototype, "value", void 0);
  __decorate$W([
      n()
  ], exports.LaInput.prototype, "label", void 0);
  __decorate$W([
      n()
  ], exports.LaInput.prototype, "hint", void 0);
  __decorate$W([
      n({ type: Boolean, reflect: true })
  ], exports.LaInput.prototype, "required", void 0);
  __decorate$W([
      n({ type: Boolean })
  ], exports.LaInput.prototype, "optional", void 0);
  __decorate$W([
      n({ type: Boolean, reflect: true })
  ], exports.LaInput.prototype, "disabled", void 0);
  __decorate$W([
      n({ type: Boolean, reflect: true })
  ], exports.LaInput.prototype, "error", void 0);
  __decorate$W([
      r()
  ], exports.LaInput.prototype, "_hasIconLeft", void 0);
  __decorate$W([
      r()
  ], exports.LaInput.prototype, "_hasIconRight", void 0);
  exports.LaInput = __decorate$W([
      t('la-input')
  ], exports.LaInput);

  var __decorate$V = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaTextarea = class LaTextarea extends i$2 {
      constructor() {
          super(...arguments);
          this._inputId = `la-textarea-${Math.random().toString(36).slice(2, 8)}`;
          this.name = '';
          this.placeholder = '';
          this.value = '';
          this.label = '';
          this.hint = '';
          this.required = false;
          this.disabled = false;
          this.error = false;
          this.rows = 3;
          this.minRows = 3;
          this.maxRows = 8;
          this.showCount = false;
          this._lastInlineSize = 0;
      }
      firstUpdated() {
          this._autosize();
          this._resizeObs = new ResizeObserver((entries) => {
              const w = entries[0]?.contentRect.width ?? 0;
              if (w !== this._lastInlineSize) {
                  this._lastInlineSize = w;
                  this._autosize();
              }
          });
          this._resizeObs.observe(this);
      }
      updated(changed) {
          if (changed.has('value') || changed.has('minRows') || changed.has('maxRows')) {
              this._autosize();
          }
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this._resizeObs?.disconnect();
      }
      _autosize() {
          const ta = this._textarea;
          if (!ta)
              return;
          const styles = getComputedStyle(ta);
          const lineHeight = parseFloat(styles.lineHeight);
          const paddingTop = parseFloat(styles.paddingTop);
          const paddingBottom = parseFloat(styles.paddingBottom);
          const borderTop = parseFloat(styles.borderTopWidth);
          const borderBottom = parseFloat(styles.borderBottomWidth);
          const verticalChrome = paddingTop + paddingBottom + borderTop + borderBottom;
          const minHeight = lineHeight * this.minRows + verticalChrome;
          const maxHeight = lineHeight * this.maxRows + verticalChrome;
          ta.style.height = 'auto';
          const contentHeight = ta.scrollHeight + borderTop + borderBottom;
          const clamped = Math.min(Math.max(contentHeight, minHeight), maxHeight);
          ta.style.height = `${clamped}px`;
          ta.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
      }
      _handleInput(e) {
          this.value = e.target.value;
          this._autosize();
          this.dispatchEvent(new CustomEvent('la-change', { detail: { value: this.value }, bubbles: true, composed: true }));
      }
      render() {
          const showCounter = this.showCount || typeof this.maxlength === 'number';
          const overLimit = typeof this.maxlength === 'number' && this.value.length >= this.maxlength;
          const counterText = typeof this.maxlength === 'number'
              ? `${this.value.length} / ${this.maxlength}`
              : `${this.value.length}`;
          return b `
      ${this.label
            ? b `
            <label for=${this._inputId}>
              ${this.label}${this.required
                ? b `<span class="req" aria-hidden="true">*</span>`
                : ''}
            </label>
          `
            : ''}
      <textarea
        id=${this._inputId}
        name=${this.name}
        placeholder=${this.placeholder}
        rows=${this.rows}
        .value=${this.value}
        ?disabled=${this.disabled}
        ?required=${this.required}
        maxlength=${o(this.maxlength)}
        @input=${this._handleInput}
      ></textarea>
      ${this.hint || showCounter
            ? b `
            <div class="meta">
              ${this.hint ? b `<div class="hint">${this.hint}</div>` : ''}
              ${showCounter
                ? b `<div class="count ${overLimit ? 'over' : ''}">${counterText}</div>`
                : ''}
            </div>
          `
            : ''}
    `;
      }
  };
  exports.LaTextarea.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      label {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-2xs);
      }
      .req {
        color: var(--la-color-danger);
        margin-left: 2px;
      }
      textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-family: inherit;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-md);
        border: 1px solid var(--la-color-border);
        background: var(--la-color-bg);
        outline: none;
        line-height: var(--la-line-height);
        resize: none;
        overflow-y: hidden;
        transition: border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
      }
      textarea:focus {
        border-color: var(--la-color-border-focus);
        box-shadow: var(--la-input-shadow-focus);
      }
      textarea::placeholder {
        color: var(--la-color-text-disabled);
      }
      textarea:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      :host([error]) textarea {
        border-color: var(--la-color-border-danger);
      }
      :host([error]) textarea:focus {
        box-shadow: none;
      }
      .meta {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        margin-top: var(--la-space-xs);
      }
      .hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
      }
      .count {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-left: auto;
        font-variant-numeric: tabular-nums;
      }
      :host([error]) .hint,
      :host([error]) .count,
      .count.over {
        color: var(--la-color-danger-text);
      }
    `,
  ];
  __decorate$V([
      n()
  ], exports.LaTextarea.prototype, "name", void 0);
  __decorate$V([
      n()
  ], exports.LaTextarea.prototype, "placeholder", void 0);
  __decorate$V([
      n()
  ], exports.LaTextarea.prototype, "value", void 0);
  __decorate$V([
      n()
  ], exports.LaTextarea.prototype, "label", void 0);
  __decorate$V([
      n()
  ], exports.LaTextarea.prototype, "hint", void 0);
  __decorate$V([
      n({ type: Boolean, reflect: true })
  ], exports.LaTextarea.prototype, "required", void 0);
  __decorate$V([
      n({ type: Boolean, reflect: true })
  ], exports.LaTextarea.prototype, "disabled", void 0);
  __decorate$V([
      n({ type: Boolean, reflect: true })
  ], exports.LaTextarea.prototype, "error", void 0);
  __decorate$V([
      n({ type: Number })
  ], exports.LaTextarea.prototype, "rows", void 0);
  __decorate$V([
      n({ type: Number, attribute: 'min-rows' })
  ], exports.LaTextarea.prototype, "minRows", void 0);
  __decorate$V([
      n({ type: Number, attribute: 'max-rows' })
  ], exports.LaTextarea.prototype, "maxRows", void 0);
  __decorate$V([
      n({ type: Number })
  ], exports.LaTextarea.prototype, "maxlength", void 0);
  __decorate$V([
      n({ type: Boolean, attribute: 'show-count' })
  ], exports.LaTextarea.prototype, "showCount", void 0);
  __decorate$V([
      e$1('textarea')
  ], exports.LaTextarea.prototype, "_textarea", void 0);
  exports.LaTextarea = __decorate$V([
      t('la-textarea')
  ], exports.LaTextarea);

  var __decorate$U = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-option — slotted child of la-select.
   *
   * The host element is the focusable target — la-select uses managed focus
   * (rather than aria-activedescendant) so the active option is also the
   * DOM-focused element. tabindex=-1 keeps options out of the document tab
   * order; la-select calls .focus() programmatically as the user navigates.
   */
  exports.LaOption = class LaOption extends i$2 {
      constructor() {
          super(...arguments);
          /** Required — written into la-select.value when this option is chosen. */
          this.value = '';
          /** Skipped during keyboard navigation; click is a no-op. */
          this.disabled = false;
          /** Reflected by la-select when value matches. Do not set directly. */
          this.selected = false;
      }
      /** Plain-text label for type-ahead matching (uses textContent). */
      getLabel() {
          return (this.textContent || '').trim();
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'option');
          if (!this.hasAttribute('tabindex'))
              this.setAttribute('tabindex', '-1');
      }
      updated(changed) {
          if (changed.has('selected')) {
              this.setAttribute('aria-selected', String(this.selected));
          }
          if (changed.has('disabled')) {
              this.setAttribute('aria-disabled', String(this.disabled));
          }
      }
      render() {
          return b `
      ${iconStyles}
      <div class="row">
        <span class="label"><slot></slot></span>
        <i class="check ph ph-check" aria-hidden="true"></i>
      </div>
    `;
      }
  };
  exports.LaOption.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        border-radius: var(--la-radius-sm);
        cursor: pointer;
        user-select: none;
        outline: none;
        transition: background var(--dur-fast) var(--ease);
      }
      .row {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        padding: var(--la-space-2xs) var(--la-space-md);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
      }
      :host(:hover:not([disabled])) {
        background: var(--la-color-bg-muted);
      }
      :host(:focus-visible) {
        background: var(--la-color-bg-muted);
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: calc(var(--la-focus-ring-offset) * -1);
      }
      :host([selected]) {
        background: var(--la-color-bg-active);
      }
      :host([selected]:hover) {
        background: var(--la-color-bg-active);
      }
      :host([disabled]) {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .label {
        flex: 1;
        min-width: 0;
      }
      .check {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        opacity: 0;
        flex-shrink: 0;
        transition: opacity var(--dur-fast) var(--ease);
      }
      :host([selected]) .check {
        opacity: 1;
      }
    `,
  ];
  __decorate$U([
      n({ reflect: true })
  ], exports.LaOption.prototype, "value", void 0);
  __decorate$U([
      n({ type: Boolean, reflect: true })
  ], exports.LaOption.prototype, "disabled", void 0);
  __decorate$U([
      n({ type: Boolean, reflect: true })
  ], exports.LaOption.prototype, "selected", void 0);
  exports.LaOption = __decorate$U([
      t('la-option')
  ], exports.LaOption);

  var __decorate$T = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-select — custom single-select combobox.
   *
   * Uses the .t-dropdown animation pattern from motion.css. Trigger chrome
   * mirrors la-input so a select sits naturally in a form row alongside
   * inputs. Slotted la-option children carry the values.
   *
   * Focus model: managed focus (not aria-activedescendant). The trigger is
   * the focusable element when closed; on open, focus moves into the active
   * option. Escape returns focus to the trigger; Tab closes and lets focus
   * proceed naturally.
   */
  exports.LaSelect = class LaSelect extends i$2 {
      constructor() {
          super(...arguments);
          this._id = `la-select-${Math.random().toString(36).slice(2, 8)}`;
          this.name = '';
          this.value = '';
          this.placeholder = 'Select…';
          this.label = '';
          this.hint = '';
          this.required = false;
          this.disabled = false;
          this.error = false;
          this.open = false;
          /** 'top-left' = panel below trigger, scaling from top-left.
           *  'bottom-left' = panel above trigger (flipped), scaling from bottom-left. */
          this._origin = 'top-left';
          /** Animation phase — drives .is-open / .is-closing class on the panel. */
          this._phase = '';
          this._closeTimer = null;
          this._onKeydown = (e) => {
              if (this.disabled)
                  return;
              const key = e.key;
              const trigger = this.shadowRoot?.querySelector('.trigger');
              // Use composedPath to see through the shadow boundary — event.target is
              // retargeted to the host when a listener is attached on the host.
              const targetIsTrigger = e.composedPath()[0] === trigger;
              if (!this.open) {
                  if (!targetIsTrigger)
                      return;
                  if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
                      e.preventDefault();
                      this._openPanel('selected-or-first');
                      return;
                  }
                  if (key === 'ArrowUp') {
                      e.preventDefault();
                      this._openPanel('last');
                      return;
                  }
                  return;
              }
              // Open path
              if (key === 'ArrowDown') {
                  e.preventDefault();
                  this._moveActive(1);
                  return;
              }
              if (key === 'ArrowUp') {
                  e.preventDefault();
                  this._moveActive(-1);
                  return;
              }
              if (key === 'Home') {
                  e.preventDefault();
                  this._moveToEdge('first');
                  return;
              }
              if (key === 'End') {
                  e.preventDefault();
                  this._moveToEdge('last');
                  return;
              }
              if (key === 'Enter' || key === ' ') {
                  e.preventDefault();
                  const focused = this._focusedOption();
                  if (focused)
                      this._commitSelection(focused);
                  return;
              }
              if (key === 'Escape') {
                  e.preventDefault();
                  e.stopPropagation();
                  this._closePanel();
                  return;
              }
              if (key === 'Tab') {
                  // Don't preventDefault — Tab proceeds to next focusable.
                  this._closePanel({ restoreFocus: false });
                  return;
              }
              if (key.length === 1 && /\S/.test(key)) {
                  e.preventDefault();
                  this._typeahead(key);
                  return;
              }
          };
          // ─── Mouse ─────────────────────────────────────────────────────────────
          this._onTriggerClick = () => {
              if (this.disabled)
                  return;
              if (this.open)
                  this._closePanel();
              else
                  this._openPanel();
          };
          this._onPanelClick = (e) => {
              const target = e.target.closest('la-option');
              if (!target)
                  return;
              if (target.parentElement !== this)
                  return;
              this._commitSelection(target);
          };
          this._onDocumentMousedown = (e) => {
              if (!this.open)
                  return;
              const path = e.composedPath();
              if (!path.includes(this)) {
                  this._closePanel({ restoreFocus: false });
              }
          };
          this._onDocumentScroll = (e) => {
              if (!this.open)
                  return;
              // Ignore scrolls inside the panel itself (option list scrolling).
              const panel = this.shadowRoot?.querySelector('.panel');
              const target = e.target;
              if (panel && (panel === target || panel.contains(target)))
                  return;
              this._closePanel({ restoreFocus: false });
          };
          this._onSlotChange = () => {
              this._syncOptionSelected();
              this.requestUpdate();
          };
      }
      get _triggerId() { return `${this._id}-trigger`; }
      get _panelId() { return `${this._id}-panel`; }
      // ─── Option helpers ────────────────────────────────────────────────────
      _getOptions() {
          return Array.from(this.querySelectorAll(':scope > la-option'));
      }
      _selectedOption() {
          return this._getOptions().find(o => o.value === this.value) || null;
      }
      _selectedLabel() {
          return this._selectedOption()?.getLabel() ?? null;
      }
      // ─── Lifecycle ─────────────────────────────────────────────────────────
      connectedCallback() {
          super.connectedCallback();
          document.addEventListener('mousedown', this._onDocumentMousedown, true);
          document.addEventListener('scroll', this._onDocumentScroll, true);
          this.addEventListener('keydown', this._onKeydown);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('mousedown', this._onDocumentMousedown, true);
          document.removeEventListener('scroll', this._onDocumentScroll, true);
          this.removeEventListener('keydown', this._onKeydown);
          if (this._closeTimer != null)
              window.clearTimeout(this._closeTimer);
      }
      firstUpdated() {
          this._syncOptionSelected();
          this.shadowRoot?.querySelector('.panel')
              ?.addEventListener('scroll', () => this._checkPanelScrollable());
      }
      _checkPanelScrollable() {
          const panel = this.shadowRoot?.querySelector('.panel');
          if (!panel)
              return;
          if (panel.scrollHeight > panel.clientHeight) {
              panel.setAttribute('data-scrollable', '');
          }
          else {
              panel.removeAttribute('data-scrollable');
          }
      }
      updated(changed) {
          if (changed.has('value'))
              this._syncOptionSelected();
          if (changed.has('open')) {
              if (this.open) {
                  // Open: render with no class first, then next frame add .is-open.
                  this._phase = '';
                  if (this._closeTimer != null) {
                      window.clearTimeout(this._closeTimer);
                      this._closeTimer = null;
                  }
                  requestAnimationFrame(() => {
                      this._positionPanel();
                      this._phase = 'is-open';
                  });
                  this.updateComplete.then(() => this._checkPanelScrollable());
              }
              else if (this._phase === 'is-open') {
                  // Close: switch to is-closing, then clear after the close duration.
                  this._phase = 'is-closing';
                  this._closeTimer = window.setTimeout(() => {
                      this._phase = '';
                      this._closeTimer = null;
                  }, 150);
              }
          }
      }
      _syncOptionSelected() {
          this._getOptions().forEach((opt, idx) => {
              opt.selected = opt.value === this.value;
              if (!opt.id)
                  opt.id = `${this._id}-opt-${idx}`;
          });
      }
      // ─── Open / close ──────────────────────────────────────────────────────
      _openPanel(initial = 'selected-or-first') {
          if (this.disabled || this.open)
              return;
          const options = this._getOptions();
          const enabled = options.filter(o => !o.disabled);
          if (enabled.length === 0)
              return;
          let target;
          if (initial === 'last') {
              target = enabled[enabled.length - 1];
          }
          else {
              target = options.find(o => o.value === this.value && !o.disabled) || enabled[0];
          }
          // Raise the host immediately (sync) so the fixed panel clears DOM-order siblings.
          this.style.zIndex = '100';
          this.open = true;
          // Move focus to the active option after the panel positions itself.
          // preventScroll: true so the page doesn't jump — the panel is rendered
          // adjacent to the trigger and the option is already on-screen.
          requestAnimationFrame(() => {
              target.focus({ preventScroll: true });
          });
      }
      _closePanel({ restoreFocus = true } = {}) {
          if (!this.open)
              return;
          this.style.zIndex = '';
          this.open = false;
          if (restoreFocus)
              this._focusTrigger();
      }
      _focusTrigger() {
          const trigger = this.shadowRoot?.querySelector('.trigger');
          trigger?.focus({ preventScroll: true });
      }
      _positionPanel() {
          const trigger = this.shadowRoot?.querySelector('.trigger');
          const panel = this.shadowRoot?.querySelector('.panel');
          if (!trigger || !panel)
              return;
          const triggerRect = trigger.getBoundingClientRect();
          const spaceBelow = window.innerHeight - triggerRect.bottom;
          const panelHeight = panel.offsetHeight || 280;
          const gap = 4;
          // Measure the actual containing block origin for position:fixed inside this
          // shadow root. Chrome's behaviour depends on the flat-tree context: when the
          // nearest flat-tree positioned ancestor is the shadow host itself (e.g. plain
          // page) it acts host-relative; when a fixed-position element (e.g. a modal
          // backdrop) is in the ancestor chain the panel is viewport-relative. A
          // zero-size probe element reveals the true origin without any assumptions.
          const probe = document.createElement('div');
          probe.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;overflow:hidden;pointer-events:none;';
          this.shadowRoot.appendChild(probe);
          const cb = probe.getBoundingClientRect();
          this.shadowRoot.removeChild(probe);
          panel.style.left = (triggerRect.left - cb.left) + 'px';
          panel.style.minWidth = triggerRect.width + 'px';
          if (spaceBelow < panelHeight + gap && triggerRect.top > spaceBelow) {
              this._origin = 'bottom-left';
              panel.style.top = 'auto';
              panel.style.bottom = (cb.bottom - triggerRect.top + gap) + 'px';
          }
          else {
              this._origin = 'top-left';
              panel.style.top = (triggerRect.bottom - cb.top + gap) + 'px';
              panel.style.bottom = 'auto';
          }
      }
      // ─── Selection ─────────────────────────────────────────────────────────
      _commitSelection(opt) {
          if (opt.disabled)
              return;
          if (opt.value !== this.value) {
              this.value = opt.value;
              this.dispatchEvent(new CustomEvent('la-change', {
                  detail: { value: this.value },
                  bubbles: true,
                  composed: true,
              }));
          }
          this._closePanel();
      }
      // ─── Keyboard ──────────────────────────────────────────────────────────
      _focusedOption() {
          const root = this.getRootNode();
          const active = root.activeElement;
          if (active && active.tagName === 'LA-OPTION' && active.parentElement === this) {
              return active;
          }
          return null;
      }
      _moveActive(delta) {
          const all = this._getOptions();
          if (all.length === 0)
              return;
          const focused = this._focusedOption();
          let idx = focused ? all.indexOf(focused) : -1;
          for (let i = 0; i < all.length; i++) {
              idx = (idx + delta + all.length) % all.length;
              if (!all[idx].disabled) {
                  all[idx].focus({ preventScroll: true });
                  return;
              }
          }
      }
      _moveToEdge(edge) {
          const all = this._getOptions();
          if (edge === 'first') {
              const target = all.find(o => !o.disabled);
              target?.focus({ preventScroll: true });
          }
          else {
              for (let i = all.length - 1; i >= 0; i--) {
                  if (!all[i].disabled) {
                      all[i].focus({ preventScroll: true });
                      return;
                  }
              }
          }
      }
      _typeahead(char) {
          const all = this._getOptions();
          if (all.length === 0)
              return;
          const lc = char.toLowerCase();
          const focused = this._focusedOption();
          const start = focused ? (all.indexOf(focused) + 1) % all.length : 0;
          for (let i = 0; i < all.length; i++) {
              const idx = (start + i) % all.length;
              const opt = all[idx];
              if (opt.disabled)
                  continue;
              if (opt.getLabel().toLowerCase().startsWith(lc)) {
                  opt.focus({ preventScroll: true });
                  return;
              }
          }
      }
      // ─── Render ────────────────────────────────────────────────────────────
      render() {
          const sel = this._selectedLabel();
          const valueClass = sel ? 'value' : 'value placeholder';
          const valueText = sel || this.placeholder;
          const panelClasses = ['panel', 't-dropdown', this._phase].filter(Boolean).join(' ');
          return b `
      ${iconStyles}
      ${this.label ? b `
        <label for=${this._triggerId}>
          ${this.label}${this.required ? b `<span class="req" aria-hidden="true">*</span>` : ''}
        </label>` : ''}
      <button
        id=${this._triggerId}
        type="button"
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${String(this.open)}
        aria-controls=${this._panelId}
        ?disabled=${this.disabled}
        @click=${this._onTriggerClick}
      >
        <span class=${valueClass}>${valueText}</span>
        <span class="caret" aria-hidden="true"><i class="ph ph-caret-down"></i></span>
      </button>
      <div
        id=${this._panelId}
        class=${panelClasses}
        data-origin=${this._origin}
        role="listbox"
        aria-hidden=${String(!this.open)}
        @click=${this._onPanelClick}
      >
        <slot @slotchange=${this._onSlotChange}></slot>
        <div class="scroll-fade"></div>
      </div>
      ${this.hint ? b `<div class="hint">${this.hint}</div>` : ''}
    `;
      }
  };
  exports.LaSelect.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        position: relative;
      }

      label {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-2xs);
      }
      .req {
        color: var(--la-color-danger);
        margin-left: 2px;
      }
      .trigger {
        width: 100%;
        box-sizing: border-box;
        font-family: inherit;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-md);
        border: 1px solid var(--la-color-border);
        background: var(--la-color-bg);
        outline: none;
        line-height: var(--la-line-height);
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        transition:
          border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
      }
      .trigger:focus,
      :host([open]) .trigger {
        border-color: var(--la-color-border-focus);
        box-shadow: var(--la-input-shadow-focus);
      }
      .trigger:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      :host([error]) .trigger {
        border-color: var(--la-color-border-danger);
      }
      :host([error]) .trigger:focus,
      :host([error][open]) .trigger {
        box-shadow: none;
      }
      .value {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .value.placeholder {
        color: var(--la-color-text-disabled);
      }
      .caret {
        display: inline-flex;
        align-items: center;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        transition: transform var(--dur-fast) var(--ease);
      }
      :host([open]) .caret {
        transform: rotate(180deg);
      }
      /* Panel — fixed positioning for correct z-index above all light-DOM siblings.
         Chrome treats the shadow host as the containing block for position:fixed
         children (instead of the viewport), so _positionPanel() uses host-relative
         coordinates rather than raw viewport coords. Result: correct position AND
         correct layering across browsers. */
      .panel {
        position: fixed;
        z-index: 1001;
        min-width: 100%;
        padding: var(--la-space-xs);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-md);
        box-shadow: var(--la-shadow-popover);
        max-height: 280px;
        overflow-y: auto;
        scrollbar-width: thin;
        transform: scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-modal) var(--ease-spring-sm),
          opacity var(--dur-modal) var(--ease-spring-sm);
        will-change: transform, opacity;
      }
      .panel[data-origin='top-left'] {
        transform-origin: top left;
      }
      .panel[data-origin='bottom-left'] {
        transform-origin: bottom left;
      }
      .panel.is-open {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      .panel.is-closing {
        transform: scale(0.99);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-fast) var(--ease-spring-sm),
          opacity var(--dur-fast) var(--ease-spring-sm);
      }
      @media (prefers-reduced-motion: reduce) {
        .trigger,
        .caret,
        .panel { transition: none !important; }
      }
      .hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-xs);
      }
      :host([error]) .hint {
        color: var(--la-color-danger-text);
      }
      .scroll-fade {
        display: none;
        position: sticky;
        bottom: calc(-1 * var(--la-space-xs));
        left: calc(-1 * var(--la-space-xs));
        right: calc(-1 * var(--la-space-xs));
        width: calc(100% + 2 * var(--la-space-xs));
        height: var(--la-space-2xl);
        margin-top: calc(-1 * var(--la-space-2xl));
        background: linear-gradient(to bottom, transparent, var(--la-color-bg));
        pointer-events: none;
        border-radius: 0 0 var(--la-radius-md) var(--la-radius-md);
      }
      .panel[data-scrollable] .scroll-fade {
        display: block;
      }
    `,
  ];
  __decorate$T([
      n()
  ], exports.LaSelect.prototype, "name", void 0);
  __decorate$T([
      n()
  ], exports.LaSelect.prototype, "value", void 0);
  __decorate$T([
      n()
  ], exports.LaSelect.prototype, "placeholder", void 0);
  __decorate$T([
      n()
  ], exports.LaSelect.prototype, "label", void 0);
  __decorate$T([
      n()
  ], exports.LaSelect.prototype, "hint", void 0);
  __decorate$T([
      n({ type: Boolean, reflect: true })
  ], exports.LaSelect.prototype, "required", void 0);
  __decorate$T([
      n({ type: Boolean, reflect: true })
  ], exports.LaSelect.prototype, "disabled", void 0);
  __decorate$T([
      n({ type: Boolean, reflect: true })
  ], exports.LaSelect.prototype, "error", void 0);
  __decorate$T([
      n({ type: Boolean, reflect: true })
  ], exports.LaSelect.prototype, "open", void 0);
  __decorate$T([
      r()
  ], exports.LaSelect.prototype, "_origin", void 0);
  __decorate$T([
      r()
  ], exports.LaSelect.prototype, "_phase", void 0);
  exports.LaSelect = __decorate$T([
      t('la-select')
  ], exports.LaSelect);

  var __decorate$S = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaAlert = class LaAlert extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'info';
      }
      render() {
          return b `
      <div class="alert" part="container">
        <div class="icon"><slot name="icon"></slot></div>
        <div class="body"><slot></slot></div>
      </div>
    `;
      }
  };
  exports.LaAlert.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        container-type: inline-size;
      }
      .alert {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-sm);
        padding: var(--la-space-md) var(--la-space-lg);
        border-radius: var(--la-radius-lg);
        font-size: var(--la-font-size-base);
        line-height: var(--la-line-height);
      }
      /* Stack icon above body in narrow containers */
      @container (max-width: 240px) {
        .alert {
          flex-direction: column;
        }
      }
      .icon {
        flex-shrink: 0;
        font-size: var(--la-font-size-xl);
        /* Match the body's single-line line-box so icon and first line of text share the same optical centre */
        line-height: calc(var(--la-font-size-base) * var(--la-line-height));
      }
      .body {
        flex: 1;
        min-width: 0;
      }
      :host([variant='success']) .alert {
        background: var(--la-color-surface-success);
        color: var(--la-color-success-text);
      }
      :host([variant='warning']) .alert {
        background: var(--la-color-surface-warning);
        color: var(--la-color-warning-text);
      }
      :host([variant='danger']) .alert {
        background: var(--la-color-surface-danger);
        color: var(--la-color-danger-text);
      }
      :host([variant='info']) .alert {
        background: var(--la-color-surface-info);
        color: var(--la-color-info-text);
      }
      :host([variant='neutral']) .alert {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text-secondary);
      }
    `,
  ];
  __decorate$S([
      n({ reflect: true })
  ], exports.LaAlert.prototype, "variant", void 0);
  exports.LaAlert = __decorate$S([
      t('la-alert')
  ], exports.LaAlert);

  var __decorate$R = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaToast = class LaToast extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'default';
          this.title = '';
          this.message = '';
          this.open = false;
          this.duration = 3000;
          this._dismissTimer = null;
          this._closeTimer = null;
      }
      connectedCallback() {
          super.connectedCallback();
          // Announce politely by default; danger variant is assertive.
          if (!this.hasAttribute('role')) {
              this.setAttribute('role', this.variant === 'danger' ? 'alert' : 'status');
          }
          if (!this.hasAttribute('aria-live')) {
              this.setAttribute('aria-live', this.variant === 'danger' ? 'assertive' : 'polite');
          }
      }
      show() {
          // Cancel any in-flight close animation
          if (this._closeTimer) {
              clearTimeout(this._closeTimer);
              this._closeTimer = null;
          }
          this.removeAttribute('closing');
          this.open = true;
          if (this.duration > 0) {
              if (this._dismissTimer)
                  clearTimeout(this._dismissTimer);
              this._dismissTimer = setTimeout(() => this._dismiss(), this.duration);
          }
      }
      _dismiss() {
          this._dismissTimer = null;
          // Play exit animation, then actually hide
          this.open = false;
          this.setAttribute('closing', '');
          this._closeTimer = setTimeout(() => {
              this._closeTimer = null;
              this.removeAttribute('closing');
              this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true }));
          }, 200); // matches toast-exit duration
      }
      render() {
          return b `
      ${iconStyles}
      <div class="toast">
        <div class="icon"><slot name="icon"></slot></div>
        <div class="body">
          ${this.title ? b `<div class="title">${this.title}</div>` : ''}
          <div class="message">
            ${this.message ? this.message : b `<slot></slot>`}
          </div>
        </div>
        <la-icon-button
          size="sm"
          label="Dismiss"
          @click=${this._dismiss}
        ><i class="ph ph-x"></i></la-icon-button>
      </div>
    `;
      }
  };
  exports.LaToast.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /* Hidden only when neither open nor in the closing animation */
      :host(:not([open]):not([closing])) {
        display: none;
      }

      @keyframes toast-enter {
        from {
          opacity: 0;
          transform: translateY(14px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes toast-exit {
        from {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(10px) scale(0.97);
        }
      }

      :host([open]) .toast {
        animation: toast-enter 300ms var(--ease-out) both;
      }

      :host([closing]) .toast {
        animation: toast-exit 200ms var(--ease) both;
      }

      @media (prefers-reduced-motion: reduce) {
        :host([open]) .toast,
        :host([closing]) .toast {
          animation: none;
        }
      }

      .toast {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        padding: var(--la-space-md) var(--la-space-lg);
        border-radius: var(--la-radius-lg);
        box-shadow: var(--la-shadow-float);
        background: var(--la-color-bg);
        min-width: var(--la-toast-min-width);
        max-width: var(--la-toast-max-width);
      }
      .icon {
        flex-shrink: 0;
        font-size: var(--la-font-size-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
      }
      .body {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: var(--la-button-height-sm);
      }
      .title {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
      }
      .message {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-3xs);
      }
    `,
  ];
  __decorate$R([
      n({ reflect: true })
  ], exports.LaToast.prototype, "variant", void 0);
  __decorate$R([
      n()
  ], exports.LaToast.prototype, "title", void 0);
  __decorate$R([
      n()
  ], exports.LaToast.prototype, "message", void 0);
  __decorate$R([
      n({ type: Boolean, reflect: true })
  ], exports.LaToast.prototype, "open", void 0);
  __decorate$R([
      n({ type: Number })
  ], exports.LaToast.prototype, "duration", void 0);
  exports.LaToast = __decorate$R([
      t('la-toast')
  ], exports.LaToast);

  var __decorate$Q = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaTooltip = class LaTooltip extends i$2 {
      constructor() {
          super(...arguments);
          this.tip = '';
          this.position = 'top';
          this.appearance = 'dark';
          this.size = 'default';
          /**
           * Maximum width of the tooltip bubble. Defaults to `240px` so longer tips
           * wrap onto multiple lines instead of stretching across the viewport.
           * Set to an empty string (`max-width=""`) to opt out and let the tooltip
           * size to its content on a single line.
           */
          this.maxWidth = '240px';
      }
      render() {
          const wrap = this.maxWidth !== '';
          const tipStyle = wrap ? `max-width: ${this.maxWidth};` : '';
          return b `
      <slot></slot>
      <div
        class="tip ${wrap ? 'wrap' : ''}"
        data-pos=${this.position}
        style=${tipStyle}
      >${this.tip}</div>
    `;
      }
  };
  exports.LaTooltip.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-block;
        position: relative;
      }
      .tip {
        position: absolute;
        z-index: 200;
        background: var(--la-color-bg-invert);
        color: var(--la-color-text-invert);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        white-space: nowrap;
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-md);
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
        box-shadow: var(--la-shadow-sm);
      }
      :host([appearance='light']) .tip {
        background: var(--la-color-bg);
        color: var(--la-color-text);
        border: 1px solid var(--la-color-border-light);
        box-shadow: var(--la-shadow-sm);
      }
      :host([size='sm']) .tip {
        font-size: var(--la-font-size-sm);
        padding: var(--la-space-xs) var(--la-space-sm);
      }
      .tip.wrap {
        white-space: normal;
        line-height: 1.4;
        width: max-content;
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip {
        opacity: 1;
      }
      /* Top (default) */
      .tip[data-pos='top'] {
        bottom: calc(100% + var(--la-space-2xs));
        left: 50%;
        transform: translateX(-50%) translateY(var(--la-space-xs));
      }
      :host(:hover) .tip[data-pos='top'],
      :host(:focus-within) .tip[data-pos='top'] {
        transform: translateX(-50%) translateY(0);
      }
      /* Bottom */
      .tip[data-pos='bottom'] {
        top: calc(100% + var(--la-space-2xs));
        left: 50%;
        transform: translateX(-50%) translateY(calc(var(--la-space-xs) * -1));
      }
      :host(:hover) .tip[data-pos='bottom'],
      :host(:focus-within) .tip[data-pos='bottom'] {
        transform: translateX(-50%) translateY(0);
      }
      /* Left */
      .tip[data-pos='left'] {
        right: calc(100% + var(--la-space-2xs));
        top: 50%;
        transform: translateY(-50%) translateX(var(--la-space-xs));
      }
      :host(:hover) .tip[data-pos='left'],
      :host(:focus-within) .tip[data-pos='left'] {
        transform: translateY(-50%) translateX(0);
      }
      /* Right */
      .tip[data-pos='right'] {
        left: calc(100% + var(--la-space-2xs));
        top: 50%;
        transform: translateY(-50%) translateX(calc(var(--la-space-xs) * -1));
      }
      :host(:hover) .tip[data-pos='right'],
      :host(:focus-within) .tip[data-pos='right'] {
        transform: translateY(-50%) translateX(0);
      }
    `,
  ];
  __decorate$Q([
      n()
  ], exports.LaTooltip.prototype, "tip", void 0);
  __decorate$Q([
      n({ reflect: true })
  ], exports.LaTooltip.prototype, "position", void 0);
  __decorate$Q([
      n({ reflect: true })
  ], exports.LaTooltip.prototype, "appearance", void 0);
  __decorate$Q([
      n({ reflect: true })
  ], exports.LaTooltip.prototype, "size", void 0);
  __decorate$Q([
      n({ attribute: 'max-width' })
  ], exports.LaTooltip.prototype, "maxWidth", void 0);
  exports.LaTooltip = __decorate$Q([
      t('la-tooltip')
  ], exports.LaTooltip);

  var __decorate$P = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaVersionPicker = class LaVersionPicker extends i$2 {
      constructor() {
          super(...arguments);
          this.versions = [];
          this.active = '';
          this._phase = '';
          this._closingTimer = 0;
          this._onDocClick = (e) => {
              if (!this.renderRoot.contains(e.target)) {
                  this._close();
              }
          };
      }
      connectedCallback() {
          super.connectedCallback();
          document.addEventListener('click', this._onDocClick);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('click', this._onDocClick);
          clearTimeout(this._closingTimer);
      }
      _open() {
          clearTimeout(this._closingTimer);
          this.toggleAttribute('open', true);
          requestAnimationFrame(() => { this._phase = 'is-open'; });
      }
      _close() {
          this._phase = 'is-closing';
          this.removeAttribute('open');
          this._closingTimer = window.setTimeout(() => { this._phase = ''; }, 150);
      }
      _toggle(e) {
          e.stopPropagation();
          this._phase === 'is-open' ? this._close() : this._open();
      }
      _select(value) {
          this.active = value;
          this._close();
          this.dispatchEvent(new CustomEvent('la-change', {
              detail: { value },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          const activeOption = this.versions.find(v => v.value === this.active);
          const label = activeOption?.label ?? this.active;
          return b `
      ${iconStyles}
      <button class="pill" @click=${this._toggle}>
        <i class="ph ph-clock pill-icon"></i>
        <span>${label}</span>
        <i class="ph ph-caret-down pill-caret"></i>
      </button>
      <div class="dropdown ${this._phase}">
        ${this.versions.map(v => b `
          <button
            class="option ${v.value === this.active ? 'active' : ''}"
            @click=${() => this._select(v.value)}
          >
            <span class="option-check"></span>
            <span class="option-label">${v.label}</span>
            ${v.meta ? b `<span class="option-meta">${v.meta}</span>` : A}
          </button>
        `)}
      </div>
    `;
      }
  };
  exports.LaVersionPicker.styles = [
      tokens,
      i$5 `
      :host { display: inline-block; position: relative; }

      .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px var(--la-space-sm);
        border-radius: var(--la-radius-md);
        border: 1px solid var(--la-color-border-light);
        background: var(--la-color-bg);
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text);
        cursor: pointer;
        font-family: inherit;
        transition: background var(--dur-fast) var(--ease-out);
        white-space: nowrap;
      }
      .pill:hover { background: var(--la-color-bg-subtle); }

      .pill-icon { font-size: 13px; color: var(--la-color-text-muted); }
      .pill-caret {
        font-size: 12px;
        color: var(--la-color-text-muted);
        transition: transform var(--dur-fast) var(--ease-out);
      }
      :host([open]) .pill-caret { transform: rotate(180deg); }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        min-width: 192px;
        background: var(--la-color-bg);
        border-radius: var(--la-radius-md);
        box-shadow: var(--la-shadow-popover);
        z-index: 100;
        padding: 4px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        transform-origin: top left;
        transform: scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-modal) var(--ease-spring-sm),
          opacity var(--dur-modal) var(--ease-spring-sm);
        will-change: transform, opacity;
      }
      .dropdown.is-open {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      .dropdown.is-closing {
        transform: scale(0.99);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-fast) var(--ease-spring-sm),
          opacity var(--dur-fast) var(--ease-spring-sm);
      }
      @media (prefers-reduced-motion: reduce) {
        .pill, .dropdown { transition: none !important; }
      }

      .option {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        width: 100%;
        padding: var(--la-space-sm) var(--la-space-md);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        background: none;
        border: none;
        border-radius: var(--la-radius-sm);
        cursor: pointer;
        font-family: inherit;
        text-align: left;
        transition: background var(--dur-fast) var(--ease-out);
      }
      .option:hover { background: var(--la-color-bg-subtle); }
      .option.active { background: var(--la-color-bg-active); }
      .option.active:hover { background: var(--la-color-bg-active); }

      .option-check {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        border: 1.5px solid var(--la-color-text-muted);
        flex-shrink: 0;
        opacity: 0;
        transition: opacity var(--dur-fast) var(--ease);
      }
      .option.active .option-check {
        opacity: 1;
        background: var(--la-color-text);
        border-color: var(--la-color-text);
      }

      .option-label {
        flex: 1;
        text-align: left;
      }
      .option-meta {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-muted);
        flex-shrink: 0;
      }
    `,
  ];
  __decorate$P([
      n({ type: Array })
  ], exports.LaVersionPicker.prototype, "versions", void 0);
  __decorate$P([
      n()
  ], exports.LaVersionPicker.prototype, "active", void 0);
  __decorate$P([
      r()
  ], exports.LaVersionPicker.prototype, "_phase", void 0);
  exports.LaVersionPicker = __decorate$P([
      t('la-version-picker')
  ], exports.LaVersionPicker);

  var __decorate$O = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDocumentItem = class LaDocumentItem extends i$2 {
      constructor() {
          super(...arguments);
          this.name = '';
          this.association = '';
          this.status = 'none';
          this.error = '';
          this.nonInteractive = false;
          this.dismissible = false;
          /** Show the "in default pack" toggle column */
          this.showPackToggle = false;
          /** Whether this document is currently in the default DD pack */
          this.inDefaultPack = false;
      }
      _onClick(e) {
          for (const node of e.composedPath()) {
              if (node instanceof HTMLElement) {
                  if (node.getAttribute('slot') === 'actions')
                      return;
                  if (node.dataset?.dismiss === 'true')
                      return;
              }
          }
          this.dispatchEvent(new CustomEvent('la-select', { bubbles: true, composed: true }));
      }
      _onDismiss(e) {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('la-dismiss', { bubbles: true, composed: true }));
      }
      _onPackToggle(e) {
          e.stopPropagation();
          this.inDefaultPack = e.detail.checked;
          this.dispatchEvent(new CustomEvent('la-pack-toggle', {
              detail: { name: this.name, inDefaultPack: this.inDefaultPack },
              bubbles: true,
              composed: true,
          }));
      }
      _renderRowContent() {
          return b `
      <div class="icon">${this._renderIcon()}</div>
      <div class="content">
        <div class="name">
          <span class="name-text" title=${this.name}>${this.name}</span>
        </div>
        ${this.association
            ? b `<div class="association">${this.association}</div>`
            : A}
        ${this.status === 'failed' && this.error
            ? b `<div class="error">${this.error}</div>`
            : A}
      </div>
      <div class="actions">
        <slot name="actions"></slot>
        ${this.dismissible
            ? b `<la-icon-button
              data-dismiss="true"
              label="Dismiss"
              @click=${this._onDismiss}
            >
              <i class="ph ph-x" aria-hidden="true"></i>
            </la-icon-button>`
            : A}
        ${this.showPackToggle
            ? b `<la-switch
              .checked=${this.inDefaultPack}
              label="Include in default DD pack"
              ?disabled=${this.status === 'processing'}
              @la-change=${this._onPackToggle}
              @click=${(e) => e.stopPropagation()}
            ></la-switch>`
            : A}
      </div>
    `;
      }
      render() {
          const cls = `row ${this.status === 'failed' ? 'failed' : ''} ${this.nonInteractive ? 'non-interactive' : ''}`;
          return b `
      ${iconStyles}
      ${this.nonInteractive
            ? b `<div class=${cls}>${this._renderRowContent()}</div>`
            : b `<button type="button" class=${cls} @click=${this._onClick}>
            ${this._renderRowContent()}
          </button>`}
    `;
      }
      _renderIcon() {
          if (this.status === 'processing') {
              return b `<la-spinner
        class="processing-spinner"
        size="md"
        label="Processing"
      ></la-spinner>`;
          }
          return b `
      <i class="ph ph-file-text" aria-hidden="true"></i>
      ${this.status === 'ready'
            ? b `<span class="badge ready" role="img" aria-label="Ready">
            <i class="ph-fill ph-check-circle"></i>
          </span>`
            : A}
      ${this.status === 'urgent'
            ? b `<span class="badge urgent" role="img" aria-label="Has urgent insights">
            <i class="ph-fill ph-warning-circle"></i>
          </span>`
            : A}
      ${this.status === 'failed'
            ? b `<span class="badge failed" role="img" aria-label="Failed">
            <i class="ph-fill ph-x-circle"></i>
          </span>`
            : A}
    `;
      }
  };
  exports.LaDocumentItem.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .row {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-lg);
        cursor: pointer;
        position: relative;
        z-index: 0;
        /* button reset */
        appearance: none;
        -webkit-appearance: none;
        background: var(--la-color-bg);
        border: none;
        font: inherit;
        color: inherit;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        transition: background var(--dur-fast) var(--ease);
      }
      .row:hover {
        background: var(--la-color-bg-muted);
        z-index: 1;
      }
      .row.non-interactive {
        cursor: default;
      }
      .row.non-interactive:hover {
        background: var(--la-color-bg);
      }
      .row.failed {
        background: var(--la-color-surface-danger);
      }
      .row.failed:hover {
        background: var(--la-color-surface-danger);
      }
      .row:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: 2px;
      }
      .icon {
        position: relative;
        width: var(--la-space-2xl);
        height: var(--la-space-2xl);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-2xl);
        color: var(--la-color-text-muted);
        border-radius: var(--la-radius-md);
      }
      .badge {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: var(--la-font-size-lg);
        height: var(--la-font-size-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-lg);
        line-height: 1;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg);
        box-shadow: 0 0 0 1px var(--la-color-bg);
      }
      .badge.ready {
        color: var(--la-color-resolved);
      }
      .badge.urgent {
        color: var(--la-color-warning-text);
      }
      .badge.failed {
        color: var(--la-color-urgent);
      }
      .content {
        flex: 1;
        min-width: 0;
        min-height: var(--la-space-2xl);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .name {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        min-width: 0;
        transition: color var(--dur-fast) var(--ease);
      }
      .name-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }
      .association {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        margin-top: 0;
        transition: color var(--dur-fast) var(--ease);
      }
      /* When excluded from the pack, step the text down to muted/faint. */
      :host([show-pack-toggle]:not([in-default-pack])) .name {
        color: var(--la-color-text-muted);
      }
      :host([show-pack-toggle]:not([in-default-pack])) .association {
        color: var(--la-color-text-faint);
      }
      .error {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-urgent-text);
        margin-top: 0;
      }
      .processing-spinner {
        color: var(--la-color-primary);
      }
      .actions {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        flex-shrink: 0;
        align-self: center;
      }
      .actions:empty {
        display: none;
      }
      :host([dismissible]) .row {
        padding-right: var(--la-space-xs);
      }
    `,
  ];
  __decorate$O([
      n()
  ], exports.LaDocumentItem.prototype, "name", void 0);
  __decorate$O([
      n()
  ], exports.LaDocumentItem.prototype, "association", void 0);
  __decorate$O([
      n({ reflect: true })
  ], exports.LaDocumentItem.prototype, "status", void 0);
  __decorate$O([
      n()
  ], exports.LaDocumentItem.prototype, "error", void 0);
  __decorate$O([
      n({ type: Boolean, attribute: 'non-interactive', reflect: true })
  ], exports.LaDocumentItem.prototype, "nonInteractive", void 0);
  __decorate$O([
      n({ type: Boolean, reflect: true })
  ], exports.LaDocumentItem.prototype, "dismissible", void 0);
  __decorate$O([
      n({ type: Boolean, attribute: 'show-pack-toggle' })
  ], exports.LaDocumentItem.prototype, "showPackToggle", void 0);
  __decorate$O([
      n({ type: Boolean, attribute: 'in-default-pack', reflect: true })
  ], exports.LaDocumentItem.prototype, "inDefaultPack", void 0);
  exports.LaDocumentItem = __decorate$O([
      t('la-document-item')
  ], exports.LaDocumentItem);

  var __decorate$N = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaUploadBox = class LaUploadBox extends i$2 {
      constructor() {
          super(...arguments);
          this._inputId = `la-upload-${Math.random().toString(36).slice(2, 8)}`;
          this.label = '';
          this.hint = '';
          this.accept = '';
          this.maxSize = 0;
          this.compact = false;
          this.disabled = false;
          this.error = false;
          this.processing = false;
          this.errorMessage = '';
          this.prompt = 'Click to browse or drag a file here';
          this._dragover = false;
      }
      reset() {
          this._file = undefined;
          this.error = false;
          this.errorMessage = '';
          const input = this.shadowRoot?.querySelector('input[type="file"]');
          if (input)
              input.value = '';
      }
      openPicker() {
          if (this.disabled || this.processing || this._file)
              return;
          const input = this.shadowRoot?.querySelector('input[type="file"]');
          input?.click();
      }
      _onKeydown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.openPicker();
          }
      }
      _validateFile(file) {
          if (this.accept) {
              const patterns = this.accept.split(',').map((p) => p.trim().toLowerCase()).filter(Boolean);
              const name = file.name.toLowerCase();
              const type = file.type.toLowerCase();
              const matches = patterns.some((p) => {
                  if (p.startsWith('.'))
                      return name.endsWith(p);
                  if (p.endsWith('/*'))
                      return type.startsWith(p.slice(0, -1));
                  return type === p;
              });
              if (!matches)
                  return { ok: false, reason: 'type' };
          }
          if (this.maxSize > 0 && file.size > this.maxSize) {
              return { ok: false, reason: 'size' };
          }
          return { ok: true };
      }
      _handleFile(file) {
          const result = this._validateFile(file);
          if (!result.ok) {
              this.error = true;
              this.errorMessage =
                  result.reason === 'type'
                      ? `This file type isn't supported.${this.accept ? ` Try ${this.accept}.` : ''}`
                      : "This file is too large.";
              this.dispatchEvent(new CustomEvent('la-reject', {
                  detail: { file, reason: result.reason },
                  bubbles: true,
                  composed: true,
              }));
              return;
          }
          this.error = false;
          this.errorMessage = '';
          this._file = file;
          this.dispatchEvent(new CustomEvent('la-change', {
              detail: { file },
              bubbles: true,
              composed: true,
          }));
      }
      _onPick(e) {
          const input = e.target;
          const file = input.files?.[0];
          if (file)
              this._handleFile(file);
      }
      _onDragOver(e) {
          if (this.disabled || this.processing || this._file)
              return;
          e.preventDefault();
          this._dragover = true;
      }
      _onDragLeave(e) {
          e.preventDefault();
          this._dragover = false;
      }
      _onDrop(e) {
          if (this.disabled || this.processing || this._file)
              return;
          e.preventDefault();
          this._dragover = false;
          const files = e.dataTransfer?.files;
          if (!files || files.length === 0)
              return;
          if (files.length > 1) {
              this.error = true;
              this.errorMessage = 'Only one file can be uploaded at a time.';
              this.dispatchEvent(new CustomEvent('la-reject', {
                  detail: { reason: 'multi' },
                  bubbles: true,
                  composed: true,
              }));
              return;
          }
          this._handleFile(files[0]);
      }
      _remove(e) {
          e.stopPropagation();
          if (this.disabled || this.processing)
              return;
          const file = this._file;
          this.reset();
          if (file) {
              this.dispatchEvent(new CustomEvent('la-remove', {
                  detail: { file },
                  bubbles: true,
                  composed: true,
              }));
          }
      }
      render() {
          const hasFile = Boolean(this._file);
          const zoneClass = [
              'zone',
              this._dragover ? 'is-dragover' : '',
              hasFile ? 'has-file' : '',
              this.processing ? 'is-processing' : '',
          ]
              .filter(Boolean)
              .join(' ');
          return b `
      ${iconStyles}
      ${this.label
            ? b `<label class="field-label" for=${this._inputId}>
            ${this.label}
          </label>`
            : A}
      <div
        class=${zoneClass}
        role="button"
        tabindex=${this.disabled ? -1 : 0}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        @click=${this.openPicker}
        @keydown=${this._onKeydown}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <input
          id=${this._inputId}
          type="file"
          accept=${this.accept}
          ?disabled=${this.disabled}
          @change=${this._onPick}
        />
        ${hasFile
            ? b `
              <la-document-item
                name=${this._file?.name ?? ''}
                association=${this.processing ? 'Uploading…' : 'File selected'}
                status=${this.processing ? 'processing' : 'none'}
                non-interactive
                ?dismissible=${!this.processing && !this.disabled}
                @la-dismiss=${this._remove}
              ></la-document-item>
            `
            : this.error
                ? b `
              <i class="ph-fill ph-warning-circle icon-lead error" aria-hidden="true"></i>
              <div class="zone-text">
                <div class="prompt">${this.errorMessage || 'Something went wrong.'}</div>
                ${this.hint ? b `<div class="hint">${this.hint}</div>` : A}
              </div>
            `
                : b `
              <i class="ph ph-upload-simple icon-lead" aria-hidden="true"></i>
              <div class="zone-text">
                <div class="prompt">${this.prompt}</div>
                ${this.hint ? b `<div class="hint">${this.hint}</div>` : A}
              </div>
            `}
      </div>
      ${this.error && !hasFile
            ? A
            : this.error
                ? b `<div class="error-message">${this.errorMessage}</div>`
                : A}
    `;
      }
  };
  exports.LaUploadBox.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .field-label {
        display: block;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-2xs);
      }
      .req {
        color: var(--la-color-danger);
        margin-left: var(--la-space-3xs);
      }
      .zone {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--la-space-sm);
        width: 100%;
        padding: var(--la-space-2xl) var(--la-space-xl);
        border: 1px dashed var(--la-color-border-light);
        border-radius: var(--la-radius-lg);
        background: var(--la-color-bg-surface);
        color: var(--la-color-text-muted);
        font-family: inherit;
        font-size: var(--la-font-size-base);
        text-align: center;
        cursor: pointer;
        box-sizing: border-box;
        transition:
          border-color var(--dur-fast) var(--ease),
          background var(--dur-fast) var(--ease);
      }
      .zone:hover:not(.has-file):not(.is-processing) {
        /* keep border + bg; cursor + surface context carry the hover signal */
      }
      .zone:focus-visible {
        outline: none;
        box-shadow: var(--la-input-shadow-focus);
      }
      .zone.is-dragover {
        border: 1px solid var(--la-color-info);
        background: var(--la-color-processing-bg);
        color: var(--la-color-info-text);
      }
      .zone.has-file {
        background: var(--la-color-bg);
        border: 1px solid var(--la-color-border-light);
        box-shadow: var(--la-shadow-card);
        cursor: default;
        padding: var(--la-space-xs);
        align-items: stretch;
      }
      :host([error]) .zone {
        border: 1px solid var(--la-color-border-light);
      }
      :host([disabled]) .zone {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
      .icon-lead {
        font-size: var(--la-font-size-4xl);
        color: inherit;
        line-height: 1;
      }
      .icon-lead.success {
        color: var(--la-color-success);
      }
      .icon-lead.error {
        color: var(--la-color-danger);
      }
      .prompt {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
      }
      .hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
      }
      .zone.has-file .hint,
      :host([error]) .hint {
        color: inherit;
        opacity: 0.8;
      }
      .remove-btn {
        position: absolute;
        top: var(--la-space-sm);
        right: var(--la-space-sm);
      }
      .filename {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1 1 auto;
        min-width: 0;
      }
      .error-message {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-danger-text);
        margin-top: var(--la-space-xs);
      }
      .error-retry {
        appearance: none;
        background: none;
        border: none;
        padding: 0;
        margin-top: var(--la-space-xs);
        font: inherit;
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-primary);
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .error-retry:hover {
        color: var(--la-color-primary-hover);
      }
      .error-retry:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: 2px;
        border-radius: var(--la-radius-sm);
      }
      input[type='file'] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* ── Compact variant ────────────────────────────── */
      :host([compact]) .zone {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: var(--la-space-md) var(--la-space-lg);
        gap: var(--la-space-md);
      }
      :host([compact]) .icon-lead {
        font-size: var(--la-font-size-xl);
        flex-shrink: 0;
      }
      .zone-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        text-align: left;
      }
      :host([compact]) .prompt {
        font-size: var(--la-font-size-base);
      }
      :host([compact]) .hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
      }
      /* Reset row layout when a file is attached — document-item needs full width */
      :host([compact]) .zone.has-file {
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        padding: var(--la-space-xs);
      }
    `,
  ];
  __decorate$N([
      n()
  ], exports.LaUploadBox.prototype, "label", void 0);
  __decorate$N([
      n()
  ], exports.LaUploadBox.prototype, "hint", void 0);
  __decorate$N([
      n()
  ], exports.LaUploadBox.prototype, "accept", void 0);
  __decorate$N([
      n({ type: Number, attribute: 'max-size' })
  ], exports.LaUploadBox.prototype, "maxSize", void 0);
  __decorate$N([
      n({ type: Boolean, reflect: true })
  ], exports.LaUploadBox.prototype, "compact", void 0);
  __decorate$N([
      n({ type: Boolean, reflect: true })
  ], exports.LaUploadBox.prototype, "disabled", void 0);
  __decorate$N([
      n({ type: Boolean, reflect: true })
  ], exports.LaUploadBox.prototype, "error", void 0);
  __decorate$N([
      n({ type: Boolean, reflect: true })
  ], exports.LaUploadBox.prototype, "processing", void 0);
  __decorate$N([
      n({ attribute: 'error-message' })
  ], exports.LaUploadBox.prototype, "errorMessage", void 0);
  __decorate$N([
      n()
  ], exports.LaUploadBox.prototype, "prompt", void 0);
  __decorate$N([
      r()
  ], exports.LaUploadBox.prototype, "_file", void 0);
  __decorate$N([
      r()
  ], exports.LaUploadBox.prototype, "_dragover", void 0);
  exports.LaUploadBox = __decorate$N([
      t('la-upload-box')
  ], exports.LaUploadBox);

  var __decorate$M = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-field-list
   *
   * Renders a list of labelled key–value rows — document metadata, entity
   * details, extracted facts, etc. Each row has a bottom border to aid
   * scanning on longer lists. Last row's border is suppressed.
   *
   * layout="spread"  (default) — label left, value right-aligned.
   *                              Suited for narrow panels (document page).
   * layout="stack"             — label fixed-width left column, value flows right.
   *                              Suited for wider surfaces (company manual).
   */
  exports.LaFieldList = class LaFieldList extends i$2 {
      constructor() {
          super(...arguments);
          /** Rows to render. Each item has a `label` and a `value`. */
          this.fields = [];
          /** Layout mode. `'spread'` (default) — label/value space-between. `'stack'` — fixed-width label column. */
          this.layout = 'spread';
      }
      render() {
          if (!this.fields.length)
              return b ``;
          return b `
      <dl>
        ${this.fields.map(f => b `
          <div class="row">
            <dt>${f.label}</dt>
            <dd>${f.value}</dd>
          </div>
        `)}
      </dl>
    `;
      }
  };
  exports.LaFieldList.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      dl {
        margin: 0;
        padding: 0;
      }

      .row {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) 0;
        border-bottom: 1px solid var(--la-color-border-light);
      }

      .row:first-child { padding-top: 0; }
      .row:last-child  { border-bottom: none; padding-bottom: 0; }

      dt {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        flex-shrink: 0;
      }

      dd {
        margin: 0;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        font-weight: var(--la-font-weight-normal);
      }

      /* spread — label left, value right-aligned */
      :host([layout='spread']) .row {
        justify-content: space-between;
      }

      :host([layout='spread']) dd {
        text-align: right;
      }

      /* stack — fixed label column, value flows right */
      :host([layout='stack']) .row {
        justify-content: flex-start;
      }

      :host([layout='stack']) dt {
        min-width: 160px;
        flex-shrink: 0;
      }
    `,
  ];
  __decorate$M([
      n({ type: Array })
  ], exports.LaFieldList.prototype, "fields", void 0);
  __decorate$M([
      n({ reflect: true })
  ], exports.LaFieldList.prototype, "layout", void 0);
  exports.LaFieldList = __decorate$M([
      t('la-field-list')
  ], exports.LaFieldList);

  var __decorate$L = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaMenuItem = class LaMenuItem extends i$2 {
      constructor() {
          super(...arguments);
          this.label = '';
          this.value = '';
          this.icon = '';
          this.variant = 'default';
          this.disabled = false;
      }
      render() {
          return b `
      ${iconStyles}
      <button
        type="button"
        class="item"
        role="menuitem"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        ${this.icon
            ? b `<span class="icon"><i class=${this.icon} aria-hidden="true"></i></span>`
            : A}
        <span class="label">${this.label}</span>
      </button>
    `;
      }
      _onClick() {
          this.dispatchEvent(new CustomEvent('la-menu-select', {
              detail: { label: this.label, value: this.value || this.label },
              bubbles: true,
              composed: true,
          }));
      }
  };
  exports.LaMenuItem.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: 0.4;
      }
      .item {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        width: 100%;
        box-sizing: border-box;
        padding: 6px var(--la-space-sm);
        border-radius: var(--la-radius-sm);
        font-family: inherit;
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        background: transparent;
        border: none;
        text-align: left;
        cursor: pointer;
        margin: 0;
        transition: background var(--dur-fast) var(--ease);
        white-space: nowrap;
      }
      .item:hover {
        background: var(--la-color-bg-subtle);
      }
      .item:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      :host([variant='danger']) .item {
        color: var(--la-color-danger-text);
      }
      :host([variant='danger']) .item:hover {
        background: var(--la-color-surface-danger);
      }
      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-base);
        flex-shrink: 0;
        color: var(--la-color-text-muted);
      }
      :host([variant='danger']) .icon {
        color: var(--la-color-danger-text);
      }
    `,
  ];
  __decorate$L([
      n()
  ], exports.LaMenuItem.prototype, "label", void 0);
  __decorate$L([
      n()
  ], exports.LaMenuItem.prototype, "value", void 0);
  __decorate$L([
      n()
  ], exports.LaMenuItem.prototype, "icon", void 0);
  __decorate$L([
      n({ reflect: true })
  ], exports.LaMenuItem.prototype, "variant", void 0);
  __decorate$L([
      n({ type: Boolean, reflect: true })
  ], exports.LaMenuItem.prototype, "disabled", void 0);
  exports.LaMenuItem = __decorate$L([
      t('la-menu-item')
  ], exports.LaMenuItem);

  var __decorate$K = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaMenuToggle = class LaMenuToggle extends i$2 {
      constructor() {
          super(...arguments);
          this.label = '';
          this.value = '';
          this.checked = false;
          this.disabled = false;
      }
      render() {
          return b `
      ${iconStyles}
      <div
        class="row"
        role="menuitemcheckbox"
        aria-checked=${this.checked ? 'true' : 'false'}
        tabindex="0"
        @click=${this._onRowClick}
        @keydown=${this._onKeydown}
      >
        <span class="label">${this.label}</span>
        <la-switch
          .checked=${this.checked}
          label=${this.label}
          ?disabled=${this.disabled}
          @la-change=${this._onSwitchChange}
          @click=${(e) => e.stopPropagation()}
        ></la-switch>
      </div>
    `;
      }
      _onRowClick(e) {
          // la-switch stops its own click — only handle clicks on the label side
          const path = e.composedPath();
          if (path.some(el => el.tagName?.toLowerCase() === 'la-switch'))
              return;
          this._toggle();
      }
      _onKeydown(e) {
          if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              this._toggle();
          }
      }
      _onSwitchChange(e) {
          this.checked = e.detail.checked;
          this._dispatch();
      }
      _toggle() {
          this.checked = !this.checked;
          this._dispatch();
      }
      _dispatch() {
          this.dispatchEvent(new CustomEvent('la-menu-toggle-change', {
              detail: { label: this.label, value: this.value || this.label, checked: this.checked },
              bubbles: true,
              composed: true,
          }));
      }
  };
  exports.LaMenuToggle.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: 0.4;
      }
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-md);
        padding: 6px var(--la-space-sm);
        border-radius: var(--la-radius-sm);
        cursor: pointer;
        transition: background var(--dur-fast) var(--ease);
      }
      .row:hover {
        background: var(--la-color-bg-subtle);
      }
      .row:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      .label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        white-space: nowrap;
        user-select: none;
      }
    `,
  ];
  __decorate$K([
      n()
  ], exports.LaMenuToggle.prototype, "label", void 0);
  __decorate$K([
      n()
  ], exports.LaMenuToggle.prototype, "value", void 0);
  __decorate$K([
      n({ type: Boolean, reflect: true })
  ], exports.LaMenuToggle.prototype, "checked", void 0);
  __decorate$K([
      n({ type: Boolean, reflect: true })
  ], exports.LaMenuToggle.prototype, "disabled", void 0);
  exports.LaMenuToggle = __decorate$K([
      t('la-menu-toggle')
  ], exports.LaMenuToggle);

  var __decorate$J = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaMenuDivider = class LaMenuDivider extends i$2 {
      render() {
          return b `<hr role="separator" aria-orientation="horizontal">`;
      }
  };
  exports.LaMenuDivider.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        padding: var(--la-space-xs) 0;
      }
      hr {
        border: none;
        border-top: 1px solid var(--la-color-border-light);
        margin: 0;
      }
    `,
  ];
  exports.LaMenuDivider = __decorate$J([
      t('la-menu-divider')
  ], exports.LaMenuDivider);

  var __decorate$I = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-menu — tertiary action menu triggered by a 3-dot button.
   *
   * Uses the .t-dropdown animation pattern (inlined — motion.css is document-
   * scope and does not penetrate shadow DOM). Slotted la-menu-item children
   * fire la-menu-select events which also close the panel automatically.
   *
   * Focus model: Escape closes and returns focus to the trigger. Click-outside
   * closes without restoring focus. Items handle their own focus on Tab.
   */
  exports.LaMenu = class LaMenu extends i$2 {
      constructor() {
          super(...arguments);
          /** Accessible label for the trigger button. */
          this.label = 'More options';
          /** Which corner the panel scales from — set to match the trigger's position. */
          this.origin = 'top-right';
          this.open = false;
          this._phase = '';
          this._closeTimer = null;
          this._onDocumentMousedown = (e) => {
              if (!this.open)
                  return;
              if (!e.composedPath().includes(this))
                  this._closeMenu({ restoreFocus: false });
          };
          this._onKeydown = (e) => {
              if (e.key === 'Escape' && this.open) {
                  e.stopPropagation();
                  this._closeMenu();
              }
          };
          this._onItemSelect = () => {
              this._closeMenu({ restoreFocus: false });
          };
          this._onTriggerClick = () => {
              if (this.open)
                  this._closeMenu();
              else
                  this._openMenu();
          };
      }
      connectedCallback() {
          super.connectedCallback();
          document.addEventListener('mousedown', this._onDocumentMousedown, true);
          this.addEventListener('keydown', this._onKeydown);
          this.addEventListener('la-menu-select', this._onItemSelect);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('mousedown', this._onDocumentMousedown, true);
          this.removeEventListener('keydown', this._onKeydown);
          this.removeEventListener('la-menu-select', this._onItemSelect);
          if (this._closeTimer != null)
              window.clearTimeout(this._closeTimer);
      }
      updated(changed) {
          if (!changed.has('open'))
              return;
          if (this.open) {
              this._phase = '';
              if (this._closeTimer != null) {
                  window.clearTimeout(this._closeTimer);
                  this._closeTimer = null;
              }
              requestAnimationFrame(() => {
                  this._phase = 'is-open';
              });
          }
          else if (this._phase === 'is-open') {
              this._phase = 'is-closing';
              this._closeTimer = window.setTimeout(() => {
                  this._phase = '';
                  this._closeTimer = null;
              }, 150);
          }
      }
      _openMenu() {
          if (this.open)
              return;
          this.open = true;
          this.dispatchEvent(new CustomEvent('la-menu-open', { bubbles: true, composed: true }));
      }
      _closeMenu({ restoreFocus = true } = {}) {
          if (!this.open)
              return;
          this.open = false;
          this.dispatchEvent(new CustomEvent('la-menu-close', { bubbles: true, composed: true }));
          if (restoreFocus) {
              this._triggerEl?.shadowRoot?.querySelector('button')
                  ?.focus({ preventScroll: true });
          }
      }
      render() {
          return b `
      ${iconStyles}
      <la-icon-button
        label=${this.label}
        .expanded=${this.open}
        aria-haspopup="menu"
        @click=${this._onTriggerClick}
      >
        <i class="ph-bold ph-dots-three" aria-hidden="true"></i>
      </la-icon-button>
      <div
        class="panel ${this._phase}"
        role="menu"
        data-origin=${this.origin}
        aria-label=${this.label}
        ?inert=${this._phase === ''}
        aria-hidden=${this._phase === '' ? 'true' : 'false'}
      >
        <slot></slot>
      </div>
    `;
      }
  };
  exports.LaMenu.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-block;
        position: relative;
      }
      /* Keep the trigger lit when the panel is open — reaches into la-icon-button's
         exposed part so the button stays highlighted while the menu is visible. */
      :host([open]) la-icon-button::part(button) {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }
      .panel {
        position: absolute;
        z-index: 50;
        min-width: 160px;
        padding: var(--la-space-xs);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-md);
        box-shadow: var(--la-shadow-popover);
        transform: scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-modal) var(--ease-spring-sm),
          opacity var(--dur-modal) var(--ease-spring-sm);
        will-change: transform, opacity;
      }
      .panel[data-origin='top-left'] {
        top: calc(100% + var(--la-space-xs));
        left: 0;
        transform-origin: top left;
      }
      .panel[data-origin='top-right'] {
        top: calc(100% + var(--la-space-xs));
        right: 0;
        transform-origin: top right;
      }
      .panel[data-origin='bottom-left'] {
        bottom: calc(100% + var(--la-space-xs));
        left: 0;
        transform-origin: bottom left;
      }
      .panel[data-origin='bottom-right'] {
        bottom: calc(100% + var(--la-space-xs));
        right: 0;
        transform-origin: bottom right;
      }
      .panel.is-open {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      .panel.is-closing {
        transform: scale(0.99);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-fast) var(--ease-spring-sm),
          opacity var(--dur-fast) var(--ease-spring-sm);
      }
      @media (prefers-reduced-motion: reduce) {
        .trigger,
        .panel { transition: none !important; }
      }
    `,
  ];
  __decorate$I([
      n()
  ], exports.LaMenu.prototype, "label", void 0);
  __decorate$I([
      n({ reflect: true })
  ], exports.LaMenu.prototype, "origin", void 0);
  __decorate$I([
      n({ type: Boolean, reflect: true })
  ], exports.LaMenu.prototype, "open", void 0);
  __decorate$I([
      e$1('la-icon-button')
  ], exports.LaMenu.prototype, "_triggerEl", void 0);
  __decorate$I([
      r()
  ], exports.LaMenu.prototype, "_phase", void 0);
  exports.LaMenu = __decorate$I([
      t('la-menu')
  ], exports.LaMenu);

  var __decorate$H = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaModal = class LaModal extends i$2 {
      constructor() {
          super(...arguments);
          this.open = false;
          this.heading = '';
          this.description = '';
          this.size = 'default';
          this._onKeydown = (e) => {
              if (e.key === 'Escape' && this.open) {
                  e.stopPropagation();
                  this._close();
              }
          };
      }
      _close() {
          this.open = false;
          this.dispatchEvent(new CustomEvent('close', { bubbles: true }));
      }
      _onBackdropClick(e) {
          if (e.target === e.currentTarget)
              this._close();
      }
      _checkScrollable() {
          const body = this.shadowRoot?.querySelector('.body');
          if (!body)
              return;
          const scrollable = body.scrollHeight > body.clientHeight;
          this.toggleAttribute('scrollable', scrollable);
      }
      connectedCallback() {
          super.connectedCallback();
          // Accessibility: announce as a modal dialog to screen readers.
          // Set on first connect only — consumers can override by providing their own role/aria-modal.
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'dialog');
          if (!this.hasAttribute('aria-modal'))
              this.setAttribute('aria-modal', 'true');
          document.addEventListener('keydown', this._onKeydown);
      }
      firstUpdated() {
          const body = this.shadowRoot?.querySelector('.body');
          if (body) {
              this._bodyObserver = new ResizeObserver(() => this._checkScrollable());
              this._bodyObserver.observe(body);
          }
          const slot = this.shadowRoot?.querySelector('slot:not([name])');
          if (slot) {
              slot.addEventListener('slotchange', () => this._checkScrollable());
          }
          this._checkScrollable();
      }
      updated(changed) {
          if (changed.has('open')) {
              // Body dimensions aren't known until after the modal renders open — recheck after layout
              requestAnimationFrame(() => this._checkScrollable());
          }
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this._bodyObserver?.disconnect();
          document.removeEventListener('keydown', this._onKeydown);
      }
      render() {
          return b `
      ${iconStyles}
      <div class="backdrop" @click=${this._onBackdropClick}>
        <div class="panel">
          <div class="header">
            <div class="header-content">
              <slot name="header">
                <div class="heading-block">
                  <div class="heading">${this.heading}</div>
                  ${this.description
            ? b `<div class="description">${this.description}</div>`
            : A}
                </div>
              </slot>
            </div>
            <la-icon-button size="sm" label="Close" @click=${this._close}>
              <i class="ph ph-x"></i>
            </la-icon-button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;
      }
  };
  exports.LaModal.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: var(--la-color-scrim);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: var(--la-space-xl);
        box-sizing: border-box;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        /* Close: fade out over dur-modal, then flip visibility at the end so the node stops capturing events */
        transition: opacity var(--dur-modal) var(--ease-out),
                    visibility 0s linear var(--dur-modal);
      }
      :host([open]) .backdrop {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        /* Open: flip visibility immediately so the fade-in is visible */
        transition: opacity var(--dur-modal) var(--ease-out),
                    visibility 0s linear 0s;
      }
      .panel {
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl2);
        width: 100%;
        max-width: 560px;
        max-height: 90vh;
        box-shadow: var(--la-shadow-lg);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: scale(var(--scale-enter));
        transition: transform var(--dur-modal) var(--ease-out);
      }
      :host([open]) .panel {
        transform: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .backdrop,
        :host([open]) .backdrop,
        .panel {
          transition: none;
        }
      }
      :host([size='sm']) .panel {
        max-width: 440px;
      }
      :host([size='lg']) .panel {
        max-width: 640px;
      }
      .header {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
        /* 16 top + right (tight around the close icon button) — 24 bottom + left (aligns with content padding) */
        padding: var(--la-space-lg) var(--la-space-lg) var(--la-space-xl) var(--la-space-xl);
      }
      .header la-icon-button {
        flex-shrink: 0;
      }
      /* Wrapper gives the slot a real flex box so the close button always stays right */
      .header-content {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
      }
      .heading-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xs);
        min-width: 0;
      }
      /* slotted header content (e.g. stepper) fills the wrapper */
      ::slotted([slot='header']) {
        flex: 1;
        min-width: 0;
      }
      .heading {
        font-size: var(--la-font-size-2xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.3;
      }
      .description {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        line-height: var(--la-line-height);
      }
      .body {
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0;
        padding: 0 var(--la-space-xl) var(--la-space-xl);
      }
      .footer {
        position: relative;
        flex-shrink: 0;
        display: flex;
        justify-content: flex-end;
        gap: var(--la-space-md);
        padding: 0 var(--la-space-xl) var(--la-space-xl);
      }
      .footer:empty {
        display: none;
      }
      /* Fade when body is scrollable — gradient over the bottom of body content. */
      :host([scrollable]) .footer {
        padding-top: var(--la-space-xl);
      }
      :host([scrollable]) .footer::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        height: var(--la-space-2xl);
        background: linear-gradient(to bottom, transparent, var(--la-color-bg));
        pointer-events: none;
      }
    `,
  ];
  __decorate$H([
      n({ type: Boolean, reflect: true })
  ], exports.LaModal.prototype, "open", void 0);
  __decorate$H([
      n()
  ], exports.LaModal.prototype, "heading", void 0);
  __decorate$H([
      n()
  ], exports.LaModal.prototype, "description", void 0);
  __decorate$H([
      n({ reflect: true })
  ], exports.LaModal.prototype, "size", void 0);
  exports.LaModal = __decorate$H([
      t('la-modal')
  ], exports.LaModal);

  var __decorate$G = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-drawer — edge-anchored dismissible overlay panel.
   *
   * Slides in from any edge (right, left, top, bottom). Used for:
   *   - detail inspectors (right)
   *   - mobile navigation (left)
   * Consumer opens by flipping `open`; the drawer handles its own close behaviour
   * (ESC, close button, optional backdrop click), focus trap, focus restoration,
   * and page-scroll lock.
   *
   * Slots:
   *   default — body content (scrolls internally)
   *   header  — replaces heading-block but the close button always stays
   *   footer  — action row (auto-hidden via :empty)
   */
  exports.LaDrawer = class LaDrawer extends i$2 {
      constructor() {
          super(...arguments);
          this.open = false;
          this.edge = 'right';
          this.heading = '';
          this.description = '';
          this.label = '';
          this.backdropDismiss = false;
          this.noScrollLock = false;
          this._previousFocus = null;
          this._previousBodyOverflow = null;
          this._onKeydown = (e) => {
              if (!this.open)
                  return;
              if (e.key === 'Escape') {
                  e.stopPropagation();
                  this._close();
              }
              else if (e.key === 'Tab') {
                  this._trapFocus(e);
              }
          };
      }
      _close() {
          this.open = false;
          this.dispatchEvent(new CustomEvent('close', { bubbles: true }));
      }
      _onBackdropClick() {
          if (this.backdropDismiss)
              this._close();
      }
      // Collect all focusable elements reachable from the panel — inside the shadow
      // (close button) plus all slotted content (default, header, footer).
      _getFocusable() {
          const panel = this.shadowRoot?.querySelector('.panel');
          if (!panel)
              return [];
          const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
          const shadowFocusable = Array.from(panel.querySelectorAll(selector));
          const slots = Array.from(panel.querySelectorAll('slot'));
          const slotted = slots.flatMap(slot => slot.assignedElements({ flatten: true }).flatMap(el => {
              if (!(el instanceof HTMLElement))
                  return [];
              const self = el.matches(selector) ? [el] : [];
              const nested = Array.from(el.querySelectorAll(selector));
              return [...self, ...nested];
          }));
          return [...shadowFocusable, ...slotted];
      }
      _trapFocus(e) {
          const focusable = this._getFocusable();
          if (focusable.length === 0)
              return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = (this.shadowRoot?.activeElement || document.activeElement);
          if (e.shiftKey && active === first) {
              e.preventDefault();
              last.focus();
          }
          else if (!e.shiftKey && active === last) {
              e.preventDefault();
              first.focus();
          }
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'dialog');
          if (!this.hasAttribute('aria-modal'))
              this.setAttribute('aria-modal', 'true');
          document.addEventListener('keydown', this._onKeydown);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('keydown', this._onKeydown);
          this._releaseScrollLock();
      }
      updated(changed) {
          if (changed.has('open')) {
              if (this.open)
                  this._onOpen();
              else
                  this._onClose();
          }
          if (changed.has('size')) {
              if (this.size)
                  this.style.setProperty('--la-drawer-size', this.size);
              else
                  this.style.removeProperty('--la-drawer-size');
          }
          if (changed.has('label') || changed.has('heading')) {
              if (!this.heading && this.label)
                  this.setAttribute('aria-label', this.label);
              else if (this.heading)
                  this.removeAttribute('aria-label');
          }
      }
      _onOpen() {
          this._previousFocus = document.activeElement;
          if (!this.noScrollLock) {
              this._previousBodyOverflow = document.body.style.overflow;
              document.body.style.overflow = 'hidden';
          }
          // Focus the first focusable inside (close button by default) after the
          // panel becomes visible so the browser doesn't reject focus calls on a
          // hidden element.
          requestAnimationFrame(() => {
              const focusable = this._getFocusable();
              focusable[0]?.focus();
          });
      }
      _onClose() {
          this._releaseScrollLock();
          if (this._previousFocus && typeof this._previousFocus.focus === 'function') {
              this._previousFocus.focus();
          }
          this._previousFocus = null;
      }
      _releaseScrollLock() {
          if (this._previousBodyOverflow !== null) {
              document.body.style.overflow = this._previousBodyOverflow;
              this._previousBodyOverflow = null;
          }
      }
      render() {
          return b `
      ${iconStyles}
      <div class="backdrop" @click=${this._onBackdropClick}></div>
      <aside class="panel">
        <div class="header">
          <div class="header-content">
            <slot name="header">
              ${this.heading || this.description
            ? b `
                    <div class="heading-block">
                      ${this.heading ? b `<div class="heading">${this.heading}</div>` : A}
                      ${this.description
                ? b `<div class="description">${this.description}</div>`
                : A}
                    </div>
                  `
            : A}
            </slot>
          </div>
          <la-icon-button size="sm" label="Close" @click=${this._close}>
            <i class="ph ph-x"></i>
          </la-icon-button>
        </div>
        <div class="body"><slot></slot></div>
        <div class="footer"><slot name="footer"></slot></div>
      </aside>
    `;
      }
  };
  exports.LaDrawer.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        background: var(--la-color-scrim);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity var(--dur-modal) var(--ease),
                    visibility 0s linear var(--dur-modal);
      }
      :host([open]) .backdrop {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: opacity var(--dur-modal) var(--ease),
                    visibility 0s linear 0s;
      }

      .panel {
        position: fixed;
        background: var(--la-color-bg);
        box-shadow: var(--la-shadow-lg);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000;
        visibility: hidden;
        box-sizing: border-box;
        transition: transform var(--dur-modal) var(--ease-drawer),
                    visibility 0s linear var(--dur-modal);
      }
      :host([open]) .panel {
        visibility: visible;
        transition: transform var(--dur-modal) var(--ease-drawer),
                    visibility 0s linear 0s;
      }

      /* ── Edge — right ─────────────────────────────── */
      :host([edge='right']) .panel {
        top: 0;
        right: 0;
        bottom: 0;
        width: min(var(--la-drawer-size), 85vw);
        border-radius: var(--la-radius-xl) 0 0 var(--la-radius-xl);
        transform: translateX(100%);
      }
      :host([edge='right'][open]) .panel {
        transform: translateX(0);
      }

      /* ── Edge — left ──────────────────────────────── */
      :host([edge='left']) .panel {
        top: 0;
        left: 0;
        bottom: 0;
        width: min(var(--la-drawer-size), 85vw);
        border-radius: 0 var(--la-radius-xl) var(--la-radius-xl) 0;
        transform: translateX(-100%);
      }
      :host([edge='left'][open]) .panel {
        transform: translateX(0);
      }

      /* ── Edge — top ───────────────────────────────── */
      :host([edge='top']) .panel {
        top: 0;
        left: 0;
        right: 0;
        height: min(var(--la-drawer-size), 85vh);
        border-radius: 0 0 var(--la-radius-xl) var(--la-radius-xl);
        transform: translateY(-100%);
      }
      :host([edge='top'][open]) .panel {
        transform: translateY(0);
      }

      /* ── Edge — bottom ────────────────────────────── */
      :host([edge='bottom']) .panel {
        bottom: 0;
        left: 0;
        right: 0;
        height: min(var(--la-drawer-size), 85vh);
        border-radius: var(--la-radius-xl) var(--la-radius-xl) 0 0;
        transform: translateY(100%);
      }
      :host([edge='bottom'][open]) .panel {
        transform: translateY(0);
      }

      /* ── Mobile full-width (right / left only) ────── */
      @media (max-width: 479px) {
        :host([edge='right']) .panel,
        :host([edge='left']) .panel {
          width: 100vw;
          border-radius: 0;
        }
      }

      /* ── Header ───────────────────────────────────── */
      .header {
        flex-shrink: 0;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--la-space-md);
        padding: var(--la-space-lg) var(--la-space-lg) var(--la-space-xl) var(--la-space-xl);
      }
      .header-content {
        flex: 1;
        min-width: 0;
      }
      .heading-block {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xs);
        padding-top: var(--la-space-xs);
      }
      .heading {
        font-size: var(--la-font-size-2xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.3;
      }
      .description {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        line-height: var(--la-line-height);
      }

      /* ── Body ─────────────────────────────────────── */
      .body {
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0;
        padding: 0 var(--la-space-lg) var(--la-space-lg);
      }

      /* ── Footer ───────────────────────────────────── */
      .footer {
        position: relative;
        flex-shrink: 0;
        display: flex;
        justify-content: flex-end;
        gap: var(--la-space-md);
        padding: 0 var(--la-space-lg) var(--la-space-lg);
      }
      .footer:empty {
        display: none;
      }
      .footer::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        height: var(--la-space-2xl);
        background: linear-gradient(to bottom, transparent, var(--la-color-bg));
        pointer-events: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .backdrop,
        :host([open]) .backdrop,
        .panel,
        :host([open]) .panel {
          transition: none;
        }
      }
    `,
  ];
  __decorate$G([
      n({ type: Boolean, reflect: true })
  ], exports.LaDrawer.prototype, "open", void 0);
  __decorate$G([
      n({ reflect: true })
  ], exports.LaDrawer.prototype, "edge", void 0);
  __decorate$G([
      n()
  ], exports.LaDrawer.prototype, "size", void 0);
  __decorate$G([
      n()
  ], exports.LaDrawer.prototype, "heading", void 0);
  __decorate$G([
      n()
  ], exports.LaDrawer.prototype, "description", void 0);
  __decorate$G([
      n()
  ], exports.LaDrawer.prototype, "label", void 0);
  __decorate$G([
      n({ type: Boolean, attribute: 'backdrop-dismiss' })
  ], exports.LaDrawer.prototype, "backdropDismiss", void 0);
  __decorate$G([
      n({ type: Boolean, attribute: 'no-scroll-lock' })
  ], exports.LaDrawer.prototype, "noScrollLock", void 0);
  exports.LaDrawer = __decorate$G([
      t('la-drawer')
  ], exports.LaDrawer);

  var __decorate$F = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-tab — single trigger within a la-tabs tab list.
   *
   * Host element carries role="tab". Visibility of its associated panel is
   * coordinated by the parent la-tabs via the `active` attribute, which the
   * parent sets on whichever tab matches its current `active` value.
   *
   * The host is the focusable element — no inner button. Parent manages the
   * roving-tabindex pattern (active tab = 0, others = -1) and arrow-key
   * navigation.
   */
  exports.LaTab = class LaTab extends i$2 {
      constructor() {
          super(...arguments);
          /** Identifier matched against la-tabs' `active` and la-tab-panel's `value`. */
          this.value = '';
          /**
           * Active state — set by la-tabs via _syncChildren when this tab's value
           * matches the parent's active value. Declared as a Lit property so its
           * change triggers `updated()`, which swaps slotted Phosphor icons between
           * outline (ph) and fill (ph-fill) per the system's icon-state rule.
           */
          this.active = false;
          this._onClick = () => {
              this._activate();
          };
          this._onKeydown = (e) => {
              // Enter + Space activate the tab. Arrow keys bubble up to la-tabs.
              if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  this._activate();
              }
          };
          this._onIconSlotChange = (e) => {
              const slot = e.target;
              const hasIcon = slot.assignedNodes({ flatten: true }).some(n => n.nodeType !== Node.TEXT_NODE || (n.textContent ?? '').trim() !== '');
              this.toggleAttribute('has-icon', hasIcon);
          };
      }
      updated(changed) {
          super.updated?.(changed);
          if (changed.has('active')) {
              this._updateIconState();
          }
      }
      /**
       * Auto-swap Phosphor icons between outline and fill weights based on
       * active state. Per CLAUDE.md icon rule. Only touches glyphs that already
       * carry a `ph` or `ph-fill` class — custom icon markup is untouched.
       */
      _updateIconState() {
          const slot = this.shadowRoot?.querySelector('slot[name="icon"]');
          if (!slot)
              return;
          slot.assignedElements({ flatten: true }).forEach((el) => {
              if (el.classList.contains('ph') || el.classList.contains('ph-fill')) {
                  if (this.active) {
                      el.classList.remove('ph');
                      el.classList.add('ph-fill');
                  }
                  else {
                      el.classList.remove('ph-fill');
                      el.classList.add('ph');
                  }
              }
          });
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'tab');
          if (!this.hasAttribute('tabindex'))
              this.setAttribute('tabindex', '-1');
          this.addEventListener('click', this._onClick);
          this.addEventListener('keydown', this._onKeydown);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this.removeEventListener('click', this._onClick);
          this.removeEventListener('keydown', this._onKeydown);
      }
      _activate() {
          this.dispatchEvent(new CustomEvent('la-tab-activate', {
              bubbles: true,
              composed: true,
              detail: { value: this.value },
          }));
      }
      render() {
          return b `
      <span class="icon"><slot name="icon" @slotchange=${this._onIconSlotChange}></slot></span>
      <span class="label"><slot></slot></span>
    `;
      }
  };
  exports.LaTab.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-xs);
        padding: 12px;
        font-size: var(--la-font-size-md);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text-muted);
        cursor: pointer;
        user-select: none;
        position: relative;
        white-space: nowrap;
        /* Active underline — 2px inset shadow avoids layout shift vs border-bottom. */
        box-shadow: inset 0 -2px 0 transparent;
        transition: color var(--dur-fast) var(--ease),
                    box-shadow var(--dur-fast) var(--ease);
      }

      :host(:hover) {
        color: var(--la-color-text-secondary);
      }

      :host([active]) {
        color: var(--la-color-primary);
        /* Underline indicator is drawn by la-tabs as a sliding bar — no
           per-tab inset shadow here, otherwise activated tabs would carry
           a stationary underline alongside the moving indicator. */
      }

      :host(:focus-visible) {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: calc(var(--la-focus-ring-offset) * -1);
      }

      .icon {
        display: inline-flex;
        align-items: center;
        font-size: var(--la-font-size-lg);
      }
      /* Hide the icon span when no icon is slotted. JS tracks the slot's
         assigned nodes via slotchange and toggles a has-icon attribute on
         the host. Without this, the inline-flex .icon contributes to the
         parent flex gap, creating asymmetric padding around the label
         (more space on the left than the right). */
      :host(:not([has-icon])) .icon {
        display: none;
      }

      /* ── Pill variant ─────────────────────────────────────
         Section-level sub-nav. Hover uses --la-color-bg-muted (the system's
         hover-state-bg-for-interactive-rows token), active uses
         --la-color-bg-active (the selected-state token) so the two are
         visibly distinct, not identical fills.
         Sized to la-button's metric grid — 14px font, 32px min-height,
         zero vertical padding — so pill tabs line up with segmented tabs
         and la-button when they sit in the same row. */
      :host([variant='pill']) {
        min-height: var(--la-button-height-default);
        box-sizing: border-box;
        padding: 0 var(--la-space-md);
        border-radius: var(--la-radius-md);
        box-shadow: none;
        font-size: var(--la-font-size-lg);
      }
      /* Pill — small (24px visual, 32px interactive).
         The host holds the 32px click target so the chip sits comfortably
         above the WCAG 2.5.8 minimum (24×24). The visible 24px chip lives
         in a ::before pseudo-element, inset 4px from the host's top and
         bottom — the 4px above and below is invisible click area.
         Bg, hover, active, and focus ring all live on ::before so the
         visual responds where the user expects (the chip), not the larger
         interactive zone. */
      :host([variant='pill'][size='sm']) {
        position: relative;
        /* isolation: isolate creates a stacking context on the host so the
           ::before's negative z-index stays contained — without this, the
           ::before escapes upward and renders behind other elements,
           making the visible chip invisible. */
        isolation: isolate;
        min-height: var(--la-button-height-default);
        /* 24px horizontal padding — pill+sm reads as a filter chip, and
           short labels ("All", "Active") need visible breathing room
           inside the chip. Kept the chip's vertical inset at 4px so the
           chip stays at its original 24px height. */
        padding: 0 var(--la-space-md);
        font-size: var(--la-font-size-sm);
        background: transparent;
        border-radius: 0;
      }
      :host([variant='pill'][size='sm'])::before {
        content: '';
        position: absolute;
        inset: 4px 0;
        border-radius: var(--la-radius-pill);
        z-index: -1;
        transition: background var(--dur-fast) var(--ease);
      }
      /* Override the base pill hover/active rules so the host stays
         transparent and only the visible chip lights up. */
      :host([variant='pill'][size='sm']:hover) {
        background: transparent;
      }
      :host([variant='pill'][size='sm']:hover)::before {
        background: var(--la-color-bg-muted);
      }
      :host([variant='pill'][size='sm'][active]) {
        background: transparent;
      }
      :host([variant='pill'][size='sm'][active])::before {
        background: var(--la-color-bg-active);
      }
      /* Focus ring on the visible chip, not the host's 32px click box. */
      :host([variant='pill'][size='sm']:focus-visible) {
        outline: none;
      }
      :host([variant='pill'][size='sm']:focus-visible)::before {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: 2px;
      }
      /* Pill — large (44px). Matches la-button[size='lg']. */
      :host([variant='pill'][size='lg']) {
        min-height: var(--la-button-height-lg);
        padding: 0 var(--la-space-lg);
        font-size: var(--la-font-size-lg);
        border-radius: var(--la-radius-lg);
      }
      :host([variant='pill']:hover) {
        color: var(--la-color-text-secondary);
        background: var(--la-color-bg-muted);
      }
      :host([variant='pill'][active]) {
        color: var(--la-color-primary);
        background: var(--la-color-bg-active);
        box-shadow: none;
      }

      /* ── Segmented variant ────────────────────────────────
         Toggle group — segments stay flat; the parent la-tabs renders an
         absolutely-positioned indicator that slides between segments. Each
         segment sits above the indicator (z-index: 1) so its label reads on
         top of the lift. Sized to la-button's metric grid (14px font,
         32px rail min-height). */
      :host([variant='segmented']) {
        position: relative;
        z-index: 1;
        /* Content-driven width — each segment sizes to its label + padding.
           The indicator animates both width and translateX so the active
           tile resizes smoothly between segments of different widths.
           Equal-width "iOS-toggle" behaviour is opt-in by the consumer
           (e.g. wrapping in a CSS class that re-applies flex: 1). */
        justify-content: center;
        padding: 0 var(--la-space-lg);
        border-radius: var(--la-radius-pill);
        box-shadow: none;
        font-size: var(--la-font-size-base);
      }
      :host([variant='segmented']:hover) {
        color: var(--la-color-text-secondary);
        background: transparent;
      }
      :host([variant='segmented'][active]) {
        color: var(--la-color-primary);
        background: transparent;
        box-shadow: none;
      }

      /* ── Vertical variant ─────────────────────────────────
         Column row, full-width. Active state distinguished purely by
         background fill (--la-color-bg-active) — no left-edge accent,
         which keeps it consistent with the rest of the design language. */
      :host([variant='vertical']) {
        width: 100%;
        justify-content: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-md);
        box-shadow: none;
      }
      :host([variant='vertical']:hover) {
        color: var(--la-color-text-secondary);
        background: var(--la-color-bg-muted);
      }
      :host([variant='vertical'][active]) {
        color: var(--la-color-primary);
        background: var(--la-color-bg-active);
        box-shadow: none;
      }

      /* ── Block / full-width mode ─────────────────────────
         Segments distribute equally with content centered.
         Applies to segmented, underline, and pill variants;
         vertical's column layout is unaffected. */
      :host([block][variant='segmented']),
      :host([block][variant='underline']),
      :host([block][variant='pill']) {
        flex: 1;
        min-width: 0;
        justify-content: center;
      }
    `,
  ];
  __decorate$F([
      n({ reflect: true })
  ], exports.LaTab.prototype, "value", void 0);
  __decorate$F([
      n({ type: Boolean, reflect: true })
  ], exports.LaTab.prototype, "active", void 0);
  exports.LaTab = __decorate$F([
      t('la-tab')
  ], exports.LaTab);

  var __decorate$E = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-tab-panel — content area associated with a single la-tab value.
   *
   * Visibility is controlled by the parent la-tabs via the native `hidden`
   * attribute (added when value !== parent.active). Carries role="tabpanel"
   * and tabindex="0" so keyboard users can Tab into the panel region itself
   * if it contains no focusable content.
   */
  exports.LaTabPanel = class LaTabPanel extends i$2 {
      constructor() {
          super(...arguments);
          /** Identifier matched against la-tabs' `active` and la-tab's `value`. */
          this.value = '';
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.hasAttribute('role'))
              this.setAttribute('role', 'tabpanel');
          if (!this.hasAttribute('tabindex'))
              this.setAttribute('tabindex', '0');
      }
      render() {
          return b `<slot></slot>`;
      }
  };
  exports.LaTabPanel.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
    `,
  ];
  __decorate$E([
      n({ reflect: true })
  ], exports.LaTabPanel.prototype, "value", void 0);
  exports.LaTabPanel = __decorate$E([
      t('la-tab-panel')
  ], exports.LaTabPanel);

  var __decorate$D = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-tabs — parent wrapper coordinating a horizontal tab list with its panels.
   *
   * Children (light DOM):
   *   slot="triggers" — one or more la-tab elements, placed into the tab rail
   *   default slot    — one or more la-tab-panel elements, matched to triggers by `value`
   *
   * Responsibilities:
   *   - Owns the `active` state (reflected attribute).
   *   - On change, syncs every la-tab child (sets/removes `active` attribute, tabindex)
   *     and every la-tab-panel child (sets/removes `hidden` attribute).
   *   - Handles Arrow Left / Arrow Right / Home / End on the tab rail for WAI-ARIA
   *     tablist keyboard navigation.
   *   - Listens for `la-tab-activate` bubbles from children; updates `active` and
   *     dispatches `la-change` once per real change.
   */
  exports.LaTabs = class LaTabs extends i$2 {
      constructor() {
          super(...arguments);
          /** Currently active tab value — matches a `la-tab[value]` child. Reflected. */
          this.active = '';
          /**
           * Visual treatment + layout. Default `segmented` is the modern primary tab
           * pattern — bordered group with a tinted rail and a lifted active segment.
           * `underline` is the older line-tab convention, still supported for legacy
           * page chrome. `pill` is for section-level sub-nav inside a card or panel.
           * `vertical` is the layout variant — rail sits as a column to the left,
           * panels render to the right (settings, deep nav).
           */
          this.variant = 'segmented';
          /**
           * Full-width mode. When true, the rail fills its parent's width and child
           * tabs distribute equally — useful in modals, constrained widths, and
           * full-bleed app chrome where a fixed-size segmented control with equal
           * segments is preferred. No-op for the vertical variant.
           */
          this.block = false;
          /**
           * Tab size — matches la-button's metric grid so tabs and buttons sit on
           * the same vertical alignment. `default` is 32px, `sm` is 28px, `lg` is
           * 44px. Currently surfaces variant-specific sizing on the pill variant;
           * other variants stay at default.
           */
          this.size = 'default';
          this._onResize = () => {
              this._updateIndicator();
          };
          this._onTabActivate = (e) => {
              e.stopPropagation();
              const value = e.detail.value;
              if (value === this.active)
                  return; // no-op on re-click of active
              this.active = value;
              this.dispatchEvent(new CustomEvent('la-change', {
                  bubbles: true,
                  composed: true,
                  detail: { value },
              }));
          };
          this._onRailKeydown = (e) => {
              const tabs = this._getTabs();
              if (tabs.length === 0)
                  return;
              // WAI-ARIA recommends ↑/↓ for vertical tabs and ←/→ for horizontal.
              // We accept both axes regardless of orientation — more forgiving for
              // users who reach for either pair out of habit.
              const isNext = e.key === 'ArrowDown' || e.key === 'ArrowRight';
              const isPrev = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
              const currentIndex = tabs.findIndex(t => t.value === this.active);
              let nextIndex = currentIndex;
              if (isNext) {
                  nextIndex = (currentIndex + 1) % tabs.length;
              }
              else if (isPrev) {
                  nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
              }
              else if (e.key === 'Home') {
                  nextIndex = 0;
              }
              else if (e.key === 'End') {
                  nextIndex = tabs.length - 1;
              }
              else {
                  return;
              }
              e.preventDefault();
              const next = tabs[nextIndex];
              this.active = next.value;
              this.dispatchEvent(new CustomEvent('la-change', {
                  bubbles: true,
                  composed: true,
                  detail: { value: next.value },
              }));
              // Move focus to the newly-active tab for roving tabindex pattern.
              requestAnimationFrame(() => next.focus());
          };
      }
      connectedCallback() {
          super.connectedCallback();
          this.addEventListener('la-tab-activate', this._onTabActivate);
          window.addEventListener('resize', this._onResize);
          // Watch each tab for size changes (label edits, font swaps, etc.) so the
          // indicator stays glued to the active tab regardless of cause.
          this._resizeObserver = new ResizeObserver(() => this._updateIndicator());
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this.removeEventListener('la-tab-activate', this._onTabActivate);
          window.removeEventListener('resize', this._onResize);
          this._resizeObserver?.disconnect();
          this._resizeObserver = undefined;
      }
      firstUpdated() {
          // Fall back to first tab's value when consumer hasn't set `active`.
          if (!this.active) {
              const first = this._getTabs()[0];
              if (first)
                  this.active = first.value;
          }
          this._syncChildren();
          // Position the indicator on first paint, then enable transitions so
          // subsequent active changes animate (avoids a slide-in from {0, 0}).
          this._updateIndicator();
          requestAnimationFrame(() => {
              const indicator = this.shadowRoot?.querySelector('.indicator');
              if (indicator)
                  indicator.classList.add('animated');
          });
      }
      updated(changed) {
          if (changed.has('active') ||
              changed.has('variant') ||
              changed.has('block') ||
              changed.has('size')) {
              this._syncChildren();
              this._updateIndicator();
          }
      }
      /**
       * Position the active indicator over the active tab. Width and transform
       * both animate so the indicator smoothly resizes and translates between
       * tabs of different widths. Runs for variants that show an indicator
       * (segmented + underline); no-op for pill and vertical.
       */
      _updateIndicator() {
          if (this.variant !== 'segmented' && this.variant !== 'underline')
              return;
          requestAnimationFrame(() => {
              const rail = this.shadowRoot?.querySelector('.rail');
              const indicator = this.shadowRoot?.querySelector('.indicator');
              if (!rail || !indicator)
                  return;
              const activeTab = this._getTabs().find(t => t.value === this.active);
              if (!activeTab)
                  return;
              const railRect = rail.getBoundingClientRect();
              const activeRect = activeTab.getBoundingClientRect();
              const borderLeft = parseFloat(getComputedStyle(rail).borderLeftWidth) || 0;
              // Round to integer pixels — eliminates subpixel jitter that the browser
              // can introduce when interpolating fractional translateX values.
              const left = Math.round(activeRect.left - railRect.left - borderLeft);
              const width = Math.round(activeRect.width);
              indicator.style.width = `${width}px`;
              indicator.style.transform = `translateX(${left}px)`;
          });
      }
      _getTabs() {
          return Array.from(this.querySelectorAll(':scope > la-tab'));
      }
      _getPanels() {
          return Array.from(this.querySelectorAll(':scope > la-tab-panel'));
      }
      _syncChildren() {
          const tabs = this._getTabs();
          const panels = this._getPanels();
          const active = this.active;
          // Re-observe tabs each sync — handles tabs added/removed via innerHTML
          // or dynamic templating. ResizeObserver.observe is idempotent for the
          // same target, so re-observing is safe; old removed tabs drop out of
          // observation naturally when GCed.
          this._resizeObserver?.disconnect();
          tabs.forEach(tab => {
              const isActive = tab.value === active;
              tab.toggleAttribute('active', isActive);
              tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
              tab.setAttribute('tabindex', isActive ? '0' : '-1');
              // Variant flows from parent → children so child CSS can react.
              tab.setAttribute('variant', this.variant);
              // Block mode propagated for child CSS — no-op on vertical.
              tab.toggleAttribute('block', this.block);
              // Size propagated for variant-specific size rules (currently pill).
              tab.setAttribute('size', this.size);
              // Auto-wire aria-controls → panel id
              const panelId = `la-tab-panel-${tab.value}`;
              tab.setAttribute('aria-controls', panelId);
              this._resizeObserver?.observe(tab);
          });
          panels.forEach(panel => {
              const isActive = panel.value === active;
              panel.toggleAttribute('hidden', !isActive);
              // Auto-assign id so tabs can reference via aria-controls
              panel.id = `la-tab-panel-${panel.value}`;
              panel.setAttribute('aria-labelledby', `la-tab-trigger-${panel.value}`);
          });
          tabs.forEach(tab => {
              tab.id = `la-tab-trigger-${tab.value}`;
          });
      }
      render() {
          const orientation = this.variant === 'vertical' ? 'vertical' : 'horizontal';
          return b `
      <div
        class="rail"
        part="rail"
        role="tablist"
        aria-orientation=${orientation}
        @keydown=${this._onRailKeydown}
      >
        <div class="indicator" part="indicator" aria-hidden="true"></div>
        <slot name="triggers"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `;
      }
  };
  exports.LaTabs.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /* Vertical layout — rail becomes a left column, panels render to the right. */
      :host([variant='vertical']) {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--la-space-xl);
      }

      /* Block / full-width mode — rail fills the container.
         Segments distribute equally via la-tab's [block] CSS. */
      :host([block][variant='segmented']) .rail {
        display: flex;
        width: 100%;
      }
      :host([block][variant='underline']) .rail,
      :host([block][variant='pill']) .rail {
        width: 100%;
      }

      /* Underline (default) — horizontal rail with bottom border + active 2px indicator. */
      .rail {
        position: relative;
        display: flex;
        align-items: flex-end;
        gap: var(--la-space-lg);
        border-bottom: 1px solid var(--la-color-border-light);
        padding: 0 var(--la-space-sm);
      }

      /* Pill — chip row, no rail border. */
      :host([variant='pill']) .rail {
        gap: var(--la-space-xs);
        border-bottom: none;
        padding: 0;
      }


      /* Segmented — connected, bordered group. Each child fills its segment.
         Muted rail bg + soft border so the active indicator lifts out cleanly.
         Active state is carried by the absolutely-positioned .indicator
         element below, which slides between segments on activate. */
      :host([variant='segmented']) .rail {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        gap: 0;
        border: none;
        border-radius: var(--la-radius-pill);
        padding: var(--la-space-3xs);
        background: var(--la-color-bg-subtle);
        min-height: var(--la-button-height-default);
        box-sizing: border-box;
      }

      /* Active indicator — absolutely-positioned element that slides between
         tabs. Shared shape across variants; each variant contributes its own
         positioning + visual treatment. Hidden by default; opted-in by the
         segmented and underline variants. */
      .indicator {
        position: absolute;
        left: 0;
        width: 0;
        transform: translateX(0);
        pointer-events: none;
        display: none;
        box-sizing: border-box;
      }

      /* Segmented — fills the segment height inside the rail's padding,
         carries the white bg + shadow that was previously per-tab. */
      :host([variant='segmented']) .indicator {
        display: block;
        top: var(--la-space-3xs);
        bottom: var(--la-space-3xs);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-pill);
        box-shadow: var(--la-shadow-float);
        z-index: 0;
      }

      /* Underline — 2px line at the bottom of the rail, overlapping the rail's
         1px border (bottom: -1px) so the active position visually replaces
         that border with a thicker text-coloured line. */
      :host([variant='underline']) .indicator {
        display: block;
        bottom: -1px;
        height: 2px;
        background: var(--la-color-primary);
        border-radius: 0;
      }

      /* Animation enabled after first paint via JS (.animated class) so the
         initial position doesn't slide in from {0, 0}.
         Width is animated alongside transform so the indicator smoothly
         resizes between tabs of different widths instead of snapping
         to the destination size before the slide. Width transition is the
         one CLAUDE.md "GPU-safe only" exception we accept here — the
         indicator has no children, so the reflow cost is trivial. */
      .indicator.animated {
        transition:
          transform var(--dur-base) var(--ease),
          width var(--dur-base) var(--ease);
      }

      /* Vertical — column rail, no rail border, fixed-ish width, sits to the left. */
      :host([variant='vertical']) .rail {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--la-space-3xs);
        border-bottom: none;
        padding: 0;
        min-width: 180px;
      }

      .panels {
        padding-top: var(--la-space-md);
      }

      :host([variant='vertical']) .panels {
        padding-top: 0;
      }
    `,
  ];
  __decorate$D([
      n({ reflect: true })
  ], exports.LaTabs.prototype, "active", void 0);
  __decorate$D([
      n({ reflect: true })
  ], exports.LaTabs.prototype, "variant", void 0);
  __decorate$D([
      n({ type: Boolean, reflect: true })
  ], exports.LaTabs.prototype, "block", void 0);
  __decorate$D([
      n({ reflect: true })
  ], exports.LaTabs.prototype, "size", void 0);
  exports.LaTabs = __decorate$D([
      t('la-tabs')
  ], exports.LaTabs);

  var __decorate$C = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-table — card-shell wrapper around a consumer-provided `<table>`.
   *
   * HTML-parsing rules drop stray `<thead>` / `<tbody>` / `<tr>` / `<th>` / `<td>`
   * tokens when they aren't inside a real `<table>` element — the parser treats
   * them as parse errors and ignores them before shadow DOM projection ever runs.
   * That means `<la-table>` cannot host `<thead>` / `<tbody>` / `<tr>` directly
   * as light-DOM children; consumers must wrap their content in a real `<table>`:
   *
   *   <la-table>
   *     <table>
   *       <thead><tr><th>…</th><th data-sort="shares">Shares</th></tr></thead>
   *       <tbody>
   *         <tr><td>…</td></tr>
   *         <tr class="success"><td>…</td></tr>
   *         <tr class="pending"><td>…</td></tr>
   *       </tbody>
   *     </table>
   *   </la-table>
   *
   * Sortable columns: add `data-sort="<key>"` to any `<th>`. The component
   * injects a sort icon and emits `la-sort-change` with `{ column, direction }`
   * on click. Consumers handle the actual data sorting.
   *
   * `la-table.css` supplies the light-DOM styling for the nested table content.
   * Import it from any page that uses la-table:
   *
   *   <link rel="stylesheet" href="/dev/la-table.css">
   *
   * @fires la-sort-change - { column: string, direction: 'asc' | 'desc' }
   */
  exports.LaTable = class LaTable extends i$2 {
      constructor() {
          super(...arguments);
          this._sortCol = null;
          this._sortDir = 'asc';
      }
      _onSlotChange() {
          this.querySelectorAll('th[data-sort]').forEach(th => {
              if (th.querySelector('.la-sort-icon'))
                  return;
              const icon = document.createElement('i');
              icon.className = 'la-sort-icon ph ph-arrows-down-up';
              icon.setAttribute('aria-hidden', 'true');
              th.appendChild(icon);
          });
      }
      _onClick(e) {
          const th = e.target.closest('th[data-sort]');
          if (!th)
              return;
          const col = th.getAttribute('data-sort');
          if (this._sortCol === col) {
              this._sortDir = this._sortDir === 'asc' ? 'desc' : 'asc';
          }
          else {
              this._sortCol = col;
              this._sortDir = 'asc';
          }
          this.querySelectorAll('th[data-sort]').forEach(t => {
              const isActive = t.getAttribute('data-sort') === this._sortCol;
              if (isActive) {
                  t.setAttribute('data-sort-dir', this._sortDir);
                  const icon = t.querySelector('.la-sort-icon');
                  if (icon)
                      icon.className = 'la-sort-icon ph ' + (this._sortDir === 'asc' ? 'ph-arrow-up' : 'ph-arrow-down');
              }
              else {
                  t.removeAttribute('data-sort-dir');
                  const icon = t.querySelector('.la-sort-icon');
                  if (icon)
                      icon.className = 'la-sort-icon ph ph-arrows-down-up';
              }
          });
          this.dispatchEvent(new CustomEvent('la-sort-change', {
              detail: { column: this._sortCol, direction: this._sortDir },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          return b `
      <div class="wrap" @click=${this._onClick}>
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `;
      }
  };
  exports.LaTable.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        border: 1px solid var(--la-color-border-light);
        border-radius: var(--la-radius-lg);
        overflow: visible;
      }
      .wrap {
        width: 100%;
        overflow: visible;
        border-radius: inherit;
      }
    `,
  ];
  exports.LaTable = __decorate$C([
      t('la-table')
  ], exports.LaTable);

  var __decorate$B = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDataTable = class LaDataTable extends i$2 {
      constructor() {
          super(...arguments);
          this.columns = [];
          this.rows = [];
          this.rowKey = 'id';
          this.sort = null;
          this.selected = [];
          this.selectable = 'none';
          this.density = 'default';
          this.stickyHeader = true;
          this.loading = false;
          this.rowClickable = false;
      }
      getKey(row) {
          const rk = this.rowKey;
          if (typeof rk === 'function')
              return rk(row);
          const value = row[rk];
          return String(value);
      }
      emitSortChange(col) {
          if (!col.sortable)
              return;
          const current = this.sort;
          let next;
          if (!current || current.columnId !== col.id) {
              next = { columnId: col.id, direction: 'asc' };
          }
          else if (current.direction === 'asc') {
              next = { columnId: col.id, direction: 'desc' };
          }
          else {
              next = null;
          }
          this.dispatchEvent(new CustomEvent('la-sort-change', {
              detail: next,
              bubbles: true,
              composed: true,
          }));
      }
      emitRowClick(row, key) {
          this.dispatchEvent(new CustomEvent('la-row-click', {
              detail: { row, rowKey: key },
              bubbles: true,
              composed: true,
          }));
          if (this.selectable === 'single') {
              const next = this.selected.includes(key) ? [] : [key];
              this.emitSelection(next);
          }
      }
      emitSelection(next) {
          this.dispatchEvent(new CustomEvent('la-selection-change', {
              detail: { selected: next },
              bubbles: true,
              composed: true,
          }));
      }
      toggleRowSelection(key) {
          const set = new Set(this.selected);
          if (set.has(key))
              set.delete(key);
          else
              set.add(key);
          this.emitSelection([...set]);
      }
      toggleSelectAll() {
          const allKeys = this.rows.map((r) => this.getKey(r));
          const allSelected = allKeys.length > 0 && allKeys.every((k) => this.selected.includes(k));
          this.emitSelection(allSelected ? [] : allKeys);
      }
      renderCell(col, row) {
          if (col.render)
              return col.render(row);
          const value = row[col.id];
          return value == null ? '' : String(value);
      }
      render() {
          const showCheckboxes = this.selectable === 'multi';
          const isEmpty = !this.loading && this.rows.length === 0;
          const isLoading = this.loading;
          const allKeys = this.rows.map((r) => this.getKey(r));
          const allSelected = allKeys.length > 0 && allKeys.every((k) => this.selected.includes(k));
          const someSelected = !allSelected && allKeys.some((k) => this.selected.includes(k));
          const totalCols = this.columns.length + (showCheckboxes ? 1 : 0);
          return b `
      ${iconStyles}
      <div class="table-wrap">
        <table>
          <colgroup>
            ${showCheckboxes ? b `<col style="width: 40px;" />` : A}
            ${this.columns.map((c) => b `<col style=${c.width ? `width: ${c.width};` : ''} />`)}
          </colgroup>
          <thead>
            <tr>
              ${showCheckboxes
            ? b `
                    <th class="checkbox-cell">
                      <la-checkbox
                        label="Select all rows"
                        .checked=${allSelected}
                        .indeterminate=${someSelected}
                        @la-change=${() => this.toggleSelectAll()}
                      ></la-checkbox>
                    </th>
                  `
            : A}
              ${this.columns.map((col) => {
            const sorted = this.sort?.columnId === col.id;
            const direction = sorted ? this.sort.direction : null;
            const classes = [
                col.sortable ? 'sortable' : '',
                sorted ? 'sorted' : '',
            ]
                .filter(Boolean)
                .join(' ');
            return b `
                  <th
                    class=${classes}
                    style="text-align: ${col.align ?? 'left'};"
                    tabindex=${col.sortable ? '0' : '-1'}
                    role=${col.sortable ? 'button' : 'columnheader'}
                    aria-sort=${sorted
                ? direction === 'asc'
                    ? 'ascending'
                    : 'descending'
                : col.sortable
                    ? 'none'
                    : A}
                    @click=${() => this.emitSortChange(col)}
                    @keydown=${(e) => {
                if (!col.sortable)
                    return;
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.emitSortChange(col);
                }
            }}
                  >
                    <span class="th-inner">
                      <span>${col.label}</span>
                      ${col.sortable
                ? b `<i
                            class="sort-icon ph ${direction === 'asc'
                    ? 'ph-caret-up'
                    : direction === 'desc'
                        ? 'ph-caret-down'
                        : 'ph-arrows-down-up'}"
                            aria-hidden="true"
                          ></i>`
                : A}
                    </span>
                  </th>
                `;
        })}
            </tr>
          </thead>
          <tbody>
            ${isLoading
            ? b `
                  <tr class="status-row">
                    <td colspan=${totalCols}>
                      <slot name="loading">
                        <div class="skeleton-rows">
                          <div class="skeleton-row"></div>
                          <div class="skeleton-row"></div>
                          <div class="skeleton-row"></div>
                          <div class="skeleton-row"></div>
                        </div>
                      </slot>
                    </td>
                  </tr>
                `
            : isEmpty
                ? b `
                  <tr class="status-row">
                    <td colspan=${totalCols}>
                      <slot name="empty">
                        <div class="empty-default">No results</div>
                      </slot>
                    </td>
                  </tr>
                `
                : this.rows.map((row) => {
                    const key = this.getKey(row);
                    const isSelected = this.selected.includes(key);
                    return b `
                    <tr
                      class=${isSelected ? 'selected' : ''}
                      @click=${() => this.emitRowClick(row, key)}
                    >
                      ${showCheckboxes
                        ? b `
                            <td
                              class="checkbox-cell"
                              @click=${(e) => e.stopPropagation()}
                            >
                              <la-checkbox
                                label="Select row ${key}"
                                .checked=${isSelected}
                                @la-change=${() => this.toggleRowSelection(key)}
                              ></la-checkbox>
                            </td>
                          `
                        : A}
                      ${this.columns.map((col) => b `
                          <td style="text-align: ${col.align ?? 'left'};">
                            ${this.renderCell(col, row)}
                          </td>
                        `)}
                    </tr>
                  `;
                })}
          </tbody>
        </table>
      </div>
    `;
      }
  };
  exports.LaDataTable.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        font-family: var(--la-font-family);
        color: var(--la-color-text);
        --la-dt-row-pad-v: var(--la-space-sm);
        --la-dt-row-pad-h: var(--la-space-lg);
      }
      :host([density='compact']) {
        --la-dt-row-pad-v: var(--la-space-2xs);
        --la-dt-row-pad-h: var(--la-space-md);
      }
      :host([density='comfortable']) {
        --la-dt-row-pad-v: var(--la-space-md);
        --la-dt-row-pad-h: var(--la-space-xl);
      }

      .table-wrap {
        width: 100%;
        overflow: auto;
        border: 1px solid var(--la-color-border-light);
        border-radius: var(--la-radius-md);
        background: var(--la-color-bg);
      }

      table {
        width: 100%;
        border-collapse: collapse;
        font-size: var(--la-font-size-base);
      }

      thead {
        background: var(--la-color-bg-subtle);
      }

      :host([sticky-header]) thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: var(--la-color-bg-subtle);
      }

      th {
        text-align: left;
        padding: var(--la-dt-row-pad-v) var(--la-dt-row-pad-h);
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text-muted);
        border-bottom: 1px solid var(--la-color-border-light);
        white-space: nowrap;
        user-select: none;
      }
      th.sortable {
        cursor: pointer;
        transition: color var(--dur-fast) var(--ease);
      }
      th.sortable:hover,
      th.sorted {
        color: var(--la-color-text);
      }
      th.sortable:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: calc(var(--la-focus-ring-offset) * -1);
      }
      .th-inner {
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-xs);
      }
      .sort-icon {
        font-size: var(--la-font-size-md);
        opacity: 0.45;
        transition: opacity var(--dur-fast) var(--ease);
      }
      th.sorted .sort-icon,
      th.sortable:hover .sort-icon {
        opacity: 1;
      }

      tbody tr {
        border-bottom: 1px solid var(--la-color-border-light);
        transition: background var(--dur-fast) var(--ease);
      }
      tbody tr:last-child {
        border-bottom: none;
      }
      tbody tr:hover {
        background: var(--la-color-bg-subtle);
      }
      tbody tr.selected,
      tbody tr.selected:hover {
        background: var(--la-color-bg-active);
      }
      :host([selectable='single']) tbody tr,
      :host([selectable='multi']) tbody tr,
      :host([row-clickable]) tbody tr {
        cursor: pointer;
      }

      td {
        padding: var(--la-dt-row-pad-v) var(--la-dt-row-pad-h);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        vertical-align: middle;
      }

      .checkbox-cell {
        width: 40px;
        padding-left: var(--la-space-lg);
        padding-right: 0;
        text-align: left;
      }

      .status-row td {
        padding: var(--la-space-2xl) var(--la-space-lg);
        text-align: center;
        color: var(--la-color-text-muted);
      }
      .empty-default {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }

      .skeleton-rows {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
      }
      .skeleton-row {
        height: 12px;
        background: var(--la-color-bg-muted);
        border-radius: var(--la-radius-sm);
        animation: la-dt-shimmer 1400ms var(--ease) infinite;
      }
      .skeleton-row:nth-child(2) { width: 85%; }
      .skeleton-row:nth-child(3) { width: 92%; }
      .skeleton-row:nth-child(4) { width: 78%; }

      @keyframes la-dt-shimmer {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 1; }
      }

      @media (prefers-reduced-motion: reduce) {
        tbody tr,
        th.sortable,
        .sort-icon,
        .skeleton-row {
          transition: none;
          animation: none;
        }
      }
    `,
  ];
  __decorate$B([
      n({ attribute: false })
  ], exports.LaDataTable.prototype, "columns", void 0);
  __decorate$B([
      n({ attribute: false })
  ], exports.LaDataTable.prototype, "rows", void 0);
  __decorate$B([
      n({ attribute: false })
  ], exports.LaDataTable.prototype, "rowKey", void 0);
  __decorate$B([
      n({ attribute: false })
  ], exports.LaDataTable.prototype, "sort", void 0);
  __decorate$B([
      n({ attribute: false })
  ], exports.LaDataTable.prototype, "selected", void 0);
  __decorate$B([
      n({ reflect: true })
  ], exports.LaDataTable.prototype, "selectable", void 0);
  __decorate$B([
      n({ reflect: true })
  ], exports.LaDataTable.prototype, "density", void 0);
  __decorate$B([
      n({ type: Boolean, attribute: 'sticky-header', reflect: true })
  ], exports.LaDataTable.prototype, "stickyHeader", void 0);
  __decorate$B([
      n({ type: Boolean, reflect: true })
  ], exports.LaDataTable.prototype, "loading", void 0);
  __decorate$B([
      n({ type: Boolean, attribute: 'row-clickable', reflect: true })
  ], exports.LaDataTable.prototype, "rowClickable", void 0);
  exports.LaDataTable = __decorate$B([
      t('la-data-table')
  ], exports.LaDataTable);

  var __decorate$A = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-person-item — interactive person row for use inside la-person-list.
   *
   * Renders avatar (initials auto-derived from name), primary name, secondary
   * role line, and a `trailing` slot for status indicators, badges, or action
   * menus. Fires `la-select` with `{ name, role }` detail when clicked.
   *
   * @fires la-select - Dispatched on click; detail: { name: string, subtitle: string }
   * @slot trailing - Right-side content (status dots, badges, menus). Empty by default.
   */
  exports.LaPersonItem = class LaPersonItem extends i$2 {
      constructor() {
          super(...arguments);
          this.name = '';
          /** Secondary line beneath the name — role, title, or any descriptor. */
          this.subtitle = '';
          /** Override auto-derived initials (e.g. "AC"). Defaults to first two word initials of name. */
          this.initials = '';
      }
      get _displayInitials() {
          if (this.initials)
              return this.initials;
          return this.name
              .split(' ')
              .slice(0, 2)
              .map(w => w[0] ?? '')
              .join('')
              .toUpperCase();
      }
      _onClick(e) {
          // Don't fire la-select when the click originated inside a la-menu element
          // (menu toggle is slotted inside the button but should not open the detail view)
          const fromMenu = e.composedPath().some(el => el instanceof Element && el.tagName.toLowerCase().startsWith('la-menu'));
          if (fromMenu)
              return;
          this.dispatchEvent(new CustomEvent('la-select', {
              detail: { name: this.name, subtitle: this.subtitle },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          return b `
      <button type="button" @click=${this._onClick}>
        <div class="avatar">${this._displayInitials}</div>
        <div class="info">
          <div class="name">${this.name}</div>
          ${this.subtitle ? b `<div class="role">${this.subtitle}</div>` : A}
        </div>
        <div class="trailing">
          <slot name="trailing"></slot>
        </div>
      </button>
    `;
      }
  };
  exports.LaPersonItem.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        border-radius: var(--la-radius-lg);
        position: relative;
        z-index: 0;
      }
      :host:has(la-menu[open]) {
        z-index: 10;
      }
      :host::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--la-radius-lg);
        background: var(--la-color-bg-muted);
        opacity: 0;
        transition: opacity var(--dur-fast) var(--ease);
        pointer-events: none;
        z-index: -1;
      }
      :host(:hover)::before {
        opacity: 1;
      }
      button {
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
        padding: var(--la-space-md) var(--la-space-lg);
        width: 100%;
        background: transparent;
        border: none;
        border-radius: var(--la-radius-lg);
        appearance: none;
        -webkit-appearance: none;
        font: inherit;
        color: inherit;
        text-align: left;
        cursor: pointer;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }
      button:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg-active);
        color: var(--la-color-text-secondary);
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-semibold);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        letter-spacing: 0.02em;
        user-select: none;
      }
      .info {
        flex: 1;
        min-width: 0;
      }
      .name {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .role {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trailing {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        flex-shrink: 0;
      }
    `,
  ];
  __decorate$A([
      n()
  ], exports.LaPersonItem.prototype, "name", void 0);
  __decorate$A([
      n()
  ], exports.LaPersonItem.prototype, "subtitle", void 0);
  __decorate$A([
      n()
  ], exports.LaPersonItem.prototype, "initials", void 0);
  exports.LaPersonItem = __decorate$A([
      t('la-person-item')
  ], exports.LaPersonItem);

  var __decorate$z = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-person-list — card container for la-person-item rows.
   *
   * Provides the border/radius/background shell, dividers between rows, and an
   * optional footer slot (for "Add …" actions). Automatically sets the
   * `last-item` attribute on the final slotted la-person-item to suppress its
   * bottom border.
   *
   * @slot default - la-person-item elements
   * @slot footer  - Optional footer content (add actions, etc.)
   *
   * @example
   * <la-person-list>
   *   <la-person-item name="Alex Chen" role="Founder & CEO · Director">
   *     <span slot="trailing" class="dot dot--resolved"></span>
   *   </la-person-item>
   *   <la-button slot="footer" variant="ghost" size="sm">Add director</la-button>
   * </la-person-list>
   */
  exports.LaPersonList = class LaPersonList extends i$2 {
      constructor() {
          super(...arguments);
          this._hasFooter = false;
      }
      _onFooterSlotChange(e) {
          const slot = e.target;
          this._hasFooter = slot.assignedElements().length > 0;
      }
      render() {
          return b `
      <slot></slot>
      ${this._hasFooter
            ? b `<div class="footer">
            <slot
              name="footer"
              @slotchange=${this._onFooterSlotChange}
            ></slot>
          </div>`
            : b `<slot
            name="footer"
            @slotchange=${this._onFooterSlotChange}
          ></slot>`}
    `;
      }
  };
  exports.LaPersonList.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xs);
      }
      .footer {
        display: flex;
        align-items: center;
        padding: var(--la-space-sm) var(--la-space-lg);
      }
    `,
  ];
  __decorate$z([
      r()
  ], exports.LaPersonList.prototype, "_hasFooter", void 0);
  exports.LaPersonList = __decorate$z([
      t('la-person-list')
  ], exports.LaPersonList);

  var __decorate$y = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaChatMessage = class LaChatMessage extends i$2 {
      constructor() {
          super(...arguments);
          /** Sender — determines layout and visual style. */
          this.sender = 'assistant';
          /**
           * Display name of the sender. When set on an assistant-side message,
           * replaces the sparkle icon with two-letter initials and shows the name
           * above the bubble. Use for human-to-human conversations.
           */
          this.name = '';
          /** Optional time string shown beneath the bubble. */
          this.timestamp = '';
          /** Full date/time shown as a tooltip on the timestamp. */
          this.timestampTitle = '';
          /**
           * Shows a blinking cursor after slot content.
           * Use while the assistant is actively generating a response.
           */
          this.streaming = false;
          /**
           * Replaces slot content with an animated three-dot indicator.
           * Use while waiting for the assistant to begin responding.
           */
          this.typing = false;
          /**
           * Send state for user messages.
           * - `sent`    — default, no extra treatment
           * - `sending` — optimistic; timestamp reads "Sending…" in italic
           * - `failed`  — shows "Couldn't send · Retry" below the bubble;
           *               dispatches `la-retry` (bubbles, composed) on click
           */
          this.status = 'sent';
          this._hasAttachments = false;
      }
      firstUpdated() {
          const slot = this.shadowRoot?.querySelector('slot[name="attachments"]');
          if (slot) {
              const sync = () => { this._hasAttachments = slot.assignedElements().length > 0; };
              slot.addEventListener('slotchange', sync);
              sync();
          }
      }
      _onRetry() {
          this.dispatchEvent(new CustomEvent('la-retry', { bubbles: true, composed: true }));
      }
      _initials(name) {
          const parts = name.trim().split(/\s+/);
          if (parts.length >= 2)
              return (parts[0][0] + parts[1][0]).toUpperCase();
          return name.slice(0, 2).toUpperCase();
      }
      render() {
          const showName = !!this.name && this.sender !== 'user';
          return b `
      ${iconStyles}
      <div class="message ${showName ? 'message--has-name' : ''}">
        ${this.sender === 'assistant'
            ? b `
            <div class="indicator" aria-hidden="true">
              ${this.name
                ? b `<span class="indicator-initials">${this._initials(this.name)}</span>`
                : b `<i class="ph-fill ph-sparkle" style="font-size:11px;"></i>`}
            </div>
          `
            : A}
        <div class="content">
          ${showName
            ? b `
              <div class="meta-row">
                <div class="sender-name">${this.name}</div>
                ${this.timestamp ? b `<la-tooltip tip=${this.timestampTitle || this.timestamp} position="bottom" appearance="light" size="sm"><div class="timestamp">${this.timestamp}</div></la-tooltip>` : A}
              </div>
            `
            : A}
          ${this.typing
            ? b `
              <div class="typing" role="status" aria-label="Thinking…">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            `
            : b `
              <div class="bubble">
                <slot></slot>${this.streaming
                ? b `<span class="cursor" aria-hidden="true"></span>`
                : A}
              </div>
            `}
          ${this._hasAttachments
            ? b `<div class="attachments"><slot name="attachments"></slot></div>`
            : b `<slot name="attachments"></slot>`}
          ${this.sender === 'user' && this.status === 'failed'
            ? b `
              <div class="retry-row">
                <span class="retry-label">Couldn't send</span>
                <span class="retry-sep" aria-hidden="true">·</span>
                <button class="retry-btn" @click=${this._onRetry}>Retry</button>
              </div>
            `
            : this.sender === 'user' && this.status === 'sending'
                ? b `<div class="timestamp timestamp--sending">Sending…</div>`
                : !showName && this.timestamp
                    ? b `<la-tooltip tip=${this.timestampTitle || this.timestamp} position="bottom" appearance="light" size="sm"><div class="timestamp">${this.timestamp}</div></la-tooltip>`
                    : A}
        </div>
      </div>
    `;
      }
  };
  exports.LaChatMessage.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      .message {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-sm);
      }

      /* User — right-aligned */
      :host([sender='user']) .message {
        flex-direction: row-reverse;
      }

      /* Assistant indicator circle */
      .indicator {
        width: 24px;
        height: 24px;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg-muted);
        border: 1px solid var(--la-color-border-light);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2px;
        color: var(--la-color-text-muted);
      }


      :host([sender='user']) .indicator {
        display: none;
      }

      /* Content column */
      .content {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xs);
        min-width: 0;
      }

      :host([sender='user']) .content {
        align-items: flex-end;
        max-width: 72%;
      }

      :host([sender='assistant']) .content {
        max-width: 72%;
      }

      :host([sender='assistant']) .bubble {
        margin-left: 2px;
      }

      /* Bubble */
      .bubble {
        font-size: var(--la-font-size-base);
        line-height: 1.65;
        word-break: break-word;
        color: var(--la-color-text);
      }

      :host([sender='user']) .bubble {
        background: var(--la-color-bg-muted);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-xl);
      }

      /* Typing indicator — three animated dots */
      .typing {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: var(--la-space-sm) var(--la-space-md);
        background: var(--la-color-bg-subtle);
        border-radius: var(--la-radius-xl);
        width: fit-content;
      }

      .typing-dot {
        width: 5px;
        height: 5px;
        background: var(--la-color-text-muted);
        border-radius: var(--la-radius-circle);
        flex-shrink: 0;
        opacity: 0.4;
        animation: typing-bounce 1.2s var(--ease) infinite;
      }

      .typing-dot:nth-child(2) { animation-delay: 0.15s; }
      .typing-dot:nth-child(3) { animation-delay: 0.3s; }

      @keyframes typing-bounce {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
        30% { transform: translateY(-4px); opacity: 1; }
      }

      /* Streaming cursor — blinking beam after last character */
      .cursor {
        display: inline-block;
        width: 2px;
        height: 1.05em;
        background: var(--la-color-text-muted);
        margin-left: 1px;
        vertical-align: text-bottom;
        border-radius: 1px;
        animation: cursor-blink 900ms step-end infinite;
      }

      @keyframes cursor-blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }

      @media (prefers-reduced-motion: reduce) {
        .typing-dot { animation: none; opacity: 1; }
        .cursor     { animation: none; }
      }

      /* Meta row — name + timestamp on one line for named contacts */
      .meta-row {
        display: flex;
        align-items: baseline;
        gap: var(--la-space-sm);
      }

      /* Sender name — shown above bubble for named contacts */
      .sender-name {
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text-muted);
        padding: 0 2px;
      }

      /* Initials inside indicator circle for human contacts */
      .indicator-initials {
        font-size: 9px;
        font-weight: var(--la-font-weight-semibold);
        letter-spacing: -0.2px;
        line-height: 1;
      }

      /* Attachments — below the bubble, only rendered when slot has content */
      .attachments {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
        /* Constrain to same width as bubble so cards don't float wider */
        width: 100%;
      }

      /* Timestamp */
      .timestamp {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-faint);
        padding: 0 2px;
      }

      .timestamp--sending {
        font-style: italic;
      }

      /* Failed state — "Couldn't send · Retry" */
      .retry-row {
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-xs);
        padding: 0 2px;
        font-size: var(--la-font-size-xs);
      }

      .retry-label {
        color: var(--la-color-danger-text);
      }

      .retry-sep {
        color: var(--la-color-text-faint);
      }

      .retry-btn {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      .retry-btn:hover {
        color: var(--la-color-primary);
      }
    `,
  ];
  __decorate$y([
      n({ reflect: true })
  ], exports.LaChatMessage.prototype, "sender", void 0);
  __decorate$y([
      n()
  ], exports.LaChatMessage.prototype, "name", void 0);
  __decorate$y([
      n()
  ], exports.LaChatMessage.prototype, "timestamp", void 0);
  __decorate$y([
      n({ attribute: 'timestamp-title' })
  ], exports.LaChatMessage.prototype, "timestampTitle", void 0);
  __decorate$y([
      n({ type: Boolean, reflect: true })
  ], exports.LaChatMessage.prototype, "streaming", void 0);
  __decorate$y([
      n({ type: Boolean, reflect: true })
  ], exports.LaChatMessage.prototype, "typing", void 0);
  __decorate$y([
      n({ reflect: true })
  ], exports.LaChatMessage.prototype, "status", void 0);
  __decorate$y([
      r()
  ], exports.LaChatMessage.prototype, "_hasAttachments", void 0);
  exports.LaChatMessage = __decorate$y([
      t('la-chat-message')
  ], exports.LaChatMessage);

  var __decorate$x = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-chat-attachment-chip — staged attachment chip for the compose bar.
   *
   * The compose-state counterpart to la-chat-attachment (thread/read state).
   * Renders as a pill with a file icon, truncated document name, and a remove
   * button. Fires `la-remove` when dismissed.
   *
   * Usage:
   *   <la-chat-attachment-chip name="Cap Table (as of Jan 2026)" category="Fundraising">
   *   </la-chat-attachment-chip>
   */
  exports.LaChatAttachmentChip = class LaChatAttachmentChip extends i$2 {
      constructor() {
          super(...arguments);
          /** Document name displayed in the chip. Truncated with ellipsis if it overflows. */
          this.name = '';
          /** Optional category label (e.g. "Fundraising"). Not displayed in the chip itself
           *  but available as metadata for the host to read when handling la-remove. */
          this.category = '';
      }
      _handleRemove(e) {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('la-remove', {
              detail: { name: this.name, category: this.category },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          return b `
      ${iconStyles}
      <div class="card">
        <div class="icon-wrap">
          <i class="ph ph-file-text"></i>
        </div>
        <div class="meta">
          <span class="name" title=${this.name}>${this.name}</span>
          ${this.category
            ? b `<span class="category">${this.category}</span>`
            : A}
        </div>
        <la-icon-button
          size="sm"
          label="Remove ${this.name}"
          @click=${this._handleRemove}
        ><i class="ph ph-x"></i></la-icon-button>
      </div>
    `;
      }
  };
  exports.LaChatAttachmentChip.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-block;
        max-width: 260px;
      }

      .card {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        padding: 8px;
        background: var(--la-color-bg-muted);
        border-radius: var(--la-radius-lg);
        min-width: 0;
        max-width: 100%;
      }

      /* Icon square — concentric: card is bg-subtle, icon steps to bg-muted */
      .icon-wrap {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-xl);
        color: var(--la-color-text-muted);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-sm);
        box-shadow: var(--la-shadow-xs);
      }

      .meta {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .name {
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.3;
      }

      .category {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-faint);
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

    `,
  ];
  __decorate$x([
      n()
  ], exports.LaChatAttachmentChip.prototype, "name", void 0);
  __decorate$x([
      n()
  ], exports.LaChatAttachmentChip.prototype, "category", void 0);
  exports.LaChatAttachmentChip = __decorate$x([
      t('la-chat-attachment-chip')
  ], exports.LaChatAttachmentChip);

  var __decorate$w = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaChatInput = class LaChatInput extends i$2 {
      constructor() {
          super(...arguments);
          /** Placeholder text for the textarea. */
          this.placeholder = 'Ask a question…';
          /**
           * Disables the input and send button entirely.
           * Distinct from `loading` — use `disabled` when the feature is unavailable,
           * `loading` when waiting for a response.
           */
          this.disabled = false;
          /**
           * Shows a spinner in place of the send button.
           * Use while the assistant is generating a response.
           * Textarea is disabled during loading.
           */
          this.loading = false;
          /** Optional helper text shown below the input shell. */
          this.hint = '';
          /**
           * Staged attachments shown as chips above the textarea.
           * Each entry needs a unique `id` (for removal) and a display `name`.
           * Attachments are included in the `la-submit` payload.
           * The component dispatches `la-attach` when the attach button is clicked
           * so the page can open its own picker; it dispatches `la-file-remove`
           * with `{id}` when the user removes a chip.
           */
          this.files = [];
          /** Maximum number of staged attachments. Attach button is disabled once reached. */
          this.maxFiles = 5;
          /**
           * Visual and behavioural variant.
           * - `default` — full compose with attach button (standard founder surface)
           * - `text-only` — hides the attach button; use for investor-side reply surfaces
           */
          this.variant = 'default';
          this._value = '';
      }
      _onAttach() {
          this.dispatchEvent(new CustomEvent('la-attach', { bubbles: true, composed: true }));
      }
      _onFileRemove(id) {
          this.dispatchEvent(new CustomEvent('la-file-remove', { detail: { id }, bubbles: true, composed: true }));
      }
      _onInput() {
          const ta = this._textarea;
          this._value = ta.value;
          // Auto-grow: reset then expand to scrollHeight
          ta.style.height = 'auto';
          ta.style.height = `${ta.scrollHeight}px`;
      }
      _onKeydown(e) {
          if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              this._submit();
          }
      }
      _submit() {
          const ta = this._textarea;
          const value = (ta?.value ?? '').trim();
          if (!value || this.disabled || this.loading)
              return;
          this.dispatchEvent(new CustomEvent('la-submit', {
              detail: { value, files: this.files },
              bubbles: true,
              composed: true,
          }));
          // Reset after dispatch so handlers can read the value first
          this._value = '';
          if (ta) {
              ta.value = '';
              ta.style.height = 'auto';
          }
      }
      render() {
          const canSend = !!this._value.trim() && !this.disabled && !this.loading;
          const atMax = this.files.length >= this.maxFiles;
          const attachTip = atMax ? `Max ${this.maxFiles} files` : 'Add file';
          return b `
      ${iconStyles}
      <div>
        <div class="shell">
          ${this.files.length > 0
            ? b `
              <div class="chip-strip">
                ${this.files.map((f) => b `
                  <la-chat-attachment-chip
                    .name=${f.name}
                    @la-remove=${() => this._onFileRemove(f.id)}
                  ></la-chat-attachment-chip>
                `)}
              </div>
            `
            : A}
          <div class="input-row">
            ${this.variant === 'text-only' ? A : b `<la-tooltip .tip=${attachTip} position="top" size="sm">
              <la-icon-button
                size="sm"
                label=${attachTip}
                ?disabled=${this.disabled || this.loading || atMax}
                @click=${this._onAttach}
              >
                <i class="ph ph-plus"></i>
              </la-icon-button>
            </la-tooltip>`}
            <textarea
              placeholder=${this.placeholder}
              ?disabled=${this.disabled || this.loading}
              rows="1"
              aria-label="Chat input"
              @input=${this._onInput}
              @keydown=${this._onKeydown}
            ></textarea>
            <div class="actions">
              ${this.loading
            ? b `
                  <div class="loading-indicator" role="status" aria-label="Waiting for response…">
                    <la-spinner size="sm"></la-spinner>
                  </div>
                `
            : b `
                  <la-icon-button
                    variant="primary"
                    label="Send"
                    ?disabled=${!canSend}
                    @click=${this._submit}
                  >
                    <i class="ph ph-arrow-up"></i>
                  </la-icon-button>
                `}
            </div>
          </div>
        </div>
        ${this.hint
            ? b `<div class="hint">${this.hint}</div>`
            : A}
      </div>
    `;
      }
  };
  exports.LaChatInput.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      .shell {
        display: flex;
        flex-direction: column;
        background: var(--la-color-bg);
        border: 1px solid var(--la-color-border-light);
        border-radius: var(--la-radius-xl2);
        box-shadow: var(--la-shadow-xs);
        transition: border-color var(--dur-fast) var(--ease);
      }

      .shell:focus-within {
        border-color: var(--la-color-border-focus);
        box-shadow: var(--la-shadow-xs), var(--la-input-shadow-focus);
      }

      :host([disabled]) .shell,
      :host([loading]) .shell {
        background: var(--la-color-bg-subtle);
      }

      /* Staged attachment chips — single scrolling row.
         border-radius + overflow:hidden creates a rounded clip matching the shell's
         top corners; overflow-x:auto then restores horizontal scroll. */
      .chip-strip {
        display: flex;
        flex-wrap: nowrap;
        gap: var(--la-space-xs);
        padding: var(--la-space-sm) var(--la-space-sm) 0;
        border-radius: var(--la-radius-xl2) var(--la-radius-xl2) 0 0;
        overflow: hidden;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .chip-strip::-webkit-scrollbar { display: none; }

      /* Attach · textarea · send — symmetric padding, centred vertically */
      .input-row {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        padding: var(--la-space-sm);
      }

      textarea {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        resize: none;
        background: transparent;
        font-family: var(--la-font-family);
        font-size: var(--la-font-size-base);
        line-height: 1.6;
        color: var(--la-color-text);
        padding: 0;
        max-height: 180px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--la-color-border-light) transparent;
      }

      textarea::placeholder {
        color: var(--la-color-text-faint);
      }

      textarea:disabled {
        color: var(--la-color-text-disabled);
        cursor: not-allowed;
      }

      .actions {
        flex-shrink: 0;
        display: flex;
        align-items: center;
      }

      .loading-indicator {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hint {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-faint);
        padding: var(--la-space-xs) var(--la-space-sm) 0;
      }

      :host([variant='text-only']) .input-row {
        padding-left: var(--la-space-lg);
      }
    `,
  ];
  __decorate$w([
      n()
  ], exports.LaChatInput.prototype, "placeholder", void 0);
  __decorate$w([
      n({ type: Boolean, reflect: true })
  ], exports.LaChatInput.prototype, "disabled", void 0);
  __decorate$w([
      n({ type: Boolean, reflect: true })
  ], exports.LaChatInput.prototype, "loading", void 0);
  __decorate$w([
      n()
  ], exports.LaChatInput.prototype, "hint", void 0);
  __decorate$w([
      n({ type: Array })
  ], exports.LaChatInput.prototype, "files", void 0);
  __decorate$w([
      n({ type: Number, attribute: 'max-files' })
  ], exports.LaChatInput.prototype, "maxFiles", void 0);
  __decorate$w([
      n({ reflect: true })
  ], exports.LaChatInput.prototype, "variant", void 0);
  __decorate$w([
      r()
  ], exports.LaChatInput.prototype, "_value", void 0);
  __decorate$w([
      e$1('textarea')
  ], exports.LaChatInput.prototype, "_textarea", void 0);
  exports.LaChatInput = __decorate$w([
      t('la-chat-input')
  ], exports.LaChatInput);

  var __decorate$v = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaChatAttachment = class LaChatAttachment extends i$2 {
      constructor() {
          super(...arguments);
          /** Document title. */
          this.name = '';
          /** Optional category label — e.g. "Fundraising", "Governance". */
          this.category = '';
          /**
           * Optional secondary label — typically the entity the document belongs to.
           * Mirrors the `association` field on la-document-item.
           */
          this.association = '';
          /**
           * Processing state. Mirrors la-document-item status vocabulary.
           * - `none` — no badge
           * - `ready` — green check-circle badge
           * - `processing` — spinner in place of file icon
           * - `failed` — red x-circle badge
           */
          this.status = 'none';
          /**
           * When set, the card renders as an <a> that opens in a new tab.
           * A right-chevron is shown to signal navigability.
           */
          this.href = '';
          /**
           * When set, shows a remove (×) button and dispatches `la-remove`
           * (bubbles, composed) on click. Use in compose-area chip strips
           * where the user can de-stage an attachment before sending.
           */
          this.removable = false;
      }
      _onRemove(e) {
          e.preventDefault();
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('la-remove', { bubbles: true, composed: true }));
      }
      _subLabel() {
          return [this.category, this.association].filter(Boolean).join(' · ');
      }
      _renderIcon() {
          if (this.status === 'processing') {
              return b `<la-spinner size="sm" label="Processing"></la-spinner>`;
          }
          return b `
      <i class="ph ph-file-text" aria-hidden="true"></i>
      ${this.status === 'ready'
            ? b `<span class="status-badge ready" role="img" aria-label="Ready">
            <i class="ph-fill ph-check-circle"></i>
          </span>`
            : A}
      ${this.status === 'failed'
            ? b `<span class="status-badge failed" role="img" aria-label="Failed">
            <i class="ph-fill ph-x-circle"></i>
          </span>`
            : A}
    `;
      }
      _renderContent(isLink) {
          const sub = this._subLabel();
          return b `
      <div class="icon-wrap">${this._renderIcon()}</div>
      <div class="content">
        <div class="doc-name" title=${this.name}>${this.name}</div>
        ${sub ? b `<div class="doc-sub">${sub}</div>` : A}
      </div>
      ${isLink
            ? b `<span class="chevron" aria-hidden="true"><i class="ph ph-arrow-right"></i></span>`
            : A}
      ${this.removable
            ? b `<button class="remove-btn" aria-label="Remove attachment" @click=${this._onRemove}>
            <i class="ph ph-x"></i>
          </button>`
            : A}
    `;
      }
      render() {
          const isLink = !!this.href;
          return b `
      ${iconStyles}
      ${isLink
            ? b `<a
            class="card is-navigable"
            href=${this.href}
            target="_blank"
            rel="noopener noreferrer"
          >${this._renderContent(true)}</a>`
            : b `<div class="card">${this._renderContent(false)}</div>`}
    `;
      }
  };
  exports.LaChatAttachment.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /* Shared card surface */
      .card {
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) var(--la-space-md);
        background: var(--la-color-bg);
        border: 1px solid var(--la-color-border-light);
        border-radius: var(--la-radius-lg);
        color: inherit;
        text-decoration: none;
        /* button reset */
        appearance: none;
        -webkit-appearance: none;
        font: inherit;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        cursor: default;
        transition: background var(--dur-fast) var(--ease);
      }

      .card.is-navigable {
        cursor: pointer;
      }

      .card.is-navigable:hover {
        background: var(--la-color-bg-subtle);
      }

      .card:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: 2px;
      }

      /* Icon container */
      .icon-wrap {
        position: relative;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-xl);
        color: var(--la-color-text-muted);
        background: var(--la-color-bg-subtle);
        border-radius: var(--la-radius-sm);
      }

      .status-badge {
        position: absolute;
        bottom: -3px;
        right: -3px;
        font-size: var(--la-font-size-base);
        line-height: 1;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg);
        box-shadow: 0 0 0 1.5px var(--la-color-bg);
      }

      .status-badge.ready  { color: var(--la-color-resolved); }
      .status-badge.failed { color: var(--la-color-urgent); }

      /* Text content */
      .content {
        flex: 1;
        min-width: 0;
      }

      .doc-name {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .doc-sub {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Navigation chevron — shown when href is set */
      .chevron {
        flex-shrink: 0;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-faint);
        display: flex;
        align-items: center;
      }

      /* Remove button — shown when removable is set (compose staging) */
      .remove-btn {
        flex-shrink: 0;
        background: none;
        border: none;
        padding: var(--la-space-xs);
        cursor: pointer;
        color: var(--la-color-text-muted);
        display: flex;
        align-items: center;
        border-radius: var(--la-radius-sm);
        font-size: var(--la-font-size-base);
        line-height: 1;
        transition: color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease);
      }

      .remove-btn:hover {
        color: var(--la-color-text);
        background: var(--la-color-bg-active);
      }
    `,
  ];
  __decorate$v([
      n()
  ], exports.LaChatAttachment.prototype, "name", void 0);
  __decorate$v([
      n()
  ], exports.LaChatAttachment.prototype, "category", void 0);
  __decorate$v([
      n()
  ], exports.LaChatAttachment.prototype, "association", void 0);
  __decorate$v([
      n({ reflect: true })
  ], exports.LaChatAttachment.prototype, "status", void 0);
  __decorate$v([
      n()
  ], exports.LaChatAttachment.prototype, "href", void 0);
  __decorate$v([
      n({ type: Boolean, reflect: true })
  ], exports.LaChatAttachment.prototype, "removable", void 0);
  exports.LaChatAttachment = __decorate$v([
      t('la-chat-attachment')
  ], exports.LaChatAttachment);

  var __decorate$u = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaChat = class LaChat extends i$2 {
      constructor() {
          super(...arguments);
          /** Message thread. Each object maps to one `la-chat-message`. */
          this.messages = [];
          /** Placeholder text forwarded to `la-chat-input`. */
          this.placeholder = 'Type a message…';
          /** Disables the compose input — e.g. feature not yet available. */
          this.disabled = false;
          /**
           * Hides the compose input and shows a notice in its place.
           * Use for revoked-access or pre-share states. Supply notice
           * copy via `slot="notice"` or the `notice` property.
           */
          this.readonly = false;
          /** Fallback notice text when `readonly` is set and `slot="notice"` is empty. */
          this.notice = 'This thread is read-only.';
          /** Shown while a message send is in flight — forwarded to `la-chat-input`. */
          this.loading = false;
          /** Helper text forwarded to `la-chat-input`. */
          this.hint = '';
          /** Copy shown in the thread when `messages` is empty. Override with `slot="empty"`. */
          this.emptyMessage = 'No messages yet.';
      }
      updated(changed) {
          if (changed.has('messages')) {
              this._scrollToBottom();
          }
      }
      _scrollToBottom() {
          if (!this._thread)
              return;
          requestAnimationFrame(() => {
              this._thread.scrollTop = this._thread.scrollHeight;
          });
      }
      _onSubmit(e) {
          this.dispatchEvent(new CustomEvent('la-send', {
              detail: e.detail,
              bubbles: true,
              composed: true,
          }));
      }
      _onAttach() {
          this.dispatchEvent(new CustomEvent('la-attach', { bubbles: true, composed: true }));
      }
      _onRetry(e, msg) {
          this.dispatchEvent(new CustomEvent('la-retry', {
              detail: { message: msg },
              bubbles: true,
              composed: true,
          }));
          e.stopPropagation();
      }
      _renderMessage(msg) {
          return b `
      <la-chat-message
        sender=${msg.sender}
        .name=${msg.name ?? ''}
        .timestamp=${msg.timestamp ?? ''}
        ?typing=${msg.typing ?? false}
        ?streaming=${msg.streaming ?? false}
        .status=${msg.status ?? 'sent'}
        @la-retry=${(e) => this._onRetry(e, msg)}
      >
        ${msg.text ?? A}
        ${msg.attachments?.map(att => b `
            <la-chat-attachment
              slot="attachments"
              .name=${att.name}
              .category=${att.category ?? ''}
              .association=${att.association ?? ''}
              .status=${att.status ?? 'none'}
              .href=${att.href ?? ''}
            ></la-chat-attachment>
          `)}
      </la-chat-message>
    `;
      }
      render() {
          const hasMessages = this.messages.length > 0;
          return b `
      ${iconStyles}

      <div class="thread" part="thread" role="log" aria-label="Conversation">
        ${hasMessages
            ? this.messages.map(msg => this._renderMessage(msg))
            : b `
              <div class="empty" part="empty">
                <slot name="empty">
                  <p class="empty-text">${this.emptyMessage}</p>
                </slot>
              </div>
            `}
      </div>

      <div class="footer" part="footer">
        <slot name="footer-before"></slot>

        ${this.readonly
            ? b `
              <div class="readonly-notice" part="readonly-notice">
                <slot name="notice">
                  <i class="ph ph-lock-simple" aria-hidden="true"></i>
                  <span>${this.notice}</span>
                </slot>
              </div>
            `
            : b `
              <la-chat-input
                .placeholder=${this.placeholder}
                ?disabled=${this.disabled}
                ?loading=${this.loading}
                .hint=${this.hint}
                @la-submit=${this._onSubmit}
                @la-attach=${this._onAttach}
              ></la-chat-input>
            `}
      </div>
    `;
      }
  };
  exports.LaChat.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        background: var(--la-color-bg);
        overflow: hidden;
      }

      /* ── Thread ──────────────────────────────────────────────── */
      .thread {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        padding: var(--la-space-xl) var(--la-space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--la-space-lg);
        scrollbar-width: thin;
        scrollbar-color: var(--la-color-border-light) transparent;
      }

      /* ── Empty state ─────────────────────────────────────────── */
      .empty {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--la-space-2xl) var(--la-space-xl);
        text-align: center;
      }
      .empty-text {
        color: var(--la-color-text-faint);
        font-size: var(--la-font-size-sm);
        line-height: 1.6;
        max-width: 280px;
      }

      /* ── Footer ──────────────────────────────────────────────── */
      .footer {
        flex-shrink: 0;
        padding: var(--la-space-md) var(--la-space-lg) var(--la-space-lg);
        background: var(--la-color-bg);
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
      }

      /* ── Read-only notice ────────────────────────────────────── */
      .readonly-notice {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--la-space-sm);
        padding: var(--la-space-sm) var(--la-space-md);
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-sm);
        line-height: 1.5;
        text-align: center;
      }
      .readonly-notice i {
        flex-shrink: 0;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-faint);
      }

      la-chat-input {
        display: block;
      }
    `,
  ];
  __decorate$u([
      n({ type: Array })
  ], exports.LaChat.prototype, "messages", void 0);
  __decorate$u([
      n()
  ], exports.LaChat.prototype, "placeholder", void 0);
  __decorate$u([
      n({ type: Boolean, reflect: true })
  ], exports.LaChat.prototype, "disabled", void 0);
  __decorate$u([
      n({ type: Boolean, reflect: true })
  ], exports.LaChat.prototype, "readonly", void 0);
  __decorate$u([
      n()
  ], exports.LaChat.prototype, "notice", void 0);
  __decorate$u([
      n({ type: Boolean, reflect: true })
  ], exports.LaChat.prototype, "loading", void 0);
  __decorate$u([
      n()
  ], exports.LaChat.prototype, "hint", void 0);
  __decorate$u([
      n({ attribute: 'empty-message' })
  ], exports.LaChat.prototype, "emptyMessage", void 0);
  __decorate$u([
      e$1('.thread')
  ], exports.LaChat.prototype, "_thread", void 0);
  exports.LaChat = __decorate$u([
      t('la-chat')
  ], exports.LaChat);

  var __decorate$t = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  const NAV_ITEMS = [
      {
          id: 'dashboard',
          label: 'Dashboard',
          icon: 'ph-squares-four',
          route: '/dashboard',
      },
      {
          id: 'governance',
          label: 'Governance',
          icon: 'ph-buildings',
          route: '/legal-areas/governance',
          subtabs: [
              { id: 'company-manual', label: 'Company Manual', route: '/legal-areas/governance/company-manual' },
          ],
      },
      {
          id: 'employment',
          label: 'Employment',
          icon: 'ph-users',
          route: '/legal-areas/employment',
          subtabs: [
              { id: 'people', label: 'People', route: '/legal-areas/employment/people' },
          ],
      },
      {
          id: 'fundraising',
          label: 'Fundraising',
          icon: 'ph-trend-up',
          route: '/legal-areas/fundraising',
          subtabs: [
              { id: 'data-room', label: 'Data Room', route: '/legal-areas/fundraising/data-room' },
              { id: 'cap-table', label: 'Cap Table', route: '/legal-areas/fundraising/cap-table' },
              { id: 'investors', label: 'Investors', route: '/legal-areas/fundraising/investors' },
          ],
      },
  ];
  const STORE_KEY$1 = 'la-sidebar-collapsed';
  exports.LaSidebar = class LaSidebar extends i$2 {
      constructor() {
          super(...arguments);
          /** Currently active legal area id */
          this.activeArea = 'dashboard';
          /** Currently active sub-tab id */
          this.activeSubtab = '';
          /** Unlocked legal area ids. Dashboard is always accessible. */
          this.unlockedAreas = ['governance'];
          /** Collapsed (icon-only) mode — persisted to localStorage */
          this.collapsed = false;
          /** Path to logo mark SVG. Falls back to text mark if not set. */
          this.logoSrc = '/assets/brand/logo-mark.svg';
          /** Path to wordmark SVG. Falls back to text if not set. */
          this.wordmarkSrc = '/assets/brand/logo-wordmark.svg';
          /** User initials for avatar */
          this.userInitials = 'AC';
          /** User display name */
          this.userName = 'Alex Chen';
          /** User role / company shown below name */
          this.userRole = 'Vanta Labs · Founder';
          this._snapped = false;
          this._userMenuOpen = false;
          this._userMenuClosing = false;
          this._handleDocClick = () => {
              this._closeUserMenu();
          };
      }
      _closeUserMenu() {
          if (!this._userMenuOpen)
              return;
          this._userMenuClosing = true;
          this._userMenuOpen = false;
          document.removeEventListener('click', this._handleDocClick);
          clearTimeout(this._closeMenuTimeout);
          this._closeMenuTimeout = setTimeout(() => {
              this._userMenuClosing = false;
          }, 150);
      }
      connectedCallback() {
          super.connectedCallback();
          const saved = localStorage.getItem(STORE_KEY$1);
          if (saved === 'true')
              this.collapsed = true;
          if (saved === 'false')
              this.collapsed = false;
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('click', this._handleDocClick);
          clearTimeout(this._closeMenuTimeout);
      }
      firstUpdated() {
          // Apply snap immediately on first render if starting collapsed (no animation)
          if (this.collapsed)
              this._applySnap(true);
      }
      _isUnlocked(id) {
          return id === 'dashboard' || this.unlockedAreas.includes(id);
      }
      _isExpanded(item) {
          return this.activeArea === item.id;
      }
      _applySnap(snapped) {
          this._snapped = snapped;
      }
      _toggleCollapse() {
          this.collapsed = !this.collapsed;
          localStorage.setItem(STORE_KEY$1, String(this.collapsed));
          if (this.collapsed) {
              // Wait for label fade to finish before snapping icons to centre
              const dur = parseFloat(getComputedStyle(this).getPropertyValue('--la-dur-fast') || '150');
              setTimeout(() => this._applySnap(true), dur);
          }
          else {
              // Snap layout immediately so icons spread as sidebar widens
              this._applySnap(false);
          }
          this.dispatchEvent(new CustomEvent('la-sidebar-toggle', {
              detail: { collapsed: this.collapsed },
              bubbles: true,
              composed: true,
          }));
      }
      _handleAreaClick(item) {
          this.dispatchEvent(new CustomEvent('la-nav-change', {
              detail: { area: item.id, route: item.route },
              bubbles: true,
              composed: true,
          }));
      }
      _toggleUserMenu(e) {
          e.stopPropagation();
          if (this._userMenuOpen || this._userMenuClosing) {
              this._closeUserMenu();
          }
          else {
              clearTimeout(this._closeMenuTimeout);
              this._userMenuClosing = false;
              this._userMenuOpen = true;
              document.addEventListener('click', this._handleDocClick);
          }
      }
      _handleSubtabClick(e, subtab) {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('la-nav-change', {
              detail: { subtab: subtab.id, route: subtab.route },
              bubbles: true,
              composed: true,
          }));
      }
      _renderLogoMark() {
          return b `
      <div class="logo-mark">
        ${this.logoSrc
            ? b `<img src="${this.logoSrc}" alt="LawAdvisor">`
            : b `<div class="logo-mark-text">LA</div>`}
      </div>
    `;
      }
      _renderLogoText() {
          return b `
      <div class="logo-text">
        <div class="logo-name">
          ${this.wordmarkSrc
            ? b `<img src="${this.wordmarkSrc}" alt="LawAdvisor">`
            : 'LawAdvisor'}
        </div>
      </div>
    `;
      }
      _renderItem(item) {
          const isActive = this.activeArea === item.id;
          const isUnlocked = this._isUnlocked(item.id);
          const hasSubtabs = !!item.subtabs?.length;
          const isExpanded = this._isExpanded(item);
          const iconFill = isActive ? 'ph-fill' : 'ph';
          const hasCollapsedFlyout = this.collapsed && isUnlocked && hasSubtabs;
          return b `
      <div class="nav-group">
        <button
          type="button"
          class="nav-item ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''} ${this._snapped ? 'snapped' : ''}"
          data-nav-id="${item.id}"
          @click=${() => this._handleAreaClick(item)}
        >
          <span class="nav-icon">
            <i class="${iconFill} ${item.icon}"></i>
          </span>
          <span class="nav-label">${item.label}</span>
          ${!isUnlocked
            ? b `<i class="ph ph-lock nav-lock"></i>`
            : hasSubtabs
                ? b `<i class="ph ph-caret-down nav-caret ${isExpanded ? 'open' : ''}"></i>`
                : ''}
        </button>

        ${isUnlocked && hasSubtabs
            ? b `
              <div class="subtabs-wrap ${isExpanded ? 'open' : ''}">
                <div class="subtabs-rail">
                  <div class="subtabs-line"></div>
                  <div class="subtabs-body">
                    ${item.subtabs.map((sub) => b `
                        <button
                          type="button"
                          class="subtab ${this.activeSubtab === sub.id ? 'active' : ''}"
                          @click=${(e) => this._handleSubtabClick(e, sub)}
                        >
                          ${sub.label}
                        </button>
                      `)}
                  </div>
                </div>
              </div>
            `
            : ''}

        ${hasCollapsedFlyout
            ? b `
              <div class="collapsed-flyout" aria-label="${item.label} pages">
                <button
                  type="button"
                  class="collapsed-flyout-title ${isActive && !this.activeSubtab ? 'active' : ''}"
                  @click=${() => this._handleAreaClick(item)}
                >
                  ${item.label}
                </button>
                ${item.subtabs.map((sub) => b `
                    <button
                      type="button"
                      class="collapsed-flyout-item ${this.activeSubtab === sub.id ? 'active' : ''}"
                      @click=${(e) => this._handleSubtabClick(e, sub)}
                    >
                      ${sub.label}
                    </button>
                  `)}
              </div>
            `
            : ''}
      </div>
    `;
      }
      render() {
          return b `
      ${iconStyles}

      <div class="top-spacer"></div>

      <div class="header ${this._snapped ? 'snapped' : ''}" @click=${(e) => {
            // Clicking anywhere on the header when collapsed → expand
            if (this.collapsed) {
                e.stopPropagation();
                this._toggleCollapse();
            }
        }}>
        <div class="logo-mark-wrap">
          ${this._renderLogoMark()}
        </div>
        ${this._renderLogoText()}
        <la-icon-button
          class="collapse-btn"
          size="sm"
          label="${this.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}"
          @click=${(e) => {
            e.stopPropagation();
            this._toggleCollapse();
        }}
        ><i class="ph ph-sidebar-simple"></i></la-icon-button>
      </div>

      <nav class="nav">
        ${NAV_ITEMS.map((item) => this._renderItem(item))}
      </nav>

      <div class="footer">
        <div
          class="user-menu ${this._userMenuOpen ? 'is-open' : ''} ${this._userMenuClosing ? 'is-closing' : ''}"
          role="menu"
          aria-hidden=${String(!this._userMenuOpen && !this._userMenuClosing)}
          @click=${(e) => e.stopPropagation()}>
          <button type="button" class="user-menu-item" role="menuitem">
            <i class="ph ph-question"></i>
            Help &amp; support
          </button>
          <div class="user-menu-divider" role="separator"></div>
          <button type="button" class="user-menu-item destructive" role="menuitem"
            @click=${() => this._closeUserMenu()}>
            <i class="ph ph-sign-out"></i>
            Log out
          </button>
        </div>
        <div class="user ${this._snapped ? 'snapped' : ''}"
          role="button"
          tabindex="0"
          aria-haspopup="menu"
          aria-expanded=${String(this._userMenuOpen)}
          @click=${this._toggleUserMenu}
          @keydown=${(e) => { if (e.key === 'Enter' || e.key === ' ')
            this._toggleUserMenu(e); }}
        >
          <div class="user-avatar">${this.userInitials}</div>
          <div class="user-info">
            <div class="user-name">${this.userName}</div>
            ${this.userRole ? b `<div class="user-role">${this.userRole}</div>` : ''}
          </div>
          <i class="ph-fill ph-dots-three-outline-vertical user-menu-dots"></i>
        </div>
      </div>
    `;
      }
  };
  exports.LaSidebar.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: auto;
        width: var(--la-sidebar-width);
        min-width: var(--la-sidebar-width);
        height: 100%;
        background: var(--la-nav-bg);
        overflow: visible;
        flex-shrink: 0;
        box-sizing: border-box;
        margin-top: var(--la-sidebar-margin-top, 0px);
        transition: width var(--dur-modal) var(--ease-drawer),
                    min-width var(--dur-modal) var(--ease-drawer);
      }

      :host([collapsed]) {
        width: var(--la-sidebar-collapsed-width);
        min-width: var(--la-sidebar-collapsed-width);
      }

      :host([collapsed]):hover,
      :host([collapsed]):focus-within {
        z-index: 4;
      }

      .top-spacer {
        height: var(--la-sidebar-padding-top, 0px);
        flex-shrink: 0;
      }

      :host([collapsed]) .top-spacer {
        height: var(--la-sidebar-collapsed-padding-top, var(--la-sidebar-padding-top, 0px));
      }

      /* ── Header / Logo ─────────────────────────────────────── */

      .header {
        display: flex;
        align-items: center;
        min-height: var(--la-ph-height);
        padding: var(--la-nav-logo-padding-v) var(--la-space-md) var(--la-nav-logo-padding-v) var(--la-nav-header-padding-h, 12px);
        flex-shrink: 0;
        gap: var(--la-nav-logo-gap, 10px);
        overflow: hidden;
        position: relative;
        margin-bottom: var(--la-nav-header-gap, 0px);
      }

      :host([collapsed]) .header {
        cursor: pointer;
      }

      :host([collapsed]) .header.snapped {
        justify-content: center;
        padding: var(--la-nav-logo-padding-v) var(--la-nav-collapsed-header-padding, 16px);
      }

      .logo-mark-wrap {
        position: relative;
        display: inline-flex;
        flex-shrink: 0;
      }

      :host([collapsed]) .logo-mark-wrap {
        transform: translate(
          var(--la-nav-logo-collapsed-offset-x, 6px),
          var(--la-nav-logo-collapsed-offset-y, 3px)
        );
      }

      .logo-mark {
        width: var(--la-nav-logo-size, 22px);
        height: var(--la-nav-logo-size, 22px);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
      }

      .logo-mark img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }

      .logo-mark-text {
        width: 100%;
        height: 100%;
        background: var(--la-color-primary);
        border-radius: var(--la-radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--la-color-text-invert);
        font-size: var(--la-font-size-xs);
        font-weight: 600;
        letter-spacing: -0.3px;
        font-family: var(--la-font-family);
      }

      /* When collapsed: logo mark fades on hover, revealing expand button */
      :host([collapsed]) .header:hover .logo-mark {
        opacity: 0;
        transform: scale(0.7);
      }

      .logo-text {
        overflow: hidden;
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* Label fade: opacity + max-width for smooth width collapse.
           max-width is not GPU-composited but required for layout — no pure transform alternative. */
        opacity: 1;
        max-width: 200px;
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .logo-text {
        opacity: 0;
        max-width: 0;
      }

      .logo-name {
        font-size: var(--la-font-size-base);
        font-weight: 600;
        color: var(--la-color-text);
        white-space: nowrap;
        letter-spacing: -0.2px;
        line-height: 1.3;
      }

      .logo-name img {
        height: var(--la-nav-logo-wordmark-height, 16px);
        width: auto;
        display: block;
      }


      /* Collapse button — normal state: right side of header */
      .collapse-btn {
        flex-shrink: 0;
        margin-left: auto;
        transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
      }

      /* When collapsed: button hides, then morphs in over logo mark on hover */
      :host([collapsed]) .collapse-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.7);
        opacity: 0;
        margin: 0;
      }

      :host([collapsed]) .header:hover .collapse-btn {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      /* ── Nav ──────────────────────────────────────────────── */

      .nav {
        flex: 1;
        padding: var(--la-nav-padding-v, 8px) var(--la-nav-padding-h, 12px);
        display: flex;
        flex-direction: column;
        gap: var(--la-nav-item-gap, 3px);
        overflow-y: auto;
        overflow-x: hidden;
      }

      :host([collapsed]) .nav {
        overflow: visible;
      }

      :host([collapsed]) .header {
        margin-bottom: var(--la-nav-collapsed-header-gap, var(--la-nav-header-gap, 0px));
      }

      .nav-group {
        position: relative;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 9px;
        width: 100%;
        padding: var(--la-nav-item-padding-v, 6px) var(--la-nav-item-padding-h, 8px);
        border-radius: var(--la-nav-item-radius, var(--la-radius-md));
        cursor: pointer;
        color: var(--la-color-text-secondary);
        font-size: var(--la-font-size-base);
        font-family: var(--la-font-family);
        font-weight: 400;
        border: none;
        background: none;
        text-align: left;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        white-space: nowrap;
        user-select: none;
        text-decoration: none;
      }

      .nav-item:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: -2px;
      }

      /* Layout snap — applied with a delay on collapse (after labels fade),
         immediately on expand. Controlled by the 'snapped' class via JS. */
      :host([collapsed]) .nav-item.snapped {
        justify-content: center;
        padding: 7px;
        gap: 0;
      }

      .nav-item:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .nav-item.active:hover {
        background: var(--la-color-bg-active);
        color: var(--la-nav-active-text, var(--la-color-text));
      }

      .nav-item.active {
        background: var(--la-color-bg-active);
        color: var(--la-nav-active-text, var(--la-color-text));
        font-weight: 500;
      }

      .nav-item.active .nav-icon {
        color: var(--la-nav-active-icon, var(--la-color-text));
      }

      .nav-item.locked {
        color: var(--la-color-text-muted);
      }

      .nav-item.locked:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text-secondary);
      }

      .nav-icon {
        font-size: var(--la-nav-item-icon-size);
        flex-shrink: 0;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        position: relative;
      }

      /* Label fade — same opacity+max-width pattern as logo text */
      .nav-label {
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
        max-width: 200px;
        opacity: 1;
        /* max-width is not GPU-composited but required for layout collapse — no pure transform alternative */
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .nav-label {
        opacity: 0;
        max-width: 0;
      }

      .nav-lock {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        flex-shrink: 0;
        opacity: 1;
        max-width: 20px;
        overflow: hidden;
        /* max-width is not GPU-composited but required for layout collapse — no pure transform alternative */
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .nav-lock {
        opacity: 0;
        max-width: 0;
      }

      .nav-caret {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        flex-shrink: 0;
        /* max-width is not GPU-composited but required for layout collapse — no pure transform alternative */
        transition: transform var(--dur-fast) var(--ease),
                    opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
        max-width: 20px;
        overflow: hidden;
        opacity: 1;
      }

      .nav-caret.open {
        transform: rotate(180deg);
      }

      :host([collapsed]) .nav-caret {
        opacity: 0;
        max-width: 0;
      }

      /* ── Sub-tabs — rail line pattern ─────────────────────── */

      .subtabs-wrap {
        overflow: hidden;
        max-height: 0;
        /* max-height is not GPU-composited but required for subtab expand — no pure transform alternative */
        transition: max-height var(--dur-base) var(--ease);
      }

      .subtabs-wrap.open {
        max-height: 200px;
      }

      :host([collapsed]) .subtabs-wrap {
        display: none;
      }

      .collapsed-flyout {
        display: none;
      }

      :host([collapsed]) .collapsed-flyout {
        position: absolute;
        top: -4px;
        left: calc(100% + var(--la-space-sm));
        z-index: 30;
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 168px;
        max-width: 220px;
        padding: var(--la-space-2xs);
        border-radius: var(--la-radius-md);
        background: var(--la-color-bg);
        box-shadow: var(--la-shadow-popover);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateX(-4px) scale(0.98);
        transform-origin: left top;
        transition:
          opacity var(--dur-fast) var(--ease),
          transform var(--dur-fast) var(--ease),
          visibility var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .collapsed-flyout::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(-1 * var(--la-space-sm));
        width: var(--la-space-sm);
      }

      :host([collapsed]) .nav-group:hover .collapsed-flyout,
      :host([collapsed]) .nav-group:focus-within .collapsed-flyout {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateX(0) scale(1);
      }

      .collapsed-flyout-title,
      .collapsed-flyout-item {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 30px;
        padding: 7px 9px;
        border: none;
        border-radius: var(--la-radius-sm);
        background: transparent;
        color: var(--la-color-text-secondary);
        font-family: var(--la-font-family);
        font-size: var(--la-font-size-base);
        font-weight: 400;
        line-height: 1.2;
        text-align: left;
        white-space: nowrap;
        cursor: pointer;
      }

      .collapsed-flyout-title {
        color: var(--la-color-text);
        font-weight: 500;
      }

      .collapsed-flyout-item {
        color: var(--la-color-text-muted);
      }

      .collapsed-flyout-title:hover,
      .collapsed-flyout-item:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .collapsed-flyout-title.active,
      .collapsed-flyout-item.active {
        background: var(--la-color-bg-active);
        color: var(--la-nav-active-text, var(--la-color-text));
        font-weight: 500;
      }

      .collapsed-flyout-title:focus-visible,
      .collapsed-flyout-item:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: -2px;
      }

      .subtabs-rail {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }

      .subtabs-line {
        width: 1.5px;
        background: var(--la-color-border);
        margin-left: 18px;
        flex-shrink: 0;
        border-radius: 2px;
      }

      .subtabs-body {
        flex: 1;
        min-width: 0;
        padding: 2px 0 2px 10px;
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .subtab {
        display: flex;
        align-items: center;
        width: 100%;
        padding: var(--la-nav-sub-padding-v, var(--la-nav-item-padding-v, 6px)) var(--la-nav-sub-padding-h, 12px);
        min-height: var(--la-nav-sub-height, 26px);
        border-radius: var(--la-nav-item-radius, var(--la-radius-md));
        cursor: pointer;
        color: var(--la-color-text-muted);
        font-size: 12px;
        font-family: var(--la-font-family);
        font-weight: 400;
        border: none;
        background: none;
        text-align: left;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        white-space: nowrap;
        overflow: hidden;
        user-select: none;
      }

      .subtab:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: -2px;
      }

      .subtab:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .subtab.active {
        background: var(--la-color-bg-active);
        color: var(--la-nav-active-text, var(--la-color-text));
        font-weight: 500;
      }

      .subtab.active:hover {
        background: var(--la-color-bg-active);
        color: var(--la-nav-active-text, var(--la-color-text));
      }

      /* ── Footer / User ────────────────────────────────────── */

      .footer {
        padding: var(--la-nav-footer-padding, 6px);
        flex-shrink: 0;
        position: relative;
      }

      .user-menu {
        position: absolute;
        bottom: calc(100% + 8px);
        left: var(--la-nav-footer-padding, 6px);
        right: var(--la-nav-footer-padding, 6px);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-md);
        box-shadow: var(--la-shadow-popover);
        padding: var(--la-space-xs);
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: 1px;
        /* dropdown animation — mirrors .t-dropdown[data-origin="bottom-left"] from motion.css */
        transform-origin: bottom left;
        transform: scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-modal) var(--ease-spring-sm),
          opacity   var(--dur-modal) var(--ease-spring-sm);
        will-change: transform, opacity;
      }

      .user-menu.is-open {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
      }

      .user-menu.is-closing {
        transform: scale(0.99);
        opacity: 0;
        pointer-events: none;
        transition:
          transform var(--dur-fast) var(--ease-spring-sm),
          opacity   var(--dur-fast) var(--ease-spring-sm);
      }

      .user-menu-item {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        width: 100%;
        padding: 7px 9px;
        border: none;
        border-radius: var(--la-radius-sm);
        background: transparent;
        color: var(--la-color-text-secondary);
        font-family: var(--la-font-family);
        font-size: var(--la-font-size-base);
        font-weight: 400;
        text-align: left;
        cursor: pointer;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        white-space: nowrap;
      }

      .user-menu-item:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .user-menu-item:focus-visible {
        outline: 2px solid var(--la-color-border-focus);
        outline-offset: -2px;
      }

      .user-menu-item.destructive {
        color: var(--la-color-danger-text);
      }

      .user-menu-item.destructive:hover {
        background: var(--la-color-surface-danger);
        color: var(--la-color-danger-text);
      }

      .user-menu-divider {
        height: 1px;
        background: var(--la-color-border-light);
        margin: var(--la-space-xs) 0;
      }

      .user-menu-dots {
        flex-shrink: 0;
        color: var(--la-color-text-faint);
        font-size: var(--la-font-size-base);
        opacity: 1;
        max-width: 20px;
        overflow: hidden;
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
        display: flex;
        align-items: center;
      }

      :host([collapsed]) .user-menu-dots {
        opacity: 0;
        max-width: 0;
      }

      /* When collapsed the sidebar is too narrow to anchor right — let the
         menu grow to fit its content instead */
      :host([collapsed]) .user-menu {
        right: auto;
        min-width: 180px;
      }

      .user {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 6px 8px;
        border-radius: var(--la-radius-md);
        cursor: pointer;
        transition: background var(--dur-fast) var(--ease);
        overflow: hidden;
      }

      :host([collapsed]) .user.snapped {
        justify-content: center;
        gap: 0;
        padding: 7px;
      }

      .user:hover {
        background: var(--la-color-bg-muted);
      }

      .user-avatar {
        width: 26px;
        height: 26px;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg-muted);
        border: 1px solid var(--la-color-border);
        color: var(--la-color-text-secondary);
        font-size: var(--la-font-size-xs);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-family: var(--la-font-family);
      }

      .user-info {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        max-width: 200px;
        opacity: 1;
        /* max-width is not GPU-composited but required for layout collapse — no pure transform alternative */
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .user-info {
        opacity: 0;
        max-width: 0;
      }

      .user-name {
        font-size: var(--la-font-size-base);
        font-weight: 500;
        color: var(--la-color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.3;
      }

      .user-role {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.3;
      }

      @media (prefers-reduced-motion: reduce) {
        * { transition-duration: 0ms !important; }
      }
    `,
  ];
  __decorate$t([
      n()
  ], exports.LaSidebar.prototype, "activeArea", void 0);
  __decorate$t([
      n()
  ], exports.LaSidebar.prototype, "activeSubtab", void 0);
  __decorate$t([
      n({ type: Array })
  ], exports.LaSidebar.prototype, "unlockedAreas", void 0);
  __decorate$t([
      n({ type: Boolean, reflect: true })
  ], exports.LaSidebar.prototype, "collapsed", void 0);
  __decorate$t([
      n({ attribute: 'logo-src' })
  ], exports.LaSidebar.prototype, "logoSrc", void 0);
  __decorate$t([
      n({ attribute: 'wordmark-src' })
  ], exports.LaSidebar.prototype, "wordmarkSrc", void 0);
  __decorate$t([
      n()
  ], exports.LaSidebar.prototype, "userInitials", void 0);
  __decorate$t([
      n()
  ], exports.LaSidebar.prototype, "userName", void 0);
  __decorate$t([
      n()
  ], exports.LaSidebar.prototype, "userRole", void 0);
  __decorate$t([
      r()
  ], exports.LaSidebar.prototype, "_snapped", void 0);
  __decorate$t([
      r()
  ], exports.LaSidebar.prototype, "_userMenuOpen", void 0);
  __decorate$t([
      r()
  ], exports.LaSidebar.prototype, "_userMenuClosing", void 0);
  exports.LaSidebar = __decorate$t([
      t('la-sidebar')
  ], exports.LaSidebar);

  var __decorate$s = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  const STORE_KEY = 'la-investor-sidebar-collapsed';
  /**
   * la-investor-sidebar
   *
   * Purpose-built sidebar for the investor portal — same visual language as
   * `la-sidebar` (spacing, collapse animation, label fade) but with investor-
   * specific nav: Home + per-company pack items + sign-out.
   */
  exports.LaInvestorSidebar = class LaInvestorSidebar extends i$2 {
      constructor() {
          super(...arguments);
          this.userName = '';
          this.userInitials = '';
          this.userRole = '';
          this.logoSrc = '/assets/brand/logo-mark.svg';
          this.logoWordmarkSrc = '/assets/brand/logo-wordmark.svg';
          this.companies = [];
          this.active = 'home';
          this.collapsed = false;
          this._snapped = false;
          this._userMenuOpen = false;
          this._userMenuClosing = false;
          this._menuTimeout = 0;
          this._handleDocClick = () => this._closeUserMenu();
      }
      connectedCallback() {
          super.connectedCallback();
          const saved = localStorage.getItem(STORE_KEY);
          if (saved === 'true')
              this.collapsed = true;
          if (saved === 'false')
              this.collapsed = false;
      }
      firstUpdated() {
          if (this.collapsed)
              this._applySnap(true);
      }
      _applySnap(immediate) {
          clearTimeout(this._snapTimeout);
          if (immediate) {
              this._snapped = true;
              return;
          }
          // Snap after labels fade (dur-fast ≈ the transition duration)
          const raw = getComputedStyle(this).getPropertyValue('--dur-fast').trim();
          const ms = raw.endsWith('ms') ? parseFloat(raw) : parseFloat(raw) * 1000;
          this._snapTimeout = setTimeout(() => { this._snapped = true; }, ms || 120);
      }
      _toggleCollapse() {
          this.collapsed = !this.collapsed;
          localStorage.setItem(STORE_KEY, String(this.collapsed));
          if (this.collapsed) {
              this._applySnap(false);
          }
          else {
              clearTimeout(this._snapTimeout);
              this._snapped = false;
          }
      }
      _closeUserMenu() {
          if (!this._userMenuOpen)
              return;
          this._userMenuClosing = true;
          this._userMenuOpen = false;
          this._menuTimeout = window.setTimeout(() => { this._userMenuClosing = false; }, 200);
          document.removeEventListener('click', this._handleDocClick);
      }
      _toggleUserMenu(e) {
          e.stopPropagation();
          if (this._userMenuOpen || this._userMenuClosing) {
              this._closeUserMenu();
          }
          else {
              clearTimeout(this._menuTimeout);
              this._userMenuClosing = false;
              this._userMenuOpen = true;
              document.addEventListener('click', this._handleDocClick);
          }
      }
      _dispatch(detail) {
          this.dispatchEvent(new CustomEvent('la-nav-change', { detail, bubbles: true, composed: true }));
      }
      render() {
          const snapped = this._snapped ? 'snapped' : '';
          return b `
      ${iconStyles}

      <div class="header ${snapped}" @click=${(e) => {
            if (this.collapsed) {
                e.stopPropagation();
                this._toggleCollapse();
            }
        }}>
        <div class="logo-mark-wrap">
          <div class="logo-mark">
            ${this.logoSrc
            ? b `<img src="${this.logoSrc}" alt="LawAdvisor AI">`
            : A}
          </div>
        </div>
        <div class="logo-text">
          <div class="logo-name">
            ${this.logoWordmarkSrc
            ? b `<img src="${this.logoWordmarkSrc}" alt="LawAdvisor AI">`
            : 'LawAdvisor AI'}
          </div>
        </div>
        <la-icon-button
          class="collapse-btn"
          size="sm"
          label="${this.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}"
          @click=${(e) => { e.stopPropagation(); this._toggleCollapse(); }}
        ><i class="ph ph-sidebar-simple"></i></la-icon-button>
      </div>

      <nav class="nav">
        <div class="nav-group-home">
          <button
            type="button"
            class="nav-item ${this.active === 'home' ? 'is-active' : ''} ${snapped}"
            @click=${() => this._dispatch({ area: 'home' })}
          >
            <span class="nav-icon"><i class="${this.active === 'home' ? 'ph-fill ph-house' : 'ph ph-house'}"></i></span>
            <span class="nav-label">Home</span>
          </button>
          ${this.collapsed && this.companies.filter(c => !c.revoked).length > 0 ? b `
            <div class="home-flyout">
              <div class="home-flyout-title">Due diligence packs</div>
              ${this.companies.filter(c => !c.revoked).slice(0, 5).map(co => b `
                <button
                  type="button"
                  class="home-flyout-item"
                  @click=${() => this._dispatch({ area: 'company', companyId: co.id })}
                >
                  <i class="${this.active === co.id ? 'ph-fill ph-folder-open' : 'ph ph-folder'}"></i>
                  ${co.name}
                </button>
              `)}
            </div>
          ` : A}
        </div>

        ${this.active && this.active !== 'home' ? b `
          ${this.companies.filter(co => co.id === this.active).map(co => b `
            <la-tooltip
              .tip=${this.collapsed ? co.name : ''}
              position="right"
              appearance="light"
              size="sm"
            >
              <button
                type="button"
                class="nav-item is-active ${snapped}"
                @click=${() => this._dispatch({ area: 'company', companyId: co.id })}
              >
                <span class="nav-icon"><i class="ph-fill ph-folder-open"></i></span>
                <span class="nav-label">${co.name}</span>
              </button>
            </la-tooltip>
          `)}
        ` : A}
      </nav>

      <div class="footer">
        <div
          class="user-menu ${this._userMenuOpen ? 'is-open' : ''} ${this._userMenuClosing ? 'is-closing' : ''}"
          @click=${(e) => e.stopPropagation()}
        >
          <button
            type="button"
            class="user-menu-item destructive"
            @click=${() => {
            this._closeUserMenu();
            this.dispatchEvent(new CustomEvent('la-sign-out', { bubbles: true, composed: true }));
        }}
          >
            <i class="ph ph-sign-out"></i>Sign out
          </button>
        </div>
        <div
          class="user ${snapped}"
          role="button"
          tabindex="0"
          @click=${this._toggleUserMenu}
          @keydown=${(e) => { if (e.key === 'Enter' || e.key === ' ')
            this._toggleUserMenu(e); }}
        >
          <div class="user-avatar">${this.userInitials || this.userName.slice(0, 2).toUpperCase()}</div>
          <div class="user-info">
            <div class="user-name">${this.userName}</div>
            ${this.userRole ? b `<div class="user-role">${this.userRole}</div>` : A}
          </div>
          <i class="ph-fill ph-dots-three-outline-vertical user-menu-dots"></i>
        </div>
      </div>
    `;
      }
  };
  exports.LaInvestorSidebar.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: auto;
        width: var(--la-sidebar-width);
        min-width: var(--la-sidebar-width);
        height: 100%;
        background: var(--la-nav-bg);
        overflow: visible;
        flex-shrink: 0;
        transition: width var(--dur-modal) var(--ease-drawer),
                    min-width var(--dur-modal) var(--ease-drawer);
      }

      :host([collapsed]) {
        width: var(--la-sidebar-collapsed-width);
        min-width: var(--la-sidebar-collapsed-width);
      }

      /* ── Header / Logo ─────────────────────────────────────── */
      .header {
        display: flex;
        align-items: center;
        min-height: var(--la-ph-height);
        padding: calc(var(--la-nav-logo-padding-v) + var(--la-space-sm)) var(--la-space-md)
                 var(--la-nav-logo-padding-v) var(--la-nav-header-padding-h, 12px);
        flex-shrink: 0;
        gap: var(--la-nav-logo-gap, 10px);
        overflow: hidden;
        position: relative;
        margin-bottom: var(--la-nav-header-gap, 0px);
      }

      :host([collapsed]) .header { cursor: pointer; }

      :host([collapsed]) .header.snapped {
        justify-content: center;
        padding: var(--la-nav-logo-padding-v) var(--la-nav-collapsed-header-padding, 16px);
      }

      .logo-mark-wrap { position: relative; display: inline-flex; flex-shrink: 0; }
      :host([collapsed]) .logo-mark-wrap {
        transform: translate(
          var(--la-nav-logo-collapsed-offset-x, 6px),
          var(--la-nav-logo-collapsed-offset-y, 3px)
        );
      }

      .logo-mark {
        width: var(--la-nav-logo-size, 22px);
        height: var(--la-nav-logo-size, 22px);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
      }
      .logo-mark img { width: 100%; height: 100%; object-fit: contain; display: block; }
      :host([collapsed]) .header:hover .logo-mark { opacity: 0; transform: scale(0.7); }

      .logo-text {
        overflow: hidden;
        flex: 1;
        min-width: 0;
        opacity: 1;
        max-width: 200px;
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .logo-text { opacity: 0; max-width: 0; }

      .logo-name {
        font-size: var(--la-font-size-base);
        font-weight: 600;
        color: var(--la-color-text);
        white-space: nowrap;
        letter-spacing: -0.2px;
        line-height: 1.3;
      }
      .logo-name img { height: var(--la-nav-logo-wordmark-height, 16px); width: auto; display: block; }

      .collapse-btn {
        flex-shrink: 0;
        margin-left: auto;
        transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .collapse-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.7);
        opacity: 0;
        margin: 0;
      }
      :host([collapsed]) .header:hover .collapse-btn {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      /* ── Nav ───────────────────────────────────────────────── */
      .nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--la-nav-item-gap, 3px);
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 8px;
        padding: var(--la-space-xs) var(--la-nav-padding-h, 12px);
        scrollbar-width: none;
      }
      .nav::-webkit-scrollbar { display: none; }
      :host([collapsed]) .nav { overflow: visible; }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: var(--la-nav-item-padding-v, 6px) var(--la-nav-item-padding-h, 8px);
        width: 100%;
        border: none;
        border-radius: var(--la-nav-item-radius, var(--la-radius-md));
        background: none;
        text-align: left;
        cursor: pointer;
        color: var(--la-color-text-secondary);
        font-family: var(--la-font-family);
        font-size: var(--la-font-size-base);
        font-weight: 400;
        white-space: nowrap;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .nav-item.snapped {
        justify-content: center;
        padding: 7px;
        gap: 0;
      }

      .nav-item:hover { background: var(--la-color-bg-muted); color: var(--la-color-text); }
      .nav-item.is-active { background: var(--la-color-bg-active); color: var(--la-color-text); font-weight: 500; }
      .nav-item.is-active:hover { background: var(--la-color-bg-active); }
      .nav-item.is-revoked { color: var(--la-color-text-muted); cursor: default; pointer-events: none; }

      .nav-icon {
        font-size: var(--la-nav-item-icon-size, 17px);
        flex-shrink: 0;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        color: var(--la-nav-icon-color, var(--la-color-text-secondary));
      }
      .nav-item.is-active .nav-icon { color: var(--la-color-text); }

      /* Label fades out on collapse — same opacity+max-width pattern as la-sidebar */
      .nav-label {
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
        max-width: 200px;
        opacity: 1;
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .nav-label { opacity: 0; max-width: 0; }

      /* ── Section label ─────────────────────────────────────── */
      .nav-section {
        padding: var(--la-space-md) var(--la-nav-item-padding-h, 8px) var(--la-space-xs);
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text-faint);
        white-space: nowrap;
        overflow: hidden;
        opacity: 1;
        max-width: 200px;
        transition: opacity var(--dur-fast) var(--ease),
                    max-width var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .nav-section { opacity: 0; max-width: 0; padding-top: 0; padding-bottom: 0; }

      /* ── Collapsed Home flyout ─────────────────────────────── */
      .nav-group-home { position: relative; }

      .home-flyout { display: none; }

      :host([collapsed]) .home-flyout {
        position: absolute;
        top: -4px;
        left: calc(100% + var(--la-space-sm));
        z-index: 30;
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 180px;
        max-width: 240px;
        padding: var(--la-space-2xs);
        border-radius: var(--la-radius-md);
        background: var(--la-color-bg);
        box-shadow: var(--la-shadow-popover);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateX(-4px) scale(0.98);
        transform-origin: left top;
        transition: opacity var(--dur-fast) var(--ease),
                    transform var(--dur-fast) var(--ease),
                    visibility var(--dur-fast) var(--ease);
      }

      :host([collapsed]) .home-flyout::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        left: calc(-1 * var(--la-space-sm));
        width: var(--la-space-sm);
      }

      :host([collapsed]) .nav-group-home:hover .home-flyout,
      :host([collapsed]) .nav-group-home:focus-within .home-flyout {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateX(0) scale(1);
      }

      .home-flyout-title {
        padding: 7px 9px;
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text-faint);
        white-space: nowrap;
      }

      .home-flyout-item {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        width: 100%;
        padding: 7px 9px;
        border: none;
        border-radius: var(--la-radius-sm);
        background: transparent;
        color: var(--la-color-text-secondary);
        font-family: var(--la-font-family);
        font-size: var(--la-font-size-base);
        font-weight: 400;
        text-align: left;
        white-space: nowrap;
        cursor: pointer;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
      }

      .home-flyout-item:hover { background: var(--la-color-bg-muted); color: var(--la-color-text); }
      .home-flyout-item i { font-size: 14px; flex-shrink: 0; }

      /* ── Footer ────────────────────────────────────────────── */
      .footer {
        flex-shrink: 0;
        padding: var(--la-nav-footer-padding, 6px);
        position: relative;
      }

      .user {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 6px 8px;
        border-radius: var(--la-radius-md);
        cursor: pointer;
        overflow: hidden;
        transition: background var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .user.snapped { justify-content: center; gap: 0; padding: 7px; }
      .user:hover { background: var(--la-color-bg-muted); }

      .user-avatar {
        width: 26px;
        height: 26px;
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg-muted);
        border: 1px solid var(--la-color-border);
        color: var(--la-color-text-secondary);
        font-size: var(--la-font-size-xs);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .user-info {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        opacity: 1;
        max-width: 200px;
        transition: opacity var(--dur-fast) var(--ease), max-width var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .user-info { opacity: 0; max-width: 0; }

      .user-name {
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-role {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-muted);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .user-menu {
        position: absolute;
        bottom: calc(100% + 8px);
        left: var(--la-nav-footer-padding, 6px);
        right: var(--la-nav-footer-padding, 6px);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-md);
        box-shadow: var(--la-shadow-popover);
        padding: var(--la-space-xs);
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: 1px;
        transform-origin: bottom left;
        transform: scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition: transform var(--dur-modal) var(--ease-spring-sm),
                    opacity   var(--dur-modal) var(--ease-spring-sm);
        will-change: transform, opacity;
      }
      .user-menu.is-open { transform: scale(1); opacity: 1; pointer-events: auto; }
      .user-menu.is-closing {
        transform: scale(0.99); opacity: 0; pointer-events: none;
        transition: transform var(--dur-fast) var(--ease-spring-sm),
                    opacity   var(--dur-fast) var(--ease-spring-sm);
      }
      :host([collapsed]) .user-menu { right: auto; min-width: 180px; }

      .user-menu-item {
        display: flex; align-items: center; gap: var(--la-space-sm);
        width: 100%; padding: 7px 9px; border: none;
        border-radius: var(--la-radius-sm); background: transparent;
        color: var(--la-color-text-secondary); font-family: var(--la-font-family);
        font-size: var(--la-font-size-base); font-weight: 400;
        text-align: left; cursor: pointer;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        white-space: nowrap;
      }
      .user-menu-item:hover { background: var(--la-color-bg-muted); color: var(--la-color-text); }
      .user-menu-item.destructive { color: var(--la-color-danger-text); }
      .user-menu-item.destructive:hover { background: var(--la-color-surface-danger); color: var(--la-color-danger-text); }

      .user-menu-dots {
        flex-shrink: 0; color: var(--la-color-text-faint);
        font-size: var(--la-font-size-base); opacity: 1; max-width: 20px;
        overflow: hidden; display: flex; align-items: center;
        transition: opacity var(--dur-fast) var(--ease), max-width var(--dur-fast) var(--ease);
      }
      :host([collapsed]) .user-menu-dots { opacity: 0; max-width: 0; }
    `,
  ];
  __decorate$s([
      n()
  ], exports.LaInvestorSidebar.prototype, "userName", void 0);
  __decorate$s([
      n()
  ], exports.LaInvestorSidebar.prototype, "userInitials", void 0);
  __decorate$s([
      n()
  ], exports.LaInvestorSidebar.prototype, "userRole", void 0);
  __decorate$s([
      n({ attribute: 'logo-src' })
  ], exports.LaInvestorSidebar.prototype, "logoSrc", void 0);
  __decorate$s([
      n({ attribute: 'logo-wordmark-src' })
  ], exports.LaInvestorSidebar.prototype, "logoWordmarkSrc", void 0);
  __decorate$s([
      n({ type: Array })
  ], exports.LaInvestorSidebar.prototype, "companies", void 0);
  __decorate$s([
      n()
  ], exports.LaInvestorSidebar.prototype, "active", void 0);
  __decorate$s([
      n({ type: Boolean, reflect: true })
  ], exports.LaInvestorSidebar.prototype, "collapsed", void 0);
  __decorate$s([
      r()
  ], exports.LaInvestorSidebar.prototype, "_snapped", void 0);
  __decorate$s([
      r()
  ], exports.LaInvestorSidebar.prototype, "_userMenuOpen", void 0);
  __decorate$s([
      r()
  ], exports.LaInvestorSidebar.prototype, "_userMenuClosing", void 0);
  exports.LaInvestorSidebar = __decorate$s([
      t('la-investor-sidebar')
  ], exports.LaInvestorSidebar);

  var __decorate$r = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaInsightCard = class LaInsightCard extends i$2 {
      constructor() {
          super(...arguments);
          /** Severity level — always backend-assigned. `'urgent'` or `'proactive'` for active insights; `'resolved'` for the resolved list. */
          this.severity = 'urgent';
          /** Plain-English headline — what the user needs to do. */
          this.headline = '';
          /** Optional one-liner shown below the headline on the card. */
          this.description = '';
          /** Insight type — determines the resolution widget in `la-insight-modal`. Not rendered on the card. */
          this.insightType = 'action_required';
          /** Source type — renders the type tag. `'legal'` → "Required by Law"; `'best_practice'` → "Best practice". */
          this.sourceType = 'legal';
          /** Why this is an issue — passed through in `la-insight-click` detail for the modal. Not rendered on the card. */
          this.explanation = '';
          /** Legacy — use `explanation`. Kept for backward compat during Sprint 5 transition. Included in `la-insight-click` detail; not rendered on the card. */
          this.reason = '';
      }
      _handleClick() {
          this.dispatchEvent(new CustomEvent('la-insight-click', {
              detail: {
                  severity: this.severity,
                  headline: this.headline,
                  insightType: this.insightType,
                  sourceType: this.sourceType,
                  entity: this.entity,
                  dates: this.dates,
                  relatedInsights: this.relatedInsights,
                  subItems: this.subItems,
                  explanation: this.explanation,
                  reason: this.reason,
                  action: this.action,
              },
              bubbles: true,
              composed: true,
          }));
      }
      _handleKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._handleClick();
          }
      }
      render() {
          const typeLabel = this.sourceType === 'best_practice' ? 'Best practice' : 'Required by Law';
          const iconClass = this.severity === 'urgent' ? 'ph-warning' : this.severity === 'resolved' ? 'ph-check-circle' : 'ph-info';
          const isGrouped = !!(this.subItems && this.subItems.length > 1);
          const nearestDate = !isGrouped && this.dates && this.dates.length > 0 ? this.dates[0] : null;
          const hasRelated = !!(this.relatedInsights && this.relatedInsights.length > 0);
          return b `
      ${iconStyles}
      <div
        class="card"
        tabindex="0"
        role="button"
        aria-label=${this.headline}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <div class="severity-icon-wrap">
          <i class="sev-icon ph-fill ${iconClass}" aria-hidden="true"></i>
        </div>
        <div class="content">
          <div class="headline">${this.headline}</div>
          ${this.description ? b `<div class="description">${this.description}</div>` : A}
          <div class="tags">
            <span>${typeLabel}</span>
            ${isGrouped
            ? b `<span class="tag-sep">·</span><span>${this.subItems.length} people</span>`
            : this.entity
                ? b `<span class="tag-sep">·</span><span>${this.entity.name}</span>`
                : A}
            ${nearestDate ? b `<span class="tag-sep">·</span><span>${nearestDate.date}</span>` : A}
            ${hasRelated ? b `<span class="tag-sep">·</span><span>Also affects ${this.relatedInsights.length} other insight${this.relatedInsights.length !== 1 ? 's' : ''}</span>` : A}
          </div>
        </div>
        <button class="card-menu" aria-label="More options" @click=${(e) => e.stopPropagation()}>
          <i class="ph ph-dots-three-bold" aria-hidden="true"></i>
        </button>
      </div>
    `;
      }
  };
  exports.LaInsightCard.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        cursor: pointer;
      }
      .card {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-xl);
        margin-bottom: var(--la-space-sm);
        background: var(--la-color-bg);
        border-radius: var(--la-radius-lg);
        border: none;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.03), 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
        transition: box-shadow var(--dur-base) var(--ease);
        outline: none;
      }
      .card:hover {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 8px 24px 0px rgba(0, 0, 0, 0.10);
      }
      .card:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      .severity-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--la-space-xl);
        min-height: calc(var(--la-font-size-base) * var(--la-line-height));
        flex-shrink: 0;
      }
      .sev-icon {
        font-size: var(--la-font-size-3xl);
        line-height: 1;
      }
      :host([severity='urgent'])    .sev-icon { color: var(--la-color-urgent); }
      :host([severity='proactive']) .sev-icon { color: var(--la-color-proactive); }
      :host([severity='resolved'])  .sev-icon { color: var(--la-color-resolved); }
      .content {
        min-width: 0;
      }
      .card-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 4px;
        margin: -4px;
        color: var(--la-color-text-faint);
        cursor: pointer;
        border-radius: var(--la-radius-sm);
        font-size: 16px;
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
      }
      .card-menu:hover {
        background: var(--la-color-bg-subtle);
        color: var(--la-color-text-muted);
      }
      .headline {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      :host([severity='resolved']) .headline { color: var(--la-color-text-muted); }
      .description {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        line-height: 1.5;
        margin-top: 6px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      :host([severity='resolved']) .description { color: var(--la-color-text-faint); }
      .tags {
        display: flex;
        align-items: baseline;
        gap: 5px;
        flex-wrap: wrap;
        margin-top: 8px;
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
      }
      .tag-sep {
        color: var(--la-color-text-faint);
      }
      @media (prefers-reduced-motion: reduce) {
        .card { transition: none; }
        .card-menu { transition: none; }
      }
    `,
  ];
  __decorate$r([
      n({ reflect: true })
  ], exports.LaInsightCard.prototype, "severity", void 0);
  __decorate$r([
      n()
  ], exports.LaInsightCard.prototype, "headline", void 0);
  __decorate$r([
      n()
  ], exports.LaInsightCard.prototype, "description", void 0);
  __decorate$r([
      n({ attribute: 'insight-type' })
  ], exports.LaInsightCard.prototype, "insightType", void 0);
  __decorate$r([
      n({ attribute: 'source-type' })
  ], exports.LaInsightCard.prototype, "sourceType", void 0);
  __decorate$r([
      n({ type: Object })
  ], exports.LaInsightCard.prototype, "entity", void 0);
  __decorate$r([
      n({ type: Array })
  ], exports.LaInsightCard.prototype, "dates", void 0);
  __decorate$r([
      n({ type: Array })
  ], exports.LaInsightCard.prototype, "relatedInsights", void 0);
  __decorate$r([
      n()
  ], exports.LaInsightCard.prototype, "explanation", void 0);
  __decorate$r([
      n()
  ], exports.LaInsightCard.prototype, "reason", void 0);
  __decorate$r([
      n({ type: Object })
  ], exports.LaInsightCard.prototype, "action", void 0);
  __decorate$r([
      n({ type: Array })
  ], exports.LaInsightCard.prototype, "subItems", void 0);
  exports.LaInsightCard = __decorate$r([
      t('la-insight-card')
  ], exports.LaInsightCard);

  var __decorate$q = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaInfoHint = class LaInfoHint extends i$2 {
      constructor() {
          super(...arguments);
          this.hint = '';
          this.position = 'top';
          this.maxWidth = '240px';
          this.size = 'default';
          this.label = 'More information';
      }
      render() {
          return b `
      ${iconStyles}
      <la-tooltip
        appearance="light"
        position=${this.position}
        tip=${this.hint}
        max-width=${this.maxWidth}
      >
        <button type="button" aria-label=${this.label}>
          <i class="ph ph-info" aria-hidden="true"></i>
        </button>
      </la-tooltip>
    `;
      }
  };
  exports.LaInfoHint.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
        line-height: 1;
      }
      button {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--la-info-hint-height-default);
        height: var(--la-info-hint-height-default);
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
        color: var(--la-color-text-muted);
        font-size: var(--la-info-hint-icon-default);
        border-radius: var(--la-radius-circle);
        transition: color var(--dur-fast) var(--ease),
          background var(--dur-fast) var(--ease);
      }
      button:hover {
        color: var(--la-color-text);
        background: var(--la-color-bg-muted);
      }
      button:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      :host([size='sm']) button {
        width: var(--la-info-hint-height-sm);
        height: var(--la-info-hint-height-sm);
        font-size: var(--la-info-hint-icon-sm);
      }
      :host([size='lg']) button {
        width: var(--la-info-hint-height-lg);
        height: var(--la-info-hint-height-lg);
        font-size: var(--la-info-hint-icon-lg);
      }
    `,
  ];
  __decorate$q([
      n()
  ], exports.LaInfoHint.prototype, "hint", void 0);
  __decorate$q([
      n({ reflect: true })
  ], exports.LaInfoHint.prototype, "position", void 0);
  __decorate$q([
      n({ attribute: 'max-width' })
  ], exports.LaInfoHint.prototype, "maxWidth", void 0);
  __decorate$q([
      n({ reflect: true })
  ], exports.LaInfoHint.prototype, "size", void 0);
  __decorate$q([
      n()
  ], exports.LaInfoHint.prototype, "label", void 0);
  exports.LaInfoHint = __decorate$q([
      t('la-info-hint')
  ], exports.LaInfoHint);

  var __decorate$p = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-pdf-preview — inline document preview.
   *
   * Mirrors how the product displays documents (see HQ `ccm.document-preview-worker`
   * → a presigned PDF rendered in the browser): a native `<object type="application/pdf">`.
   * No PDF library — the browser's own viewer draws the pages. Falls back to a rendered
   * page image where no PDF plugin is available (headless/automation panes), matching
   * HQ's `preview_fallback` placeholder.
   *
   * The `#toolbar=0&navpanes=0&view=FitH` fragment is PDF Open Parameters (part of the
   * format, not a dependency): PDFium (Chrome/Edge) honours it to hide the viewer chrome
   * and fit pages to width; Safari's PDFKit ignores it but is already chromeless — so both
   * converge on a clean, pages-only view.
   */
  exports.LaPdfPreview = class LaPdfPreview extends i$2 {
      constructor() {
          super(...arguments);
          /** URL of the PDF to display. */
          this.src = '';
          /** Image URL shown when the browser has no inline PDF viewer (fallback). */
          this.fallbackImage = '';
          /** Accessible label — used as the object's aria-label and the fallback image alt. */
          this.label = 'Document preview';
      }
      render() {
          if (!this.src) {
              return b `<div class="empty">No preview available.</div>`;
          }
          const data = `${this.src}#toolbar=0&navpanes=0&view=FitH`;
          return b `
      <div class="scroll">
        <object class="object" type="application/pdf" data=${data} aria-label=${this.label}>
          ${this.fallbackImage
            ? b `<img class="fallback" src=${this.fallbackImage} alt=${this.label} />`
            : b `<div class="empty">
                Preview unavailable —
                <a href=${this.src} target="_blank" rel="noopener">open the document</a>.
              </div>`}
        </object>
      </div>
    `;
      }
  };
  exports.LaPdfPreview.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .scroll {
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto;
        background: var(--la-color-bg);
        display: flex;
        flex-direction: column;
      }
      .object {
        flex: 1 1 auto;
        width: 100%;
        min-height: 360px;
        border: 0;
      }
      .fallback {
        width: 100%;
        display: block;
      }
      .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-height: 360px;
        padding: var(--la-space-2xl);
        text-align: center;
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-md);
      }
      .empty a {
        color: var(--la-color-text-secondary);
      }
    `,
  ];
  __decorate$p([
      n()
  ], exports.LaPdfPreview.prototype, "src", void 0);
  __decorate$p([
      n({ attribute: 'fallback-image' })
  ], exports.LaPdfPreview.prototype, "fallbackImage", void 0);
  __decorate$p([
      n()
  ], exports.LaPdfPreview.prototype, "label", void 0);
  exports.LaPdfPreview = __decorate$p([
      t('la-pdf-preview')
  ], exports.LaPdfPreview);

  var __decorate$o = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaActionItem = class LaActionItem extends i$2 {
      constructor() {
          super(...arguments);
          this.label = '';
          this.description = '';
          this.icon = '';
          this.status = 'pending';
      }
      render() {
          return b `
      ${iconStyles}
      <button
        type="button"
        class="row"
        role=${this.icon ? 'button' : 'checkbox'}
        aria-checked=${this.icon ? A : (this.status === 'done' ? 'true' : 'false')}
        @click=${this._onClick}
      >
        ${this.icon
            ? b `<div class="icon"><i class=${this.icon} aria-hidden="true"></i></div>`
            : b `
              <div class="checkbox-wrap" aria-hidden="true">
                <la-checkbox .checked=${this.status === 'done'}></la-checkbox>
              </div>
            `}
        <div class="content">
          <div class="label">${this.label}</div>
          ${this.description
            ? b `<div class="description">${this.description}</div>`
            : A}
        </div>
      </button>
    `;
      }
      _onClick() {
          this.dispatchEvent(new CustomEvent('la-action', {
              detail: { label: this.label, description: this.description, icon: this.icon, status: this.status },
              bubbles: true,
              composed: true,
          }));
      }
  };
  exports.LaActionItem.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .row {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) var(--la-space-md);
        border-radius: var(--la-radius-lg);
        cursor: pointer;
        position: relative;
        z-index: 0;
        box-sizing: border-box;
        /* button reset */
        appearance: none;
        -webkit-appearance: none;
        background: var(--la-color-bg-subtle);
        border: none;
        font: inherit;
        color: inherit;
        text-align: left;
        width: 100%;
        margin: 0;
        transition: background var(--dur-fast) var(--ease);
      }
      .row:hover,
      .row:focus-within {
        background: var(--la-color-bg-muted);
      }
      .row:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      /* Checkbox wrapper — pointer-events: none so the row button handles all interaction */
      .checkbox-wrap {
        flex-shrink: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        margin-top: 1px;
      }
      /* Icon slot — rendered when icon prop is provided (actions mode) */
      .icon {
        position: relative;
        width: var(--la-space-2xl);
        height: var(--la-space-2xl);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--la-font-size-2xl);
        color: var(--la-color-text-muted);
        border-radius: var(--la-radius-md);
      }
      .content {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        padding-top: 1px;
      }
      .label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
        line-height: 1.4;
        transition: color var(--dur-fast) var(--ease);
      }
      :host([status='done']) .label {
        color: var(--la-color-text-muted);
        text-decoration: line-through;
        text-decoration-color: var(--la-color-border);
      }
      .description {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: 2px;
        line-height: 1.5;
        transition: color var(--dur-fast) var(--ease);
      }
      :host([status='done']) .description {
        color: var(--la-color-text-faint);
      }
    `,
  ];
  __decorate$o([
      n()
  ], exports.LaActionItem.prototype, "label", void 0);
  __decorate$o([
      n()
  ], exports.LaActionItem.prototype, "description", void 0);
  __decorate$o([
      n()
  ], exports.LaActionItem.prototype, "icon", void 0);
  __decorate$o([
      n({ reflect: true })
  ], exports.LaActionItem.prototype, "status", void 0);
  exports.LaActionItem = __decorate$o([
      t('la-action-item')
  ], exports.LaActionItem);

  var __decorate$n = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaInsightList = class LaInsightList extends i$2 {
      constructor() {
          super(...arguments);
          this.insights = [];
          this.defaultVisible = 3;
          this._expanded = {};
      }
      _getGroups() {
          const order = ['urgent', 'proactive', 'resolved'];
          const labels = {
              urgent: 'Urgent',
              proactive: 'Proactive',
              resolved: 'Resolved',
          };
          const badgeVariants = {
              urgent: 'neutral',
              proactive: 'neutral',
              resolved: 'neutral',
          };
          return order
              .map((severity) => ({
              severity,
              label: labels[severity],
              badgeVariant: badgeVariants[severity],
              items: this.insights.filter((i) => i.severity === severity),
          }))
              .filter((g) => g.items.length > 0);
      }
      _toggleCategory(severity) {
          this._expanded = {
              ...this._expanded,
              [severity]: !this._expanded[severity],
          };
      }
      render() {
          const groups = this._getGroups();
          return b `
      ${iconStyles}
      ${groups.map((group) => {
            const expanded = this._expanded[group.severity];
            const isResolved = group.severity === 'resolved';
            const defaultCount = isResolved ? 0 : this.defaultVisible;
            const visible = expanded ? group.items : group.items.slice(0, defaultCount);
            const remaining = group.items.length - defaultCount;
            const headerHidden = isResolved && !expanded;
            return b `
          <div class="group">
          ${headerHidden
                ? A
                : b `<div class="category-header">
                <la-badge type="counter" variant=${group.badgeVariant} appearance="ghost">${group.items.length}</la-badge>
                <span class="category-label ${group.severity}">${group.label}</span>
              </div>`}
          ${visible.map((item) => b `
              <la-insight-card
                severity=${item.severity}
                headline=${item.headline}
                description=${item.description ?? ''}
                reason=${item.reason ?? ''}
                .entity=${item.entity}
                .dates=${item.dates}
                .relatedInsights=${item.relatedInsights}
                .action=${item.action}
              ></la-insight-card>
            `)}
          ${remaining > 0
                ? b `<div class="show-more">
                <la-button variant="ghost" @click=${() => this._toggleCategory(group.severity)}>
                  ${expanded ? 'Show fewer' : isResolved ? 'Show resolved' : 'Show more'}
                  <i slot="icon-right" class="ph ${expanded ? 'ph-caret-up' : 'ph-caret-down'}" aria-hidden="true"></i>
                </la-button>
              </div>`
                : A}
          </div>
        `;
        })}
    `;
      }
  };
  exports.LaInsightList.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .group {
        margin-top: var(--la-space-2xl);
      }
      .group:first-of-type {
        margin-top: 0;
      }
      .category-header {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: var(--la-space-sm);
        padding-left: 8px;
      }
      .category-label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
      }
      .show-more {
        display: flex;
        justify-content: center;
        margin-top: var(--la-space-xs);
      }
    `,
  ];
  __decorate$n([
      n({ type: Array })
  ], exports.LaInsightList.prototype, "insights", void 0);
  __decorate$n([
      n({ type: Number })
  ], exports.LaInsightList.prototype, "defaultVisible", void 0);
  __decorate$n([
      r()
  ], exports.LaInsightList.prototype, "_expanded", void 0);
  exports.LaInsightList = __decorate$n([
      t('la-insight-list')
  ], exports.LaInsightList);

  var __decorate$m = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDocumentList = class LaDocumentList extends i$2 {
      constructor() {
          super(...arguments);
          this.documents = [];
          this.heading = 'Documents';
          /** Show the "Default pack" toggle column on each row */
          this.showPackToggle = false;
          /** Map of category name → Phosphor icon class e.g. { 'Governance': 'ph ph-buildings' } */
          this.categoryIcons = {};
      }
      _handlePackToggle(e) {
          const { name, inDefaultPack } = e.detail;
          this.documents = this.documents.map(d => d.name === name ? { ...d, inDefaultPack } : d);
          this.dispatchEvent(new CustomEvent('la-pack-change', {
              detail: { name, inDefaultPack, documents: this.documents },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          const categories = new Map();
          for (const doc of this.documents) {
              const cat = doc.category ?? '';
              if (!categories.has(cat))
                  categories.set(cat, []);
              categories.get(cat).push(doc);
          }
          const hasCats = categories.size > 1 || !categories.has('');
          return b `
      ${iconStyles}
      <div class="container" @la-pack-toggle=${this._handlePackToggle}>
        ${this.heading
            ? b `<div class="header">${this.heading}</div>`
            : A}
        ${this.documents.length === 0
            ? b `<div class="empty">No documents</div>`
            : [...categories.entries()].map(([cat, docs]) => b `
                ${hasCats && cat
                ? b `<div class="category-label">
                      ${this.categoryIcons[cat]
                    ? b `<span class="category-icon"><i class=${this.categoryIcons[cat]}></i></span>`
                    : A}
                      ${cat}
                    </div>`
                : ''}
                <div class="items">
                  ${docs.map((d) => b `
                      <la-document-item
                        name=${d.name}
                        association=${d.association ?? ''}
                        status=${d.status ?? 'none'}
                        error=${d.error ?? ''}
                        ?show-pack-toggle=${this.showPackToggle}
                        ?in-default-pack=${d.inDefaultPack ?? false}
                      ></la-document-item>
                    `)}
                </div>
              `)}
      </div>
    `;
      }
  };
  exports.LaDocumentList.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      /* Internal text elements (header, category labels, empty state)
         use padding-inline: var(--la-space-md) so they line up with the
         la-document-item row content — which has the same horizontal
         padding internally. */
      .header {
        padding: var(--la-space-sm) var(--la-space-md);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
      }
      .category-label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text-muted);
        padding: var(--la-space-sm) var(--la-space-md) var(--la-space-xs) var(--la-space-xl);
        margin-top: var(--la-space-sm);
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
      }
      .category-icon {
        font-size: var(--la-font-size-base);
        display: flex;
        align-items: center;
      }
      .items {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
      }
      .empty {
        padding: var(--la-space-md);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }
      .pack-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--la-space-xs) var(--la-space-md);
      }
      .pack-summary {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }
      .pack-col-label {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        letter-spacing: 0.02em;
      }
    `,
  ];
  __decorate$m([
      n({ type: Array })
  ], exports.LaDocumentList.prototype, "documents", void 0);
  __decorate$m([
      n()
  ], exports.LaDocumentList.prototype, "heading", void 0);
  __decorate$m([
      n({ type: Boolean, attribute: 'show-pack-toggle' })
  ], exports.LaDocumentList.prototype, "showPackToggle", void 0);
  __decorate$m([
      n({ type: Object })
  ], exports.LaDocumentList.prototype, "categoryIcons", void 0);
  exports.LaDocumentList = __decorate$m([
      t('la-document-list')
  ], exports.LaDocumentList);

  var __decorate$l = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaProcessingWidget = class LaProcessingWidget extends i$2 {
      constructor() {
          super(...arguments);
          this.items = [];
          // Host-driven. Consumer toggles to true once processing exceeds a chosen
          // threshold (typically ~45s, tuned to backend p95 latency). Renders a calm
          // info alert above the items — no dismiss button by design (no re-entry
          // surface yet; dismissing would orphan the user).
          this.timeout = false;
          this._showDetails = true;
      }
      get _processingCount() {
          return this.items.filter((i) => i.status === 'processing').length;
      }
      get _failedCount() {
          return this.items.filter((i) => i.status === 'failed').length;
      }
      get _allComplete() {
          return this.items.every((i) => i.status === 'completed');
      }
      _mapStatus(status) {
          return status === 'completed' ? 'ready' : status;
      }
      _errorFor(item) {
          if (item.error)
              return item.error;
          if (item.status === 'failed') {
              return "We couldn't process this document. Try uploading it again.";
          }
          return '';
      }
      _getTitle() {
          const processing = this._processingCount;
          const failed = this._failedCount;
          const completed = this.items.filter((i) => i.status === 'completed').length;
          if (this._allComplete)
              return 'Processing complete';
          if (failed > 0 && processing === 0)
              return `${failed} item${failed > 1 ? 's' : ''} failed`;
          const parts = [];
          if (processing > 0)
              parts.push(`${processing} processing`);
          if (completed > 0)
              parts.push(`${completed} completed`);
          if (failed > 0)
              parts.push(`${failed} failed`);
          if (parts.length > 1)
              return parts.join(', ');
          return `Processing ${this.items.length} items`;
      }
      _reupload(item) {
          this.dispatchEvent(new CustomEvent('la-reupload', { detail: item }));
      }
      _dismissItem(item) {
          this.dispatchEvent(new CustomEvent('la-dismiss-item', { detail: item }));
      }
      // Toggle is intentional — gives hosts UI customisability and aligns with
      // future right-rail panels. Diverges from Sprint 1 spec (always-expanded);
      // LAI design owns this divergence.
      _toggleDetails() {
          this._showDetails = !this._showDetails;
      }
      render() {
          if (this.items.length === 0)
              return A;
          return b `
      ${iconStyles}
      <div class=${`surface${!this._showDetails ? ' surface--collapsed' : ''}`} part="surface">
        <div class="header">
          <div class="title">
            ${this._processingCount > 0
            ? b `<la-spinner size="sm" label="Processing"></la-spinner>`
            : A}
            <span class="title-text">${this._getTitle()}</span>
          </div>
          <la-icon-button
            label=${this._showDetails ? 'Hide details' : 'Show details'}
            .expanded=${this._showDetails}
            @click=${this._toggleDetails}
          >
            <i
              class="ph ph-caret-down caret ${this._showDetails
            ? 'open'
            : ''}"
              aria-hidden="true"
            ></i>
          </la-icon-button>
        </div>
        <div class=${`items-wrapper${!this._showDetails ? ' items-wrapper--hidden' : ''}`}>
          <div class="items">
            ${this.timeout
            ? b `<la-alert variant="info" class="timeout-alert">
                  This is taking a little longer than usual. We'll keep going — you can come back to check.
                </la-alert>`
            : A}
            ${this.items.map((item) => b `
                    <la-document-item
                      name=${item.name}
                      association=${item.area}
                      status=${this._mapStatus(item.status)}
                      error=${this._errorFor(item)}
                      ?dismissible=${item.status !== 'processing'}
                      non-interactive
                      @la-dismiss=${() => this._dismissItem(item)}
                    >
                      ${item.status === 'failed'
            ? b `<la-button
                            slot="actions"
                            variant="secondary"
                            size="sm"
                            @click=${() => this._reupload(item)}
                            >Re-upload</la-button
                          >`
            : A}
                    </la-document-item>
                  `)}
          </div>
        </div>
      </div>
    `;
      }
  };
  exports.LaProcessingWidget.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      .surface {
        border-radius: var(--la-radius-xl1);
        background: var(--la-color-bg);
        padding: var(--la-space-sm);
        box-shadow: var(--la-shadow-lg);
        min-width: 280px;
        transition: border-radius var(--dur-modal) var(--ease);
      }
      .surface--collapsed {
        border-radius: var(--la-radius-2xl);
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--la-space-sm);
      }
      .title {
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
        padding-left: var(--la-space-md);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        min-width: 0;
      }
      .title-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .items-wrapper {
        display: grid;
        grid-template-rows: 1fr;
        overflow: hidden;
        transition: grid-template-rows var(--dur-modal) var(--ease-out);
      }
      .items-wrapper--hidden {
        grid-template-rows: 0fr;
      }
      .surface:not(.surface--collapsed) .header {
        padding-bottom: var(--la-space-sm);
      }
      .items {
        overflow: hidden;
        min-height: 0;
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
        transition: opacity var(--dur-modal) var(--ease-out);
      }
      .items-wrapper--hidden .items {
        opacity: 0;
      }
      @media (prefers-reduced-motion: reduce) {
        .items-wrapper { transition: none; }
        .items { transition: none; }
        .surface { transition: none; }
      }
      .title la-spinner {
        color: var(--la-color-primary);
      }
      .timeout-alert {
        margin-bottom: var(--la-space-sm);
      }
      .caret {
        display: inline-block;
        transition: transform var(--dur-base) var(--ease);
      }
      .caret.open {
        transform: rotate(180deg);
      }
    `,
  ];
  __decorate$l([
      n({ type: Array })
  ], exports.LaProcessingWidget.prototype, "items", void 0);
  __decorate$l([
      n({ type: Boolean, reflect: true })
  ], exports.LaProcessingWidget.prototype, "timeout", void 0);
  __decorate$l([
      r()
  ], exports.LaProcessingWidget.prototype, "_showDetails", void 0);
  exports.LaProcessingWidget = __decorate$l([
      t('la-processing-widget')
  ], exports.LaProcessingWidget);

  var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaUpload = class LaUpload extends i$2 {
      constructor() {
          super(...arguments);
          this.accept = '';
          this.maxSize = 0;
          this.prompt = 'Or drag a file here';
          this.hint = '';
          this.compact = false;
          this.processing = false;
          // Transfer-failure (network/timeout) lives at this level — file-rejection
          // (type/size/multi) is owned by la-upload-box's own error state. Two
          // different recovery affordances per Sprint 1: Retry vs Re-select.
          this.transferError = false;
          this.transferErrorMessage = '';
      }
      reset() {
          this._box?.reset();
          this.transferError = false;
          this.transferErrorMessage = '';
      }
      _onBrowse() {
          this._box?.openPicker();
      }
      _onDrive() {
          this.dispatchEvent(new CustomEvent('la-upload-drive', { bubbles: true, composed: true }));
      }
      _onRetry() {
          this.dispatchEvent(new CustomEvent('la-retry-transfer', { bubbles: true, composed: true }));
      }
      render() {
          return b `
      ${iconStyles}
      <div class="sources">
        <la-button variant="secondary" @click=${this._onBrowse}>
          <i slot="icon-left" class="ph ph-folder-open"></i>
          Browse files
        </la-button>
        <la-button variant="secondary" @click=${this._onDrive}>
          <i slot="icon-left" class="ph ph-google-drive-logo"></i>
          Google Drive
        </la-button>
      </div>
      ${this.transferError
            ? b `
            <div class="transfer-error" role="alert">
              <span class="transfer-error-text">
                ${this.transferErrorMessage ||
                'Upload failed. Check your connection and try again.'}
              </span>
              <la-button
                variant="secondary"
                size="sm"
                @click=${this._onRetry}
              >
                Retry
              </la-button>
            </div>
          `
            : A}
      <la-upload-box
        accept=${this.accept}
        max-size=${this.maxSize}
        ?compact=${this.compact}
        ?processing=${this.processing}
        prompt=${this.prompt}
        hint=${this.hint}
      ></la-upload-box>
    `;
      }
  };
  exports.LaUpload.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .sources {
        display: flex;
        gap: var(--la-space-sm);
        margin-bottom: var(--la-space-md);
      }
      .transfer-error {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-md);
        padding: var(--la-space-sm) var(--la-space-md);
        background: var(--la-color-surface-danger);
        border-radius: var(--la-radius-md);
        color: var(--la-color-danger-text);
        font-size: var(--la-font-size-sm);
        margin-bottom: var(--la-space-sm);
      }
      .transfer-error-text {
        flex: 1 1 auto;
        min-width: 0;
      }
    `,
  ];
  __decorate$k([
      n()
  ], exports.LaUpload.prototype, "accept", void 0);
  __decorate$k([
      n({ type: Number, attribute: 'max-size' })
  ], exports.LaUpload.prototype, "maxSize", void 0);
  __decorate$k([
      n()
  ], exports.LaUpload.prototype, "prompt", void 0);
  __decorate$k([
      n()
  ], exports.LaUpload.prototype, "hint", void 0);
  __decorate$k([
      n({ type: Boolean, reflect: true })
  ], exports.LaUpload.prototype, "compact", void 0);
  __decorate$k([
      n({ type: Boolean, reflect: true })
  ], exports.LaUpload.prototype, "processing", void 0);
  __decorate$k([
      n({ type: Boolean, attribute: 'transfer-error', reflect: true })
  ], exports.LaUpload.prototype, "transferError", void 0);
  __decorate$k([
      n({ attribute: 'transfer-error-message' })
  ], exports.LaUpload.prototype, "transferErrorMessage", void 0);
  __decorate$k([
      e$1('la-upload-box')
  ], exports.LaUpload.prototype, "_box", void 0);
  exports.LaUpload = __decorate$k([
      t('la-upload')
  ], exports.LaUpload);

  var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaSummaryLine = class LaSummaryLine extends i$2 {
      constructor() {
          super(...arguments);
          this.area = '';
          this.urgent = 0;
          this.proactive = 0;
          this.documents = 0;
          this.showAsideToggle = false;
      }
      _fireToggleAside() {
          this.dispatchEvent(new CustomEvent('la-toggle-aside', { bubbles: true, composed: true }));
      }
      render() {
          return b `
      ${iconStyles}
      ${this.area ? b `
        <div class="title-row">
          <span class="title">${this.area}</span>
          ${this.showAsideToggle ? b `
            <button class="aside-toggle" @click=${this._fireToggleAside} title="Show context">
              <i class="ph ph-sidebar-simple"></i>
              Show context
            </button>
          ` : A}
        </div>
      ` : ''}
      <div class="line">
        <span class="stat"
          ><span class="dot dot--red"></span> <strong>${this.urgent}</strong>
          urgent</span
        >
        <span class="stat"
          ><span class="dot dot--yellow"></span>
          <strong>${this.proactive}</strong> proactive</span
        >
        <span style="color: var(--la-color-text-muted)"
          >${this.documents} documents</span
        >
      </div>
    `;
      }
  };
  exports.LaSummaryLine.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
      }
      .title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        min-width: 0;
      }
      .aside-toggle {
        display: var(--la-aside-toggle-display, none);
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
        padding: 5px 10px 5px 8px;
        border: 1px solid var(--la-color-border);
        border-radius: var(--la-radius-md);
        background: none;
        cursor: pointer;
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-sm);
        font-family: inherit;
        font-weight: var(--la-font-weight-medium);
        white-space: nowrap;
        transition: background var(--dur-fast) var(--ease),
                    color var(--dur-fast) var(--ease),
                    border-color var(--dur-fast) var(--ease);
      }
      .aside-toggle i {
        font-size: 15px;
      }
      .aside-toggle:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
        border-color: var(--la-color-border-2);
      }
      .line {
        display: flex;
        gap: 16px;
        font-size: var(--la-font-size-base);
        color: var(--la-color-secondary-text);
        padding: 8px 0;
        border-bottom: 1px solid var(--la-color-border-light);
        margin-bottom: 16px;
        align-items: center;
      }
      .line strong {
        color: var(--la-color-text);
      }
      .stat {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .dot--red { background: var(--la-color-urgent); }
      .dot--yellow { background: var(--la-color-proactive); }
    `,
  ];
  __decorate$j([
      n()
  ], exports.LaSummaryLine.prototype, "area", void 0);
  __decorate$j([
      n({ type: Number })
  ], exports.LaSummaryLine.prototype, "urgent", void 0);
  __decorate$j([
      n({ type: Number })
  ], exports.LaSummaryLine.prototype, "proactive", void 0);
  __decorate$j([
      n({ type: Number })
  ], exports.LaSummaryLine.prototype, "documents", void 0);
  __decorate$j([
      n({ type: Boolean, attribute: 'show-aside-toggle' })
  ], exports.LaSummaryLine.prototype, "showAsideToggle", void 0);
  exports.LaSummaryLine = __decorate$j([
      t('la-summary-line')
  ], exports.LaSummaryLine);

  var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaActionsWidget = class LaActionsWidget extends i$2 {
      constructor() {
          super(...arguments);
          this.actions = [];
          this.heading = 'Actions';
          this.subtitle = '';
      }
      render() {
          return b `
      <div class="container">
        <div class="header">${this.heading}</div>
        ${this.subtitle ? b `<div class="subtitle">${this.subtitle}</div>` : ''}
        ${this.actions.length === 0
            ? b `<div class="empty">No actions</div>`
            : b `
              <div class="items">
                ${this.actions.map((a) => b `
                    <la-action-item
                      label=${a.label}
                      description=${a.description ?? ''}
                      icon=${a.icon ?? ''}
                      status=${a.status ?? 'pending'}
                    ></la-action-item>
                  `)}
              </div>
            `}
      </div>
    `;
      }
  };
  exports.LaActionsWidget.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .container {
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl2);
        overflow: hidden;
        padding: var(--la-space-sm) 0;
      }
      .header {
        padding: var(--la-space-sm) var(--la-space-md) var(--la-space-xs) var(--la-space-lg);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
      }
      .subtitle {
        padding: 0 var(--la-space-md) var(--la-space-sm) var(--la-space-lg);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-faint);
        line-height: 1.5;
      }
      .items {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-lg);
        padding: var(--la-space-xs);
      }
      .empty {
        padding: var(--la-space-md) var(--la-space-lg);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }
    `,
  ];
  __decorate$i([
      n({ type: Array })
  ], exports.LaActionsWidget.prototype, "actions", void 0);
  __decorate$i([
      n()
  ], exports.LaActionsWidget.prototype, "heading", void 0);
  __decorate$i([
      n()
  ], exports.LaActionsWidget.prototype, "subtitle", void 0);
  exports.LaActionsWidget = __decorate$i([
      t('la-actions-widget')
  ], exports.LaActionsWidget);

  var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaAnticipationTeaser = class LaAnticipationTeaser extends i$2 {
      constructor() {
          super(...arguments);
          this.heading = 'More insights coming soon';
          this.description = '';
      }
      render() {
          return b `
      <div class="teaser">
        <div class="title">${this.heading}</div>
        <div class="desc">${this.description}</div>
      </div>
    `;
      }
  };
  exports.LaAnticipationTeaser.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .teaser {
        background: var(--la-color-bg-surface);
        border: 1px dashed var(--la-color-text-disabled);
        border-radius: var(--la-radius-lg);
        padding: 16px;
        text-align: center;
      }
      .title {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-secondary-text);
        margin-bottom: 4px;
      }
      .desc {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-muted);
      }
    `,
  ];
  __decorate$h([
      n()
  ], exports.LaAnticipationTeaser.prototype, "heading", void 0);
  __decorate$h([
      n()
  ], exports.LaAnticipationTeaser.prototype, "description", void 0);
  exports.LaAnticipationTeaser = __decorate$h([
      t('la-anticipation-teaser')
  ], exports.LaAnticipationTeaser);

  var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaEmptyState = class LaEmptyState extends i$2 {
      constructor() {
          super(...arguments);
          this.variant = 'clean';
          this.area = '';
          this.message = '';
          /** Phosphor icon class for the neutral `default` variant, e.g. "ph ph-tray". */
          this.icon = '';
          /** Headline for the neutral `default` variant. */
          this.heading = '';
          /** URL of an illustration image. When set on the clean variant, renders
           *  a centred image in place of the check-circle icon. */
          this.illustration = '';
      }
      render() {
          if (this.variant === 'processing') {
              return b `
        ${iconStyles}
        ${this.area
                ? b `<div
              style="font-size: var(--la-font-size-3xl); font-weight: var(--la-font-weight-bold); margin-bottom: var(--la-space-xs);"
            >
              ${this.area}
            </div>`
                : A}
        <la-spinner size="lg"></la-spinner>
        <div class="processing-text">Analysing your documents...</div>
        <div class="processing-sub">
          Insights will appear here as processing completes.
        </div>
      `;
          }
          if (this.variant === 'default') {
              return b `
        ${iconStyles}
        ${this.illustration
                ? b `<img class="illustration" src=${this.illustration} alt="" />`
                : b `<div class="icon icon-neutral">
              <i class="${this.icon || 'ph ph-tray'}"></i>
            </div>`}
        <div class="text text-neutral">${this.heading || 'Nothing here yet'}</div>
        ${this.message ? b `<div class="sub">${this.message}</div>` : A}
        <div class="action"><slot name="action"></slot></div>
      `;
          }
          return b `
      ${iconStyles}
      ${this.illustration
            ? b `<img class="illustration" src=${this.illustration} alt="" />`
            : b `<div class="icon"><i class="ph-fill ph-check-circle"></i></div>`}
      <div class="text">
        ${this.area ? `${this.area} is in good shape` : 'All clear'}
      </div>
      <div class="sub">
        ${this.message || 'No issues found and nothing is processing.'}
      </div>
    `;
      }
  };
  exports.LaEmptyState.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        text-align: center;
        padding: var(--la-space-2xl) var(--la-space-lg);
      }
      .icon {
        font-size: var(--la-font-size-4xl);
        color: var(--la-color-resolved);
        margin-bottom: var(--la-space-sm);
      }
      /* Neutral first-run variant — calm, not a success state.
         Compound selectors so these win over .icon / .text regardless of source order. */
      .icon.icon-neutral {
        color: var(--la-color-text-faint);
      }
      .text.text-neutral {
        color: var(--la-color-text);
      }
      .action {
        margin-top: var(--la-space-lg);
      }
      .action:empty {
        display: none;
      }
      .illustration {
        display: block;
        width: 180px;
        height: 180px;
        object-fit: contain;
        margin: 0 auto var(--la-space-sm);
      }
      .text {
        font-size: var(--la-font-size-xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-resolved);
      }
      .sub {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-xs);
      }
      la-spinner {
        color: var(--la-color-processing);
        margin-top: var(--la-space-xl);
      }
      .processing-text {
        font-size: var(--la-font-size-lg);
        color: var(--la-color-text-secondary);
        margin-top: var(--la-space-md);
      }
      .processing-sub {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-faint);
        margin-top: var(--la-space-xs);
      }
    `,
  ];
  __decorate$g([
      n({ reflect: true })
  ], exports.LaEmptyState.prototype, "variant", void 0);
  __decorate$g([
      n()
  ], exports.LaEmptyState.prototype, "area", void 0);
  __decorate$g([
      n()
  ], exports.LaEmptyState.prototype, "message", void 0);
  __decorate$g([
      n()
  ], exports.LaEmptyState.prototype, "icon", void 0);
  __decorate$g([
      n()
  ], exports.LaEmptyState.prototype, "heading", void 0);
  __decorate$g([
      n()
  ], exports.LaEmptyState.prototype, "illustration", void 0);
  exports.LaEmptyState = __decorate$g([
      t('la-empty-state')
  ], exports.LaEmptyState);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const m={},p=(o,t=m)=>o._$AH=t;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i=e(class extends i$1{constructor(){super(...arguments),this.key=A;}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(p(r),this.key=t),e}});

  var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaUnlockPanel = class LaUnlockPanel extends i$2 {
      constructor() {
          super(...arguments);
          /* ── Public API ────────────────────────────────────────── */
          this.unlockState = 'pre-start';
          this.area = '';
          this.checklistItems = [];
          this.steps = [];
          this.nextArea = '';
          this.nextDescription = '';
          /* ── Internal state ────────────────────────────────────── */
          /** Captured field values for the current active step. Reset on step change. */
          this._values = {};
          /** Tracks the active step id so we can clear `_values` when it changes. */
          this._lastActiveId = null;
      }
      willUpdate(changed) {
          if (changed.has('steps') || changed.has('unlockState')) {
              const active = this._activeStep();
              const activeId = active?.id ?? null;
              if (activeId !== this._lastActiveId) {
                  this._lastActiveId = activeId;
                  this._values = active?.values ? { ...active.values } : {};
              }
          }
      }
      /* ── Derivations ───────────────────────────────────────── */
      _activeStep() {
          return this.steps.find((s) => s.status === 'active');
      }
      _stepperData() {
          return this.steps.map((s) => ({
              label: s.id,
              status: s.status === 'pending' ||
                  s.status === 'active' ||
                  s.status === 'complete' ||
                  s.status === 'skipped' ||
                  s.status === 'processing'
                  ? s.status
                  : 'pending',
          }));
      }
      _isFieldValid(field) {
          if (!field.required)
              return true;
          const v = this._values[field.name];
          if (field.type === 'file')
              return v instanceof File;
          if (field.type === 'choice')
              return typeof v === 'string' && v.length > 0;
          if (field.type === 'multi-choice')
              return Array.isArray(v) && v.length > 0;
          if (field.type === 'service')
              return v === 'connected';
          return typeof v === 'string' && v.trim().length > 0;
      }
      _canSubmit(step) {
          return step.fields.every((f) => this._isFieldValid(f));
      }
      /* ── Event dispatch ────────────────────────────────────── */
      _emit(action, detail = {}) {
          this.dispatchEvent(new CustomEvent('la-unlock-action', {
              detail: { action, ...detail },
              bubbles: true,
              composed: true,
          }));
      }
      /* ── Field input handlers ──────────────────────────────── */
      _setValue(name, value) {
          this._values = { ...this._values, [name]: value };
      }
      _onInputChange(name, e) {
          const detail = e.detail;
          this._setValue(name, detail.value);
      }
      _onFileChange(name, e) {
          const detail = e.detail;
          this._setValue(name, detail.file);
      }
      _onFileRemove(name) {
          const next = { ...this._values };
          delete next[name];
          this._values = next;
      }
      _onChoiceClick(field, value, _step) {
          this._setValue(field.name, value);
      }
      _onMultiChoiceToggle(field, value) {
          const current = this._values[field.name] ?? [];
          const next = current.includes(value)
              ? current.filter((v) => v !== value)
              : [...current, value];
          this._setValue(field.name, next);
      }
      _onConnect(step, field) {
          this._setValue(field.name, 'connected');
          this._emit('service-connect', {
              stepId: step.id,
              fieldName: field.name,
              provider: field.provider ?? '',
          });
      }
      _onManual(step, field) {
          this._emit('service-manual', { stepId: step.id, fieldName: field.name });
      }
      /* ── Step actions ──────────────────────────────────────── */
      _onStart() {
          this._emit('start');
      }
      _onSubmit(step) {
          if (!this._canSubmit(step))
              return;
          this._emit('submit', { stepId: step.id, values: { ...this._values } });
      }
      _onSkip(step) {
          this._emit('skip', { stepId: step.id });
      }
      _onPrevious(step) {
          this._emit('previous', { stepId: step.id });
      }
      _onNextAction(action) {
          this._emit(action);
      }
      /* ── Render ─────────────────────────────────────────────── */
      _renderField(step, field, isOnly) {
          const showLabel = !isOnly && field.label;
          if (field.type === 'text' ||
              field.type === 'email' ||
              field.type === 'url' ||
              field.type === 'tel' ||
              field.type === 'number') {
              const currentValue = typeof this._values[field.name] === 'string'
                  ? this._values[field.name]
                  : '';
              return b `
        <la-input
          .type=${field.type}
          .name=${field.name}
          .label=${showLabel ? field.label : ''}
          .placeholder=${field.placeholder ?? ''}
          .hint=${field.hint ?? ''}
          .value=${currentValue}
          ?required=${field.required ?? false}
          @la-change=${(e) => this._onInputChange(field.name, e)}
        ></la-input>
      `;
          }
          if (field.type === 'file') {
              return b `
        <la-upload-box
          .label=${showLabel ? field.label : ''}
          .accept=${field.accept ?? ''}
          .hint=${field.hint ?? ''}
          @la-change=${(e) => this._onFileChange(field.name, e)}
          @la-remove=${() => this._onFileRemove(field.name)}
        ></la-upload-box>
      `;
          }
          if (field.type === 'choice' && field.options) {
              const selected = this._values[field.name];
              return b `
        <div class="choice-list" role="radiogroup" aria-label=${field.label ?? step.title}>
          ${field.options.map((opt) => b `
              <la-choice
                variant="contained"
                ?checked=${selected === opt.value}
                .description=${opt.description ?? ''}
                @la-change=${(e) => {
                if (e.detail.checked) {
                    this._onChoiceClick(field, opt.value, step);
                }
            }}
                >${opt.label}</la-choice
              >
            `)}
        </div>
      `;
          }
          if (field.type === 'multi-choice' && field.options) {
              const selected = this._values[field.name] ?? [];
              return b `
        <div class="choice-list" role="group" aria-label=${field.label ?? step.title}>
          ${field.options.map((opt) => b `
              <la-choice
                variant="contained"
                ?checked=${selected.includes(opt.value)}
                .description=${opt.description ?? ''}
                @la-change=${() => this._onMultiChoiceToggle(field, opt.value)}
                >${opt.label}</la-choice
              >
            `)}
        </div>
      `;
          }
          if (field.type === 'service') {
              const provider = field.provider ?? 'service';
              const isConnected = this._values[field.name] === 'connected';
              return b `
        <div class="service">
          <la-button
            variant="primary"
            size="lg"
            ?disabled=${isConnected}
            @click=${() => this._onConnect(step, field)}
          >
            ${isConnected ? `Connected to ${provider}` : `Connect to ${provider}`}
          </la-button>
          ${field.hint
                ? b `<div class="service-hint">${field.hint}</div>`
                : A}
          <button
            type="button"
            class="service-fallback"
            @click=${() => this._onManual(step, field)}
          >
            Enter ${provider} details manually instead
          </button>
        </div>
      `;
          }
          return A;
      }
      _renderPreStart() {
          return b `
      <div class="state-wrap">
        <la-panel>
          <div class="pre-title">Unlock ${this.area}</div>
          <div class="pre-sub">Gather these items before you begin</div>
          ${this.checklistItems.length
            ? b `
                <ul class="prep-list" role="list">
                  ${this.checklistItems.map((item) => b `
                      <li class="prep-item">
                        <i class="ph ph-check" aria-hidden="true"></i>
                        <span>${item}</span>
                      </li>
                    `)}
                </ul>
              `
            : A}
          <div class="pre-actions">
            <la-button variant="primary" @click=${this._onStart}>Start</la-button>
          </div>
        </la-panel>
      </div>
    `;
      }
      _renderActive() {
          const step = this._activeStep();
          if (!step)
              return A;
          const stepIndex = this.steps.findIndex((s) => s.id === step.id);
          const skippable = step.skippable !== false;
          return b `
      <div class="state-wrap">
        <la-panel>
          <div class="progress-block">
            <span class="active-counter"
              >Step ${stepIndex + 1} of ${this.steps.length}</span
            >
            <la-stepper .steps=${this._stepperData()}></la-stepper>
          </div>

          ${i(step.id, b `
              <div class="step-content">
                <div class="question">
                  <div class="question-title">${step.title}</div>
                  ${step.description
            ? b `<div class="question-desc">${step.description}</div>`
            : A}
                </div>

                ${step.error
            ? b `<la-alert
                      variant="danger"
                      style="margin-bottom: var(--la-space-lg);"
                    >
                      <i
                        slot="icon"
                        class="ph-fill ph-warning-circle"
                        aria-hidden="true"
                      ></i>
                      ${step.error}
                    </la-alert>`
            : A}

                <div class="fields">
                  ${step.fields.map((f) => this._renderField(step, f, step.fields.length === 1))}
                </div>
              </div>
            `)}

          <div class="actions">
            <la-icon-button
              class="back"
              label="Previous step"
              size="sm"
              @click=${() => this._onPrevious(step)}
            >
              <i class="ph-bold ph-arrow-left" aria-hidden="true"></i>
            </la-icon-button>
            ${skippable
            ? b `<la-button
                  variant="ghost"
                  @click=${() => this._onSkip(step)}
                  >Skip</la-button
                >`
            : A}
            <la-button
                  variant="primary"
                  ?disabled=${!this._canSubmit(step)}
                  @click=${() => this._onSubmit(step)}
                  >Submit</la-button
                >
          </div>
        </la-panel>
      </div>
    `;
      }
      _renderProcessing() {
          return b `
      <div class="state-wrap">
        <la-panel>
          <div class="processing-row">
            <la-spinner size="lg" label="Processing"></la-spinner>
            <span>Processing your answers…</span>
          </div>
        </la-panel>
      </div>
    `;
      }
      _renderUnlocked() {
          return b `
      <div class="state-wrap">
        <la-panel>
          <div class="unlocked-body">
            <i class="unlocked-icon ph-fill ph-check-circle" aria-hidden="true"></i>
            <div>
              <div class="unlocked-headline">${this.area} is ready</div>
              <div class="unlocked-sub">Your first insights are ready.</div>
            </div>
          </div>
        </la-panel>
      </div>
    `;
      }
      _renderNextPrompt() {
          return b `
      <div class="state-wrap">
        <la-panel>
          <div class="next-row">
            <div>
              <div class="next-title">Next up: ${this.nextArea}</div>
              ${this.nextDescription
            ? b `<div class="next-desc">${this.nextDescription}</div>`
            : A}
            </div>
            <div class="next-actions">
              <la-button
                variant="primary"
                size="sm"
                @click=${() => this._onNextAction('go-next')}
                >Go</la-button
              >
              <la-button
                variant="ghost"
                size="sm"
                @click=${() => this._onNextAction('dismiss')}
                >Dismiss</la-button
              >
            </div>
          </div>
        </la-panel>
      </div>
    `;
      }
      render() {
          return b `${iconStyles}${i(this.unlockState, this._renderState())}`;
      }
      _renderState() {
          switch (this.unlockState) {
              case 'pre-start':
                  return this._renderPreStart();
              case 'active':
                  return this._renderActive();
              case 'processing':
                  return this._renderProcessing();
              case 'unlocked':
                  return this._renderUnlocked();
              case 'next-prompt':
                  return this._renderNextPrompt();
              case 'dismissed':
                  return A;
              default:
                  return A;
          }
      }
  };
  exports.LaUnlockPanel.styles = [
      tokens,
      i$5 `
      :host {
        --la-unlock-min-h: 420px;
        display: block;
        min-width: 420px;
        min-height: var(--la-unlock-min-h);
      }
      :host([state='dismissed']) {
        display: none;
      }

      /* ── Layout — every state fills the host's min-height ── */
      .state-wrap {
        min-height: var(--la-unlock-min-h);
        display: flex;
        flex-direction: column;
        animation: la-unlock-fade-in var(--dur-modal) var(--ease-out);
      }

      .step-content {
        animation: la-unlock-fade-in var(--dur-modal) var(--ease-out);
      }

      .state-wrap > la-panel {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .state-wrap > la-panel::part(panel) {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl);
        padding: var(--la-space-xl);
        box-shadow: var(--la-shadow-card);
      }

      /* Short states — vertically centre content within la-panel */
      :host([state='processing']) .state-wrap > la-panel::part(panel),
      :host([state='next-prompt']) .state-wrap > la-panel::part(panel),
      :host([state='unlocked']) .state-wrap > la-panel::part(panel) {
        justify-content: center;
      }

      /* Unlocked state: bloom in from scale(0.94) with spring easing */
      :host([state='unlocked']) .state-wrap {
        animation: la-unlock-bloom var(--dur-modal) var(--ease-spring) both;
      }

      @keyframes la-unlock-fade-in {
        from {
          opacity: 0;
          transform: translateY(var(--la-space-sm));
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes la-unlock-bloom {
        from {
          opacity: 0;
          transform: scale(0.94);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .state-wrap,
        .step-content {
          animation: none;
        }
      }

      /* ── Pre-start ─────────────────────────────────────── */
      .pre-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
      }
      .pre-sub {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        margin-top: var(--la-space-2xs);
        margin-bottom: var(--la-space-lg);
      }
      .prep-list {
        list-style: none;
        padding: 0;
        margin: 0 0 var(--la-space-xl) 0;
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
      }
      .prep-item {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
      }
      .prep-item i {
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-base);
        flex-shrink: 0;
      }
      .pre-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
      }

      /* ── Active — typeform-style ───────────────────────── */
      .progress-block {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
        margin-bottom: var(--la-space-2xl);
      }
      .active-counter {
        font-size: var(--la-font-size-md);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text-muted);
      }

      .question {
        margin-bottom: var(--la-space-2xl);
      }
      .question-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
      }
      .question-desc {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        line-height: var(--la-line-height);
        margin-top: var(--la-space-sm);
      }

      .fields {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-lg);
        margin-bottom: var(--la-space-2xl);
      }

      .choice-list {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
      }

      .service {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-md);
        align-items: flex-start;
      }
      .service-hint {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
      }
      .service-fallback {
        background: none;
        border: 0;
        padding: 0;
        font: inherit;
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-secondary);
        text-decoration: underline;
        text-decoration-color: var(--la-color-border);
        text-underline-offset: 2px;
        cursor: pointer;
      }
      .service-fallback:hover {
        text-decoration-color: var(--la-color-primary);
      }
      .service-fallback:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
        border-radius: var(--la-radius-sm);
      }

      .actions {
        display: flex;
        gap: var(--la-space-sm);
        align-items: center;
        margin-top: auto;
      }
      .actions .back {
        margin-right: auto;
      }

      /* ── Processing ────────────────────────────────────── */
      .processing-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--la-space-md);
        text-align: center;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
      }

      /* ── Unlocked ──────────────────────────────────────── */
      .unlocked-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--la-space-md);
        text-align: center;
      }
      .unlocked-icon {
        font-size: var(--la-font-size-4xl);
        line-height: 1;
        color: var(--la-color-success);
      }
      .unlocked-headline {
        font-size: var(--la-font-size-xl);
        font-weight: var(--la-font-weight-semibold);
      }
      .unlocked-sub {
        font-size: var(--la-font-size-base);
        margin-top: var(--la-space-3xs);
        color: var(--la-color-text-secondary);
      }

      /* ── Next prompt ───────────────────────────────────── */
      .next-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--la-space-lg);
      }
      .next-title {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
      }
      .next-desc {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-secondary);
        margin-top: var(--la-space-3xs);
      }
      .next-actions {
        display: flex;
        gap: var(--la-space-sm);
        flex-shrink: 0;
      }
    `,
  ];
  __decorate$f([
      n({ reflect: true, attribute: 'state' })
  ], exports.LaUnlockPanel.prototype, "unlockState", void 0);
  __decorate$f([
      n()
  ], exports.LaUnlockPanel.prototype, "area", void 0);
  __decorate$f([
      n({ type: Array })
  ], exports.LaUnlockPanel.prototype, "checklistItems", void 0);
  __decorate$f([
      n({ type: Array })
  ], exports.LaUnlockPanel.prototype, "steps", void 0);
  __decorate$f([
      n({ attribute: 'next-area' })
  ], exports.LaUnlockPanel.prototype, "nextArea", void 0);
  __decorate$f([
      n({ attribute: 'next-description' })
  ], exports.LaUnlockPanel.prototype, "nextDescription", void 0);
  __decorate$f([
      r()
  ], exports.LaUnlockPanel.prototype, "_values", void 0);
  exports.LaUnlockPanel = __decorate$f([
      t('la-unlock-panel')
  ], exports.LaUnlockPanel);

  var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaLegalAreaWidget = class LaLegalAreaWidget extends i$2 {
      constructor() {
          super(...arguments);
          this.area = '';
          this.description = '';
          /** URL of the card illustration. Resolved by the host page — pass an
           *  absolute or page-relative path. Falls back to no image (the
           *  illustration region collapses and content rises to the top of the
           *  card). Treatment: full opacity on white surfaces (unlocked /
           *  locked-unlockable); grayscale + mix-blend-mode: multiply on the
           *  locked-not-unlockable grey surface. */
          this.illustration = '';
          this.status = 'unlocked';
          this.urgent = 0;
          this.proactive = 0;
          this.dependencies = [];
          this.nextLevelLabel = '';
      }
      _handleClick() {
          this.dispatchEvent(new CustomEvent('la-area-click', {
              detail: { area: this.area },
              bubbles: true,
              composed: true,
          }));
      }
      _handleKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._handleClick();
          }
      }
      _handleUnlock(e) {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('la-area-unlock', {
              detail: { area: this.area },
              bubbles: true,
              composed: true,
          }));
      }
      render() {
          const isLocked = this.status !== 'unlocked';
          return b `${iconStyles}
      <la-panel
        ?clickable=${true}
        ?dimmed=${this.status === 'locked-not-unlockable'}
        tabindex="0"
        role="button"
        aria-label=${`Open ${this.area}`}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this.illustration
            ? b `<div class="illustration">
              <img src=${this.illustration} alt="" aria-hidden="true" />
            </div>`
            : A}
        <div class="title-row">
          <div class="title">${this.area}</div>
        </div>
        ${this.description ? b `<div class="subtitle">${this.description}</div>` : A}
        ${!isLocked &&
            this.urgent === 0 &&
            this.proactive === 0 &&
            !this.nextLevelLabel
            ? b `<div class="all-good"><i class="ph-fill ph-check-circle"></i> All good</div>`
            : A}
        ${!isLocked && (this.urgent > 0 || this.proactive > 0)
            ? b `
              <div class="count-row">
                ${this.urgent > 0
                ? b `<span class="count-urgent">${this.urgent} urgent</span>`
                : A}
                ${this.urgent > 0 && this.proactive > 0
                ? b `<span class="count-sep">·</span>`
                : A}
                ${this.proactive > 0
                ? b `<span class="count-proactive">${this.proactive} proactive</span>`
                : A}
              </div>
            `
            : A}
        ${this.status === 'unlocked' && this.nextLevelLabel
            ? b `<la-button
              class="cta"
              variant="primary"
              @click=${this._handleUnlock}
              >${this.nextLevelLabel}</la-button
            >`
            : A}
        ${this.status === 'locked-unlockable'
            ? b `<la-button
              class="cta"
              variant="primary"
              @click=${this._handleUnlock}
              >Start with ${this.area}</la-button
            >`
            : A}
        ${this.status === 'locked-not-unlockable' &&
            this.dependencies.length > 0
            ? b `<div class="dependency-list">
              Requires: ${this.dependencies.join(', ')}
            </div>`
            : A}
      </la-panel>
    `;
      }
  };
  exports.LaLegalAreaWidget.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        cursor: pointer;
        /* Fluid portrait card — 3:4 aspect ratio (300×400 px at the
           dashboard's 932 px column). Width comes from the parent grid;
           height tracks via aspect-ratio. The 300 px width floor keeps
           cards readable at narrow widths. */
        width: 100%;
        min-width: 280px;
        aspect-ratio: 3 / 4;
      }
      la-panel {
        height: 100%;
      }
      la-panel::part(panel) {
        height: 100%;
        box-sizing: border-box;
        border-radius: var(--la-radius-lg);
        display: flex;
        flex-direction: column;
        padding: var(--la-space-xl);
        border: 1px solid var(--la-color-border-light);
        /* Hover/rest motion is a single transform-free elevation cue —
           box-shadow only. Background + border-color flip instantly to
           keep the transition GPU-safe. */
        transition: box-shadow var(--dur-fast) var(--ease);
      }
      /* Focus ring on the la-panel host when the card is keyboard-focused.
         Forwarded into the panel surface via the exposed panel part. */
      la-panel:focus-visible::part(panel) {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }
      /* Respect reduced-motion preference inside the shadow root —
         motion.css lives in document scope and doesn't penetrate. */
      @media (prefers-reduced-motion: reduce) {
        la-panel::part(panel) { transition: none; }
      }
      /* Unlocked + locked-unlockable cards use a plain white surface so
         the illustration reads cleanly. Locked-not-unlockable keeps the
         default subtle grey from la-panel — the multiply-blended
         illustration sinks into that grey. */
      :host(:not([status='locked-not-unlockable'])) la-panel::part(panel) {
        background: var(--la-color-bg);
      }
      /* locked-unlockable is the "next progression candidate" — the card
         a user can act on right now. It gets shadow-card at rest as a
         visual emphasis cue that scales with future multi-candidate
         scenarios (Sprint 4+: when an area unlocks, the next candidate
         in the sequence inherits this treatment automatically). */
      :host([status='locked-unlockable']) la-panel::part(panel) {
        box-shadow: var(--la-shadow-card);
      }
      /* Hover: unlocked lifts to shadow-sm; locked-unlockable lifts
         further (already elevated at rest) to shadow-md. */
      :host([status='unlocked']:hover) la-panel::part(panel) {
        box-shadow: var(--la-shadow-sm);
        border-color: var(--la-color-border);
      }
      :host([status='locked-unlockable']:hover) la-panel::part(panel) {
        box-shadow: var(--la-shadow-md);
        border-color: var(--la-color-border);
      }
      .illustration {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--la-space-md);
      }
      .illustration img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        user-select: none;
        -webkit-user-drag: none;
      }
      /* Locked-not-unlockable: desaturate (defensive — base art is already
         monochrome) and multiply-blend so the white halo around the building
         dissolves into the card's grey surface. */
      :host([status='locked-not-unlockable']) .illustration img {
        filter: grayscale(1);
        mix-blend-mode: multiply;
      }
      .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .title {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        min-width: 0;
      }
      .subtitle {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-secondary);
        margin-top: var(--la-space-sm);
        margin-bottom: var(--la-space-sm);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .count-row {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        margin-top: var(--la-space-sm);
        font-size: var(--la-font-size-base);
      }
      .count-urgent {
        color: var(--la-color-urgent-text);
        font-weight: var(--la-font-weight-medium);
      }
      .count-sep {
        color: var(--la-color-text-muted);
      }
      .count-proactive {
        color: var(--la-color-text-muted);
      }
      .all-good {
        display: flex;
        align-items: center;
        gap: var(--la-space-xs);
        font-size: var(--la-font-size-md);
        color: var(--la-color-resolved);
        margin-top: var(--la-space-sm);
      }
      .cta {
        margin-top: var(--la-space-sm);
      }
      .dependency-list {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-xs);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    `,
  ];
  __decorate$e([
      n()
  ], exports.LaLegalAreaWidget.prototype, "area", void 0);
  __decorate$e([
      n()
  ], exports.LaLegalAreaWidget.prototype, "description", void 0);
  __decorate$e([
      n()
  ], exports.LaLegalAreaWidget.prototype, "illustration", void 0);
  __decorate$e([
      n({ reflect: true })
  ], exports.LaLegalAreaWidget.prototype, "status", void 0);
  __decorate$e([
      n({ type: Number })
  ], exports.LaLegalAreaWidget.prototype, "urgent", void 0);
  __decorate$e([
      n({ type: Number })
  ], exports.LaLegalAreaWidget.prototype, "proactive", void 0);
  __decorate$e([
      n({ type: Array })
  ], exports.LaLegalAreaWidget.prototype, "dependencies", void 0);
  __decorate$e([
      n({ attribute: 'next-level-label' })
  ], exports.LaLegalAreaWidget.prototype, "nextLevelLabel", void 0);
  exports.LaLegalAreaWidget = __decorate$e([
      t('la-legal-area-widget')
  ], exports.LaLegalAreaWidget);

  var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDdReadiness = class LaDdReadiness extends i$2 {
      constructor() {
          super(...arguments);
          this.level = 'ready';
          this.remaining = 0;
      }
      render() {
          const dotColor = this.level === 'ready'
              ? 'green'
              : this.level === 'nearly-ready'
                  ? 'yellow'
                  : 'red';
          const statusClass = this.level === 'ready'
              ? 'ready'
              : this.level === 'nearly-ready'
                  ? 'nearly'
                  : 'issues';
          const statusLabel = this.level === 'ready'
              ? 'Ready'
              : this.level === 'nearly-ready'
                  ? 'Nearly ready'
                  : 'Issues to resolve';
          return b `
      <la-panel>
        <div class="title">DD Readiness</div>
        <div class="status-row">
          <span class="dot dot--${dotColor}"></span>
          <span class="status-text ${statusClass}">${statusLabel}</span>
        </div>
        ${this.level === 'ready'
            ? b `<div class="detail">
              Your company is due diligence ready.
            </div>`
            : A}
        ${this.level !== 'ready'
            ? b `
              <div class="detail">${this.remaining} items remaining</div>
              <la-button
                variant="secondary"
                size="sm"
                @click=${() => this.dispatchEvent(new CustomEvent('la-view-fundraising', { bubbles: true, composed: true }))}
                >View in Fundraising</la-button
              >
            `
            : A}
      </la-panel>
    `;
      }
  };
  exports.LaDdReadiness.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .title {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
      }
      .status-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
      }
      .dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .dot--red { background: var(--la-color-urgent); }
      .dot--yellow { background: var(--la-color-proactive); }
      .dot--green { background: var(--la-color-resolved); }
      .status-text {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
      }
      .status-text.ready {
        color: var(--la-color-resolved);
      }
      .status-text.nearly {
        color: var(--la-color-proactive-text);
      }
      .status-text.issues {
        color: var(--la-color-urgent-text);
      }
      .detail {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-secondary);
        margin-top: 6px;
      }
      la-button {
        margin-top: 8px;
      }
    `,
  ];
  __decorate$d([
      n()
  ], exports.LaDdReadiness.prototype, "level", void 0);
  __decorate$d([
      n({ type: Number })
  ], exports.LaDdReadiness.prototype, "remaining", void 0);
  exports.LaDdReadiness = __decorate$d([
      t('la-dd-readiness')
  ], exports.LaDdReadiness);

  var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaUpcomingDeadlines = class LaUpcomingDeadlines extends i$2 {
      constructor() {
          super(...arguments);
          this.deadlines = [];
      }
      render() {
          if (this.deadlines.length === 0)
              return A;
          return b `
      <la-panel>
        <div class="title">Upcoming Deadlines</div>
        <div class="list">
          ${this.deadlines.map((d) => b `
              <div class="item">
                <div class="item-content">
                  <div class="item-title">${d.title}</div>
                  <div class="item-area">${d.area}</div>
                </div>
                <span class="date-tag">${d.date}</span>
              </div>
            `)}
        </div>
      </la-panel>
    `;
      }
  };
  exports.LaUpcomingDeadlines.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      .title {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
      }
      .list {
        margin-top: 8px;
      }
      .item {
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--la-color-border-light);
        font-size: var(--la-font-size-base);
      }
      .item:last-child {
        border-bottom: none;
      }
      .item-content {
        flex: 1;
      }
      .item-title {
        font-weight: var(--la-font-weight-medium);
      }
      .item-area {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
      }
      .date-tag {
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-urgent-text);
        background: var(--la-color-urgent-bg);
        padding: 2px 6px;
        border-radius: var(--la-radius-sm);
        white-space: nowrap;
        margin-left: 8px;
      }
    `,
  ];
  __decorate$c([
      n({ type: Array })
  ], exports.LaUpcomingDeadlines.prototype, "deadlines", void 0);
  exports.LaUpcomingDeadlines = __decorate$c([
      t('la-upcoming-deadlines')
  ], exports.LaUpcomingDeadlines);

  var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-journey-steps
   *
   * A sequential progress guide for a multi-step founder journey.
   * Each step is either done (green check), active (dark filled, description
   * expanded), or pending (grey bordered, label only). A connector line runs
   * between indicators to convey order.
   *
   * Usage:
   *   <la-journey-steps
   *     heading="Get raise-ready"
   *     subtitle="Complete the following to get the most from Fundraising."
   *     .steps=${[...]}
   *   ></la-journey-steps>
   *
   * Clicking an active or done step dispatches `la-step-click` (bubbles, composed)
   * with `{ index: number, step: StepItem }`.
   */
  exports.LaJourneySteps = class LaJourneySteps extends i$2 {
      constructor() {
          super(...arguments);
          this.heading = '';
          this.subtitle = '';
          this.steps = [];
      }
      render() {
          return b `
      ${iconStyles}
      <div class="container">
        ${this.heading
            ? b `<div class="heading">${this.heading}</div>`
            : A}
        ${this.subtitle
            ? b `<div class="subtitle">${this.subtitle}</div>`
            : A}
        <div class="steps">
          ${this.steps.map((step, i) => this._renderStep(step, i))}
        </div>
      </div>
    `;
      }
      _renderStep(step, index) {
          const isLast = index === this.steps.length - 1;
          const s = step.status;
          const interactive = s === 'active' || s === 'done';
          return b `
      <div
        class="step step--${s} ${interactive ? 'step--interactive' : ''}"
        role=${interactive ? 'button' : A}
        tabindex=${interactive ? '0' : A}
        @click=${interactive ? () => this._onClick(step, index) : A}
        @keydown=${interactive
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ')
                    this._onClick(step, index);
            }
            : A}
      >
        <div class="step-track">
          <div class="step-indicator step-indicator--${s}">
            ${s === 'done'
            ? b `<i class="ph-bold ph-check" style="font-size:9px;"></i>`
            : String(index + 1)}
          </div>
          ${!isLast ? b `<div class="step-line"></div>` : A}
        </div>
        <div class="step-body">
          <div class="step-label">${step.label}</div>
          ${step.description && s === 'active'
            ? b `<div class="step-desc">${step.description}</div>`
            : A}
        </div>
      </div>
    `;
      }
      _onClick(step, index) {
          this.dispatchEvent(new CustomEvent('la-step-click', {
              detail: { index, step },
              bubbles: true,
              composed: true,
          }));
      }
  };
  exports.LaJourneySteps.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      .container {
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl2, 16px);
        padding: var(--la-space-xl) 0 var(--la-space-lg);
        overflow: hidden;
      }

      .heading {
        padding: 0 var(--la-space-lg) var(--la-space-sm);
        font-size: var(--la-font-size-xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.3;
        letter-spacing: -0.2px;
      }

      .subtitle {
        padding: 0 var(--la-space-lg) var(--la-space-lg);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        line-height: 1.5;
      }

      .steps {
        display: flex;
        flex-direction: column;
        padding: 0 var(--la-space-sm);
      }

      /* ── Step row ── */
      .step {
        display: flex;
        gap: var(--la-space-md);
        padding: var(--la-space-xs) var(--la-space-sm);
        border-radius: var(--la-radius-md);
        cursor: default;
        transition: background var(--dur-fast) var(--ease);
      }

      .step--interactive {
        cursor: pointer;
      }

      .step--interactive:hover,
      .step--interactive:focus-within {
        background: var(--la-color-bg-active);
      }

      .step--interactive:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }

      /* ── Left track: indicator + connector line ── */
      .step-track {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20px;
        flex-shrink: 0;
      }

      .step-indicator {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: var(--la-font-weight-semibold);
        line-height: 1;
        transition:
          background var(--dur-fast) var(--ease),
          border-color var(--dur-fast) var(--ease),
          color var(--dur-fast) var(--ease);
      }

      /* Done — green filled */
      .step-indicator--done {
        background: var(--la-color-success);
        color: var(--la-color-success-fg);
      }

      /* Active — dark filled, inverted text */
      .step-indicator--active {
        background: var(--la-color-text);
        color: var(--la-color-bg);
      }

      /* Pending — bordered, muted number */
      .step-indicator--pending {
        background: transparent;
        border: 1px solid var(--la-color-border);
        color: var(--la-color-text-muted);
      }

      /* Vertical connector between steps */
      .step-line {
        width: 1px;
        flex: 1;
        min-height: 16px;
        background: var(--la-color-border-light);
        margin: 4px 0;
        border-radius: 1px;
      }

      /* Colour the line green below a completed step */
      .step--done .step-line {
        background: var(--la-color-success);
        opacity: 0.25;
      }

      /* ── Right content ── */
      .step-body {
        flex: 1;
        min-width: 0;
        padding-top: 1px;
        padding-bottom: var(--la-space-lg);
      }

      .step-label {
        font-size: var(--la-font-size-base);
        line-height: 1.4;
        transition: color var(--dur-fast) var(--ease),
                    font-weight var(--dur-fast) var(--ease);
      }

      .step--done .step-label {
        color: var(--la-color-text-muted);
      }

      .step--active .step-label {
        color: var(--la-color-text);
        font-weight: var(--la-font-weight-medium);
      }

      .step--pending .step-label {
        color: var(--la-color-text-muted);
      }

      /* Description */
      .step-desc {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-2xs);
        line-height: 1.6;
      }

      .step--pending .step-desc {
        color: var(--la-color-text-faint);
      }

      .step--done .step-desc {
        color: var(--la-color-text-faint);
      }
    `,
  ];
  __decorate$b([
      n()
  ], exports.LaJourneySteps.prototype, "heading", void 0);
  __decorate$b([
      n()
  ], exports.LaJourneySteps.prototype, "subtitle", void 0);
  __decorate$b([
      n({ type: Array })
  ], exports.LaJourneySteps.prototype, "steps", void 0);
  exports.LaJourneySteps = __decorate$b([
      t('la-journey-steps')
  ], exports.LaJourneySteps);

  var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaWelcomeBanner = class LaWelcomeBanner extends i$2 {
      constructor() {
          super(...arguments);
          this.dismissed = false;
          this.heading = 'Welcome to LawAdvisorAI';
          this.description = "Let's start by reviewing your corporate governance. This takes about 10 minutes and gives you immediate insights into your company's legal health.";
          this.ctaLabel = 'Start with Corporate Governance';
      }
      render() {
          if (this.dismissed)
              return A;
          return b `
      <div class="welcome">
        <div class="heading">${this.heading}</div>
        <div class="desc">${this.description}</div>
        ${this.ctaLabel
            ? b `<la-button
              variant="primary"
              @click=${() => this.dispatchEvent(new CustomEvent('la-welcome-cta', { bubbles: true, composed: true }))}
              >${this.ctaLabel}</la-button
            >`
            : A}
      </div>
    `;
      }
  };
  exports.LaWelcomeBanner.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }
      .welcome {
        /* Plain white surface — no border, no shadow. The contrast
           against the page background is the only chrome; visual weight
           comes from the heading typography and the widget grid below.
           Generous padding gives the banner room to breathe without
           competing for attention. */
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl);
        padding: var(--la-space-2xl);
      }
      .heading {
        font-size: var(--la-font-size-2xl);
        font-weight: var(--la-font-weight-semibold);
        margin-bottom: var(--la-space-2xs);
      }
      .desc {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        max-width: 700px;
        /* Preserve \n in the description string as line breaks so consumers
           can split the body into separate paragraphs without needing
           multiple props. */
        white-space: pre-line;
      }
      /* Spacing only when followed by a CTA — when ctaLabel is empty
         the banner becomes informational and the description is the
         last element; no trailing margin needed. */
      .desc:not(:last-child) {
        margin-bottom: var(--la-space-md);
      }
    `,
  ];
  __decorate$a([
      n({ type: Boolean })
  ], exports.LaWelcomeBanner.prototype, "dismissed", void 0);
  __decorate$a([
      n()
  ], exports.LaWelcomeBanner.prototype, "heading", void 0);
  __decorate$a([
      n()
  ], exports.LaWelcomeBanner.prototype, "description", void 0);
  __decorate$a([
      n()
  ], exports.LaWelcomeBanner.prototype, "ctaLabel", void 0);
  exports.LaWelcomeBanner = __decorate$a([
      t('la-welcome-banner')
  ], exports.LaWelcomeBanner);

  var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaInsightModal = class LaInsightModal extends i$2 {
      constructor() {
          super(...arguments);
          /** Whether the modal is visible */
          this.open = false;
          /** Severity of the insight */
          this.severity = 'urgent';
          /** Source type — determines type tag label */
          this.sourceType = '';
          /** Main headline */
          this.headline = '';
          /** Why this is an issue (explanation / reason) */
          this.reason = '';
          /** What to do about it */
          this.guidance = '';
          /** Whether the insight has been resolved */
          this.resolved = false;
          /** Documents linked to this insight */
          this.documents = [];
          /** Resolution action the user takes inside the modal. `confirm` = synchronous "Mark Resolved". `upload` = inline upload zone (document_issue / missing_document insights). */
          this.actionType = 'confirm';
          /** Upload sub-state — only consulted when `actionType` is `upload`. `idle` shows the drop zone; `processing` shows the uploading/verifying indicator; `error` shows verification error + re-upload. */
          this.uploadState = 'idle';
          /** Specific verification error shown when `uploadState` is `error` */
          this.verificationError = '';
          this._resolving = false;
          this._activeTab = 0;
          this._resolvedTabs = new Set();
          this._resolvingSubItemId = null;
      }
      _close() {
          this.open = false;
          // Delay until the close animation finishes so consumers resetting
          // resolved/state don't flip content while the modal is still visible.
          setTimeout(() => {
              this.dispatchEvent(new CustomEvent('la-insight-close', { bubbles: true, composed: true }));
          }, 250);
      }
      _onBackdropClick(e) {
          if (e.target === e.currentTarget)
              this._close();
      }
      _handleResolve() {
          this._resolving = true;
          setTimeout(() => {
              this.resolved = true;
              this._resolving = false;
              this.dispatchEvent(new CustomEvent('la-insight-resolved', {
                  detail: { headline: this.headline },
                  bubbles: true,
                  composed: true,
              }));
          }, 600);
      }
      _handleUploadRequest(source) {
          const activeSubItem = this._isGrouped && this.subItems ? this.subItems[this._activeTab] : undefined;
          this.dispatchEvent(new CustomEvent('la-insight-upload', {
              detail: { source, headline: this.headline, subItemId: activeSubItem?.id },
              bubbles: true,
              composed: true,
          }));
      }
      _handleRelatedNavigate(id) {
          this.dispatchEvent(new CustomEvent('la-insight-navigate', {
              detail: { id },
              bubbles: true,
              composed: true,
          }));
      }
      _onViewDocument() {
          if (!this.sourceDocument)
              return;
          this.dispatchEvent(new CustomEvent('la-insight-navigate', {
              detail: { id: this.sourceDocument.id },
              bubbles: true,
              composed: true,
          }));
      }
      get _isGrouped() {
          return !!(this.subItems && this.subItems.length > 0);
      }
      _handleResolveSubItem(item) {
          this._resolvingSubItemId = item.id;
          setTimeout(() => {
              const next = new Set(this._resolvedTabs);
              next.add(item.id);
              this._resolvedTabs = next;
              this._resolvingSubItemId = null;
              this.dispatchEvent(new CustomEvent('la-subitem-resolved', {
                  detail: { subItemId: item.id },
                  bubbles: true,
                  composed: true,
              }));
              if (this.subItems && next.size >= this.subItems.length) {
                  this.resolved = true;
                  this.dispatchEvent(new CustomEvent('la-insight-resolved', {
                      detail: { headline: this.headline },
                      bubbles: true,
                      composed: true,
                  }));
              }
          }, 600);
      }
      _renderEntityTabs() {
          if (!this.subItems)
              return A;
          return b `
      <div class="entity-tabs" role="tablist">
        ${this.subItems.map((item, i) => {
            const isResolved = this._resolvedTabs.has(item.id);
            return b `
            <button
              class="entity-tab"
              role="tab"
              aria-selected=${i === this._activeTab ? 'true' : 'false'}
              @click=${() => { this._activeTab = i; }}
            >
              ${item.entity.name}
              ${isResolved
                ? b `<i class="ph-fill ph-check-circle tab-check" aria-label="Resolved"></i>`
                : A}
            </button>
          `;
        })}
      </div>
    `;
      }
      _renderTabPanel(item) {
          const isResolved = this._resolvedTabs.has(item.id);
          if (isResolved) {
              return b `
        <la-alert variant="success">
          <i slot="icon" class="ph-fill ph-check-circle"></i>
          <span>Resolved for ${item.entity.name}.</span>
        </la-alert>
      `;
          }
          return b `
      <div>
        ${item.dates && item.dates.length > 0 ? b `
          <div class="section-label">Key dates</div>
          <div class="meta" style="margin-top: var(--la-space-xs)">
            ${item.dates.map(d => {
            const isDeadline = /deadline|due/i.test(d.label);
            return b `<la-badge variant=${isDeadline ? 'danger' : 'neutral'} appearance="ghost">
                <i slot="icon" class="ph ph-calendar"></i>${d.label}: ${d.date}
              </la-badge>`;
        })}
          </div>
        ` : A}
        ${this.actionType === 'upload'
            ? b `<div style="margin-top: var(--la-space-md)">${this._renderUploadSection()}</div>`
            : A}
      </div>
    `;
      }
      _severityLabel() {
          if (this.resolved)
              return 'Resolved';
          return this.severity === 'urgent' ? 'Urgent' : 'Proactive';
      }
      _entityIcon() {
          return this.entity?.type === 'person' ? 'ph-user' : 'ph-building';
      }
      render() {
          const typeLabel = this.sourceType === 'best_practice' ? 'Best practice' : this.sourceType === 'legal' ? 'Legal' : '';
          // In grouped mode, entity and dates live in the tab panel, not the meta row
          const showEntityInMeta = !this._isGrouped && !!this.entity;
          const showDatesInMeta = !this._isGrouped && !!(this.dates && this.dates.length > 0);
          const hasMeta = !!(typeLabel || showEntityInMeta || showDatesInMeta);
          const hasRelated = !!(this.relatedInsights && this.relatedInsights.length > 0);
          const activeSubItem = this._isGrouped && this.subItems ? this.subItems[this._activeTab] : undefined;
          return b `
      ${iconStyles}
      <div class="backdrop" @click=${this._onBackdropClick}>
        <div class="panel">
          <div class="header">
            <div class="header-main">
              <div class="severity-label">${this._severityLabel()}</div>
              <div class="headline">${this.headline}</div>
            </div>
            <la-icon-button label="Close" @click=${this._close}><i class="ph ph-x"></i></la-icon-button>
          </div>

          ${this._isGrouped ? this._renderEntityTabs() : A}

          <div class="body">
            ${hasMeta ? b `
              <div class="meta">
                ${typeLabel ? b `<la-badge variant="neutral" appearance="ghost">${typeLabel}</la-badge>` : A}
                ${showEntityInMeta ? b `
                  <la-badge variant="neutral" appearance="ghost">
                    <i slot="icon" class="ph ${this._entityIcon()}"></i>${this.entity.name}
                  </la-badge>` : A}
                ${showDatesInMeta ? this.dates.map(d => {
            const isDeadline = /deadline|due/i.test(d.label);
            return b `<la-badge variant=${isDeadline ? 'danger' : 'neutral'} appearance="ghost">
                    <i slot="icon" class="ph ph-calendar"></i>${d.label}: ${d.date}
                  </la-badge>`;
        }) : A}
              </div>
            ` : A}

            ${this.reason ? b `
              <div>
                <div class="section-label">Why this matters</div>
                <div class="reason-text">${this.reason}</div>
              </div>
            ` : A}

            ${this.guidance ? b `
              <div>
                <div class="section-label">What to do</div>
                <div class="guidance-text">${this.guidance}</div>
              </div>
            ` : A}

            ${this.sourceDocument ? b `
              <div>
                <div class="section-label">Source document</div>
                <div class="source-doc">
                  <span class="source-doc-name">
                    <i class="ph ph-file-text" aria-hidden="true"></i>
                    ${this.sourceDocument.name}
                  </span>
                  <la-button variant="ghost" size="sm" @click=${this._onViewDocument}>View Document</la-button>
                </div>
              </div>
            ` : A}

            ${this.documents.length > 0 ? b `
              <div>
                <div class="section-label">Linked documents</div>
                <div class="doc-list">
                  ${this.documents.map(doc => {
            const isMissing = doc.status === 'missing';
            const inErrorFlow = isMissing &&
                this.actionType === 'upload' &&
                this.uploadState === 'error';
            return b `
                      <la-document-item
                        name=${doc.name}
                        status=${isMissing ? 'failed' : doc.status}
                        error=${isMissing ? 'Missing' : ''}
                      >
                        ${inErrorFlow
                ? b `<la-button
                              slot="actions"
                              variant="secondary"
                              size="sm"
                              @click=${() => this._handleUploadRequest('local')}
                            >
                              <i slot="icon-left" class="ph ph-upload-simple"></i>
                              Re-Upload
                            </la-button>`
                : A}
                      </la-document-item>
                    `;
        })}
                </div>
              </div>
            ` : A}

            ${hasRelated ? b `
              <div>
                <div class="section-label">This document also has</div>
                <div class="related-section">
                  ${this.relatedInsights.map(r => b `
                    <span
                      class="related-link"
                      role="button"
                      tabindex="0"
                      @click=${() => this._handleRelatedNavigate(r.id)}
                      @keydown=${(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this._handleRelatedNavigate(r.id);
            }
        }}
                    >${r.headline}${r.legalArea ? b `<span class="related-area">${r.legalArea}</span>` : A}</span>
                  `)}
                  ${this.actionType === 'upload' ? b `
                    <p class="cascade-note">Uploading a corrected document will re-evaluate all issues above.</p>
                  ` : A}
                </div>
              </div>
            ` : A}

            ${this._isGrouped && activeSubItem && !this.resolved
            ? this._renderTabPanel(activeSubItem)
            : A}

            ${!this._isGrouped && this.actionType === 'upload' && !this.resolved
            ? this._renderUploadSection()
            : A}
          </div>

          ${this._renderFooter()}
        </div>
      </div>
    `;
      }
      _renderFooter() {
          if (this.resolved) {
              return b `
        <div class="resolved-footer">
          <la-alert variant="success">
            <i slot="icon" class="ph-fill ph-check-circle"></i>
            <span>This insight has been resolved. Well done.</span>
          </la-alert>
        </div>
      `;
          }
          if (this._isGrouped && this.subItems) {
              const activeItem = this.subItems[this._activeTab];
              const isActiveResolved = activeItem && this._resolvedTabs.has(activeItem.id);
              const isResolving = activeItem ? this._resolvingSubItemId === activeItem.id : false;
              return b `
        <div class="footer">
          <div class="footer-left">
            <la-button variant="ghost" @click=${this._close}>Dismiss</la-button>
          </div>
          ${activeItem && !isActiveResolved ? b `
            <div class="footer-right">
              <la-button variant="secondary" @click=${() => this._handleResolveSubItem(activeItem)} ?loading=${isResolving} loading-label="Resolving…">Mark Resolved</la-button>
            </div>
          ` : A}
        </div>
      `;
          }
          return b `
      <div class="footer">
        <div class="footer-left">
          <la-button variant="ghost" @click=${this._close}>Dismiss</la-button>
        </div>
        <div class="footer-right">
          ${this._renderFooterPrimary()}
        </div>
      </div>
    `;
      }
      _renderFooterPrimary() {
          return b `
      <la-button variant="secondary" @click=${this._handleResolve} ?loading=${this._resolving} loading-label="Resolving…">
        Mark Resolved
      </la-button>
    `;
      }
      _renderUploadSection() {
          const upload = b `<la-upload
      prompt="Or drag a file here"
      hint="PDF, DOCX up to 50 MB"
      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ?processing=${this.uploadState === 'processing'}
      @la-upload-drive=${() => this._handleUploadRequest('drive')}
      @la-change=${() => this._handleUploadRequest('local')}
    ></la-upload>`;
          if (this.uploadState === 'error') {
              return b `
        <p class="upload-hint">Upload the latest version of this document to resolve this insight.</p>
        <la-alert variant="danger">
          <i slot="icon" class="ph-fill ph-warning-circle"></i>
          ${this.verificationError || 'Verification failed. Please re-upload.'}
        </la-alert>
        ${upload}
      `;
          }
          return b `
      <p class="upload-hint">Upload the latest version of this document to resolve this insight.</p>
      ${upload}
    `;
      }
  };
  exports.LaInsightModal.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      /* ── Backdrop ───────────────────────────────────── */

      .backdrop {
        position: fixed;
        inset: 0;
        background: var(--la-color-scrim);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: var(--la-space-xl);
        box-sizing: border-box;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity var(--dur-modal) var(--ease-out),
                    visibility 0s linear var(--dur-modal);
      }
      :host([open]) .backdrop {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: opacity var(--dur-modal) var(--ease-out),
                    visibility 0s linear 0s;
      }

      /* ── Panel ──────────────────────────────────────── */

      .panel {
        background: var(--la-color-bg);
        border-radius: var(--la-radius-xl);
        width: 100%;
        max-width: 600px;
        max-height: 88vh;
        overflow-y: auto;
        box-shadow: var(--la-shadow-lg);
        display: flex;
        flex-direction: column;
        transform: scale(var(--scale-enter));
        transition: transform var(--dur-modal) var(--ease-out);
      }
      :host([open]) .panel {
        transform: scale(1);
      }
      @media (prefers-reduced-motion: reduce) {
        .backdrop,
        :host([open]) .backdrop,
        .panel {
          transition: none;
        }
      }

      /* ── Header ─────────────────────────────────────── */

      .header {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-md);
        padding: var(--la-space-xl) var(--la-space-xl) 0;
      }

      .header-main {
        flex: 1;
        min-width: 0;
      }

      .severity-label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        margin-bottom: var(--la-space-2xs);
      }

      :host([severity='urgent']) .severity-label {
        color: var(--la-color-urgent-text);
      }
      :host([severity='proactive']) .severity-label {
        color: var(--la-color-proactive-text);
      }

      .headline {
        font-size: var(--la-font-size-xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.3;
        letter-spacing: -0.2px;
      }


      /* ── Body ───────────────────────────────────────── */

      .body {
        padding: var(--la-space-lg) var(--la-space-xl);
        display: flex;
        flex-direction: column;
        gap: 20px; /* Gate 8: 20px between --la-space-lg (16) and --la-space-xl (24) — visual tuning constant */
      }

      /* Meta row */
      .meta {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        align-items: center;
      }

      /* Reason section */
      .section-label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text-muted);
        margin-bottom: var(--la-space-2xs);
      }

      .reason-text {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: 1.6;
      }

      .guidance-text {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: 1.6;
      }

      /* Documents */
      .doc-list {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
      }

      /* Source document */
      .source-doc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-sm);
        padding: var(--la-space-sm) var(--la-space-md);
        background: var(--la-color-bg-muted);
        border-radius: var(--la-radius-md);
      }

      .source-doc-name {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        display: flex;
        align-items: center;
        gap: var(--la-space-xs);
      }

      /* Related insights */
      .related-section {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xs);
      }

      .related-link {
        font-size: var(--la-font-size-base);
        color: var(--la-color-primary);
        cursor: pointer;
        padding: var(--la-space-3xs) 0;
        display: block;
      }

      .related-link:hover {
        text-decoration: underline;
      }

      .related-area {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-muted);
        margin-left: var(--la-space-xs);
      }

      .cascade-note {
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-muted);
        margin-top: var(--la-space-xs);
      }

      /* Divider */
      .divider {
        height: 1px;
        background: var(--la-color-border-light);
        margin: 0 -24px;
      }

      /* ── Entity tabs (grouped insights) ─────────── */

      .entity-tabs {
        display: flex;
        gap: 0;
        padding: var(--la-space-md) var(--la-space-xl) 0;
        border-bottom: 1px solid var(--la-color-border-light);
        overflow-x: auto;
        flex-shrink: 0;
      }

      .entity-tab {
        padding: var(--la-space-xs) var(--la-space-md);
        border-radius: var(--la-radius-md) var(--la-radius-md) 0 0;
        cursor: pointer;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        border: 1px solid transparent;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: var(--la-space-xs);
        white-space: nowrap;
        background: none;
        font-family: inherit;
        line-height: 1;
        margin-bottom: -1px;
        transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
      }

      .entity-tab[aria-selected='true'] {
        background: var(--la-color-bg);
        border-color: var(--la-color-border-light);
        color: var(--la-color-text);
        font-weight: var(--la-font-weight-medium);
      }

      .entity-tab:hover:not([aria-selected='true']) {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .entity-tab:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }

      .tab-check {
        color: var(--la-color-resolved-text);
      }

      /* ── Footer ─────────────────────────────────────── */

      .footer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--la-space-lg) var(--la-space-xl);
        gap: var(--la-space-md);
        flex-shrink: 0;
      }
      .footer::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        height: var(--la-space-2xl);
        background: linear-gradient(to bottom, transparent, var(--la-color-bg));
        pointer-events: none;
      }

      .footer-left {
        display: flex;
        gap: var(--la-space-sm);
      }

      .footer-right {
        display: flex;
        gap: var(--la-space-sm);
      }

      /* ── Upload section ─────────────────────────────────── */

      .upload-hint {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
        line-height: var(--la-line-height);
        margin-bottom: var(--la-space-md);
      }

      /* ── Resolved footer (replaces footer when resolved) ── */

      .resolved-footer {
        position: relative;
        flex-shrink: 0;
        padding: var(--la-space-lg) var(--la-space-xl);
      }
      .resolved-footer::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        height: var(--la-space-2xl);
        background: linear-gradient(to bottom, transparent, var(--la-color-bg));
        pointer-events: none;
      }
      .resolved-footer la-alert::part(container) {
        align-items: center;
      }
      .resolved-inline {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-md);
        flex-wrap: wrap;
        width: 100%;
      }


    `,
  ];
  __decorate$9([
      n({ type: Boolean, reflect: true })
  ], exports.LaInsightModal.prototype, "open", void 0);
  __decorate$9([
      n({ reflect: true })
  ], exports.LaInsightModal.prototype, "severity", void 0);
  __decorate$9([
      n({ attribute: 'source-type' })
  ], exports.LaInsightModal.prototype, "sourceType", void 0);
  __decorate$9([
      n()
  ], exports.LaInsightModal.prototype, "headline", void 0);
  __decorate$9([
      n()
  ], exports.LaInsightModal.prototype, "reason", void 0);
  __decorate$9([
      n()
  ], exports.LaInsightModal.prototype, "guidance", void 0);
  __decorate$9([
      n({ type: Object })
  ], exports.LaInsightModal.prototype, "entity", void 0);
  __decorate$9([
      n({ type: Array })
  ], exports.LaInsightModal.prototype, "dates", void 0);
  __decorate$9([
      n({ type: Object })
  ], exports.LaInsightModal.prototype, "sourceDocument", void 0);
  __decorate$9([
      n({ type: Array })
  ], exports.LaInsightModal.prototype, "relatedInsights", void 0);
  __decorate$9([
      n({ type: Boolean, reflect: true })
  ], exports.LaInsightModal.prototype, "resolved", void 0);
  __decorate$9([
      n({ type: Array })
  ], exports.LaInsightModal.prototype, "documents", void 0);
  __decorate$9([
      n({ reflect: true, attribute: 'action-type' })
  ], exports.LaInsightModal.prototype, "actionType", void 0);
  __decorate$9([
      n({ reflect: true, attribute: 'upload-state' })
  ], exports.LaInsightModal.prototype, "uploadState", void 0);
  __decorate$9([
      n({ attribute: 'verification-error' })
  ], exports.LaInsightModal.prototype, "verificationError", void 0);
  __decorate$9([
      n({ type: Array })
  ], exports.LaInsightModal.prototype, "subItems", void 0);
  __decorate$9([
      r()
  ], exports.LaInsightModal.prototype, "_resolving", void 0);
  __decorate$9([
      r()
  ], exports.LaInsightModal.prototype, "_activeTab", void 0);
  __decorate$9([
      r()
  ], exports.LaInsightModal.prototype, "_resolvedTabs", void 0);
  __decorate$9([
      r()
  ], exports.LaInsightModal.prototype, "_resolvingSubItemId", void 0);
  exports.LaInsightModal = __decorate$9([
      t('la-insight-modal')
  ], exports.LaInsightModal);

  var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-investor-card — per-investor summary card for the data room investor list.
   *
   * Shows the investor's name, firm, a three-state access pill (Not Shared /
   * Active / Revoked), an optional last-activity line, and an unread-message
   * count. The whole card is a single click target — selecting it fires
   * `la-investor-view` so the host opens the per-investor detail. There is no
   * per-card action menu; investor actions live on the detail surface
   * (decision 70). Matches the approved investor list card in `11-investors.html`.
   *
   * @prop investorName - Investor name, shown as the card title
   * @prop firm         - Firm name, shown below the title
   * @prop status       - Lifecycle state; drives the access pill and revoked dimming
   * @prop lastActivity - Optional free-text activity summary
   * @prop unreadCount  - Unread messages from this investor; shows a badge when > 0
   *
   * @fires la-investor-view - Card clicked / activated; detail: { name }
   */
  exports.LaInvestorCard = class LaInvestorCard extends i$2 {
      constructor() {
          super(...arguments);
          this.investorName = '';
          this.firm = '';
          this.status = 'invited';
          this.lastActivity = '';
          this.unreadCount = 0;
      }
      /** Maps the lifecycle states onto the access pill. */
      _pill() {
          switch (this.status) {
              case 'invite-sent':
                  return b `<la-badge variant="warning" size="sm"><i class="ph-fill ph-paper-plane-tilt" slot="icon"></i>Invite Sent</la-badge>`;
              case 'accepted':
                  return b `<la-badge variant="success" size="sm"><i class="ph-fill ph-check-circle" slot="icon"></i>Accepted</la-badge>`;
              case 'inbound':
                  return b `<la-badge variant="success" size="sm"><i class="ph-fill ph-tray-arrow-down" slot="icon"></i>Shared with you</la-badge>`;
              case 'access-revoked':
                  return b `<la-badge variant="warning" size="sm"><i class="ph-fill ph-prohibit" slot="icon"></i>Revoked</la-badge>`;
              case 'active':
                  return b `<la-badge variant="success" size="sm"><i class="ph-fill ph-check-circle" slot="icon"></i>Active</la-badge>`;
              default: // draft, invited
                  return b `<la-badge variant="neutral" size="sm">Not Shared</la-badge>`;
          }
      }
      _view() {
          this.dispatchEvent(new CustomEvent('la-investor-view', {
              detail: { name: this.investorName },
              bubbles: true,
              composed: true,
          }));
      }
      _onKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._view();
          }
      }
      render() {
          return b `
      ${iconStyles}
      <button
        class="card"
        type="button"
        aria-label="View ${this.investorName}"
        @click=${this._view}
        @keydown=${this._onKeyDown}
      >
        <div class="body">
          <div class="top-row">
            <span class="name">${this.investorName}</span>
            ${this._pill()}
          </div>
          ${this.lastActivity
            ? b `<span class="activity">${this.lastActivity}</span>`
            : A}
        </div>
        ${this.unreadCount > 0
            ? b `<span class="unread" aria-label="${this.unreadCount} unread messages">${this.unreadCount}</span>`
            : A}
      </button>
    `;
      }
  };
  exports.LaInvestorCard.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
      }

      .card {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-sm);
        background: var(--la-color-bg);
        border: 1px solid var(--la-color-border-light);
        border-radius: var(--la-radius-lg);
        padding: var(--la-space-md) var(--la-space-lg);
        cursor: pointer;
        /* button reset */
        font: inherit;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        transition: border-color var(--dur-fast) var(--ease),
          box-shadow var(--dur-fast) var(--ease);
      }

      .card:hover {
        border-color: var(--la-color-border);
        box-shadow: var(--la-shadow-sm);
      }

      .card:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
      }

      :host([status='access-revoked']) .card {
        background: var(--la-color-bg-subtle);
        opacity: 0.7;
      }

      .body {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      /* Top row: name left, status badge right */
      .top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-sm);
      }

      .name {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
        line-height: var(--la-line-height);
      }

      .activity {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Unread badge — primary pill, right-aligned */
      .unread {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 18px;
        height: 18px;
        padding: 0 var(--la-space-2xs);
        border-radius: var(--la-radius-pill);
        background: var(--la-color-primary);
        color: var(--la-color-primary-fg);
        font-size: var(--la-font-size-xs);
        font-weight: var(--la-font-weight-semibold);
        line-height: 1;
      }

      @media (prefers-reduced-motion: reduce) {
        .card { transition: none; }
      }
    `,
  ];
  __decorate$8([
      n({ attribute: 'investor-name' })
  ], exports.LaInvestorCard.prototype, "investorName", void 0);
  __decorate$8([
      n()
  ], exports.LaInvestorCard.prototype, "firm", void 0);
  __decorate$8([
      n({ reflect: true })
  ], exports.LaInvestorCard.prototype, "status", void 0);
  __decorate$8([
      n({ attribute: 'last-activity' })
  ], exports.LaInvestorCard.prototype, "lastActivity", void 0);
  __decorate$8([
      n({ type: Number, attribute: 'unread-count' })
  ], exports.LaInvestorCard.prototype, "unreadCount", void 0);
  exports.LaInvestorCard = __decorate$8([
      t('la-investor-card')
  ], exports.LaInvestorCard);

  var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  // ── Component ────────────────────────────────────────────────
  /**
   * la-toast-stack
   *
   * Place once in your layout. Manages stacking, positioning, and auto-dismiss
   * for all active toasts. Use the exported `toast()` function to trigger
   * toasts programmatically from anywhere in the application.
   *
   * @fires la-toast-dismiss — when any toast closes; detail: { id: string }
   */
  exports.LaToastStack = class LaToastStack extends i$2 {
      constructor() {
          super(...arguments);
          /** Corner to anchor the stack */
          this.position = 'bottom-right';
          /** Maximum number of toasts visible in the stacked view */
          this.maxVisible = 3;
          this._items = [];
          this._exitingItems = [];
          this._hovered = false;
          this._topItemHeight = 88;
          this._timers = new Map();
      }
      // ── Public API ───────────────────────────────────────────
      /** Add a toast. Returns the generated id. */
      add(options) {
          const id = Math.random().toString(36).slice(2, 9);
          const item = {
              id,
              title: options.title,
              message: options.message ?? '',
              variant: options.variant ?? 'default',
              duration: options.duration ?? 3000,
          };
          this._items = [item, ...this._items];
          if (item.duration > 0) {
              const timer = setTimeout(() => this.dismiss(id), item.duration);
              this._timers.set(id, timer);
          }
          return id;
      }
      /** Dismiss a toast by id. */
      dismiss(id) {
          if (this._exitingItems.some(e => e.item.id === id))
              return;
          clearTimeout(this._timers.get(id));
          this._timers.delete(id);
          const idx = this._items.findIndex(i => i.id === id);
          if (idx === -1)
              return;
          const item = this._items[idx];
          // Capture visual position BEFORE removing from the active list.
          const exitStyle = this._itemStyle(idx);
          // Remove from active list immediately — remaining items shift via CSS transitions.
          this._items = this._items.filter(i => i.id !== id);
          const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          const finish = () => {
              this._exitingItems = this._exitingItems.filter(e => e.item.id !== id);
              this.dispatchEvent(new CustomEvent('la-toast-dismiss', {
                  bubbles: true,
                  composed: true,
                  detail: { id },
              }));
          };
          if (!reduced) {
              // Keep item visible at its last stack position while it animates out.
              this._exitingItems = [...this._exitingItems, { item, style: exitStyle }];
              setTimeout(finish, 200);
          }
          else {
              finish();
          }
      }
      // ── Lifecycle ────────────────────────────────────────────
      updated() {
          const firstItem = this.shadowRoot?.querySelector('.toast-item:first-child');
          if (firstItem && !this._topItemRO) {
              this._topItemRO = new ResizeObserver(([entry]) => {
                  const h = entry.contentRect.height;
                  if (h > 0)
                      this._topItemHeight = h;
              });
              this._topItemRO.observe(firstItem);
          }
          else if (!firstItem) {
              this._topItemRO?.disconnect();
              this._topItemRO = undefined;
          }
          const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (reduced)
              return;
          const isTop = this._isTop();
          // New toasts enter from the peek position (slightly behind), not from outside the stack.
          const peekY = isTop ? '10px' : '-10px';
          this.shadowRoot?.querySelectorAll('.toast-item:not(.toast-item--exiting):not([data-animated])').forEach(el => {
              el.dataset.animated = 'true';
              el.animate([
                  { opacity: '0.82', transform: `translateY(${peekY}) scaleX(0.96)` },
                  { opacity: '1', transform: 'translateY(0) scaleX(1)' },
              ], { duration: 250, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
          });
          this.shadowRoot?.querySelectorAll('.toast-item--exiting:not([data-exit-animated])').forEach(el => {
              el.dataset.exitAnimated = 'true';
              el.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.8)' }], { duration: 200, easing: 'ease-out', fill: 'forwards' });
          });
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this._topItemRO?.disconnect();
          this._timers.forEach(t => clearTimeout(t));
          this._timers.clear();
      }
      // ── Rendering ────────────────────────────────────────────
      _isTop() {
          return this.position === 'top-right' || this.position === 'top-left' || this.position === 'top-center';
      }
      _itemStyle(index) {
          const isTop = this._isTop();
          const STEP = this._topItemHeight + 8;
          if (this._hovered) {
              const offset = index * STEP;
              const dir = isTop ? offset : -offset;
              return `transform:translateY(${dir}px) scale(1);opacity:1;z-index:${10 - index};`;
          }
          const scale = 1 - index * 0.04;
          const peek = index * 10;
          const dir = isTop ? peek : -peek;
          const opacity = Math.max(0.5, 1 - index * 0.18);
          return `transform:translateY(${dir}px) scaleX(${scale});opacity:${opacity};z-index:${10 - index};`;
      }
      render() {
          const visible = this._items.slice(0, this.maxVisible);
          const hasContent = visible.length > 0 || this._exitingItems.length > 0;
          if (!hasContent)
              return A;
          const STEP = this._topItemHeight + 8;
          const stackH = this._hovered ? visible.length * STEP : this._topItemHeight;
          return b `
      <div
        class="stack"
        style="height:${stackH}px;"
        role="status"
        aria-live="polite"
        aria-label="Notifications"
        @mouseenter=${() => { this._hovered = true; }}
        @mouseleave=${() => { this._hovered = false; }}
      >
        ${visible.map((item, i$1) => i(item.id, b `
          <div class="toast-item" data-id=${item.id} style=${this._itemStyle(i$1)}>
            <la-toast
              open
              .title=${item.title}
              .message=${item.message}
              variant=${item.variant}
              duration="0"
              @dismiss=${() => this.dismiss(item.id)}
            ></la-toast>
          </div>
        `))}
        ${this._exitingItems.map(({ item, style: exitStyle }) => {
            return i('exit-' + item.id, b `
            <div
              class="toast-item toast-item--exiting"
              data-id=${item.id}
              style=${exitStyle}
            >
              <la-toast
                open
                .title=${item.title}
                .message=${item.message}
                variant=${item.variant}
                duration="0"
              ></la-toast>
            </div>
          `);
        })}
      </div>
    `;
      }
  };
  exports.LaToastStack.styles = [
      tokens,
      i$5 `
      :host {
        position: fixed;
        z-index: 9999;
        display: block;
        pointer-events: none;
        width: var(--la-toast-max-width);
      }

      :host([position="bottom-right"]),
      :host(:not([position])) {
        bottom: var(--la-space-xl);
        right:  var(--la-space-xl);
      }

      :host([position="bottom-left"]) {
        bottom: var(--la-space-xl);
        left:   var(--la-space-xl);
      }

      :host([position="top-right"]) {
        top:   var(--la-space-xl);
        right: var(--la-space-xl);
      }

      :host([position="top-left"]) {
        top:  var(--la-space-xl);
        left: var(--la-space-xl);
      }

      :host([position="bottom-center"]) {
        bottom: var(--la-space-xl);
        left:   50%;
        transform: translateX(-50%);
      }

      :host([position="top-center"]) {
        top:  var(--la-space-xl);
        left: 50%;
        transform: translateX(-50%);
      }

      .stack {
        position: relative;
        width: 100%;
        pointer-events: all;
        transition: height var(--dur-modal) var(--ease);
      }

      .toast-item {
        position: absolute;
        width: 100%;
        bottom: 0;
        transition:
          transform var(--dur-modal) var(--ease),
          opacity   var(--dur-modal) var(--ease);
        transform-origin: bottom center;
      }

      :host([position="top-right"]) .toast-item,
      :host([position="top-left"]) .toast-item,
      :host([position="top-center"]) .toast-item {
        bottom: auto;
        top: 0;
        transform-origin: top center;
      }

      .toast-item--exiting {
        pointer-events: none;
        transition: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .stack,
        .toast-item {
          transition: none;
        }
      }
    `,
  ];
  __decorate$7([
      n({ reflect: true })
  ], exports.LaToastStack.prototype, "position", void 0);
  __decorate$7([
      n({ type: Number, attribute: 'max-visible' })
  ], exports.LaToastStack.prototype, "maxVisible", void 0);
  __decorate$7([
      r()
  ], exports.LaToastStack.prototype, "_items", void 0);
  __decorate$7([
      r()
  ], exports.LaToastStack.prototype, "_exitingItems", void 0);
  __decorate$7([
      r()
  ], exports.LaToastStack.prototype, "_hovered", void 0);
  __decorate$7([
      r()
  ], exports.LaToastStack.prototype, "_topItemHeight", void 0);
  exports.LaToastStack = __decorate$7([
      t('la-toast-stack')
  ], exports.LaToastStack);
  // ── Programmatic API ─────────────────────────────────────────
  function _getStack() {
      let stack = document.querySelector('la-toast-stack');
      if (!stack) {
          stack = document.createElement('la-toast-stack');
          document.body.appendChild(stack);
      }
      return stack;
  }
  const toast = Object.assign((title, options) => _getStack().add({ title, ...options }), {
      success: (title, options) => _getStack().add({ title, ...options, variant: 'success' }),
      warning: (title, options) => _getStack().add({ title, ...options, variant: 'warning' }),
      danger: (title, options) => _getStack().add({ title, ...options, variant: 'danger' }),
      dismiss: (id) => _getStack().dismiss(id),
  });

  var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-app-shell
   *
   * The root layout container. Positions the sidebar on the left and the
   * content area (page header + main) on the right. Every screen renders
   * inside this shell.
   *
   * Slots:
   *   sidebar        — place <la-sidebar> here
   *   header-actions — optional right-side content in the page header (buttons, processing widget)
   *   main           — the page content
   *   aside          — optional right panel (widgets, tools); only rendered when show-aside is set
   */
  exports.LaAppShell = class LaAppShell extends i$2 {
      constructor() {
          super(...arguments);
          /** Page title shown in the header (fallback when no breadcrumbs) */
          this.pageTitle = '';
          /** Breadcrumb trail — last item is current page (no link) */
          this.breadcrumbs = [];
          /** When true, shows a subtle back affordance in the header */
          this.showBack = false;
          /** When true, renders the page header. Default is hidden. */
          this.showHeader = false;
          /** When true, renders the right aside panel (slot="aside") */
          this.showAside = false;
          /** Tracks whether the aside overlay is open (tablet only) */
          this._asideOpen = false;
          /** Tracks whether the content area is narrow enough to use the drawer */
          this._isTablet = false;
          this._onToggleAside = () => this._toggleAside();
      }
      connectedCallback() {
          super.connectedCallback();
          this.addEventListener('la-toggle-aside', this._onToggleAside);
      }
      render() {
          return b `
      ${iconStyles}
      <div class="sidebar-slot">
        <slot name="sidebar"></slot>
      </div>

      <div class="content">
        ${this.showHeader ? b `
          <header class="page-header">
            ${this.showBack
            ? b `
                  <button class="back-btn" @click=${this._handleBack} title="Back">
                    <i class="ph ph-arrow-left"></i>
                  </button>
                `
            : A}
            ${this.breadcrumbs.length > 0
            ? b `<la-breadcrumb .items=${this.breadcrumbs}></la-breadcrumb>`
            : b `<span class="page-title">${this.pageTitle}</span>`}
            <div class="header-actions">
              <slot name="header-actions"></slot>
            </div>
          </header>
        ` : A}

        <div class="body">
          <main class="main">
            <slot name="main"></slot>
          </main>
          ${this.showAside && !this._isTablet ? b `
            <aside class="aside">
              <slot name="aside"></slot>
            </aside>
          ` : A}
        </div>

        ${this.showAside && this._isTablet ? b `
          <la-drawer
            edge="right"
            label="Actions panel"
            ?open=${this._asideOpen}
            @close=${this._closeAside}>
            <slot name="aside"></slot>
          </la-drawer>
          ${!this._asideOpen ? b `
            <la-icon-button
              class="aside-open-trigger"
              size="sm"
              label="Show actions"
              @click=${this._toggleAside}>
              <i class="ph ph-sidebar-simple"></i>
            </la-icon-button>
          ` : A}
        ` : A}
      </div>

      <div class="right-panel-slot">
        <slot name="right-panel"></slot>
      </div>
    `;
      }
      firstUpdated() {
          const content = this.shadowRoot.querySelector('.content');
          if (content) {
              this._resizeObserver = new ResizeObserver((entries) => {
                  const width = entries[0]?.contentRect.width ?? Infinity;
                  this._isTablet = width <= 1023;
                  this.style.setProperty('--la-aside-toggle-display', this._isTablet ? 'flex' : 'none');
              });
              this._resizeObserver.observe(content);
          }
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this.removeEventListener('la-toggle-aside', this._onToggleAside);
          this._resizeObserver?.disconnect();
      }
      /** Programmatically open the aside overlay (useful for tablet preview/testing) */
      openAside() {
          this._asideOpen = true;
      }
      _toggleAside() {
          this._asideOpen = !this._asideOpen;
      }
      _closeAside() {
          this._asideOpen = false;
      }
      updated(changed) {
          if (changed.has('showAside')) {
              if (!this.showAside) {
                  this._asideOpen = false;
              }
              else if (this._isTablet) {
                  this._asideOpen = true;
              }
          }
      }
      _handleBack() {
          this.dispatchEvent(new CustomEvent('la-back', { bubbles: true, composed: true }));
      }
  };
  exports.LaAppShell.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        background: var(--la-color-bg-subtle);
        font-family: var(--la-font-family);
      }

      /* ── Sidebar slot ─────────────────────────────────────── */

      .sidebar-slot {
        flex-shrink: 0;
        height: 100%;
        display: flex;
        position: relative;
        z-index: auto;
      }

      /* ── Right panel slot (optional — e.g. messages aside) ── */
      /* The slot container is invisible — it has no margin, radius or shadow of its own.
         The slotted content (right-panel-inner) carries those styles so they collapse
         cleanly to nothing when the consumer hides it. */

      .right-panel-slot {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
      }

      .right-panel-slot:empty { display: none; }

      /* ── Content area ─────────────────────────────────────── */

      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
        height: 100%;
        position: relative;
        z-index: 1;
        gap: var(--la-ph-gap);
        /* container-type / container-name intentionally omitted here — any
           container-type value creates a containing block that traps position:fixed
           children (la-select, la-modal, tooltips). Add @container queries to a
           deeper, non-interactive wrapper instead when needed. */
      }

      /* ── Page header ──────────────────────────────────────── */

      .page-header {
        display: flex;
        align-items: center;
        height: var(--la-ph-height);
        padding: 0 var(--la-ph-padding-right) 0 var(--la-ph-padding-left);
        background: var(--la-ph-bg);
        flex-shrink: 0;
        gap: var(--la-space-md);
        box-sizing: border-box;
      }

      .back-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--la-button-height-sm);
        height: var(--la-button-height-sm);
        border: none;
        background: none;
        cursor: pointer;
        color: var(--la-color-text-muted);
        border-radius: var(--la-radius-sm);
        flex-shrink: 0;
        font-size: var(--la-font-size-xl);
        transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        margin-left: -4px;
      }

      .back-btn:hover {
        background: var(--la-color-bg-muted);
        color: var(--la-color-text);
      }

      .page-title {
        flex: 1;
        font-size: var(--la-ph-title-size);
        font-weight: var(--la-ph-title-weight);
        color: var(--la-color-text);
        letter-spacing: -0.3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        flex-shrink: 0;
      }

      /* ── Main + aside row ────────────────────────────────── */

      /* Single shared container — main and aside sit inside one floating surface.
         Body is the scroll container; main grows naturally, aside stays sticky. */
      .body {
        flex: 1;
        display: flex;
        flex-direction: row;
        min-height: 0;
        overflow-y: auto;
        overflow-x: hidden;
        background: var(--la-color-bg-page);
        margin: 0 var(--la-main-margin) var(--la-main-margin) 0;
        border-radius: var(--la-main-radius);
        box-shadow: var(--la-main-shadow);
      }

      :host(:not([show-header])) .body {
        margin-top: var(--la-main-margin);
      }

      .main {
        flex: 1;
        min-width: 0;
        min-height: 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-inline: var(--la-main-padding-inline, var(--la-space-xl));
      }

      /* ── Aside panel — sticky so actions/documents stay visible as main scrolls ──
         Inline-only. Narrow-viewport overlay behaviour is delegated to la-drawer. */

      .aside {
        width: var(--la-aside-width);
        flex-shrink: 0;
        align-self: flex-start;
        position: sticky;
        top: 0;
        max-height: 100vh;
        overflow-y: auto;
      }

      /* ── Open-aside trigger (only shown when content area is narrow and drawer is closed) ─── */

      .aside-open-trigger {
        position: fixed;
        top: var(--la-space-md);
        right: var(--la-space-md);
        z-index: 8;
        /* Consumers rendering their own aside toggle (e.g. in the page header)
           can suppress this built-in trigger by setting the CSS var to 'none'. */
        display: var(--la-aside-open-trigger-display, inline-flex);
      }
    `,
  ];
  __decorate$6([
      n()
  ], exports.LaAppShell.prototype, "pageTitle", void 0);
  __decorate$6([
      n({ type: Array })
  ], exports.LaAppShell.prototype, "breadcrumbs", void 0);
  __decorate$6([
      n({ type: Boolean })
  ], exports.LaAppShell.prototype, "showBack", void 0);
  __decorate$6([
      n({ type: Boolean, attribute: 'show-header', reflect: true })
  ], exports.LaAppShell.prototype, "showHeader", void 0);
  __decorate$6([
      n({ type: Boolean, attribute: 'show-aside' })
  ], exports.LaAppShell.prototype, "showAside", void 0);
  __decorate$6([
      r()
  ], exports.LaAppShell.prototype, "_asideOpen", void 0);
  __decorate$6([
      r()
  ], exports.LaAppShell.prototype, "_isTablet", void 0);
  exports.LaAppShell = __decorate$6([
      t('la-app-shell')
  ], exports.LaAppShell);

  var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDashboard = class LaDashboard extends i$2 {
      constructor() {
          super(...arguments);
          this.showWelcome = false;
          this.areas = [];
          this.readinessLevel = 'ready';
          this.readinessRemaining = 0;
          this.showReadiness = false;
          this.deadlines = [];
      }
      render() {
          return b `
      ${this.showWelcome
            ? b `<la-welcome-banner></la-welcome-banner>`
            : A}
      ${this.showReadiness
            ? b `
            <div class="readiness-row">
              <la-dd-readiness
                level=${this.readinessLevel}
                remaining=${this.readinessRemaining}
              ></la-dd-readiness>
            </div>
          `
            : A}
      <div class="grid">
        ${this.areas.map((a) => b `
            <la-legal-area-widget
              area=${a.name}
              description=${a.description ?? ''}
              status=${a.status}
              urgent=${a.urgent ?? 0}
              proactive=${a.proactive ?? 0}
              .dependencies=${a.dependencies ?? []}
              next-level-label=${a.nextLevelLabel ?? ''}
              illustration=${a.illustration ?? ''}
            ></la-legal-area-widget>
          `)}
      </div>
    `;
      }
  };
  exports.LaDashboard.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        width: 100%;
        max-width: 900px;
        margin-inline: auto;
      }
      @keyframes widget-enter {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .readiness-row {
        margin-bottom: var(--la-space-md);
        animation: widget-enter var(--dur-modal) var(--ease-out) both;
        animation-delay: var(--stagger-lg);
      }
      /* Fluid auto-fit grid — no explicit breakpoints needed.
         Columns collapse naturally: ≥ 872px → 3 cols, 576–871px → 2 cols,
         < 576px → 1 col. When IP Protection returns (4 widgets), revisit
         to avoid a lone full-width orphan on the last row. */
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
        gap: var(--la-space-md);
      }
      .grid > * {
        animation: widget-enter var(--dur-modal) var(--ease-out) both;
      }
      .grid > *:nth-child(1) { animation-delay: calc(var(--stagger-lg) * 2); }
      .grid > *:nth-child(2) { animation-delay: calc(var(--stagger-lg) * 3); }
      .grid > *:nth-child(3) { animation-delay: calc(var(--stagger-lg) * 4); }
      @media (prefers-reduced-motion: reduce) {
        .readiness-row, .grid > * { animation: none; }
      }
    `,
  ];
  __decorate$5([
      n({ type: Boolean })
  ], exports.LaDashboard.prototype, "showWelcome", void 0);
  __decorate$5([
      n({ type: Array })
  ], exports.LaDashboard.prototype, "areas", void 0);
  __decorate$5([
      n()
  ], exports.LaDashboard.prototype, "readinessLevel", void 0);
  __decorate$5([
      n({ type: Number })
  ], exports.LaDashboard.prototype, "readinessRemaining", void 0);
  __decorate$5([
      n({ type: Boolean })
  ], exports.LaDashboard.prototype, "showReadiness", void 0);
  __decorate$5([
      n({ type: Array })
  ], exports.LaDashboard.prototype, "deadlines", void 0);
  exports.LaDashboard = __decorate$5([
      t('la-dashboard')
  ], exports.LaDashboard);

  var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaLegalAreaPage = class LaLegalAreaPage extends i$2 {
      constructor() {
          super(...arguments);
          this.showAsideToggle = false;
          this.area = '';
          this.subtitle = '';
          this.lastUpdated = '';
          this.pageState = 'unlocked';
          /* Unlock panel props (Sprint 4) */
          this.unlockState = 'pre-start';
          this.unlockSteps = [];
          this.unlockChecklist = [];
          this.nextArea = '';
          this.nextDescription = '';
          /* Content */
          this.insights = [];
          this.actions = [];
          this.resolvedCount = 0;
          /* Locked-state props (Sprint 4) */
          this.areaDescription = '';
          this.illustration = '';
          this.clearIllustration = '';
          this.prerequisites = [];
          this._showResolved = false;
          this._urgentExpanded = false;
          this._proactiveExpanded = false;
          this._hadBoth = false;
      }
      willUpdate(changed) {
          if (changed.has('insights')) {
              const u = this.insights.filter((i) => i.severity === 'urgent');
              const p = this.insights.filter((i) => i.severity === 'proactive');
              const r = this.insights.filter((i) => i.severity === 'resolved');
              if (u.length > 0 && p.length > 0)
                  this._hadBoth = true;
              // Cold-load: resolved items exist, meaning both categories existed in a prior session.
              // Keep tabs visible regardless of current active category count.
              if (!this._hadBoth && r.length > 0)
                  this._hadBoth = true;
          }
      }
      _toggleResolved() {
          this._showResolved = !this._showResolved;
      }
      _renderResolvedToggle() {
          return b `
      <la-tooltip tip="Show resolved items" position="left" size="sm">
        <la-icon-button
          label=${this._showResolved ? 'Hide resolved items' : 'Show resolved items'}
          ?pressed=${this._showResolved}
          @click=${this._toggleResolved}
        ><i class="ph ${this._showResolved ? 'ph-fill' : ''} ph-check-circle" aria-hidden="true"></i></la-icon-button>
      </la-tooltip>
    `;
      }
      _renderLockedNotUnlockable() {
          return b `
      <div class="locked-center">
        ${this.illustration
            ? b `<img class="locked-illustration" src=${this.illustration} alt="" />`
            : A}
        <div class="locked-title">${this.area}</div>
        <div class="locked-desc">${this.areaDescription}</div>
        <la-panel class="prereq-widget">
          <div class="prereq-title">What you need to start</div>
          <div class="prereq-subtitle">Complete these areas first:</div>
          ${this.prerequisites.map((p) => b `
              <div class="prereq-row">
                <span class="prereq-name">
                  <i
                    class="prereq-icon ${p.done ? 'done ph-fill ph-check-circle' : 'pending ph ph-circle'}"
                    aria-hidden="true"
                  ></i>
                  ${p.name}
                </span>
                <span class="prereq-status ${p.done ? 'done' : 'pending'}"
                  >${p.done ? 'Done' : 'Not started'}</span
                >
              </div>
            `)}
        </la-panel>
      </div>
    `;
      }
      _renderLockedUnlockable() {
          return b `
      <div class="locked-center">
        ${this.illustration
            ? b `<img class="locked-illustration" src=${this.illustration} alt="" />`
            : A}
        <div class="locked-title">${this.area}</div>
        <div class="locked-desc">${this.areaDescription}</div>
        <div class="ready-cta">
          <la-button
            variant="primary"
            @click=${() => this.dispatchEvent(new CustomEvent('la-start-unlock', {
            detail: { area: this.area },
            bubbles: true,
            composed: true,
        }))}
            >Start with ${this.area}</la-button
          >
        </div>
      </div>
    `;
      }
      _renderCard(item, severityOverride) {
          const sev = (severityOverride ?? item.severity);
          return b `<la-insight-card
      severity=${sev}
      headline=${item.headline}
      description=${item.description ?? ''}
      insight-type=${item.type ?? 'action_required'}
      source-type=${item.sourceType ?? 'legal'}
      .entity=${item.entity}
      .dates=${item.dates}
      .relatedInsights=${item.relatedInsights}
      explanation=${item.explanation ?? ''}
      reason=${item.reason ?? ''}
      .action=${item.action}
    ></la-insight-card>`;
      }
      _renderShowAll(total, expanded, onToggle) {
          if (total <= 3)
              return A;
          return b `
      <div class="show-all-row">
        <la-button variant="ghost" @click=${onToggle}>
          ${expanded ? 'Show less' : `Show all ${total}`}
          <i slot="icon-right" class="ph ${expanded ? 'ph-caret-up' : 'ph-caret-down'}" aria-hidden="true"></i>
        </la-button>
      </div>
    `;
      }
      _renderTabPanel(items, severity, expanded, onToggle) {
          if (items.length === 0) {
              const msg = severity === 'urgent'
                  ? 'No urgent issues right now.'
                  : 'No proactive recommendations right now.';
              return b `
        <la-empty-state
          variant="clean"
          .illustration=${this.clearIllustration}
          message=${msg}
        ></la-empty-state>
      `;
          }
          const visible = expanded ? items : items.slice(0, 3);
          return b `
      <div class="panel-items">
        ${visible.map((item) => this._renderCard(item, severity))}
      </div>
      ${this._renderShowAll(items.length, expanded, onToggle)}
    `;
      }
      _renderInsights() {
          const urgent = this.insights.filter((i) => i.severity === 'urgent');
          const proactive = this.insights.filter((i) => i.severity === 'proactive');
          const resolved = this.insights.filter((i) => i.severity === 'resolved');
          const hasUrgent = urgent.length > 0;
          const hasProactive = proactive.length > 0;
          const hasBoth = hasUrgent && hasProactive;
          const showTabs = hasBoth || this._hadBoth;
          if (!hasUrgent && !hasProactive && !showTabs) {
              return b `
        <la-empty-state
          variant="clean"
          .illustration=${this.clearIllustration}
          message="No urgent or proactive issues right now."
        ></la-empty-state>
        ${resolved.length > 0
                ? b `<div class="resolved-summary">${resolved.length} issue${resolved.length === 1 ? '' : 's'} previously resolved</div>`
                : A}
      `;
          }
          const resolvedSection = this._showResolved && resolved.length > 0
              ? b `
            <div class="resolved-section">
              <div class="resolved-section-label">Resolved</div>
              <div class="resolved-items">
                ${resolved.map((item) => this._renderCard(item, 'resolved'))}
              </div>
            </div>
          `
              : A;
          if (showTabs) {
              return b `
        <div class="tab-wrapper">
          <la-tabs
            variant="segmented"
            active="urgent"
            @la-change=${() => {
                this._urgentExpanded = false;
                this._proactiveExpanded = false;
            }}
          >
            <la-tab slot="triggers" value="urgent">
              <span class="tab-label">Urgent <la-badge type="counter" variant="danger" size="sm">${urgent.length}</la-badge></span>
            </la-tab>
            <la-tab slot="triggers" value="proactive">
              <span class="tab-label">Proactive <la-badge type="counter" variant="primary" appearance="ghost" size="sm">${proactive.length}</la-badge></span>
            </la-tab>

            <la-tab-panel value="urgent">
              ${this._renderTabPanel(urgent, 'urgent', this._urgentExpanded, () => { this._urgentExpanded = !this._urgentExpanded; })}
            </la-tab-panel>

            <la-tab-panel value="proactive">
              ${this._renderTabPanel(proactive, 'proactive', this._proactiveExpanded, () => { this._proactiveExpanded = !this._proactiveExpanded; })}
            </la-tab-panel>
          </la-tabs>
          ${resolved.length > 0 ? b `<div class="tab-menu">${this._renderResolvedToggle()}</div>` : A}
        </div>

        ${resolvedSection}
      `;
          }
          /* Single-category — tab chrome suppressed, plain list */
          const single = hasUrgent ? urgent : proactive;
          const singleSeverity = hasUrgent ? 'urgent' : 'proactive';
          const label = hasUrgent ? 'Urgent' : 'Proactive';
          const expanded = hasUrgent ? this._urgentExpanded : this._proactiveExpanded;
          const onToggle = hasUrgent
              ? () => { this._urgentExpanded = !this._urgentExpanded; }
              : () => { this._proactiveExpanded = !this._proactiveExpanded; };
          const visible = expanded ? single : single.slice(0, 3);
          return b `
      <div class="plain-list">
        <div class="insights-header">
          <div class="plain-category-header">
            <la-badge type="counter" variant="neutral" appearance="ghost">${single.length}</la-badge>
            <span class="plain-category-label">${label}</span>
          </div>
          ${resolved.length > 0 ? this._renderResolvedToggle() : A}
        </div>
        ${visible.map((item) => this._renderCard(item, singleSeverity))}
        ${this._renderShowAll(single.length, expanded, onToggle)}
      </div>

      ${resolvedSection}
    `;
      }
      render() {
          return b `${iconStyles}
      ${this.showAsideToggle
            ? b `<la-button
            class="aside-toggle-btn"
            variant="secondary"
            @click=${() => this.dispatchEvent(new CustomEvent('la-aside-toggle', { bubbles: true, composed: true }))}
            ><i slot="icon-left" class="ph ph-sidebar-simple" aria-hidden="true"></i
            >Actions</la-button
          >`
            : A}
      ${this._renderContent()}`;
      }
      _renderContent() {
          if (this.pageState === 'locked-not-unlockable') {
              return this._renderLockedNotUnlockable();
          }
          if (this.pageState === 'locked-unlockable') {
              return this._renderLockedUnlockable();
          }
          if (this.pageState === 'empty-processing') {
              return b `<la-empty-state variant="processing" area=${this.area}></la-empty-state>`;
          }
          if (this.pageState === 'empty-clean') {
              return b `<la-empty-state variant="clean" area=${this.area} illustration=${this.illustration}></la-empty-state>`;
          }
          if (this.pageState === 'all-clean') {
              const resolved = this.insights.filter(i => i.severity === 'resolved');
              const resolvedSection = this._showResolved && resolved.length > 0
                  ? b `
              <div class="resolved-section">
                <div class="resolved-section-label">Resolved</div>
                <div class="resolved-items">
                  ${resolved.map(i => this._renderCard(i))}
                </div>
              </div>`
                  : A;
              const count = resolved.length || this.resolvedCount;
              return b `
        ${resolved.length > 0 ? b `<div class="tab-controls">${this._renderResolvedToggle()}</div>` : A}
        <la-empty-state
          variant="clean"
          area=${this.area}
          illustration=${this.illustration}
          message="No urgent or proactive issues to address."
        ></la-empty-state>
        ${count > 0 && !this._showResolved
                ? b `<div class="resolved-summary">${count} issue${count !== 1 ? 's' : ''} previously resolved</div>`
                : A}
        ${resolvedSection}
      `;
          }
          if (this.pageState === 'unlocking') {
              return b `
        <la-unlock-panel
          .unlockState=${this.unlockState}
          area=${this.area}
          .steps=${this.unlockSteps}
          .checklistItems=${this.unlockChecklist}
          nextArea=${this.nextArea}
          nextDescription=${this.nextDescription}
        ></la-unlock-panel>
      `;
          }
          /* unlocked — insight tab container */
          return b `
      ${this.area ? b `<div class="page-title">${this.area}</div>` : A}
      ${this.subtitle ? b `<div class="page-subtitle">${this.subtitle}</div>` : A}
      ${this.insights.length > 0 ? this._renderInsights() : A}
      ${this.actions.length > 0 ? b `
        <div class="actions-section">
          <hr class="actions-hr">
          <div class="actions-title">Actions</div>
          <div class="actions-row">
            ${this.actions.map(a => b `
              <la-action-item
                label=${a.label}
                description=${a.description ?? ''}
                icon=${a.icon ?? ''}
                status=${a.status ?? 'pending'}
              ></la-action-item>
            `)}
          </div>
        </div>
      ` : A}
      ${this.lastUpdated ? b `
        <div class="page-footer">
          <i class="ph ph-star-four" aria-hidden="true"></i>
          <span>Analysis last updated ${this.lastUpdated}</span>
        </div>
      ` : A}
    `;
      }
  };
  exports.LaLegalAreaPage.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        width: 100%;
        max-width: 900px;
        margin-inline: auto;
      }

      la-unlock-panel {
        display: block;
        max-width: 560px; /* Gate 8: panel max-width — prose-reading constraint, no layout token for unlock panel width */
        margin: 0 auto;
      }

      .page-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        letter-spacing: -0.5px;
        margin-top: 56px;
        margin-bottom: var(--la-space-2xl);
        text-align: left;
      }
      .page-subtitle {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        line-height: 1.5;
        margin-bottom: var(--la-space-2xl);
      }
      .page-footer {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 44px;
        font-size: var(--la-font-size-xs);
        color: var(--la-color-text-faint);
      }

      /* ── Actions below insights ────────────────────────── */
      .actions-section {
        margin-top: 44px;
      }
      .actions-hr {
        border: none;
        border-top: 1px solid var(--la-color-bg-muted);
        margin-bottom: 44px;
      }
      .actions-title {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-md);
        margin-left: var(--la-space-md);
      }
      .actions-row {
        display: flex;
        gap: var(--la-space-md);
      }
      .actions-row la-action-item {
        flex: 1;
        background: var(--la-color-bg);
        border-radius: var(--la-radius-lg);
        overflow: hidden;
      }

      /* ── Insight tab container ──────────────────────────── */
      .panel-items {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
        padding-top: var(--la-space-md);
      }

      .tab-label {
        display: inline-flex;
        align-items: center;
        gap: var(--la-space-sm);
      }
      .tab-count {
        font-size: inherit;
        font-weight: var(--la-font-weight-normal);
        line-height: 1;
        color: var(--la-color-text-muted);
      }
      .resolved-row {
        display: flex;
        justify-content: center;
        margin-top: var(--la-space-sm);
      }

      .resolved-items {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
        margin-top: var(--la-space-sm);
      }

      /* Plain list — used when only one severity category has items */
      .plain-list {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
      }

      .plain-category-header {
        display: flex;
        align-items: center;
        gap: var(--la-space-xs);
        margin-bottom: var(--la-space-xs);
        padding-left: var(--la-space-xs);
      }

      .plain-category-label {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-normal);
        color: var(--la-color-text);
      }

      /* ── All-clean resolved summary ─────────────────────── */
      .resolved-summary {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        text-align: center;
        margin-top: var(--la-space-md);
      }

      /* ── Show all / collapse row ────────────────────────── */
      .show-all-row {
        display: flex;
        justify-content: center;
        margin-top: var(--la-space-xs);
      }

      /* ── Resolved toggle ───────────────────────────────── */
      .tab-wrapper {
        position: relative;
      }

      .insights-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--la-space-xs);
      }

      .tab-menu {
        position: absolute;
        top: 0;
        right: 0;
      }

      .tab-controls {
        display: flex;
        justify-content: flex-end;
        margin-bottom: var(--la-space-xs);
      }

      /* ── Resolved section (shown via view menu toggle) ──── */
      .resolved-section {
        margin-top: 32px;
        padding-top: 32px;
        border-top: 1px solid var(--la-color-border-light);
      }

      .resolved-section-label {
        font-size: var(--la-font-size-sm);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text-muted);
        margin-bottom: var(--la-space-sm);
        padding-left: 16px;
      }

      /* ── Locked states (Sprint 4 pre-work) ──────────────── */
      .locked-center {
        text-align: center;
        padding: var(--la-space-lg);
      }

      .locked-illustration {
        display: block;
        width: 160px;  /* Gate 8: fixed illustration size — no illustration-size token */
        height: 160px; /* Gate 8: fixed illustration size — no illustration-size token */
        object-fit: contain;
        margin: 0 auto var(--la-space-md);
      }

      .locked-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        margin-bottom: var(--la-space-xs);
      }

      .locked-desc {
        font-size: var(--la-font-size-lg);
        color: var(--la-color-text-secondary);
        margin-bottom: var(--la-space-md);
        max-width: 460px; /* Gate 8: prose max-width for readability — no token for body-copy line length */
        margin-left: auto;
        margin-right: auto;
      }

      .prereq-widget {
        max-width: 360px; /* Gate 8: constrained widget width — visual tuning constant, no layout token */
        margin: 0 auto;
        text-align: left;
      }

      .prereq-title {
        text-align: center;
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        margin-bottom: var(--la-space-xs);
      }

      .prereq-subtitle {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-muted);
        text-align: center;
        margin-bottom: var(--la-space-sm);
      }

      .prereq-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-sm);
        padding: var(--la-space-xs) 0;
      }

      .prereq-name {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
      }

      .prereq-icon {
        font-size: var(--la-font-size-lg);
        flex-shrink: 0;
      }

      .prereq-icon.done {
        color: var(--la-color-resolved);
      }

      .prereq-icon.pending {
        color: var(--la-color-text-muted);
      }

      .prereq-status {
        font-size: var(--la-font-size-sm);
        flex-shrink: 0;
      }

      .prereq-status.done {
        color: var(--la-color-resolved);
      }

      .prereq-status.pending {
        color: var(--la-color-text-muted);
      }

      .ready-subtitle {
        font-size: var(--la-font-size-md);
        color: var(--la-color-text-secondary);
        text-align: center;
        margin-bottom: var(--la-space-md);
      }

      .ready-cta {
        text-align: center;
      }

      .aside-toggle-btn {
        display: none;
        align-self: flex-end;
        margin-bottom: var(--la-space-md);
      }

      @media (max-width: 1023px) {
        .aside-toggle-btn {
          display: flex;
        }
      }
    `,
  ];
  __decorate$4([
      n({ type: Boolean, attribute: 'show-aside-toggle' })
  ], exports.LaLegalAreaPage.prototype, "showAsideToggle", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "area", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "subtitle", void 0);
  __decorate$4([
      n({ attribute: 'last-updated' })
  ], exports.LaLegalAreaPage.prototype, "lastUpdated", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "pageState", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "unlockState", void 0);
  __decorate$4([
      n({ type: Array })
  ], exports.LaLegalAreaPage.prototype, "unlockSteps", void 0);
  __decorate$4([
      n({ type: Array })
  ], exports.LaLegalAreaPage.prototype, "unlockChecklist", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "nextArea", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "nextDescription", void 0);
  __decorate$4([
      n({ type: Array })
  ], exports.LaLegalAreaPage.prototype, "insights", void 0);
  __decorate$4([
      n({ type: Array })
  ], exports.LaLegalAreaPage.prototype, "actions", void 0);
  __decorate$4([
      n({ type: Number })
  ], exports.LaLegalAreaPage.prototype, "resolvedCount", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "areaDescription", void 0);
  __decorate$4([
      n()
  ], exports.LaLegalAreaPage.prototype, "illustration", void 0);
  __decorate$4([
      n({ attribute: 'clear-illustration' })
  ], exports.LaLegalAreaPage.prototype, "clearIllustration", void 0);
  __decorate$4([
      n({ type: Array })
  ], exports.LaLegalAreaPage.prototype, "prerequisites", void 0);
  __decorate$4([
      r()
  ], exports.LaLegalAreaPage.prototype, "_showResolved", void 0);
  __decorate$4([
      r()
  ], exports.LaLegalAreaPage.prototype, "_urgentExpanded", void 0);
  __decorate$4([
      r()
  ], exports.LaLegalAreaPage.prototype, "_proactiveExpanded", void 0);
  __decorate$4([
      r()
  ], exports.LaLegalAreaPage.prototype, "_hadBoth", void 0);
  exports.LaLegalAreaPage = __decorate$4([
      t('la-legal-area-page')
  ], exports.LaLegalAreaPage);

  var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var LaDataRoomPage_1;
  /**
   * la-data-room-page — the Data Room document library.
   *
   * A read-only, cross-area view of the founder's collected documents, grouped
   * by legal area. Per decision 75 the scope is Governance + Employment only —
   * no Fundraising section, no default-pack tab, no missing-document tracking.
   * Browsing only: uploads happen on the legal area pages, not here.
   *
   * Investor management lives in `la-investors-page`, a separate sub-tab
   * (decisions 71, 82).
   *
   * @prop documents - All vault documents. Each is grouped by its `category`
   *                   ('Governance' | 'Employment'); other categories are ignored.
   */
  exports.LaDataRoomPage = LaDataRoomPage_1 = class LaDataRoomPage extends i$2 {
      constructor() {
          super(...arguments);
          this.documents = [];
      }
      _docsFor(area) {
          return this.documents.filter((d) => d.category === area);
      }
      _readyCount() {
          return this.documents.filter((d) => (d.category === 'Governance' || d.category === 'Employment') &&
              d.status === 'ready').length;
      }
      _renderSection(area) {
          const docs = this._docsFor(area);
          if (docs.length === 0)
              return A;
          const icon = area === 'Governance' ? 'ph ph-buildings' : 'ph ph-briefcase';
          return b `
      <div class="section">
        <div class="section-label"><i class="${icon}"></i>${area}</div>
        <la-document-list
          heading=""
          .documents=${docs}
        ></la-document-list>
      </div>
    `;
      }
      render() {
          const ready = this._readyCount();
          return b `
      ${iconStyles}
      <div class="content">
        <div class="page-header">
          <h1 class="page-title">Data Room</h1>
          <div class="page-subtitle">
            ${ready} ${ready === 1 ? 'document' : 'documents'} ready to share
          </div>
        </div>
        ${LaDataRoomPage_1.AREAS.map((area) => this._renderSection(area))}
      </div>
    `;
      }
  };
  /** Canonical section order. Governance + Employment only (decision 75). */
  exports.LaDataRoomPage.AREAS = [
      'Governance',
      'Employment',
  ];
  exports.LaDataRoomPage.styles = [
      tokens,
      i$5 `
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
      }

      .content {
        max-width: 840px;
        margin: 0 auto;
        padding: calc(var(--la-space-2xl) + var(--la-space-md)) var(--la-space-xl) var(--la-space-2xl);
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xl);
      }

      .page-header {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-2xs);
      }

      .page-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.2;
        margin: 0;
      }

      .page-subtitle {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: var(--la-space-sm);
      }

      .section-label {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        padding-left: var(--la-space-md);
      }

      .section-label i {
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-lg);
      }
    `,
  ];
  __decorate$3([
      n({ type: Array })
  ], exports.LaDataRoomPage.prototype, "documents", void 0);
  exports.LaDataRoomPage = LaDataRoomPage_1 = __decorate$3([
      t('la-data-room-page')
  ], exports.LaDataRoomPage);

  var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-avatar — initials avatar for people and entities.
   *
   * Derives initials automatically from `name` (first letter of each of the
   * first two words). Override with `initials` when the name doesn't produce
   * the right result (e.g. legal entities, abbreviations).
   *
   * Three fixed sizes map directly to design token values:
   * - sm (32 px) — compact lists, inline references, share modals
   * - md (40 px) — standard person rows, cards
   * - lg (48 px) — detail panel headers
   *
   * The component is purely presentational — it fires no events.
   *
   * @prop name     - Full name used to auto-derive initials (e.g. "James Okafor")
   * @prop initials - Override for auto-derived initials (e.g. "JO")
   * @prop size     - 'sm' | 'md' | 'lg'. Default: 'md'
   *
   * @example
   * <la-avatar name="James Okafor"></la-avatar>
   * <la-avatar initials="JO" size="lg"></la-avatar>
   */
  let LaAvatar = class LaAvatar extends i$2 {
      constructor() {
          super(...arguments);
          this.name = '';
          this.initials = '';
          this.size = 'md';
      }
      get _displayInitials() {
          if (this.initials)
              return this.initials;
          return this.name
              .split(' ')
              .slice(0, 2)
              .map(w => w[0] ?? '')
              .join('')
              .toUpperCase();
      }
      render() {
          return b `
      <div class="avatar" aria-hidden="true">${this._displayInitials}</div>
    `;
      }
  };
  LaAvatar.styles = [
      tokens,
      i$5 `
      :host {
        display: inline-flex;
        vertical-align: middle;
        /* Size defaults — overridden per size attribute below */
        --_av-size: 40px;
        --_av-font: var(--la-font-size-sm);
      }

      :host([size='sm']) { --_av-size: 32px; --_av-font: var(--la-font-size-xs); }
      :host([size='md']) { --_av-size: 40px; --_av-font: var(--la-font-size-sm); }
      :host([size='lg']) { --_av-size: 48px; --_av-font: var(--la-font-size-base); }

      .avatar {
        width: var(--_av-size);
        height: var(--_av-size);
        border-radius: var(--la-radius-circle);
        background: var(--la-color-bg-muted);
        border: 1px solid var(--la-color-border-light);
        color: var(--la-color-text-secondary);
        font-size: var(--_av-font);
        font-weight: var(--la-font-weight-semibold);
        font-family: var(--la-font-family);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        letter-spacing: 0.3px;
        user-select: none;
      }
    `,
  ];
  __decorate$2([
      n()
  ], LaAvatar.prototype, "name", void 0);
  __decorate$2([
      n()
  ], LaAvatar.prototype, "initials", void 0);
  __decorate$2([
      n({ reflect: true })
  ], LaAvatar.prototype, "size", void 0);
  LaAvatar = __decorate$2([
      t('la-avatar')
  ], LaAvatar);

  var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * la-investors-page — master-detail view for managing investor data rooms.
   *
   * Renders a split layout: a scrollable investor list on the left and a
   * contextual detail panel on the right. Selecting an investor row reveals
   * their full profile — status stats, shared documents, and activity timeline.
   *
   * The component manages selection state internally. All user actions
   * (invite, nudge, revoke, add doc) surface as CustomEvents so the parent
   * application can handle modals, API calls, and data updates.
   *
   * @fires la-add-investor            - + Add investor button clicked
   * @fires la-investor-select         - Row selected; detail: { name, index }
   * @fires la-investor-invite         - Invite clicked (draft state); detail: { name }
   * @fires la-investor-resend-invite  - Resend invite clicked; detail: { name }
   * @fires la-investor-send-nudge     - Send nudge clicked; detail: { name }
   * @fires la-investor-revoke-access  - Revoke access selected; detail: { name }
   * @fires la-investor-restore-access - Restore access clicked; detail: { name }
   * @fires la-investor-remove         - Remove investor selected; detail: { name }
   * @fires la-add-doc                 - Add document clicked; detail: { name }
   *
   * @prop investors     - Array of investor data objects
   * @prop selectedIndex - Programmatically set the selected investor (−1 = none)
   *
   * @example
   * <la-investors-page
   *   .investors=${investors}
   *   @la-add-investor=${() => openAddModal()}
   *   @la-add-doc=${e => openDocPicker(e.detail.name)}
   * ></la-investors-page>
   */
  exports.LaInvestorsPage = class LaInvestorsPage extends i$2 {
      constructor() {
          /* ── Public properties ──────────────────────────────────────── */
          super(...arguments);
          this.investors = [];
          this.selectedIndex = -1;
          /* ── Internal state ─────────────────────────────────────────── */
          this._activeIndex = -1;
      }
      /* ── Lifecycle ──────────────────────────────────────────────── */
      willUpdate(changed) {
          // Sync the public selectedIndex into internal state when set externally
          if (changed.has('selectedIndex')) {
              this._activeIndex = this.selectedIndex;
          }
      }
      /* ── Helpers ────────────────────────────────────────────────── */
      _dispatch(type, detail = {}) {
          this.dispatchEvent(new CustomEvent(type, {
              detail,
              bubbles: true,
              composed: true,
          }));
      }
      _badgeVariant(status) {
          const map = {
              'draft': 'neutral',
              'invited': 'neutral',
              'active': 'success',
              'access-revoked': 'warning',
              'invite-sent': 'warning',
              'accepted': 'success',
              'inbound': 'success',
          };
          return map[status];
      }
      _badgeLabel(status) {
          const map = {
              'draft': 'Not invited',
              'invited': 'Invited',
              'active': 'Active',
              'access-revoked': 'Access revoked',
              'invite-sent': 'Invite sent',
              'accepted': 'Accepted',
              'inbound': 'Shared with you',
          };
          return map[status];
      }
      _selectInvestor(i) {
          this._activeIndex = i;
          const inv = this.investors[i];
          if (inv)
              this._dispatch('la-investor-select', { name: inv.name, index: i });
      }
      _goBack() {
          this._activeIndex = -1;
      }
      /* ── List rail ──────────────────────────────────────────────── */
      _renderInvRow(inv, i) {
          const isActive = i === this._activeIndex;
          // Composes la-investor-card (decision 82); the wrapper carries the
          // selected-row highlight, which is a list concern the card doesn't own.
          return b `
      <div class="inv-card-wrap ${isActive ? 'is-active' : ''}">
        <la-investor-card
          .investorName=${inv.name}
          .firm=${inv.firm}
          .status=${inv.status}
          .lastActivity=${inv.lastActivity ?? ''}
          .unreadCount=${inv.unreadCount ?? 0}
          @la-investor-view=${() => this._selectInvestor(i)}
        ></la-investor-card>
      </div>
    `;
      }
      /* ── Detail panel ───────────────────────────────────────────── */
      _renderDetailEmpty() {
          return b `
      <div class="detail-empty">Select an investor to view their details</div>
    `;
      }
      _renderHeaderActions(inv) {
          const stop = (e) => e.stopPropagation();
          const { name } = inv;
          switch (inv.status) {
              case 'draft':
                  return b `
          <la-button variant="primary"
            @click=${() => this._dispatch('la-investor-invite', { name })}>
            <i class="ph ph-paper-plane-tilt" style="margin-right:4px;"></i>Share DD Pack
          </la-button>
        `;
              case 'invited':
                  return b `
          <la-button variant="secondary"
            @click=${() => this._dispatch('la-investor-resend-invite', { name })}>
            <i class="ph ph-paper-plane-tilt" style="margin-right:4px;"></i>Resend invite
          </la-button>
          <la-menu origin="top-right" label="Investor options" @click=${stop}>
            <la-menu-item label="Remove investor" icon="ph ph-trash" variant="danger"
              @la-menu-select=${() => this._dispatch('la-investor-remove', { name })}></la-menu-item>
          </la-menu>
        `;
              case 'access-revoked':
                  return b `
          <la-button variant="secondary"
            @click=${() => this._dispatch('la-investor-restore-access', { name })}>
            <i class="ph ph-arrow-counter-clockwise" style="margin-right:4px;"></i>Re-share
          </la-button>
          <la-menu origin="top-right" label="Investor options" @click=${stop}>
            <la-menu-item label="Remove investor" icon="ph ph-trash" variant="danger"
              @la-menu-select=${() => this._dispatch('la-investor-remove', { name })}></la-menu-item>
          </la-menu>
        `;
              default: // active
                  return b `
          <la-button variant="secondary"
            @click=${() => this._dispatch('la-investor-send-nudge', { name })}>
            <i class="ph ph-bell-ringing" style="margin-right:4px;"></i>Send nudge
          </la-button>
          <la-menu origin="top-right" label="Investor options" @click=${stop}>
            <la-menu-item label="Revoke access" icon="ph ph-prohibit" variant="danger"
              @la-menu-select=${() => this._dispatch('la-investor-revoke-access', { name })}></la-menu-item>
          </la-menu>
        `;
          }
      }
      /** Status tooltip copy — four founder-observable states (decision 72). */
      _statusTooltip(status) {
          switch (status) {
              case 'draft': return 'No invite sent yet. Use Share DD Pack to give this investor access.';
              case 'invited': return 'Invite sent — waiting for the investor to accept.';
              case 'access-revoked': return 'Access has been revoked. The investor can no longer view the pack.';
              default: return 'Access is live — this investor can view the DD pack.';
          }
      }
      _renderDetailHeader(inv) {
          return b `
      <div class="inv-header">
        <la-avatar .name=${inv.name} .initials=${inv.initials ?? ''} size="lg"></la-avatar>
        <div class="inv-identity">
          <div class="inv-name-lg">${inv.name}</div>
          <div class="inv-firm-lg">
            ${inv.firm}
            ${inv.stage ? b `· <span class="stage-chip">${inv.stage}</span>` : A}
          </div>
        </div>
        <div class="inv-header-end">
          <la-tooltip tip=${this._statusTooltip(inv.status)} position="bottom" appearance="light" max-width="220px">
            <la-badge variant=${this._badgeVariant(inv.status)}>${this._badgeLabel(inv.status)}</la-badge>
          </la-tooltip>
          ${this._renderHeaderActions(inv)}
        </div>
      </div>
    `;
      }
      _renderDetailDocs(inv) {
          const docs = inv.documents ?? [];
          const total = inv.totalDocCount ?? 0;
          // Strip category + status from display — detail panel shows docs flat
          const displayDocs = docs.map(d => ({ ...d, category: '', status: 'none' }));
          return b `
      <div class="section">
        <div class="section-header">
          <div class="section-label">Shared documents</div>
          <la-button variant="ghost"
            @click=${() => this._dispatch('la-add-doc', { name: inv.name })}>
            <i class="ph ph-plus" style="margin-right:4px;"></i>Add document
          </la-button>
        </div>
        <la-document-list .documents=${displayDocs} heading=""></la-document-list>
        ${total > 0 ? b `
          <p class="doc-count-note">
            ${docs.length} of ${total} documents from the default pack shared
          </p>
        ` : A}
      </div>
    `;
      }
      _renderDetail() {
          if (this._activeIndex < 0 || this._activeIndex >= this.investors.length) {
              return this._renderDetailEmpty();
          }
          const inv = this.investors[this._activeIndex];
          // Stats row (decision 74) and Activity section (decision 73) removed —
          // both needed investor-activity tracking, which is descoped.
          return b `
      <div class="detail-inner">
        <div class="detail-back-wrap">
          <la-button variant="ghost" size="sm" @click=${this._goBack}>
            <i class="ph ph-arrow-left" style="margin-right:4px;"></i>All investors
          </la-button>
        </div>
        ${this._renderDetailHeader(inv)}
        <hr class="detail-divider">
        ${this._renderDetailDocs(inv)}
      </div>
    `;
      }
      /* ── Top-level render ───────────────────────────────────────── */
      render() {
          return b `
      ${iconStyles}
      <div class="split ${this._activeIndex >= 0 ? 'detail-open' : ''}">

        <!-- Left — investor list rail -->
        <div class="list-rail">
          <div class="list-header">
            <h2 class="list-title">Data Room</h2>
            <la-icon-button
              variant="primary"
              label="Add investor"
              size="sm"
              @click=${() => this._dispatch('la-add-investor')}
            ><i class="ph ph-plus"></i></la-icon-button>
          </div>

          <div class="inv-rows">
            ${this.investors.length === 0
            ? b `
                <div class="list-empty">
                  <i class="ph ph-users list-empty-icon"></i>
                  <p class="list-empty-label">
                    Add your first investor to start sharing your DD pack.
                  </p>
                </div>
              `
            : this.investors.map((inv, i) => this._renderInvRow(inv, i))}
          </div>
        </div>

        <!-- Right — detail panel -->
        <div class="detail-panel">
          ${this._renderDetail()}
        </div>

      </div>
    `;
      }
  };
  /* ── Styles ─────────────────────────────────────────────────── */
  exports.LaInvestorsPage.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }

      /* ── Split layout ─────────────────────────────────────── */

      .split {
        display: flex;
        flex: 1;
        min-height: 0;
        overflow: hidden;
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        position: relative; /* anchor for tablet absolute detail panel */
      }

      /* ── Left — investor list rail ────────────────────────── */

      .list-rail {
        width: 320px;
        flex-shrink: 0;
        border-right: 1px solid var(--la-color-bg-muted);
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        padding-top: calc(var(--la-space-2xl) + var(--la-space-xl));
      }

      .list-header {
        padding: 0 var(--la-space-xl) var(--la-space-lg);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--la-space-md);
        flex-shrink: 0;
      }

      .list-title {
        font-size: var(--la-font-size-3xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        line-height: 1.2;
        margin: 0;
      }

      .inv-rows {
        flex: 1;
        overflow-y: auto;
        padding: 0 0 var(--la-space-md);
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* ── Investor list (composes la-investor-card) ─────────── */

      .inv-card-wrap {
        margin: 0 var(--la-space-xl);
        border-radius: var(--la-radius-lg);
      }

      /* Selected row — the list concern the card itself doesn't own.
         A ring on the wrapper marks the active investor. */
      .inv-card-wrap.is-active {
        box-shadow: 0 0 0 1.5px var(--la-color-border-active);
      }

      /* ── Right — detail panel ─────────────────────────────── */

      .detail-panel {
        flex: 1;
        min-width: 0;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }

      .detail-inner {
        padding: 64px 40px var(--la-space-xl);
        display: flex;
        flex-direction: column;
        gap: var(--la-space-xl);
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
      }

      .detail-empty {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--la-color-text-faint);
        font-size: var(--la-font-size-base);
      }

      /* ── Detail — investor header ─────────────────────────── */

      .inv-header {
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
      }

      .inv-identity { flex: 1; min-width: 0; }

      .inv-name-lg {
        font-size: var(--la-font-size-2xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        letter-spacing: -0.3px;
        line-height: 1.2;
      }

      .inv-firm-lg {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
        margin-top: 3px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* Matches the stage-chip pattern in la-investor-card */
      .stage-chip {
        display: inline-flex;
        align-items: center;
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        background: var(--la-color-bg-muted);
        padding: 1px 7px;
        border-radius: var(--la-radius-pill);
      }

      .inv-header-end {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        flex-shrink: 0;
      }

      /* ── Detail — stats row ───────────────────────────────── */

      .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--la-space-md);
      }

      .stat-card {
        border-radius: var(--la-radius-lg);
        padding: var(--la-space-md) var(--la-space-lg);
      }

      .stat-label {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-bottom: var(--la-space-xs);
      }

      .stat-value {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
      }

      .stat-value.is-success { color: var(--la-color-resolved-text); }
      .stat-value.is-warning { color: var(--la-color-warning-text); }

      /* ── Detail — sections ────────────────────────────────── */

      .section { display: flex; flex-direction: column; gap: var(--la-space-sm); }

      .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: var(--la-space-md);
      }

      .section-label {
        font-size: var(--la-font-size-lg);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
      }

      .doc-count-note {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        text-align: center;
        padding: var(--la-space-xs) var(--la-space-md) 0;
      }

      /* ── Detail — activity feed wrapper ───────────────────── */

      .activity-feed {
        background: var(--la-color-bg-subtle);
        border-radius: var(--la-radius-lg);
        padding: var(--la-space-md) var(--la-space-lg);
      }

      /* Divider between the header + stats block and content sections */
      .detail-divider {
        border: none;
        border-top: 1px solid var(--la-color-border-light);
        margin: 0;
        opacity: 0.5;
      }

      /* ── Back button wrapper (tablet only) ──────────────── */

      .detail-back-wrap {
        display: none; /* hidden on desktop */
        margin-bottom: var(--la-space-md);
      }

      /* ── Tablet — one-at-a-time layout (≤900px) ──────────── */

      @media (max-width: 900px) {
        .list-rail {
          width: 100%;
          border-right: none;
          flex-shrink: 0;
        }

        .detail-panel {
          position: absolute;
          inset: 0;
          background: var(--la-color-bg);
          transform: translateX(100%);
          transition: transform var(--dur-modal) var(--ease-out);
          overflow-y: auto;
        }

        .split.detail-open .detail-panel {
          transform: translateX(0);
        }

        .detail-back-wrap {
          display: block;
        }
      }

      @media (max-width: 900px) and (prefers-reduced-motion: reduce) {
        .detail-panel {
          transition: none;
        }
      }

      /* ── Empty list state ─────────────────────────────────── */

      .list-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--la-space-md);
        padding: var(--la-space-2xl) var(--la-space-xl);
        text-align: center;
      }

      .list-empty-icon {
        font-size: 28px;
        color: var(--la-color-text-faint);
      }

      .list-empty-label {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        max-width: 200px;
        line-height: 1.5;
      }
    `,
  ];
  __decorate$1([
      n({ type: Array })
  ], exports.LaInvestorsPage.prototype, "investors", void 0);
  __decorate$1([
      n({ type: Number })
  ], exports.LaInvestorsPage.prototype, "selectedIndex", void 0);
  __decorate$1([
      r()
  ], exports.LaInvestorsPage.prototype, "_activeIndex", void 0);
  exports.LaInvestorsPage = __decorate$1([
      t('la-investors-page')
  ], exports.LaInvestorsPage);

  var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.LaDocumentPage = class LaDocumentPage extends i$2 {
      constructor() {
          super(...arguments);
          this.documentName = 'Untitled document';
          this.documentStatus = 'ready';
          this.entity = '';
          this.entityClickable = false;
          this.deletable = false;
          /** Read-only mode — suppresses Replace/Delete actions. For documents the
           *  viewer does not own (e.g. an investor's term sheet reviewed by the founder). */
          this.readonly = false;
          this.flagReason = '';
          this.category = '';
          this.legalArea = '';
          this.uploadedDate = '';
          this.fileSize = '';
          this.insights = [];
          this.replacing = false;
          this.aboutType = '';
          this.aboutSummary = '';
          this.aboutItems = [];
          /** When set, the preview pane shows the document inline via la-pdf-preview
              instead of the file placeholder. */
          this.previewSrc = '';
          this.previewFallback = '';
          /** Suppress the Details metadata section. Use when the header meta already
              carries category / area / entity and a separate table would just repeat it. */
          this.hideDetails = false;
          /** Small-screen view switch — only affects layout below the stacking breakpoint.
              Preview-first so the document is what the reader sees on open. */
          this._view = 'preview';
      }
      _statusBadge() {
          switch (this.documentStatus) {
              case 'ready': return b `<la-badge variant="success"><i slot="icon" class="ph-fill ph-check-circle"></i>Analysed</la-badge>`;
              case 'processing': return b `<la-badge variant="info"><i slot="icon" class="ph ph-spinner-gap" style="animation:spin var(--dur-base,600ms) linear infinite;"></i>Processing</la-badge>`;
              case 'flagged-expired': return b `<la-badge variant="danger"><i slot="icon" class="ph-fill ph-warning-circle"></i>Expired</la-badge>`;
              case 'flagged-unsigned': return b `<la-badge variant="danger"><i slot="icon" class="ph-fill ph-warning-circle"></i>Missing signature</la-badge>`;
              case 'flagged-ai': return b `<la-badge variant="warning"><i slot="icon" class="ph-fill ph-warning"></i>Flagged</la-badge>`;
              default: return A;
          }
      }
      _flagBanner() {
          if (this.documentStatus === 'flagged-expired') {
              return b `
        <div class="flag-wrap">
          <la-alert variant="danger">
            <i slot="icon" class="ph ph-warning-circle"></i>
            <div class="flag-title">Document has expired</div>
            <div class="flag-desc">${this.flagReason || 'This document is no longer valid. Upload a current version to resolve the linked insight.'}</div>
          </la-alert>
        </div>`;
          }
          if (this.documentStatus === 'flagged-unsigned') {
              return b `
        <div class="flag-wrap">
          <la-alert variant="danger">
            <i slot="icon" class="ph ph-signature"></i>
            <div class="flag-title">Missing signature</div>
            <div class="flag-desc">${this.flagReason || 'This document requires a signature to be valid. Have it signed and re-upload.'}</div>
          </la-alert>
        </div>`;
          }
          if (this.documentStatus === 'flagged-ai') {
              return b `
        <div class="flag-wrap">
          <la-alert variant="warning">
            <i slot="icon" class="ph ph-info"></i>
            <div class="flag-title">We found something to review</div>
            <div class="flag-desc">${this.flagReason || 'Our analysis flagged a potential issue in this document. Check the linked insights below.'}</div>
          </la-alert>
        </div>`;
          }
          return A;
      }
      _aboutSection() {
          if (!this.aboutType)
              return A;
          if (this.aboutType === 'loading') {
              return b `
        <div class="detail-section">
          <div class="section-label">About</div>
          <div class="about-loading">
            <i class="about-spinner ph ph-spinner-gap" aria-hidden="true"></i>
            Analysing document…
          </div>
        </div>`;
          }
          if (this.aboutType === 'key-terms') {
              return b `
        <div class="detail-section">
          <div class="section-label">About</div>
          ${this.aboutItems.map(item => b `
            <div class="key-term-item">${item.text}</div>
          `)}
        </div>`;
          }
          if (this.aboutType === 'obligations') {
              return b `
        <div class="detail-section">
          <div class="section-label">About</div>
          ${this.aboutItems.map(item => {
                const group = item;
                return b `
              <div class="obligation-group">
                <div class="obligation-party">${group.party}</div>
                ${group.items.map(s => b `<div class="obligation-item">${s}</div>`)}
              </div>`;
            })}
        </div>`;
          }
          return A;
      }
      _onInsightSelect(insight) {
          this.dispatchEvent(new CustomEvent('la-insight-select', {
              detail: { title: insight.title, severity: insight.severity },
              bubbles: true, composed: true,
          }));
      }
      _onReplace() {
          this.dispatchEvent(new CustomEvent('la-replace', { bubbles: true, composed: true }));
      }
      _onDelete() {
          this.dispatchEvent(new CustomEvent('la-delete', { bubbles: true, composed: true }));
      }
      _onMenuSelect(e) {
          if (e.detail.value === 'replace')
              this._onReplace();
          if (e.detail.value === 'delete')
              this._onDelete();
      }
      _insightRows() {
          return this.insights.map(insight => b `
      <div class="insight-row" @click=${() => this._onInsightSelect(insight)}>
        <i class="insight-icon insight-icon--${insight.severity} ph-fill ${insight.severity === 'urgent' ? 'ph-warning' : 'ph-info'}" aria-hidden="true"></i>
        <span class="insight-title">${insight.title}</span>
      </div>`);
      }
      _previewPane() {
          if (this.documentStatus === 'processing') {
              return b `
        <div class="preview-pane">
          <div class="processing-state">
            <i class="preview-spinner ph ph-spinner-gap" aria-hidden="true"></i>
            <div class="preview-label">Analysing document</div>
            <div class="preview-sub">This usually takes under a minute.</div>
          </div>
        </div>`;
          }
          if (this.previewSrc) {
              // Document rendered inline — no "View original" footer (it would just re-open
              // the same file). Saving is covered by the page's Download action.
              return b `
        <div class="preview-pane preview-pane--doc">
          <la-pdf-preview
            src=${this.previewSrc}
            fallback-image=${this.previewFallback}
            label=${this.documentName}></la-pdf-preview>
        </div>`;
          }
          return b `
      <div class="preview-pane">
        <div class="preview-placeholder">
          <div class="preview-icon">
            <i class="ph ph-file-text"></i>
          </div>
          <div class="preview-label">${this.documentName}</div>
          <div class="preview-sub">Stored securely${this.fileSize ? ` · ${this.fileSize}` : ''}</div>
        </div>
        <la-button variant="ghost" size="sm">
          <i class="ph ph-arrow-square-out"></i>
          View original
        </la-button>
      </div>`;
      }
      render() {
          const hasDetails = !this.hideDetails && (this.uploadedDate || this.fileSize || this.category || this.legalArea);
          return b `
      ${iconStyles}

      <!-- Persistent document header — title, meta, status; spans full width,
           always visible above the Document/Details view switch. -->
      <div class="doc-header">
        <div class="doc-header-top">
          <div class="doc-header-main">
            <div class="doc-name">${this.documentName}</div>
            <div class="doc-meta">
              ${this.entity ? b `
                ${this.entityClickable
            ? b `<button class="doc-entity-link" @click=${() => this.dispatchEvent(new CustomEvent('la-entity-click', { detail: { entity: this.entity }, bubbles: true, composed: true }))}>${this.entity}</button>`
            : b `<span class="doc-meta-text">${this.entity}</span>`}` : A}
              ${this.category ? b `
                ${this.entity ? b `<span class="doc-meta-sep">·</span>` : A}
                <span class="doc-meta-text">${this.category}</span>
              ` : A}
              ${this.legalArea ? b `
                ${(this.entity || this.category) ? b `<span class="doc-meta-sep">·</span>` : A}
                <span class="doc-meta-text">${this.legalArea}</span>
              ` : A}
            </div>
          </div>
          ${this.replacing
            ? b `<div class="replacing-indicator"><i class="replacing-spinner ph ph-spinner-gap" aria-hidden="true"></i>Uploading…</div>`
            : this.readonly
                ? this._statusBadge()
                : b `
              ${this._statusBadge()}
              <la-menu label="Document actions" origin="top-right" @la-menu-select=${this._onMenuSelect}>
                <la-menu-item label="Replace document" value="replace" icon="ph ph-upload-simple"></la-menu-item>
                ${this.deletable ? b `<la-menu-item label="Delete document" value="delete" icon="ph ph-trash" variant="danger"></la-menu-item>` : A}
              </la-menu>`}
        </div>
      </div>

      <div class="layout" data-view=${this._view}>

        <!-- Small-screen view switch (document-first); hidden on wide layouts -->
        <div class="doc-view-switch">
          <la-tabs variant="segmented" block active=${this._view}
            @la-change=${(e) => { this._view = e.detail.value; }}>
            <la-tab slot="triggers" value="preview"><i class="ph ph-file-text"></i>&nbsp;Document</la-tab>
            <la-tab slot="triggers" value="detail"><i class="ph ph-list-bullets"></i>&nbsp;Details</la-tab>
          </la-tabs>
        </div>

        <!-- Detail pane (left) -->
        <div class="detail-pane">

          <div class="detail-scroll">

            ${this._flagBanner()}

            ${this.aboutSummary ? b `<p class="doc-summary">${this.aboutSummary}</p>` : A}

            ${this._aboutSection()}

            ${hasDetails ? b `
              <div class="detail-section">
                <div class="section-label">Details</div>
                <la-field-list layout="stack" .fields=${[
            ...(this.uploadedDate ? [{ label: 'Uploaded', value: this.uploadedDate }] : []),
            ...(this.fileSize ? [{ label: 'File size', value: this.fileSize }] : []),
            ...(this.category ? [{ label: 'Category', value: this.category }] : []),
            ...(this.legalArea ? [{ label: 'Legal area', value: this.legalArea }] : []),
        ]}></la-field-list>
              </div>
            ` : A}

            ${this.insights.length ? b `
              <div class="detail-section">
                <div class="section-label">
                  Linked insights
                  <la-badge type="counter" variant="neutral" size="sm">${this.insights.length}</la-badge>
                </div>
                ${this._insightRows()}
              </div>` : A}

          </div>

        </div>

        <!-- Preview pane (right) -->
        ${this._previewPane()}

      </div>
    `;
      }
  };
  exports.LaDocumentPage.styles = [
      tokens,
      i$5 `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        /* Full-bleed: cancel the app-shell .main padding-inline so the
           two-panel grid extends edge-to-edge inside the white card. */
        margin-inline: calc(var(--la-space-xl) * -1);
      }

      /* ── Layout ──────────────────────────────────────── */
      .layout {
        display: grid;
        grid-template-columns: minmax(0, 600px) 1fr;
        gap: 0;
        flex: 1 1 auto;
        min-height: 0;
      }

      /* Small-screen view switch — hidden on wide (two-column) layouts.
         Uses la-tabs (segmented) — the design-system segmented control. */
      .doc-view-switch {
        display: none;
        padding: var(--la-space-md) var(--la-space-lg);
        background: var(--la-color-bg);
      }

      /* Stack below 900px and switch panes via .doc-view-switch. */
      @media (max-width: 900px) {
        .layout {
          display: flex;
          flex-direction: column;
        }
        .doc-view-switch {
          display: block;
        }
        .detail-pane,
        .preview-pane {
          flex: 1 1 auto;
          min-height: 0;
        }
        .detail-pane {
          border-right: none;
        }
        .preview-pane {
          min-height: 60vh;
        }
        .layout[data-view='preview'] .detail-pane {
          display: none;
        }
        .layout[data-view='detail'] .preview-pane {
          display: none;
        }
      }

      /* ── Detail pane (left) ──────────────────────────── */
      .detail-pane {
        display: flex;
        flex-direction: column;
        border-right: 1px solid var(--la-color-border-light);
        overflow: visible;
        min-height: 0;
      }

      .detail-scroll {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
      }

      .doc-header {
        flex-shrink: 0;
        padding: var(--la-space-xl) var(--la-space-2xl);
      }

      .doc-header-top {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
      }

      .doc-header-main {
        flex: 1;
        min-width: 0;
      }

      .doc-name {
        font-size: var(--la-font-size-2xl);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-xs);
        display: flex;
        align-items: center;
        gap: var(--la-space-md);
      }

      .doc-meta {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        flex-wrap: wrap;
      }

      .doc-meta-text {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
      }

      .doc-entity-link {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-primary);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-family: inherit;
        text-decoration: none;
      }
      .doc-entity-link:hover { color: var(--la-color-primary-hover); text-decoration: underline; }
      .doc-entity-link:focus-visible {
        outline: var(--la-focus-ring-width) solid var(--la-color-border-focus);
        outline-offset: var(--la-focus-ring-offset);
        border-radius: var(--la-radius-sm);
      }

      .doc-meta-sep {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-faint);
        user-select: none;
      }

      .replacing-indicator {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
      }

      .replacing-spinner {
        font-size: var(--la-font-size-base);
        color: var(--la-color-processing);
        animation: spin var(--dur-base, 600ms) linear infinite;
      }

      /* ── Flag banner ─────────────────────────────────── */
      .flag-wrap {
        padding: var(--la-space-xl) var(--la-space-2xl) 0;
      }

      .flag-title {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        margin-bottom: var(--la-space-3xs);
      }

      .flag-desc {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
      }

      /* ── Detail sections ─────────────────────────────── */
      .detail-section {
        padding: var(--la-space-xl) var(--la-space-2xl) var(--la-space-lg);
      }

      .detail-section + .detail-section {
        padding-top: var(--la-space-lg);
      }

      .section-label {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-md);
      }


      /* ── About section ───────────────────────────────── */
      .doc-summary {
        padding: var(--la-space-lg) var(--la-space-2xl) 0;
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
      }

      .about-loading {
        display: flex;
        align-items: center;
        gap: var(--la-space-sm);
        color: var(--la-color-text-muted);
        font-size: var(--la-font-size-base);
      }

      .about-spinner {
        font-size: var(--la-font-size-lg);
        color: var(--la-color-processing);
        flex-shrink: 0;
        animation: spin var(--dur-base, 600ms) linear infinite;
      }

      @keyframes spin { to { transform: rotate(360deg); } }

      .key-term-item {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
        padding: var(--la-space-xs) 0;
      }

      .obligation-group { margin-bottom: var(--la-space-md); }
      .obligation-group:last-child { margin-bottom: 0; }

      .obligation-party {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-semibold);
        color: var(--la-color-text);
        margin-bottom: var(--la-space-xs);
      }

      .obligation-item {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text);
        line-height: var(--la-line-height);
        padding: var(--la-space-3xs) 0 var(--la-space-3xs) var(--la-space-md);
        position: relative;
      }

      .obligation-item::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--la-color-text-muted);
      }

      /* ── Insight rows ────────────────────────────────── */
      .insight-row {
        display: flex;
        align-items: flex-start;
        gap: var(--la-space-sm);
        padding: var(--la-space-sm) 0;
        border-bottom: 1px solid var(--la-color-border-light);
        cursor: pointer;
      }

      .insight-row:last-child { border-bottom: none; padding-bottom: 0; }
      .insight-row:first-child { padding-top: 0; }

      .insight-icon {
        flex-shrink: 0;
        font-size: var(--la-font-size-base);
        line-height: 1.45;
      }

      .insight-icon--urgent   { color: var(--la-color-urgent); }
      .insight-icon--proactive { color: var(--la-color-proactive); }
      .insight-icon--resolved  { color: var(--la-color-resolved); }

      .insight-title {
        font-size: var(--la-font-size-base);
        font-weight: var(--la-font-weight-medium);
        color: var(--la-color-text);
        line-height: 1.4;
        flex: 1;
      }

      .insight-title:hover { color: var(--la-color-primary); }

      .no-insights {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-muted);
      }

      /* ── Preview pane (right) ────────────────────────── */
      .preview-pane {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--la-color-bg-subtle);
        flex-direction: column;
        gap: var(--la-space-lg);
        padding: var(--la-space-2xl);
        overflow: hidden;
      }

      /* Inline-document variant — la-pdf-preview fills the pane; a slim footer
         carries "View original". Overrides the centred placeholder layout. */
      .preview-pane--doc {
        align-items: stretch;
        justify-content: stretch;
        padding: 0;
        gap: 0;
      }
      .preview-pane--doc la-pdf-preview {
        flex: 1 1 auto;
        min-height: 0;
      }

      .preview-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--la-space-md);
        text-align: center;
      }

      .preview-icon {
        width: 64px;
        height: 80px;
        background: var(--la-color-bg);
        border: 1px solid var(--la-color-border);
        border-radius: var(--la-radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--la-shadow-sm);
        position: relative;
      }

      .preview-icon::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 16px;
        height: 16px;
        background: var(--la-color-bg-muted);
        border-bottom-left-radius: var(--la-radius-sm);
        border-left: 1px solid var(--la-color-border);
        border-bottom: 1px solid var(--la-color-border);
      }

      .preview-icon i {
        font-size: var(--la-font-size-3xl);
        color: var(--la-color-text-muted);
      }

      .preview-label {
        font-size: var(--la-font-size-base);
        color: var(--la-color-text-secondary);
      }

      .preview-sub {
        font-size: var(--la-font-size-sm);
        color: var(--la-color-text-muted);
        margin-top: calc(var(--la-space-xs) * -1);
      }

      .processing-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--la-space-md);
        text-align: center;
      }

      .preview-spinner {
        font-size: var(--la-font-size-3xl);
        color: var(--la-color-processing);
        animation: spin var(--dur-base, 600ms) linear infinite;
      }
    `,
  ];
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "documentName", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "documentStatus", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "entity", void 0);
  __decorate([
      n({ type: Boolean })
  ], exports.LaDocumentPage.prototype, "entityClickable", void 0);
  __decorate([
      n({ type: Boolean })
  ], exports.LaDocumentPage.prototype, "deletable", void 0);
  __decorate([
      n({ type: Boolean })
  ], exports.LaDocumentPage.prototype, "readonly", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "flagReason", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "category", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "legalArea", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "uploadedDate", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "fileSize", void 0);
  __decorate([
      n({ type: Array })
  ], exports.LaDocumentPage.prototype, "insights", void 0);
  __decorate([
      n({ type: Boolean })
  ], exports.LaDocumentPage.prototype, "replacing", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "aboutType", void 0);
  __decorate([
      n()
  ], exports.LaDocumentPage.prototype, "aboutSummary", void 0);
  __decorate([
      n({ type: Array })
  ], exports.LaDocumentPage.prototype, "aboutItems", void 0);
  __decorate([
      n({ attribute: 'preview-src' })
  ], exports.LaDocumentPage.prototype, "previewSrc", void 0);
  __decorate([
      n({ attribute: 'preview-fallback' })
  ], exports.LaDocumentPage.prototype, "previewFallback", void 0);
  __decorate([
      n({ type: Boolean, attribute: 'hide-details' })
  ], exports.LaDocumentPage.prototype, "hideDetails", void 0);
  __decorate([
      r()
  ], exports.LaDocumentPage.prototype, "_view", void 0);
  exports.LaDocumentPage = __decorate([
      t('la-document-page')
  ], exports.LaDocumentPage);

  exports.iconStyles = iconStyles;
  exports.toast = toast;
  exports.tokens = tokens;

  return exports;

})({});
