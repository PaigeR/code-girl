// Automatically generated file.  Do not edit!
'use strict';var e=this;
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){var b=l;function c(){}c.prototype=b.prototype;a.s=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.j=function(a,c,g){for(var r=Array(arguments.length-2),m=2;m<arguments.length;m++)r[m-2]=arguments[m];return b.prototype[c].apply(a,r)}};var n=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function t(a,b){return a<b?-1:a>b?1:0};var u=Array.prototype,v=u.indexOf?function(a,b,c){return u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function w(a,b,c){return 2>=arguments.length?u.slice.call(a,b):u.slice.call(a,b,c)};function x(a){var b=arguments.length;if(1==b&&"array"==h(arguments[0]))return x.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};x("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));x("action","cite","data","formaction","href","manifest","poster","src");x("embed","iframe","link","object","script","style","template");var y={o:!0};function l(){throw Error("Do not instantiate directly");}l.prototype.toString=function(){return this.content};var z;a:{var A=e.navigator;if(A){var B=A.userAgent;if(B){z=B;break a}}z=""};var aa=-1!=z.indexOf("Opera")||-1!=z.indexOf("OPR"),C=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"),D=-1!=z.indexOf("Gecko")&&-1==z.toLowerCase().indexOf("webkit")&&!(-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE")),ba=-1!=z.toLowerCase().indexOf("webkit");function E(){var a=e.document;return a?a.documentMode:void 0}
var F=function(){var a="",b;if(aa&&e.opera)return a=e.opera.version,"function"==h(a)?a():a;D?b=/rv\:([^\);]+)(\)|;)/:C?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ba&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(z))?a[1]:"");return C&&(b=E(),b>parseFloat(a))?String(b):a}(),G={};
function H(a){if(!G[a]){for(var b=0,c=n(String(F)).split("."),d=n(String(a)).split("."),f=Math.max(c.length,d.length),g=0;0==b&&g<f;g++){var r=c[g]||"",m=d[g]||"",ca=/(\d*)(\D*)/g,da=/(\d*)(\D*)/g;do{var p=ca.exec(r)||["","",""],q=da.exec(m)||["","",""];if(0==p[0].length&&0==q[0].length)break;b=t(0==p[1].length?0:parseInt(p[1],10),0==q[1].length?0:parseInt(q[1],10))||t(0==p[2].length,0==q[2].length)||t(p[2],q[2])}while(0==b)}G[a]=0<=b}}
var I=e.document,ea=I&&C?E()||("CSS1Compat"==I.compatMode?parseInt(F,10):5):void 0;var J;if(!(J=!D&&!C)){var K;if(K=C)K=C&&9<=ea;J=K}J||D&&H("1.9.1");C&&H("9");C&&H(8);function L(){l.call(this)}k(L);L.prototype.g=y;function M(){l.call(this)}k(M);M.prototype.g={n:!0};function N(){l.call(this)}k(N);N.prototype.g={}.h;function O(){l.call(this)}k(O);O.prototype.g={p:!0};function P(){l.call(this)}k(P);P.prototype.g={m:!0};function Q(){l.call(this)}k(Q);Q.prototype.g={k:!0};function R(){var a=S;return a&&a.g&&a.g===y?a.content:String(a).replace(fa,ga)}
var ha={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ga(a){return ha[a]}var fa=/[\x00\x22\x26\x27\x3c\x3e]/g;function ia(a,b){var c;c=a.className;for(var d=c="string"==typeof c&&c.match(/\S+/g)||[],f=w(arguments,1),g=0;g<f.length;g++)0<=v(d,f[g])||d.push(f[g]);a.className=c.join(" ")};var ja={},ka={en:"English"},la=[],S=window.BlocklyGamesLang,T=window.BlocklyGamesLanguages,U=!!window.location.pathname.match(/\.html$/),ma=Number,V,W=window.location.search.match(/[?&]level=([^&]+)/);V=W?decodeURIComponent(W[1].replace(/\+/g,"%20")):"NaN";var X=ma(V);isNaN(X)||Math.min(Math.max(1,X),10);
function na(){document.head.parentElement.setAttribute("dir",-1!=la.indexOf(S)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",S);for(var a=[],b=0;b<T.length;b++){var c=T[b];a.push([ka[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var f=a[b],c=f[1],f=new Option(f[0],c);c==S&&(f.selected=!0);d.options.add(f)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=1;10>=
b;b++)a=document.getElementById("level"+b),c=!!Y(ja.i,b),a&&c&&ia(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(oa,1)}function Y(a,b){var c;try{c=window.localStorage[a+b]}catch(d){}return c}
function oa(){if(!U){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var Z=["puzzle","turtle","movie"];
window.addEventListener("load",function(){var a=document.body,b;b='<div style="display: none"><span id="title">Code Girl</span><span id="Index_clear">Delete all your solutions?</span></div><div id="header"><img id="banner" src="index/horizontal-logo-01.png" height="200"  alt="Blockly Games"><div id="subtitle">An educational, computer science designed specifically for young girls.  &nbsp;'+(U?'<a href="about.html?lang='+R()+'">':'<a href="about?lang='+R()+'">')+'</a></div></div><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">Want to start over?<button class="secondary" id="clearData">Clear data</span></button></p><div id="login"><FORM><INPUT Type="BUTTON" VALUE="Login or Sign Up" ONCLICK="window.location.href=\'/login\'"></FORM></div>';a.innerHTML=
b;na();a=!1;b=[];for(var c=0;c<Z.length;c++){b[c]=0;for(var d=1;10>=d;d++)Y(Z[c],d)&&(a=!0,b[c]++)}a&&(document.getElementById("clearDataPara").style.visibility="visible",a=document.getElementById("clearData"),b=pa,"string"==typeof a&&(a=document.getElementById(a)),a.addEventListener("click",b,!0),a.addEventListener("touchend",b,!0))},!1);
function pa(){var a=confirm,b;(b=document.getElementById("Index_clear"))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;if(a(null===b?"[Unknown message: Index_clear]":b)){for(a=0;a<Z.length;a++)for(b=1;10>=b;b++)delete window.localStorage[Z[a]+b];location.reload()}};
