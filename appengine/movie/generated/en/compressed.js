// Automatically generated file.  Do not edit!
'use strict';var f,g=this;function aa(a){a=a.split(".");for(var b=g,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Yb=function(){return a.fk?a.fk:a.fk=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function l(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a){return a[ka]||(a[ka]=++la)}var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;
function ma(a,b,c){return a.call.apply(a.bind,arguments)}function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function oa(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var qa=Date.now||function(){return+new Date};function n(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nu=function(a,c,h){for(var k=Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-2]=arguments[m];return b.prototype[c].apply(a,k)}};var ra;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}n(sa,Error);sa.prototype.name="CustomError";function ta(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ua(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function wa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function xa(a){if(!ya.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(za,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Aa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ba,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ca,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Da,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ea,"&#0;"));return a}var za=/&/g,Aa=/</g,Ba=/>/g,Ca=/"/g,Da=/'/g,Ea=/\x00/g,ya=/[\x00&<>"']/;
function Fa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=g.document.createElement("div");return a.replace(Ga,function(a,e){var h=b[a];if(h)return h;if("#"==e.charAt(0)){var k=Number("0"+e.substr(1));isNaN(k)||(h=String.fromCharCode(k))}h||(c.innerHTML=a+" ",h=c.firstChild.nodeValue.slice(0,-1));return b[a]=h})}
function Ha(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Ga=/&([^;\s<&]+);?/g;function Ia(a,b){return a<b?-1:a>b?1:0}function Ja(){return"background-color".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function Ka(a){var b=l(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};function La(a,b){b.unshift(a);sa.call(this,ta.apply(null,b));b.shift()}n(La,sa);La.prototype.name="AssertionError";function Ma(a,b){throw new La("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Na(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<Oa.length;h++)c=Oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Qa(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return Qa.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var Ra;a:{var Sa=g.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){Ra=Ta;break a}}Ra=""}function Ua(a){return-1!=Ra.indexOf(a)};var Va=Array.prototype,Wa=Va.indexOf?function(a,b,c){return Va.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Xa=Va.forEach?function(a,b,c){Va.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)},Ya=Va.filter?function(a,b,c){return Va.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=
0,k=l(a)?a.split(""):a,m=0;m<d;m++)if(m in k){var p=k[m];b.call(c,p,m,a)&&(e[h++]=p)}return e},Za=Va.map?function(a,b,c){return Va.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=l(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));return e},$a=Va.every?function(a,b,c){return Va.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;return!0};function ab(a,b){return 0<=Wa(a,b)}
function bb(a,b){var c=Wa(a,b),d;(d=0<=c)&&Va.splice.call(a,c,1);return d}function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}}function fb(a,b,c,d){Va.splice.apply(a,gb(arguments,1))}function gb(a,b,c){return 2>=arguments.length?Va.slice.call(a,b):Va.slice.call(a,b,c)};function hb(){0!=ib&&(jb[ja(this)]=this);this.se=this.se;this.dg=this.dg}var ib=0,jb={};hb.prototype.se=!1;hb.prototype.m=function(){if(!this.se&&(this.se=!0,this.Y(),0!=ib)){var a=ja(this);delete jb[a]}};hb.prototype.Y=function(){if(this.dg)for(;this.dg.length;)this.dg.shift()()};var kb="closure_listenable_"+(1E6*Math.random()|0),lb=0;function mb(a,b,c,d,e){this.dd=a;this.kg=null;this.src=b;this.type=c;this.sf=!!d;this.Mf=e;this.key=++lb;this.Xd=this.qf=!1}function nb(a){a.Xd=!0;a.dd=null;a.kg=null;a.src=null;a.Mf=null};function ob(a){this.src=a;this.ib={};this.af=0}ob.prototype.add=function(a,b,c,d,e){var h=a.toString();a=this.ib[h];a||(a=this.ib[h]=[],this.af++);var k=pb(a,b,d,e);-1<k?(b=a[k],c||(b.qf=!1)):(b=new mb(b,this.src,h,!!d,e),b.qf=c,a.push(b));return b};ob.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.ib))return!1;var e=this.ib[a];b=pb(e,b,c,d);return-1<b?(nb(e[b]),Va.splice.call(e,b,1),0==e.length&&(delete this.ib[a],this.af--),!0):!1};
function qb(a,b){var c=b.type;if(!(c in a.ib))return!1;var d=bb(a.ib[c],b);d&&(nb(b),0==a.ib[c].length&&(delete a.ib[c],a.af--));return d}ob.prototype.og=function(a){a=a&&a.toString();var b=0,c;for(c in this.ib)if(!a||c==a){for(var d=this.ib[c],e=0;e<d.length;e++)++b,nb(d[e]);delete this.ib[c];this.af--}return b};ob.prototype.ze=function(a,b,c,d){a=this.ib[a.toString()];var e=-1;a&&(e=pb(a,b,c,d));return-1<e?a[e]:null};
function pb(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Xd&&h.dd==b&&h.sf==!!c&&h.Mf==d)return e}return-1};function rb(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.hd=!1;this.Jk=!0}rb.prototype.Y=function(){};rb.prototype.m=function(){};rb.prototype.stopPropagation=function(){this.hd=!0};rb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Jk=!1};var sb=Ua("Opera")||Ua("OPR"),q=Ua("Trident")||Ua("MSIE"),tb=Ua("Gecko")&&-1==Ra.toLowerCase().indexOf("webkit")&&!(Ua("Trident")||Ua("MSIE")),r=-1!=Ra.toLowerCase().indexOf("webkit"),ub=r&&Ua("Mobile"),vb=Ua("Macintosh"),wb,xb=g.navigator||null;wb=!!xb&&-1!=(xb.appVersion||"").indexOf("X11");var yb=Ua("Android"),zb=Ua("iPhone")&&!Ua("iPod")&&!Ua("iPad"),Ab=Ua("iPad");function Bb(){var a=g.document;return a?a.documentMode:void 0}
var Cb=function(){var a="",b;if(sb&&g.opera)return a=g.opera.version,ha(a)?a():a;tb?b=/rv\:([^\);]+)(\)|;)/:q?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:r&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ra))?a[1]:"");return q&&(b=Bb(),b>parseFloat(a))?String(b):a}(),Db={};
function Eb(a){var b;if(!(b=Db[a])){b=0;for(var c=va(String(Cb)).split("."),d=va(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||"",m=d[h]||"",p=/(\d*)(\D*)/g,x=/(\d*)(\D*)/g;do{var w=p.exec(k)||["","",""],E=x.exec(m)||["","",""];if(0==w[0].length&&0==E[0].length)break;b=Ia(0==w[1].length?0:parseInt(w[1],10),0==E[1].length?0:parseInt(E[1],10))||Ia(0==w[2].length,0==E[2].length)||Ia(w[2],E[2])}while(0==b)}b=Db[a]=0<=b}return b}
var Fb=g.document,Gb=Fb&&q?Bb()||("CSS1Compat"==Fb.compatMode?parseInt(Cb,10):5):void 0;var Hb=!q||q&&9<=Gb,Ib=!q||q&&9<=Gb,Jb=q&&!Eb("9");!r||Eb("528");tb&&Eb("1.9b")||q&&Eb("8")||sb&&Eb("9.5")||r&&Eb("528");tb&&!Eb("8")||q&&Eb("9");var Kb="ontouchstart"in g||!!(g.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!g.navigator||!g.navigator.msMaxTouchPoints);function Lb(a){Lb[" "](a);return a}Lb[" "]=ba;function Mb(a,b){rb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Sh=!1;this.bb=null;a&&this.g(a,b)}n(Mb,rb);var Nb=[1,4,2];f=Mb.prototype;
f.g=function(a,b){this.bb=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(tb){var e;a:{try{Lb(d.nodeName);e=!0;break a}catch(h){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.Yj,set:this.Ps},offsetY:{configurable:!0,enumerable:!0,get:this.Zj,set:this.Qs}}):(this.offsetX=this.Yj(),
this.offsetY=this.Zj());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Sh=vb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Ob(a){return Hb?0==a.bb.button:"click"==a.type?!0:!!(a.bb.button&Nb[0])}f.stopPropagation=function(){Mb.j.stopPropagation.call(this);this.bb.stopPropagation?this.bb.stopPropagation():this.bb.cancelBubble=!0};f.preventDefault=function(){Mb.j.preventDefault.call(this);var a=this.bb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.Y=function(){};
f.Yj=function(){return r||void 0!==this.bb.offsetX?this.bb.offsetX:this.bb.layerX};f.Ps=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.Zj=function(){return r||void 0!==this.bb.offsetY?this.bb.offsetY:this.bb.layerY};f.Qs=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Pb="closure_lm_"+(1E6*Math.random()|0),Qb={},Rb=0;function Sb(a,b,c,d,e){if(ea(b)){for(var h=0;h<b.length;h++)Sb(a,b[h],c,d,e);return null}c=Tb(c);if(a&&a[kb])a=a.O(b,c,d,e);else{if(!b)throw Error("Invalid event type");var h=!!d,k=Ub(a);k||(a[Pb]=k=new ob(a));c=k.add(b,c,!1,d,e);c.kg||(d=Vb(),c.kg=d,d.src=a,d.dd=c,a.addEventListener?a.addEventListener(b.toString(),d,h):a.attachEvent(Xb(b.toString()),d),Rb++);a=c}return a}
function Vb(){var a=Yb,b=Ib?function(c){return a.call(b.src,b.dd,c)}:function(c){c=a.call(b.src,b.dd,c);if(!c)return c};return b}function Zb(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)Zb(a,b[h],c,d,e);else c=Tb(c),a&&a[kb]?a.Jb(b,c,d,e):a&&(a=Ub(a))&&(b=a.ze(b,c,!!d,e))&&$b(b)}
function $b(a){if(ga(a)||!a||a.Xd)return!1;var b=a.src;if(b&&b[kb])return qb(b.xc,a);var c=a.type,d=a.kg;b.removeEventListener?b.removeEventListener(c,d,a.sf):b.detachEvent&&b.detachEvent(Xb(c),d);Rb--;(c=Ub(b))?(qb(c,a),0==c.af&&(c.src=null,b[Pb]=null)):nb(a);return!0}function Xb(a){return a in Qb?Qb[a]:Qb[a]="on"+a}function ac(a,b,c,d){var e=!0;if(a=Ub(a))if(b=a.ib[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.sf==c&&!h.Xd&&(h=bc(h,d),e=e&&!1!==h)}return e}
function bc(a,b){var c=a.dd,d=a.Mf||a.src;a.qf&&$b(a);return c.call(d,b)}
function Yb(a,b){if(a.Xd)return!0;if(!Ib){var c=b||aa("window.event"),d=new Mb(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var h=a.type,m=c.length-1;!d.hd&&0<=m;m--){d.currentTarget=c[m];var p=ac(c[m],h,!0,d),e=e&&p}for(m=0;!d.hd&&m<c.length;m++)d.currentTarget=c[m],p=ac(c[m],h,!1,d),e=e&&p}return e}return bc(a,new Mb(b,
this))}function Ub(a){a=a[Pb];return a instanceof ob?a:null}var cc="__closure_events_fn_"+(1E9*Math.random()>>>0);function Tb(a){if(ha(a))return a;a[cc]||(a[cc]=function(b){return a.handleEvent(b)});return a[cc]};function dc(){hb.call(this);this.xc=new ob(this);this.fr=this;this.Rh=null}n(dc,hb);dc.prototype[kb]=!0;f=dc.prototype;f.Hf=function(){return this.Rh};f.wg=function(a){this.Rh=a};f.addEventListener=function(a,b,c,d){Sb(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Zb(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.Hf();if(c)for(b=[];c;c=c.Hf())b.push(c);var c=this.fr,d=a.type||a;if(l(a))a=new rb(a,c);else if(a instanceof rb)a.target=a.target||c;else{var e=a;a=new rb(d,c);Pa(a,e)}var e=!0,h;if(b)for(var k=b.length-1;!a.hd&&0<=k;k--)h=a.currentTarget=b[k],e=ec(h,d,!0,a)&&e;a.hd||(h=a.currentTarget=c,e=ec(h,d,!0,a)&&e,a.hd||(e=ec(h,d,!1,a)&&e));if(b)for(k=0;!a.hd&&k<b.length;k++)h=a.currentTarget=b[k],e=ec(h,d,!1,a)&&e;return e};
f.Y=function(){dc.j.Y.call(this);this.xc&&this.xc.og(void 0);this.Rh=null};f.O=function(a,b,c,d){return this.xc.add(String(a),b,!1,c,d)};f.Jb=function(a,b,c,d){return this.xc.remove(String(a),b,c,d)};function ec(a,b,c,d){b=a.xc.ib[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Xd&&k.sf==c){var m=k.dd,p=k.Mf||k.src;k.qf&&qb(a.xc,k);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Jk}f.ze=function(a,b,c,d){return this.xc.ze(String(a),b,c,d)};function fc(a,b,c){if(ha(a))c&&(a=oa(a,c));else if(a&&"function"==typeof a.handleEvent)a=oa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:g.setTimeout(a,b||0)};function gc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=gc.prototype;f.clone=function(){return new gc(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof gc?(this.x+=a.x,this.y+=a.y):(this.x+=a,ga(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.x*=a;this.y*=c;return this};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var hc={},t,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc;function wc(){this.ce=[]}f=wc.prototype;f.B=!1;f.Kh=Infinity;f.m=function(){this.clear()};f.oe=function(a){this.ce.push(a);this.vb()};f.qg=function(a){for(var b=!1,c,d=0;c=this.ce[d];d++)if(c==a){this.ce.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.vb()};
function xc(a,b){var c=[].concat(a.ce);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);t&&(d*=-1);c.sort(function(a,b){var c=a.ia(),m=b.ia();return c.y+d*c.x-(m.y+d*m.x)})}return c}f.cb=function(){for(var a=xc(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].Yc());return a};f.clear=function(){for(;this.ce.length;)this.ce[0].m()};f.Kf=function(){return 0};function yc(a,b){for(var c=a.cb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}
function zc(a){return Infinity==a.Kh?Infinity:a.Kh-a.cb().length}f.vb=function(){};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ac(a){var b;t&&(b=workarea.Kf());var c=u("xml");a=xc(a,!0);for(var d=0,e;e=a[d];d++){var h=Bc(e);e=e.ia();h.setAttribute("x",t?b-e.x:e.x);h.setAttribute("y",e.y);c.appendChild(h)}return c}
function Bc(a){var b=u("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Ja){var c=a.Ja();c&&b.appendChild(c)}for(var d=0;c=a.T[d];d++)for(var e=0,h;h=c.Pa[e];e++)if(h.name&&h.wd){var k=u("field",null,h.Aa());k.setAttribute("name",h.name);b.appendChild(k)}if(c=a.Df())c=u("comment",null,c),"object"==typeof a.ca&&(c.setAttribute("pinned",a.ca.K()),d=a.ca.Xc(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.T[e];e++){var m;h=!0;5!=c.type&&
(k=v(c.t),1==c.type?(m=u("value"),d=!0):3==c.type&&(m=u("statement")),k&&(m.appendChild(Bc(k)),h=!1),m.setAttribute("name",c.name),h||b.appendChild(m))}d&&b.setAttribute("inline",a.Ke);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Gd&&!y||b.setAttribute("deletable",!1);a.cc&&!y||b.setAttribute("movable",!1);a.wc&&!y||b.setAttribute("editable",!1);if(a=Cc(a))m=u("next",null,Bc(a)),b.appendChild(m);return b}
function Dc(a){return(new XMLSerializer).serializeToString(a)}function Ec(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Fc(a,b){var c;t&&(c=a.Kf());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var h=Gc(a,e),k=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(k)||isNaN(e)||h.moveBy(t?c-k:k,e)}}
function Gc(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var h=b.getAttribute("id");if(c&&h){d=Hc(h,a);if(!d)throw"Couldn't get Block with id: "+h;h=d.getParent();d.u&&d.m(!0,!1,!0);d.fill(a,e);d.Za=h}else d=Ic(a,e);d.sa&&d.sa();(h=b.getAttribute("inline"))&&A(d,"true"==h);(h=b.getAttribute("disabled"))&&d.Te("true"==h);(h=b.getAttribute("deletable"))&&Jc(d,"true"==h);if(h=b.getAttribute("movable"))d.cc="true"==h;(h=b.getAttribute("editable"))&&Kc(d,
"true"==h);for(var k=null,h=0,m;m=b.childNodes[h];h++)if(3!=m.nodeType||!m.data.match(/^\s*$/)){for(var k=null,p=0,x;x=m.childNodes[p];p++)3==x.nodeType&&x.data.match(/^\s*$/)||(k=x);p=m.getAttribute("name");switch(m.nodeName.toLowerCase()){case "mutation":d.Oa&&(d.Oa(m),d.sa&&d.sa());break;case "comment":d.Se(m.textContent);var w=m.getAttribute("pinned");w&&setTimeout(function(){d.ca&&d.ca.P&&d.ca.P("true"==w)},1);k=parseInt(m.getAttribute("w"),10);m=parseInt(m.getAttribute("h"),10);!isNaN(k)&&!isNaN(m)&&
d.ca&&d.ca.P&&d.ca.Jc(k,m);break;case "title":case "field":Lc(d,m.textContent,p);break;case "value":case "statement":m=B(d,p);if(!m)throw"Input "+p+" does not exist in block "+e;if(k&&"block"==k.nodeName.toLowerCase())if(k=Gc(a,k,c),k.H)Mc(m.t,k.H);else if(k.L)Mc(m.t,k.L);else throw"Child block does not have output or previous statement.";break;case "next":if(k&&"block"==k.nodeName.toLowerCase()){if(!d.C)throw"Next statement does not exist.";if(d.C.w)throw"Next statement is already connected.";k=
Gc(a,k,c);if(!k.L)throw"Next block does not have previous statement.";Mc(d.C,k.L)}break;default:console.log("Ignoring unknown tag: "+m.nodeName)}}(b=b.getAttribute("collapsed"))&&d.nd("true"==b);a.B&&((a=Cc(d))?a.G():d.G());return d}function Nc(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}g.Blockly||(g.Blockly={});g.Blockly.Xml||(g.Blockly.Xml={});g.Blockly.Xml.domToText=Dc;g.Blockly.Xml.domToWorkspace=Fc;g.Blockly.Xml.textToDom=Ec;
g.Blockly.Xml.workspaceToDom=Ac;/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Oc(a,b,c,d,e,h,k){var m=Pc;t&&(m=-m);this.kr=m*Math.PI/180;this.v=a;this.Wa=b;this.Ok=c;a.be.appendChild(this.dh(b,!(!h||!k)));Qc(this,d,e);h&&k||(a=this.Wa.getBBox(),h=a.width+2*Rc,k=a.height+2*Rc);this.Jc(h,k);Sc(this);Tc(this);this.Zh=!0;y||(C(this.pf,"mousedown",this,this.nr),this.oc&&C(this.oc,"mousedown",this,this.Ms))}var Rc=6,Pc=20,Uc=null,Vc=null;function Wc(){Uc&&(D(Uc),Uc=null);Vc&&(D(Vc),Vc=null)}f=Oc.prototype;f.Zh=!1;f.Mb=0;f.Ug=0;f.kd=0;f.Pe=0;f.S=0;f.Ha=0;f.Yg=!0;
f.dh=function(a,b){this.Nb=F("g",{},null);var c=F("g",{filter:"url(#blocklyEmboss)"},this.Nb);this.hj=F("path",{},c);this.pf=F("rect",{"class":"blocklyDraggable",x:0,y:0,rx:Rc,ry:Rc},c);b?(this.oc=F("g",{"class":t?"blocklyResizeSW":"blocklyResizeSE"},this.Nb),c=2*Rc,F("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.oc),F("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.oc),F("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.oc)):this.oc=
null;this.Nb.appendChild(a);return this.Nb};f.nr=function(a){Xc(this);Wc();Yc(a)||Zc(a)||($c(ad),this.Sj=t?this.kd+a.clientX:this.kd-a.clientX,this.Fr=this.Pe-a.clientY,Uc=C(document,"mouseup",this,Wc),Vc=C(document,"mousemove",this,this.or),bd(),a.stopPropagation())};f.or=function(a){this.Yg=!1;this.kd=t?this.Sj-a.clientX:this.Sj+a.clientX;this.Pe=this.Fr+a.clientY;Sc(this);Tc(this)};
f.Ms=function(a){Xc(this);Wc();Yc(a)||($c(ad),this.Ls=t?this.S+a.clientX:this.S-a.clientX,this.Ks=this.Ha-a.clientY,Uc=C(document,"mouseup",this,Wc),Vc=C(document,"mousemove",this,this.Ns),bd(),a.stopPropagation())};f.Ns=function(a){this.Yg=!1;var b=this.Ls,c=this.Ks+a.clientY,b=t?b-a.clientX:b+a.clientX;this.Jc(b,c);t&&Sc(this)};function Xc(a){a.Nb.parentNode.appendChild(a.Nb)}function Qc(a,b,c){a.Mb=b;a.Ug=c;a.Zh&&Sc(a)}
function Sc(a){a.Nb.setAttribute("transform","translate("+(t?a.Mb-a.kd-a.S:a.Mb+a.kd)+", "+(a.Pe+a.Ug)+")")}f.Xc=function(){return{width:this.S,height:this.Ha}};
f.Jc=function(a,b){var c=2*Rc;a=Math.max(a,c+45);b=Math.max(b,c+18);this.S=a;this.Ha=b;this.pf.setAttribute("width",a);this.pf.setAttribute("height",b);this.oc&&(t?this.oc.setAttribute("transform","translate("+2*Rc+", "+(b-c)+") scale(-1 1)"):this.oc.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.Zh){if(this.Yg){var c=-this.S/4,d=-this.Ha-25,e=this.v.yc();t?this.Mb-e.Ab-c-this.S<cd?c=this.Mb-e.Ab-this.S-cd:this.Mb-e.Ab-c>e.xa&&(c=this.Mb-e.Ab-e.xa):this.Mb+c<e.Ab?c=e.Ab-this.Mb:
e.Ab+e.xa<this.Mb+c+this.S+10+cd&&(c=e.Ab+e.xa-this.Mb-this.S-cd);this.Ug+d<e.Mc&&(d=this.Ok.getBBox().height);this.kd=c;this.Pe=d}Sc(this);Tc(this)}dd(this.Nb,"resize")};
function Tc(a){var b=[],c=a.S/2,d=a.Ha/2,e=-a.kd,h=-a.Pe;if(c==e&&d==h)b.push("M "+c+","+d);else{h-=d;e-=c;t&&(e*=-1);var k=Math.sqrt(h*h+e*e),m=Math.acos(e/k);0>h&&(m=2*Math.PI-m);var p=m+Math.PI/2;p>2*Math.PI&&(p-=2*Math.PI);var x=Math.sin(p),w=Math.cos(p),E=a.Xc(),p=(E.width+E.height)/10,p=Math.min(p,E.width,E.height)/2,E=1-8/k,e=c+E*e,h=d+E*h,E=c+p*w,z=d+p*x,c=c-p*w,d=d-p*x,x=m+a.kr;x>2*Math.PI&&(x-=2*Math.PI);m=Math.sin(x)*k/4;k=Math.cos(x)*k/4;b.push("M"+E+","+z);b.push("C"+(E+k)+","+(z+m)+
" "+e+","+h+" "+e+","+h);b.push("C"+e+","+h+" "+(c+k)+","+(d+m)+" "+c+","+d)}b.push("z");a.hj.setAttribute("d",b.join(" "))}f.k=function(a){this.pf.setAttribute("fill",a);this.hj.setAttribute("fill",a)};f.m=function(){Wc();ed(this.Nb);this.Ok=this.Wa=this.v=this.Nb=null};function fd(a,b){this.width=a;this.height=b}f=fd.prototype;f.clone=function(){return new fd(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.gk=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=ga(b)?b:a;this.width*=a;this.height*=c;return this};function gd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=gd.prototype;f.Kf=function(){return this.right-this.left};f.clone=function(){return new gd(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof gd?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ia(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof gc?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,ga(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function hd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=hd.prototype;f.clone=function(){return new hd(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof hd?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Ld=function(){return new fd(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof gc?(this.left+=a.x,this.top+=a.y):(this.left+=a,ga(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function id(a){this.v=a}f=id.prototype;f.me=47;f.Eg=45;f.ie=15;f.Hn=35;f.Ji=35;f.hf=25;f.Pd=!1;f.o=null;f.Cg=null;f.Ih=0;f.Dc=0;f.nk=0;f.Yk=0;
f.I=function(){this.o=F("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=F("clipPath",{id:"blocklyTrashBodyClipPath"},this.o);F("rect",{width:this.me,height:this.Eg,y:this.ie},a);F("image",{width:jd,height:kd,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.o).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ld+md);a=F("clipPath",{id:"blocklyTrashLidClipPath"},this.o);F("rect",{width:this.me,height:this.ie},a);this.Cg=F("image",{width:jd,height:kd,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.o);this.Cg.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ld+md);this.Vg();return this.o};f.g=function(){nd(this,!1);this.Fc();C(window,"resize",this,this.Fc)};f.m=function(){this.o&&(ed(this.o),this.o=null);this.v=this.Cg=null;g.clearTimeout(this.Ih)};f.Fc=function(){var a=this.v.yc();a&&(this.nk=t?this.Ji:a.xa+a.qb-this.me-this.Ji,this.Yk=a.Ta+a.rb-(this.Eg+this.ie)-this.Hn,this.o.setAttribute("transform","translate("+this.nk+","+this.Yk+")"))};
f.Ae=function(){var a=od(this.o);return new hd(a.x-this.hf,a.y-this.hf,this.me+2*this.hf,this.Eg+this.ie+2*this.hf)};function nd(a,b){a.Pd!=b&&(g.clearTimeout(a.Ih),a.Pd=b,a.Vg())}f.Vg=function(){this.Dc+=this.Pd?.2:-.2;this.Dc=Math.min(Math.max(this.Dc,0),1);var a=45*this.Dc;this.Cg.setAttribute("transform","rotate("+(t?-a:a)+", "+(t?4:this.me-4)+", "+(this.ie-2)+")");this.o.style.opacity=.2+.2*this.Dc;if(0<this.Dc||1>this.Dc)this.Ih=fc(this.Vg,20,this)};f.close=function(){nd(this,!1)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function pd(a){this.v=a;this.na=null;this.De=new qd(a,!0,!0);this.cf=new qd(a,!1,!0);this.qe=F("rect",{height:cd,width:cd,style:"fill: #fff"},null);rd(this.qe,a.be)}pd.prototype.m=function(){D(this.gg);this.gg=null;ed(this.qe);this.na=this.v=this.qe=null;this.De.m();this.De=null;this.cf.m();this.cf=null};
pd.prototype.resize=function(){var a=this.v.yc();if(a){var b=!1,c=!1;this.na&&this.na.xa==a.xa&&this.na.Ta==a.Ta&&this.na.rb==a.rb&&this.na.qb==a.qb?(this.na&&this.na.Dd==a.Dd&&this.na.Ab==a.Ab&&this.na.ic==a.ic||(b=!0),this.na&&this.na.sb==a.sb&&this.na.Mc==a.Mc&&this.na.Ob==a.Ob||(c=!0)):c=b=!0;b&&this.De.resize(a);c&&this.cf.resize(a);this.na&&this.na.xa==a.xa&&this.na.qb==a.qb||this.qe.setAttribute("x",this.cf.Nc);this.na&&this.na.Ta==a.Ta&&this.na.rb==a.rb||this.qe.setAttribute("y",this.De.Dg);
this.na=a}};pd.prototype.set=function(a,b){this.De.set(a);this.cf.set(b)};function qd(a,b,c){this.v=a;this.hg=c||!1;this.hb=b;this.dh();b?(this.Ib.setAttribute("height",cd),this.Da.setAttribute("height",cd-6),this.Da.setAttribute("y",3)):(this.Ib.setAttribute("width",cd),this.Da.setAttribute("width",cd-6),this.Da.setAttribute("x",3));this.vk=C(this.Ib,"mousedown",this,this.xs);this.wk=C(this.Da,"mousedown",this,this.ys)}var sd,td,cd=15;aa("document.documentElement.ontouchstart")&&(cd=25);f=qd.prototype;
f.m=function(){this.fg();this.gg&&(D(this.gg),this.gg=null);D(this.vk);this.vk=null;D(this.wk);this.wk=null;ed(this.o);this.v=this.Da=this.Ib=this.o=null};
f.resize=function(a){if(!a&&(a=this.v.yc(),!a))return;if(this.hb){var b=a.xa;this.hg?b-=cd:this.P(b<a.sb);this.mb=b/a.Dd;if(-Infinity===this.mb||Infinity===this.mb||isNaN(this.mb))this.mb=0;var c=a.xa*this.mb,d=(a.Ab-a.ic)*this.mb;this.Da.setAttribute("width",Math.max(0,c));this.Nc=a.qb;this.hg&&t&&(this.Nc+=a.qb+cd);this.Dg=a.rb+a.Ta-cd;this.o.setAttribute("transform","translate("+this.Nc+", "+this.Dg+")");this.Ib.setAttribute("width",Math.max(0,b));this.Da.setAttribute("x",ud(this,d))}else{b=a.Ta;
this.hg?b-=cd:this.P(b<a.sb);this.mb=b/a.sb;if(-Infinity===this.mb||Infinity===this.mb||isNaN(this.mb))this.mb=0;c=a.Ta*this.mb;d=(a.Mc-a.Ob)*this.mb;this.Da.setAttribute("height",Math.max(0,c));this.Nc=a.qb;t||(this.Nc+=a.xa-cd);this.Dg=a.rb;this.o.setAttribute("transform","translate("+this.Nc+", "+this.Dg+")");this.Ib.setAttribute("height",Math.max(0,b));this.Da.setAttribute("y",ud(this,d))}vd(this)};
f.dh=function(){this.o=F("g",{},null);this.Ib=F("rect",{"class":"blocklyScrollbarBackground"},this.o);var a=Math.floor((cd-6)/2);this.Da=F("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.o);rd(this.o,this.v.be)};f.K=function(){return"none"!=this.o.getAttribute("display")};f.P=function(a){if(a!=this.K()){if(this.hg)throw"Unable to toggle visibility of paired scrollbars.";a?this.o.setAttribute("display","block"):(this.v.Mk({x:0,y:0}),this.o.setAttribute("display","none"))}};
f.xs=function(a){this.fg();if(!Yc(a)){var b=wd(a),b=this.hb?b.x:b.y,c=od(this.Da),c=this.hb?c.x:c.y,d=parseFloat(this.Da.getAttribute(this.hb?"width":"height")),e=parseFloat(this.Da.getAttribute(this.hb?"x":"y")),h=.95*d;b<=c?e-=h:b>=c+d&&(e+=h);this.Da.setAttribute(this.hb?"x":"y",ud(this,e));vd(this)}a.stopPropagation()};
f.ys=function(a){this.fg();Yc(a)||(this.Ss=parseFloat(this.Da.getAttribute(this.hb?"x":"y")),this.Us=this.hb?a.clientX:a.clientY,sd=C(document,"mouseup",this,this.fg),td=C(document,"mousemove",this,this.As));a.stopPropagation()};f.As=function(a){this.Da.setAttribute(this.hb?"x":"y",ud(this,this.Ss+((this.hb?a.clientX:a.clientY)-this.Us)));vd(this)};f.fg=function(){xd();bd(!0);sd&&(D(sd),sd=null);td&&(D(td),td=null)};
function ud(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.hb?"width":"height",d=parseFloat(a.Ib.getAttribute(c)),c=parseFloat(a.Da.getAttribute(c));b=Math.min(b,d-c)}return b}function vd(a){var b=parseFloat(a.Da.getAttribute(a.hb?"x":"y")),c=parseFloat(a.Ib.getAttribute(a.hb?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.hb?c.x=b:c.y=b;a.v.Mk(c)}f.set=function(a){this.Da.setAttribute(this.hb?"x":"y",a*this.mb);vd(this)};
function rd(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

 Visual Blocks Editor

 Copyright 2014 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function yd(a,b){yd.j.constructor.call(this);this.yc=a;this.Mk=b;var c=[];c[1]=new zd;c[2]=new zd;c[3]=new zd;c[4]=new zd;this.sr=c}n(yd,wc);f=yd.prototype;f.B=!0;f.hk=!1;f.nh=!1;f.scrollX=0;f.scrollY=0;f.zb=null;f.ph=null;f.Ic=null;f.I=function(){this.o=F("g",{},null);this.ba=F("g",{},this.o);this.be=F("g",{},this.o);this.vb();return this.o};
f.m=function(){this.B=!1;yd.j.m.call(this);this.o&&(ed(this.o),this.o=null);this.be=this.ba=null;this.Z&&(this.Z.m(),this.Z=null);this.zb&&(this.zb.m(),this.zb=null)};function Ad(){var a=G;if(ic&&!y){a.zb=new id(a);var b=a.zb.I();a.o.insertBefore(b,a.ba);a.zb.g()}}f.oe=function(a){yd.j.oe.call(this,a);Bd&&this==G&&-1==Cd.indexOf(a)&&Cd.push(a)};f.qg=function(a){yd.j.qg.call(this,a);Bd&&this==G&&Cd.Hu(a)};f.clear=function(){bd();yd.j.clear.call(this)};f.Kf=function(){return this.yc().xa};
f.G=function(){for(var a=this.cb(),b=0,c;c=a[b];b++)c.Yc().length||c.G()};function Dd(a,b){a.ti=b;a.ui&&(D(a.ui),a.ui=null);b&&(a.ui=C(a.ba,"blocklySelectChange",a,function(){this.ti=!1}))}function Ed(a){var b=G;b.ti&&0!=Fd&&Dd(b,!1);if(b.ti){var c=null;if(a&&(c=yc(b,a),!c))return;Dd(b,!1);c?c.select():Gd&&Hd();setTimeout(function(){Dd(b,!0)},1)}}f.vb=function(){if(this.B){this.ph&&clearTimeout(this.ph);var a=this.ba;a&&(this.ph=setTimeout(function(){dd(a,"blocklyWorkspaceChange")},0))}};
function Id(a,b){var c=wd(b),c=new gc(c.x,c.y);if(a.Mj){if(a.Mj.contains(c))return nd(a.zb,!0),$c(Jd),!0;nd(a.zb,!1)}if(a.Lj&&a.Lj.contains(c))return $c(Jd),!0;$c(ad);return!1}yd.prototype.clear=yd.prototype.clear;/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Kd(a){this.J=a}f=Kd.prototype;f.la=null;f.ad=0;f.bd=0;f.Sc=function(){this.Ia||(this.Ia=F("g",{},null),this.J.V().appendChild(this.Ia),C(this.Ia,"mouseup",this,this.Bh),this.sc())};f.m=function(){ed(this.Ia);this.Ia=null;this.P(!1);this.J=null};f.sc=function(){this.J.ac?Ld(this.Ia,"blocklyIconGroup"):Md(this.Ia,"blocklyIconGroup")};f.K=function(){return!!this.la};f.Bh=function(){this.J.ac||this.P(!this.K())};f.Lc=function(){if(this.K()){var a=Nd(Od(this.J.bh));this.la.k(a)}};
function Pd(a){var b=a.J.ia(),c=Qd(a.Ia),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.ad||b!==a.bd)a.ad=d,a.bd=b,a.K()&&Qc(a.la,d,b)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Rd(a){Rd.j.constructor.call(this,null);this.Bk=[];for(var b=0;b<a.length;b++){var c=u("block",{type:a[b]});this.Bk[b]=c}}n(Rd,Kd);f=Rd.prototype;f.fe=0;f.df=0;function Sd(a){a.Nd||(Kd.prototype.Sc.call(a),F("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.Ia),a.Nd=F("text",{"class":"blocklyIconMark",x:8,y:12},a.Ia),a.Nd.appendChild(document.createTextNode("\u2605")))}f.Bh=function(a){this.J.wc&&!y&&Kd.prototype.Bh.call(this,a)};
f.eh=function(){this.td=F("svg",{x:Rc,y:Rc},null);F("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.td);var a=this;this.v=new yd(function(){var b=0;t&&(b+=a.fe);return{Ta:a.df,xa:0,rb:0,qb:b}},null);this.v.Z=new Td;this.v.Z.pe=!1;this.td.appendChild(this.v.Z.I());this.td.appendChild(this.v.I());return this.td};f.sc=function(){this.J.wc&&!y?Kd.prototype.sc.call(this):(this.P(!1),Ld(this.Ia,"blocklyIconGroup"))};
f.sg=function(){var a=2*Rc,b=this.v.ba.getBBox(),c=Ud(this.v.Z),d;d=t?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.sb+20);d+=3*a;if(Math.abs(this.fe-d)>a||Math.abs(this.df-b)>a)this.fe=d,this.df=b,this.la.Jc(d+a,b+a),this.td.setAttribute("width",this.fe),this.td.setAttribute("height",this.df);t&&this.v.ba.setAttribute("transform","translate("+this.fe+",0)")};
f.P=function(a){if(a!=this.K())if(a){this.la=new Oc(this.J.u,this.eh(),this.J.ec,this.ad,this.bd,null,null);var b=this;this.v.Z.g(this.v);this.v.Z.show(this.Bk);this.pc=this.J.Ed(this.v);a=this.pc.Db();for(var c=0,d;d=a[c];c++)d.G();this.pc.cc=!1;Jc(this.pc,!1);a=2*this.v.Z.La;c=this.v.Z.S+a;t&&(c=-c);this.pc.moveBy(c,a);this.J.Qe&&(this.J.Qe(this.pc),this.ki=C(this.J.u.ba,"blocklyWorkspaceChange",this.J,function(){b.J.Qe(b.pc)}));this.sg();C(this.v.ba,"blocklyWorkspaceChange",this.J,function(){if(0==
Fd)for(var a=xc(b.v,!1),c=0,d;d=a[c];c++){var m=d.ia(),p=Vd(d);20>m.y+p.height&&d.moveBy(0,20-p.height-m.y)}b.pc.u==b.v&&(a=b.J.B,b.J.B=!1,b.J.Cd(b.pc),b.J.B=a,b.J.sa(),b.J.B&&b.J.G(),b.sg(),b.J.u.vb())});this.Lc()}else this.td=null,this.v.m(),this.pc=this.v=null,this.la.m(),this.la=null,this.df=this.fe=0,this.ki&&(D(this.ki),this.ki=null)};f.m=function(){this.J.Fb=null;Kd.prototype.m.call(this)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Wd(a,b){this.h=a;this.w=null;this.type=b;this.ga=this.Sb=0;this.$b=!1;this.vc=this.h.u.sr}f=Wd.prototype;f.m=function(){if(this.w)throw"Disconnect connection before disposing of it.";this.$b&&Xd(this.vc[this.type],this);this.$b=!1;Yd==this&&(Yd=null);Zd==this&&(Zd=null)};function $d(a){return 1==a.type||3==a.type}
function Mc(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.u!==b.h.u)throw"Blocks are on different workspaces.";if(ae[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.w)throw"Source connection already connected (value).";if(b.w){var c=v(b);c.$a(null);if(!c.H)throw"Orphan block does not have an output connection.";for(var d=a.h;d=be(d,c);)if(v(d))d=v(d);else{Mc(d,c.H);c=null;break}c&&setTimeout(function(){ce(c.H,b)},de)}}else{if(a.w)throw"Source connection already connected (block).";
if(b.w){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=v(b);c.$a(null);if(!c.L)throw"Orphan block does not have a previous connection.";for(d=a.h;d.C;)if(d.C.w)d=Cc(d);else{ee(c.L,d.C)&&(Mc(d.C,c.L),c=null);break}c&&setTimeout(function(){ce(c.L,b)},de)}}var e;$d(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.w=b;b.w=a;e.$a(d);d.B&&fe(d);e.B&&fe(e);d.B&&e.B&&(3==a.type||4==a.type?e.G():d.G())}
function be(a,b){for(var c=!1,d=0;d<a.T.length;d++){var e=a.T[d].t;if(e&&1==e.type&&ee(b.H,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.w;if(!a)throw"Source connection not connected.";if(a.w!=this)throw"Target connection not connected to source connection.";this.w=a.w=null;var b;$d(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.B&&b.G();a.B&&(fe(a),a.G())};function v(a){return a.w?a.w.h:null}
function ce(a,b){if(0==Fd){var c=ge(a.h);if(!c.ac){var d=!1;if(!c.cc||y){c=ge(b.h);if(!c.cc||y)return;b=a;d=!0}c.V().parentNode.appendChild(c.V());var e=b.Sb+he-a.Sb,h=b.ga+he-a.ga;d&&(h=-h);t&&(e=-e);c.moveBy(e,h)}}}f.moveTo=function(a,b){this.$b&&Xd(this.vc[this.type],this);this.Sb=a;this.ga=b;ie(this.vc[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.Sb+a,this.ga+b)};
f.dk=function(){var a;1==this.type||2==this.type?(a=t?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=t?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.ia();Wd.Of=F("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.Sb-b.x)+", "+(this.ga-b.y)+")"},this.h.V())};
function je(a){var b=Math.round(a.w.Sb-a.Sb),c=Math.round(a.w.ga-a.ga);if(0!=b||0!=c){a=v(a);var d=a.V();if(!d)throw"block is not rendered.";d=Qd(d);a.V().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");ke(a,-b,-c)}}
function le(a,b,c,d){function e(a){var c=h[a];if((2==c.type||4==c.type)&&c.w||1==c.type&&c.w&&(!v(c).cc||y)||!ee(E,c))return!0;c=c.h;do{if(w==c)return!0;c=c.getParent()}while(c);var d=k-h[a].Sb,c=m-h[a].ga,d=Math.sqrt(d*d+c*c);d<=b&&(x=h[a],b=d);return c<b}if(a.w)return{t:null,Dk:b};var h=a.vc[ae[a.type]],k=a.Sb+c,m=a.ga+d;c=0;for(var p=d=h.length-2;c<p;)h[p].ga<m?c=p:d=p,p=Math.floor((c+d)/2);d=c=p;var x=null,w=a.h,E=a;if(h.length){for(;0<=c&&e(c);)c--;do d++;while(d<h.length&&e(d))}return{t:x,Dk:b}}
function ee(a,b){if(!a.Bd||!b.Bd)return!0;for(var c=0;c<a.Bd.length;c++)if(-1!=b.Bd.indexOf(a.Bd[c]))return!0;return!1}f.s=function(a){a?(ea(a)||(a=[a]),this.Bd=a,this.w&&!ee(this,this.w)&&($d(this)?v(this).$a(null):this.h.$a(null),this.h.Ma())):this.Bd=null;return this};
function me(a){var b=he;function c(a){var c=e-d[a].Sb,k=h-d[a].ga;Math.sqrt(c*c+k*k)<=b&&p.push(d[a]);return k<b}var d=a.vc[ae[a.type]],e=a.Sb,h=a.ga;a=0;for(var k=d.length-2,m=k;a<m;)d[m].ga<h?a=m:k=m,m=Math.floor((a+k)/2);var k=a=m,p=[];if(d.length){for(;0<=a&&c(a);)a--;do k++;while(k<d.length&&c(k))}return p}
function ne(a){a.$b||ie(a.vc[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=v(a)){var c;a.isCollapsed()?(c=[],a.H&&c.push(a.H),a.C&&c.push(a.C),a.L&&c.push(a.L)):c=oe(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,ne(c[d]));0==b.length&&(b[0]=a)}return b}function zd(){}zd.prototype=[];
function ie(a,b){if(b.$b)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].ga<b.ga)c=e+1;else if(a[e].ga>b.ga)d=e;else{c=e;break}}a.splice(c,0,b);b.$b=!0}
function Xd(a,b){if(!b.$b)throw"Connection not in database.";b.$b=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].ga<b.ga?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].ga==b.ga;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].ga==b.ga);throw"Unable to find connection in connectionDB.";};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var H={at:0,Jr:function(){var a=(++H.at).toString();return Bd?pe(a):a},lu:function(a){var b={g:function(){var b=this;this.k(a.qj);this.p=a.p;"string"==typeof a.kb?this.i(a.kb):"function"==typeof a.kb&&this.i(function(){return a.kb(b)});"undefined"!=a.Es?I(this,!0,a.Es):(J(this,"undefined"==typeof a.Gs?!0:a.Gs),L(this,"undefined"==typeof a.ts?!0:a.ts));var d=[];d.push(a.text);a.jr&&a.jr.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
Ma("addTemplate() can only handle value inputs.")});d.push(1);a.ds&&this.Nu(a.ds);qe.prototype.ta.apply(this,d)}};b.Ja=a.Ou?function(){var b=a.qs?a.Du():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.qs;H[a.pu]=b}};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function re(a){re.j.constructor.call(this,a);this.Sc()}n(re,Kd);f=re.prototype;f.da="";f.S=160;f.Ha=80;f.Sc=function(){Kd.prototype.Sc.call(this);F("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.Ia);this.Nd=F("text",{"class":"blocklyIconMark",x:8,y:13},this.Ia);this.Nd.appendChild(document.createTextNode("?"))};
f.eh=function(){this.we=F("foreignObject",{x:Rc,y:Rc},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.pb=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.pb.className="blocklyCommentTextarea";this.pb.setAttribute("dir",t?"RTL":"LTR");a.appendChild(this.pb);this.we.appendChild(a);C(this.pb,"mouseup",this,this.Zs);return this.we};
f.sc=function(){this.K()&&(this.P(!1),this.P(!0));Kd.prototype.sc.call(this)};f.sg=function(){var a=this.la.Xc(),b=2*Rc;this.we.setAttribute("width",a.width-b);this.we.setAttribute("height",a.height-b);this.pb.style.width=a.width-b-4+"px";this.pb.style.height=a.height-b-4+"px"};
f.P=function(a){if(a!=this.K())if((!this.J.wc||y)&&!this.pb||q)se.prototype.P.call(this,a);else{var b=this.fb(),c=this.Xc();a?(this.la=new Oc(this.J.u,this.eh(),this.J.ec,this.ad,this.bd,this.S,this.Ha),C(this.la.Nb,"resize",this,this.sg),this.Lc(),this.da=null):(this.la.m(),this.we=this.pb=this.la=null);this.ka(b);this.Jc(c.width,c.height)}};f.Zs=function(){Xc(this.la);this.pb.focus()};f.Xc=function(){return this.K()?this.la.Xc():{width:this.S,height:this.Ha}};
f.Jc=function(a,b){this.pb?this.la.Jc(a,b):(this.S=a,this.Ha=b)};f.fb=function(){return this.pb?this.pb.value:this.da};f.ka=function(a){this.pb?this.pb.value=a:this.da=a};f.m=function(){this.J.ca=null;Kd.prototype.m.call(this)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var te=!1,ue=0,ve=0,we={x:0,y:0},xe=null,ye=null,ze=null,Ae=null,Be=null,Ce=null;function De(){var a=F("g",{"class":"blocklyHidden"},null);ze=a;Ce=F("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Be=F("rect",{"class":"blocklyTooltipBackground"},a);Ae=F("text",{"class":"blocklyTooltipText"},a);return a}function Ee(a){C(a,"mouseover",null,Fe);C(a,"mouseout",null,Ge);C(a,"mousemove",null,He)}function Fe(a){for(a=a.target;!l(a.kb)&&!ha(a.kb);)a=a.kb;xe!=a&&(Ie(),ye=null,xe=a);clearTimeout(ue)}
function Ge(){ue=setTimeout(function(){ye=xe=null;Ie()},1);clearTimeout(ve)}function He(a){xe&&xe.kb&&0==Fd&&!Je&&(te?(a=wd(a),10<Math.sqrt(Math.pow(we.x-a.x,2)+Math.pow(we.y-a.y,2))&&Ie()):ye!=xe&&(clearTimeout(ve),we=wd(a),ve=setTimeout(Ke,1E3)))}function Ie(){te&&(te=!1,ze&&(ze.style.display="none"));clearTimeout(ve)}
function Ke(){ye=xe;if(ze){Le(Ae);var a=xe.kb;ha(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,h,k=1;do{e=d;h=b;for(var b=[],m=c.length/k,p=1,d=0;d<c.length-1;d++)p<(d+1.5)/m?(p++,b[d]=!0):b[d]=!1;for(var b=Me(c,b,a),d=Ne(c,b,a),m=c,p=[],x=0;x<m.length;x++)p.push(m[x]),void 0!==b[x]&&p.push(b[x]?"\n":" ");b=p.join("");k++}while(d>e);a=h}a=a.split("\n");for(c=0;c<a.length;c++)F("tspan",{dy:"1em",
x:5},Ae).appendChild(document.createTextNode(a[c]));te=!0;ze.style.display="block";a=Ae.getBBox();c=10+a.width;e=a.height;Be.setAttribute("width",c);Be.setAttribute("height",e);Ce.setAttribute("width",c);Ce.setAttribute("height",e);if(t)for(e=a.width,h=0;k=Ae.childNodes[h];h++)k.setAttribute("text-anchor","end"),k.setAttribute("x",e+5);e=we.x;e=t?e-(0+c):e+0;c=we.y+10;h=Oe();c+a.height>h.height&&(c-=a.height+20);t?e=Math.max(5,e):e+a.width>h.width-10&&(e=h.width-a.width-10);ze.setAttribute("transform",
"translate("+e+","+c+")")}}function Ne(a,b,c){for(var d=[0],e=[],h=0;h<a.length;h++)d[d.length-1]+=a[h].length,!0===b[h]?(d.push(0),e.push(a[h].charAt(a[h].length-1))):!1===b[h]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(h=b=0;h<d.length;h++)b-=2*Math.pow(Math.abs(c-d[h]),1.5),b-=Math.pow(a-d[h],1.5),-1!=".?!".indexOf(e[h])?b+=c/3:-1!=",;)]}".indexOf(e[h])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Me(a,b,c){for(var d=Ne(a,b,c),e,h=0;h<b.length-1;h++)if(b[h]!=b[h+1]){var k=[].concat(b);k[h]=!k[h];k[h+1]=!k[h+1];var m=Ne(a,k,c);m>d&&(d=m,e=k)}return e?Me(a,e,c):b};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Pe(a){this.Ca=new fd(0,25);this.ka(a)}f=Pe.prototype;f.h=null;f.pa=!0;f.clone=function(){Ma("There should never be an instance of Field, only its derived classes.")};f.wd=!0;f.g=function(a){this.h||(this.h=a,this.ma=F("g",{},null),this.Bb=F("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.ma),this.Ka=F("text",{"class":"blocklyText"},this.ma),this.sc(),a.V().appendChild(this.ma),this.Lh=C(this.ma,"mouseup",this,this.Ph),Qe(this))};
f.m=function(){this.Lh&&(D(this.Lh),this.Lh=null);this.h=null;ed(this.ma);this.Bb=this.Ka=this.ma=null};f.sc=function(){this.wd&&(this.h.wc&&!y?(Md(this.ma,"blocklyEditableText"),Ld(this.ma,"blocklyNoNEditableText"),this.ma.style.cursor=this.ef):(Md(this.ma,"blocklyNonEditableText"),Ld(this.ma,"blocklyEditableText"),this.ma.style.cursor=""))};f.K=function(){return this.pa};f.P=function(a){if(this.pa!=a){this.pa=a;var b=this.V();b&&(b.style.display=a?"block":"none",this.Yd())}};f.V=function(){return this.ma};
f.Yd=function(){if(this.pa){try{var a=this.Ka.getComputedTextLength()}catch(b){a=8*this.Ka.textContent.length}this.Bb&&this.Bb.setAttribute("width",a+10)}else a=0;this.Ca.width=a};f.Ld=function(){this.Ca.width||this.Yd();return this.Ca};f.fb=function(){return this.da};f.ka=function(a){null!==a&&a!==this.da&&(this.da=a,Qe(this),this.h&&this.h.B&&(this.h.G(),this.h.Ma(),this.h.u.vb()))};
function Qe(a){if(a.Ka){var b=a.da;Le(a.Ka);b=b.replace(/\s/g,"\u00a0");t&&b&&(b+="\u200f");b||(b="\u00a0");a.Ka.appendChild(document.createTextNode(b));a.Ca.width=0}}f.Aa=function(){return this.fb()};f.aa=function(a){this.ka(a)};f.Ph=function(a){if(!zb&&!Ab||0===a.layerX||0===a.layerY)Yc(a)||2!=Fd&&this.h.wc&&!y&&this.zg()};f.i=function(){};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Re(a){this.h=null;this.Ca=new fd(0,25);this.ka(a)}n(Re,Pe);f=Re.prototype;f.clone=function(){return new Re(this.fb())};f.wd=!1;f.g=function(a){this.h||(this.h=a,this.Ka=F("text",{"class":"blocklyText"},null),a.V().appendChild(this.Ka),this.Ka.kb=this.h,Ee(this.Ka),Qe(this))};f.m=function(){ed(this.Ka);this.Ka=null};f.V=function(){return this.Ka};f.i=function(a){this.Ka.kb=a};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Se(a,b,c,d){this.type=a;this.name=b;this.h=c;this.t=d;this.Pa=[];this.align=-1;this.pa=!0}function M(a,b,c){if(!b&&!c)return a;l(b)&&(b=new Re(b));a.h.B&&b.g(a.h);b.name=c;b.Th&&M(a,b.Th);a.Pa.push(b);b.qi&&M(a,b.qi);a.h.B&&(a.h.G(),a.h.Ma());return a}f=Se.prototype;f.K=function(){return this.pa};
f.P=function(a){var b=[];if(this.pa==a)return b;for(var c=(this.pa=a)?"block":"none",d=0,e;e=this.Pa[d];d++)e.P(a);if(this.t){if(a)b=ne(this.t);else if(d=this.t,d.$b&&Xd(d.vc[d.type],d),d.w){e=v(d).Db();for(var h=0;h<e.length;h++){for(var k=e[h],m=oe(k,!0),p=0;p<m.length;p++){var x=m[p];x.$b&&Xd(d.vc[x.type],x)}k=Te(k);for(m=0;m<k.length;m++)k[m].P(!1)}}if(d=v(this.t))d.V().style.display=c,a||(d.B=!1)}return b};f.s=function(a){if(!this.t)throw"This input does not have a connection.";this.t.s(a);return this};
function Ue(a,b){a.align=b;a.h.B&&a.h.G();return a}f.g=function(){for(var a=0;a<this.Pa.length;a++)this.Pa[a].g(this.h)};f.m=function(){for(var a=0,b;b=this.Pa[a];a++)b.m();this.t&&this.t.m();this.h=null};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function se(a){se.j.constructor.call(this,a);this.Sc()}n(se,Kd);f=se.prototype;f.da="";f.Sc=function(){Kd.prototype.Sc.call(this);F("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.Ia);this.Nd=F("text",{"class":"blocklyIconMark",x:8,y:13},this.Ia);this.Nd.appendChild(document.createTextNode("!"))};
f.P=function(a){if(a!=this.K())if(a){var b=this.da;a=F("text",{"class":"blocklyText blocklyBubbleText",y:Rc},null);for(var b=b.split("\n"),c=0;c<b.length;c++)F("tspan",{dy:"1em",x:Rc},a).appendChild(document.createTextNode(b[c]));this.la=new Oc(this.J.u,a,this.J.ec,this.ad,this.bd,null,null);if(t)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+Rc);this.Lc();a=this.la.Xc();this.la.Jc(a.width,a.height)}else this.la.m(),this.la=null};
f.ka=function(a){this.da!=a&&(this.da=a,this.K()&&(this.P(!1),this.P(!0)))};f.m=function(){this.J.gc=null;Kd.prototype.m.call(this)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function qe(){}function Ic(a,b){if(Bd)return Ve.create(qe,a,b);var c=a.B?new We:new qe;c.initialize(a,b);return c}f=qe.prototype;f.initialize=function(a,b){this.id=H.Jr();a.oe(this);this.fill(a,b)};
f.fill=function(a,b){this.L=this.C=this.H=null;this.T=[];this.disabled=this.B=this.Ke=!1;this.kb="";this.contextMenu=!0;this.fd=null;this.Vb=[];this.wc=this.cc=this.Gd=!0;this.Rc=!1;this.ca=null;this.dl=new gc(0,0);this.u=a;this.ac=a.hk;if(b){this.type=b;var c=H[b],d;for(d in c)this[d]=c[d]}ha(this.g)&&this.g()};function Hc(a,b){return Bd?Xe.get(a):yc(b,a)}
f.m=function(a,b,c){Ye(this,a,!1);this.u&&!c&&(this.u.qg(this),this.u=null);Gd==this&&(Gd=null);for(a=this.Vb.length-1;0<=a;a--)this.Vb[a].m(!1);for(a=0;b=this.T[a];a++)b.m();this.T.length=0;b=oe(this,!0);for(a=0;a<b.length;a++)c=b[a],c.w&&c.disconnect(),b[a].m();if(Bd&&!Ze)Xe["delete"](this.id.toString())};
function Ye(a,b,c){c=c&&!!a.getParent();if(a.H)a.H.w&&a.$a(null);else{var d=null;a.L&&a.L.w&&(d=a.L.w,a.$a(null));var e=Cc(a);b&&e&&(b=a.C.w,e.$a(null),d&&ee(d,b)&&Mc(d,b))}c&&a.moveBy(he*(t?-1:1),2*he)}function oe(a,b){var c=[];if(b||a.B)if(a.H&&c.push(a.H),a.C&&c.push(a.C),a.L&&c.push(a.L),b||!a.Rc)for(var d=0,e;e=a.T[d];d++)e.t&&c.push(e.t);return c}
f.Ma=function(){if(0==Fd){var a=ge(this);if(!a.ac)for(var b=oe(this,!1),c=0;c<b.length;c++){var d=b[c];d.w&&$d(d)&&v(d).Ma();for(var e=me(d),h=0;h<e.length;h++){var k=e[h];d.w&&k.w||ge(k.h)!=a&&($d(d)?ce(k,d):ce(d,k))}}}};f.getParent=function(){return this.fd};function $e(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Cc(a)==b);return a}}function Cc(a){return a.C&&v(a.C)}function ge(a){var b=a;do a=b,b=a.fd;while(b);return a}f.Yc=function(){return this.Vb};
f.$a=function(a){if(this.fd){for(var b=this.fd.Vb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.fd=null;this.L&&this.L.w&&this.L.disconnect();this.H&&this.H.w&&this.H.disconnect()}else ab(xc(this.u,!1),this)&&this.u.qg(this);(this.fd=a)?a.Vb.push(this):this.u.oe(this)};f.Db=function(){for(var a=[this],b,c=0;b=this.Vb[c];c++)a.push.apply(a,b.Db());return a};function Jc(a,b){a.Gd=b;a.Wk&&af(a.Wk)}
function Kc(a,b){a.wc=b;for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)h.sc();d=Te(a);for(c=0;c<d.length;c++)d[c].sc()}f.i=function(a){this.kb=a};f.k=function(a){this.bh=a;this.B&&this.Lc()};function bf(a,b){for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)if(h.name===b)return h;return null}function N(a,b){var c=bf(a,b);return c?c.Aa():null}function Lc(a,b,c){bf(a,c).aa(b)}
function J(a,b){var c;a.L&&(a.L.m(),a.L=null);b&&(void 0===c&&(c=null),a.L=new Wd(a,4),a.L.s(c));a.B&&(a.G(),a.Ma())}function L(a,b){var c;a.C&&(a.C.m(),a.C=null);b&&(void 0===c&&(c=null),a.C=new Wd(a,3),a.C.s(c));a.B&&(a.G(),a.Ma())}function I(a,b,c){a.H&&(a.H.m(),a.H=null);b&&(void 0===c&&(c=null),a.H=new Wd(a,2),a.H.s(c));a.B&&(a.G(),a.Ma())}function A(a,b){a.Ke=b;a.B&&(a.G(),a.Ma(),a.u.vb())}f.Te=function(a){this.disabled=a};
function cf(a){for(;;){a=$e(a);if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.Rc};f.nd=function(a){this.Rc=a};f.toString=function(a){for(var b=[],c=0,d;d=this.T[c];c++){for(var e=0,h;h=d.Pa[e];e++)b.push(h.fb());d.t&&((d=v(d.t))?b.push(d.toString()):b.push("?"))}b=va(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function O(a,b){return df(a,1,b)}function P(a,b){return df(a,5,b||"")}
f.ta=function(a,b){function c(a){a instanceof Pe?M(this,a):M(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.ta.Wp),h=[],k=0;k<e.length;k+=2){var m=va(e[k]),p=void 0;m&&h.push(new Re(m));if((m=e[k+1])&&"%"==m.charAt(0)){var m=parseInt(m.substring(1),10),x=arguments[m];x[1]instanceof Pe?h.push([x[0],x[1]]):p=Ue(O(this,x[0]).s(x[1]),x[2]);arguments[m]=null}else"\n"==m&&h.length&&(p=P(this));p&&h.length&&(h.forEach(c,p),h=[])}h.length&&(p=Ue(P(this),d),h.forEach(c,
p));for(k=1;k<arguments.length-1;k++);A(this,!a.match(this.ta.wm))};f.ta.Wp=/(%\d+|\n)/;f.ta.wm=/%1\s*$/;function df(a,b,c){var d=null;if(1==b||3==b)d=new Wd(a,b);b=new Se(b,c,a,d);a.T.push(b);a.B&&(a.G(),a.Ma());return b}function ef(a,b,c){if(b!=c){for(var d=-1,e=c?-1:a.T.length,h=0,k;k=a.T[h];h++)if(k.name==b){if(d=h,-1!=e)break}else if(c&&k.name==c&&(e=h,-1!=d))break;b=d;c=a.T[b];a.T.splice(b,1);b<e&&e--;a.T.splice(e,0,c);a.B&&(a.G(),a.Ma())}}
function Q(a,b,c){for(var d=0,e;e=a.T[d];d++)if(e.name==b){e.t&&e.t.w&&v(e.t).$a(null);e.m();a.T.splice(d,1);a.B&&(a.G(),a.Ma());return}c||Ma('Input "%s" not found.',b)}function B(a,b){for(var c=0,d;d=a.T[c];c++)if(d.name==b)return d;return null}function ff(a,b){var c=B(a,b);return c&&c.t&&v(c.t)}f.Df=function(){return this.ca||""};f.Se=function(a){this.ca=a};f.qd=function(){};f.Zd=function(){};f.ia=function(){return this.dl};f.moveBy=function(a,b){this.dl.translate(a,b)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function gf(a){this.bg=a;this.Og="";this.tm=new RegExp(this.Ea,"g")}gf.prototype.ff=null;gf.prototype.xd=null;function hf(){var a=R,b=G,c=[];a.g(b);for(var b=xc(b,!0),d=0,e;e=b[d];d++){var h=jf(a,e);ea(h)&&(h=h[0]);h&&(e.H&&a.Kk&&(h=a.Kk(h)),c.push(h))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");return c=c.replace(/[ \t]+\n/g,"\n")}function kf(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}
function jf(a,b){if(!b)return"";if(b.disabled)return jf(a,Cc(b));var c=a[b.type];if(!c)throw'Language "'+a.bg+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.ai(b,c[0]),c[1]];if(l(c))return a.xd&&(c=a.xd.replace(/%1/g,"'"+b.id+"'")+c),a.ai(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function S(a,b,c){var d=R;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=ff(a,b);if(!a)return"";b=jf(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function lf(a,b){var c=R,d=ff(a,b),e=jf(c,d);if(!l(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=kf(e,c.ge));return e}
function mf(a,b){var c=R;c.ff&&(a=c.ff.replace(/%1/g,"'"+b+"'")+a);c.xd&&(a+=kf(c.xd.replace(/%1/g,"'"+b+"'"),c.ge));return a}gf.prototype.ge="  ";function nf(a){var b=R;b.Og+=a+","}gf.prototype.Ea="{leCUI8hutHZI4480Dc}";function of(a,b){var c=R;if(!c.Fd[a]){var d=pf(c.fa,a);c.Wj[a]=d;c.Fd[a]=b.join("\n").replace(c.tm,d)}return c.Wj[a]};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var R=new gf("JavaScript");nf("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
R.Lb=0;R.W=1;R.Zt=1;R.Q=2;R.Xt=3;R.Ut=3;R.lf=4;R.Qt=4;R.au=4;R.mf=4;R.$t=4;R.bu=4;R.Vt=4;R.tp=5;R.kf=5;R.je=5;R.Ng=6;R.vp=6;R.St=7;R.up=8;R.Wt=8;R.Yt=8;R.Li=9;R.Pt=10;R.Tt=11;R.Rt=12;R.rp=13;R.sp=14;R.jf=15;R.Pc=16;R.qa=17;R.D=99;R.g=function(a){R.Fd=Object.create(null);R.Wj=Object.create(null);R.fa?R.fa.reset():R.fa=new qf(R.Og);var b=[];a=rf(a);for(var c=0;c<a.length;c++)b[c]="var "+R.fa.getName(a[c],sf)+";";R.Fd.variables=b.join("\n")};
R.finish=function(a){var b=[],c;for(c in R.Fd)b.push(R.Fd[c]);return b.join("\n\n")+"\n\n\n"+a};R.Kk=function(a){return a+";\n"};R.Ck=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
R.ai=function(a,b){var c="";if(!a.H||!a.H.w){var d=a.Df();d&&(c+=kf(d,"// ")+"\n");for(var e=0;e<a.T.length;e++)if(1==a.T[e].type){var h=v(a.T[e].t);if(h){for(var d=[],h=h.Db(),k=0;k<h.length;k++){var m=h[k].Df();m&&d.push(m)}d.length&&d.push("");(d=d.join("\n"))&&(c+=kf(d,"// "))}}}e=jf(R,a.C&&v(a.C));return c+b+e};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.ks={};R.lists_create_empty=function(){return["[]",R.Lb]};R.lists_create_with=function(a){for(var b=Array(a.ja),c=0;c<a.ja;c++)b[c]=S(a,"ADD"+c,R.qa)||"null";b="["+b.join(", ")+"]";return[b,R.Lb]};R.lists_repeat=function(a){var b=of("lists_repeat",["function "+R.Ea+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=S(a,"ITEM",R.qa)||"null";a=S(a,"NUM",R.qa)||"0";return[b+"("+c+", "+a+")",R.Q]};
R.lists_length=function(a){return[(S(a,"VALUE",R.Q)||"[]")+".length",R.W]};R.lists_isEmpty=function(a){return["!"+(S(a,"VALUE",R.W)||"[]")+".length",R.lf]};R.lists_indexOf=function(a){var b="FIRST"==N(a,"END")?"indexOf":"lastIndexOf",c=S(a,"FIND",R.D)||"''";return[(S(a,"VALUE",R.W)||"[]")+"."+b+"("+c+") + 1",R.W]};
R.lists_getIndex=function(a){var b=N(a,"MODE")||"GET",c=N(a,"WHERE")||"FROM_START",d=S(a,"AT",R.mf)||"1";a=S(a,"VALUE",R.W)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",R.W];if("GET_REMOVE"==b)return[a+".shift()",R.W];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",R.W];if("GET_REMOVE"==b)return[a+".pop()",R.W];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=tf(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",R.W];if("GET_REMOVE"==
b)return[a+".splice("+d+", 1)[0]",R.Q];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",R.Q];if("GET_REMOVE"==b||"REMOVE"==b){c=of("lists_remove_from_end",["function "+R.Ea+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,R.Q];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=of("lists_get_random_item",["function "+R.Ea+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);",
"  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,R.Q];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
R.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=pf(R.fa,"tmp_list"),b="var "+a+" = "+c+";\n";c=a;return b}var c=S(a,"LIST",R.W)||"[]",d=N(a,"MODE")||"GET",e=N(a,"WHERE")||"FROM_START",h=S(a,"AT",R.D)||"1";a=S(a,"TO",R.Pc)||"null";if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==
e){h=tf(h)?parseFloat(h)-1:h+" - 1";if("SET"==d)return c+"["+h+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+h+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+c+".length - "+h+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();h=pf(R.fa,"tmp_x");e+="var "+h+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+h+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";
};
R.lists_getSublist=function(a){var b=S(a,"LIST",R.W)||"[]",c=N(a,"WHERE1"),d=N(a,"WHERE2"),e=S(a,"AT1",R.D)||"1";a=S(a,"AT2",R.D)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":of("lists_get_sublist",["function "+R.Ea+"(list, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {",
"      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",R.Q]};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.ct={};R.variables_get=function(a){return[R.fa.getName(N(a,"VAR"),sf),R.Lb]};R.variables_set=function(a){var b=S(a,"VALUE",R.Pc)||"0";return R.fa.getName(N(a,"VAR"),sf)+" = "+b+";\n"};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.text={};R.text=function(a){return[R.Ck(N(a,"TEXT")),R.Lb]};R.text_join=function(a){var b;if(0==a.ja)return["''",R.Lb];if(1==a.ja)return b=S(a,"ADD0",R.D)||"''",["String("+b+")",R.Q];if(2==a.ja)return b=S(a,"ADD0",R.D)||"''",a=S(a,"ADD1",R.D)||"''",["String("+b+") + String("+a+")",R.Ng];b=Array(a.ja);for(var c=0;c<a.ja;c++)b[c]=S(a,"ADD"+c,R.qa)||"''";b="["+b.join(",")+"].join('')";return[b,R.Q]};
R.text_append=function(a){var b=R.fa.getName(N(a,"VAR"),sf);a=S(a,"TEXT",R.D)||"''";return b+" = String("+b+") + String("+a+");\n"};R.text_length=function(a){return[(S(a,"VALUE",R.Q)||"''")+".length",R.W]};R.text_isEmpty=function(a){return["!"+(S(a,"VALUE",R.W)||"''"),R.lf]};R.text_indexOf=function(a){var b="FIRST"==N(a,"END")?"indexOf":"lastIndexOf",c=S(a,"FIND",R.D)||"''";return[(S(a,"VALUE",R.W)||"''")+"."+b+"("+c+") + 1",R.W]};
R.text_charAt=function(a){var b=N(a,"WHERE")||"FROM_START",c=S(a,"AT",R.mf)||"1";a=S(a,"VALUE",R.W)||"''";switch(b){case "FIRST":return[a+".charAt(0)",R.Q];case "LAST":return[a+".slice(-1)",R.Q];case "FROM_START":return c=tf(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",R.Q];case "FROM_END":return[a+".slice(-"+c+").charAt(0)",R.Q];case "RANDOM":return b=of("text_random_letter",["function "+R.Ea+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",[b,
R.Q]}throw"Unhandled option (text_charAt).";};
R.text_getSubstring=function(a){var b=S(a,"STRING",R.W)||"''",c=N(a,"WHERE1"),d=N(a,"WHERE2"),e=S(a,"AT1",R.D)||"1";a=S(a,"AT2",R.D)||"1";return["FIRST"==c&&"LAST"==d?b:of("text_get_substring",["function "+R.Ea+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;",
"    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",R.Q]};
R.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[N(a,"CASE")];b?(a=S(a,"TEXT",R.W)||"''",a+=b):(b=of("text_toTitleCase",["function "+R.Ea+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=S(a,"TEXT",R.D)||"''",a=b+"("+a+")");return[a,R.Q]};
R.text_trim=function(a){var b={LEFT:".trimLeft()",RIGHT:".trimRight()",BOTH:".trim()"}[N(a,"MODE")];return[(S(a,"TEXT",R.W)||"''")+b,R.Q]};R.text_print=function(a){return"window.alert("+(S(a,"TEXT",R.D)||"''")+");\n"};R.text_prompt=function(a){var b="window.prompt("+R.Ck(N(a,"TEXT"))+")";"NUMBER"==N(a,"TYPE")&&(b="parseFloat("+b+")");return[b,R.Q]};R.text_prompt_ext=function(a){var b="window.prompt("+(S(a,"TEXT",R.D)||"''")+")";"NUMBER"==N(a,"TYPE")&&(b="parseFloat("+b+")");return[b,R.Q]};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.qj={};R.colour_picker=function(a){return["'"+N(a,"COLOUR")+"'",R.Lb]};R.colour_random=function(){return[of("colour_random",["function "+R.Ea+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",R.Q]};
R.colour_rgb=function(a){var b=S(a,"RED",R.qa)||0,c=S(a,"GREEN",R.qa)||0;a=S(a,"BLUE",R.qa)||0;return[of("colour_rgb",["function "+R.Ea+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;","  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",R.Q]};
R.colour_blend=function(a){var b=S(a,"COLOUR1",R.qa)||"'#000000'",c=S(a,"COLOUR2",R.qa)||"'#000000'";a=S(a,"RATIO",R.qa)||.5;return[of("colour_blend",["function "+R.Ea+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);","  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);",
"  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",R.Q]};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function qf(a){this.Hk=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Hk[a[b]]=!0}this.reset()}qf.prototype.reset=function(){this.ih=Object.create(null);this.Kj=Object.create(null)};qf.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.ih)return this.ih[c];var d=pf(this,a);return this.ih[c]=d};
function pf(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.Kj[c+d]||c+d in a.Hk;)d=d?d+1:2;c+=d;a.Kj[c]=!0;return c}function uf(a,b){return a.toLowerCase()==b.toLowerCase()};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function vf(){for(var a=G.cb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Jf;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(wf);b.sort(wf);return[c,b]}function wf(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}function xf(a,b){if(b.ac)return a;for(;!yf(a,b.u,b);){var c=a.match(/^(.*?)(\d+)$/);a=c?c[1]+(parseInt(c[2],10)+1):a+"2"}return a}
function yf(a,b,c){b=b.cb();for(var d=0;d<b.length;d++)if(b[d]!=c){var e=b[d].Jf;if(e&&(e=e.call(b[d]),uf(e[0],a)))return!1}return!0}function zf(a){a=a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");a=xf(a,this.h);for(var b=this.h.u.cb(),c=0;c<b.length;c++){var d=b[c].Yh;d&&d.call(b[c],this.da,a)}return a}
function Af(a,b,c,d){function e(e,h){for(var p=0;p<e.length;p++){var x=Ic(d,h);Lc(x,e[p][0],"NAME");for(var w=[],E=0;E<e[p][1].length;E++)w[E]="ARG"+E;x.ae(e[p][1],w);x.sa();a.push(x);b.push(2*c)}}if(H.procedures_defnoreturn){var h=Ic(d,"procedures_defnoreturn");h.sa();a.push(h);b.push(2*c)}H.procedures_defreturn&&(h=Ic(d,"procedures_defreturn"),h.sa(),a.push(h),b.push(2*c));H.procedures_ifreturn&&(h=Ic(d,"procedures_ifreturn"),h.sa(),a.push(h),b.push(2*c));b.length&&(b[b.length-1]=3*c);h=vf();e(h[0],
"procedures_callnoreturn");e(h[1],"procedures_callreturn")}function Bf(a,b){for(var c=[],d=b.cb(),e=0;e<d.length;e++){var h=d[e].Jd;h&&(h=h.call(d[e]))&&uf(h,a)&&c.push(d[e])}return c}function Cf(a,b,c,d){a=Bf(a,b);for(b=0;b<a.length;b++)a[b].ae(c,d)}function Df(a,b){for(var c=b.cb(),d=0;d<c.length;d++){var e=c[d].Jf;if(e&&(e=e.call(c[d]))&&uf(e[0],a))return c[d]}return null};function Ef(){this.pi="";this.Xp=Ff}Ef.prototype.Od=!0;Ef.prototype.Md=function(){return this.pi};Ef.prototype.toString=function(){return"Const{"+this.pi+"}"};function Gf(a){if(a instanceof Ef&&a.constructor===Ef&&a.Xp===Ff)return a.pi;Ma("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Ff={};function Hf(){this.Gc="";this.Vp=If}f=Hf.prototype;f.Od=!0;f.Md=function(){return this.Gc};f.Ch=!0;f.ye=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Gc+"}"};var If={};var Jf=Qa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function Kf(){this.jg="";this.Tp=Lf}Kf.prototype.Od=!0;var Lf={};Kf.prototype.Md=function(){return this.jg};Kf.prototype.toString=function(){return"SafeStyle{"+this.jg+"}"};function Mf(a){var b=new Kf;b.jg=a;return b}var Nf=Mf("");
function Of(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof Ef?d=Gf(d):Pf.test(d)||(Ma("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?Mf(b):Nf}var Pf=/^[-.%_!# a-zA-Z0-9]+$/;function Qf(){this.Wh="";this.Uq=Rf}f=Qf.prototype;f.Od=!0;f.Md=function(){return this.Wh};f.Ch=!0;f.ye=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.Wh+"}"};var Rf={};function Sf(){this.Gc="";this.Sp=Tf;this.Rj=null}f=Sf.prototype;f.Ch=!0;f.ye=function(){return this.Rj};f.Od=!0;f.Md=function(){return this.Gc};f.toString=function(){return"SafeHtml{"+this.Gc+"}"};function Uf(a){if(a instanceof Sf&&a.constructor===Sf&&a.Sp===Tf)return a.Gc;Ma("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function Vf(a){if(a instanceof Sf)return a;var b=null;a.Ch&&(b=a.ye());return Wf(xa(a.Od?a.Md():String(a)),b)}
var Xf=/^[a-zA-Z0-9-]+$/,Yf=Qa("action","cite","data","formaction","href","manifest","poster","src"),Zf=Qa("embed","iframe","link","object","script","style","template");
function $f(a,b,c){if(!Xf.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in Zf)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var h in b){if(!Xf.test(h))throw Error('Invalid attribute name "'+h+'".');var k=b[h];if(null!=k){var m,p=a;m=h;if(k instanceof Ef)k=Gf(k);else if("style"==m.toLowerCase()){if(!ia(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof k+" given: "+k);k instanceof Kf||
(k=Of(k));p=void 0;k instanceof Kf&&k.constructor===Kf&&k.Tp===Lf?p=k.jg:(Ma("expected object of type SafeStyle, got '"+k+"'"),p="type_error:SafeStyle");k=p}else{if(/^on/i.test(m))throw Error('Attribute "'+m+'" requires goog.string.Const value, "'+k+'" given.');if(m.toLowerCase()in Yf)if(k instanceof Qf)k instanceof Qf&&k.constructor===Qf&&k.Uq===Rf?k=k.Wh:(Ma("expected object of type TrustedResourceUrl, got '"+k+"'"),k="type_error:TrustedResourceUrl");else if(k instanceof Hf)k instanceof Hf&&k.constructor===
Hf&&k.Vp===If?k=k.Gc:(Ma("expected object of type SafeUrl, got '"+k+"'"),k="type_error:SafeUrl");else throw Error('Attribute "'+m+'" on tag "'+p+'" requires goog.html.SafeUrl or goog.string.Const value, "'+k+'" given.');}k.Od&&(k=k.Md());m=m+'="'+xa(String(k))+'"';e+=" "+m}}void 0!==c?ea(c)||(c=[c]):c=[];!0===Jf[a.toLowerCase()]?e+=">":(d=ag(c),e+=">"+Uf(d)+"</"+a+">",d=d.ye());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return Wf(e,d)}
function ag(a){function b(a){ea(a)?Xa(a,b):(a=Vf(a),d+=Uf(a),a=a.ye(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";Xa(arguments,b);return Wf(d,c)}var Tf={};function Wf(a,b){var c=new Sf;c.Gc=a;c.Rj=b;return c}var bg=Wf("",0);function cg(a,b){a.innerHTML=Uf(b)};var dg=!q||q&&9<=Gb,eg=!tb&&!q||q&&q&&9<=Gb||tb&&Eb("1.9.1"),fg=q&&!Eb("9");function gg(a){return a?new hg(ig(a)):ra||(ra=new hg)}
function jg(a,b){var c=document,c=b||c;if(c.querySelectorAll&&c.querySelector)return c.querySelectorAll("TBODY"+(a?"."+a:""));if(a&&c.getElementsByClassName){for(var c=c.getElementsByClassName(a),d={},e=0,h=0,k;k=c[h];h++)"TBODY"==k.nodeName&&(d[e++]=k);d.length=e;return d}c=c.getElementsByTagName("TBODY");if(a){d={};for(h=e=0;k=c[h];h++){var m=k.className;"function"==typeof m.split&&ab(m.split(/\s+/),a)&&(d[e++]=k)}d.length=e;return d}return c}
function kg(a,b){Na(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in lg?a.setAttribute(lg[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var lg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function mg(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new fd(a.clientWidth,a.clientHeight)}function u(a,b,c){return ng(document,arguments)}
function ng(a,b){var c=b[0],d=b[1];if(!dg&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',xa(d.name),'"');if(d.type){c.push(' type="',xa(d.type),'"');var e={};Pa(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(l(d)?c.className=d:ea(d)?c.className=d.join(" "):kg(c,d));2<b.length&&og(a,c,b,2);return c}
function og(a,b,c,d){function e(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var h=c[d];!fa(h)||ia(h)&&0<h.nodeType?e(h):Xa(pg(h)?db(h):h,e)}}function Le(a){for(var b;b=a.firstChild;)a.removeChild(b)}function qg(a){var b=G.o;b.parentNode&&b.parentNode.insertBefore(a,b)}function ed(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function rg(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function ig(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function sg(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Le(a),a.appendChild(ig(a).createTextNode(String(b)))}var tg={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ug={IMG:" ",BR:"\n"};function vg(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function wg(a){a=a.tabIndex;return ga(a)&&0<=a&&32768>a}
function xg(a){if(fg&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];yg(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");fg||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}function zg(a){var b=[];yg(a,b,!1);return b.join("")}
function yg(a,b,c){if(!(a.nodeName in tg))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ug)b.push(ug[a.nodeName]);else for(a=a.firstChild;a;)yg(a,b,c),a=a.nextSibling}function pg(a){if(a&&"number"==typeof a.length){if(ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(ha(a))return"function"==typeof a.item}return!1}function hg(a){this.Wb=a||g.document||document}f=hg.prototype;f.eb=gg;
f.n=function(a){return l(a)?this.Wb.getElementById(a):a};f.I=function(a,b,c){return ng(this.Wb,arguments)};f.createElement=function(a){return this.Wb.createElement(a)};f.createTextNode=function(a){return this.Wb.createTextNode(String(a))};f.wj=function(a,b,c){var d=this.Wb;c=!!c;for(var e=d.createElement("TABLE"),h=e.appendChild(d.createElement("TBODY")),k=0;k<a;k++){for(var m=d.createElement("TR"),p=0;p<b;p++){var x=d.createElement("TD");c&&sg(x,"\u00a0");m.appendChild(x)}h.appendChild(m)}return e};
f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){og(ig(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Gk=Le;f.removeNode=ed;f.Yc=function(a){return eg&&void 0!=a.children?a.children:Ya(a.childNodes,function(a){return 1==a.nodeType})};f.contains=rg;f.mc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!vg(a)||wg(a)):vg(a)&&wg(a))&&q?(a=ha(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};var Ag={};function Bg(a,b){var c=ig(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Cg(a,b){return Bg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Dg(){var a=document,b=a.body,a=a.documentElement;return new gc(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function Eg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}q&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Fg(a){if(q&&!(q&&8<=Gb))return a.offsetParent;var b=ig(a),c=Cg(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Cg(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Gg(a){var b,c=ig(a),d=Cg(a,"position"),e=tb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),h=new gc(0,0),k;b=c?ig(c):document;(k=!q||q&&9<=Gb)||(k="CSS1Compat"==gg(b).Wb.compatMode);k=k?b.documentElement:b.body;if(a==k)return h;if(a.getBoundingClientRect)b=Eg(a),c=gg(c).Wb,a=r||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=q&&Eb("10")&&c.pageYOffset!=a.scrollTop?new gc(a.scrollLeft,
a.scrollTop):new gc(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),h.x=b.left+a.x,h.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(k),h.x=b.screenX-a.screenX,h.y=b.screenY-a.screenY;else{b=a;do{h.x+=b.offsetLeft;h.y+=b.offsetTop;b!=a&&(h.x+=b.clientLeft||0,h.y+=b.clientTop||0);if(r&&"fixed"==Cg(b,"position")){h.x+=c.body.scrollLeft;h.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(sb||r&&"absolute"==d)h.y-=c.body.offsetTop;for(b=a;(b=Fg(b))&&
b!=c.body&&b!=k;)h.x-=b.scrollLeft,sb&&"TR"==b.tagName||(h.y-=b.scrollTop)}return h}function Hg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function Ig(a){return Jg(a)}function Jg(a){var b=Kg;if("none"!=Cg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=h;c.visibility=e;return a}
function Kg(a){var b=a.offsetWidth,c=a.offsetHeight,d=r&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Eg(a),new fd(a.right-a.left,a.bottom-a.top)):new fd(b,c)}function Lg(a){var b=Gg(a);a=Jg(a);return new hd(b.x,b.y,a.width,a.height)}function Mg(a,b){a.style.display=b?"":"none"}var Og=tb?"MozUserSelect":r?"WebkitUserSelect":null;
function Pg(a,b,c){c=c?null:a.getElementsByTagName("*");if(Og){if(b=b?"none":"",a.style[Og]=b,c){a=0;for(var d;d=c[a];a++)d.style[Og]=b}}else if(q||sb)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var Qg={thin:2,medium:4,thick:6};
function Rg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in Qg)d=Qg[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function Sg(a){if(q&&!(q&&9<=Gb)){var b=Rg(a,"borderLeft"),c=Rg(a,"borderRight"),d=Rg(a,"borderTop");a=Rg(a,"borderBottom");return new gd(d,c,a,b)}b=Bg(a,"borderLeftWidth");c=Bg(a,"borderRightWidth");d=Bg(a,"borderTopWidth");a=Bg(a,"borderBottomWidth");return new gd(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};function Tg(a){hb.call(this);this.bk=a;this.Xf={}}n(Tg,hb);var Ug=[];f=Tg.prototype;f.O=function(a,b,c,d){ea(b)||(b&&(Ug[0]=b.toString()),b=Ug);for(var e=0;e<b.length;e++){var h=Sb(a,b[e],c||this.handleEvent,d||!1,this.bk||this);if(!h)break;this.Xf[h.key]=h}return this};
f.Jb=function(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)this.Jb(a,b[h],c,d,e);else c=c||this.handleEvent,e=e||this.bk||this,c=Tb(c),d=!!d,b=a&&a[kb]?a.ze(b,c,d,e):a?(a=Ub(a))?a.ze(b,c,d,e):null:null,b&&($b(b),delete this.Xf[b.key]);return this};f.og=function(){Na(this.Xf,$b);this.Xf={}};f.Y=function(){Tg.j.Y.call(this);this.og()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Vg(){}ca(Vg);Vg.prototype.ss=0;function Wg(a){dc.call(this);this.xf=a||gg();this.tg=Xg;this.Pf=null;this.R=!1;this.F=null;this.zc=void 0;this.tc=this.ra=this.Za=this.ag=null;this.dt=!1}n(Wg,dc);Wg.prototype.as=Vg.Yb();var Xg=null;
function Yg(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function Zg(a){return a.Pf||(a.Pf=":"+(a.as.ss++).toString(36))}f=Wg.prototype;f.n=function(){return this.F};function $g(a){a.zc||(a.zc=new Tg(a));return a.zc}
f.$a=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.Za&&this.Pf&&ah(this.Za,this.Pf)&&this.Za!=a)throw Error("Unable to set parent component");this.Za=a;Wg.j.wg.call(this,a)};f.getParent=function(){return this.Za};f.wg=function(a){if(this.Za&&this.Za!=a)throw Error("Method not supported");Wg.j.wg.call(this,a)};f.eb=function(){return this.xf};f.I=function(){this.F=this.xf.createElement("div")};f.G=function(a){this.Yd(a)};
f.Yd=function(a,b){if(this.R)throw Error("Component already rendered");this.F||this.I();a?a.insertBefore(this.F,b||null):this.xf.Wb.body.appendChild(this.F);this.Za&&!this.Za.R||this.za()};f.za=function(){this.R=!0;bh(this,function(a){!a.R&&a.n()&&a.za()})};f.Cb=function(){bh(this,function(a){a.R&&a.Cb()});this.zc&&this.zc.og();this.R=!1};
f.Y=function(){this.R&&this.Cb();this.zc&&(this.zc.m(),delete this.zc);bh(this,function(a){a.m()});!this.dt&&this.F&&ed(this.F);this.Za=this.ag=this.F=this.tc=this.ra=null;Wg.j.Y.call(this)};f.ne=function(a,b){this.Ad(a,ch(this),b)};
f.Ad=function(a,b,c){if(a.R&&(c||!this.R))throw Error("Component already rendered");if(0>b||b>ch(this))throw Error("Child component index out of bounds");this.tc&&this.ra||(this.tc={},this.ra=[]);if(a.getParent()==this){var d=Zg(a);this.tc[d]=a;bb(this.ra,a)}else{var d=this.tc,e=Zg(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.$a(this);fb(this.ra,b,0,a);a.R&&this.R&&a.getParent()==this?(c=this.wb(),b=c.childNodes[b]||null,b!=a.n()&&c.insertBefore(a.n(),b)):c?(this.F||
this.I(),b=dh(this,b+1),a.Yd(this.wb(),b?b.F:null)):this.R&&!a.R&&a.F&&a.F.parentNode&&1==a.F.parentNode.nodeType&&a.za()};f.wb=function(){return this.F};function eh(a){null==a.tg&&(a.tg="rtl"==Cg(a.R?a.F:a.xf.Wb.body,"direction"));return a.tg}f.Ve=function(a){if(this.R)throw Error("Component already rendered");this.tg=a};function fh(a){return!!a.ra&&0!=a.ra.length}function ch(a){return a.ra?a.ra.length:0}function ah(a,b){var c;a.tc&&b?(c=a.tc,c=(b in c?c[b]:void 0)||null):c=null;return c}
function dh(a,b){return a.ra?a.ra[b]||null:null}function bh(a,b,c){a.ra&&Xa(a.ra,b,c)}function gh(a,b){return a.ra&&b?Wa(a.ra,b):-1}f.removeChild=function(a,b){if(a){var c=l(a)?a:Zg(a);a=ah(this,c);if(c&&a){var d=this.tc;c in d&&delete d[c];bb(this.ra,a);b&&(a.Cb(),a.F&&ed(a.F));a.$a(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Gk=function(a){for(var b=[];fh(this);)b.push(this.removeChild(dh(this,0),a));return b};function hh(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}function ih(a,b){return a.classList?a.classList.contains(b):ab(hh(a),b)}function jh(a,b){a.classList?a.classList.add(b):ih(a,b)||(a.className+=0<a.className.length?" "+b:b)}function kh(a,b){if(a.classList)Xa(b,function(b){jh(a,b)});else{var c={};Xa(hh(a),function(a){c[a]=!0});Xa(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function lh(a,b){a.classList?a.classList.remove(b):ih(a,b)&&(a.className=Ya(hh(a),function(a){return a!=b}).join(" "))}function mh(a,b){a.classList?Xa(b,function(b){lh(a,b)}):a.className=Ya(hh(a),function(a){return!ab(b,a)}).join(" ")};function nh(a,b){if(!a)throw Error("Invalid class name "+a);if(!ha(b))throw Error("Invalid decorator function "+b);}var oh={};var ph;function qh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function rh(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ph||(ph={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ph,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function sh(a){a.removeAttribute("aria-activedescendant")}function th(a,b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)};function uh(){}var vh;ca(uh);var wh={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=uh.prototype;f.zf=function(){};f.I=function(a){return a.eb().I("div",this.xe(a).join(" "),a.Wa)};f.wb=function(a){return a};f.te=function(a,b,c){if(a=a.n?a.n():a){var d=[b];q&&!Eb("7")&&(d=xh(hh(a),b),d.push(b));(c?kh:mh)(a,d)}};f.Je=function(a){eh(a)&&this.Ve(a.n(),!0);a.isEnabled()&&this.Kc(a,a.K())};
function yh(a,b,c){if(a=c||a.zf())c=b.getAttribute("role")||null,a!=c&&qh(b,a)}function zh(a,b){a.K()||rh(b,"hidden",!a.K());a.isEnabled()||Ah(b,1,!a.isEnabled());a.va&8&&Ah(b,8,a.Uf());a.va&16&&Ah(b,16,!!(a.$&16));a.va&64&&Ah(b,64,a.Pd())}f.di=function(a,b){Pg(a,!b,!q&&!sb)};f.Ve=function(a,b){this.te(a,this.U()+"-rtl",b)};f.mc=function(a){var b;return a.va&32&&(b=a.Ga())?vg(b)&&wg(b):!1};
f.Kc=function(a,b){var c;if(a.va&32&&(c=a.Ga())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.Ee(null)}(vg(c)&&wg(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.P=function(a,b){Mg(a,b);a&&rh(a,"hidden",!b)};f.Rb=function(a,b,c){var d=a.n();if(d){var e=this.Cf(b);e&&this.te(a,e,c);Ah(d,b,c)}};
function Ah(a,b,c){vh||(vh={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=vh[b];var d=a.getAttribute("role")||null;d&&(d=wh[d]||b,b="checked"==b||"selected"==b?d:b);b&&rh(a,b,c)}f.od=function(a,b){var c=this.wb(a);if(c&&(Le(c),b))if(l(b))sg(c,b);else{var d=function(a){if(a){var b=ig(c);c.appendChild(l(a)?b.createTextNode(a):a)}};ea(b)?Xa(b,d):!fa(b)||"nodeType"in b?d(b):Xa(db(b),d)}};f.Ga=function(a){return a.n()};f.U=function(){return"goog-control"};
f.xe=function(a){var b=this.U(),c=[b],d=this.U();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.Cf(e));b&=~e}c.push.apply(c,d);(a=a.Xb)&&c.push.apply(c,a);q&&!Eb("7")&&c.push.apply(c,xh(c));return c};function xh(a,b){var c=[];b&&(a=a.concat([b]));Xa([],function(d){!$a(d,pa(ab,a))||b&&!ab(d,b)||c.push(d.join("_"))});return c}
f.Cf=function(a){if(!this.oj){var b=this.U();b.replace(/\xa0|\s/g," ");this.oj={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.oj[a]};function Bh(a,b,c,d,e){if(!(q||r&&Eb("525")))return!0;if(vb&&e)return Ch(a);if(e&&!d)return!1;ga(b)&&(b=Dh(b));if(!c&&(17==b||18==b||vb&&91==b))return!1;if(r&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(q&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!r}return Ch(a)}
function Ch(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||r&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Dh(a){if(tb)a=Eh(a);else if(vb&&r)a:switch(a){case 93:a=91;break a}return a}
function Eh(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Fh(a,b){dc.call(this);a&&Gh(this,a,b)}n(Fh,dc);f=Fh.prototype;f.F=null;f.Vf=null;f.Eh=null;f.Wf=null;f.xb=-1;f.Cc=-1;f.Tg=!1;
var Hh={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ih={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Jh=q||r&&Eb("525"),Kh=vb&&tb;f=Fh.prototype;
f.Tr=function(a){r&&(17==this.xb&&!a.ctrlKey||18==this.xb&&!a.altKey||vb&&91==this.xb&&!a.metaKey)&&(this.Cc=this.xb=-1);-1==this.xb&&(a.ctrlKey&&17!=a.keyCode?this.xb=17:a.altKey&&18!=a.keyCode?this.xb=18:a.metaKey&&91!=a.keyCode&&(this.xb=91));Jh&&!Bh(a.keyCode,this.xb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Cc=Dh(a.keyCode),Kh&&(this.Tg=a.altKey))};f.Ur=function(a){this.Cc=this.xb=-1;this.Tg=a.altKey};
f.handleEvent=function(a){var b=a.bb,c,d,e=b.altKey;q&&"keypress"==a.type?(c=this.Cc,d=13!=c&&27!=c?b.keyCode:0):r&&"keypress"==a.type?(c=this.Cc,d=0<=b.charCode&&63232>b.charCode&&Ch(c)?b.charCode:0):sb?(c=this.Cc,d=Ch(c)?b.keyCode:0):(c=b.keyCode||this.Cc,d=b.charCode||0,Kh&&(e=this.Tg),vb&&63==d&&224==c&&(c=191));var h=c=Dh(c),k=b.keyIdentifier;c?63232<=c&&c in Hh?h=Hh[c]:25==c&&a.shiftKey&&(h=9):k&&k in Ih&&(h=Ih[k]);a=h==this.xb;this.xb=h;b=new Lh(h,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.n=function(){return this.F};function Gh(a,b,c){a.Wf&&a.detach();a.F=b;a.Vf=Sb(a.F,"keypress",a,c);a.Eh=Sb(a.F,"keydown",a.Tr,c,a);a.Wf=Sb(a.F,"keyup",a.Ur,c,a)}f.detach=function(){this.Vf&&($b(this.Vf),$b(this.Eh),$b(this.Wf),this.Wf=this.Eh=this.Vf=null);this.F=null;this.Cc=this.xb=-1};f.Y=function(){Fh.j.Y.call(this);this.detach()};function Lh(a,b,c,d){Mb.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}n(Lh,Mb);function Mh(a,b,c){Wg.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ja(b);if(d=oh[d])break;b=b.j?b.j.constructor:null}b=d?ha(d.Yb)?d.Yb():new d:null}this.M=b;this.vg(void 0!==a?a:null)}n(Mh,Wg);f=Mh.prototype;f.Wa=null;f.$=0;f.va=39;f.Zg=255;f.sd=0;f.pa=!0;f.Xb=null;f.Ge=!0;f.Sg=!1;f.Fs=null;f.Ga=function(){return this.M.Ga(this)};f.Gf=function(){return this.Ya||(this.Ya=new Fh)};
f.te=function(a,b){b?a&&(this.Xb?ab(this.Xb,a)||this.Xb.push(a):this.Xb=[a],this.M.te(this,a,!0)):a&&this.Xb&&bb(this.Xb,a)&&(0==this.Xb.length&&(this.Xb=null),this.M.te(this,a,!1))};f.I=function(){var a=this.M.I(this);this.F=a;yh(this.M,a,this.If());this.Sg||this.M.di(a,!1);this.K()||this.M.P(a,!1)};f.If=function(){return this.Fs};f.wb=function(){return this.M.wb(this.n())};
f.za=function(){Mh.j.za.call(this);zh(this,this.F);this.M.Je(this);if(this.va&-2&&(this.Ge&&Nh(this,!0),this.va&32)){var a=this.Ga();if(a){var b=this.Gf();Gh(b,a);$g(this).O(b,"key",this.Eb).O(a,"focus",this.Lf).O(a,"blur",this.Ee)}}};
function Nh(a,b){var c=$g(a),d=a.n();b?(c.O(d,"mouseover",a.He).O(d,"mousedown",a.Ac).O(d,"mouseup",a.Ie).O(d,"mouseout",a.yh),a.Fe!=ba&&c.O(d,"contextmenu",a.Fe),q&&c.O(d,"dblclick",a.$j)):(c.Jb(d,"mouseover",a.He).Jb(d,"mousedown",a.Ac).Jb(d,"mouseup",a.Ie).Jb(d,"mouseout",a.yh),a.Fe!=ba&&c.Jb(d,"contextmenu",a.Fe),q&&c.Jb(d,"dblclick",a.$j))}f.Cb=function(){Mh.j.Cb.call(this);this.Ya&&this.Ya.detach();this.K()&&this.isEnabled()&&this.M.Kc(this,!1)};
f.Y=function(){Mh.j.Y.call(this);this.Ya&&(this.Ya.m(),delete this.Ya);delete this.M;this.Xb=this.Wa=null};f.od=function(a){this.M.od(this.n(),a);this.vg(a)};f.vg=function(a){this.Wa=a};f.Bf=function(){var a=this.Wa;if(!a)return"";a=l(a)?a:ea(a)?Za(a,zg).join(""):xg(a);return ua(a)};f.Ve=function(a){Mh.j.Ve.call(this,a);var b=this.n();b&&this.M.Ve(b,a)};f.di=function(a){this.Sg=a;var b=this.n();b&&this.M.di(b,a)};f.K=function(){return this.pa};
f.P=function(a,b){if(b||this.pa!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.n();c&&this.M.P(c,a);this.isEnabled()&&this.M.Kc(this,a);this.pa=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};f.Ue=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Oh(this,1,!a)||(a||(this.setActive(!1),this.nb(!1)),this.K()&&this.M.Kc(this,a),this.Rb(1,!a,!0))};f.nb=function(a){Oh(this,2,a)&&this.Rb(2,a)};f.setActive=function(a){Oh(this,4,a)&&this.Rb(4,a)};
f.Uf=function(){return!!(this.$&8)};f.gi=function(a){Oh(this,8,a)&&this.Rb(8,a)};function Ph(a,b){Oh(a,16,b)&&a.Rb(16,b)}f.Pd=function(){return!!(this.$&64)};function Qh(a,b){Oh(a,64,b)&&a.Rb(64,b)}f.Rb=function(a,b,c){c||1!=a?this.va&a&&b!=!!(this.$&a)&&(this.M.Rb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Ue(!b)};f.jb=function(a,b){if(this.R&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.Rb(a,!1);this.va=b?this.va|a:this.va&~a};
function Rh(a,b){return!!(a.Zg&b)&&!!(a.va&b)}function Oh(a,b,c){return!!(a.va&b)&&!!(a.$&b)!=c&&(!(a.sd&b)||a.dispatchEvent(Yg(b,c)))&&!a.se}f.He=function(a){!Sh(a,this.n())&&this.dispatchEvent("enter")&&this.isEnabled()&&Rh(this,2)&&this.nb(!0)};f.yh=function(a){!Sh(a,this.n())&&this.dispatchEvent("leave")&&(Rh(this,4)&&this.setActive(!1),Rh(this,2)&&this.nb(!1))};f.Fe=ba;function Sh(a,b){return!!a.relatedTarget&&rg(b,a.relatedTarget)}
f.Ac=function(a){this.isEnabled()&&(Rh(this,2)&&this.nb(!0),!Ob(a)||r&&vb&&a.ctrlKey||(Rh(this,4)&&this.setActive(!0),this.M.mc(this)&&this.Ga().focus()));this.Sg||!Ob(a)||r&&vb&&a.ctrlKey||a.preventDefault()};f.Ie=function(a){this.isEnabled()&&(Rh(this,2)&&this.nb(!0),this.$&4&&this.Ec(a)&&Rh(this,4)&&this.setActive(!1))};f.$j=function(a){this.isEnabled()&&this.Ec(a)};
f.Ec=function(a){Rh(this,16)&&Ph(this,!(this.$&16));Rh(this,8)&&this.gi(!0);Rh(this,64)&&Qh(this,!this.Pd());var b=new rb("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Sh=a.Sh);return this.dispatchEvent(b)};f.Lf=function(){Rh(this,32)&&Oh(this,32,!0)&&this.Rb(32,!0)};f.Ee=function(){Rh(this,4)&&this.setActive(!1);Rh(this,32)&&Oh(this,32,!1)&&this.Rb(32,!1)};
f.Eb=function(a){return this.K()&&this.isEnabled()&&this.$c(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.$c=function(a){return 13==a.keyCode&&this.Ec(a)};if(!ha(Mh))throw Error("Invalid component class "+Mh);if(!ha(uh))throw Error("Invalid renderer class "+uh);var Th=ja(Mh);oh[Th]=uh;nh("goog-control",function(){return new Mh(null)});function Uh(){this.pj=[]}n(Uh,uh);ca(Uh);function Vh(a,b){var c=a.pj[b];if(!c){switch(b){case 0:c=a.U()+"-highlight";break;case 1:c=a.U()+"-checkbox";break;case 2:c=a.U()+"-content"}a.pj[b]=c}return c}f=Uh.prototype;f.zf=function(){return"menuitem"};f.I=function(a){var b=a.eb().I("div",this.xe(a).join(" "),Wh(this,a.Wa,a.eb()));Xh(this,a,b,!!(a.va&8)||!!(a.va&16));return b};f.wb=function(a){return a&&a.firstChild};
f.od=function(a,b){var c=this.wb(a),d=Yh(this,a)?c.firstChild:null;Uh.j.od.call(this,a,b);d&&!Yh(this,a)&&c.insertBefore(d,c.firstChild||null)};function Wh(a,b,c){a=Vh(a,2);return c.I("div",a,b)}f.Nk=function(a,b,c){a&&b&&Xh(this,a,b,c)};f.ei=function(a,b,c){a&&b&&Xh(this,a,b,c)};function Yh(a,b){var c=a.wb(b);if(c){var c=c.firstChild,d=Vh(a,1);return!!c&&ia(c)&&1==c.nodeType&&ih(c,d)}return!1}
function Xh(a,b,c,d){yh(a,c,b.If());zh(b,c);d!=Yh(a,c)&&(d?jh(c,"goog-option"):lh(c,"goog-option"),c=a.wb(c),d?(a=Vh(a,1),c.insertBefore(b.eb().I("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}f.Cf=function(a){switch(a){case 2:return Vh(this,0);case 16:case 8:return"goog-option-selected";default:return Uh.j.Cf.call(this,a)}};f.U=function(){return"goog-menuitem"};function Zh(a,b,c,d){Mh.call(this,a,d||Uh.Yb(),c);this.aa(b)}n(Zh,Mh);f=Zh.prototype;f.Aa=function(){var a=this.ag;return null!=a?a:this.Bf()};f.aa=function(a){this.ag=a};f.jb=function(a,b){Zh.j.jb.call(this,a,b);switch(a){case 8:this.$&16&&!b&&Ph(this,!1);var c=this.n();c&&this.M.Nk(this,c,b);break;case 16:(c=this.n())&&this.M.ei(this,c,b)}};f.Nk=function(a){this.jb(8,a)};f.ei=function(a){this.jb(16,a)};
f.Bf=function(){var a=this.Wa;return ea(a)?(a=Za(a,function(a){return ia(a)&&1==a.nodeType&&(ih(a,"goog-menuitem-accel")||ih(a,"goog-menuitem-mnemonic-separator"))?"":zg(a)}).join(""),ua(a)):Zh.j.Bf.call(this)};f.Ie=function(a){var b=this.getParent();if(b){var c=b.xk;b.xk=null;if(b=c&&ga(a.clientX))b=new gc(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}Zh.j.Ie.call(this,a)};f.$c=function(a){return a.keyCode==this.qk&&this.Ec(a)?!0:Zh.j.$c.call(this,a)};f.Mr=function(){return this.qk};
nh("goog-menuitem",function(){return new Zh(null)});Zh.prototype.If=function(){return this.va&16?"menuitemcheckbox":this.va&8?"menuitemradio":Zh.j.If.call(this)};Zh.prototype.getParent=function(){return Mh.prototype.getParent.call(this)};Zh.prototype.Hf=function(){return Mh.prototype.Hf.call(this)};function $h(a){this.fj=a}ca($h);f=$h.prototype;f.zf=function(){return this.fj};function ai(a,b){a&&(a.tabIndex=b?0:-1)}f.I=function(a){return a.eb().I("div",this.xe(a).join(" "))};f.wb=function(a){return a};f.Je=function(a){a=a.n();Pg(a,!0,tb);q&&(a.hideFocus=!0);var b=this.zf();b&&qh(a,b)};f.Ga=function(a){return a.n()};f.U=function(){return"goog-container"};f.xe=function(a){var b=this.U(),c=[b,a.Vd==bi?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function ci(){}n(ci,uh);ca(ci);ci.prototype.I=function(a){return a.eb().I("div",this.U())};ci.prototype.od=function(){};ci.prototype.U=function(){return"goog-menuseparator"};function di(a,b){Mh.call(this,null,a||ci.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(di,Mh);di.prototype.za=function(){di.j.za.call(this);var a=this.n();qh(a,"separator")};nh("goog-menuseparator",function(){return new di});function ei(a){this.fj=a||"menu"}n(ei,$h);ca(ei);ei.prototype.U=function(){return"goog-menu"};ei.prototype.Je=function(a){ei.j.Je.call(this,a);a=a.n();rh(a,"haspopup","true")};nh("goog-menuseparator",function(){return new di});function fi(a,b,c){Wg.call(this,c);this.M=b||$h.Yb();this.Vd=a||gi}n(fi,Wg);var bi="horizontal",gi="vertical";f=fi.prototype;f.Fh=null;f.Ya=null;f.M=null;f.Vd=null;f.pa=!0;f.Uc=!0;f.Wc=!0;f.N=-1;f.Ba=null;f.Td=!1;f.hr=!1;f.Ds=!0;f.hc=null;f.Ga=function(){return this.Fh||this.M.Ga(this)};f.Gf=function(){return this.Ya||(this.Ya=new Fh(this.Ga()))};f.I=function(){this.F=this.M.I(this)};f.wb=function(){return this.M.wb(this.n())};
f.za=function(){fi.j.za.call(this);bh(this,function(a){a.R&&hi(this,a)},this);var a=this.n();this.M.Je(this);this.P(this.pa,!0);$g(this).O(this,"enter",this.wh).O(this,"highlight",this.Sr).O(this,"unhighlight",this.Yr).O(this,"open",this.Vr).O(this,"close",this.Pr).O(a,"mousedown",this.Ac).O(ig(a),"mouseup",this.Qr).O(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.Or);this.mc()&&ii(this,!0)};
function ii(a,b){var c=$g(a),d=a.Ga();b?c.O(d,"focus",a.Lf).O(d,"blur",a.Ee).O(a.Gf(),"key",a.Eb):c.Jb(d,"focus",a.Lf).Jb(d,"blur",a.Ee).Jb(a.Gf(),"key",a.Eb)}f.Cb=function(){this.Sa(-1);this.Ba&&Qh(this.Ba,!1);this.Td=!1;fi.j.Cb.call(this)};f.Y=function(){fi.j.Y.call(this);this.Ya&&(this.Ya.m(),this.Ya=null);this.M=this.Ba=this.hc=this.Fh=null};f.wh=function(){return!0};
f.Sr=function(a){var b=gh(this,a.target);if(-1<b&&b!=this.N){var c=dh(this,this.N);c&&c.nb(!1);this.N=b;c=dh(this,this.N);this.Td&&c.setActive(!0);this.Ds&&this.Ba&&c!=this.Ba&&(c.va&64?Qh(c,!0):Qh(this.Ba,!1))}b=this.n();null!=a.target.n()&&rh(b,"activedescendant",a.target.n().id)};f.Yr=function(a){a.target==dh(this,this.N)&&(this.N=-1);a=this.n();sh(a)};f.Vr=function(a){(a=a.target)&&a!=this.Ba&&a.getParent()==this&&(this.Ba&&Qh(this.Ba,!1),this.Ba=a)};
f.Pr=function(a){a.target==this.Ba&&(this.Ba=null)};f.Ac=function(a){this.Uc&&(this.Td=!0);var b=this.Ga();b&&vg(b)&&wg(b)?b.focus():a.preventDefault()};f.Qr=function(){this.Td=!1};f.Or=function(a){var b=ji(this,a.target);if(b)switch(a.type){case "mousedown":b.Ac(a);break;case "mouseup":b.Ie(a);break;case "mouseover":b.He(a);break;case "mouseout":b.yh(a);break;case "contextmenu":b.Fe(a)}};
function ji(a,b){if(a.hc)for(var c=a.n();b&&b!==c;){var d=b.id;if(d in a.hc)return a.hc[d];b=b.parentNode}return null}f.Lf=function(){};f.Ee=function(){this.Sa(-1);this.Td=!1;this.Ba&&Qh(this.Ba,!1)};f.Eb=function(a){return this.isEnabled()&&this.K()&&(0!=ch(this)||this.Fh)&&this.$c(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.$c=function(a){var b=dh(this,this.N);if(b&&"function"==typeof b.Eb&&b.Eb(a)||this.Ba&&this.Ba!=b&&"function"==typeof this.Ba.Eb&&this.Ba.Eb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.mc())this.Ga().blur();else return!1;break;case 36:ki(this);break;case 35:li(this);break;case 38:if(this.Vd==gi)mi(this);else return!1;break;case 37:if(this.Vd==bi)eh(this)?ni(this):mi(this);else return!1;break;case 40:if(this.Vd==gi)ni(this);else return!1;break;
case 39:if(this.Vd==bi)eh(this)?mi(this):ni(this);else return!1;break;default:return!1}return!0};function hi(a,b){var c=b.n(),c=c.id||(c.id=Zg(b));a.hc||(a.hc={});a.hc[c]=b}f.ne=function(a,b){fi.j.ne.call(this,a,b)};
f.Ad=function(a,b,c){a.sd|=2;a.sd|=64;!this.mc()&&this.hr||a.jb(32,!1);a.R&&0!=a.Ge&&Nh(a,!1);a.Ge=!1;var d=a.getParent()==this?gh(this,a):-1;fi.j.Ad.call(this,a,b,c);a.R&&this.R&&hi(this,a);a=d;-1==a&&(a=ch(this));a==this.N?this.N=Math.min(ch(this)-1,b):a>this.N&&b<=this.N?this.N++:a<this.N&&b>this.N&&this.N--};
f.removeChild=function(a,b){if(a=l(a)?ah(this,a):a){var c=gh(this,a);-1!=c&&(c==this.N?(a.nb(!1),this.N=-1):c<this.N&&this.N--);var d=a.n();d&&d.id&&this.hc&&(c=this.hc,d=d.id,d in c&&delete c[d])}c=a=fi.j.removeChild.call(this,a,b);c.R&&1!=c.Ge&&Nh(c,!0);c.Ge=!0;return a};f.K=function(){return this.pa};
f.P=function(a,b){if(b||this.pa!=a&&this.dispatchEvent(a?"show":"hide")){this.pa=a;var c=this.n();c&&(Mg(c,a),this.mc()&&ai(this.Ga(),this.Uc&&this.pa),b||this.dispatchEvent(this.pa?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Uc};
f.Ue=function(a){this.Uc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Uc=!0,bh(this,function(a){a.bl?delete a.bl:a.Ue(!0)})):(bh(this,function(a){a.isEnabled()?a.Ue(!1):a.bl=!0}),this.Td=this.Uc=!1),this.mc()&&ai(this.Ga(),a&&this.pa))};f.mc=function(){return this.Wc};f.Kc=function(a){a!=this.Wc&&this.R&&ii(this,a);this.Wc=a;this.Uc&&this.pa&&ai(this.Ga(),a)};f.Sa=function(a){(a=dh(this,a))?a.nb(!0):-1<this.N&&dh(this,this.N).nb(!1)};f.nb=function(a){this.Sa(gh(this,a))};
function ki(a){oi(a,function(a,c){return(a+1)%c},ch(a)-1)}function li(a){oi(a,function(a,c){a--;return 0>a?c-1:a},0)}function ni(a){oi(a,function(a,c){return(a+1)%c},a.N)}function mi(a){oi(a,function(a,c){a--;return 0>a?c-1:a},a.N)}function oi(a,b,c){c=0>c?gh(a,a.Ba):c;var d=ch(a);c=b.call(a,c,d);for(var e=0;e<=d;){var h=dh(a,c);if(h&&a.lj(h)){a.Sa(c);break}e++;c=b.call(a,c,d)}}f.lj=function(a){return a.K()&&a.isEnabled()&&!!(a.va&2)};function pi(){}n(pi,uh);ca(pi);pi.prototype.U=function(){return"goog-menuheader"};function qi(a,b,c){Mh.call(this,a,c||pi.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(qi,Mh);nh("goog-menuheader",function(){return new qi(null)});function ri(a,b){fi.call(this,gi,b||ei.Yb(),a);this.Kc(!1)}n(ri,fi);f=ri.prototype;f.Rg=!0;f.ir=!1;f.U=function(){return this.M.U()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.m()};f.Xj=function(a){return dh(this,a)};
f.$d=function(a,b){var c=this.K();c||Mg(this.n(),!0);var d=this.n(),e=a,h=b,k=Gg(d);e instanceof gc&&(h=e.y,e=e.x);var e=d.offsetLeft+(e-k.x),m=d.offsetTop+(h-k.y),k=tb&&(vb||wb)&&Eb("1.9");e instanceof gc?(h=e.x,e=e.y):(h=e,e=m);d.style.left=Hg(h,k);d.style.top=Hg(e,k);c||Mg(this.n(),!1)};function si(a){a.Rg=!0;a.Kc(!0)}f.P=function(a,b,c){(b=ri.j.P.call(this,a,b))&&a&&this.R&&this.Rg&&this.Ga().focus();this.xk=a&&c&&ga(c.clientX)?new gc(c.clientX,c.clientY):null;return b};
f.wh=function(a){this.Rg&&this.Ga().focus();return ri.j.wh.call(this,a)};f.lj=function(a){return(this.ir||a.isEnabled())&&a.K()&&!!(a.va&2)};f.$c=function(a){var b=ri.j.$c.call(this,a);b||bh(this,function(c){!b&&c.Mr&&c.qk==a.keyCode&&(this.isEnabled()&&this.nb(c),b=c.Eb(a))},this);return b};
f.Sa=function(a){ri.j.Sa.call(this,a);if(a=dh(this,a)){var b=a.n();a=this.n();var c=Gg(b),d=Gg(a),e=Sg(a),h=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,k=a.scrollTop,e=e+Math.min(h,Math.max(h-(a.clientWidth-b.offsetWidth),0)),k=k+Math.min(c,Math.max(c-d,0)),b=new gc(e,k);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function T(a,b){this.Sd=a;this.ha=b;ti(this);var c=ui(this)[0];this.wa=c[1];this.of=F("tspan",{},null);this.of.appendChild(document.createTextNode(t?vi+" ":" "+vi));T.j.constructor.call(this,c[0])}n(T,Pe);var vi=yb?"\u25bc":"\u25be";f=T.prototype;f.clone=function(){return new T(this.Sd,this.ha)};f.ef="default";
f.zg=function(){wi(this,null);for(var a=this,b=new ri,c=ui(this),d=0;d<c.length;d++){var e=c[d][1],h=new Zh(c[d][0]);h.aa(e);h.ei(!0);b.ne(h,!0);Ph(h,e==this.wa)}Sb(b,"action",function(b){if(b=b.target){b=b.Aa();if(a.h&&a.ha){var c=a.ha(b);void 0!==c&&(b=c)}null!==b&&a.aa(b)}xi(a)});$g(b).O(b.n(),"touchstart",function(a){ji(this,a.target).Ac(a)});$g(b).O(b.n(),"touchend",function(a){ji(this,a.target).Ec(a)});c=mg();d=Dg();e=yi(this.Bb);h=this.Bb.getBBox();b.G(zi);var k=b.n();Md(k,"blocklyDropdownMenu");
var m=Jg(k);e.y=e.y+m.height+h.height>=c.height+d.y?e.y-m.height:e.y+h.height;t?(e.x+=h.width,e.x+=25,e.x<d.x+m.width&&(e.x=d.x+m.width)):(e.x-=25,e.x>c.width+d.x-m.width&&(e.x=c.width+d.x-m.width));Ai(e.x,e.y,c,d);si(b);k.focus()};
function ti(a){a.Th=null;a.qi=null;var b=a.Sd;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Bi(c),e=Ci(c,d),h=Di(c,d);if((e||h)&&!(d<=e+h)){e&&(a.Th=c[0].substring(0,e-1));h&&(a.qi=c[0].substr(1-h));c=[];for(d=0;d<b.length;d++){var k=b[d][0],m=b[d][1],k=k.substring(e,k.length-h);c[d]=[k,m]}a.Sd=c}}}function ui(a){return ha(a.Sd)?a.Sd.call(a):a.Sd}f.Aa=function(){return this.wa};f.aa=function(a){this.wa=a;for(var b=ui(this),c=0;c<b.length;c++)if(b[c][1]==a){this.ka(b[c][0]);return}this.ka(a)};
f.ka=function(a){this.h&&(this.of.style.fill=Nd(Od(this.h.bh)));null!==a&&a!==this.da&&(this.da=a,Qe(this),this.Ka&&(t?this.Ka.insertBefore(this.of,this.Ka.firstChild):this.Ka.appendChild(this.of)),this.h&&this.h.B&&(this.h.G(),this.h.Ma(),this.h.u.vb()))};f.m=function(){xi(this);T.j.m.call(this)};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var U={};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var sf="VARIABLE";function rf(a){a=a||G;var b;if(a.Db)b=a.Db();else if(a.cb)b=a.cb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].Zb;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var h=d[e];h&&(a[h.toLowerCase()]=h)}}b=[];for(var k in a)b.push(a[k]);return b}function Ei(a,b){for(var c=G.cb(),d=0;d<c.length;d++){var e=c[d].Gb;e&&e.call(c[d],a,b)}}
function Fi(a,b,c,d){var e=rf();e.sort(wa);e.unshift(null);for(var h=void 0,k=0;k<e.length;k++)if(e[k]!==h){var m=H.variables_get?Ic(d,"variables_get"):null;m&&m.sa();var p=H.variables_set?Ic(d,"variables_set"):null;p&&p.sa();null===e[k]?h=(m||p).Zb()[0]:(m&&Lc(m,e[k],"VAR"),p&&Lc(p,e[k],"VAR"));p&&a.push(p);m&&a.push(m);m&&p?b.push(c,3*c):b.push(2*c)}}
function Gi(){var a=rf(),b="";if(a.length){a.sort(wa);for(var c=0,d="i",e=0,h=!1;!b;){e=0;for(h=!1;e<a.length&&!h;)a[e].toLowerCase()==d&&(h=!0),e++;h?("z"===d[0]?(c++,d="a"):(d=String.fromCharCode(d.charCodeAt(0)+1),"l"==d[0]&&(d=String.fromCharCode(d.charCodeAt(0)+1))),0<c&&(d+=c)):b=d}}else b="i";return b};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Hi(a,b){var c;if(b){var d=this;c=function(a){var c=Ii.call(d,a);a=void 0===c?a:null===c?d.Aa():c;b.call(d,a);return c}}else c=Ii;Hi.j.constructor.call(this,Ji,c);a?this.aa(a):this.aa(Gi())}n(Hi,T);Hi.prototype.clone=function(){return new Hi(this.Aa(),this.ha)};Hi.prototype.Aa=function(){return this.fb()};Hi.prototype.aa=function(a){this.wa=a;this.ka(a)};
function Ji(){var a=this.h&&this.h.u?rf(this.h.u):[],b=this.fb();b&&-1==a.indexOf(b)&&a.push(b);a.sort(wa);a.push(U.Ti);a.push(U.Ki);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function Ii(a){function b(a,b){bd();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==U.Ti){var c=this.fb();(a=b(U.Rp.replace("%1",c),c))&&Ei(c,a);return null}if(a==U.Ki)return(a=b(U.qp,""))?(Ei(a,a),a):null};var Ki={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Li(a){var b={};a=String(a);var c="#"==a.charAt(0)?a:"#"+a;if(Mi.test(c))return b.zh=Ni(c),b.type="hex",b;a:{var d=a.match(Oi);if(d){var c=Number(d[1]),e=Number(d[2]),d=Number(d[3]);if(0<=c&&255>=c&&0<=e&&255>=e&&0<=d&&255>=d){c=[c,e,d];break a}}c=[]}if(c.length)return b.zh=Nd(c),b.type="rgb",b;if(Ki&&(c=Ki[a.toLowerCase()]))return b.zh=c,b.type="named",b;throw Error(a+" is not a valid color string");}var Pi=/#(.)(.)(.)/;
function Ni(a){if(!Mi.test(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(Pi,"#$1$1$2$2$3$3"));return a.toLowerCase()}function Qi(a){a=Ni(a);return[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)]}
function Nd(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=Ri(b.toString(16));c=Ri(c.toString(16));a=Ri(a.toString(16));return"#"+b+c+a}var Mi=/^#(?:[0-9a-f]{3}){1,2}$/i,Oi=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;function Ri(a){return 1==a.length?"0"+a:a}
function Od(a){var b=0,c=0,d=0,e=Math.floor(a/60),h=a/60-e;a=237.15*(1-.39*h);h=237.15*(1-.39*(1-h));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=h;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=h;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=h,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function Si(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function Ti(a,b){null!=a&&this.append.apply(this,arguments)}f=Ti.prototype;f.ya="";f.set=function(a){this.ya=""+a};f.append=function(a,b,c){this.ya+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.ya+=arguments[d];return this};f.clear=function(){this.ya=""};f.toString=function(){return this.ya};function Ui(a,b,c){Wg.call(this,c);this.Na=b||Vi;this.Ah=a instanceof Sf?a:Wf(a,null)}n(Ui,Wg);var Wi={};f=Ui.prototype;f.bi=!1;f.ue=!1;f.$s=null;f.gr=bg;f.Le=!0;f.vf=-1;f.Y=function(){Ui.j.Y.call(this);this.ud&&(this.ud.removeNode(this),this.ud=null);this.F=null};
f.Sf=function(){var a=this.n();if(a){var b=Xi(this);b&&!b.id&&(b.id=Zg(this)+".label");qh(a,"treeitem");rh(a,"selected",!1);rh(a,"expanded",!1);rh(a,"level",this.Id());b&&rh(a,"labelledby",b.id);(a=this.Ff())&&qh(a,"presentation");(a=this.Ef())&&qh(a,"presentation");if(a=Yi(this))if(qh(a,"group"),a.hasChildNodes())for(a=ch(this),b=1;b<=a;b++){var c=dh(this,b-1).n();rh(c,"setsize",a);rh(c,"posinset",b)}}};
f.I=function(){var a=this.eb(),b=this.si(),c=a.Wb,a=c.createElement("div");q?(cg(a,ag($f("br"),b)),a.removeChild(a.firstChild)):cg(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.F=b};f.za=function(){Ui.j.za.call(this);Wi[Zg(this)]=this;this.Sf()};f.Cb=function(){Ui.j.Cb.call(this);delete Wi[Zg(this)]};
f.Ad=function(a,b){var c=dh(this,b-1),d=dh(this,b);Ui.j.Ad.call(this,a,b);a.gd=c;a.Qb=d;c?c.Qb=a:this.Vj=a;d?d.gd=a:this.kk=a;var e=this.gb();e&&Zi(a,e);$i(a,this.Id()+1);if(this.n()&&(this.de(),this.lb())){e=Yi(this);a.n()||a.I();var h=a.n(),k=d&&d.n();e.insertBefore(h,k);this.R&&a.za();d||(c?c.de():(Mg(e,!0),this.qc(this.lb())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Ad(a,b?gh(this,b):ch(this));return a};
f.removeChild=function(a){var b=this.gb(),c=b?b.Zc():null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),fc(this.Bs,10,this)):this.select();Ui.j.removeChild.call(this,a);this.kk==a&&(this.kk=a.gd);this.Vj==a&&(this.Vj=a.Qb);a.gd&&(a.gd.Qb=a.Qb);a.Qb&&(a.Qb.gd=a.gd);c=!a.Qb;a.ud=null;a.vf=-1;if(b&&(b.removeNode(this),this.R)){b=Yi(this);if(a.R){var d=a.n();b.removeChild(d);a.Cb()}c&&(c=dh(this,ch(this)-1))&&c.de();fh(this)||(b.style.display="none",this.de(),this.Ff().className=this.Af())}return a};
f.remove=Ui.prototype.removeChild;f.Bs=function(){this.select()};f.Id=function(){var a=this.vf;0>a&&(a=(a=this.getParent())?a.Id()+1:0,$i(this,a));return a};function $i(a,b){if(b!=a.vf){a.vf=b;var c=aj(a);if(c){var d=bj(a)+"px";eh(a)?c.style.paddingRight=d:c.style.paddingLeft=d}bh(a,function(a){$i(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.Yc=function(){var a=[];bh(this,function(b){a.push(b)});return a};f.Uf=function(){return this.bi};
f.select=function(){var a=this.gb();a&&a.Hb(this)};function cj(a,b){if(a.bi!=b){a.bi=b;dj(a);var c=a.n();c&&(rh(c,"selected",b),b&&(c=a.gb().n(),rh(c,"activedescendant",Zg(a))))}}f.lb=function(){return this.ue};
f.qc=function(a){var b=a!=this.ue;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.ue=a;c=this.gb();var d=this.n();if(fh(this)){if(!a&&c&&this.contains(c.Zc())&&this.select(),d){if(c=Yi(this))if(Mg(c,a),a&&this.R&&!c.hasChildNodes()){var e=[];bh(this,function(a){e.push(a.si())});cg(c,ag(e));bh(this,function(a){a.za()})}this.de()}}else(c=Yi(this))&&Mg(c,!1);d&&(this.Ff().className=this.Af(),rh(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.qc(!this.lb())};
f.expand=function(){this.qc(!0)};f.collapse=function(){this.qc(!1)};f.$h=function(){var a=this.getParent();a&&(a.qc(!0),a.$h())};f.si=function(){var a=this.gb(),b=!a.Xe||a==this.getParent()&&!a.ji?this.Na.yj:this.Na.xj,a=this.lb()&&fh(this),b={"class":b,style:ej(this)},c=[];a&&bh(this,function(a){c.push(a.si())});a=$f("div",b,c);return $f("div",{"class":this.Na.Gj,id:Zg(this)},[fj(this),a])};function bj(a){return Math.max(0,(a.Id()-1)*a.Na.Dh)}
function fj(a){var b={};b["padding-"+(eh(a)?"right":"left")]=bj(a)+"px";var b={"class":a.Be(),style:b},c=a.sh(),d=$f("span",{style:{display:"inline-block"},"class":a.Af()}),e=$f("span",{"class":a.Na.Hj,title:a.$s||null},a.Ah);a=ag(e,$f("span",{},a.gr));return $f("div",b,[c,d,a])}f.Be=function(){return this.Na.hh+(this.Uf()?" "+this.Na.Jj:"")};f.sh=function(){return $f("span",{type:"expand",style:{display:"inline-block"},"class":gj(this)})};
function gj(a){var b=a.gb(),c=!b.Xe||b==a.getParent()&&!b.ji,d=a.Na,e=new Ti;e.append(d.Tc," ",d.ur," ");if(fh(a)){var h=0;b.ii&&a.Le&&(h=a.lb()?2:1);c||(h=a.Qb?h+8:h+4);switch(h){case 1:e.append(d.yr);break;case 2:e.append(d.xr);break;case 4:e.append(d.Cj);break;case 5:e.append(d.wr);break;case 6:e.append(d.vr);break;case 8:e.append(d.Dj);break;case 9:e.append(d.Ar);break;case 10:e.append(d.zr);break;default:e.append(d.Bj)}}else c?e.append(d.Bj):a.Qb?e.append(d.Dj):e.append(d.Cj);return e.toString()}
function ej(a){var b=a.lb()&&fh(a);return Of({"background-position":hj(a),display:b?null:"none"})}function hj(a){return(a.Qb?(a.Id()-1)*a.Na.Dh:"-100")+"px 0"}f.n=function(){var a=Ui.j.n.call(this);a||(this.F=a=this.eb().n(Zg(this)));return a};function aj(a){return(a=a.n())?a.firstChild:null}f.Ef=function(){var a=aj(this);return a?a.firstChild:null};f.Ff=function(){var a=aj(this);return a?a.childNodes[1]:null};function Xi(a){return(a=aj(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Yi(a){return(a=a.n())?a.lastChild:null}f.ka=function(a){this.Ah=a=Vf(a);var b=Xi(this);b&&cg(b,a);(a=this.gb())&&ij(a,this)};f.fb=function(){var a=Uf(this.Ah);return-1!=a.indexOf("&")?"document"in g?Fa(a):Ha(a):a};function dj(a){var b=aj(a);b&&(b.className=a.Be())}f.de=function(){var a=this.Ef();a&&(a.className=gj(this));if(a=Yi(this))a.style.backgroundPosition=hj(this)};f.Nh=function(a){"expand"==a.target.getAttribute("type")&&fh(this)?this.Le&&this.toggle():(this.select(),dj(this))};
f.sk=function(a){"expand"==a.target.getAttribute("type")&&fh(this)||this.Le&&this.toggle()};function jj(a){return a.lb()&&fh(a)?jj(dh(a,ch(a)-1)):a}function Zi(a,b){a.ud!=b&&(a.ud=b,ij(b,a),bh(a,function(a){Zi(a,b)}))}
var Vi={Dh:19,Ij:"goog-tree-root goog-tree-item",Fj:"goog-tree-hide-root",Gj:"goog-tree-item",xj:"goog-tree-children",yj:"goog-tree-children-nolines",hh:"goog-tree-row",Hj:"goog-tree-item-label",Tc:"goog-tree-icon",ur:"goog-tree-expand-icon",yr:"goog-tree-expand-icon-plus",xr:"goog-tree-expand-icon-minus",Ar:"goog-tree-expand-icon-tplus",zr:"goog-tree-expand-icon-tminus",wr:"goog-tree-expand-icon-lplus",vr:"goog-tree-expand-icon-lminus",Dj:"goog-tree-expand-icon-t",Cj:"goog-tree-expand-icon-l",Bj:"goog-tree-expand-icon-blank",
fh:"goog-tree-expanded-folder-icon",zj:"goog-tree-collapsed-folder-icon",gh:"goog-tree-file-icon",Ej:"goog-tree-expanded-folder-icon",Aj:"goog-tree-collapsed-folder-icon",Jj:"selected"};function kj(a,b,c){Ui.call(this,a,b,c)}n(kj,Ui);kj.prototype.gb=function(){if(this.ud)return this.ud;var a=this.getParent();return a&&(a=a.gb())?(Zi(this,a),a):null};kj.prototype.Af=function(){var a=this.lb(),b=this.Hr;if(a&&b)return b;b=this.$r;if(!a&&b)return b;b=this.Na;if(fh(this)){if(a&&b.fh)return b.Tc+" "+b.fh;if(!a&&b.zj)return b.Tc+" "+b.zj}else if(b.gh)return b.Tc+" "+b.gh;return""};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Td(){var a=this;this.v=new yd(function(){return Ud(a)},function(b){var c=Ud(a);c&&(ga(b.y)&&(a.v.scrollY=-c.sb*b.y-c.Ob),a.v.ba.setAttribute("transform","translate(0,"+(a.v.scrollY+c.rb)+")"))});this.v.hk=!0;this.Tj=[];this.Ha=this.S=0;this.$g=[];this.bc=[]}var lj,mj,nj,oj,pj,qj;f=Td.prototype;f.pe=!0;f.La=8;f.I=function(){this.o=F("g",{},null);this.Ib=F("path",{"class":"blocklyFlyoutBackground"},this.o);this.o.appendChild(this.v.I());return this.o};
f.m=function(){this.kc();D(this.Tj);this.Tj.length=0;this.md&&(this.md.m(),this.md=null);this.v=null;this.o&&(ed(this.o),this.o=null);this.Ye=this.Ib=null};function Ud(a){if(!a.K())return null;var b=a.Ha-2*a.La,c=a.S;try{var d=a.v.ba.getBBox()}catch(e){d={height:0,y:0}}return{Ta:b,xa:c,sb:d.height+d.y,Mc:-a.v.scrollY,Ob:0,rb:a.La,qb:0}}
f.g=function(a){this.Ye=a;this.md=new qd(this.v,!1,!1);this.kc();C(window,"resize",this,this.Fc);this.Fc();C(this.o,"wheel",this,this.cl);C(this.o,"mousewheel",this,this.cl);C(this.Ye.ba,"blocklyWorkspaceChange",this,this.oh);C(this.o,"mousedown",this,this.eg)};
f.Fc=function(){if(this.K()){var a=this.Ye.yc();if(a){var b=this.S-this.La;t&&(b*=-1);var c=["M "+(t?this.S:0)+",0"];c.push("h",b);c.push("a",this.La,this.La,0,0,t?0:1,t?-this.La:this.La,this.La);c.push("v",Math.max(0,a.Ta-2*this.La));c.push("a",this.La,this.La,0,0,t?0:1,t?this.La:-this.La,this.La);c.push("h",-b);c.push("z");this.Ib.setAttribute("d",c.join(" "));b=a.qb;t&&(b+=a.xa,b-=this.S);this.o.setAttribute("transform","translate("+b+","+a.rb+")");this.Ha=a.Ta;this.md&&this.md.resize()}}};
f.cl=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){tb&&(b*=10);var c=Ud(this),b=c.Mc+b,b=Math.min(b,c.sb-c.Ta),b=Math.max(b,0);this.md.set(b);a.preventDefault()}};f.K=function(){return this.o&&"block"==this.o.style.display};f.kc=function(){if(this.K()){this.o.style.display="none";for(var a=0,b;b=this.bc[a];a++)D(b);this.bc.length=0;this.Xh&&(D(this.Xh),this.Xh=null)}};
f.show=function(a){this.kc();for(var b=xc(this.v,!1),c=0,d;d=b[c];c++)d.u==this.v&&d.m(!1,!1);for(var c=0,e;e=this.$g[c];c++)ed(e);this.$g.length=0;var h=this.La;this.o.style.display="block";var b=[],k=[];if(a==sf)Fi(b,k,h,this.v);else if("PROCEDURE"==a)Af(b,k,h,this.v);else for(var m=0;d=a[m];m++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Gc(this.v,d),b.push(d),k.push(3*h));a=h;for(m=0;d=b[m];m++){c=d.Db();e=0;for(var p;p=c[e];e++)p.ac=!0,p.Se(null);d.G();p=d.V();e=Vd(d);c=t?0:h+8;d.moveBy(c,
a);a+=e.height+k[m];e=F("rect",{"fill-opacity":0},null);this.v.ba.insertBefore(e,d.V());d.ve=e;this.$g[m]=e;this.pe?this.bc.push(C(p,"mousedown",null,rj(this,d))):this.bc.push(C(p,"mousedown",null,sj(this,d)));this.bc.push(C(p,"mouseover",d,d.Qg));this.bc.push(C(p,"mouseout",d,d.pg));this.bc.push(C(e,"mousedown",null,rj(this,d)));this.bc.push(C(e,"mouseover",d,d.Qg));this.bc.push(C(e,"mouseout",d,d.pg))}this.bc.push(C(this.Ib,"mouseover",this,function(){for(var a=xc(this.v,!1),b=0,c;c=a[b];b++)c.pg()}));
this.S=0;this.Ek();this.oh();tj(window,"resize");this.Xh=C(this.v.ba,"blocklyWorkspaceChange",this,this.Ek);this.v.vb()};
f.Ek=function(){for(var a=0,b=this.La,c=xc(this.v,!1),d=0,e;e=c[d];d++)var h=Vd(e),a=Math.max(a,h.width);a+=b+8+b/2+cd;if(this.S!=a){for(d=0;e=c[d];d++){var h=Vd(e),k=e.ia();if(t){var m=a-b-8-k.x;e.moveBy(m,0);k.x+=m}e.ve&&(e.ve.setAttribute("width",h.width),e.ve.setAttribute("height",h.height),e.ve.setAttribute("x",t?k.x-h.width:k.x),e.ve.setAttribute("y",k.y))}this.S=a;dd(window,"resize")}};
function sj(a,b){return function(c){uj();bd();Yc(c)?vj(b,c):(xd(),$c(ad),lj=c,mj=b,nj=a,oj=C(document,"mouseup",this,uj),pj=C(document,"mousemove",this,a.zs));c.stopPropagation()}}f.eg=function(a){Yc(a)||(bd(!0),wj(),this.Qk=a.clientY,qj=C(document,"mousemove",this,this.Oh),oj=C(document,"mouseup",this,wj),a.preventDefault(),a.stopPropagation())};f.Oh=function(a){var b=a.clientY-this.Qk;this.Qk=a.clientY;a=Ud(this);b=a.Mc-b;b=Math.min(b,a.sb-a.Ta);b=Math.max(b,0);this.md.set(b)};
f.zs=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(xd(),Math.sqrt(Math.pow(a.clientX-lj.clientX,2)+Math.pow(a.clientY-lj.clientY,2))>xj&&rj(nj,mj)(lj))};function rj(a,b){return function(c){if(!Yc(c)&&!b.disabled){var d=Bc(b),d=Gc(a.Ye,d),e=b.V();if(!e)throw"originBlock is not rendered.";var e=od(e),h=d.V();if(!h)throw"block is not rendered.";h=od(h);d.moveBy(e.x-h.x,e.y-h.y);a.pe?a.kc():a.oh();d.eg(c)}}}
f.oh=function(){for(var a=zc(this.Ye),b=xc(this.v,!1),c=0,d;d=b[c];c++){var e=d.Db().length>a;d.Te(e)}};function wj(){oj&&(D(oj),oj=null);pj&&(D(pj),pj=null);qj&&(D(qj),qj=null);oj&&(D(oj),oj=null);nj=mj=lj=null}f.Ae=function(){var a=od(this.o).x;t||(a-=1E7);return new hd(a,-1E7,1E7+this.S,this.Ha+2E7)};function yj(a){if("function"==typeof a.vh)return a.vh();if(l(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function zj(a){this.wa=void 0;this.Va={};if(a){var b;if("function"==typeof a.th)b=a.th();else if("function"!=typeof a.vh)if(fa(a)||l(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=yj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=zj.prototype;f.set=function(a,b){Aj(this,a,b,!1)};f.add=function(a,b){Aj(this,a,b,!0)};
function Aj(a,b,c,d){for(var e=0;e<b.length;e++){var h=b.charAt(e);a.Va[h]||(a.Va[h]=new zj);a=a.Va[h]}if(d&&void 0!==a.wa)throw Error('The collection already contains the key "'+b+'"');a.wa=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.Va[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.wa:void 0};f.vh=function(){var a=[];Bj(this,a);return a};function Bj(a,b){void 0!==a.wa&&b.push(a.wa);for(var c in a.Va)Bj(a.Va[c],b)}
f.th=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.Va[e])return[];c=c.Va[e]}Cj(c,a,b)}else Cj(this,"",b);return b};function Cj(a,b,c){void 0!==a.wa&&c.push(b);for(var d in a.Va)Cj(a.Va[d],b+d,c)}f.clear=function(){this.Va={};this.wa=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.Va[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.Va[e]}a=b.wa;for(delete b.wa;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.Va[e].gk())delete b.Va[e];else break;return a};f.clone=function(){return new zj(this)};f.gk=function(){var a;if(a=void 0===this.wa)a:{a=this.Va;for(var b in a){a=!1;break a}a=!0}return a};function Dj(){this.ed=new zj}f=Dj.prototype;f.ya="";f.Jh=null;f.$f=null;f.Ne=0;f.Rd=0;function Ej(a,b){var c=!1,d=a.ed.th(b);d&&d.length&&(a.Rd=0,a.Ne=0,c=a.ed.get(d[0]),c=Fj(a,c))&&(a.Jh=d);return c}function Fj(a,b){var c;b&&(a.Rd<b.length&&(c=b[a.Rd],a.$f=b),c&&(c.$h(),c.select()));return!!c}f.clear=function(){this.ya=""};var Gj="StopIteration"in g?g.StopIteration:Error("StopIteration");function Hj(){}Hj.prototype.next=function(){throw Gj;};Hj.prototype.aj=function(){return this};function Jj(a){if(a instanceof Hj)return a;if("function"==typeof a.aj)return a.aj();if(fa(a)){var b=0,c=new Hj;c.next=function(){for(;;){if(b>=a.length)throw Gj;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function Kj(a){try{return Jj(a).next()}catch(b){if(b!=Gj)throw b;return null}};function Lj(a,b,c,d,e){this.reset(a,b,c,d,e)}Lj.prototype.Uj=null;var Mj=0;Lj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Mj++;d||qa();this.Me=a;this.ps=b;delete this.Uj};Lj.prototype.Lk=function(a){this.Me=a};function Nj(a){this.bg=a;this.ck=this.ra=this.Me=this.Za=null}function Oj(a,b){this.name=a;this.value=b}Oj.prototype.toString=function(){return this.name};var Pj=new Oj("WARNING",900),Qj=new Oj("INFO",800),Rj=new Oj("CONFIG",700),Sj=new Oj("FINE",500);f=Nj.prototype;f.getName=function(){return this.bg};f.getParent=function(){return this.Za};f.Yc=function(){this.ra||(this.ra={});return this.ra};f.Lk=function(a){this.Me=a};
function Tj(a){if(a.Me)return a.Me;if(a.Za)return Tj(a.Za);Ma("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Tj(this).value)for(ha(b)&&(b=b()),a=new Lj(a,String(b),this.bg),c&&(a.Uj=c),c="log:"+a.ps,g.console&&(g.console.timeStamp?g.console.timeStamp(c):g.console.markTimeline&&g.console.markTimeline(c)),g.msWriteProfilerMark&&g.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.ck)for(var e=0,h=void 0;h=b.ck[e];e++)h(d);c=c.getParent()}};
f.gc=function(a,b){this.log(Pj,a,b)};f.info=function(a,b){this.log(Qj,a,b)};var Uj={},Vj=null;function Wj(a){Vj||(Vj=new Nj(""),Uj[""]=Vj,Vj.Lk(Rj));var b;if(!(b=Uj[a])){b=new Nj(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Wj(a.substr(0,c));c.Yc()[d]=b;b.Za=c;Uj[a]=b}return b};function Xj(a){dc.call(this);this.F=a;a=q?"focusout":"blur";this.hs=Sb(this.F,q?"focusin":"focus",this,!q);this.js=Sb(this.F,a,this,!q)}n(Xj,dc);Xj.prototype.handleEvent=function(a){var b=new Mb(a.bb);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Xj.prototype.Y=function(){Xj.j.Y.call(this);$b(this.hs);$b(this.js);delete this.F};function Yj(a,b,c){Ui.call(this,a,b,c);this.ue=!0;cj(this,!0);this.oa=this;this.$e=new Dj;if(q)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.pk)&&a.gc("Failed to enable background image cache",void 0)}}n(Yj,Ui);Yj.prototype.Ya=null;Yj.prototype.qh=null;var Zj=Yj.prototype,ak=Wj("goog.ui.tree.TreeControl");Zj.pk=ak;f=Yj.prototype;f.rh=!1;f.Ir=null;f.Xe=!0;f.ii=!0;f.rd=!0;f.ji=!0;f.gb=function(){return this};f.Id=function(){return 0};f.$h=function(){};
f.Rr=function(){this.rh=!0;jh(this.n(),"focused");this.oa&&this.oa.select()};f.Nr=function(){this.rh=!1;lh(this.n(),"focused")};f.hasFocus=function(){return this.rh};f.lb=function(){return!this.rd||Yj.j.lb.call(this)};f.qc=function(a){this.rd?Yj.j.qc.call(this,a):this.ue=a};f.sh=function(){return bg};f.Ff=function(){var a=aj(this);return a?a.firstChild:null};f.Ef=function(){return null};f.de=function(){};f.Be=function(){return Yj.j.Be.call(this)+(this.rd?"":" "+this.Na.Fj)};
f.Af=function(){var a=this.lb(),b=this.Hr;if(a&&b)return b;b=this.$r;if(!a&&b)return b;b=this.Na;return a&&b.Ej?b.Tc+" "+b.Ej:!a&&b.Aj?b.Tc+" "+b.Aj:""};f.Hb=function(a){if(this.oa!=a){var b=!1;this.oa&&(b=this.oa==this.Ir,cj(this.oa,!1));if(this.oa=a)cj(a,!0),b&&a.select();this.dispatchEvent("change")}};f.Zc=function(){return this.oa};function bk(a){0!=a.Xe&&(a.Xe=!1,a.R&&ck(a))}
function ck(a){function b(a){var k=Yi(a);if(k){var m=!d||c==a.getParent()&&!e?a.Na.yj:a.Na.xj;k.className=m;if(k=a.Ef())k.className=gj(a)}bh(a,b)}var c=a,d=c.Xe,e=c.ji;b(a)}function dk(a){0!=a.ii&&(a.ii=!1,a.R&&ck(a))}function ek(a){if(0!=a.rd){a.rd=!1;if(a.R){var b=aj(a);b&&(b.className=a.Be())}a.Zc()==a&&dh(a,0)&&a.Hb(dh(a,0))}}f.Sf=function(){Yj.j.Sf.call(this);var a=this.n();qh(a,"tree");rh(a,"labelledby",Xi(this).id)};
f.za=function(){Yj.j.za.call(this);var a=this.n();a.className=this.Na.Ij;a.setAttribute("hideFocus","true");a=this.n();a.tabIndex=0;var b=this.Ya=new Fh(a),c=this.qh=new Xj(a);$g(this).O(c,"focusout",this.Nr).O(c,"focusin",this.Rr).O(b,"key",this.Eb).O(a,"mousedown",this.xh).O(a,"click",this.xh).O(a,"dblclick",this.xh);this.Sf()};f.Cb=function(){Yj.j.Cb.call(this);this.Ya.m();this.Ya=null;this.qh.m();this.qh=null};
f.xh=function(a){var b=this.pk;b&&b.log(Sj,"Received event "+a.type,void 0);if(b=fk(this,a))switch(a.type){case "mousedown":b.Nh(a);break;case "click":a.preventDefault();break;case "dblclick":b.sk(a)}};
f.Eb=function(a){var b=!1,b=this.$e,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Jh;if(d){var e=null,h=!1;if(b.$f){var k=b.Rd+c;0<=k&&k<b.$f.length?(b.Rd=k,e=b.$f):h=!0}e||(k=b.Ne+c,0<=k&&k<d.length&&(b.Ne=k),d.length>b.Ne&&(e=b.ed.get(d[b.Ne])),e&&e.length&&h&&(b.Rd=-1==c?e.length-1:0));Fj(b,e)&&(b.Jh=d)}c=!0}break;case 8:d=b.ya.length-1;c=!0;0<d?(b.ya=b.ya.substring(0,d),Ej(b,b.ya)):0==d?b.ya="":c=!1;break;case 27:b.ya="",c=!0}if(!(b=c)&&(b=this.oa)){b=this.oa;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;fh(b)&&(b.lb()?dh(b,0).select():b.qc(!0));break;case 37:if(a.altKey)break;fh(b)&&b.lb()&&b.Le?b.qc(!1):(d=b.getParent(),e=b.gb(),d&&(e.rd||d!=e)&&d.select());break;case 40:a:if(fh(b)&&b.lb())d=dh(b,0);else{for(d=b;d!=b.gb();){e=d.Qb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.gd;null!=d?d=jj(d):(d=b.getParent(),e=b.gb(),d=!e.rd&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.gb())&&
e.$e.clear());b=c}b||(b=this.$e,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.ya)&&(b.ya+=d,c=Ej(b,b.ya))),b=c);b&&a.preventDefault();return b};function fk(a,b){for(var c=null,d=b.target;null!=d;){if(c=Wi[d.id])return c;if(d==a.n())break;d=d.parentNode}return null}f.createNode=function(a){return new kj(a||bg,this.Na,this.eb())};
function ij(a,b){var c=a.$e,d=b.fb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.ed.get(d);e?e.push(b):c.ed.set(d,[b])}}f.removeNode=function(a){var b=this.$e,c=a.fb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.ed.get(c);d&&(bb(d,a),d.length&&b.ed.remove(c))}};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function gk(a,b){this.Oc=u("div","blocklyToolboxDiv");this.Oc.setAttribute("dir",t?"RTL":"LTR");b.appendChild(this.Oc);this.Z=new Td;a.appendChild(this.Z.I());C(this.Oc,"mousedown",this,function(a){Yc(a)||a.target==this.Oc?bd(!1):bd(!0)})}f=gk.prototype;f.width=0;f.Fg={Dh:19,Ij:"blocklyTreeRoot",Fj:"blocklyHidden",Gj:"",hh:"blocklyTreeRow",Hj:"blocklyTreeLabel",Tc:"blocklyTreeIcon",fh:"blocklyTreeIconOpen",gh:"blocklyTreeIconNone",Jj:"blocklyTreeSelected"};
f.g=function(){this.Fg.cleardotPath=ld+"1x1.gif";this.Fg.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(t?"Rtl":"Ltr");var a=new hk(this,this.Fg);this.Ze=a;ek(a);bk(a);dk(a);a.Hb(null);this.Oc.style.display="block";this.Z.g(G);ik(this);a.G(this.Oc);var b=this;Sb(window,"resize",function(){b.Fc()});this.Fc()};
f.Fc=function(){var a=this.Oc,b=Sg(jc),c=Oe();t?(b=jk(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;t||--this.width};
function ik(a){function b(a,e){for(var h=0,k;k=a.childNodes[h];h++)if(k.tagName){var m=k.tagName.toUpperCase();if("CATEGORY"==m){m=c.createNode(k.getAttribute("name"));m.Qc=[];e.add(m);var p=k.getAttribute("custom");p?m.Qc=p:b(k,m)}else"HR"==m?e.add(new kk):"BLOCK"==m&&e.Qc.push(k)}}var c=a.Ze;c.Gk();c.Qc=[];b(kc,a.Ze);if(c.Qc.length)throw"Toolbox cannot have both blocks and categories in the root level.";dd(window,"resize")}
f.Ae=function(){return new hd(t?Oe().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function hk(a,b){this.ab=a;Yj.call(this,bg,b)}n(hk,Yj);hk.prototype.za=function(){hk.j.za.call(this);if(Kb){var a=this.n();C(a,"touchstart",this,this.Xr)}};hk.prototype.Xr=function(a){a.preventDefault();var b=fk(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Nh(a)},1)};hk.prototype.createNode=function(a){return new lk(this.ab,a?Vf(a):bg,this.Na,this.eb())};
hk.prototype.Hb=function(a){this.oa!=a&&(Yj.prototype.Hb.call(this,a),a&&a.Qc&&a.Qc.length?this.ab.Z.show(a.Qc):this.ab.Z.kc())};function lk(a,b,c,d){Ui.call(this,b,c,d);a&&(b=function(){dd(window,"resize")},Sb(a.Ze,"expand",b),Sb(a.Ze,"collapse",b))}n(lk,kj);Ui.prototype.sh=function(){return $f("span")};lk.prototype.Nh=function(){fh(this)&&this.Le?(this.toggle(),this.select()):this.Uf()?this.gb().Hb(null):this.select();dj(this)};lk.prototype.sk=function(){};
function kk(){lk.call(this,null,"",mk)}n(kk,lk);var mk={hh:"blocklyTreeSeparator"};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var nk={uf:null,show:function(a,b){wi(nk,null);if(b.length){for(var c=new ri,d=0,e;e=b[d];d++){var h=new Zh(e.text);c.ne(h,!0);h.Ue(e.enabled);e.enabled&&Sb(h,"action",function(a){return function(){a()}}(e.Ua))}Sb(c,"action",nk.kc);e=mg();h=Dg();c.G(zi);var k=c.n();Md(k,"blocklyContextMenu");var m=Jg(k),d=a.clientX+h.x,p=a.clientY+h.y;a.clientY+m.height>=e.height&&(p-=m.height);t?m.width>=a.clientX&&(d+=m.width):a.clientX+m.width>=e.width&&(d-=m.width);Ai(d,p,e,h);si(c);setTimeout(function(){k.focus()},
1);nk.uf=null}else nk.kc()},kc:function(){xi(nk);nk.uf=null},rf:function(a,b){return function(){var c=Gc(a.u,b),d=a.ia();d.x=t?d.x-he:d.x+he;d.y+=2*he;c.moveBy(d.x,d.y);c.select()}}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function We(){this.o=F("g",{},null);this.Vk=F("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.o);this.ec=F("path",{"class":"blocklyPath"},this.o);this.ri=F("path",{"class":"blocklyPathLight"},this.o);this.ec.kb=this;Ee(this.ec);af(this)}n(We,qe);f=We.prototype;f.height=0;f.width=0;
f.sa=function(){for(var a=0,b;b=this.T[a];a++)b.g();this.Fb&&Sd(this.Fb);this.Lc();y||C(this.V(),"mousedown",this,this.eg);this.u.ba.appendChild(this.V());ha(this.onchange)&&C(this.u.ba,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){Gd&&Hd();Gd=this;this.Qg();dd(this.u.ba,"blocklySelectChange")};function Hd(){var a=Gd;Gd=null;a.pg();dd(a.u.ba,"blocklySelectChange")}f.Fb=null;f.ca=null;f.gc=null;
function Te(a){var b=[];a.Fb&&b.push(a.Fb);a.ca&&b.push(a.ca);a.gc&&b.push(a.gc);return b}var ok=null,pk=null;f=We.prototype;f.$a=function(a){var b=this.V();if(this.fd&&b){var c=this.ia();this.u.ba.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}We.j.$a.call(this,a);a&&(c=this.ia(),a.V().appendChild(b),a=this.ia(),ke(this,a.x-c.x,a.y-c.y))};f.ia=function(){var a=0,b=0,c=this.V();if(c){do var d=Qd(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.u.ba)}return new gc(a,b)};
f.moveBy=function(a,b){var c=this.ia();this.V().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");ke(this,a,b);qk(this)};function Vd(a){var b=a.height,c=a.width;if(a=Cc(a))a=Vd(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.nd=function(a){if(this.Rc!=a){We.j.nd.call(this,a);for(var b=[],c=0,d;d=this.T[c];c++)b.push.apply(b,d.P(!a));if(a){a=Te(this);for(c=0;c<a.length;c++)a[c].P(!1);c=this.toString(rk);M(P(this,"_TEMP_COLLAPSED_INPUT"),c).g()}else Q(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.B){for(c=0;a=b[c];c++)a.G();this.Ma()}}};
f.eg=function(a){if(!this.ac){sk();uj();this.select();bd();if(Yc(a))vj(this,a);else if(this.cc&&!y){xd();$c(ad);var b=this.ia();this.Rk=b.x;this.Sk=b.y;this.ni=a.clientX;this.oi=a.clientY;Fd=1;ok=C(document,"mouseup",this,this.Ph);pk=C(document,"mousemove",this,this.Oh);this.yf=[];for(var b=this.Db(),c=0,d;d=b[c];c++){d=Te(d);for(var e=0;e<d.length;e++){var h;h=d[e];h={x:h.ad,y:h.bd};h.mr=d[e];this.yf.push(h)}}}else return;a.stopPropagation()}};
f.Ph=function(a){var b=this;tk(function(){uj();if(Gd&&Yd){Mc(Zd,Yd);if(b.B){var c=($d(Zd)?Yd:Zd).h;uk("click");var d=od(c.o);c.H?(d.x+=t?3:-3,d.y+=13):c.L&&(d.x+=t?-23:23,d.y+=3);c=F("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},jc);c.mi=new Date;vk(c)}b.u.zb&&b.u.zb.close()}else Id(b.u,a)&&((c=b.u.zb)&&fc(c.close,100,c),Gd.m(!1,!0),dd(window,"resize"));Yd&&(ed(Wd.Of),delete Wd.Of,Yd=null);$c(wk.OPEN)})};
function vj(a,b){if(!y&&a.contextMenu){var c=[];if(a.Gd&&!y&&a.cc&&!y&&!a.ac){var d={text:U.nm,enabled:!0,Ua:function(){var b=Bc(a);Nc(b);var b=Gc(a.u,b),c=a.ia();c.x=t?c.x-he:c.x+he;c.y+=2*he;b.moveBy(c.x,c.y);b.select()}};a.Db().length>zc(a.u)&&(d.enabled=!1);c.push(d);a.wc&&!y&&!a.Rc&&lc&&(d={enabled:!0},a.ca?(d.text=U.Qp,d.Ua=function(){a.Se(null)}):(d.text=U.el,d.Ua=function(){a.Se("")}),c.push(d));if(!a.Rc)for(d=0;d<a.T.length;d++)if(1==a.T[d].type){d={enabled:!0};d.text=a.Ke?U.rm:U.vm;d.Ua=
function(){A(a,!a.Ke)};c.push(d);break}mc&&(a.Rc?(d={enabled:!0},d.text=U.qm,d.Ua=function(){a.nd(!1)}):(d={enabled:!0},d.text=U.jl,d.Ua=function(){a.nd(!0)}),c.push(d));nc&&(d={text:a.disabled?U.om:U.mm,enabled:!cf(a),Ua:function(){a.Te(!a.disabled)}},c.push(d));var d=a.Db().length,e=Cc(a);e&&(d-=e.Db().length);d={text:1==d?U.km:U.lm.replace("%1",String(d)),enabled:!0,Ua:function(){a.m(!0,!0)}};c.push(d)}d={enabled:!(ha(a.p)?!a.p():!a.p)};d.text=U.um;d.Ua=function(){var b=ha(a.p)?a.p():a.p;b&&window.open(b)};
c.push(d);a.tb&&!a.ac&&a.tb(c);nk.show(b,c);nk.uf=a}}function ke(a,b,c){if(a.B){for(var d=oe(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Te(a);for(e=0;e<d.length;e++)Pd(d[e]);for(e=0;e<a.Vb.length;e++)ke(a.Vb[e],b,c)}}function xk(a,b){b?Md(a.o,"blocklyDragging"):Ld(a.o,"blocklyDragging");for(var c=0;c<a.Vb.length;c++)xk(a.Vb[c],b)}
f.Oh=function(a){var b=this;tk(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){xd();var c=a.clientX-b.ni,d=a.clientY-b.oi;if(1==Fd&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>xj){Fd=2;b.$a(null);xk(b,!0);var e=b.u;e.Mj=e.zb?e.zb.Ae():null;e.Lj=e.Z?e.Z.Ae():e.ab?e.ab.Ae():null}if(2==Fd){b.V().setAttribute("transform","translate("+(b.Rk+c)+", "+(b.Sk+d)+")");for(e=0;e<b.yf.length;e++){var h=b.yf[e],k=h.mr,m=h.x+c,h=h.y+d;k.ad=m;k.bd=h;k.K()&&Qc(k.la,m,h)}for(var k=oe(b,!1),
h=m=null,p=he,e=0;e<k.length;e++){var x=k[e],w=le(x,p,c,d);w.t&&(m=w.t,h=x,p=w.Dk)}Yd&&Yd!=m&&(ed(Wd.Of),delete Wd.Of,Zd=Yd=null);m&&m!=Yd&&(m.dk(),Yd=m,Zd=h);b.Gd&&!y&&Id(b.u,a)}}a.stopPropagation()})};function af(a){a.cc&&!y?Md(a.o,"blocklyDraggable"):Ld(a.o,"blocklyDraggable")}f.V=function(){return this.o};var yk=1*(1-Math.SQRT1_2)+1,zk=3*(1-Math.SQRT1_2)-1,Ak="m "+yk+","+yk,Bk="a 3,3 0 0,0 "+(-zk-1)+","+(2-zk),Ck="a 3,3 0 0,0 "+(2-zk)+","+(zk+1);f=We.prototype;
f.m=function(a,b){uj();nk.uf==this&&nk.kc();Ye(this,a,!1);if(b&&this.B){uk("delete");var c=od(this.o),d=this.o.cloneNode(!0);d.Zk=c.x;d.$k=c.y;d.setAttribute("transform","translate("+d.Zk+","+d.$k+")");jc.appendChild(d);d.gj=d.getBBox();d.mi=new Date;Dk(d)}this.B=!1;c=Te(this);for(d=0;d<c.length;d++)c[d].m();We.j.m.call(this,a);ed(this.o);this.Vk=this.ri=this.ec=this.o=null};
function Dk(a){var b=(new Date-a.mi)/150;1<b?ed(a):(a.setAttribute("transform","translate("+(a.Zk+(t?-1:1)*a.gj.width/2*b+", "+(a.$k+a.gj.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Dk(a)},10))}function vk(a){var b=(new Date-a.mi)/150;1<b?ed(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){vk(a)},10))}
f.Lc=function(){if(!this.disabled){var a=Nd(Od(this.bh)),b=Qi(a);Si([255,255,255],b,.3);Si([0,0,0],b,.4);this.ec.setAttribute("fill",a);b=Te(this);for(a=0;a<b.length;a++)b[a].Lc();for(a=0;b=this.T[a];a++)for(var c=0,d;d=b.Pa[c];c++)d.ka(null);this.B&&this.G()}};function fe(a){a.disabled||cf(a)?(Md(a.o,"blocklyDisabled"),a.ec.setAttribute("fill","url(#blocklyDisabledPattern)")):(Ld(a.o,"blocklyDisabled"),a.Lc());a=a.Yc();for(var b=0,c;c=a[b];b++)fe(c)}
f.Df=function(){return this.ca?this.ca.fb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Se=function(a){var b=!1;l(a)?(this.ca||(this.ca=new re(this),b=!0),this.ca.ka(a)):this.ca&&(this.ca.m(),b=!0);b&&this.B&&(this.G(),this.Ma())};f.qd=function(a){this.ac&&(a=null);var b=!1;l(a)?(this.gc||(this.gc=new se(this),b=!0),this.gc.ka(a)):this.gc&&(this.gc.m(),b=!0);b&&this.B&&(this.G(),this.Ma())};f.Zd=function(a){this.Fb&&this.Fb!==a&&this.Fb.m();a&&(a.J=this,this.Fb=a,this.B&&Sd(a))};
f.Te=function(a){this.disabled!=a&&(We.j.Te.call(this,a),fe(this),this.u.vb())};f.Qg=function(){Md(this.o,"blocklySelected");this.o.parentNode.appendChild(this.o)};f.pg=function(){Ld(this.o,"blocklySelected")};
f.G=function(){this.B=!0;var a=10;t&&(a=-a);for(var b=Te(this),c=0;c<b.length;c++){var d=b[c];d.J.isCollapsed()?d.Ia.setAttribute("display","none"):(d.Ia.setAttribute("display","block"),t&&(a-=16),d.Ia.setAttribute("transform","translate("+a+", 5)"),Pd(d),a=t?a-10:a+26)}var e=a+=t?10:-10,h=this.T,b=[];b.ua=e+20;if(this.L||this.C)b.ua=Math.max(b.ua,40);for(var d=c=0,k=!1,m=!1,p=!1,x=void 0,w=this.Ke&&!this.isCollapsed(),E=0,z;z=h[E];E++)if(z.K()){var K;w&&x&&3!=x&&3!=z.type?K=b[b.length-1]:(x=z.type,
K=[],K.type=w&&3!=z.type?-1:z.type,K.height=0,b.push(K));K.push(z);z.ld=25;z.Qa=w&&1==z.type?20.5:0;if(z.t&&z.t.w){var cb=Vd(v(z.t));z.ld=Math.max(z.ld,cb.height);z.Qa=Math.max(z.Qa,cb.width)}E==h.length-1&&z.ld--;K.height=Math.max(K.height,z.ld);z.Pb=0;1==b.length&&(z.Pb+=t?-e:e);for(var cb=!1,Ng=0,Wb;Wb=z.Pa[Ng];Ng++){0!=Ng&&(z.Pb+=10);var Ij=Wb.Ld();Wb.Qa=Ij.width;Wb.rg=cb&&Wb.wd?10:0;z.Pb+=Wb.Qa+Wb.rg;K.height=Math.max(K.height,Ij.height);cb=Wb.wd}-1!=K.type&&(3==K.type?(m=!0,d=Math.max(d,z.Pb)):
(1==K.type?k=!0:5==K.type&&(p=!0),c=Math.max(c,z.Pb)))}for(e=0;K=b[e];e++)if(K.Xk=!1,-1==K.type)for(h=0;z=K[h];h++)if(1==z.type){K.height+=20;K.Xk=!0;break}b.Bg=20+d;m&&(b.ua=Math.max(b.ua,b.Bg+30));k?b.ua=Math.max(b.ua,c+20+8):p&&(b.ua=Math.max(b.ua,c+20));b.Zr=k;b.zu=m;b.yu=p;d=a;this.H?this.li=this.Ag=!0:(this.li=this.Ag=!1,this.L&&(a=v(this.L))&&Cc(a)==this&&(this.Ag=!0),Cc(this)&&(this.li=!0));k=this.ia();m=[];p=[];a=[];c=[];z=b.ua;this.Ag?(m.push("m 0,0"),a.push("m 1,1")):(m.push("m 0,2"),a.push(t?
Ak:"m 1,1"),m.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.L&&(m.push("H",15),a.push("H",15),m.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.L.moveTo(k.x+(t?-30:30),k.y));m.push("H",z);a.push("H",z+(t?-1:0));this.width=z;for(K=z=0;e=b[K];K++){w=10;0==K&&(w+=t?-d:d);a.push("M",b.ua-1+","+(z+1));if(this.isCollapsed())h=e[0],E=z+18,Ek(h.Pa,w,E),m.push("l 8,0 0,4 8,4 -16,8 8,4"),t?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),h=e.height-20,m.push("v",h),t&&a.push("v",
h-2),this.width+=15;else if(-1==e.type){for(x=0;h=e[x];x++)E=z+18,e.Xk&&(E+=10),w=Ek(h.Pa,w,E),5!=h.type&&(w+=h.Qa+10),1==h.type&&(p.push("M",w-10+","+(z+10)),p.push("h",6-h.Qa),p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),p.push("v",h.ld+1-20),p.push("h",h.Qa+2-8),p.push("z"),t?(c.push("M",w-10-3+8-h.Qa+","+(z+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",h.ld-20+3),c.push("h",h.Qa-8+1)):(c.push("M",w-10+1+","+(z+10+1)),c.push("v",h.ld+1),c.push("h",6-h.Qa),
c.push("M",w-h.Qa-10+1.8+","+(z+10+20-.4)),c.push("l","3.04,-1.8")),E=t?k.x-w-8+10+h.Qa+1:k.x+w+8-10-h.Qa-1,cb=k.y+z+10+1,h.t.moveTo(E,cb),h.t.w&&je(h.t));w=Math.max(w,b.ua);this.width=Math.max(this.width,w);m.push("H",w);a.push("H",w+(t?-1:0));m.push("v",e.height);t&&a.push("v",e.height-2)}else 1==e.type?(h=e[0],E=z+18,-1!=h.align&&(x=b.ua-h.Pb-8-20,1==h.align?w+=x:0==h.align&&(w+=(x+w)/2)),Ek(h.Pa,w,E),m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),x=e.height-20,m.push("v",x),t?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",x)):(a.push("M",b.ua-4.2+","+(z+20-.4)),a.push("l","3.04,-1.8")),E=k.x+(t?-b.ua-1:b.ua+1),cb=k.y+z,h.t.moveTo(E,cb),h.t.w&&(je(h.t),this.width=Math.max(this.width,b.ua+Vd(v(h.t)).width-8+1))):5==e.type?(h=e[0],E=z+18,-1!=h.align&&(x=b.ua-h.Pb-20,b.Zr&&(x-=8),1==h.align?w+=x:0==h.align&&(w+=(x+w)/2)),Ek(h.Pa,w,E),m.push("v",e.height),t&&a.push("v",e.height-2)):3==e.type&&(h=e[0],0==K&&(m.push("v",10),t&&a.push("v",9),z+=10),E=z+18,-1!=h.align&&(x=b.Bg-h.Pb-20,1==h.align?w+=x:0==h.align&&
(w+=(x+w)/2)),Ek(h.Pa,w,E),w=b.Bg+30,m.push("H",w),m.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),m.push("v",e.height-4),m.push("a 2,2 0 0,0 2,2"),m.push("H",b.ua),t?(a.push("M",w-30+zk+","+(z+zk)),a.push(Bk),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.ua-1)):(a.push("M",w-30+zk+","+(z+e.height-zk)),a.push(Ck),a.push("H",b.ua)),E=k.x+(t?-w:w),cb=k.y+z+1,h.t.moveTo(E,cb),h.t.w&&(je(h.t),this.width=Math.max(this.width,b.Bg+Vd(v(h.t)).width)),K==b.length-1||3==b[K+1].type)&&(m.push("v",
10),t&&a.push("v",9),z+=10);z+=e.height}b.length||(z=25,m.push("V",z),t&&a.push("V",z-1));b=z;this.height=b+1;this.C&&(m.push("H","30 l -6,4 -3,0 -6,-4"),this.C.moveTo(t?k.x-30:k.x+30,k.y+b+1),this.C.w&&je(this.C),this.height+=4);this.li?(m.push("H 0"),t||a.push("M","1,"+b)):(m.push("H",2),m.push("a","2,2 0 0,1 -2,-2"),t||(a.push("M",yk+","+(b-yk)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.H?(this.H.moveTo(k.x,k.y),m.push("V",20),m.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),t?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):t||(this.Ag?a.push("V",1):a.push("V",2));m.push("z");b=m.join(" ")+"\n"+p.join(" ");this.ec.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.ri.setAttribute("d",b);t&&(this.ec.setAttribute("transform","scale(-1 1)"),this.ri.setAttribute("transform","scale(-1 1)"),this.Vk.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.G():dd(window,"resize");
qk(this)};function Ek(a,b,c){t&&(b=-b);for(var d=0,e;e=a[d];d++)t?(b-=e.rg+e.Qa,e.V().setAttribute("transform","translate("+b+", "+c+")"),e.Qa&&(b-=10)):(e.V().setAttribute("transform","translate("+(b+e.rg)+", "+c+")"),e.Qa&&(b+=e.rg+e.Qa+10));return t?-b:b};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Md(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Ld(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function C(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var h=[[a,b,e]];if(b in Fk)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},k=0,m;m=Fk[b][k];k++)a.addEventListener(m,e,!1),h.push([a,m,e]);return h}var Fk={};aa("document.documentElement.ontouchstart")&&(Fk={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function D(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function tj(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function dd(a,b){setTimeout(function(){tj(a,b)},0)}
function Qd(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function od(a){var b=0,c=0;do{var d=Qd(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=jc);return{x:b,y:c}}function yi(a){a=od(a);return jk(a.x,a.y,!1)}
function F(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Yc(a){return 2==a.button||a.ctrlKey}
function jk(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=jc.createSVGPoint();d.x=a;d.y=b;a=jc.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function wd(a){return jk(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Bi(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Ci(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Bi(a),e=0;e<d;e++){for(var h=a[0][e],k=1;k<a.length;k++)if(h!=a[k][e])return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k][e])&&" "!=h)return c;return d}
function Di(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Bi(a),e=0;e<d;e++){for(var h=a[0].substr(-e-1,1),k=1;k<a.length;k++)if(h!=a[k].substr(-e-1,1))return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k].charAt(a[k].length-e-1))&&" "!=h)return c;return d}function tf(a){return!!a.match(/^\s*-?\d+(\.\d+)?\s*$/)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Gk(a,b){Gk.j.constructor.call(this,"");this.ha=b;this.nj=F("text",{"class":"blocklyText",x:-3},this.ma);this.nj.appendChild(document.createTextNode("\u2713"));this.aa(a)}n(Gk,Pe);f=Gk.prototype;f.clone=function(){return new Gk(this.Aa(),this.ha)};f.ef="default";f.Aa=function(){return String(this.$).toUpperCase()};f.aa=function(a){a="TRUE"==a;this.$!==a&&(this.$=a,this.nj.style.display=a?"block":"none",this.h&&this.h.B&&this.h.u.vb())};
f.zg=function(){var a=!this.$;if(this.h&&this.ha){var b=this.ha(a);void 0!==b&&(a=b)}null!==a&&this.aa(String(a).toUpperCase())};function Hk(a){dc.call(this);this.Qd=[];Ik(this,a)}n(Hk,dc);f=Hk.prototype;f.oa=null;f.ci=null;f.Xj=function(a){return this.Qd[a]||null};function Ik(a,b){b&&(Xa(b,function(a){this.Re(a,!1)},a),eb(a.Qd,b))}f.removeItem=function(a){a&&bb(this.Qd,a)&&a==this.oa&&(this.oa=null,this.dispatchEvent("select"))};f.Zc=function(){return this.oa};f.Hb=function(a){a!=this.oa&&(this.Re(this.oa,!1),this.oa=a,this.Re(a,!0));this.dispatchEvent("select")};f.Ce=function(){var a=this.oa;return a?Wa(this.Qd,a):-1};
f.We=function(a){this.Hb(this.Xj(a))};f.clear=function(){var a=this.Qd;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0;this.oa=null};f.Y=function(){Hk.j.Y.call(this);delete this.Qd;this.oa=null};f.Re=function(a,b){a&&("function"==typeof this.ci?this.ci(a,b):"function"==typeof a.gi&&a.gi(b))};function Jk(a,b,c,d,e){this.yb=!!b;a&&this.$d(a,d);this.depth=void 0!=e?e:this.rc||0;this.yb&&(this.depth*=-1);this.tj=!c}n(Jk,Hj);f=Jk.prototype;f.nc=null;f.rc=0;f.Tk=!1;f.$d=function(a,b,c){if(this.nc=a)this.rc=ga(b)?b:1!=this.nc.nodeType?0:this.yb?-1:1;ga(c)&&(this.depth=c)};f.clone=function(){return new Jk(this.nc,this.yb,!this.tj,this.rc,this.depth)};
f.next=function(){var a;if(this.Tk){if(!this.nc||this.tj&&0==this.depth)throw Gj;a=this.nc;var b=this.yb?-1:1;if(this.rc==b){var c=this.yb?a.lastChild:a.firstChild;c?this.$d(c):this.$d(a,-1*b)}else(c=this.yb?a.previousSibling:a.nextSibling)?this.$d(c):this.$d(a.parentNode,-1*b);this.depth+=this.rc*(this.yb?-1:1)}else this.Tk=!0;a=this.nc;if(!this.nc)throw Gj;return a};
f.splice=function(a){var b=this.nc,c=this.yb?1:-1;this.rc==c&&(this.rc=-1*c,this.depth+=this.rc*(this.yb?-1:1));this.yb=!this.yb;Jk.prototype.next.call(this);this.yb=!this.yb;for(var c=fa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)b.parentNode&&b.parentNode.insertBefore(c[d],b.nextSibling);ed(b)};function Kk(a,b,c,d){Jk.call(this,a,b,c,null,d)}n(Kk,Jk);Kk.prototype.next=function(){do Kk.j.next.call(this);while(-1==this.rc);return this.nc};function Lk(){}n(Lk,uh);ca(Lk);var Mk=0;Lk.prototype.I=function(a){var b=this.xe(a);a=a.eb().I("DIV",b?b.join(" "):null,Nk(this,a.Wa,a.Ld(),a.eb()));qh(a,"grid");return a};function Nk(a,b,c,d){for(var e=[],h=0,k=0;h<c.height;h++){for(var m=[],p=0;p<c.width;p++){var x=b&&b[k++];m.push(Ok(a,x,d))}e.push(Pk(a,m,d))}return a.wj(e,d)}Lk.prototype.wj=function(a,b){var c=b.I("TABLE",this.U()+"-table",b.I("TBODY",this.U()+"-body",a));c.cellSpacing=0;c.cellPadding=0;return c};
function Pk(a,b,c){a=c.I("TR",a.U()+"-row",b);qh(a,"row");return a}function Ok(a,b,c){a=c.I("TD",{"class":a.U()+"-cell",id:a.U()+"-cell-"+Mk++},b);qh(a,"gridcell");rh(a,"selected",!1);if(!xg(a)&&!th(a,"label")){var d;b=new Kk(a);for(c="";!c&&(d=Kj(b));)1==d.nodeType&&(c=th(d,"label")||d.title);(d=c)&&rh(a,"label",d)}return a}
Lk.prototype.od=function(a,b){if(a){var c=jg(this.U()+"-body",a)[0];if(c){var d=0;Xa(c.rows,function(a){Xa(a.cells,function(a){Le(a);if(b){var c=b[d++];c&&a.appendChild(c)}})});if(d<b.length){for(var e=[],h=gg(a),k=c.rows[0].cells.length;d<b.length;){var m=b[d++];e.push(Ok(this,m,h));e.length==k&&(m=Pk(this,e,h),c.appendChild(m),e.length=0)}if(0<e.length){for(;e.length<k;)e.push(Ok(this,"",h));m=Pk(this,e,h);c.appendChild(m)}}}Pg(a,!0,tb)}};
function Qk(a,b,c){for(b=b.n();c&&1==c.nodeType&&c!=b;){if("TD"==c.tagName&&ih(c,a.U()+"-cell"))return c.firstChild;c=c.parentNode}return null}Lk.prototype.U=function(){return"goog-palette"};function Rk(a,b,c){Mh.call(this,a,b||Lk.Yb(),c);this.Zg&=-89;this.re=new Sk;this.re.wg(this);this.Hh=-1}n(Rk,Mh);f=Rk.prototype;f.Ca=null;f.N=-1;f.Ra=null;f.Y=function(){Rk.j.Y.call(this);this.Ra&&(this.Ra.m(),this.Ra=null);this.Ca=null;this.re.m()};f.vg=function(a){Rk.j.vg.call(this,a);Tk(this);this.Ra?(this.Ra.clear(),Ik(this.Ra,a)):(this.Ra=new Hk(a),a=oa(this.Re,this),this.Ra.ci=a,$g(this).O(this.Ra,"select",this.Wr));this.N=-1};f.Bf=function(){return""};
f.He=function(a){Rk.j.He.call(this,a);var b=Qk(this.M,this,a.target);b&&a.relatedTarget&&rg(b,a.relatedTarget)||b==Uk(this)||(a=this.Wa,this.Sa(a?Wa(a,b):-1))};f.Ac=function(a){Rk.j.Ac.call(this,a);if(this.$&4&&(a=Qk(this.M,this,a.target),a!=Uk(this))){var b=this.Wa;this.Sa(b?Wa(b,a):-1)}};f.Ec=function(a){var b=Uk(this);return b?(this.Hb(b),Rk.j.Ec.call(this,a)):!1};
f.Eb=function(a){var b=this.Wa,b=b?b.length:0,c=this.Ca.width;if(0==b||!this.isEnabled())return!1;if(13==a.keyCode||32==a.keyCode)return this.Ec(a);if(36==a.keyCode)return this.Sa(0),!0;if(35==a.keyCode)return this.Sa(b-1),!0;var d=0>this.N?this.Ce():this.N;switch(a.keyCode){case 37:if(-1==d||0==d)d=b;this.Sa(d-1);a.preventDefault();return!0;case 39:return d==b-1&&(d=-1),this.Sa(d+1),a.preventDefault(),!0;case 38:-1==d&&(d=b+c-1);if(d>=c)return this.Sa(d-c),a.preventDefault(),!0;break;case 40:if(-1==
d&&(d=-c),d<b-c)return this.Sa(d+c),a.preventDefault(),!0}return!1};f.Wr=function(){};f.Ld=function(){return this.Ca};f.xg=function(a,b){if(this.n())throw Error("Component already rendered");this.Ca=ga(a)?new fd(a,b):a;Tk(this)};function Uk(a){var b=a.Wa;return b&&b[a.N]}f.Sa=function(a){a!=this.N&&(Vk(this,this.N,!1),this.Hh=this.N,this.N=a,Vk(this,a,!0),this.dispatchEvent("a"))};f.Ce=function(){return this.Ra?this.Ra.Ce():-1};f.Zc=function(){return this.Ra?this.Ra.Zc():null};
f.We=function(a){this.Ra&&this.Ra.We(a)};f.Hb=function(a){this.Ra&&this.Ra.Hb(a)};function Vk(a,b,c){if(a.n()){var d=a.Wa;if(d&&0<=b&&b<d.length){var e;e=(e=Uk(a))?e.parentNode:null;a.re.n()!=e&&(a.re.F=e);e=a.re;e.nb(c);!!(e.$&2)==c&&(b=d[b])&&(b=b?b.parentNode:null,d=a.M.U()+"-cell-hover",c?jh(b,d):lh(b,d),c?rh(a.F,"activedescendant",b.id):b.id==th(a.F,"activedescendant")&&sh(a.F))}}}f.nb=function(a){a&&-1==this.N?this.Sa(-1<this.Hh?this.Hh:0):a||this.Sa(-1);Rk.j.nb.call(this,a)};
f.Re=function(a,b){if(this.n()&&a){var c=a.parentNode,d=this.M.U()+"-cell-selected";b?jh(c,d):lh(c,d);rh(c,"selected",b)}};function Tk(a){var b=a.Wa;if(b)if(a.Ca&&a.Ca.width){if(b=Math.ceil(b.length/a.Ca.width),!ga(a.Ca.height)||a.Ca.height<b)a.Ca.height=b}else b=Math.ceil(Math.sqrt(b.length)),a.Ca=new fd(b,b);else a.Ca=new fd(0,0)}function Sk(){Mh.call(this,null);this.sd|=2}n(Sk,Mh);function Wk(a,b,c){this.tf=a||[];Rk.call(this,null,b||Lk.Yb(),c);this.ug(this.tf)}n(Wk,Rk);f=Wk.prototype;f.cg=null;f.Yf=null;f.ug=function(a,b){this.tf=a;this.Yf=b||null;this.cg=null;this.od(Xk(this))};f.uh=function(){var a=this.Zc();if(a){var b=a.style[Ja()];if("undefined"!==typeof b)a=b;else{var b=a.style,c=Ag["background-color"];if(!c){var d=Ja(),c=d;void 0===a.style[d]&&(d=(r?"Webkit":tb?"Moz":q?"ms":sb?"O":null)+Ka(d),void 0!==a.style[d]&&(c=d));Ag["background-color"]=c}a=b[c]||""}return Yk(a)}return null};
f.hi=function(a){a=Yk(a);this.cg||(this.cg=Za(this.tf,function(a){return Yk(a)}));this.We(a?Wa(this.cg,a):-1)};function Xk(a){return Za(a.tf,function(a,c){var d=this.eb().I("div",{"class":this.M.U()+"-colorswatch",style:"background-color:"+a});d.title=this.Yf&&this.Yf[c]?this.Yf[c]:"#"==a.charAt(0)?"RGB ("+Qi(a).join(", ")+")":a;return d},a)}function Yk(a){if(a)try{return Li(a).zh}catch(b){}return null};function Zk(a,b){Wg.call(this,a);this.X=b||null;$g(this).O(this,"action",this.us)}n(Zk,Wg);f=Zk.prototype;f.Wc=!0;f.ug=function(a){this.X?this.X.ug(a):$k(this,a)};f.xg=function(a){this.X||$k(this,[]);this.X.xg(a)};f.Ld=function(){return this.X?this.X.Ld():null};f.Ce=function(){return this.X?this.X.Ce():-1};f.We=function(a){this.X&&this.X.We(a)};f.uh=function(){return this.X?this.X.uh():null};f.hi=function(a){this.X&&this.X.hi(a)};f.mc=function(){return this.Wc};
f.Kc=function(a){this.Wc=a;this.X&&this.X.jb(32,a)};f.za=function(){Zk.j.za.call(this);this.X&&this.X.G(this.n());this.n().unselectable="on"};f.Y=function(){Zk.j.Y.call(this);this.X&&(this.X.m(),this.X=null)};f.focus=function(){this.X&&this.X.n().focus()};f.us=function(a){a.stopPropagation();this.dispatchEvent("change")};function $k(a,b){var c=new Wk(b,null,a.eb());c.xg(5);c.jb(32,a.Wc);a.ne(c);a.X=c;a.R&&a.X.G(a.n())};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function al(a,b){al.j.constructor.call(this,"\u00a0\u00a0\u00a0");this.ha=b;this.aa(a)}var bl;n(al,Pe);f=al.prototype;f.g=function(a){al.j.g.call(this,a);this.Bb.style.fillOpacity=1;this.aa(this.Aa())};f.clone=function(){return new al(this.Aa(),this.ha)};f.ef="default";f.m=function(){xi(this);al.j.m.call(this)};f.Aa=function(){return this.rj};f.aa=function(a){this.rj=a;this.Bb&&(this.Bb.style.fill=a);this.h&&this.h.B&&(qk(this.h),this.h.u.vb())};
f.fb=function(){var a=this.rj,b=a.match(/^#(.)\1(.)\2(.)\3$/);b&&(a="#"+b[1]+b[2]+b[3]);return a};
var cl="#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),dl=
7;al.prototype.zg=function(){wi(this,el);var a=new Zk;a.xg(dl);a.ug(cl);var b=mg(),c=Dg(),d=yi(this.Bb),e=this.Bb.getBBox();a.G(zi);a.hi(this.Aa());var h=Ig(a.n());d.y=d.y+h.height+e.height>=b.height+c.y?d.y-(h.height-1):d.y+(e.height-1);t?(d.x+=e.width,d.x-=h.width,d.x<c.x&&(d.x=c.x)):d.x>b.width+c.x-h.width&&(d.x=b.width+c.x-h.width);Ai(d.x,d.y,b,c);var k=this;bl=Sb(a,"change",function(a){a=a.target.uh()||"#000000";fl();if(k.h&&k.ha){var b=k.ha(a);void 0!==b&&(a=b)}null!==a&&k.aa(a)})};
function el(){bl&&$b(bl)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function gl(a,b){gl.j.constructor.call(this,a);this.ha=b}var hl;n(gl,Pe);f=gl.prototype;f.clone=function(){return new gl(this.fb(),this.ha)};f.ef="text";f.m=function(){xi(this);gl.j.m.call(this)};f.ka=function(a){if(null!==a){if(this.h&&this.ha){var b=this.ha(a);null!==b&&void 0!==b&&(a=b)}Pe.prototype.ka.call(this,a)}};
f.zg=function(a){a=a||!1;if(!a&&(ub||yb||Ab)){a=window.prompt(U.gl,this.da);if(this.h&&this.ha){var b=this.ha(a);void 0!==b&&(a=b)}null!==a&&this.ka(a)}else{wi(this,il(this));var b=zi,c=u("input","blocklyHtmlInput");hl=c;b.appendChild(c);c.value=c.defaultValue=this.da;c.rk=null;jl(this);this.Ik();a||(c.focus(),c.select());c.ws=C(c,"keyup",this,this.uk);c.vs=C(c,"keypress",this,this.uk);c.Cs=C(this.h.u.ba,"blocklyWorkspaceChange",this,this.Ik)}};
f.uk=function(a){var b=hl;13==a.keyCode?fl():27==a.keyCode?(this.ka(b.defaultValue),fl()):(a=b.value,a!==b.rk?(b.rk=a,this.ka(a),jl(this)):r&&this.h.G())};function jl(a){var b=!0,c=hl;a.h&&a.ha&&(b=a.ha(c.value));null===b?Md(c,"blocklyInvalidInput"):Ld(c,"blocklyInvalidInput")}f.Ik=function(){var a=zi,b=this.ma.getBBox();a.style.width=b.width+"px";b=yi(this.Bb);if(t){var c=this.Bb.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;r&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function il(a){return function(){var b=hl,c=b.value;a.h&&a.ha&&(c=a.ha(c),null===c&&(c=b.defaultValue));a.ka(c);a.h.B&&a.h.G();D(b.ws);D(b.vs);D(b.Cs);hl=null;zi.style.width="auto"}}function kl(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)}function ll(a){(a=kl(a))&&(a=String(Math.max(0,Math.floor(a))));return a};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ad="handclosed",Jd="handdelete",wk={},ml="",nl=null,ol="";function pl(){var a=ql.join("\n");ol=ld.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,ol),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));nl=c.sheet;$c("hando")}
function $c(a){if(!y&&ml!=a){ml=a;var b="url("+ol+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=nl||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(h){if(15==h.code)throw h.styleSheet=d,h;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;jc&&(jc.style.cursor="hando"==a?"":b)}}
var ql=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
"  fill:none;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklySelected>.blocklyPath {","  stroke-width: 3px;","  stroke: #fc3;","}",".blocklySelected>.blocklyPathLight {","  display: none;","}",".blocklyDragging>.blocklyPath,",".blocklyDragging>.blocklyPathLight {","  fill-opacity: .8;","  stroke-opacity: .8;","}",".blocklyDragging>.blocklyPathDark {","  display: none;","}",".blocklyDisabled>.blocklyPath {","  fill-opacity: .5;","  stroke-opacity: .5;","}",".blocklyDisabled>.blocklyPathLight,",
".blocklyDisabled>.blocklyPathDark {","  display: none;","}",".blocklyText {","  cursor: default;",'  font-family: "Open Sans", sans-serif;',"  font-size: 12pt;","  fill: #fff;","}",".blocklyNonEditableText>text {","  pointer-events: none;","}",".blocklyNonEditableText>rect,",".blocklyEditableText>rect {","  fill: #fff;","  fill-opacity: .6;","}",".blocklyNonEditableText>text,",".blocklyEditableText>text {","  fill: #000;","}",".blocklyEditableText:hover>rect {","  stroke-width: 2;","  stroke: #fff;",
"}",".blocklyBubbleText {","  fill: #000;","}",".blocklySvg text {","  -moz-user-select: none;","  -webkit-user-select: none;","  user-select: none;","  cursor: inherit;","}",".blocklyHidden {","  display: none;","}",".blocklyFieldDropdown:not(.blocklyHidden) {","  display: block;","}",".blocklyTooltipBackground {","  fill: #ffffc7;","  stroke-width: 1px;","  stroke: #d8d8d8;","}",".blocklyTooltipShadow,",".blocklyDropdownMenuShadow {","  fill: #bbb;","  filter: url(#blocklyShadowFilter);","}",".blocklyTooltipText {",
"  font-family: sans-serif;","  font-size: 9pt;","  fill: #000;","}",".blocklyIconShield {","  cursor: default;","  fill: #00c;","  stroke-width: 1px;","  stroke: #ccc;","}",".blocklyIconGroup:hover>.blocklyIconShield {","  fill: #00f;","  stroke: #fff;","}",".blocklyIconGroup:hover>.blocklyIconMark {","  fill: #fff;","}",".blocklyIconMark {","  cursor: default !important;","  font-family: sans-serif;","  font-size: 9pt;","  font-weight: bold;","  fill: #ccc;","  text-anchor: middle;","}",".blocklyWarningBody {",
"}",".blocklyMinimalBody {","  margin: 0;","  padding: 0;","}",".blocklyCommentTextarea {","  margin: 0;","  padding: 2px;","  border: 0;","  resize: none;","  background-color: #ffc;","}",".blocklyHtmlInput {","  font-family: sans-serif;","  font-size: 11pt;","  border: none;","  outline: none;","  width: 100%","}",".blocklyMutatorBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #ddd;","}",".blocklyFlyoutBackground {","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyColourBackground {",
"  fill: #666;","}",".blocklyScrollbarBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #e4e4e4;","}",".blocklyScrollbarKnob {","  fill: #ccc;","}",".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,",".blocklyScrollbarKnob:hover {","  fill: #bbb;","}",".blocklyInvalidInput {","  background: #faa;","}",".blocklyAngleCircle {","  stroke: #444;","  stroke-width: 1;","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyAngleMarks {","  stroke: #444;","  stroke-width: 1;","}",".blocklyAngleGauge {",
"  fill: #f88;","  fill-opacity: .8;  ","}",".blocklyAngleLine {","  stroke: #f00;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklyContextMenu {","  border-radius: 4px;","}",".blocklyDropdownMenu {","  padding: 0 !important;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;","}",".blocklyToolboxDiv {","  background-color: #fae5e2;",
"  display: none;","  overflow-x: visible;","  overflow-y: auto;","  position: absolute;","}",".blocklyTreeRoot {","  padding: 4px 0;","}",".blocklyTreeRoot:focus {","  outline: none;","}",".blocklyTreeRow {","  line-height: 40px;","  background-color: #ec8fa1;","  outline: #ee9bab solid 2px;","  text-transform: uppercase;","  height: 40px;","  padding-right: 1em;","  white-space: nowrap;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',"  padding-right: 0;","  padding-left: 1em !important;",
"}",".blocklyTreeRow:hover {","  background-color: #f7d0d8;","}",".blocklyTreeSeparator {","  height: 0px;","  border-bottom: solid #e5e5e5 1px;","  margin: 5px 0;","}",".blocklyTreeIcon {","  height: 16px;","  width: 16px;","  vertical-align: middle;","  background-image: url(<<<PATH>>>/sprites.png);","}",".blocklyTreeIconClosedLtr {","  background-position: -32px -1px;","}",".blocklyTreeIconClosedRtl {","  background-position: 0px -1px;","}",".blocklyTreeIconO {","  background-position: -16px -1px;",
"}",".blocklyTreeSelected>.blocklyTreeIconClosedLtr {","  background-position: -32px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconClosedRtl {","  background-position: 0px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconO {","  background-position: -16px -17px;","}",".blocklyTreeIconNone,",".blocklyTreeSelected>.blocklyTreeIconNone {","  background-position: -48px -1px;","}",".blocklyTreeLabel {","  cursor: default;"," color: #fff;",'  font-family: "O Sans", sans-serif;',"\t font-weight: 400;",
"  font-size: 18px;","  padding: 0 3px;","  vertical-align: middle;","}",".blocklyTreeSelected  {","  background-color: #dd3858 !important;","}",".blocklyTreeSelected .blocklyTreeLabel {","  color: #fff;","}",".blocklyWidgetDiv .goog-palette {","  outline: none;","  cursor: default;","}",".blocklyWidgetDiv .goog-palette-table {","  border: 1px solid #666;","  border-collapse: collapse;","}",".blocklyWidgetDiv .goog-palette-cell {","  height: 13px;","  width: 15px;","  margin: 0;","  border: 0;","  text-align: center;",
"  vertical-align: middle;","  border-right: 1px solid #666;","  font-size: 1px;","}",".blocklyWidgetDiv .goog-palette-colorswatch {","  position: relative;","  height: 13px;","  width: 15px;","  border: 1px solid #666;","}",".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {","  border: 1px solid #FFF;","}",".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {","  border: 1px solid #000;","  color: #fff;","}",".blocklyWidgetDiv .goog-menu {","  background: #fff;",
"  border-color: #ccc #666 #666 #ccc;","  border-style: solid;","  border-width: 1px;","  cursor: default;","  font: normal 13px Arial, sans-serif;","  margin: 0;","  outline: none;","  padding: 4px 0;","  position: absolute;","  z-index: 20000;","}",".blocklyWidgetDiv .goog-menuitem {","  color: #000;","  font: normal 13px Arial, sans-serif;","  list-style: none;","  margin: 0;","  padding: 4px 7em 4px 28px;","  white-space: nowrap;","}",".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {","  padding-left: 7em;",
"  padding-right: 28px;","}",".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,",".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {","  padding-left: 12px;","}",".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {","  padding-right: 20px;","}",".blocklyWidgetDiv .goog-menuitem-content {","  color: #000;","  font: normal 13px Arial, sans-serif;","}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {","  color: #ccc !important;",
"}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {","  opacity: 0.3;","  -moz-opacity: 0.3;","  filter: alpha(opacity=30);","}",".blocklyWidgetDiv .goog-menuitem-highlight,",".blocklyWidgetDiv .goog-menuitem-hover {","  background-color: #d6e9f8;","  border-color: #d6e9f8;","  border-style: dotted;","  border-width: 1px 0;","  padding-bottom: 3px;","  padding-top: 3px;","}",".blocklyWidgetDiv .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-menuitem-icon {","  background-repeat: no-repeat;",
"  height: 16px;","  left: 6px;","  position: absolute;","  right: auto;","  vertical-align: middle;","  width: 16px;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {","  left: auto;","  right: 6px;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;","}",
".blocklyWidgetDiv .goog-menuitem-accel {","  color: #999;","  direction: ltr;","  left: auto;","  padding: 0 6px;","  position: absolute;","  right: 0;","  text-align: right;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {","  left: 0;","  right: auto;","  text-align: left;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {","  text-decoration: underline;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {","  color: #999;","  font-size: 12px;","  padding-left: 4px;",
"}",".blocklyWidgetDiv .goog-menuseparator {","  border-top: 1px solid #ccc;","  margin: 4px 0;","  padding: 0;","}",""];/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function rl(a,b){function c(){sl(a);tl()}if(!rg(document,a))throw"Error: container is not in current document.";b&&ul(b);if(oc){var d=document.getElementById("realtime");d&&(d.style.display="block");vl(c,a)}else c()}
function ul(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,h=!1,k=!1,m=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Ec(c))):c=null,m=c,c=Boolean(m&&m.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),h=a.comments,void 0===h&&(h=c),k=a.disable,void 0===k&&(k=c);var p=a.scrollbars;void 0===p&&(p=c);var x=a.sounds;void 0===x&&(x=!0);var w=!!a.realtime,E=w?a.realtimeOptions:void 0;
t=!!a.rtl;mc=e;lc=h;nc=k;y=b;qc=a.maxBlocks||Infinity;a.media?ld=a.media:a.path&&(ld=a.path+"media/");rc=c;sc=p;ic=d;tc=x;kc=m;oc=w;pc=E}
function sl(a){a.setAttribute("dir","LTR");Xg=t;pl();var b=F("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=F("defs",{},b),d,e;d=F("filter",{id:"blocklyEmboss"},c);F("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=F("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
F("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);F("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);F("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=F("filter",{id:"blocklyTrashcanShadowFilter"},c);F("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);F("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=F("feMerge",{},d);F("feMergeNode",{"in":"offsetBlur"},d);F("feMergeNode",{"in":"SourceGraphic"},
d);d=F("filter",{id:"blocklyShadowFilter"},c);F("feGaussianBlur",{stdDeviation:2},d);c=F("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);F("rect",{width:10,height:10,fill:"#aaa"},c);F("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);G=new yd(wl,xl);b.appendChild(G.I());G.Kh=qc;y||(rc?G.ab=new gk(b,a):(G.Z=new Td,c=G.Z,d=c.I(),c.pe=!1,qg(d)),sc||yl(function(){if(0==Fd){var a=G.yc(),b=a.Ab+a.qb,c=a.Mc+a.rb;if(a.Ob<c||a.Ob+a.sb>a.Ta+c||a.ic<(t?a.Ab:
b)||a.ic+a.Dd>(t?a.xa:a.xa+b))for(var d=xc(G,!1),e=0,w;w=d[e];e++){var E=w.ia(),z=Vd(w),K=c+25-z.height-E.y;0<K&&w.moveBy(0,K);K=c+a.Ta-25-E.y;0>K&&w.moveBy(0,K);K=25+b-E.x-(t?0:z.width);0<K&&w.moveBy(K,0);K=b+a.xa-25-E.x+(t?z.width:0);0>K&&w.moveBy(K,0)}}}));b.appendChild(De());a.appendChild(b);jc=b;sk();zi=u("div","blocklyWidgetDiv");zi.style.direction=t?"rtl":"ltr";document.body.appendChild(zi)}
function tl(){C(jc,"mousedown",null,zl);C(jc,"contextmenu",null,Al);C(zi,"contextmenu",null,Al);uc||(C(window,"resize",document,sk),C(document,"keydown",null,Bl),document.addEventListener("mouseup",Cl,!1),Ab&&C(window,"orientationchange",document,function(){dd(window,"resize")}),uc=!0);if(kc)if(G.ab)G.ab.g();else if(G.Z){G.Z.g(G);G.Z.show(kc.childNodes);G.scrollX=G.Z.S;t&&(G.scrollX*=-1);var a="translate("+G.scrollX+", 0)";G.ba.setAttribute("transform",a);G.be.setAttribute("transform",a)}sc&&(G.Ic=
new pd(G),G.Ic.resize());Ad();if(tc){Dl([ld+"click.mp3",ld+"click.wav",ld+"click.ogg"],"click");Dl([ld+"delete.mp3",ld+"delete.ogg",ld+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)D(b.pop());for(var a in El){var d=El[a];d.volume=.01;d.play();d.pause();if(Ab||zb)break}};b.push(C(document,"mousemove",null,a));b.push(C(document,"touchstart",null,a))}};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var zi=null,Je=null,Fl=null;function wi(a,b){fl();Je=a;Fl=b;zi.style.display="block"}function fl(){Je&&(zi.style.display="none",Fl&&Fl(),Fl=Je=null,Le(zi))}function xi(a){Je==a&&fl()}function Ai(a,b,c,d){b<d.y&&(b=d.y);t?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);zi.style.left=a+"px";zi.style.top=b+"px"};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Gl(a,b,c,d){this.h=null;this.Ha=Number(c);this.S=Number(b);this.Ca={height:this.Ha+10,width:this.S};this.da=d||"";this.ma=F("g",{},null);this.Qf=F("image",{height:this.Ha+"px",width:this.S+"px",y:-12},this.ma);this.aa(a);tb&&(this.lg=F("rect",{height:this.Ha+"px",width:this.S+"px",y:-12,"fill-opacity":0},this.ma))}n(Gl,Pe);f=Gl.prototype;f.clone=function(){return new Gl(this.xu(),this.S,this.Ha,this.fb())};f.lg=null;f.wd=!1;
f.g=function(a){this.h||(this.h=a,a.V().appendChild(this.ma),a=this.lg||this.Qf,a.kb=this.h,Ee(a))};f.m=function(){ed(this.ma);this.lg=this.Qf=this.ma=null};f.i=function(a){(this.lg||this.Qf).kb=a};f.Aa=function(){return this.Rs};f.aa=function(a){null!==a&&(this.Rs=a,this.Qf.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l(a)?a:""))};f.ka=function(a){null!==a&&(this.da=a)};f.Yd=function(){};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Hl(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=g.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var Il=Hl();function Jl(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function Kl(a){this.qr=Jl(a,"clientId");this.vi=Il.userId;document.getElementById(Jl(a,"authButtonElementId"));document.getElementById(Jl(a,"authDivElementId"))}Kl.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function Ll(a,b,c,d){function e(c){gapi.uc.Fa.files.Tf({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Vc(d)}function h(){function a(b){gapi.uc.Fa.Is.Tf({fileId:"appdata",resource:{key:"folderId",value:b}}).Vc(function(){e(b)})}function b(){gapi.uc.Fa.files.Tf({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Vc(function(b){a(b.id)})}gapi.uc.Fa.Is.get({fileId:"appdata",propertyKey:"folderId"}).Vc(function(d){if(d.error)c?b():a("root");else{var h=d.result.value;gapi.uc.Fa.files.get({fileId:h}).Vc(function(a){a.error||
a.labels.Pu?b():e(h)})}})}gapi.uc.load("drive","v2",function(){h()})}function Ml(a){this.tk=Jl(a,"onFileLoaded");this.rs=Jl(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.ek=Jl(a,"initializeModel");this.Fk=Jl(a,"registerTypes",function(){});this.dj=Jl(a,"afterAuth",function(){});this.lr=Jl(a,"autoCreate",!1);this.Cr=Jl(a,"defaultTitle","New Realtime File");this.Br=Jl(a,"defaultFolderTitle","");this.ej=Jl(a,"afterCreate",function(){});this.Xg=new Kl(a)}
function Nl(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Il=Hl();for(var e in b)gapi.Fa.dc.load(b[e],a.tk,a.ek,a.ak)}Ml.prototype.start=function(){var a=this;this.Xg.start(function(){a.Fk&&a.Fk();a.dj&&a.dj();a.load()})};
Ml.prototype.ak=function(a){a.type!=gapi.Fa.dc.Ai.ju&&(a.type==gapi.Fa.dc.Ai.et?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.Fa.dc.Ai.Nt&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
Ml.prototype.load=function(){var a=Il.fileIds;a&&(a=a.split(","));var b=this.Xg.vi,b=Il.state;if(a)for(var c in a)gapi.Fa.dc.load(a[c],this.tk,this.ek,this.ak);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.Au;b=d.vi;Nl(this,a,b);return}}this.lr&&Ol(this)}};function Ol(a){Ll(a.Cr,a.rs,a.Br,function(b){b.id?(a.ej&&a.ej(b.id),Nl(a,[b.id],a.Xg.vi)):(console.error("Error creating file."),console.error(b))})};/*

 Visual Blocks Editor

 Copyright 2014 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Cd,Pl,Bd=!1,Ql=null,Ve=null,Rl=null,Sl=null,Xe=null,Ze=!1,Tl=null,Ul=null,Vl=null;function Wl(a){var b=a.Gr;a=a.Gr.length;for(var c=0;c<a;c++){var d=b[c];if(!d.es){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Ak?Xl(function(){Yl(e,!1);Zl(e)}):"relativeX"!=d.Ak&&"relativeY"!=d.Ak||Xl(function(){e.Wk||Yl(e,!1);Zl(e)}))}}}function $l(a){if(!a.es){var b=a.newValue;b?Yl(b,!a.oldValue):(b=a.oldValue,am(b))}}function Xl(a){if(Ze)a();else try{Ze=!0,a()}finally{Ze=!1}}
function Yl(a,b){Xl(function(){var c=Ec(a.wi).firstChild;if(c=Gc(G,c,!0))b&&c.u.oe(c),(b||ab(Cd,c))&&Zl(c)})}function Zl(a){if(!isNaN(a.mg)&&!isNaN(a.ng)){var b=Oe().width,c=a.ia(),d=a.mg-c.x;a.moveBy(t?b-d:d,a.ng-c.y)}}function am(a){Xl(function(){a.m(!0,!0,!0)})}function qk(a){if(a.u==G&&Bd&&!Ze){a=ge(a);var b=a.ia(),c=!1,d=Bc(a);d.setAttribute("id",a.id);var e=u("xml");e.appendChild(d);d=Dc(e);d!=a.wi&&(c=!0,a.wi=d);if(a.mg!=b.x||a.ng!=b.y)a.mg=b.x,a.ng=b.y,c=!0;c&&Xe.set(a.id.toString(),a)}}
function bm(a,b){gapi.uc.Fa.yk.list({fileId:a}).Vc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Iu){b(e.domain);break}}})}
var fm={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Ve=a;var b=a.ru();a.Kd().set("blocks",b);b=a.qu();a.Kd().set("topBlocks",b);Ul&&a.Kd().set(Ul,a.su(Vl))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){Ql=a;a:{for(var b=a.Lr(),c=0;c<b.length;c++){var d=b[c];if(d.fs){Rl=d.Lu;break a}}Rl=void 0}Ve=a.ag;Xe=Ve.Kd().get("blocks");Cd=Ve.Kd().get("topBlocks");
Ve.Kd().addEventListener(gapi.Fa.dc.Kg.Ot,Wl);Xe.addEventListener(gapi.Fa.dc.Kg.ku,$l);Sl();a.addEventListener(gapi.Fa.dc.Kg.ft,cm);a.addEventListener(gapi.Fa.dc.Kg.gt,dm);em();a=Cd;for(b=0;b<a.length;b++)c=a.get(b),Yl(c,!0)},registerTypes:function(){var a=gapi.Fa.dc.tu;a.Gu(qe,"Block");qe.prototype.id=a.ah("id");qe.prototype.wi=a.ah("xmlDom");qe.prototype.mg=a.ah("relativeX");qe.prototype.ng=a.ah("relativeY");a.Mu(qe,qe.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.uc.Fa.yk.Tf({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Vc(function(c){c.error&&bm(a,function(c){b=gapi.uc.Fa.yk.Tf({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Vc(function(){})})})}};function gm(){var a=pc,b=Jl(a,"chatbox");b&&(Ul=Jl(b,"elementId"),Vl=Jl(b,"initText",U.hl));fm.qr=Jl(a,"clientId");Pl=Jl(a,"collabElementId")}
function vl(a,b){gm();Bd=!0;hm(b);Sl=function(){a();if(Ul){var b=Ve.Kd().get(Ul),d=document.getElementById(Ul);gapi.Fa.dc.uu.ou(b,d);d.disabled=!1}};Tl=new Ml(fm);Tl.start()}
function hm(a){a.style.background="url("+ld+"progress.gif) no-repeat center center";var b=Lg(a),c=u("div");c.id=fm.authDivElementId;var d=u("p",null,U.fl);c.appendChild(d);d=u("button",null,"Authorize");d.id=fm.mu;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=Lg(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function em(){if(Pl){var a;a=Pl;a=l(a)?document.getElementById(a):a;Le(a);for(var b=Ql.Lr(),c=0;c<b.length;c++){var d=b[c],e=u("img",{src:d.Fu||ld+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.fs?" ("+U.pp+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function cm(){em()}function dm(){em()}function pe(a){var b=Rl+"-"+a;return Xe.has(b)?pe("-"+a):b};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ld="https://blockly-demo.appspot.com/static/media/",jd=64,kd=92,md="sprites.png",ae=[,2,1,4,3],El=Object.create(null),Gd=null,y=!1,Yd=null,Zd=null,xj=5,he=20,de=250,rk=30,G=null,im=null,Fd=0,jm=null;function Oe(){return{width:jc.jj,height:jc.ij}}function sk(){var a=jc,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.jj!=c&&(a.setAttribute("width",c+"px"),a.jj=c);a.ij!=b&&(a.setAttribute("height",b+"px"),a.ij=b);G.Ic&&G.Ic.resize()}
function zl(a){sk();uj();bd();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!y&&Gd&&b&&Hd();a.target==jc&&Yc(a)?km(a):(y||b)&&G.Ic&&(G.nh=!0,G.ni=a.clientX,G.oi=a.clientY,G.Ts=G.yc(),G.Vs=G.scrollX,G.Ws=G.scrollY,"mouseup"in Fk&&(jm=C(document,"mouseup",null,Cl)),vc=C(document,"mousemove",null,lm))}function Cl(){$c(wk.OPEN);G.nh=!1;jm&&(D(jm),jm=null);vc&&(D(vc),vc=null)}
function lm(a){if(G.nh){xd();var b=G.Ts,c=G.Vs+(a.clientX-G.ni),d=G.Ws+(a.clientY-G.oi),c=Math.min(c,-b.ic),d=Math.min(d,-b.Ob),c=Math.max(c,b.xa-b.ic-b.Dd),d=Math.max(d,b.Ta-b.Ob-b.sb);G.Ic.set(-c-b.ic,-d-b.Ob);a.stopPropagation()}}
function Bl(a){if(!Zc(a))if(27==a.keyCode)bd();else if(8==a.keyCode||46==a.keyCode)try{Gd&&Gd.Gd&&!y&&(bd(),Gd.m(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(Gd&&Gd.Gd&&!y&&Gd.cc&&!y&&Gd.u==G&&(bd(),67==a.keyCode?mm():88==a.keyCode&&(mm(),Gd.m(!0,!0))),86==a.keyCode&&im){a=G;var b=im;if(!(b.getElementsByTagName("block").length>=zc(a))){var c=Gc(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){t&&(d=-d);do for(var e=
!1,h=a.cb(),k=0,m;m=h[k];k++)m=m.ia(),1>=Math.abs(d-m.x)&&1>=Math.abs(b-m.y)&&(d=t?d-he:d+he,b+=2*he,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function uj(){ok&&(D(ok),ok=null);pk&&(D(pk),pk=null);var a=Gd;if(2==Fd&&a){var b=a.ia();ke(a,b.x-a.Rk,b.y-a.Sk);delete a.yf;xk(a,!1);a.G();fc(a.Ma,de,a);dd(window,"resize");a.u.vb()}Fd=0;$c(wk.OPEN);wj()}function mm(){var a=Gd,b=Bc(a);Nc(b);a=a.ia();b.setAttribute("x",t?-a.x:a.x);b.setAttribute("y",a.y);im=b}
function km(a){if(!y){var b=[];if(mc){for(var c=!1,d=!1,e=xc(G,!1),h=0;h<e.length;h++)for(var k=e[h];k;)k.isCollapsed()?c=!0:d=!0,k=Cc(k);d={enabled:d};d.text=U.il;d.Ua=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.nd.bind(c,!0),a),c=Cc(c),a+=10};b.push(d);c={enabled:c};c.text=U.pm;c.Ua=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.nd.bind(c,!1),a),c=Cc(c),a+=10};b.push(c)}nk.show(a,b)}}function Al(a){Zc(a)||a.preventDefault()}
function bd(a){Ie();fl();!a&&G.ab&&G.ab.Z&&G.ab.Z.pe&&G.ab.Ze.Hb(null)}function xd(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function Zc(a){return"textarea"==a.target.type||"text"==a.target.type}
function Dl(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var h=a[e],k=h.match(/\.(\w+)$/);if(k&&d.canPlayType("audio/"+k[1])){c=new window.Audio(h);break}}c&&c.play&&(El[b]=c)}}function uk(a,b){var c=El[a];c&&(c=Gb&&9===Gb||Ab||yb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function wl(){var a=Oe();G.ab&&(a.width-=G.ab.width);var b=a.width-cd,c=a.height-cd;try{var d=G.ba.getBBox()}catch(e){return null}if(G.Ic)var h=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),k=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else h=d.x,b=h+d.width,k=d.y,c=k+d.height;d=0;!t&&G.ab&&(d=G.ab.width);return{Ta:a.height,xa:a.width,sb:c-k,Dd:b-h,Mc:-G.scrollY,Ab:-G.scrollX,Ob:k,ic:h,rb:0,qb:d}}
function xl(a){if(!G.Ic)throw"Attempt to set main workspace scroll without scrollbars.";var b=wl();ga(a.x)&&(G.scrollX=-b.Dd*a.x-b.ic);ga(a.y)&&(G.scrollY=-b.sb*a.y-b.Ob);a="translate("+(G.scrollX+b.qb)+","+(G.scrollY+b.rb)+")";G.ba.setAttribute("transform",a);G.be.setAttribute("transform",a)}function tk(a){a()}function yl(a){return C(G.ba,"blocklyWorkspaceChange",null,a)}g.Blockly||(g.Blockly={});g.Blockly.getMainWorkspace=function(){return G};g.Blockly.addChangeListener=yl;
g.Blockly.removeChangeListener=function(a){D(a)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.ct={};H.variables_get={g:function(){this.p=U.Wq;this.k(330);M(M(M(P(this),U.Zq),new Hi(U.Xq),"VAR"),U.Yq);I(this,!0);this.i(U.$q);this.uj=U.Vq;this.vj="variables_set"},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")},tb:function(a){var b={enabled:!0},c=N(this,"VAR");b.text=this.uj.replace("%1",c);c=u("field",null,c);c.setAttribute("name","VAR");c=u("block",null,c);c.setAttribute("type",this.vj);b.Ua=nk.rf(this,c);a.push(b)}};
H.variables_set={g:function(){this.p=U.ar;this.k(330);this.ta(U.dr+" %1 "+U.cr+" %2",["VAR",new Hi(U.br)],["VALUE",null,1],1);J(this,!0);L(this,!0);this.i(U.er);this.uj=U.Pg;this.vj="variables_get"},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")},tb:H.variables_get.tb};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.qj={};H.colour_picker={g:function(){this.p=U.ql;this.k(20);M(P(this),new al("#ff0000"),"COLOUR");I(this,!0,"Colour");this.i(U.rl)}};H.colour_random={g:function(){this.p=U.sl;this.k(20);M(P(this),U.tl);I(this,!0,"Colour");this.i(U.ul)}};H.colour_rgb={g:function(){this.p=U.xl;this.k(20);M(M(Ue(O(this,"RED").s("Number"),1),U.zl),U.yl);M(Ue(O(this,"GREEN").s("Number"),1),U.wl);M(Ue(O(this,"BLUE").s("Number"),1),U.vl);I(this,!0,"Colour");this.i(U.Al)}};
H.colour_blend={g:function(){this.p=U.ml;this.k(20);M(M(Ue(O(this,"COLOUR1").s("Colour"),1),U.ol),U.kl);M(Ue(O(this,"COLOUR2").s("Colour"),1),U.ll);M(Ue(O(this,"RATIO").s("Number"),1),U.nl);I(this,!0,"Colour");this.i(U.pl)}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.ns={};H.controls_repeat={g:function(){this.p=U.yi;this.k(120);M(M(M(P(this),U.cm),new gl("10",ll),"TIMES"),U.dm);M(df(this,3,"DO"),U.vd);J(this,!0);L(this,!0);this.i(U.zi)}};H.controls_repeat_ext={g:function(){this.p=U.yi;this.k(120);this.ta(U.bm,["TIMES","Number",1],1);M(df(this,3,"DO"),U.vd);J(this,!0);L(this,!0);A(this,!0);this.i(U.zi)}};
H.controls_whileUntil={g:function(){var a=[[U.hm,"WHILE"],[U.gm,"UNTIL"]];this.p=U.em;this.k(120);M(O(this,"BOOL").s("Boolean"),new T(a),"MODE");M(df(this,3,"DO"),U.fm);J(this,!0);L(this,!0);var b=this;this.i(function(){var a=N(b,"MODE");return{WHILE:U.jm,UNTIL:U.im}[a]})}};
H.controls_for={g:function(){this.p=U.Ml;this.k(120);M(M(P(this),U.Pl),new Hi(null),"VAR");this.ta(U.Ol,["FROM","Number",1],["TO","Number",1],["BY","Number",1],1);M(df(this,3,"DO"),U.Nl);J(this,!0);L(this,!0);A(this,!0);var a=this;this.i(function(){return U.Ql.replace("%1",N(a,"VAR"))})},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")},tb:function(a){if(!this.isCollapsed()){var b={enabled:!0},c=N(this,"VAR");b.text=U.Pg.replace("%1",c);c=u("field",null,
c);c.setAttribute("name","VAR");c=u("block",null,c);c.setAttribute("type","variables_get");b.Ua=nk.rf(this,c);a.push(b)}}};H.controls_forEach={g:function(){this.p=U.Hl;this.k(120);M(M(M(O(this,"LIST").s("Array"),U.Kl),new Hi(null),"VAR"),U.Jl);U.xi&&(M(P(this),U.xi),A(this,!0));M(df(this,3,"DO"),U.Il);J(this,!0);L(this,!0);var a=this;this.i(function(){return U.Ll.replace("%1",N(a,"VAR"))})},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")},tb:H.controls_for.tb};
H.controls_flow_statements={g:function(){var a=[[U.Cl,"BREAK"],[U.Dl,"CONTINUE"]];this.p=U.Bl;this.k(120);M(P(this),new T(a),"FLOW");J(this,!0);var b=this;this.i(function(){var a=N(b,"FLOW");return{BREAK:U.El,CONTINUE:U.Fl}[a]})},onchange:function(){if(this.u){var a=!1,b=this;do{if("controls_repeat"==b.type||"controls_repeat_ext"==b.type||"controls_forEach"==b.type||"controls_for"==b.type||"controls_whileUntil"==b.type){a=!0;break}b=$e(b)}while(b);a?this.qd(null):this.qd(U.Gl)}}};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.os={};R.math_number=function(a){return[parseFloat(N(a,"NUM")),R.Lb]};R.math_arithmetic=function(a){var b={ADD:[" + ",R.Ng],MINUS:[" - ",R.vp],MULTIPLY:[" * ",R.tp],DIVIDE:[" / ",R.kf],POWER:[null,R.qa]}[N(a,"OP")],c=b[0],b=b[1],d=S(a,"A",b)||"0";a=S(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",R.Q]};
R.math_single=function(a){var b=N(a,"OP"),c;if("NEG"==b)return a=S(a,"NUM",R.mf)||"0","-"==a[0]&&(a=" "+a),["-"+a,R.mf];a="SIN"==b||"COS"==b||"TAN"==b?S(a,"NUM",R.kf)||"0":S(a,"NUM",R.D)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,R.Q];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,R.kf]};
R.math_constant=function(a){return{PI:["Math.PI",R.W],E:["Math.E",R.W],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",R.kf],SQRT2:["Math.SQRT2",R.W],SQRT1_2:["Math.SQRT1_2",R.W],INFINITY:["Infinity",R.Lb]}[N(a,"CONSTANT")]};
R.math_number_property=function(a){var b=S(a,"NUMBER_TO_CHECK",R.je)||"0",c=N(a,"PROPERTY"),d;if("PRIME"==c)return d=of("math_isPrime",["function "+R.Ea+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,R.Q];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=S(a,"DIVISOR",R.je)||"0",d=b+" % "+a+" == 0"}return[d,R.Li]};
R.math_change=function(a){var b=S(a,"DELTA",R.Ng)||"0";a=R.fa.getName(N(a,"VAR"),sf);return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};R.math_round=R.math_single;R.math_trig=R.math_single;
R.math_on_list=function(a){var b=N(a,"OP");switch(b){case "SUM":a=S(a,"LIST",R.W)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=S(a,"LIST",R.qa)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=S(a,"LIST",R.qa)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=of("math_mean",["function "+R.Ea+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=S(a,"LIST",R.D)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=of("math_median",
["function "+R.Ea+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=S(a,"LIST",R.D)||"[]";a=b+"("+a+")";break;case "MODE":b=of("math_modes",["function "+R.Ea+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=S(a,"LIST",R.D)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=of("math_standard_deviation",["function "+R.Ea+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=S(a,"LIST",R.D)||"[]";a=b+"("+a+")";break;case "RANDOM":b=of("math_random_list",["function "+R.Ea+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=S(a,"LIST",R.D)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,R.Q]};R.math_modulo=function(a){var b=S(a,"DIVIDEND",R.je)||"0";a=S(a,"DIVISOR",R.je)||"0";return[b+" % "+a,R.je]};
R.math_constrain=function(a){var b=S(a,"VALUE",R.qa)||"0",c=S(a,"LOW",R.qa)||"0";a=S(a,"HIGH",R.qa)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",R.Q]};R.math_random_int=function(a){var b=S(a,"FROM",R.qa)||"0";a=S(a,"TO",R.qa)||"0";return[of("math_random_int",["function "+R.Ea+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",R.Q]};
R.math_random_float=function(){return["Math.random()",R.Q]};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.text={};H.text={g:function(){this.p=U.Nq;this.k(160);M(M(M(P(this),this.Ud(!0)),new gl(""),"TEXT"),this.Ud(!1));I(this,!0,"String");this.i(U.Oq)},Ud:function(a){return new Gl(ld+(a==t?"quote1.png":"quote0.png"),12,12,'"')}};
H.text_join={g:function(){this.p=U.Eq;this.k(160);this.ja=2;this.fc();I(this,!0,"String");this.Zd(new Rd(["text_create_join_item"]));this.i(U.Gq)},Ja:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ja);return a},Oa:function(a){this.ja=parseInt(a.getAttribute("items"),10);this.fc()},Ed:function(a){var b=Ic(a,"text_create_join_container");b.sa();for(var c=B(b,"STACK").t,d=0;d<this.ja;d++){var e=Ic(a,"text_create_join_item");e.sa();Mc(c,e.L);c=e.C}return b},Cd:function(a){a=
ff(a,"STACK");for(var b=[],c=0;a;)b[c]=a.ee,a=a.C&&v(a.C),c++;this.ja=c;this.fc();for(c=0;c<this.ja;c++)b[c]&&Mc(B(this,"ADD"+c).t,b[c])},Qe:function(a){a=ff(a,"STACK");for(var b=0;a;){var c=B(this,"ADD"+b);a.ee=c&&c.t.w;b++;a=a.C&&v(a.C)}},fc:function(){if(B(this,"EMPTY"))Q(this,"EMPTY");else for(var a=0;B(this,"ADD"+a);)Q(this,"ADD"+a),a++;if(0==this.ja)M(M(P(this,"EMPTY"),new Gl(ld+"quote0.png",12,12,'"')),new Gl(ld+"quote1.png",12,12,'"'));else for(a=0;a<this.ja;a++){var b=O(this,"ADD"+a);0==
a&&M(b,U.Fq)}}};H.text_create_join_container={g:function(){this.k(160);M(P(this),U.rq);df(this,3,"STACK");this.i(U.sq);this.contextMenu=!1}};H.text_create_join_item={g:function(){this.k(160);M(P(this),U.pq);J(this,!0);L(this,!0);this.i(U.qq);this.contextMenu=!1}};
H.text_append={g:function(){this.p=U.Zp;this.k(160);M(M(M(O(this,"TEXT"),U.$p),new Hi(U.bq),"VAR"),U.Yp);J(this,!0);L(this,!0);var a=this;this.i(function(){return U.aq.replace("%1",N(a,"VAR"))})},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")}};H.text_length={g:function(){this.p=U.Hq;this.k(160);this.ta(U.Iq,["VALUE",["String","Array"],1],1);I(this,!0,"Number");this.i(U.Jq)}};
H.text_isEmpty={g:function(){this.p=U.Bq;this.k(160);this.ta(U.Cq,["VALUE",["String","Array"],1],1);I(this,!0,"Boolean");this.i(U.Dq)}};H.text_indexOf={g:function(){var a=[[U.yq,"FIRST"],[U.zq,"LAST"]];this.p=U.wq;this.k(160);I(this,!0,"Number");M(O(this,"VALUE").s("String"),U.xq);M(O(this,"FIND").s("String"),new T(a),"END");U.Vi&&M(P(this),U.Vi);A(this,!0);this.i(U.Aq)}};
H.text_charAt={g:function(){this.le=[[U.jq,"FROM_START"],[U.iq,"FROM_END"],[U.hq,"FIRST"],[U.mq,"LAST"],[U.nq,"RANDOM"]];this.p=U.kq;this.k(160);I(this,!0,"String");M(O(this,"VALUE").s("String"),U.lq);P(this,"AT");A(this,!0);this.ea(!0);this.i(U.oq)},Ja:function(){var a=document.createElement("mutation");a.setAttribute("at",1==B(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ea(a)},ea:function(a){Q(this,"AT");Q(this,"ORDINAL",!0);a?(O(this,"AT").s("Number"),U.Tb&&M(P(this,
"ORDINAL"),U.Tb)):P(this,"AT");U.Ui&&(Q(this,"TAIL",!0),M(P(this,"TAIL"),U.Ui));var b=new T(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);Lc(e,b,"WHERE");return null}});M(B(this,"AT"),b,"WHERE")}};
H.text_getSubstring={g:function(){this.p=U.tq;this.k(160);M(O(this,"STRING").s("String"),U.uq);P(this,"AT1");P(this,"AT2");U.nf&&M(P(this,"TAIL"),U.nf);A(this,!0);I(this,!0,"String");this.ea(1,!0);this.ea(2,!0);this.i(U.vq)},Ja:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==B(this,"AT1").type);a.setAttribute("at2",1==B(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ea(1,b);this.ea(2,a)},ea:function(a,
b){Q(this,"AT"+a);Q(this,"ORDINAL"+a,!0);b?(O(this,"AT"+a).s("Number"),U.Tb&&M(P(this,"ORDINAL"+a),U.Tb)):P(this,"AT"+a);2==a&&U.nf&&(Q(this,"TAIL",!0),M(P(this,"TAIL"),U.nf));var c=new T(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ea(a,e);Lc(h,c,"WHERE"+a);return null}});M(B(this,"AT"+a),c,"WHERE"+a);1==a&&ef(this,"AT1","AT2")}};
H.text_changeCase={g:function(){var a=[[U.fq,"UPPERCASE"],[U.dq,"LOWERCASE"],[U.eq,"TITLECASE"]];this.p=U.cq;this.k(160);M(O(this,"TEXT").s("String"),new T(a),"CASE");I(this,!0,"String");this.i(U.gq)}};H.text_trim={g:function(){var a=[[U.Qq,"BOTH"],[U.Rq,"LEFT"],[U.Sq,"RIGHT"]];this.p=U.Pq;this.k(160);M(O(this,"TEXT").s("String"),new T(a),"MODE");I(this,!0,"String");this.i(U.Tq)}};H.text_print={g:function(){this.p=U.Kq;this.k(160);this.ta(U.Lq,["TEXT",null,1],1);J(this,!0);L(this,!0);this.i(U.Mq)}};
H.text_prompt={g:function(){var a=[[U.$i,"TEXT"],[U.Zi,"NUMBER"]],b=this;this.p=U.Wi;this.k(160);a=new T(a,function(a){"NUMBER"==a?b.H.s("Number"):b.H.s("String")});M(M(M(M(P(this),a,"TYPE"),this.Ud(!0)),new gl(""),"TEXT"),this.Ud(!1));I(this,!0,"String");b=this;this.i(function(){return"TEXT"==N(b,"TYPE")?U.Yi:U.Xi})},Ud:H.text.Ud};
H.text_prompt_ext={g:function(){var a=[[U.$i,"TEXT"],[U.Zi,"NUMBER"]],b=this;this.p=U.Wi;this.k(160);a=new T(a,function(a){"NUMBER"==a?b.H.s("Number"):b.H.s("String")});M(O(this,"TEXT"),a,"TYPE");I(this,!0,"String");b=this;this.i(function(){return"TEXT"==N(b,"TYPE")?U.Yi:U.Xi})}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.Hs={};
H.procedures_defnoreturn={g:function(){this.p=U.Cp;this.k(290);var a=xf(U.Ri,this);M(M(M(P(this),U.Si),new gl(a,zf),"NAME"),"","PARAMS");this.Zd(new Rd(["procedures_mutatorarg"]));this.i(U.Dp);this.A=[];this.pd(!0);this.ob=null},pd:function(a){this.Nf!==a&&(a?(M(df(this,3,"STACK"),U.Qi),B(this,"RETURN")&&ef(this,"STACK","RETURN")):Q(this,"STACK",!0),this.Nf=a)},bf:function(){for(var a=!1,b={},c=0;c<this.A.length;c++){if(b["arg_"+this.A[c].toLowerCase()]){a=!0;break}b["arg_"+this.A[c].toLowerCase()]=!0}a?
this.qd(U.Ip):this.qd(null);a="";this.A.length&&(a=U.xp+" "+this.A.join(", "));Lc(this,a,"PARAMS")},Ja:function(){for(var a=document.createElement("mutation"),b=0;b<this.A.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}this.Nf||a.setAttribute("statements","false");return a},Oa:function(a){this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.bf();this.pd("false"!==a.getAttribute("statements"))},
Ed:function(a){var b=Ic(a,"procedures_mutatorcontainer");b.sa();B(this,"RETURN")?Lc(b,this.Nf?"TRUE":"FALSE","STATEMENTS"):B(b,"STATEMENT_INPUT").P(!1);for(var c=B(b,"STACK").t,d=0;d<this.A.length;d++){var e=Ic(a,"procedures_mutatorarg");e.sa();Lc(e,this.A[d],"NAME");e.Eu=d;Mc(c,e.L);c=e.C}Cf(N(this,"NAME"),this.u,this.A,null);return b},Cd:function(a){this.A=[];this.Qh=[];for(var b=ff(a,"STACK");b;)this.A.push(N(b,"NAME")),this.Qh.push(b.id),b=b.C&&v(b.C);this.bf();Cf(N(this,"NAME"),this.u,this.A,
this.Qh);a=N(a,"STATEMENTS");if(null!==a&&(a="TRUE"==a,this.Nf!=a))if(a)this.pd(!0),a=B(this,"STACK").t,a.w||!this.ob||this.ob.w||this.ob.h.u!=this.u?this.ob=null:Mc(a,this.ob);else{a=B(this,"STACK").t;if(this.ob=a.w)a=v(a),a.$a(null),a.Ma();this.pd(!1)}},m:function(){for(var a=N(this,"NAME"),a=Bf(a,this.u),b=0;b<a.length;b++)a[b].m(!0,!1);this.constructor.prototype.m.apply(this,arguments)},Jf:function(){return[N(this,"NAME"),this.A,!1]},Zb:function(){return this.A},Gb:function(a,b){for(var c=!1,
d=0;d<this.A.length;d++)uf(a,this.A[d])&&(this.A[d]=b,c=!0);if(c&&(this.bf(),this.Fb.Cu()))for(var c=this.Fb.v.cb(),d=0,e;e=c[d];d++)"procedures_mutatorarg"==e.type&&uf(a,N(e,"NAME"))&&Lc(e,b,"NAME")},tb:function(a){var b={enabled:!0},c=N(this,"NAME");b.text=U.Bp.replace("%1",c);var d=u("mutation");d.setAttribute("name",c);for(var e=0;e<this.A.length;e++)c=u("arg"),c.setAttribute("name",this.A[e]),d.appendChild(c);d=u("block",null,d);d.setAttribute("type",this.kj);b.Ua=nk.rf(this,d);a.push(b);if(!this.isCollapsed())for(e=
0;e<this.A.length;e++)b={enabled:!0},c=this.A[e],b.text=U.Pg.replace("%1",c),d=u("field",null,c),d.setAttribute("name","VAR"),d=u("block",null,d),d.setAttribute("type","variables_get"),b.Ua=nk.rf(this,d),a.push(b)},kj:"procedures_callnoreturn"};
H.procedures_defreturn={g:function(){this.p=U.Ep;this.k(290);var a=xf(U.Fp,this);M(M(M(P(this),U.Gp),new gl(a,zf),"NAME"),"","PARAMS");M(Ue(O(this,"RETURN"),1),U.ke);this.Zd(new Rd(["procedures_mutatorarg"]));this.i(U.Hp);this.A=[];this.pd(!0);this.ob=null},pd:H.procedures_defnoreturn.pd,bf:H.procedures_defnoreturn.bf,Ja:H.procedures_defnoreturn.Ja,Oa:H.procedures_defnoreturn.Oa,Ed:H.procedures_defnoreturn.Ed,Cd:H.procedures_defnoreturn.Cd,m:H.procedures_defnoreturn.m,Jf:function(){return[N(this,
"NAME"),this.A,!0]},Zb:H.procedures_defnoreturn.Zb,Gb:H.procedures_defnoreturn.Gb,tb:H.procedures_defnoreturn.tb,kj:"procedures_callreturn"};H.procedures_mutatorcontainer={g:function(){this.k(290);M(P(this),U.Op);df(this,3,"STACK");M(M(P(this,"STATEMENT_INPUT"),U.wp),new Gk("TRUE"),"STATEMENTS");this.i(U.Pp);this.contextMenu=!1}};
H.procedures_mutatorarg={g:function(){this.k(290);M(M(P(this),U.Mp),new gl("x",this.bt),"NAME");J(this,!0);L(this,!0);this.i(U.Np);this.contextMenu=!1},bt:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
H.procedures_callnoreturn={g:function(){this.p=U.yp;this.k(290);M(M(M(P(this),U.Mi),"","NAME"),U.Pi,"WITH");J(this,!0);L(this,!0);this.A=[];this.Hc=this.jd=null},Jd:function(){return N(this,"NAME")},Yh:function(a,b){uf(a,this.Jd())&&(Lc(this,b,"NAME"),this.i((this.H?U.Oi:U.Ni).replace("%1",b)))},ae:function(a,b){if(b){if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";this.Hc||(this.jd={},this.Hc=a.join("\n")==this.A.join("\n")?b:[]);var c=this.B;this.B=!1;for(var d=
this.A.length-1;0<=d;d--){var e=B(this,"ARG"+d);if(e){var h=e.t.w;this.jd[this.Hc[d]]=h;Q(this,"ARG"+d)}}this.A=[].concat(a);this.Hc=b;for(d=0;d<this.A.length;d++)if(e=M(Ue(O(this,"ARG"+d),1),this.A[d]),this.Hc){var k=this.Hc[d];k in this.jd&&(h=this.jd[k],!h||h.w||h.h.u!=this.u?delete this.jd[k]:Mc(e.t,h))}bf(this,"WITH").P(!!this.A.length);(this.B=c)&&this.G()}else this.jd={},this.Hc=null},Ja:function(){var a=document.createElement("mutation");a.setAttribute("name",this.Jd());for(var b=0;b<this.A.length;b++){var c=
document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}return a},Oa:function(a){var b=a.getAttribute("name");Lc(this,b,"NAME");this.i((this.H?U.Oi:U.Ni).replace("%1",b));if((b=Df(b,this.u))&&b.Fb.K())this.ae(b.A,b.Qh);else{this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.ae(this.A,this.A)}},Gb:function(a,b){for(var c=0;c<this.A.length;c++)uf(a,this.A[c])&&(this.A[c]=b,B(this,"ARG"+c).Pa[0].ka(b))},tb:function(a){var b=
{enabled:!0};b.text=U.Jp;var c=this.Jd(),d=this.u;b.Ua=function(){var a=Df(c,d);a&&a.select()};a.push(b)}};H.procedures_callreturn={g:function(){this.p=U.Ap;this.k(290);M(M(M(P(this),U.zp),"","NAME"),U.Pi,"WITH");I(this,!0);this.A=[];this.Hc=this.jd=null},Jd:H.procedures_callnoreturn.Jd,Yh:H.procedures_callnoreturn.Yh,ae:H.procedures_callnoreturn.ae,Ja:H.procedures_callnoreturn.Ja,Oa:H.procedures_callnoreturn.Oa,Gb:H.procedures_callnoreturn.Gb,tb:H.procedures_callnoreturn.tb};
H.procedures_ifreturn={g:function(){this.p="http://c2.com/cgi/wiki?GuardClause";this.k(290);M(O(this,"CONDITION").s("Boolean"),U.Ig);M(O(this,"VALUE"),U.ke);A(this,!0);J(this,!0);L(this,!0);this.i(U.Kp);this.Bc=!0},Ja:function(){var a=document.createElement("mutation");a.setAttribute("value",Number(this.Bc));return a},Oa:function(a){this.Bc=1==a.getAttribute("value");this.Bc||(Q(this,"VALUE"),M(P(this,"VALUE"),U.ke))},onchange:function(){if(this.u){var a=!1,b=this;do{if("procedures_defnoreturn"==
b.type||"procedures_defreturn"==b.type){a=!0;break}b=$e(b)}while(b);a?("procedures_defnoreturn"==b.type&&this.Bc?(Q(this,"VALUE"),M(P(this,"VALUE"),U.ke),this.Bc=!1):"procedures_defreturn"!=b.type||this.Bc||(Q(this,"VALUE"),M(O(this,"VALUE"),U.ke),this.Bc=!0),this.qd(null)):this.qd(U.Lp)}}};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.ms={};R.controls_if=function(a){for(var b=0,c=S(a,"IF"+b,R.D)||"false",d=lf(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.Xa;b++)c=S(a,"IF"+b,R.D)||"false",d=lf(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.ub&&(d=lf(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};R.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[N(a,"OP")],c="=="==b||"!="==b?R.Li:R.up,d=S(a,"A",c)||"0";a=S(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
R.logic_operation=function(a){var b="AND"==N(a,"OP")?"&&":"||",c="&&"==b?R.rp:R.sp,d=S(a,"A",c);a=S(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};R.logic_negate=function(a){var b=R.lf;return["!"+(S(a,"BOOL",b)||"true"),b]};R.logic_boolean=function(a){return["TRUE"==N(a,"BOOL")?"true":"false",R.Lb]};R.logic_null=function(){return["null",R.Lb]};
R.logic_ternary=function(a){var b=S(a,"IF",R.jf)||"false",c=S(a,"THEN",R.jf)||"null";a=S(a,"ELSE",R.jf)||"null";return[b+" ? "+c+" : "+a,R.jf]};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.Hs={};R.procedures_defreturn=function(a){var b=R.fa.getName(N(a,"NAME"),"PROCEDURE"),c=lf(a,"STACK");R.xd&&(c=kf(R.xd.replace(/%1/g,"'"+a.id+"'"),R.ge)+c);R.ff&&(c=R.ff.replace(/%1/g,"'"+a.id+"'")+c);var d=S(a,"RETURN",R.D)||"";d&&(d="  return "+d+";\n");for(var e=[],h=0;h<a.A.length;h++)e[h]=R.fa.getName(a.A[h],sf);c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=R.ai(a,c);R.Fd[b]=c;return null};R.procedures_defnoreturn=R.procedures_defreturn;
R.procedures_callreturn=function(a){for(var b=R.fa.getName(N(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=S(a,"ARG"+d,R.qa)||"null";return[b+"("+c.join(", ")+")",R.Q]};R.procedures_callnoreturn=function(a){for(var b=R.fa.getName(N(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=S(a,"ARG"+d,R.qa)||"null";return b+"("+c.join(", ")+");\n"};
R.procedures_ifreturn=function(a){var b="if ("+(S(a,"CONDITION",R.D)||"false")+") {\n";a.Bc?(a=S(a,"VALUE",R.D)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};function nm(a,b){var c;c=a.className;for(var d=c=l(c)&&c.match(/\S+/g)||[],e=gb(arguments,1),h=0;h<e.length;h++)ab(d,e[h])||d.push(e[h]);a.className=c.join(" ")};var om={},pm={en:"English"},qm=[],rm=window.BlocklyGamesLang,sm=window.BlocklyGamesLanguages,tm=!!window.location.pathname.match(/\.html$/);function um(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var V,vm=Number(um("level","NaN"));V=isNaN(vm)?1:Math.min(Math.max(1,vm),10);
function wm(){document.head.parentElement.setAttribute("dir",-1!=qm.indexOf(rm)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",rm);for(var a=[],b=0;b<sm.length;b++){var c=sm[b];a.push([pm[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==rm&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!xm(b),a&&c&&nm(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(ym,1)}function xm(a){var b=zm,c;try{c=window.localStorage[b+a]}catch(d){}return c}function W(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function Am(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function ym(){if(!tm){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.ms={};
H.controls_if={g:function(){this.p=U.Vl;this.k(210);M(O(this,"IF0").s("Boolean"),U.Ig);M(df(this,3,"DO0"),U.Jg);J(this,!0);L(this,!0);this.Zd(new Rd(["controls_if_elseif","controls_if_else"]));var a=this;this.i(function(){if(a.Xa||a.ub){if(!a.Xa&&a.ub)return U.Zl;if(a.Xa&&!a.ub)return U.$l;if(a.Xa&&a.ub)return U.am}else return U.Yl;return""});this.ub=this.Xa=0},Ja:function(){if(!this.Xa&&!this.ub)return null;var a=document.createElement("mutation");this.Xa&&a.setAttribute("elseif",this.Xa);this.ub&&
a.setAttribute("else",1);return a},Oa:function(a){this.Xa=parseInt(a.getAttribute("elseif"),10);this.ub=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.Xa;a++)M(O(this,"IF"+a).s("Boolean"),U.Hg),M(df(this,3,"DO"+a),U.Jg);this.ub&&M(df(this,3,"ELSE"),U.Gg)},Ed:function(a){var b=Ic(a,"controls_if_if");b.sa();for(var c=B(b,"STACK").t,d=1;d<=this.Xa;d++){var e=Ic(a,"controls_if_elseif");e.sa();Mc(c,e.L);c=e.C}this.ub&&(a=Ic(a,"controls_if_else"),a.sa(),Mc(c,a.L));return b},Cd:function(a){this.ub&&
Q(this,"ELSE");this.ub=0;for(var b=this.Xa;0<b;b--)Q(this,"IF"+b),Q(this,"DO"+b);this.Xa=0;for(a=ff(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.Xa++;var b=M(O(this,"IF"+this.Xa).s("Boolean"),U.Hg),c=df(this,3,"DO"+this.Xa);M(c,U.Jg);a.ee&&Mc(b.t,a.ee);a.ob&&Mc(c.t,a.ob);break;case "controls_if_else":this.ub++;b=df(this,3,"ELSE");M(b,U.Gg);a.ob&&Mc(b.t,a.ob);break;default:throw"Unknown block type.";}a=a.C&&v(a.C)}},Qe:function(a){a=ff(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=
B(this,"IF"+b),d=B(this,"DO"+b);a.ee=c&&c.t.w;a.ob=d&&d.t.w;b++;break;case "controls_if_else":d=B(this,"ELSE");a.ob=d&&d.t.w;break;default:throw"Unknown block type.";}a=a.C&&v(a.C)}}};H.controls_if_if={g:function(){this.k(210);M(P(this),U.Wl);df(this,3,"STACK");this.i(U.Xl);this.contextMenu=!1}};H.controls_if_elseif={g:function(){this.k(210);M(P(this),U.Rl);J(this,!0);L(this,!0);this.i(U.Sl);this.contextMenu=!1}};
H.controls_if_else={g:function(){this.k(210);M(P(this),U.Tl);J(this,!0);this.i(U.Ul);this.contextMenu=!1}};
H.logic_compare={g:function(){var a=t?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.p=U.kn;this.k(210);I(this,!0,"Boolean");O(this,"A");M(O(this,"B"),new T(a),"OP");A(this,!0);var b=this;this.i(function(){var a=N(b,"OP");return{EQ:U.ln,NEQ:U.qn,LT:U.on,LTE:U.pn,GT:U.mn,GTE:U.nn}[a]})}};
H.logic_operation={g:function(){var a=[[U.xn,"AND"],[U.zn,"OR"]];this.p=U.yn;this.k(210);I(this,!0,"Boolean");O(this,"A").s("Boolean");M(O(this,"B").s("Boolean"),new T(a),"OP");A(this,!0);var b=this;this.i(function(){var a=N(b,"OP");return{AND:U.An,OR:U.Bn}[a]})}};H.logic_negate={g:function(){this.p=U.rn;this.k(210);I(this,!0,"Boolean");this.ta(U.sn,["BOOL","Boolean",1],1);this.i(U.tn)}};
H.logic_boolean={g:function(){var a=[[U.jn,"TRUE"],[U.fn,"FALSE"]];this.p=U.gn;this.k(210);I(this,!0,"Boolean");M(P(this),new T(a),"BOOL");this.i(U.hn)}};H.logic_null={g:function(){this.p=U.vn;this.k(210);I(this,!0);M(P(this),U.un);this.i(U.wn)}};H.logic_ternary={g:function(){this.p=U.Dn;this.k(210);M(O(this,"IF").s("Boolean"),U.Cn);M(O(this,"THEN"),U.Fn);M(O(this,"ELSE"),U.En);I(this,!0);this.i(U.Gn)}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.ks={};H.lists_create_empty={g:function(){this.p=U.xm;this.k(260);I(this,!0,"Array");M(P(this),U.Ci);this.i(U.ym)}};
H.lists_create_with={g:function(){this.k(260);this.ja=3;this.fc();I(this,!0,"Array");this.Zd(new Rd(["lists_create_with_item"]));this.i(U.Em)},Ja:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ja);return a},Oa:function(a){this.ja=parseInt(a.getAttribute("items"),10);this.fc()},Ed:function(a){var b=Ic(a,"lists_create_with_container");b.sa();for(var c=B(b,"STACK").t,d=0;d<this.ja;d++){var e=Ic(a,"lists_create_with_item");e.sa();Mc(c,e.L);c=e.C}return b},Cd:function(a){a=
ff(a,"STACK");for(var b=[],c=0;a;)b[c]=a.ee,a=a.C&&v(a.C),c++;this.ja=c;this.fc();for(c=0;c<this.ja;c++)b[c]&&Mc(B(this,"ADD"+c).t,b[c])},Qe:function(a){a=ff(a,"STACK");for(var b=0;a;){var c=B(this,"ADD"+b);a.ee=c&&c.t.w;b++;a=a.C&&v(a.C)}},fc:function(){if(B(this,"EMPTY"))Q(this,"EMPTY");else for(var a=0;B(this,"ADD"+a);)Q(this,"ADD"+a),a++;if(0==this.ja)M(P(this,"EMPTY"),U.Ci);else for(a=0;a<this.ja;a++){var b=O(this,"ADD"+a);0==a&&M(b,U.Bm)}}};
H.lists_create_with_container={g:function(){this.k(260);M(P(this),U.zm);df(this,3,"STACK");this.i(U.Am);this.contextMenu=!1}};H.lists_create_with_item={g:function(){this.k(260);M(P(this),U.Cm);J(this,!0);L(this,!0);this.i(U.Dm);this.contextMenu=!1}};H.lists_repeat={g:function(){this.p=U.Wm;this.k(260);I(this,!0,"Array");this.ta(U.Xm,["ITEM",null,1],["NUM","Number",1],1);this.i(U.Ym)}};
H.lists_length={g:function(){this.p=U.Tm;this.k(260);this.ta(U.Um,["VALUE",["Array","String"],1],1);I(this,!0,"Number");this.i(U.Vm)}};H.lists_isEmpty={g:function(){this.p=U.Rm;this.k(260);this.ta(U.Sm,["VALUE",["Array","String"],1],1);A(this,!0);I(this,!0,"Boolean");this.i(U.dn)}};H.lists_indexOf={g:function(){var a=[[U.Nm,"FIRST"],[U.Pm,"LAST"]];this.p=U.Ii;this.k(260);I(this,!0,"Number");M(O(this,"VALUE").s("Array"),U.Om);M(O(this,"FIND"),new T(a),"END");A(this,!0);this.i(U.Qm)}};
H.lists_getIndex={g:function(){var a=[[U.Fm,"GET"],[U.Gm,"GET_REMOVE"],[U.Jm,"REMOVE"]];this.le=[[U.Fi,"FROM_START"],[U.Ei,"FROM_END"],[U.Di,"FIRST"],[U.Gi,"LAST"],[U.Hi,"RANDOM"]];this.p=U.Hm;this.k(260);a=new T(a,function(a){this.h.al("REMOVE"==a)});M(O(this,"VALUE").s("Array"),U.Im);M(M(P(this),a,"MODE"),"","SPACE");P(this,"AT");U.Lg&&M(P(this,"TAIL"),U.Lg);A(this,!0);I(this,!0);this.ea(!0);var b=this;this.i(function(){var a=N(b,"MODE")+"_"+N(b,"WHERE");return U["LISTS_GET_INDEX_TOOLTIP_"+a]})},
Ja:function(){var a=document.createElement("mutation");a.setAttribute("statement",!this.H);a.setAttribute("at",1==B(this,"AT").type);return a},Oa:function(a){var b="true"==a.getAttribute("statement");this.al(b);a="false"!=a.getAttribute("at");this.ea(a)},al:function(a){a!=!this.H&&(Ye(this,!0,!0),a?(I(this,!1),J(this,!0),L(this,!0)):(J(this,!1),L(this,!1),I(this,!0)))},ea:function(a){Q(this,"AT");Q(this,"ORDINAL",!0);a?(O(this,"AT").s("Number"),U.Tb&&M(P(this,"ORDINAL"),U.Tb)):P(this,"AT");var b=
new T(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);Lc(e,b,"WHERE");return null}});M(B(this,"AT"),b,"WHERE");U.Lg&&ef(this,"TAIL",null)}};
H.lists_setIndex={g:function(){var a=[[U.cn,"SET"],[U.bn,"INSERT"]];this.le=[[U.Fi,"FROM_START"],[U.Ei,"FROM_END"],[U.Di,"FIRST"],[U.Gi,"LAST"],[U.Hi,"RANDOM"]];this.p=U.Zm;this.k(260);M(O(this,"LIST").s("Array"),U.$m);M(M(P(this),new T(a),"MODE"),"","SPACE");P(this,"AT");M(O(this,"TO"),U.an);A(this,!0);J(this,!0);L(this,!0);this.i(U.Ct);this.ea(!0);var b=this;this.i(function(){var a=N(b,"MODE")+"_"+N(b,"WHERE");return U["LISTS_SET_INDEX_TOOLTIP_"+a]})},Ja:function(){var a=document.createElement("mutation");
a.setAttribute("at",1==B(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ea(a)},ea:function(a){Q(this,"AT");Q(this,"ORDINAL",!0);a?(O(this,"AT").s("Number"),U.Tb&&M(P(this,"ORDINAL"),U.Tb)):P(this,"AT");var b=new T(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);Lc(e,b,"WHERE");return null}});ef(this,"AT","TO");B(this,"ORDINAL")&&ef(this,"ORDINAL","TO");M(B(this,"AT"),b,"WHERE")}};
H.lists_getSublist={g:function(){this.p=U.Km;this.k(260);M(O(this,"LIST").s("Array"),U.Lm);P(this,"AT1");P(this,"AT2");U.Mg&&M(P(this,"TAIL"),U.Mg);A(this,!0);I(this,!0,"Array");this.ea(1,!0);this.ea(2,!0);this.i(U.Mm)},Ja:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==B(this,"AT1").type);a.setAttribute("at2",1==B(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ea(1,b);this.ea(2,a)},ea:function(a,b){Q(this,
"AT"+a);Q(this,"ORDINAL"+a,!0);b?(O(this,"AT"+a).s("Number"),U.Tb&&M(P(this,"ORDINAL"+a),U.Tb)):P(this,"AT"+a);var c=new T(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ea(a,e);Lc(h,c,"WHERE"+a);return null}});M(B(this,"AT"+a),c,"WHERE"+a);1==a&&(ef(this,"AT1","AT2"),B(this,"ORDINAL1")&&ef(this,"ORDINAL1","AT2"));U.Mg&&ef(this,"TAIL",null)}};/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
R.ns={};R.controls_repeat=function(a){var b=Number(N(a,"TIMES")),c=lf(a,"DO"),c=mf(c,a.id);a=pf(R.fa,"count");return"for (var "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};R.controls_repeat_ext=function(a){var b=S(a,"TIMES",R.Pc)||"0",c=lf(a,"DO"),c=mf(c,a.id);a="";var d=pf(R.fa,"count"),e=b;b.match(/^\w+$/)||tf(b)||(e=pf(R.fa,"repeat_end"),a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
R.controls_whileUntil=function(a){var b="UNTIL"==N(a,"MODE"),c=S(a,"BOOL",b?R.lf:R.D)||"false",d=lf(a,"DO"),d=mf(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
R.controls_for=function(a){var b=R.fa.getName(N(a,"VAR"),sf),c=S(a,"FROM",R.Pc)||"0",d=S(a,"TO",R.Pc)||"0",e=S(a,"BY",R.Pc)||"1",h=lf(a,"DO"),h=mf(h,a.id);if(tf(c)&&tf(d)&&tf(e)){var k=parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(k?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(k?"++":"--"):a+((k?" += ":" -= ")+b))+(") {\n"+h+"}\n")}else a="",k=c,c.match(/^\w+$/)||tf(c)||(k=pf(R.fa,b+"_start"),a+="var "+k+" = "+c+";\n"),c=d,d.match(/^\w+$/)||tf(d)||(c=pf(R.fa,b+"_end"),a+=
"var "+c+" = "+d+";\n"),d=pf(R.fa,b+"_inc"),a+="var "+d+" = ",a=tf(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+k+" > "+c+") {\n",a+=R.ge+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+k+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+h+"}\n";return a};
R.controls_forEach=function(a){var b=R.fa.getName(N(a,"VAR"),sf),c=S(a,"LIST",R.Pc)||"[]",d=lf(a,"DO"),d=mf(d,a.id);a=pf(R.fa,b+"_index");d=R.ge+b+" = "+c+"["+a+"];\n"+d;return"for (var "+a+" in "+c+") {\n"+d+"}\n"};R.controls_flow_statements=function(a){switch(N(a,"FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
H.os={};H.math_number={g:function(){this.p=U.no;this.k(230);M(P(this),new gl("0",kl),"NUM");I(this,!0,"Number");this.i(U.oo)}};H.math_arithmetic={g:function(){var a=[[U.In,"ADD"],[U.bp,"MINUS"],[U.mo,"MULTIPLY"],[U.Zn,"DIVIDE"],[U.Go,"POWER"]];this.p=U.Jn;this.k(230);I(this,!0,"Number");O(this,"A").s("Number");M(O(this,"B").s("Number"),new T(a),"OP");A(this,!0);var b=this;this.i(function(){var a=N(b,"OP");return{ADD:U.Kn,MINUS:U.Mn,MULTIPLY:U.Nn,DIVIDE:U.Ln,POWER:U.On}[a]})}};
H.math_single={g:function(){var a=[[U.Uo,"ROOT"],[U.To,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];this.p=U.So;this.k(230);I(this,!0,"Number");this.ta("%1 %2",["OP",new T(a)],["NUM","Number",1],1);var b=this;this.i(function(){var a=N(b,"OP");return{ROOT:U.ap,ABS:U.Vo,NEG:U.Zo,LN:U.Xo,LOG10:U.Yo,EXP:U.Wo,POW10:U.$o}[a]})}};
H.math_trig={g:function(){var a=[[U.hp,"SIN"],[U.fp,"COS"],[U.ip,"TAN"],[U.dp,"ASIN"],[U.cp,"ACOS"],[U.ep,"ATAN"]];this.p=U.gp;this.k(230);I(this,!0,"Number");M(O(this,"NUM").s("Number"),new T(a),"OP");var b=this;this.i(function(){var a=N(b,"OP");return{SIN:U.np,COS:U.mp,TAN:U.op,ASIN:U.kp,ACOS:U.jp,ATAN:U.lp}[a]})}};
H.math_constant={g:function(){this.p=U.Un;this.k(230);I(this,!0,"Number");M(P(this),new T([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.i(U.Vn)}};
H.math_number_property={g:function(){var a=[[U.ao,"EVEN"],[U.co,"ODD"],[U.fo,"PRIME"],[U.io,"WHOLE"],[U.eo,"POSITIVE"],[U.bo,"NEGATIVE"],[U.$n,"DIVISIBLE_BY"]];this.k(230);O(this,"NUMBER_TO_CHECK").s("Number");a=new T(a,function(a){this.h.fc("DIVISIBLE_BY"==a)});M(P(this),a,"PROPERTY");A(this,!0);I(this,!0,"Boolean");this.i(U.ho)},Ja:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==N(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Oa:function(a){a="true"==a.getAttribute("divisor_input");
this.fc(a)},fc:function(a){var b=B(this,"DIVISOR");a?b||O(this,"DIVISOR").s("Number"):b&&Q(this,"DIVISOR")}};H.math_change={g:function(){this.p=U.Pn;this.k(230);this.ta(U.Rn+" %1 "+U.Qn+" %2",["VAR",new Hi(U.Sn)],["DELTA","Number",1],1);J(this,!0);L(this,!0);var a=this;this.i(function(){return U.Tn.replace("%1",N(a,"VAR"))})},Zb:function(){return[N(this,"VAR")]},Gb:function(a,b){uf(a,N(this,"VAR"))&&Lc(this,b,"VAR")}};
H.math_round={g:function(){var a=[[U.Oo,"ROUND"],[U.Qo,"ROUNDUP"],[U.Po,"ROUNDDOWN"]];this.p=U.No;this.k(230);I(this,!0,"Number");M(O(this,"NUM").s("Number"),new T(a),"OP");this.i(U.Ro)}};
H.math_on_list={g:function(){var a=[[U.xo,"SUM"],[U.to,"MIN"],[U.ro,"MAX"],[U.qo,"AVERAGE"],[U.so,"MEDIAN"],[U.uo,"MODE"],[U.wo,"STD_DEV"],[U.vo,"RANDOM"]],b=this;this.p=U.po;this.k(230);I(this,!0,"Number");a=new T(a,function(a){"MODE"==a?b.H.s("Array"):b.H.s("Number")});M(O(this,"LIST").s("Array"),a,"OP");this.i(function(){var a=N(b,"OP");return{SUM:U.Fo,MIN:U.Bo,MAX:U.zo,AVERAGE:U.yo,MEDIAN:U.Ao,MODE:U.Co,STD_DEV:U.Eo,RANDOM:U.Do}[a]})}};
H.math_modulo={g:function(){this.p=U.jo;this.k(230);I(this,!0,"Number");this.ta(U.ko,["DIVIDEND","Number",1],["DIVISOR","Number",1],1);A(this,!0);this.i(U.lo)}};H.math_constrain={g:function(){this.p=U.Wn;this.k(230);I(this,!0,"Number");this.ta(U.Xn,["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);A(this,!0);this.i(U.Yn)}};H.math_random_int={g:function(){this.p=U.Ko;this.k(230);I(this,!0,"Number");this.ta(U.Lo,["FROM","Number",1],["TO","Number",1],1);A(this,!0);this.i(U.Mo)}};
H.math_random_float={g:function(){this.p=U.Ho;this.k(230);I(this,!0,"Number");M(P(this),U.Io);this.i(U.Jo)}};var Bm,X,Cm=new Gl("http://www.gstatic.com/codesite/ph/images/star_on.gif",15,15,"*");H.shirt={g:function(){this.k(160);M(this,Cm);J(this,!0);L(this,!0);this.i("Add a new shirt")}};H.movie_circle={g:function(){this.k(160);M(M(Ue(O(this,"X").s("Number"),1),W("Movie_circleDraw")),W("Movie_x"));M(Ue(O(this,"Y").s("Number"),1),W("Movie_y"));J(this,!0);L(this,!0);this.i(W("Movie_circleTooltip"))}};
R.movie_circle=function(a){var b=S(a,"X",R.D)||"0",c=S(a,"Y",R.D)||"0";a=S(a,"RADIUS",R.D)||"5";return"circle("+b+", "+c+", "+a+");\n"};H.movie_rect={g:function(){this.k(160);M(M(Ue(O(this,"X").s("Number"),1),W("Movie_rectDraw")),W("Movie_x"));M(Ue(O(this,"Y").s("Number"),1),W("Movie_y"));M(Ue(O(this,"WIDTH").s("Number"),1),W("Movie_width"));M(Ue(O(this,"HEIGHT").s("Number"),1),W("Movie_height"));J(this,!0);L(this,!0);this.i(W("Movie_rectTooltip"))}};
R.movie_rect=function(a){var b=S(a,"X",R.D)||"0",c=S(a,"Y",R.D)||"0",d=S(a,"WIDTH",R.D)||"0";a=S(a,"HEIGHT",R.D)||"0";return"rect("+b+", "+c+", "+d+", "+a+");\n"};H.movie_line={g:function(){this.k(160);M(M(Ue(O(this,"X1").s("Number"),1),W("Movie_lineDraw")),W("Movie_x1"));M(Ue(O(this,"Y1").s("Number"),1),W("Movie_y1"));M(Ue(O(this,"X2").s("Number"),1),W("Movie_x2"));M(Ue(O(this,"Y2").s("Number"),1),W("Movie_y2"));M(Ue(O(this,"WIDTH").s("Number"),1),W("Movie_width"));J(this,!0);L(this,!0);this.i(W("Movie_rectTooltip"))}};
R.movie_line=function(a){var b=S(a,"X1",R.D)||"0",c=S(a,"Y1",R.D)||"0",d=S(a,"X2",R.D)||"0",e=S(a,"Y2",R.D)||"0";a=S(a,"WIDTH",R.D)||"0";return"line("+b+", "+c+", "+d+", "+e+", "+a+");\n"};H.movie_time={g:function(){this.k(330);M(P(this),"time (0\u2192100)");I(this,!0,"Number");this.i(W("Movie_timeTooltip"))}};R.movie_time=function(){return["time()",R.Lb]};H.movie_colour={g:function(){this.k(20);M(O(this,"COLOUR").s("Colour"),W("Movie_setColour"));J(this,!0);L(this,!0);this.i(W("Movie_colourTooltip"))}};
R.movie_colour=function(a){return"penColour("+(S(a,"COLOUR",R.D)||"'#000000'")+");\n"};function Dm(a){switch(V){case 1:Em("#ff0000");Fm(50,80,10);Em("#3333ff");Gm(50,40,20,60);Em("#000000");Hm(20,70,50,50,5);Hm(50,50,80,70,5);break;case 2:Em("#ff0000");Fm(a,50,10);break;case 3:Em("#ff0000");Fm(100-a,50,10);break;case 4:Em("#009900");Fm(a,50,20);Fm(100-a,50,20);Fm(50,100-a,20);Fm(50,a,20);break;case 5:Fm(30,a+20,10);Fm(50,a,20);Fm(70,a+20,10);break;case 6:Hm(100-a,100,a,a,1);Hm(a,a,100-a,0,1);break;case 7:Em("#009900");Fm(a,100-Math.pow((a-50)/5,2),10);break;case 8:50>a?(Em("#ff0000"),
Fm(a,a,10),Em("#3333ff"),Fm(100-a,100-a,10)):(Em("#009900"),Fm(50,50,10));break;case 9:Em("#999999"),Hm(0,40,20,40,1),Hm(20,40,20,80,1),Hm(20,80,80,20,1),Em("#009900"),20>a?Fm(a,40,10):40>a?Fm(20,2*a,10):Fm(a-20,120-a,10)}}function Im(){if(10==V)return 1<G.cb().length;for(var a=0;a<=Jm;a++){if(void 0===Km[a])return!1;if(100<Km[a])return console.log("Pixel errors (frame "+a+"): "+Km[a]),!1}return!0};U.wu={};U.el="Add Comment";U.fl="Please authorize this app to enable your work to be saved and to allow it to be shared by you.";U.gl="Change value:";U.hl="Chat with your collaborator by typing in this box!";U.il="Collapse Blocks";U.jl="Collapse Block";U.kl="colour 1";U.ll="colour 2";U.ml="http://meyerweb.com/eric/tools/color-blend/";U.nl="ratio";U.ol="blend";U.pl="Blends two colours together with a given ratio (0.0 - 1.0).";U.ql="https://en.wikipedia.org/wiki/Color";U.rl="Choose a colour from the palette.";
U.sl="http://randomcolour.com";U.tl="random colour";U.ul="Choose a colour at random.";U.vl="blue";U.wl="green";U.xl="http://www.december.com/html/spec/colorper.html";U.yl="red";U.zl="colour with";U.Al="Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";U.Bl="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";U.Cl="break out of loop";U.Dl="continue with next iteration of loop";U.El="Break out of the containing loop.";U.Fl="Skip the rest of this loop, and continue with the next iteration.";
U.Gl="Warning: This block may only be used within a loop.";U.Hl="https://github.com/google/blockly/wiki/Loops#for-each for each block";U.Jl="in list";U.xi="";U.Kl="for each item";U.Ll="For each item in a list, set the variable '%1' to the item, and then do some statements.";U.Ml="https://github.com/google/blockly/wiki/Loops#count-with";U.Ol="from %1 to %2 by %3";U.Pl="count with";U.Ql="Have the variable %1 take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
U.Sl="Add a condition to the if block.";U.Ul="Add a final, catch-all condition to the if block.";U.Vl="https://github.com/google/blockly/wiki/IfElse";U.Xl="Add, remove, or reorder sections to reconfigure this if block.";U.Gg="else";U.Hg="else if";U.Ig="if";U.Yl="If a value is true, then do some statements.";U.Zl="If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";U.$l="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
U.am="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";U.yi="https://en.wikipedia.org/wiki/For_loop";U.vd="do";U.bm="repeat %1 times";U.cm="repeat";U.dm="times";U.zi="Do some statements several times.";U.em="https://github.com/google/blockly/wiki/Loops#repeat";U.gm="repeat until";U.hm="repeat while";U.im="While a value is false, then do some statements.";
U.jm="While a value is true, then do some statements.";U.km="Delete Block";U.lm="Delete %1 Blocks";U.mm="Disable Block";U.nm="Duplicate";U.om="Enable Block";U.pm="Expand Blocks";U.qm="Expand Block";U.rm="External Inputs";U.um="Help";U.vm="Inline Inputs";U.xm="https://en.wikipedia.org/wiki/Linked_list#Empty_lists";U.Ci="create empty list";U.ym="Returns a list, of length 0, containing no data records";U.zm="list";U.Am="Add, remove, or reorder sections to reconfigure this list block.";U.Bm="create list with";
U.Dm="Add an item to the list.";U.Em="Create a list with any number of items.";U.Di="first";U.Ei="# from end";U.Fi="#";U.Fm="get";U.Gm="get and remove";U.Gi="last";U.Hi="random";U.Jm="remove";U.Lg="";U.ht="Returns the first item in a list.";U.it="Returns the item at the specified position in a list. #1 is the last item.";U.jt="Returns the item at the specified position in a list. #1 is the first item.";U.kt="Returns the last item in a list.";U.lt="Returns a random item in a list.";U.mt="Removes and returns the first item in a list.";
U.nt="Removes and returns the item at the specified position in a list. #1 is the last item.";U.ot="Removes and returns the item at the specified position in a list. #1 is the first item.";U.pt="Removes and returns the last item in a list.";U.qt="Removes and returns a random item in a list.";U.rt="Removes the first item in a list.";U.st="Removes the item at the specified position in a list. #1 is the last item.";U.tt="Removes the item at the specified position in a list. #1 is the first item.";
U.ut="Removes the last item in a list.";U.vt="Removes a random item in a list.";U.wt="to # from end";U.xt="to #";U.yt="to last";U.Km="https://github.com/google/blockly/wiki/Lists#getting-a-sublist";U.zt="get sub-list from first";U.At="get sub-list from # from end";U.Bt="get sub-list from #";U.Mg="";U.Mm="Creates a copy of the specified portion of a list.";U.Nm="find first occurrence of item";U.Ii="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";U.Pm="find last occurrence of item";
U.Qm="Returns the index of the first/last occurrence of the item in the list. Returns 0 if text is not found.";U.gf="in list";U.Rm="https://github.com/google/blockly/wiki/Lists#is-empty";U.Sm="%1 is empty";U.Tm="https://github.com/google/blockly/wiki/Lists#length-of";U.Um="length of %1";U.Vm="Returns the length of a list.";U.Wm="https://github.com/google/blockly/wiki/Lists#create-list-with";U.Xm="create list with item %1 repeated %2 times";U.Ym="Creates a list consisting of the given value repeated the specified number of times.";
U.Zm="https://github.com/google/blockly/wiki/Lists#in-list--set";U.an="as";U.bn="insert at";U.cn="set";U.Dt="Inserts the item at the start of a list.";U.Et="Inserts the item at the specified position in a list. #1 is the last item.";U.Ft="Inserts the item at the specified position in a list. #1 is the first item.";U.Gt="Append the item to the end of a list.";U.Ht="Inserts the item randomly in a list.";U.It="Sets the first item in a list.";U.Jt="Sets the item at the specified position in a list. #1 is the last item.";
U.Kt="Sets the item at the specified position in a list. #1 is the first item.";U.Lt="Sets the last item in a list.";U.Mt="Sets a random item in a list.";U.dn="Returns true if the list is empty.";U.fn="false";U.gn="https://github.com/google/blockly/wiki/Logic#values";U.hn="Returns either true or false.";U.jn="true";U.kn="https://en.wikipedia.org/wiki/Inequality_(mathematics)";U.ln="Return true if both inputs equal each other.";U.mn="Return true if the first input is greater than the second input.";
U.nn="Return true if the first input is greater than or equal to the second input.";U.on="Return true if the first input is smaller than the second input.";U.pn="Return true if the first input is smaller than or equal to the second input.";U.qn="Return true if both inputs are not equal to each other.";U.rn="https://github.com/google/blockly/wiki/Logic#not";U.sn="not %1";U.tn="Returns true if the input is false. Returns false if the input is true.";U.un="null";U.vn="https://en.wikipedia.org/wiki/Nullable_type";
U.wn="Returns null.";U.xn="and";U.yn="https://github.com/google/blockly/wiki/Logic#logical-operations";U.zn="or";U.An="Return true if both inputs are true.";U.Bn="Return true if at least one of the inputs is true.";U.Cn="test";U.Dn="https://en.wikipedia.org/wiki/%3F:";U.En="if false";U.Fn="if true";U.Gn="Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";U.In="+";U.Jn="https://en.wikipedia.org/wiki/Arithmetic";U.Kn="Return the sum of the two numbers.";
U.Ln="Return the quotient of the two numbers.";U.Mn="Return the difference of the two numbers.";U.Nn="Return the product of the two numbers.";U.On="Return the first number raised to the power of the second number.";U.Pn="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";U.Qn="by";U.Rn="change";U.Tn="Add a number to variable '%1'.";U.Un="https://en.wikipedia.org/wiki/Mathematical_constant";U.Vn="Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
U.Wn="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";U.Xn="constrain %1 low %2 high %3";U.Yn="Constrain a number to be between the specified limits (inclusive).";U.Zn="\u00f7";U.$n="is divisible by";U.ao="is even";U.bo="is negative";U.co="is odd";U.eo="is positive";U.fo="is prime";U.ho="Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";U.io="is whole";U.jo="https://en.wikipedia.org/wiki/Modulo_operation";
U.ko="remainder of %1 \u00f7 %2";U.lo="Return the remainder from dividing the two numbers.";U.mo="\u00d7";U.no="https://en.wikipedia.org/wiki/Number";U.oo="A number.";U.po="";U.qo="average of list";U.ro="max of list";U.so="median of list";U.to="min of list";U.uo="modes of list";U.vo="random item of list";U.wo="standard deviation of list";U.xo="sum of list";U.yo="Return the average (arithmetic mean) of the numeric values in the list.";U.zo="Return the largest number in the list.";U.Ao="Return the median number in the list.";
U.Bo="Return the smallest number in the list.";U.Co="Return a list of the most common item(s) in the list.";U.Do="Return a random element from the list.";U.Eo="Return the standard deviation of the list.";U.Fo="Return the sum of all the numbers in the list.";U.Go="^";U.Ho="https://en.wikipedia.org/wiki/Random_number_generation";U.Io="random fraction";U.Jo="Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";U.Ko="https://en.wikipedia.org/wiki/Random_number_generation";U.Lo="random integer from %1 to %2";
U.Mo="Return a random integer between the two specified limits, inclusive.";U.No="https://en.wikipedia.org/wiki/Rounding";U.Oo="round";U.Po="round down";U.Qo="round up";U.Ro="Round a number up or down.";U.So="https://en.wikipedia.org/wiki/Square_root";U.To="absolute";U.Uo="square root";U.Vo="Return the absolute value of a number.";U.Wo="Return e to the power of a number.";U.Xo="Return the natural logarithm of a number.";U.Yo="Return the base 10 logarithm of a number.";U.Zo="Return the negation of a number.";
U.$o="Return 10 to the power of a number.";U.ap="Return the square root of a number.";U.bp="-";U.cp="acos";U.dp="asin";U.ep="atan";U.fp="cos";U.gp="https://en.wikipedia.org/wiki/Trigonometric_functions";U.hp="sin";U.ip="tan";U.jp="Return the arccosine of a number.";U.kp="Return the arcsine of a number.";U.lp="Return the arctangent of a number.";U.mp="Return the cosine of a degree (not radian).";U.np="Return the sine of a degree (not radian).";U.op="Return the tangent of a degree (not radian).";
U.pp="Me";U.Ki="New variable...";U.qp="New variable name:";U.Tb="";U.wp="allow statements";U.xp="with:";U.Mi="";U.yp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";U.Ni="Run the user-defined function '%1'.";U.Ap="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";U.Oi="Run the user-defined function '%1' and use its output.";U.Pi="with:";U.Bp="Create '%1'";U.Qi="";U.Cp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";U.Ri="do something";U.Si="to";
U.Dp="Creates a function with no output.";U.Ep="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";U.ke="return";U.Hp="Creates a function with an output.";U.Ip="Warning: This function has duplicate parameters.";U.Jp="Highlight function definition";U.Kp="If a value is true, then return a second value.";U.Lp="Warning: This block may be used only within a function definition.";U.Mp="input name:";U.Np="Add an input to the function.";U.Op="inputs";U.Pp="Add, remove, or reorder inputs to this function.";
U.Qp="Remove Comment";U.Ti="Rename variable...";U.Rp="Rename all '%1' variables to:";U.Yp="append text";U.Zp="https://github.com/google/blockly/wiki/Text#text-modification";U.$p="to";U.aq="Append some text to variable '%1'.";U.cq="https://github.com/google/blockly/wiki/Text#adjusting-text-case";U.dq="to lower case";U.eq="to Title Case";U.fq="to UPPER CASE";U.gq="Return a copy of the text in a different case.";U.hq="get first letter";U.iq="get letter # from end";U.jq="get letter #";U.kq="https://github.com/google/blockly/wiki/Text#extracting-text";
U.lq="in text";U.mq="get last letter";U.nq="get random letter";U.Ui="";U.oq="Returns the letter at the specified position.";U.qq="Add an item to the text.";U.rq="join";U.sq="Add, remove, or reorder sections to reconfigure this text block.";U.du="to letter # from end";U.eu="to letter #";U.fu="to last letter";U.tq="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";U.uq="in text";U.gu="get substring from first letter";U.hu="get substring from letter # from end";U.iu="get substring from letter #";
U.nf="";U.vq="Returns a specified portion of the text.";U.wq="https://github.com/google/blockly/wiki/Text#finding-text";U.xq="in text";U.yq="find first occurrence of text";U.zq="find last occurrence of text";U.Vi="";U.Aq="Returns the index of the first/last occurrence of first text in the second text. Returns 0 if text is not found.";U.Bq="https://github.com/google/blockly/wiki/Text#checking-for-empty-text";U.Cq="%1 is empty";U.Dq="Returns true if the provided text is empty.";U.Eq="https://github.com/google/blockly/wiki/Text#text-creation";
U.Fq="create text with";U.Gq="Create a piece of text by joining together any number of items.";U.Hq="https://github.com/google/blockly/wiki/Text#text-modification";U.Iq="length of %1";U.Jq="Returns the number of letters (including spaces) in the provided text.";U.Kq="https://github.com/google/blockly/wiki/Text#printing-text";U.Lq="print %1";U.Mq="Print the specified text, number or other value.";U.Wi="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";U.Xi="Prompt for user for a number.";
U.Yi="Prompt for user for some text.";U.Zi="prompt for number with message";U.$i="prompt for text with message";U.Nq="https://en.wikipedia.org/wiki/String_(computer_science)";U.Oq="A letter, word, or line of text.";U.Pq="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";U.Qq="trim spaces from both sides of";U.Rq="trim spaces from left side of";U.Sq="trim spaces from right side of";U.Tq="Return a copy of the text with spaces removed from one or both ends.";U.zd="item";U.Vq="Create 'set %1'";
U.Wq="https://github.com/google/blockly/wiki/Variables#get";U.Yq="";U.Zq="";U.$q="Returns the value of this variable.";U.Pg="Create 'get %1'";U.ar="https://github.com/google/blockly/wiki/Variables#set";U.cr="to";U.dr="set";U.er="Sets this variable to be equal to the input.";U.Gp=U.Si;U.Lm=U.gf;U.$m=U.gf;U.Fp=U.Ri;U.br=U.zd;U.Cm=U.zd;U.Sn=U.zd;U.Xq=U.zd;U.cu=U.Qi;U.Hm=U.Ii;U.pq=U.zd;U.Jg=U.vd;U.Om=U.gf;U.zp=U.Mi;U.Im=U.gf;U.Nl=U.vd;U.Il=U.vd;U.Wl=U.Ig;U.fm=U.vd;U.Rl=U.Hg;U.bq=U.zd;U.Tl=U.Gg;var Y={Hd:null,g:function(){wm();var a=document.getElementById("linkButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=W("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=W("Games_linkAlert"),BlocklyStorage.HASH_ERROR=W("Games_hashError"),BlocklyStorage.XML_ERROR=W("Games_xmlError"),BlocklyStorage.alert=om.Xs,a&&Am(a,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",Y.pr,!0)},cs:function(a){document.body.innerHTML=
a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";rl(a,{media:"media/",readOnly:!0,Ju:-1!=qm.indexOf(rm),scrollbars:!1});a=um("xml","");Y.fi("<xml>"+a+"</xml>")},ls:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.ok}catch(d){}c&&delete window.sessionStorage.ok;var e=xm(V),h=b&&xm(V-1);(c=c||e||h||a)&&Y.fi(c)}},fi:function(a){Y.Hd?Y.Hd.setValue(a,
-1):(a=Ec(a),Fc(G,a))},Os:function(){if(void 0!=typeof hc&&window.localStorage){var a=zm+V;if(Y.Hd)var b=Y.Hd.getValue();else b=Ac(G),b=Dc(b);window.localStorage[a]=b}},Rf:function(){window.location=(tm?"index.html":"./")+"?lang="+rm},pr:function(){if(window.sessionStorage){if(Y.Hd)var a=Y.Hd.getValue();else a=Ac(G),a=Dc(a);window.sessionStorage.ok=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+
a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},dk:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Ed(a)},Ys:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},jc:function(a){if("click"==a.type&&"touchend"==Y.jc.Vh&&Y.jc.Uh+2E3>Date.now()||Y.jc.Vh==a.type&&Y.jc.Uh+400>Date.now())return a.preventDefault(),a.stopPropagation(),
!0;Y.jc.Vh=a.type;Y.jc.Uh=Date.now();return!1}};Y.jc.Vh=null;Y.jc.Uh=0;Y.Bu=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
Y.bs=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=Y;Y.setCode=Y.fi;var Z={cd:!1,Oj:null,wf:null,yg:function(a,b,c,d,e,h){function k(){Z.cd&&(m.style.visibility="visible",m.style.zIndex=10,p.style.visibility="hidden")}Z.cd&&Z.lc(!1);bd(!0);Z.cd=!0;Z.Oj=b;Z.wf=h;var m=document.getElementById("dialog");h=document.getElementById("dialogShadow");var p=document.getElementById("dialogBorder"),x;for(x in e)m.style[x]=e[x];d&&(h.style.visibility="visible",h.style.opacity=.3,h.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",m.appendChild(d),Z.jh=C(d,"mousedown",
null,Z.Dr));m.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Z.Zf(b,!1,.2),Z.Zf(m,!0,.8),setTimeout(k,175)):k()},Pj:0,Qj:0,Dr:function(a){Z.mh();if(!Yc(a)){var b=document.getElementById("dialog");Z.Pj=b.offsetLeft-a.clientX;Z.Qj=b.offsetTop-a.clientY;Z.lh=C(document,"mouseup",null,Z.mh);Z.kh=C(document,"mousemove",null,Z.Er);a.stopPropagation()}},Er:function(a){var b=document.getElementById("dialog"),c=Z.Pj+a.clientX;a=Z.Qj+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},mh:function(){Z.lh&&(D(Z.lh),Z.lh=null);Z.kh&&(D(Z.kh),Z.kh=null)},lc:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Z.cd){Z.mh();Z.jh&&(D(Z.jh),Z.jh=null);Z.cd=!1;Z.wf&&Z.wf();Z.wf=null;var c=!1===a?null:Z.Oj;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Z.Zf(a,!1,.8),Z.Zf(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Zf:function(a,b,c){function d(){e.style.width=h.width+"px";e.style.height=h.height+"px";e.style.left=h.x+"px";e.style.top=h.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),h=Z.Kr(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Kr:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=yi(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Xs:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Z.yg(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Z.Uk);Z.Pk()},cj:function(){if(!xm(V))if(Z.cd||0!=qe.vu)setTimeout(Z.cj,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Z.lc,!0);b.addEventListener("touchend",Z.lc,!0);b=document.getElementById("abortOk");b.addEventListener("click",Y.Rf,!0);b.addEventListener("touchend",Y.Rf,
!0);Z.yg(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.bj,!0)});document.body.addEventListener("keydown",Z.bj,!0)}},rr:function(){var a=document.getElementById("dialogDone");if(G){var b=document.getElementById("dialogLinesText");b.textContent="";var c=hf(),c=Y.Ys(c),c=c.split("\n").length;document.getElementById("containerCode").innerHTML="<p>Five new shirts unlocked!</p><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/>";
c=1==c?W("Games_linesOfCode1"):W("Games_linesOfCode2").replace("%1",c);b.appendChild(document.createTextNode(c))}c=10>V?W("Games_nextLevel").replace("%1",V+1):W("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",Z.lc,!0);b.addEventListener("touchend",Z.lc,!0);b=document.getElementById("doneOk");b.addEventListener("click",Y.Mh,!0);b.addEventListener("touchend",Y.Mh,!0);Z.yg(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
Z.sj,!0)});document.body.addEventListener("keydown",Z.sj,!0);document.getElementById("dialogDoneText").textContent=c},Nj:function(a){!Z.cd||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Z.lc(!0),a.stopPropagation(),a.preventDefault())},Pk:function(){document.body.addEventListener("keydown",Z.Nj,!0)},Uk:function(){document.body.removeEventListener("keydown",Z.Nj,!0)},sj:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.lc(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Mh()},
bj:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.lc(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Rf()}};window.BlocklyDialogs=Z;Z.hideDialog=Z.lc;function Lm(a,b){this.Kb=42;this.he=328;this.Bi=11.5;this.Ub=12;this.wa=0;this.mj=b;this.Wg=[];this.zk=[];var c=document.createElementNS(Mm,"text");c.setAttribute("style","font-size: 10pt");c.setAttribute("x",this.he+9);c.setAttribute("y",16);a.appendChild(c);this.da=c;for(var c="#ff3333 #f72f2f #ef2a2a #e72727 #df2222 #d71f1f #cf1a1a".split(" "),d=0;d<c.length;d++){var e=document.createElementNS(Mm,"rect");e.setAttribute("style","fill: "+c[d]);e.setAttribute("x",this.Kb);e.setAttribute("y",8+d);
e.setAttribute("height",1);a.appendChild(e);this.zk[d]=e}e=document.createElementNS(Mm,"rect");e.setAttribute("style","opacity: 0");e.setAttribute("x",this.Kb-this.Ub);e.setAttribute("y",this.Bi-this.Ub);e.setAttribute("width",this.he-this.Kb+2*this.Ub);e.setAttribute("height",2*this.Ub);e.setAttribute("rx",this.Ub);e.setAttribute("ry",this.Ub);a.appendChild(e);c=e;e=document.createElementNS(Mm,"clipPath");e.setAttribute("id","knobClipPath");a.appendChild(e);d=document.createElementNS(Mm,"rect");
d.setAttribute("width","16");d.setAttribute("height","16");d.setAttribute("y","3");e.appendChild(d);this.gs=d;e=document.createElementNS(Mm,"image");e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","movie/icons.png");e.setAttribute("clip-path","url(#knobClipPath)");e.setAttribute("width","63");e.setAttribute("height","42");e.setAttribute("y","3");a.appendChild(e);this.jk=e;e=document.createElementNS(Mm,"rect");e.setAttribute("style","opacity: 0");e.setAttribute("width",2*this.Ub);e.setAttribute("height",
2*this.Ub);e.setAttribute("y",this.Bi-this.Ub);a.appendChild(e);this.Gh=e;this.aa(0);e=document.createElementNS(Mm,"clipPath");e.setAttribute("id","playClipPath");a.appendChild(e);d=document.createElementNS(Mm,"rect");d.setAttribute("width","21");d.setAttribute("height","21");d.setAttribute("x","4");d.setAttribute("y","1");e.appendChild(d);e=document.createElementNS(Mm,"image");e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","movie/icons.png");e.setAttribute("clip-path","url(#playClipPath)");
e.setAttribute("width","63");e.setAttribute("height","42");e.setAttribute("x",-17);e.setAttribute("y","-20");a.appendChild(e);for(this.ig=e;a&&"svg"!=a.nodeName.toLowerCase();)a=a.parentNode;this.yd=a;Nm(this.Gh,"mousedown",this,this.ik);Nm(this.Gh,"touchstart",this,this.ik);Nm(c,"mousedown",this,this.Js);Nm(this.yd,"mouseup",null,Om);Nm(this.yd,"touchend",null,Om);Nm(this.yd,"mousemove",null,Pm);Nm(this.yd,"touchmove",null,Pm);Nm(this.ig,"click",this,this.Oe);Nm(this.ig,"touchend",this,this.Oe)}
var Mm="http://www.w3.org/2000/svg",Qm=null,Rm=0,Sm=0;f=Lm.prototype;f.ik=function(a){this.Wd&&this.Oe();if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Tm(a)}Qm=this;Rm=Um(this,a).x;Sm=Number(this.jk.getAttribute("x"))+this.Kb+8;a.preventDefault()};function Om(){Qm=null}function Pm(a){var b=Qm;if(b){if("touchmove"==a.type){if(1!=a.changedTouches.length)return;Tm(a)}a=Um(b,a).x-Rm+Sm;b.aa((a-b.Kb)/(b.he-b.Kb))}}
f.Js=function(a){this.Wd&&this.Oe();if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Tm(a)}a=Um(this,a).x;Vm(this,(a-this.Kb)/(this.he-this.Kb))};f.Wd=0;f.Oe=function(a){a&&Y.jc(a)||(this.Wd?(this.ig.setAttribute("x",-17),clearTimeout(this.Wd),this.Wd=0,Wm()):(this.ig.setAttribute("x",4),1<=this.Aa()&&this.aa(0),Xm(this)))};f.mk=0;f.lk=0;f.sm=25;
function Xm(a){var b=a.Aa();if(1<=b)a.Oe();else{a.aa(b+.01);var b=Date.now(),c=Math.max(1,1E3/a.sm-(b-a.mk-a.lk));a.Wd=setTimeout(function(){Xm(a)},c);a.mk=b;a.lk=c}}f.Aa=function(){return this.wa};function Vm(a,b){function c(c){return function(){a.aa(c*(b-d)/9+d)}}for(;a.Wg.length;)clearTimeout(a.Wg.pop());for(var d=a.Aa(),e=0;10>e;e++)a.Wg.push(setTimeout(c(e),200*e/10))}
f.aa=function(a){this.wa=Math.min(Math.max(a,0),1);a=this.Kb+(this.he-this.Kb)*this.wa;this.gs.setAttribute("x",a-8);this.jk.setAttribute("x",a-42-8);this.Gh.setAttribute("x",a-this.Ub);for(var b=0,c;c=this.zk[b];b++)c.setAttribute("width",a-this.Kb);for(;this.da.firstChild;)this.da.removeChild(this.da.firstChild);a=Math.round(100*this.wa);this.da.appendChild(document.createTextNode("time = "+a));this.mj&&this.mj(a)};
function Um(a,b){var c=a.yd.createSVGPoint();c.x=b.clientX;c.y=b.clientY;var d=a.yd.getScreenCTM().inverse();return c.matrixTransform(d)}function Nm(a,b,c,d){a.addEventListener(b,function(a){d.apply(c,arguments)},!1)}function Tm(a){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY};var Ym={Ku:!0};q&&Eb(8);function Zm(a){return a&&a.tr&&a.tr===Ym?a.content:String(a).replace($m,an)}var bn={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function an(a){return bn[a]}var $m=/[\x00\x22\x26\x27\x3c\x3e]/g;function cn(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function dn(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">width</span><span id="Movie_height">height</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">circle</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">rectangle</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">line</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>'}
function en(){var a=dn()+'<table width="100%"><tr><td><h1>',b;b='<span id="title">'+(tm?'<a href="index.html?lang='+Zm(rm)+'">':'<a href="./?lang='+Zm(rm)+'">')+'<img id="banner" src="index/horizontal-logo-01.png" height="60"  alt="Blockly Games"></a>'+Zm("")+"</span>";return a+b+'</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>'+
(10!=V||tm?"":'<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Open the gallery of movies on Reddit."><img src="media/1x1.gif" class="reddit icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your movie to Reddit."><img src="media/1x1.gif" class="camera icon21"> Submit to Gallery</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="movie-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>')+
('<xml id="toolbox" style="display: none"><category name="Movie"><block type="movie_circle">'+(2!=V?'<value name="X"><block type="math_number"><field name="NUM">50</field></block></value>':"")+'<value name="Y"><block type="math_number"><field name="NUM">50</field></block></value></block><block type="movie_rect"><value name="X"><block type="math_number"><field name="NUM">50</field></block></value><value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_line"><value name="X1"><block type="math_number"><field name="NUM">40</field></block></value><value name="Y1"><block type="math_number"><field name="NUM">40</field></block></value><value name="X2"><block type="math_number"><field name="NUM">60</field></block></value><value name="Y2"><block type="math_number"><field name="NUM">60</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block>'+
(1<V?'<block type="movie_time"></block>':"")+'</category><category name="Colour"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block>'+(10==V?'<block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block>':
"")+"</category>"+(7<V?'<category name="Logic"><block type="controls_if">'+(10>V?'<mutation else="1"></mutation>':"")+'</block><block type="logic_compare"></block>'+(10==V?'<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>':"")+"</category>":"")+(10==V?'<category name="Loops"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category>':
"")+'<category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block>'+(10==V?'<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block>':
"")+"</category>"+(10==V?'<category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>':"")+"</xml>")+'<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+cn()+"</div>")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+(1==V?"Use simple shapes to draw this person.":2==V?'This level is a movie. You want a red ball to roll across the screen. Press the play button to see a preview.<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=movie&lang='+Zm(rm)+"&xml=%3Cblock+type%3D%22movie_time%22+x%3D%2215%22+y%3D%2210%22%3E%3C%2Fblock%3E\"></iframe>As the movie plays, the value of the 'time' block counts from 0 to 100. Since you want the horizontal position of the red ball to start at 0 and go to 100 this should be easy.":
3==V?"The 'time' block counts from 0 to 100. But this time you want the horizontal position of the red ball to start at 100 and go to 0. Can you figure out a simple mathematical formula that flips the direction?":4==V?"Use what you learned in the previous level to make four green balls that move in all four directions.":5==V?"Making the mouse's head move is easy. Can you work out the math to make the ears move too?":6==V?"Two simple lines. Just figure out what the line ends are doing.":7==V?'The mathematical formula for this falling ball is complicated. Here\'s the answer:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>':
8==V?"Use the 'if' block to draw red and blue balls for the first half of the movie. Then draw a green ball for the second half of the movie.":9==V?"Can you make a ball that follows the wire? The wire has already been drawn for you. Once you can do this, you can do anything.":10==V?"Make a movie of anything you want. You've got a huge number of new blocks you can explore. Have fun!"+(tm?"":'<br><br>Use the "See Gallery" button to see movies that other people have made. If you make an interesting movie, use the "Submit to Gallery" button to publish it.'):
"")+"</div>"+cn()+"</div>"};var zm="movie";Y.Mh=function(){10>V?window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"?lang="+rm+"&level="+(V+1):Y.Rf()};var Jm=1==V?0:100,Km=Array(Jm),fn=!1,gn=0;
function hn(){function a(){c.style.top=Math.max(10,d.offsetTop-window.pageYOffset)+"px";c.style.left=b?"10px":"420px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=en();Y.g();var b=-1!=qm.indexOf(rm),c=document.getElementById("blockly"),d=document.getElementById("visualization");window.addEventListener("scroll",function(){a();dd(window,"resize")});window.addEventListener("resize",a);a();10>V&&(dl=3,cl="#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));
var e=document.getElementById("toolbox");rl(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:e,trashcan:!0});nf("circle,rect,line,penColour,time");document.getElementById("submitButton")&&Am("submitButton",jn);e="<xml></xml>";9==V&&(e='<xml xmlns="http://www.w3.org/1999/xhtml">  <block type="movie_colour" inline="false" x="51" y="28">    <value name="COLOUR">      <block type="colour_picker">        <field name="COLOUR">#999999</field>      </block>    </value>    <next>      <block type="movie_line" inline="false">        <value name="X1">          <block type="math_number">            <field name="NUM">0</field>          </block>        </value>        <value name="Y1">          <block type="math_number">            <field name="NUM">40</field>          </block>        </value>        <value name="X2">          <block type="math_number">            <field name="NUM">20</field>          </block>        </value>        <value name="Y2">          <block type="math_number">            <field name="NUM">40</field>          </block>        </value>        <value name="WIDTH">          <block type="math_number">            <field name="NUM">1</field>          </block>        </value>        <next>          <block type="movie_line" inline="false">            <value name="X1">              <block type="math_number">                <field name="NUM">20</field>              </block>            </value>            <value name="Y1">              <block type="math_number">                <field name="NUM">40</field>              </block>            </value>            <value name="X2">              <block type="math_number">                <field name="NUM">20</field>              </block>            </value>            <value name="Y2">              <block type="math_number">                <field name="NUM">80</field>              </block>            </value>            <value name="WIDTH">              <block type="math_number">                <field name="NUM">1</field>              </block>            </value>            <next>              <block type="movie_line" inline="false">                <value name="X1">                  <block type="math_number">                    <field name="NUM">20</field>                  </block>                </value>                <value name="Y1">                  <block type="math_number">                    <field name="NUM">80</field>                  </block>                </value>                <value name="X2">                  <block type="math_number">                    <field name="NUM">80</field>                  </block>                </value>                <value name="Y2">                  <block type="math_number">                    <field name="NUM">20</field>                  </block>                </value>                <value name="WIDTH">                  <block type="math_number">                    <field name="NUM">1</field>                  </block>                </value>              </block>            </next>          </block>        </next>      </block>    </next>  </block></xml>');
Y.ls(e,!1);Bm=document.getElementById("display").getContext("2d");Bm.globalCompositeOperation="source-over";X=document.getElementById("scratch").getContext("2d");kn();ln(0);setTimeout(function(){for(var a=1;a<=Jm;a++)ln(a)},1);mn();nn();yl(nn);e=document.getElementById("scrubber");new Lm(e,nn);1==V&&(e.style.display="none");Dl(["movie/win.mp3","movie/win.ogg"],"win");setTimeout(Y.bs,1);Am("helpButton",on);2>location.hash.length&&!xm(V)&&(setTimeout(on,1E3),9==V&&setTimeout(Z.cj,3E5))}
window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){Y.cs(dn()+'<div id="blockly"></div>')}):window.addEventListener("load",hn);function on(){var a=document.getElementById("help"),b=document.getElementById("helpButton");Z.yg(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},pn);Z.Pk()}function pn(){Z.Uk()}
function ln(a){var b=document.getElementById("visualization"),c=document.createElement("canvas");c.id="answer"+a;c.width=400;c.height=400;c.style.display="none";b.appendChild(c);var d=c.getContext("2d"),e=new Image;e.onload=function(){d.drawImage(e,0,0,400,400)};e.src="./movie/superhero.jpg";X.canvas.width=X.canvas.width;Dm(a);d=c.getContext("2d");d.globalCompositeOperation="copy";d.drawImage(X.canvas,0,0)}
function kn(){var a=document.getElementById("hatching").getContext("2d");a.strokeStyle="#fff";a.lineWidth=1;for(var b=-400;400>b;b+=4)a.beginPath(),a.moveTo(b,-b),a.lineTo(b+400,-b+400),a.stroke()}
function mn(){var a=document.getElementById("axies").getContext("2d");a.lineWidth=1;a.strokeStyle="#bba";a.fillStyle="#bba";a.font="normal 14px sans-serif";for(var b=1,c=.1;.9>c;c+=.1)a.beginPath(),a.moveTo(400*c,400),a.lineTo(400*c,400-9*b),a.stroke(),a.beginPath(),a.moveTo(0,400*c),a.lineTo(9*b,400*c),a.stroke(),2==b&&(a.fillText(Math.round(100*c),400*c+2,396),a.fillText(Math.round(100-100*c),3,400*c-2)),b=1==b?2:1}
function qn(a){X.canvas.width=X.canvas.width;X.strokeStyle="#000";X.fillStyle="#000";X.globalAlpha=10==V?1:.9;for(var b=!0,c=0;b&&1E4>c;c++)try{b=a.step()}catch(d){alert(d),b=!1}}
function nn(a){"number"==typeof a?gn=a:a=gn;Bm.beginPath();Bm.rect(0,0,Bm.canvas.width,Bm.canvas.height);Bm.fillStyle="#ffffff";Bm.fill();if(a=document.getElementById("answer"+a))Bm.globalAlpha=.2,Bm.drawImage(a,0,0),Bm.globalAlpha=1;a=document.getElementById("hatching");Bm.drawImage(a,0,0);a=hf();a=new Interpreter(a,rn);qn(a);Bm.drawImage(X.canvas,0,0);Bm.drawImage(document.getElementById("axies"),0,0);a=X.getImageData(0,0,400,400);var b=document.getElementById("answer"+gn);if(b){for(var b=b.getContext("2d").getImageData(0,
0,400,400),c=Math.min(a.data.length,b.data.length),d=0,e=3;e<c;e+=4)64<Math.abs(a.data[e]-b.data[e])&&d++;Km[gn]=d}1==V&&setTimeout(Wm,1E3)}
function rn(a,b){var c;c=function(a,b,c){Fm(a.valueOf(),b.valueOf(),c.valueOf())};a.setProperty(b,"circle",a.createNativeFunction(c));c=function(a,b,c,k){Gm(a.valueOf(),b.valueOf(),c.valueOf(),k.valueOf())};a.setProperty(b,"rect",a.createNativeFunction(c));c=function(a,b,c,k,m){Hm(a.valueOf(),b.valueOf(),c.valueOf(),k.valueOf(),m.valueOf())};a.setProperty(b,"line",a.createNativeFunction(c));c=function(a){Em(a.toString())};a.setProperty(b,"penColour",a.createNativeFunction(c));a.setProperty(b,"time",
a.createNativeFunction(function(){return a.createPrimitive(gn)}))}function Fm(a,b,c){a*=4;b=4*(100-b);c=Math.max(4*c,0);X.beginPath();X.arc(a,b,c,0,2*Math.PI,!1);X.fill()}function Gm(a,b,c,d){a*=4;b=4*(100-b);c=Math.max(4*c,0);d=Math.max(4*d,0);X.beginPath();X.rect(a-c/2,b-d/2,c,d);X.fill()}function Hm(a,b,c,d,e){a*=4;b=4*(100-b);c*=4;d=4*(100-d);e*=4;X.beginPath();X.moveTo(a,b);X.lineTo(c,d);X.lineWidth=Math.max(e,0);X.stroke()}function Em(a){X.strokeStyle=a;X.fillStyle=a}
function Wm(){1<V&&gn!=Jm||!Im()||fn||(fn=!0,Y.Os(),10>V&&(uk("win",.5),Z.rr()))}
function jn(){var a=G.cb().length,b=hf();if(5>a||-1==b.indexOf("time()"))alert(W("Movie_submitDisabled"));else{b=hf();a=new Interpreter(b,rn);b=gn;try{gn=Math.round(Jm/2),qn(a)}finally{gn=b}a=document.getElementById("thumbnail");b=a.getContext("2d");b.globalCompositeOperation="copy";b.drawImage(X.canvas,0,0,100,100);a=a.toDataURL("image/png");document.getElementById("t2r_thumb").value=a;a=Ac(G);a=Dc(a);document.getElementById("t2r_xml").value=a;document.getElementById("t2r_form").submit()}};
