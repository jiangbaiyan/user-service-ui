(function(e){function t(t){for(var r,a,c=t[0],i=t[1],f=t[2],l=0,s=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d5f51":"8db30cde","chunk-55ca3fff":"f57089ee","chunk-5de52806":"2da0e3dd","chunk-b4a84e48":"63b43022","chunk-e2aa2aea":"5108e0d1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-55ca3fff":1,"chunk-5de52806":1,"chunk-b4a84e48":1,"chunk-e2aa2aea":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d5f51":"31d6cfe0","chunk-55ca3fff":"13d7ee88","chunk-5de52806":"2f560493","chunk-b4a84e48":"ff1eef8e","chunk-e2aa2aea":"3ae48b38"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){f=s[c],l=f.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var s=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"51be":function(e,t,n){"use strict";var r={appId:"uc_all",accessToken:"uc_all",timestamp:1512412,unified_token:localStorage.getItem("unified_token")};t["a"]={commonParams:r}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=n("51be"),c=u["a"].commonParams,i={name:"app",mounted:function(){var e=this,t=localStorage.getItem("unified_token");null===t?this.$router.push("login"):(Object.assign(c,{unified_token:t}),this.$axios.post("/v1/unified/login",c).then((function(t){200===t.data.status?e.$router.push("/"):(e.$message.error("您的token过期，请重新登录"),e.$router.push("login"))})))}},f=i,l=(n("034f"),n("2877")),s=Object(l["a"])(f,a,o,!1,null,null,null),d=s.exports,p=(n("d3b7"),n("8c4f"));r["default"].use(p["a"]);var h=[{path:"/",name:"list",component:function(){return Promise.all([n.e("chunk-55ca3fff"),n.e("chunk-5de52806")]).then(n.bind(null,"a83e"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d0d5f51").then(n.bind(null,"7101"))}},{path:"/resource",name:"resource",component:function(){return Promise.all([n.e("chunk-55ca3fff"),n.e("chunk-e2aa2aea")]).then(n.bind(null,"3a64"))}},{path:"/auth",name:"auth",component:function(){return Promise.all([n.e("chunk-55ca3fff"),n.e("chunk-b4a84e48")]).then(n.bind(null,"fb02"))}}],m=new p["a"]({base:"",routes:h}),g=m,v=n("2f62");r["default"].use(v["a"]);var b=new v["a"].Store({state:{lists:[]},mutations:{addItem:function(e,t){e.lists.push(t)}},actions:{},modules:{}}),k=n("bc3a"),y=n.n(k),w=n("5c96"),_=n.n(w);n("c69f");r["default"].use(_.a);var P=n("8ec7"),O=n.n(P);r["default"].use(O.a),r["default"].config.productionTip=!1,r["default"].prototype.$axios=y.a,new r["default"]({router:g,store:b,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){},c69f:function(e,t,n){}});