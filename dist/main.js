(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var i=e(81),o=e.n(i),a=e(645),r=e.n(a)()(o());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Asap&display=swap);"]),r.push([n.id,'html {\n    scroll-behavior: smooth;\n  }\n\n* {\n    margin: 0px;\n    padding: 0px;\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n::-webkit-scrollbar {\n    display: none;\n}\n\nh2 {\n    font-family: "Asap", sans-serif;\n}\n\n#mainContainer {\n    display: flex;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    min-width: 100vw; \n}\n\n#header {\n    position: fixed;\n    color: rgba(255, 255, 255, 0.562);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n    width: 100%;\n    font-weight: 300;\n    font-family: "Asap", sans-serif;\n    font-size: 15px;\n}\n\n#header > div {\n    margin: 10px;\n    padding: 10px;\n    height: fit-content;\n    cursor: pointer;\n}\n\n#header > div:hover {\n    color: white;\n}\n\n#contentContainer {\n    display: flex;\n    flex-wrap: wrap;\n    height: fit-content;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto; \n}\n\n#homeContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    width: 100%;\n}\n\n#homeContainer > img {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    object-fit: cover;\n    z-index: -1;\n    filter: brightness(50%);\n}\n\n#homeContainer > div {\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    width: fit-content;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    height: fit-content;\n}\n\n#homeContainer > div > h1 {\n    height: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    font-size: 7rem;\n    margin-bottom: 6%;\n    font-weight: 400;\n    font-family: "Asap", sans-serif;\n}\n\n#homeContainer > div > p {\n    height: fit-content;\n    width: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.7rem;\n    text-align: center;\n    word-spacing: 5px;\n    font-weight: 100;\n}\n\n#aboutContainer {\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: 100vh;\n    width: 100%;\n}\n\n#aboutContainer > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    margin-top: 8%;\n}\n\n#aboutContainer > div > h2 {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    width: 100%;\n    font-size: 2.5em;\n    font-weight: 300;\n    margin-bottom: 6%;\n}\n\n#aboutContainer > div > p {\n    display: flex;\n    flex-wrap: wrap;\n    height: fit-content;\n    width: fit-content;\n    width: 30%;    \n    font-size: clamp(25px, 1.5em, 20px);\n    text-align: center;\n    word-spacing: 5px;\n    font-weight: 100;\n}\n\n#menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n    height: 100vh;\n    width: 100%;\n    color: white;\n}\n\n#menuContainer > div {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: center;\n}\n\n#titleRow {\n    height: clamp(10%, 20%, 20%);\n    width: 100%;\n    font-size: clamp(10px, 2.5em, 2.5em);\n    font-weight: 300;\n    text-align: center;\n    align-items: center;\n    font-family: "Asap", sans-serif;\n}\n\n#secondRow {\n    height: clamp(50%, 80%, 80%);\n}\n\n#menuContainer > div > div {\n    display: flex;\n    flex-wrap: wrap;\n    height: fit-content;\n    width: clamp(200px, 15%, 20%);\n    margin: 2%;\n    text-align: center;\n}\n\n#menuContainer > div > div > h2 {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n    width: 100%;\n    word-spacing: 5px;\n    font-weight: 300;\n    margin-bottom: 8%;\n    font-size: clamp(5px, 2em, 2em);\n}\n\n#menuContainer > div > div > p {\n    display: flex;\n    flex-wrap: wrap;\n    height: 85%;\n    width: 100%;\n    text-align: center;\n    word-spacing: 5px;\n    font-weight: 100;\n    font-size: clamp(1px, 1em, 1em);\n}\n\n#hoursContainer {\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n}\n\n#hoursContainer > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n}\n\n#hoursContainer > div > h2 {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    width: 100%;\n    font-size: 2.5em;\n    font-weight: 300;\n    margin-bottom: 6%;\n}\n\n#hoursContainer > div > div {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n#hoursContainer > div > div > p {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    width: 100%;    \n    font-size: 1.5em;\n    text-align: center;\n    word-spacing: 5px;\n    font-weight: 100;\n    margin: 0.5%;\n}\n\n#hoursContainer > div > div >:nth-child(1) {\n    font-weight: 250;\n}\n\n#contactsContainer {\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n}\n\n#contactsContainer > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    width: 100%;\n}\n\n#contactsContainer > div > h2 {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    text-align: center;\n    height: fit-content;\n    width: 100%;\n    font-size: 2.5em;\n    font-weight: 300;\n    margin-bottom: 6%;\n}\n\n#contactsContainer > div > div {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n#contactsContainer > div > div > p {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: fit-content;\n    width: 100%;    \n    font-size: 1.5em;\n    text-align: center;\n    word-spacing: 5px;\n    font-weight: 100;\n    margin: 0.5%;\n}\n\n/*\n#footer {\n    border: solid;\n    background-color: #fcd34d;\n    color: black;\n    height: fit-content;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fa-github {\n    color: black;\n    font-size: 27px;\n    transition: transform 0.3s ease-in-out;\n    margin: 0.5vh;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.2);\n}\n*/\n@media screen and (max-width: 768px) {\n    #header {\n      font-size: 12px;\n    }\n\n    #homeContainer > div > h1 {\n        font-size: 5rem;\n    }\n\n    #homeContainer > div > p {\n        font-size: 1.5rem;\n        width: 80%;\n    }\n\n    #aboutContainer {\n        align-items: center;\n    }\n\n    #aboutContainer > div > h2 {\n        font-size: 2.7em;\n    }\n\n    #aboutContainer > div > p {\n        width: 80%;    \n    }\n\n    #menuContainer {\n        height: fit-content;\n    }\n\n   #titleRow {\n        margin-bottom: 5vh;\n        font-size: 2.7em;\n   }\n   \n   #titleHourContainer {\n        font-size: 2.7em;\n   }\n\n   #titleContactContainer {\n        font-size: 2.7em;\n   }\n\n   #contentContainer {\n        overflow-y: none; \n}\n\n   #homeContainer > img {\n        height: 100vh;\n}\n  }\n\n@media screen and (max-width: 425px) {\n    #header {\n      font-size: 12px;\n    }\n\n    #homeContainer > div > h1 {\n        font-size: 5rem;\n    }\n\n    #homeContainer > div > p {\n        font-size: 1.5rem;\n        width: 80%;\n    }\n\n    #aboutContainer {\n        align-items: center;\n    }\n\n    #aboutContainer > div > p {\n        width: 80%;    \n    }\n\n    #menuContainer {\n        height: fit-content;\n    }\n  }\n',""]);const c=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},r=[],c=0;c<n.length;c++){var s=n[c],d=i.base?s[0]+i.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var h=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var u=o(f,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var c=e(a[r]);t[c].references--}for(var s=i(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{function n(n){const t=document.createElement("div");return t.textContent=n,t}const t=e.p+"a07d9d7cc075f0fc79e3.jpg";function i(n,t){const e=document.createElement(n);return e.setAttribute("id",t),e}function o(n,t){const e=document.getElementById(n),i=document.getElementById(t);e.addEventListener("click",(()=>{i.scrollIntoView({behavior:"smooth"})}))}var a=e(379),r=e.n(a),c=e(795),s=e.n(c),d=e(569),l=e.n(d),p=e(565),h=e.n(p),f=e(216),u=e.n(f),m=e(589),w=e.n(m),g=e(426),v={};v.styleTagTransform=w(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),r()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,document.getElementById("mainContainer").appendChild(function(){const t=document.createElement("header");return t.setAttribute("id","header"),t.appendChild(n("Home")).setAttribute("id","home"),t.appendChild(n("About")).setAttribute("id","about"),t.appendChild(n("Flavors")).setAttribute("id","flavors"),t.appendChild(n("Opening Hours")).setAttribute("id","openingHours"),t.appendChild(n("Contacts")).setAttribute("id","contacts"),t}()),document.getElementById("mainContainer").appendChild(function(){const n=document.createElement("div");n.setAttribute("id","contentContainer");const e=n.appendChild(i("div","homeContainer")),o=n.appendChild(i("div","aboutContainer")),a=n.appendChild(i("div","menuContainer")),r=n.appendChild(i("div","hoursContainer")),c=n.appendChild(i("div","contactsContainer")),s=new Image;s.src=t,e.appendChild(s);const d=i("div","textContainer");e.appendChild(d);const l=i("h1","shopName");l.textContent="FraMa",d.appendChild(l);const p=i("p","shopDesc");p.textContent="A little tradition, a pinch of love and a drop of innovation that will never make you forget our ice cream",d.appendChild(p);const h=i("div","aboutSubContainer");o.appendChild(h);const f=i("h2","aboutTitle");f.textContent="About us",h.appendChild(f);const u=i("p","aboutUs");u.textContent="From an ancient fourth generation family of ice cream makers from Germany who settled first in Zoldo Alto and then in Ancona, owners of the historic and oldest ice cream shop in Ancona. Come and try our ice cream that mixes tradition and modernity, bringing innovation to the cone every year.",h.appendChild(u);const m=i("h2","titleRow");m.textContent="(some of) The Ice Creams";const w=i("div","secondRow");a.appendChild(m),a.appendChild(w);const g=["Stracciatella","Cioccolato","Limone","Pino Pinguino","Pura Vida","La Bella Siciliana","Ciak Si Gira","Etna"],v=["Stracciatella is a flavor of ice cream based on milk and cream with dark chocolate, born in Bergamo.","Chocolate ice cream is one of the most appreciated flavors by those with a sweet tooth. With a creamy consistency and intense flavour.","Lemon is a thirst-quenching and digestive flavour, which is why it is required all year round and goes easily with all fruit flavours. For the realization of the lemon flavor only natural and high quality products are used, such as the IGP Sorrento lemon.","Unique and inimitable for its creaminess and ability to wrap the ice cream in a soft embrace with an intense chocolate and hazelnut flavour.","Pumpkin seed ice cream with a blueberry variegate.","Ricotta-based ice cream with pistachio wafer variegate and lemon biscuits.","Ciak Si Gira ice cream is a fiordipanna with caramelized popcorn.","Etna ice cream is a salted pistachio variegated with almonds."];for(let n=0;n<8;n++){const t=document.createElement("div");t.setAttribute("id","card"+n),w.appendChild(t);const e=document.createElement("h2");t.appendChild(e);const i=document.createElement("p");t.appendChild(i),e.textContent=g[n],i.textContent=v[n]}const C=["Opening Hours | March - October","Monday 14.00 - 24.00","Tuesday 14.00 - 24.00","Wednesday 14.00 - 24.00","Thursday 14.00 - 24.00","Friday 14.00 - 24.00","Saturday 12.00 - 24.00","Sunday 12.00 - 24.00"],y=i("div","hoursSubContainer"),x=i("h2","titleHourContainer");x.textContent="Opening Hours",y.appendChild(x);const b=document.createElement("div");y.appendChild(b),r.appendChild(y);for(let n=0;n<8;n++){const t=document.createElement("p");t.setAttribute("id","row"+n),b.appendChild(t),t.textContent=C[n]}const j=["Ancona, Via FraMa 2301","3963352411","lfJob@gmail.com","GitHub - MrP4l"],A=i("div","contactsSubContainer"),E=i("h2","titleContactContainer");A.appendChild(E),E.textContent="Contact Us",c.appendChild(A);const z=document.createElement("div");A.appendChild(z);for(let n=0;n<4;n++){const t=document.createElement("p");t.setAttribute("id","row"+n),z.appendChild(t),t.textContent=j[n]}return n}()),o("home","homeContainer"),o("about","aboutContainer"),o("flavors","menuContainer"),o("openingHours","hoursContainer"),o("contacts","contactsContainer")})()})();