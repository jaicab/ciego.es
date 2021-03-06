/*
 * Copyright 2014 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.3 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){var j=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var q=this;function r(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function aa(a,b,c){return a.call.apply(a.bind,arguments)}
function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(l,arguments)}var u=Date.now||function(){return+new Date};function v(a,b){this.G=a;this.v=b||a;this.z=this.v.document}v.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function w(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function x(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var g=m,f=0;f<d.length;f+=1)if(b[e]===d[f]){g=j;break}g||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){g=m;for(f=0;f<c.length;f+=1)if(d[e]===c[f]){g=j;break}g||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ca(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return m}
function y(a){var b=a.v.location.protocol;"about:"==b&&(b=a.G.location.protocol);return"https:"==b?"https:":"http:"}function da(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=m;c.onload=function(){d||(d=j)};c.onerror=function(){d||(d=j)};w(a,"head",c)}
function z(a,b,c,d){var e=a.z.getElementsByTagName("head")[0];if(e){var g=a.createElement("script",{src:b}),f=m;g.onload=g.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(l),g.onload=g.onreadystatechange=l,"HEAD"==g.parentNode.tagName&&e.removeChild(g)};e.appendChild(g);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},d||5E3);return g}return l};function A(a,b,c){this.M=a;this.U=b;this.Aa=c}r("webfont.BrowserInfo",A);A.prototype.pa=n("M");A.prototype.hasWebFontSupport=A.prototype.pa;A.prototype.qa=n("U");A.prototype.hasWebKitFallbackBug=A.prototype.qa;A.prototype.ra=n("Aa");A.prototype.hasWebKitMetricsBug=A.prototype.ra;function B(a,b,c,d){this.d=a!=l?a:l;this.o=b!=l?b:l;this.aa=c!=l?c:l;this.f=d!=l?d:l}var ea=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;B.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")};
function C(a){a=ea.exec(a);var b=l,c=l,d=l,e=l;a&&(a[1]!==l&&a[1]&&(b=parseInt(a[1],10)),a[2]!==l&&a[2]&&(c=parseInt(a[2],10)),a[3]!==l&&a[3]&&(d=parseInt(a[3],10)),a[4]!==l&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,e)};function D(a,b,c,d,e,g,f,h,k,p,s){this.K=a;this.Ga=b;this.za=c;this.fa=d;this.Ea=e;this.ea=g;this.wa=f;this.Fa=h;this.va=k;this.da=p;this.j=s}r("webfont.UserAgent",D);D.prototype.getName=n("K");D.prototype.getName=D.prototype.getName;D.prototype.oa=n("za");D.prototype.getVersion=D.prototype.oa;D.prototype.ka=n("fa");D.prototype.getEngine=D.prototype.ka;D.prototype.la=n("ea");D.prototype.getEngineVersion=D.prototype.la;D.prototype.ma=n("wa");D.prototype.getPlatform=D.prototype.ma;D.prototype.na=n("va");
D.prototype.getPlatformVersion=D.prototype.na;D.prototype.ja=n("da");D.prototype.getDocumentMode=D.prototype.ja;D.prototype.ia=n("j");D.prototype.getBrowserInfo=D.prototype.ia;function E(a,b){this.a=a;this.I=b}var fa=new D("Unknown",new B,"Unknown","Unknown",new B,"Unknown","Unknown",new B,"Unknown",void 0,new A(m,m,m));
E.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=F(this);var b=G(this),c=C(b),d=l,e=l,g=l,f=l,h=H(this.a,/Trident\/([\d\w\.]+)/,1),k=I(this.I),d=-1!=this.a.indexOf("MSIE")?H(this.a,/MSIE ([\d\w\.]+)/,1):H(this.a,/rv:([\d\w\.]+)/,1),e=C(d);""!=h?(g="Trident",f=C(h)):(g="Unknown",f=new B,h="Unknown");a=new D("MSIE",e,d,g,f,h,a,c,b,k,new A("Windows"==a&&6<=e.d||"Windows Phone"==a&&8<=c.d,m,m))}else if(-1!=this.a.indexOf("Opera"))a:if(a="Unknown",b=H(this.a,
/Presto\/([\d\w\.]+)/,1),c=C(b),d=G(this),e=C(d),g=I(this.I),c.d!==l?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=H(this.a,/rv:([^\)]+)/,1),c=C(b)),-1!=this.a.indexOf("Opera Mini/"))f=H(this.a,/Opera Mini\/([\d\.]+)/,1),h=C(f),a=new D("OperaMini",h,f,a,c,b,F(this),e,d,g,new A(m,m,m));else{if(-1!=this.a.indexOf("Version/")&&(f=H(this.a,/Version\/([\d\.]+)/,1),h=C(f),h.d!==l)){a=new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m));break a}f=H(this.a,/Opera[\/ ]([\d\.]+)/,1);h=C(f);a=
h.d!==l?new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m)):new D("Opera",new B,"Unknown",a,c,b,F(this),e,d,g,new A(m,m,m))}else/OPR\/[\d.]+/.test(this.a)?a=ga(this):/AppleWeb(K|k)it/.test(this.a)?a=ga(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new B,c="Unknown",d=G(this),e=C(d),g=m,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=H(this.a,/Firefox\/([\d\w\.]+)/,1),b=C(c),g=3<=b.d&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),f=H(this.a,/rv:([^\)]+)/,1),h=C(f),g||(g=1<h.d||1==h.d&&
9<h.o||1==h.d&&9==h.o&&2<=h.aa||f.match(/1\.9\.1b[123]/)!=l||f.match(/1\.9\.1\.[\d\.]+/)!=l),a=new D(a,b,c,"Gecko",h,f,F(this),e,d,I(this.I),new A(g,m,m))):a=fa;return a};function F(a){var b=H(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=H(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function G(a){var b=H(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=H(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=H(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=H(a.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=H(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function ga(a){var b=F(a),c=G(a),d=C(c),e=H(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=C(e),f="Unknown",h=new B,k="Unknown",p=m;/OPR\/[\d.]+/.test(a.a)?f="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?f="Chrome":/Silk\/\d/.test(a.a)?f="Silk":"BlackBerry"==b||"Android"==b?f="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?f="PhantomJS":-1!=a.a.indexOf("Safari")?f="Safari":-1!=a.a.indexOf("AdobeAIR")&&(f="AdobeAIR");"BuiltinBrowser"==f?k="Unknown":"Silk"==f?k=H(a.a,
/Silk\/([\d\._]+)/,1):"Chrome"==f?k=H(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?k=H(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==f?k=H(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==f?k=H(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==f&&(k=H(a.a,/PhantomJS\/([\d.]+)/,1));h=C(k);p="AdobeAIR"==f?2<h.d||2==h.d&&5<=h.o:"BlackBerry"==b?10<=d.d:"Android"==b?2<d.d||2==d.d&&1<d.o:526<=g.d||525<=g.d&&13<=g.o;return new D(f,h,k,"AppleWebKit",g,e,b,d,c,I(a.I),new A(p,536>g.d||536==g.d&&11>g.o,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function H(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function I(a){if(a.documentMode)return a.documentMode};function ha(a){this.ua=a||"-"}ha.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)};function J(a,b){this.K=a;this.V=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.V=parseInt(c[2],10))}J.prototype.getName=n("K");function K(a){return a.L+a.V}function ia(a){var b=4,c="n",d=l;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ka(a,b,c){this.c=a;this.m=b;this.O=c;this.h="wf";this.g=new ha("-")}function M(a){var b=ca(a.m,a.g.f(a.h,"active")),c=[],d=[a.g.f(a.h,"loading")];b||c.push(a.g.f(a.h,"inactive"));x(a.m,c,d);N(a,"inactive")}function N(a,b,c){if(a.O[b])if(c)a.O[b](c.getName(),K(c));else a.O[b]()};function la(){this.w={}};function O(a,b){this.c=a;this.C=b;this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}
function P(a,b){var c;c=[];for(var d=b.K.split(/,\s*/),e=0;e<d.length;e++){var g=d[e].replace(/['"]/g,"");-1==g.indexOf(" ")?c.push(g):c.push("'"+g+"'")}c=c.join(",");d="normal";e=b.V+"00";"o"===b.L?d="oblique":"i"===b.L&&(d="italic");a.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function Q(a){w(a.c,"body",a.s)}O.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};function ma(a,b,c,d,e,g,f,h){this.W=a;this.sa=b;this.c=c;this.q=d;this.C=h||"BESbswy";this.j=e;this.F={};this.T=g||5E3;this.Z=f||l;this.B=this.A=l;a=new O(this.c,this.C);Q(a);for(var k in R)R.hasOwnProperty(k)&&(P(a,new J(R[k],K(this.q))),this.F[R[k]]=a.s.offsetWidth);a.remove()}var R={Da:"serif",Ca:"sans-serif",Ba:"monospace"};
ma.prototype.start=function(){this.A=new O(this.c,this.C);Q(this.A);this.B=new O(this.c,this.C);Q(this.B);this.xa=u();P(this.A,new J(this.q.getName()+",serif",K(this.q)));P(this.B,new J(this.q.getName()+",sans-serif",K(this.q)));na(this)};function oa(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.F[R[d]]&&c===a.F[R[d]])return j;return m}
function na(a){var b=a.A.s.offsetWidth,c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.j.U&&oa(a,b,c)?u()-a.xa>=a.T?a.j.U&&oa(a,b,c)&&(a.Z===l||a.Z.hasOwnProperty(a.q.getName()))?S(a,a.W):S(a,a.sa):setTimeout(t(function(){na(this)},a),25):S(a,a.W)}function S(a,b){a.A.remove();a.B.remove();b(a.q)};function T(a,b,c,d){this.c=b;this.t=c;this.P=0;this.ba=this.Y=m;this.T=d;this.j=a.j}function pa(a,b,c,d,e){if(0===b.length&&e)M(a.t);else{a.P+=b.length;e&&(a.Y=e);for(e=0;e<b.length;e++){var g=b[e],f=c[g.getName()],h=a.t,k=g;x(h.m,[h.g.f(h.h,k.getName(),K(k).toString(),"loading")]);N(h,"fontloading",k);(new ma(t(a.ga,a),t(a.ha,a),a.c,g,a.j,a.T,d,f)).start()}}}
T.prototype.ga=function(a){var b=this.t;x(b.m,[b.g.f(b.h,a.getName(),K(a).toString(),"active")],[b.g.f(b.h,a.getName(),K(a).toString(),"loading"),b.g.f(b.h,a.getName(),K(a).toString(),"inactive")]);N(b,"fontactive",a);this.ba=j;qa(this)};T.prototype.ha=function(a){var b=this.t,c=ca(b.m,b.g.f(b.h,a.getName(),K(a).toString(),"active")),d=[],e=[b.g.f(b.h,a.getName(),K(a).toString(),"loading")];c||d.push(b.g.f(b.h,a.getName(),K(a).toString(),"inactive"));x(b.m,d,e);N(b,"fontinactive",a);qa(this)};
function qa(a){0==--a.P&&a.Y&&(a.ba?(a=a.t,x(a.m,[a.g.f(a.h,"active")],[a.g.f(a.h,"loading"),a.g.f(a.h,"inactive")]),N(a,"active")):M(a.t))};function U(a){this.G=a;this.u=new la;this.ya=new E(a.navigator.userAgent,a.document);this.a=this.ya.parse();this.Q=this.R=0}
U.prototype.load=function(a){var b=a.context||this.G;this.c=new v(this.G,b);var b=new ka(this.c,b.document.documentElement,a),c=[],d=a.timeout;x(b.m,[b.g.f(b.h,"loading")]);N(b,"loading");var c=this.u,e=this.c,g=[],f;for(f in a)if(a.hasOwnProperty(f)){var h=c.w[f];h&&g.push(h(a[f],e))}c=g;this.Q=this.R=c.length;a=new T(this.a,this.c,b,d);f=0;for(d=c.length;f<d;f++)e=c[f],e.H(this.a,t(this.ta,this,e,b,a))};
U.prototype.ta=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){var k=0==--e.R;setTimeout(function(){pa(c,a,b||{},d||l,k)},0)}):(a=0==--this.R,this.Q--,a&&0==this.Q&&M(b),pa(c,[],{},l,a))};function V(a,b){this.c=a;this.e=b;this.k=[]}V.prototype.D=function(a){return y(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
V.prototype.H=function(a,b){var c=this.e.id,d=this.c.v,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,k=c.fonts.length;d<k;++d){var p=c.fonts[d];e.k.push(new J(p.name,ia("font-weight:"+p.weight+";font-style:"+p.style)))}b(a)},z(this.c,this.D(c),function(a){a&&b(m)})):b(m)};V.prototype.load=function(a){a(this.k)};function W(a,b){this.c=a;this.e=b;this.k=[]}W.prototype.D=function(a){var b=y(this.c);return(this.e.api||b+"//use.typekit.net")+"/"+a+".js"};
W.prototype.H=function(a,b){var c=this.e.id,d=this.e,e=this.c.v,g=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var f=0;f<c.length;f+=1){var e=d[c[f]];if(e)for(var L=0;L<e.length;L+=1)g.k.push(new J(c[f],e[L]));else g.k.push(new J(c[f]))}b(a)})},z(this.c,this.D(c),function(a){a&&b(m)},2E3)):b(m)};W.prototype.load=function(a){a(this.k)};function X(a,b){this.c=a;this.e=b}X.prototype.load=function(a){var b,c,d=this.e.urls||[],e=this.e.families||[],g=this.e.testStrings||{};b=0;for(c=d.length;b<c;b++)da(this.c,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var h=f[1].split(","),k=0;k<h.length;k+=1)d.push(new J(f[0],h[k]));else d.push(new J(f[0]))}a(d,g)};X.prototype.H=function(a,b){return b(a.j.M)};function ra(a,b,c){this.N=a?a:b+sa;this.p=[];this.S=[];this.ca=c||""}var sa="//fonts.googleapis.com/css";ra.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));a=this.N+"?family="+b.join("%7C");0<this.S.length&&(a+="&subset="+this.S.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a};function ta(a){this.p=a;this.$=[];this.J={}}
var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ta.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var g;var f=c[1];g=[];if(f)for(var f=f.split(","),h=f.length,k=0;k<h;k++){var p;p=f[k];if(p.match(/^[\w-]+$/)){p=xa.exec(p.toLowerCase());var s=void 0;if(p==l)s="";else{s=void 0;s=p[1];if(s==l||""==s)s="4";else var ja=va[s],s=ja?ja:isNaN(s)?"4":s.substr(0,1);s=[p[2]==l||""==p[2]?"n":wa[p[2]],s].join("")}p=s}else p="";p&&g.push(p)}0<g.length&&(e=g);3==c.length&&
(c=c[2],g=[],c=!c?g:c.split(","),0<c.length&&(c=ua[c[0]])&&(this.J[d]=c))}this.J[d]||(c=ua[d])&&(this.J[d]=c);for(c=0;c<e.length;c+=1)this.$.push(new J(d,e[c]))}};function Y(a,b){this.a=(new E(navigator.userAgent,document)).parse();this.c=a;this.e=b}var ya={Arimo:j,Cousine:j,Tinos:j};Y.prototype.H=function(a,b){b(a.j.M)};Y.prototype.load=function(a){var b=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=j){var c=t(this.X,this,a),d=function(){b.z.body?c():setTimeout(d,0)};d()}else this.X(a)};
Y.prototype.X=function(a){for(var b=this.c,c=new ra(this.e.api,y(b),this.e.text),d=this.e.families,e=d.length,g=0;g<e;g++){var f=d[g].split(":");3==f.length&&c.S.push(f.pop());var h="";2==f.length&&""!=f[1]&&(h=":");c.p.push(f.join(h))}d=new ta(d);d.parse();da(b,c.f());a(d.$,d.J,ya)};function Z(a,b){this.c=a;this.e=b;this.k=[]}Z.prototype.H=function(a,b){var c=this,d=c.e.projectId,e=c.e.version;if(d){var g=c.c.v;z(this.c,c.D(d,e),function(f){if(f)b(m);else{if(g["__mti_fntLst"+d]&&(f=g["__mti_fntLst"+d]()))for(var e=0;e<f.length;e++)c.k.push(new J(f[e].fontfamily));b(a.j.M)}}).id="__MonotypeAPIScript__"+d}else b(m)};Z.prototype.D=function(a,b){var c=y(this.c),d=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
Z.prototype.load=function(a){a(this.k)};var $=new U(q);$.u.w.custom=function(a,b){return new X(b,a)};$.u.w.fontdeck=function(a,b){return new V(b,a)};$.u.w.monotype=function(a,b){return new Z(b,a)};$.u.w.typekit=function(a,b){return new W(b,a)};$.u.w.google=function(a,b){return new Y(b,a)};q.WebFont||(q.WebFont={},q.WebFont.load=t($.load,$),q.WebFontConfig&&$.load(q.WebFontConfig));})(this,document);



/* **********************************************
     Begin modernizr.js
********************************************** */

/* Modernizr 2.7.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-generatedcontent-csstransitions-inputtypes-geolocation-inlinesvg-svg-shiv-mq-cssclasses-teststyles-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(prefixes.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.geolocation=function(){return"geolocation"in navigator},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* **********************************************
     Begin angular.min.js
********************************************** */

/*
 AngularJS v1.2.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Z,P,s){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.2/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ob(b){if(null==b||za(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:B(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(L(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ob(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Nc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Xa(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function u(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Qb(b,a);return b}function T(b){return parseInt(b,
10)}function Rb(b,a){return u(new (u(function(){},{prototype:b})),a)}function x(){}function Aa(b){return b}function da(b){return function(){return b}}function z(b){return"undefined"==typeof b}function F(b){return"undefined"!=typeof b}function X(b){return null!=b&&"object"==typeof b}function B(b){return"string"==typeof b}function pb(b){return"number"==typeof b}function Ja(b){return"[object Date]"==Ya.apply(b)}function K(b){return"[object Array]"==Ya.apply(b)}function L(b){return"function"==typeof b}
function Za(b){return"[object RegExp]"==Ya.apply(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Oc(b){return b&&(b.nodeName||b.on&&b.find)}function Pc(b,a,c){var d=[];q(b,function(b,h,g){d.push(a.call(c,b,h,g))});return d}function $a(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ka(b,a){var c=$a(b,a);0<=c&&b.splice(c,1);return a}function ga(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw La("cpws");if(a){if(b===
a)throw La("cpi");if(K(b))for(var c=a.length=0;c<b.length;c++)a.push(ga(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ga(b[d]);Qb(a,c)}}else(a=b)&&(K(b)?a=ga(b,[]):Ja(b)?a=new Date(b.getTime()):Za(b)?a=RegExp(b.source):X(b)&&(a=ga(b,{})));return a}function Qc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(Ja(b))return Ja(a)&&b.getTime()==a.getTime();if(Za(b)&&Za(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!L(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!L(a[d]))return!1;return!0}return!1}function Sb(){return P.securityPolicy&&
P.securityPolicy.isActive||P.querySelector&&!(!P.querySelector("[ng-csp]")&&!P.querySelector("[data-ng-csp]"))}function qb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!L(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:za(a)?c="$WINDOW":a&&P===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Rc,a?"  ":null)}function Tb(b){return B(b)?JSON.parse(b):b}function Ma(b){b&&0!==b.length?(b=v(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.html("")}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?v(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+v(b)})}catch(d){return v(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),F(d)&&(b=F(c[1])?Ub(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function rb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Sc(b,a){function c(a){a&&d.push(a)}var d=[b],e,h,g=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(g,function(a){g[a]=!0;c(P.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,h=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,h=b.value)})}});e&&a(e,h?[h]:[])}function Xb(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===P?"document":ha(b);throw La("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(Z&&!d.test(Z.name))return c();Z.name=Z.name.replace(d,"");ab.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function bb(b,a){a=a||"_";return b.replace(Tc,function(b,d){return(d?a:"")+b.toLowerCase()})}function sb(b,a,c){if(!b)throw La("areq",a||"?",c||"required");return b}function Na(b,a,c){c&&K(b)&&(b=b[b.length-1]);sb(L(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw La("badname",
a);}function tb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,h=a.length,g=0;g<h;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&L(b)?qb(e,b):b}function ub(b){if(b.startNode===b.endNode)return y(b.startNode);var a=b.startNode,c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b.endNode);return y(c)}function Uc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,h,g){if("hasOwnProperty"===e)throw c("badname",
"module");h&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!h)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:h,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}function Oa(b){return b.replace(Vc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Wc,"Moz$1")}function vb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,r,p,A;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(r=y(k[l]),m?r.triggerHandler("$destroy"):m=!m,p=0,r=(A=r.children()).length;p<
r;p++)e.push(Ca(A[p]));return h.apply(this,arguments)}var h=Ca.fn[b],h=h.$original||h;e.$original=h;Ca.fn[b]=e}function M(b){if(b instanceof M)return b;if(!(this instanceof M)){if(B(b)&&"<"!=b.charAt(0))throw wb("nosel");return new M(b)}if(B(b)){var a=P.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);xb(this,a.childNodes);y(P.createDocumentFragment()).append(this)}else xb(this,b)}function yb(b){return b.cloneNode(!0)}function Pa(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Pa(b[a])}function $b(b,a,c,d){if(F(d))throw wb("offargs");var e=la(b,"events");la(b,"handle")&&(z(a)?q(e,function(a,c){zb(b,c,a);delete e[c]}):q(a.split(" "),function(a){z(c)?(zb(b,a,e[a]),delete e[a]):Ka(e[a]||[],c)}))}function Zb(b,a){var c=b[cb],d=Qa[c];d&&(a?delete Qa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Qa[c],b[cb]=s))}function la(b,a,c){var d=b[cb],d=Qa[d||-1];if(F(c))d||(b[cb]=d=++Xc,d=Qa[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=la(b,"data"),e=F(c),h=!e&&F(a),g=h&&!X(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(h){if(g)return d&&d[a];u(d,a)}else return d}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function xb(b,a){if(a){a=a.nodeName||!F(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return db(b,"$"+(a||"ngController")+"Controller")}function db(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}
function cc(b,a){var c=eb[a.toLowerCase()];return c&&dc[b.nodeName]&&c}function Yc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||P);if(z(c.defaultPrevented)){var h=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;h.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],
function(a){a.call(b,c)});8>=N?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Da(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=Xa()):c=b;return a+":"+c}function Ra(b){q(b,this.put,this)}function ec(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Zc,""),c=c.match($c),
q(c[1].split(ad),function(b){b.replace(bd,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Na(b[c],"fn"),a=b.slice(0,c)):Na(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(X(b))q(b,Pb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(L(b)||K(b))b=n.instantiate(b);if(!b.$get)throw Sa("pget",a);return l[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(B(a))for(c=Ta(a),b=b.concat(e(c.requires)).concat(c._runBlocks),
d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else L(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Na(a,"module")}catch(l){throw K(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Sa("modulerr",a,l.stack||l.message||l);}}});return b}function h(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Sa("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}finally{m.shift()}}
function d(a,b,e){var f=[],h=ec(a),g,k,m;k=0;for(g=h.length;k<g;k++){m=h[k];if("string"!==typeof m)throw Sa("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],
f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||L(e)?e:c},get:c,annotate:ec,has:function(b){return l.hasOwnProperty(b+f)||a.hasOwnProperty(b)}}}var g={},f="Provider",m=[],k=new Ra,l={$provide:{provider:a(c),factory:a(d),
service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,da(b))}),constant:a(function(a,b){va(a,"constant");l[a]=b;r[a]=b}),decorator:function(a,b){var c=n.get(a+f),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=h(l,function(){throw Sa("unpr",m.join(" <- "));}),r={},p=r.$injector=h(r,function(a){a=n.get(a+f);return p.invoke(a.$get,a)});q(e(b),function(a){p.invoke(a||x)});return p}
function cd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==v(a.nodeName)||(b=a)});return b}function h(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(h)});return h}]}function dd(b,a,c,d){function e(a){try{a.apply(null,
ta.call(arguments,1))}finally{if(A--,0===A)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function h(a,b){(function ia(){q(U,function(a){a()});w=b(ia,a)})()}function g(){t=null;D!=f.url()&&(D=f.url(),q(H,function(a){a(f.url())}))}var f=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,r=b.clearTimeout,p={};f.isMock=!1;var A=0,J=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){A++};f.notifyWhenNoOutstandingRequests=function(a){q(U,function(a){a()});0===A?a():J.push(a)};
var U=[],w;f.addPollFn=function(a){z(w)&&h(100,n);U.push(a);return a};var D=k.href,E=a.find("base"),t=null;f.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(D!=a)return D=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),E.attr("href",E.attr("href"))):(t=a,c?k.replace(a):k.href=a),f}else return t||k.href.replace(/%27/g,"'")};var H=[],R=!1;f.onUrlChange=function(a){if(!R){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else f.addPollFn(g);R=!0}H.push(a);
return a};f.baseHref=function(){var a=E.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var $={},S="",ca=f.baseHref();f.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":B(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==S)for(S=m.cookie,d=S.split("; "),$={},f=0;f<d.length;f++)e=
d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),$[a]===s&&($[a]=unescape(e.substring(h+1))));return $}};f.defer=function(a,b){var c;A++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};f.defer.cancel=function(a){return p[a]?(delete p[a],r(a),e(x),!0):!1}}function ed(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new dd(b,d,a,c)}]}function fd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(r?r==a&&(r=a.n):r=a,h(a.n,a.p),h(a,n),n=a,n.n=null)}
function h(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,f=u({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,r=null;return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!z(b))return a in m||g++,m[a]=b,g>k&&this.remove(r.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==r&&(r=b.n),h(b.n,b.p),delete l[a],delete m[a],g--)},removeAll:function(){m={};g=0;l={};n=r=null},destroy:function(){l=
f=m=null;delete a[b]},info:function(){return u({},f,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function gd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,h=/^\s*(https?|ftp|mailto|tel|file):/,g=/^\s*(https?|ftp|file):|data:image\//,f=/^(on[a-z]+|formaction)$/;this.directive=function k(d,
e){va(d,"directive");B(d)?(sb(e,"directiveFactory"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];q(a[d],function(a,f){try{var h=b.invoke(a);L(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||d;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){c(g)}});return e}])),a[d].push(e)):q(d,Pb(k));return this};this.aHrefSanitizationWhitelist=function(a){return F(a)?
(h=a,this):h};this.imgSrcSanitizationWhitelist=function(a){return F(a)?(g=a,this):g};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate",function(b,l,n,r,p,A,J,U,w,D,E){function t(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=R(a,b,a,c,d,e);return function(b,c,d){sb(b,"scope");var e=c?Ea.clone.call(a):
a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d];1!=g.nodeType&&9!=g.nodeType||e.eq(d).data("$scope",b)}H(e,"ng-scope");c&&c(e,b);f&&f(b,e,e);return e}}function H(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,p,r,A,ea=[];p=0;for(r=c.length;p<r;p++)ea.push(c[p]);A=p=0;for(r=g.length;p<r;A++)k=ea[A],c=g[p++],f=g[p++],l=y(k),c?(c.scope?(n=a.$new(),l.data("$scope",n),H(l,"ng-scope")):n=a,(l=c.transclude)||!e&&b?c(f,
n,k,d,$(a,l||b)):c(f,n,k,s,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,p=0;p<a.length;p++)l=new Db,k=S(a[p],[],l,0===p?d:s,e),k=(f=k.length?wa(k,a[p],l,b,c,null,[],[],f):null)&&f.terminal||!a[p].childNodes||!a[p].childNodes.length?null:R(a[p].childNodes,f?f.transclude:b),g.push(f),g.push(k),n=n||f||k,f=null;return n?h:null}function $(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",qb(c,c.$destroy));return d}}function S(a,b,c,f,h){var g=
c.$attr,k;switch(a.nodeType){case 1:ia(b,ma(Fa(a).toLowerCase()),"E",f,h);var l,n,p;k=a.attributes;for(var r=0,A=k&&k.length;r<A;r++){var J=!1,t=!1;l=k[r];if(!N||8<=N||l.specified){n=l.name;p=ma(n);Eb.test(p)&&(n=bb(p.substr(6),"-"));var D=p.replace(/(Start|End)$/,"");p===D+"Start"&&(J=n,t=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ma(n.toLowerCase());g[p]=n;c[p]=l=ba(N&&"href"==n?decodeURIComponent(a.getAttribute(n,2)):l.value);cc(a,p)&&(c[p]=!0);M(a,b,l,p);ia(b,p,"A",f,h,J,t)}}a=a.className;
if(B(a)&&""!==a)for(;k=e.exec(a);)p=ma(k[2]),ia(b,p,"C",f,h)&&(c[p]=ba(k[3])),a=a.substr(k.index+k[0].length);break;case 3:v(b,a.nodeValue);break;case 8:try{if(k=d.exec(a.nodeValue))p=ma(k[1]),ia(b,p,"M",f,h)&&(c[p]=ba(k[2]))}catch(H){}}b.sort(x);return b}function ca(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function Q(a,
b,c){return function(d,e,f,h,g){e=ca(e[0],b,c);return a(d,e,f,h,g)}}function wa(a,b,c,d,e,f,h,g,k){function p(a,b,c,d){if(a){c&&(a=Q(a,c,d));a.require=G.require;if(R===G||G.$$isolateScope)a=W(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Q(b,c,d));b.require=G.require;if(R===G||G.$$isolateScope)b=W(b,{isolateScope:!0});g.push(b)}}function r(a,b,c){var d,e="data",f=!1;if(B(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+
a+"Controller");if(!d&&!f)throw ja("ctreq",a,x);}else K(a)&&(d=[],q(a,function(a){d.push(r(a,b,c))}));return d}function D(a,d,e,f,k){function p(a,b){var c;2>arguments.length&&(b=a,a=s);ia&&(c=S);return k(a,b,c)}var t,ea,U,E,ca,I,S={},Q;t=b===e?c:Qc(c,new Db(y(e),c.$attr));ea=t.$$element;if(R){var V=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(e);I=d.$new(!0);$&&$===R.$$originalDirective?f.data("$isolateScope",I):f.data("$isolateScopeNoTemplate",I);H(f,"ng-isolate-scope");q(R.scope,function(a,b){var c=a.match(V)||
[],e=c[3]||b,f="?"==c[2],c=c[1],h,g,k;I.$$isolateBindings[b]=c+e;switch(c){case "@":t.$observe(e,function(a){I[b]=a});t.$$observers[e].$$scope=d;t[e]&&(I[b]=l(t[e])(d));break;case "=":if(f&&!t[e])break;g=A(t[e]);k=g.assign||function(){h=I[b]=g(d);throw ja("nonassign",t[e],R.name);};h=I[b]=g(d);I.$watch(function(){var a=g(d);a!==I[b]&&(a!==h?h=I[b]=a:k(d,a=h=I[b]));return a});break;case "&":g=A(t[e]);I[b]=function(a){return g(d,a)};break;default:throw ja("iscp",R.name,b,a);}})}Q=k&&p;w&&q(w,function(a){var b=
{$scope:a===R||a.$$isolateScope?I:d,$element:ea,$attrs:t,$transclude:Q},c;ca=a.controller;"@"==ca&&(ca=t[a.name]);c=J(ca,b);S[a.name]=c;ia||ea.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(U=h.length;f<U;f++)try{E=h[f],E(E.isolateScope?I:d,ea,t,E.require&&r(E.require,ea,S),Q)}catch(hd){n(hd,ha(ea))}f=d;R&&(R.template||null===R.templateUrl)&&(f=I);a&&a(f,e.childNodes,s,k);for(f=g.length-1;0<=f;f--)try{E=g[f],E(E.isolateScope?I:d,ea,t,E.require&&r(E.require,
ea,S),Q)}catch(wa){n(wa,ha(ea))}}k=k||{};var U=-Number.MAX_VALUE,E,w=k.controllerDirectives,R=k.newIsolateScopeDirective,$=k.templateDirective;k=k.nonTlbTranscludeDirective;for(var wa=!1,ia=!1,Y=c.$$element=y(b),G,x,O,v=d,u,C=0,M=a.length;C<M;C++){G=a[C];var N=G.$$start,fb=G.$$end;N&&(Y=ca(b,N,fb));O=s;if(U>G.priority)break;if(O=G.scope)E=E||G,G.templateUrl||(z("new/isolated scope",R,G,Y),X(O)&&(R=G));x=G.name;!G.templateUrl&&G.controller&&(O=G.controller,w=w||{},z("'"+x+"' controller",w[x],G,Y),
w[x]=G);if(O=G.transclude)wa=!0,G.$$tlb||(z("transclusion",k,G,Y),k=G),"element"==O?(ia=!0,U=G.priority,O=ca(b,N,fb),Y=c.$$element=y(P.createComment(" "+x+": "+c[x]+" ")),b=Y[0],T(e,y(ta.call(O,0)),b),v=t(O,d,U,f&&f.name,{nonTlbTranscludeDirective:k})):(O=y(yb(b)).contents(),Y.html(""),v=t(O,d));if(G.template)if(z("template",$,G,Y),$=G,O=L(G.template)?G.template(Y,c):G.template,O=hc(O),G.replace){f=G;O=y("<div>"+ba(O)+"</div>").contents();b=O[0];if(1!=O.length||1!==b.nodeType)throw ja("tplrt",x,"");
T(e,Y,b);M={$attr:{}};O=S(b,[],M);var Eb=a.splice(C+1,a.length-(C+1));R&&V(O);a=a.concat(O).concat(Eb);fc(c,M);M=a.length}else Y.html(O);if(G.templateUrl)z("template",$,G,Y),$=G,G.replace&&(f=G),D=F(a.splice(C,a.length-C),Y,c,e,v,h,g,{controllerDirectives:w,newIsolateScopeDirective:R,templateDirective:$,nonTlbTranscludeDirective:k}),M=a.length;else if(G.compile)try{u=G.compile(Y,c,v),L(u)?p(null,u,N,fb):u&&p(u.pre,u.post,N,fb)}catch(Z){n(Z,ha(Y))}G.terminal&&(D.terminal=!0,U=Math.max(U,G.priority))}D.scope=
E&&!0===E.scope;D.transclude=wa&&v;return D}function V(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function ia(d,e,f,h,g,l,p){if(e===g)return null;g=null;if(a.hasOwnProperty(e)){var r;e=b.get(e+c);for(var A=0,t=e.length;A<t;A++)try{r=e[A],(h===s||h>r.priority)&&-1!=r.restrict.indexOf(f)&&(l&&(r=Rb(r,{$$start:l,$$end:p})),d.push(r),g=r)}catch(J){n(J)}}return g}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?
";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(H(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function F(a,b,c,d,e,f,h,g){var k=[],l,n,A=b[0],t=a.shift(),J=u({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),H=L(t.templateUrl)?t.templateUrl(b,c):t.templateUrl;b.html("");r.get(D.getTrustedResourceUrl(H),
{cache:p}).success(function(p){var r,D;p=hc(p);if(t.replace){p=y("<div>"+ba(p)+"</div>").contents();r=p[0];if(1!=p.length||1!==r.nodeType)throw ja("tplrt",t.name,H);p={$attr:{}};T(d,b,r);var E=S(r,[],p);X(t.scope)&&V(E);a=E.concat(a);fc(c,p)}else r=A,b.html(p);a.unshift(J);l=wa(a,r,c,e,b,t,f,h,g);q(d,function(a,c){a==r&&(d[c]=b[0])});for(n=R(b[0].childNodes,e);k.length;){p=k.shift();D=k.shift();var U=k.shift(),ca=k.shift(),E=b[0];D!==A&&(E=yb(r),T(U,y(D),E));D=l.transclude?$(p,l.transclude):ca;l(n,
p,E,d,D)}k=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function z(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function v(a,b){var c=l(b,!0);c&&a.push({priority:0,compile:da(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);H(d.data("$binding",e),"ng-binding");a.$watch(c,
function(a){b[0].nodeValue=a})})})}function C(a,b){if("srcdoc"==b)return D.HTML;var c=Fa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return D.RESOURCE_URL}function M(a,b,c,d){var e=l(c,!0);if(e){if("multiple"===d&&"SELECT"===Fa(a))throw ja("selmulti",ha(a));b.push({priority:100,compile:function(){return{pre:function(b,c,h){c=h.$$observers||(h.$$observers={});if(f.test(d))throw ja("nodomevents");if(e=l(h[d],!0,C(a,d)))h[d]=e(b),(c[d]||(c[d]=[])).$$inter=!0,(h.$$observers&&
h.$$observers[d].$$scope||b).$watch(e,function(a,b){"class"===d&&a!=b?h.$updateClass(a,b):h.$set(d,a)})}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=P.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function W(a,
b){return u(function(){return a.apply(null,arguments)},a,b)}var Db=function(a,b){this.$$element=a;this.$attr=b||{}};Db.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(ic(b,a));this.$addClass(ic(a,b))},$set:function(a,b,c,d){var e=cc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=
d=bb(a,"-"));e=Fa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)if(!N||8<=N)e=xa(b).href,""!==e&&("href"===a&&!e.match(h)||"src"===a&&!e.match(g))&&(this[a]=b="unsafe:"+e);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);U.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var O=l.startSymbol(),
Y=l.endSymbol(),hc="{{"==O||"}}"==Y?Aa:function(a){return a.replace(/\{\{/g,O).replace(/}}/g,Y)},Eb=/^ngAttr[A-Z]/;return t}]}function ma(b){return Oa(b.replace(id,""))}function ic(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),h=0;a:for(;h<d.length;h++){for(var g=d[h],f=0;f<e.length;f++)if(g==e[f])continue a;c+=(0<c.length?" ":"")+g}return c}function jd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");X(a)?u(b,a):b[a]=d};this.$get=["$injector","$window",function(c,
d){return function(e,h){var g,f,m;B(e)&&(g=e.match(a),f=g[1],m=g[3],e=b.hasOwnProperty(f)?b[f]:tb(h.$scope,f,!0)||tb(d,f,!0),Na(e,f,!0));g=c.instantiate(e,h);if(m){if(!h||"object"!=typeof h.$scope)throw C("$controller")("noscp",f||e.name,m);h.$scope[m]=g}return g}}]}function kd(){this.$get=["$window",function(b){return y(b.document)}]}function ld(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function jc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=
b.indexOf(":");c=v(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function kc(b){var a=X(b)?b:s;return function(c){a||(a=jc(b));return c?a[v(c)]||null:a}}function lc(b,a,c){if(L(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function md(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){B(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],
transformRequest:[function(a){return X(a)&&"[object File]"!==Ya.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},h=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,r){function p(a){function c(a){var b=u({},a,{data:lc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){L(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=u({},a.headers),f,h,c=u({},c.common,c[v(a.method)]);b(c);b(d);a:for(f in c){a=v(f);for(h in d)if(v(h)===a)continue a;d[f]=c[f]}return d}(a);u(d,a);d.headers=f;d.method=Ga(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=
[function(a){f=a.headers;var b=lc(a.data,kc(f),a.transformRequest);z(a.data)&&q(f,function(a,b){"content-type"===v(b)&&delete f[b]});z(a.withCredentials)&&!z(e.withCredentials)&&(a.withCredentials=e.withCredentials);return A(a,b,f).then(c,c)},s],g=n.when(d);for(q(w,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,
b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function A(b,c,h){function g(a,b,c){q&&(200<=a&&300>a?q.put(s,[a,b,jc(c)]):q.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?r.resolve:r.reject)({data:a,status:c,headers:kc(d),config:b})}function m(){var a=$a(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var r=n.defer(),A=r.promise,q,w,s=J(b.url,b.params);p.pendingRequests.push(b);
A.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=X(b.cache)?b.cache:X(e.cache)?e.cache:U);if(q)if(w=q.get(s),F(w)){if(w.then)return w.then(m,m),w;K(w)?k(w[1],w[0],ga(w[2])):k(w,200,{})}else q.put(s,A);z(w)&&a(b.method,s,c,g,h,b.timeout,b.withCredentials,b.responseType);return A}function J(a,b){if(!b)return a;var c=[];Nc(b,function(a,b){null===a||z(a)||(K(a)||(a=[a]),q(a,function(a){X(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var U=
c("$http"),w=[];q(h,function(a){w.unshift(B(a)?r.get(a):r.invoke(a))});q(g,function(a,b){var c=B(a)?r.get(a):r.invoke(a);w.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){q(arguments,function(a){p[a]=function(b,c){return p(u(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){p[a]=function(b,c,d){return p(u(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=
e;return p}]}function nd(){this.$get=["$browser","$window","$document",function(b,a,c){return od(b,pd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function od(b,a,c,d,e,h){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;N&&8>=N?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);
return d}var f=-1;return function(e,k,l,n,r,p,A,J){function U(){D=f;t&&t();H&&H.abort()}function w(a,d,e,f){var g=h||xa(k).protocol;s&&c.cancel(s);t=H=null;d="file"==g?e?200:404:d;a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(x)}var D;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==v(e)){var E="_"+(d.counter++).toString(36);d[E]=function(a){d[E].data=a};var t=g(k.replace("JSON_CALLBACK","angular.callbacks."+E),function(){d[E].data?w(n,200,d[E].data):w(n,D||-2);delete d[E]})}else{var H=
new a;H.open(e,k,!0);q(r,function(a,b){F(a)&&H.setRequestHeader(b,a)});H.onreadystatechange=function(){if(4==H.readyState){var a=null,b=null;D!==f&&(a=H.getAllResponseHeaders(),b=H.responseType?H.response:H.responseText);w(n,D||H.status,b,a)}};A&&(H.withCredentials=!0);J&&(H.responseType=J);H.send(l||null)}if(0<p)var s=c(U,p);else p&&p.then&&p.then(U)}}function qd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",
"$exceptionHandler","$sce",function(c,d,e){function h(h,k,l){for(var n,r,p=0,A=[],J=h.length,q=!1,w=[];p<J;)-1!=(n=h.indexOf(b,p))&&-1!=(r=h.indexOf(a,n+g))?(p!=n&&A.push(h.substring(p,n)),A.push(p=c(q=h.substring(n+g,r))),p.exp=q,p=r+f,q=!0):(p!=J&&A.push(h.substring(p)),p=J);(J=A.length)||(A.push(""),J=1);if(l&&1<A.length)throw mc("noconcat",h);if(!k||q)return w.length=J,p=function(a){try{for(var b=0,c=J,f;b<c;b++)"function"==typeof(f=A[b])&&(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null===f||
z(f)?f="":"string"!=typeof f&&(f=oa(f))),w[b]=f;return w.join("")}catch(g){a=mc("interr",h,g.toString()),d(a)}},p.exp=h,p.parts=A,p}var g=b.length,f=a.length;h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function rd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,f,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),r=n.promise,p=0,A=F(m)&&!m;f=F(f)?f:0;r.then(null,null,d);r.$$intervalId=k(function(){n.notify(p++);0<f&&p>=f&&(n.resolve(p),
l(r.$$intervalId),delete e[r.$$intervalId]);A||b.$apply()},g);e[r.$$intervalId]=n;return r}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function sd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",
posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",
mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function nc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=rb(b[a]);return b.join("/")}function oc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=T(b.port)||td[b.protocol]||null}function pc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=
Vb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ua(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Ua(b).lastIndexOf("/")+1)}function qc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);oc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!B(e))throw Hb("ipthprfx",a,c);pc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=
function(){var a=Wb(this.$$search),b=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=nc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==s)return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);oc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!B(e))throw Hb("ihshprfx",d,a);pc(e,this,b);this.$$compose()};
this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=nc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ua(b)==Ua(a))return a}}function rc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Ua(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function gb(b){return function(){return this[b]}}function sc(b,a){return function(c){if(z(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function ud(){var b="",a=!1;this.hashPrefix=function(a){return F(a)?(b=a,this):b};this.html5Mode=function(b){return F(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,h){function g(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?qc:rc):(m=Ua(k),e=Ib);f=new e(m,"#"+b);f.$$parse(f.$$rewrite(k));h.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==v(b[0].nodeName);)if(b[0]===h[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=f.$$rewrite(e);e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&(a.preventDefault(),g!=d.url()&&(f.$$parse(g),c.$apply(),Z.angular["ff-684208-preventDefault"]=!0))}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=
f.absUrl();f.$$parse(a);g(b)}),c.$$phase||c.$digest()))});var l=0;c.$watch(function(){var a=d.url(),b=f.$$replace;l&&a==f.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),g(a))}));f.$$replace=!1;return l});return f}]}function vd(){var b=!0,a=this;this.debugEnabled=function(a){return F(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||x;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,a){if("constructor"===b)throw ya("isecfld",a);return b}
function Va(b,a){if(b&&b.constructor===b)throw ya("isecfn",a);if(b&&b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);return b}function hb(b,a,c,d,e){e=e||{};a=a.split(".");for(var h,g=0;1<a.length;g++){h=pa(a.shift(),d);var f=b[h];f||(f={},b[h]=f);b=f;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}h=pa(a.shift(),d);return b[h]=c}function tc(b,a,c,d,
e,h,g){pa(b,h);pa(a,h);pa(c,h);pa(d,h);pa(e,h);return g.unwrapPromises?function(f,g){var k=g&&g.hasOwnProperty(b)?g:f,l;if(null===k||k===s)return k;(k=k[b])&&k.then&&(qa(h),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a||null===k||k===s)return k;(k=k[a])&&k.then&&(qa(h),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c||null===k||k===s)return k;(k=k[c])&&k.then&&(qa(h),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d||null===k||k===s)return k;
(k=k[d])&&k.then&&(qa(h),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e||null===k||k===s)return k;(k=k[e])&&k.then&&(qa(h),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,h){var g=h&&h.hasOwnProperty(b)?h:f;if(null===g||g===s)return g;g=g[b];if(!a||null===g||g===s)return g;g=g[a];if(!c||null===g||g===s)return g;g=g[c];if(!d||null===g||g===s)return g;g=g[d];return e&&null!==g&&g!==s?g=g[e]:g}}function uc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];
var d=b.split("."),e=d.length,h;if(a.csp)h=6>e?tc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=tc(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var l, fn, p;\n";q(d,function(b,d){pa(b,c);g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",f=new Function("s","k","pw",g);f.toString=function(){return g};h=function(a,b){return f(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=h);return h}function wd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return F(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return F(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&
!vc.hasOwnProperty(b)&&(vc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Kb(a);e=(new Wa(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return x}}}]}function xd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return yd(function(a){b.$evalAsync(a)},a)}]}
function yd(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var f=[],m,k;return k={resolve:function(a){if(f){var c=f;f=s;m=h(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(g(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var k=e(),A=function(d){try{k.resolve((L(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},J=function(b){try{k.resolve((L(g)?
g:d)(b))}catch(c){k.reject(c),a(c)}},q=function(b){try{k.notify((L(h)?h:c)(b))}catch(d){a(d)}};f?f.push([A,J,q]):m.then(A,J,q);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&L(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,
!1)})}}}},h=function(a){return a&&L(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(c){return{then:function(g,h){var l=e();b(function(){try{l.resolve((L(h)?h:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:g,when:function(f,m,k,l){var n=e(),r,p=function(b){try{return(L(m)?m:c)(b)}catch(d){return a(d),g(d)}},A=function(b){try{return(L(k)?k:d)(b)}catch(c){return a(c),g(c)}},J=function(b){try{return(L(l)?l:c)(b)}catch(d){a(d)}};
b(function(){h(f).then(function(a){r||(r=!0,n.resolve(h(a).then(p,A,J)))},function(a){r||(r=!0,n.resolve(A(a)))},function(a){r||n.notify(J(a))})});return n.promise},all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;h(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function zd(){var b=10,a=C("$rootScope");this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$injector","$exceptionHandler","$parse","$browser",function(c,d,e,h){function g(){this.$id=Xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings={}}function f(b){if(l.$$phase)throw a("inprog",l.$$phase);l.$$phase=b}function m(a,b){var c=e(a);Na(c,b);return c}function k(){}g.prototype={constructor:g,
$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=m(a,"watch"),e=this.$$watchers,f={fn:b,last:k,
get:d,exp:a,eq:!!c};if(!L(b)){var g=m(b||x,"listener");f.fn=function(a,b,c){g(c)}}if("string"==typeof a&&d.constant){var h=f.fn;f.fn=function(a,b,c){h.call(this,a,b,c);Ka(e,f)}}e||(e=this.$$watchers=[]);e.unshift(f);return function(){Ka(e,f)}},$watchCollection:function(a,b){var c=this,d,f,g=0,h=e(a),k=[],l={},m=0;return this.$watch(function(){f=h(c);var a,b;if(X(f))if(ob(f))for(d!==k&&(d=k,m=d.length=0,g++),a=f.length,m!==a&&(g++,d.length=m=a),b=0;b<a;b++)d[b]!==f[b]&&(g++,d[b]=f[b]);else{d!==l&&
(d=l={},m=0,g++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==f[b]&&(g++,d[b]=f[b]):(m++,d[b]=f[b],g++));if(m>a)for(b in g++,d)d.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(m--,delete d[b])}else d!==f&&(d=f,g++);return g},function(){b(f,d,c)})},$digest:function(){var c,e,g,h,m=this.$$asyncQueue,q=this.$$postDigestQueue,s,D,E=b,t,H=[],y,x,S;f("$digest");do{D=!1;for(t=this;m.length;)try{S=m.shift(),S.scope.$eval(S.expression)}catch(F){d(F)}do{if(h=t.$$watchers)for(s=h.length;s--;)try{(c=
h[s])&&((e=c.get(t))!==(g=c.last)&&!(c.eq?Ba(e,g):"number"==typeof e&&"number"==typeof g&&isNaN(e)&&isNaN(g)))&&(D=!0,c.last=c.eq?ga(e):e,c.fn(e,g===k?e:g,t),5>E&&(y=4-E,H[y]||(H[y]=[]),x=L(c.exp)?"fn: "+(c.exp.name||c.exp.toString()):c.exp,x+="; newVal: "+oa(e)+"; oldVal: "+oa(g),H[y].push(x)))}catch(Q){d(Q)}if(!(h=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(h=t.$$nextSibling);)t=t.$parent}while(t=h);if(D&&!E--)throw l.$$phase=null,a("infdig",b,oa(H));}while(D||m.length);for(l.$$phase=
null;q.length;)try{q.shift()()}catch(z){d(z)}},$destroy:function(){if(l!=this&&!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null}},$eval:function(a,b){return e(a)(this,b)},$evalAsync:function(a){l.$$phase||l.$$asyncQueue.length||h.defer(function(){l.$$asyncQueue.length&&l.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return f("$apply"),this.$eval(a)}catch(b){d(b)}finally{l.$$phase=null;try{l.$digest()}catch(c){throw d(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[$a(c,
b)]=null}},$emit:function(a,b){var c=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ta.call(arguments,1)),l,m;do{e=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=e.length;l<m;l++)if(e[l])try{e[l].apply(null,k)}catch(q){d(q)}else e.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=
!0},defaultPrevented:!1},g=[f].concat(ta.call(arguments,1)),h,k;do{c=e;f.currentScope=c;e=c.$$listeners[a]||[];h=0;for(k=e.length;h<k;h++)if(e[h])try{e[h].apply(null,g)}catch(l){d(l)}else e.splice(h,1),h--,k--;if(!(e=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(e=c.$$nextSibling);)c=c.$parent}while(c=e);return f}};var l=new g;return l}]}function Ad(b){if("self"===b)return b;if(B(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(Za(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function wc(b){var a=[];F(b)&&q(b,function(b){a.push(Ad(b))});return a}function Bd(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=wc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var h=d(),g={};g[fa.HTML]=d(h);g[fa.CSS]=d(h);g[fa.URL]=d(h);g[fa.JS]=d(h);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var h=g.hasOwnProperty(c)?g[c]:null;if(h&&d instanceof h)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var h=xa(d.toString()),l,n,r=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Fb(h):b[l].exec(h.href)){r=!0;break}if(r)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Fb(h):a[l].exec(h.href)){r=!1;break}if(r)return d;throw ra("insecurl",d.toString());}if(c===
fa.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function Cd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var h=e.parseAs,g=e.getTrusted,f=e.trustAs;q(fa,function(a,b){var c=v(b);e[Oa("parse_as_"+c)]=function(b){return h(a,b)};e[Oa("get_trusted_"+c)]=function(b){return g(a,b)};e[Oa("trust_as_"+c)]=function(b){return f(a,b)}});return e}]}function Dd(){this.$get=["$window","$document",function(b,a){var c={},d=T((/android (\d+)/.exec(v((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),h=a[0]||{},g=h.documentMode,f,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=h.body&&h.body.style,l=!1,n=!1;if(k){for(var r in k)if(l=m.exec(r)){f=l[0];f=f.substr(0,1).toUpperCase()+f.substr(1);break}f||(f="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||f+"Transition"in k);n=!!("animation"in k||f+"Animation"in k);!d||l&&n||(l=B(h.body.style.webkitTransition),n=B(h.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==N)return!1;if(z(c[a])){var b=h.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:f,transitions:l,animations:n,msie:N,msieDocumentMode:g}}]}function Ed(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,m){var k=c.defer(),l=k.promise,n=F(m)&&!m;f=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete h[l.$$timeoutId]}n||b.$apply()},f);l.$$timeoutId=f;h[f]=k;return l}
var h={};e.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;N&&(aa.setAttribute("href",c),c=aa.href);aa.setAttribute("href",c);var c=aa.pathname,d=b;0===d.indexOf(a)&&(d=d.replace(a,""));xc.exec(d)||(c=(d=xc.exec(c))?d[1]:c);c="/"===c.charAt(0)?c:"/"+c;return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,
""):"",hash:aa.hash?aa.hash.replace(/^#/,""):"",hostname:aa.hostname,port:aa.port,pathname:c}}function Fb(b){b=B(b)?xa(b):b;return b.protocol===yc.protocol&&b.host===yc.host}function Fd(){this.$get=da(Z)}function zc(b){function a(d,e){if(X(d)){var h={};q(d,function(b,c){h[c]=a(c,b)});return h}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ac);a("date",Bc);a("filter",Gd);a("json",Hd);a("limitTo",Id);a("lowercase",
Jd);a("number",Cc);a("orderBy",Dc);a("uppercase",Kd)}function Gd(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ab.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var h=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!h(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&h(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(h(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)"$"==g?function(){if(a[g]){var b=g;e.push(function(c){return h(c,a[b])})}}():function(){if("undefined"!=typeof a[g]){var b=g;e.push(function(c){return h(tb(c,b),a[b])})}}();break;case "function":e.push(a);
break;default:return b}for(var d=[],f=0;f<b.length;f++){var m=b[f];e.check(m)&&d.push(m)}return d}}function Ac(b){var a=b.NUMBER_FORMATS;return function(b,d){z(d)&&(d=a.CURRENCY_SYM);return Ec(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Cc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Ec(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Ec(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var h=0>b;b=Math.abs(b);var g=b+"",f="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=
g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(f=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(f=b.toFixed(e));else{g=(g.split(Fc)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Fc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,r=a.gSize;if(g.length>=n+r)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%r&&0!==k&&(f+=c),f+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(f+=c),f+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(f+=
d+b.substr(0,e))}m.push(h?a.negPre:a.posPre);m.push(f);m.push(h?a.negSuf:a.posSuf);return m.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function W(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function ib(b,a){return function(c,d){var e=c["get"+b](),h=Ga(a?"SHORT"+b:b);return d[h][e]}}function Bc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var h=
0,g=0,f=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(h=T(b[9]+b[10]),g=T(b[9]+b[11]));f.call(a,T(b[1]),T(b[2])-1,T(b[3]));h=T(b[4]||0)-h;g=T(b[5]||0)-g;f=T(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,h,g,f,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var h="",g=[],f,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;B(c)&&(c=Ld.test(c)?T(c):a(c));pb(c)&&(c=
new Date(c));if(!Ja(c))return c;for(;e;)(m=Md.exec(e))?(g=g.concat(ta.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){f=Nd[a];h+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}}function Hd(){return function(b){return oa(b,!0)}}function Id(){return function(b,a){if(!K(b)&&!B(b))return b;a=T(a);if(B(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<
e;d++)c.push(b[d]);return c}}function Dc(b){return function(a,c,d){function e(a,b){return Ma(b)?function(b,c){return a(c,b)}:a}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Pc(c,function(a){var c=!1,d=a||Aa;if(B(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,h=typeof e;f==h?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<h?-1:1;return c},c)});for(var h=[],g=0;g<a.length;g++)h.push(a[g]);
return h.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function Gc(b,a){function c(a,c){c=c?"-"+bb(c,"-"):"";b.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)}var d=this,e=b.parent().controller("form")||lb,h=0,g=d.$error={},f=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ha);c(!0);d.$addControl=function(a){va(a.$name,
"input");f.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(g,function(b,c){d.$setValidity(c,!0,a)});Ka(f,a)};d.$setValidity=function(a,b,f){var n=g[a];if(b)n&&(Ka(n,f),n.length||(h--,h||(c(b),d.$valid=!0,d.$invalid=!1),g[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{h||c(b);if(n){if(-1!=$a(n,f))return}else g[a]=n=[],h++,c(!1,a),e.$setValidity(a,!1,d);n.push(f);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ha).addClass(mb);
d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(mb).addClass(Ha);d.$dirty=!1;d.$pristine=!0;q(f,function(a){a.$setPristine()})}}function nb(b,a,c,d,e,h){var g=!1;a.on("compositionstart",function(){g=!0});a.on("compositionend",function(){g=!1});var f=function(){if(!g){var e=a.val();Ma(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",f);else{var m,k=function(){m||(m=h.defer(function(){f();m=null}))};
a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});a.on("change",f);if(e.hasEvent("paste"))a.on("paste cut",k)}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern,n=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return s};l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return n(l,a)}):e=function(c){var d=b.$eval(l);if(!d||!d.test)throw C("ngPattern")("noregexp",
l,d,ha(a));return n(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=T(c.ngMinlength);e=function(a){if(!d.$isEmpty(a)&&a.length<r)return d.$setValidity("minlength",!1),s;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=T(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>p)return d.$setValidity("maxlength",!1),s;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b=
"ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function h(b){if(!0===a||c.$index%2===a){var d=g(b||"");f?Ba(b,f)||e.$updateClass(d,g(f)):e.$addClass(d)}f=ga(b)}function g(a){if(K(a))return a.join(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var f;c.$watch(e[b],h,!0);e.$observe("class",function(a){h(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;if(h!==f&1){var n=g(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}
var v=function(b){return B(b)?b.toLowerCase():b},Ga=function(b){return B(b)?b.toUpperCase():b},N,y,Ca,ta=[].slice,Od=[].push,Ya=Object.prototype.toString,La=C("ng"),ab=Z.angular||(Z.angular={}),Ta,Fa,ka=["0","0","0"];N=T((/msie (\d+)/.exec(v(navigator.userAgent))||[])[1]);isNaN(N)&&(N=T((/trident\/.*; rv:(\d+)/.exec(v(navigator.userAgent))||[])[1]));x.$inject=[];Aa.$inject=[];var ba=function(){return String.prototype.trim?function(b){return B(b)?b.trim():b}:function(b){return B(b)?b.replace(/^\s*/,
"").replace(/\s*$/,""):b}}();Fa=9>N?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Tc=/[A-Z]/g,Pd={full:"1.2.2",major:1,minor:2,dot:2,codeName:"consciousness-inertia"},Qa=M.cache={},cb=M.expando="ng-"+(new Date).getTime(),Xc=1,Hc=Z.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},zb=Z.document.removeEventListener?
function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Vc=/([\:\-\_]+(.))/g,Wc=/^moz([A-Z])/,wb=C("jqLite"),Ea=M.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===P.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),M(Z).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Od,sort:[].sort,splice:[].splice},
eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){eb[v(b)]=b});var dc={};q("input select option textarea button form details".split(" "),function(b){dc[Ga(b)]=!0});q({data:ac,inheritedData:db,scope:function(b){return y(b).data("$scope")||db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return db(b,"$injector")},removeAttr:function(b,
a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=Oa(a);if(F(c))b.style[a]=c;else{var d;8>=N&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=N&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=v(a);if(eb[d])if(F(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||x).specified?d:s;else if(F(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,
a,c){if(F(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(z(d))return e?b[e]:"";b[e]=d}var a=[];9>N?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(z(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Pa(d[c]);b.innerHTML=
a}},function(b,a){M.prototype[a]=function(a,d){var e,h;if((2==b.length&&b!==Ab&&b!==bc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===ac)b(this[e],a);else for(h in a)b(this[e],h,a[h]);return this}e=b.$dv;h=e===s?Math.min(this.length,1):this.length;for(var g=0;g<h;g++){var f=b(this[g],a,d);e=e?e+f:f}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Zb,dealoc:Pa,on:function a(c,d,e,h){if(F(h))throw wb("onargs");var g=la(c,"events"),f=la(c,"handle");g||la(c,"events",
g={});f||la(c,"handle",f=Yc(c,g));q(d.split(" "),function(d){var h=g[d];if(!h){if("mouseenter"==d||"mouseleave"==d){var l=P.body.contains||P.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=
a.relatedTarget;c&&(c===this||l(this,c))||f(a,d)})}else Hc(c,d,f),g[d]=[];h=g[d]}h.push(e)})},off:$b,replaceWith:function(a,c){var d,e=a.parentNode;Pa(a);q(new M(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new M(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===
a.nodeType){var d=a.firstChild;q(new M(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Pa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new M(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){z(d)&&(d=!Ab(a,c));(d?Cb:Bb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:yb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:x,stopPropagation:x}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){M.prototype[c]=function(c,e,h){for(var g,f=0;f<this.length;f++)z(g)?(g=a(this[f],c,e,h),F(g)&&(g=y(g))):xb(g,a(this[f],c,e,h));return F(g)?g:this};M.prototype.bind=M.prototype.on;M.prototype.unbind=M.prototype.off});
Ra.prototype={put:function(a,c){this[Da(a)]=c},get:function(a){return this[Da(a)]},remove:function(a){var c=this[a=Da(a)];delete this[a];return c}};var $c=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ad=/,/,bd=/^\s*(_?)(\S+?)\1\s*$/,Zc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Sa=C("$injector"),Qd=C("$animate"),Rd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",
function(a){return{enter:function(d,e,h,g){h?h.after(d):(e&&e[0]||(e=h.parent()),e.append(d));g&&a(g,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,h,g){this.enter(a,c,h,g)},addClass:function(d,e,h){e=B(e)?e:K(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});h&&a(h,0,!1)},removeClass:function(d,e,h){e=B(e)?e:K(e)?e.join(" "):"";q(d,function(a){Bb(a,e)});h&&a(h,0,!1)},enabled:x}}]}],ja=C("$compile");gc.$inject=["$provide"];var id=/^(x[\:\-_]|data[\:\-_])/i,pd=Z.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw C("$httpBackend")("noxhr");
},mc=C("$interpolate"),Sd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,td={http:80,https:443,ftp:21},Hb=C("$location");rc.prototype=Ib.prototype=qc.prototype={$$html5:!1,$$replace:!1,absUrl:gb("$$absUrl"),url:function(a,c){if(z(a))return this.$$url;var d=Sd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:gb("$$protocol"),host:gb("$$host"),port:gb("$$port"),path:sc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(B(a))this.$$search=Vb(a);else if(X(a))this.$$search=a;else throw Hb("isrcharg");break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:sc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=C("$parse"),vc={},qa,Ia={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:x,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return F(d)?
F(e)?d+e:d:F(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(F(d)?d:0)-(F(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":x,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Td={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;
this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&
this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),h=Ia[this.ch],g=Ia[d],f=Ia[e];f?(this.tokens.push({index:this.index,text:e,fn:f}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):h?(this.tokens.push({index:this.index,text:this.ch,fn:h,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=F(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=v(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,h,g,f;this.index<this.text.length;){f=this.text.charAt(this.index);if("."===f||this.isIdent(f)||this.isNumber(f))"."===f&&(e=this.index),c+=f;else break;this.index++}if(e)for(h=this.index;h<this.text.length;){f=this.text.charAt(h);if("("===f){g=c.substr(e-d+1);c=c.substr(0,
e-d);this.index=h;break}if(this.isWhitespace(f))h++;else break}d={index:d,text:c};if(Ia.hasOwnProperty(c))d.fn=Ia[c],d.json=Ia[c];else{var m=uc(c,this.options,this.text);d.fn=u(function(a,c){return m(a,c)},{assign:function(d,e){return hb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,h=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),
e=e+g;if(h)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(h=Td[g])?d+h:d+g,h=!1;else if("\\"===g)h=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Wa=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Wa.ZERO=function(){return 0};
Wa.prototype={constructor:Wa,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),
this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,
this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var h=this.tokens[0],g=h.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return h}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return u(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return u(function(e,h){return a(e,h)?c(e,h):d(e,h)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return u(function(e,h){return c(e,h,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,h=
0;h<a.length;h++){var g=a[h];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,f){f=[f];for(var m=0;m<d.length;m++)f.push(d[m](a,e));return c.apply(a,f)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,h){return a.assign(d,c(d,h),h)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Wa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=uc(d,this.options,this.text);return u(function(c,d,f){return e(f||
a(c,d),d)},{assign:function(e,g,f){return hb(a(e,f),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return u(function(e,h){var g=a(e,h),f=d(e,h),m;if(!g)return s;(g=Va(g[f],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,h,g){var f=d(e,g);return Va(a(e,g),c.text)[f]=h}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(h,g){for(var f=[],m=c?c(h,g):h,k=0;k<d.length;k++)f.push(d[k](h,g));k=a(h,g,m)||x;Va(m,e.text);Va(k,e.text);f=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Va(f,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return u(function(c,d){for(var g=[],f=0;f<a.length;f++)g.push(a[f](c,d));return g},
{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return u(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=C("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},aa=P.createElement("a"),
xc=/^\/?.*?:(\/.*)/,yc=xa(Z.location.href,!0);zc.$inject=["$provide"];Ac.$inject=["$locale"];Cc.$inject=["$locale"];var Fc=".",Nd={yyyy:W("FullYear",4),yy:W("FullYear",2,0,!0),y:W("FullYear",1),MMMM:ib("Month"),MMM:ib("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:ib("Day"),EEE:ib("Day",!0),a:function(a,
c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Md=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ld=/^\-?\d+$/;Bc.$inject=["$locale"];var Jd=da(v),Kd=da(Ga);Dc.$inject=["$parse"];var Ud=da({restrict:"E",compile:function(a,c){8>=N&&(c.href||c.name||c.$set("href",""),a.append(P.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||
a.preventDefault()})}}}),Nb={};q(eb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,h,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,h){h.$observe(c,function(c){c&&(h.$set(a,c),N&&e.prop(a,h[a]))})}}}});var lb={$addControl:x,$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x};Gc.$inject=["$element","$attrs",
"$scope"];var Ic=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Gc,compile:function(){return{pre:function(a,e,h,g){if(!h.action){var f=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Hc(e[0],"submit",f);e.on("$destroy",function(){c(function(){zb(e[0],"submit",f)},0,!1)})}var m=e.parent().controller("form"),k=h.name||h.ngForm;k&&hb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&hb(a,k,s,k);u(g,lb)})}}}}}]},Vd=Ic(),Wd=
Ic(!0),Xd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Yd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Zd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Jc={text:nb,number:function(a,c,d,e,h,g){nb(a,c,d,e,h,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Zd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=
parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),s;e.$setValidity("min",!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),s;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||pb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return s})},url:function(a,c,d,e,h,g){nb(a,c,d,e,
h,g);a=function(a){if(e.$isEmpty(a)||Xd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",!1);return s};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,h,g){nb(a,c,d,e,h,g);a=function(a){if(e.$isEmpty(a)||Yd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return s};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){z(d.name)&&c.attr("name",Xa());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});
e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var h=d.ngTrueValue,g=d.ngFalseValue;B(h)||(h=!0);B(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==h};e.$formatters.push(function(a){return a===h});e.$parsers.push(function(a){return a?h:g})},hidden:x,button:x,submit:x,reset:x},Kc=["$browser","$sniffer",function(a,
c){return{restrict:"E",require:"?ngModel",link:function(d,e,h,g){g&&(Jc[v(h.type)]||Jc.text)(d,e,h,g,c,a)}}}],kb="ng-valid",jb="ng-invalid",Ha="ng-pristine",mb="ng-dirty",$d=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,h){function g(a,c){c=c?"-"+bb(c,"-"):"";e.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$name=d.name;var f=h(d.ngModel),m=f.assign;if(!m)throw C("ngModel")("nonassign",d.ngModel,ha(e));this.$render=x;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||lb,l=0,n=this.$error={};e.addClass(Ha);g(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,g(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;
this.$pristine=!0;e.removeClass(mb).addClass(Ha)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ha).addClass(mb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=f(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=
c,r.$render())}})}],ae=function(){return{require:["ngModel","^?form"],controller:$d,link:function(a,c,d,e){var h=e[0],g=e[1]||lb;g.$addControl(h);a.$on("$destroy",function(){g.$removeControl(h)})}}},be=da({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Lc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var h=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(h);e.$parsers.unshift(h);d.$observe("required",function(){h(e.$viewValue)})}}}},ce=function(){return{require:"ngModel",link:function(a,c,d,e){var h=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!z(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},de=/^(true|false|\d+)$/,ee=function(){return{priority:100,
compile:function(a,c){return de.test(c.ngValue)?function(a,c,h){h.$set("value",a.$eval(h.ngValue))}:function(a,c,h){a.$watch(h.ngValue,function(a){h.$set("value",a)})}}}},fe=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),ge=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],he=["$sce","$parse",
function(a,c){return function(d,e,h){e.addClass("ng-binding").data("$binding",h.ngBindHtml);var g=c(h.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],ie=Mb("",!0),je=Mb("Odd",0),ke=Mb("Even",1),le=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),me=[function(){return{scope:!0,controller:"@",priority:500}}],Mc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ma("ng-"+a);Mc[c]=["$parse",function(d){return{compile:function(e,h){var g=d(h[c]);return function(c,d,e){d.on(v(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var ne=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,h,g){var f,m;c.$watch(e.ngIf,function(h){Ma(h)?m||(m=c.$new(),g(m,function(c){f={startNode:c[0],endNode:c[c.length++]=P.createComment(" end ngIf: "+e.ngIf+" ")};a.enter(c,d.parent(),
d)})):(m&&(m.$destroy(),m=null),f&&(a.leave(ub(f)),f=null))})}}}],oe=["$http","$templateCache","$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,h,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(f,m){var k=m.ngInclude||m.src,l=m.onload||"",n=m.autoscroll;return function(f,m,q,s,y){var w=0,D,E,t=function(){D&&(D.$destroy(),D=null);E&&(h.leave(E),E=null)};f.$watch(g.parseAsResourceUrl(k),function(g){var k=function(){!F(n)||n&&!f.$eval(n)||d()},q=++w;
g?(a.get(g,{cache:c}).success(function(a){if(q===w){var c=f.$new(),d=y(c,x);t();D=c;E=d;E.html(a);h.enter(E,null,m,k);e(E.contents())(D);D.$emit("$includeContentLoaded");f.$eval(l)}}).error(function(){q===w&&t()}),f.$emit("$includeContentRequested")):t()})}}}}],pe=sa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),qe=sa({terminal:!0,priority:1E3}),re=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,h,g){var f=g.count,m=g.$attr.when&&h.attr(g.$attr.when),
k=g.offset||0,l=e.$eval(m)||{},n={},r=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(l[v(c.replace("when","").replace("Minus","-"))]=h.attr(g.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,r+f+"-"+k+p))});e.$watch(function(){var c=parseFloat(e.$eval(f));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,h,!0)},function(a){h.text(a)})}}}],se=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,
$$tlb:!0,link:function(e,h,g,f,m){var k=g.ngRepeat,l=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),n,r,p,s,x,F,w={$id:Da};if(!l)throw d("iexp",k);g=l[1];f=l[2];(l=l[4])?(n=a(l),r=function(a,c,d){F&&(w[F]=a);w[x]=c;w.$index=d;return n(e,w)}):(p=function(a,c){return Da(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);x=l[3]||l[1];F=l[2];var D={};e.$watchCollection(f,function(a){var f,g,l=h[0],n,S={},w,Q,z,V,B,u,v=[];if(ob(a))B=
a,n=r||p;else{n=r||s;B=[];for(z in a)a.hasOwnProperty(z)&&"$"!=z.charAt(0)&&B.push(z);B.sort()}w=B.length;g=v.length=B.length;for(f=0;f<g;f++)if(z=a===B?f:B[f],V=a[z],V=n(z,V,f),va(V,"`track by` id"),D.hasOwnProperty(V))u=D[V],delete D[V],S[V]=u,v[f]=u;else{if(S.hasOwnProperty(V))throw q(v,function(a){a&&a.startNode&&(D[a.id]=a)}),d("dupes",k,V);v[f]={id:V};S[V]=!1}for(z in D)D.hasOwnProperty(z)&&(u=D[z],f=ub(u),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),u.scope.$destroy());f=0;for(g=B.length;f<
g;f++){z=a===B?f:B[f];V=a[z];u=v[f];v[f-1]&&(l=v[f-1].endNode);if(u.startNode){Q=u.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);u.startNode!=n&&c.move(ub(u),null,y(l));l=u.endNode}else Q=e.$new();Q[x]=V;F&&(Q[F]=z);Q.$index=f;Q.$first=0===f;Q.$last=f===w-1;Q.$middle=!(Q.$first||Q.$last);Q.$odd=!(Q.$even=0===(f&1));u.startNode||m(Q,function(a){a[a.length++]=P.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(l));l=a;u.scope=Q;u.startNode=l&&l.endNode?l.endNode:a[0];u.endNode=a[a.length-
1];S[u.id]=u})}D=S})}}}],te=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ma(c)?"removeClass":"addClass"](d,"ng-hide")})}}],ue=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ma(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ve=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),we=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,h){var g,f,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(f[l]);f=[];m=[];if(g=h.cases["!"+d]||h.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;f.push(c);a.enter(c,e.parent(),e)})})})}}}],xe=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,h,g,f){g.cases["!"+c.ngSwitchWhen]=g.cases["!"+c.ngSwitchWhen]||[];g.cases["!"+
c.ngSwitchWhen].push({transclude:f,element:e})}}}),ye=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,h){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:h,element:c})}}),ze=sa({controller:["$element","$transclude",function(a,c){if(!c)throw C("ngTransclude")("orphan",ha(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),Ae=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],Be=C("ngOptions"),Ce=da({terminal:!0}),De=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:x};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=
function(c){va(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Da(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=x})}],link:function(e,g,f,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?
(t.parent()&&t.remove(),c.val(a),""===a&&w.prop("selected",!0)):z(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){t.parent()&&t.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ra(d.$viewValue);q(c.find("option"),function(c){c.selected=F(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&
a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,h){function g(){var a={"":[]},c=[""],d,k,s,u,w;u=h.$modelValue;w=r(e)||[];var z=n?Ob(w):w,B,v,I;v={};s=!1;var C,H;if(A)if(t&&K(u))for(s=new Ra([]),I=0;I<u.length;I++)v[m]=u[I],s.put(t(e,v),u[I]);else s=new Ra(u);for(I=0;B=z.length,I<B;I++){k=I;if(n){k=z[I];if("$"===k.charAt(0))continue;v[n]=k}v[m]=w[k];d=p(e,v)||"";(k=a[d])||(k=a[d]=[],c.push(d));A?d=F(s.remove(t?t(e,v):q(e,v))):(t?(d={},d[m]=u,d=t(e,d)===t(e,v)):d=u===q(e,v),s=s||d);C=l(e,v);
C=F(C)?C:"";k.push({id:t?t(e,v):n?z[I]:I,label:C,selected:d})}A||(x||null===u?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));v=0;for(z=c.length;v<z;v++){d=c[v];k=a[d];y.length<=v?(u={element:E.clone().attr("label",d),label:k.label},w=[u],y.push(w),f.append(u.element)):(w=y[v],u=w[0],u.label!=d&&u.element.attr("label",u.label=d));C=null;I=0;for(B=k.length;I<B;I++)s=k[I],(d=w[I+1])?(C=d.element,d.label!==s.label&&C.text(d.label=s.label),d.id!==s.id&&C.val(d.id=
s.id),C[0].selected!==s.selected&&C.prop("selected",d.selected=s.selected)):(""===s.id&&x?H=x:(H=D.clone()).val(s.id).attr("selected",s.selected).text(s.label),w.push({element:H,label:s.label,id:s.id,selected:s.selected}),C?C.after(H):u.element.append(H),C=H);for(I++;w.length>I;)w.pop().element.remove()}for(;y.length>v;)y.pop()[0].element.remove()}var k;if(!(k=u.match(d)))throw Be("iexp",u,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),r=c(k[7]),t=k[8]?c(k[8]):null,
y=[[{element:f,label:""}]];x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.html("");f.on("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},g,k,l,p,u,w,v;if(A)for(k=[],p=0,w=y.length;p<w;p++)for(a=y[p],l=1,u=a.length;l<u;l++){if((g=a[l].element)[0].selected){g=g.val();n&&(d[n]=g);if(t)for(v=0;v<c.length&&(d[m]=c[v],t(e,d)!=g);v++);else d[m]=c[g];k.push(q(e,d))}}else if(g=f.val(),"?"==g)k=s;else if(""===g)k=null;else if(t)for(v=0;v<c.length;v++){if(d[m]=c[v],t(e,d)==g){k=q(e,d);break}}else d[m]=
c[g],n&&(d[n]=g),k=q(e,d);h.$setViewValue(k)})});h.$render=g;e.$watch(g)}if(m[1]){var r=m[0],p=m[1],A=f.multiple,u=f.ngOptions,x=!1,w,D=y(P.createElement("option")),E=y(P.createElement("optgroup")),t=D.clone();m=0;for(var B=g.children(),v=B.length;m<v;m++)if(""===B[m].value){w=x=B.eq(m);break}r.init(p,x,t);if(A&&(f.required||f.ngRequired)){var C=function(a){p.$setValidity("required",!f.required||a&&a.length);return a};p.$parsers.push(C);p.$formatters.unshift(C);f.$observe("required",function(){C(p.$viewValue)})}u?
n(e,g,p):A?l(e,g,p):k(e,g,p,r)}}}}],Ee=["$interpolate",function(a){var c={addOption:x,removeOption:x};return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var h=a(d.text(),!0);h||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;h?a.$watch(h,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],
Fe=da({restrict:"E",terminal:!0});(Ca=Z.jQuery)?(y=Ca,u(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),vb("remove",!0,!0,!1),vb("empty",!1,!1,!1),vb("html",!1,!1,!0)):y=M;ab.element=y;(function(a){u(a,{bootstrap:Xb,copy:ga,extend:u,equals:Ba,element:y,forEach:q,injector:Yb,noop:x,bind:qb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:z,isDefined:F,isString:B,isFunction:L,isObject:X,isNumber:pb,isElement:Oc,isArray:K,
version:Pd,isDate:Ja,lowercase:v,uppercase:Ga,callbacks:{counter:0},$$minErr:C,$$csp:Sb});Ta=Uc(Z);try{Ta("ngLocale")}catch(c){Ta("ngLocale",[]).provider("$locale",sd)}Ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",gc).directive({a:Ud,input:Kc,textarea:Kc,form:Vd,script:Ae,select:De,style:Fe,option:Ee,ngBind:fe,ngBindHtml:he,ngBindTemplate:ge,ngClass:ie,ngClassEven:ke,ngClassOdd:je,ngCloak:le,ngController:me,ngForm:Wd,ngHide:ue,ngIf:ne,ngInclude:oe,ngInit:pe,ngNonBindable:qe,ngPluralize:re,
ngRepeat:se,ngShow:te,ngStyle:ve,ngSwitch:we,ngSwitchWhen:xe,ngSwitchDefault:ye,ngOptions:Ce,ngTransclude:ze,ngModel:ae,ngList:ce,ngChange:be,required:Lc,ngRequired:Lc,ngValue:ee}).directive(Nb).directive(Mc);a.provider({$anchorScroll:cd,$animate:Rd,$browser:ed,$cacheFactory:fd,$controller:jd,$document:kd,$exceptionHandler:ld,$filter:zc,$interpolate:qd,$interval:rd,$http:md,$httpBackend:nd,$location:ud,$log:vd,$parse:wd,$rootScope:zd,$q:xd,$sce:Cd,$sceDelegate:Bd,$sniffer:Dd,$templateCache:gd,$timeout:Ed,
$window:Fd})}])})(ab);y(P).ready(function(){Sc(P,Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map

/* **********************************************
     Begin angular-route.min.js
********************************************** */

/*
 AngularJS v1.2.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,c,A){'use strict';function x(r,m,d,b,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(l,z,k,B,w){function v(){g&&(g.$destroy(),g=null);q&&(h.leave(q),q=null)}function u(){var a=r.current&&r.current.locals,e=a&&a.$template;if(e){var y=l.$new(),s=w(y,c.noop);s.html(e);h.enter(s,null,q||z,function(){!c.isDefined(n)||n&&!l.$eval(n)||m()});v();var e=d(s.contents()),f=r.current;g=f.scope=y;q=s;f.controller&&(a.$scope=g,a=b(f.controller,a),f.controllerAs&&
(g[f.controllerAs]=a),s.data("$ngControllerController",a),s.children().data("$ngControllerController",a));e(g);g.$emit("$viewContentLoaded");g.$eval(p)}else v()}var g,q,n=k.autoscroll,p=k.onload||"";l.$on("$routeChangeSuccess",u);u()}}}t=c.module("ngRoute",["ng"]).provider("$route",function(){function r(b,h){return c.extend(new (c.extend(function(){},{prototype:b})),h)}function m(b,c){var l=c.caseInsensitiveMatch,d={originalPath:b,regexp:b},k=d.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,
function(b,c,h,d){b="?"===d?d:null;d="*"===d?d:null;k.push({name:h,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=RegExp("^"+b+"$",l?"i":"");return d}var d={};this.when=function(b,h){d[b]=c.extend({reloadOnSearch:!0},h,b&&m(b,h));if(b){var l="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";d[l]=c.extend({redirectTo:b},m(l,h))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=
["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,h,l,m,k,t,w,v){function u(){var a=g(),e=p.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!n)e.params=a.params,c.copy(e.params,l),b.$broadcast("$routeUpdate",e);else if(a||e)n=!1,b.$broadcast("$routeChangeStart",a,e),(p.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?h.path(q(a.redirectTo,a.params)).search(a.params).replace():h.url(a.redirectTo(a.pathParams,
h.path(),h.search())).replace()),m.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,f;c.forEach(b,function(a,e){b[e]=c.isString(a)?k.get(a):k.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(f=a.templateUrl)&&(c.isFunction(f)&&(f=f(a.params)),f=v.getTrustedResourceUrl(f),c.isDefined(f)&&(a.loadedTemplateUrl=f,e=t.get(f,{cache:w}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return m.all(b)}}).then(function(d){a==p.current&&(a&&(a.locals=
d,c.copy(a.params,l)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==p.current&&b.$broadcast("$routeChangeError",a,e,c)})}function g(){var a,b;c.forEach(d,function(d,l){var f;if(f=!b){var g=h.path();f=d.keys;var m={};if(d.regexp)if(g=d.regexp.exec(g)){for(var k=1,q=g.length;k<q;++k){var n=f[k-1],p="string"==typeof g[k]?decodeURIComponent(g[k]):g[k];n&&p&&(m[n.name]=p)}f=m}else f=null;else f=null;f=a=f}f&&(b=r(d,{params:c.extend({},h.search(),a),pathParams:a}),b.$$route=d)});return b||d[null]&&
r(d[null],{params:{},pathParams:{}})}function q(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var g=a.match(/(\w+)(.*)/),h=g[1];d.push(b[h]);d.push(g[2]||"");delete b[h]}});return d.join("")}var n=!1,p={routes:d,reload:function(){n=!0;b.$evalAsync(u)}};b.$on("$locationChangeSuccess",u);return p}]});t.provider("$routeParams",function(){this.$get=function(){return{}}});t.directive("ngView",x);x.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map


/* **********************************************
     Begin angular-sanitize.min.js
********************************************** */

/*
 AngularJS v1.2.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(m,g,n){'use strict';function h(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function D(a,d){function c(a,b,c,f){b=g.lowercase(b);if(r[b])for(;e.last()&&s[e.last()];)k("",e.last());t[b]&&e.last()==b&&k("",b);(f=u[b]||!!f)||e.push(b);var l={};c.replace(E,function(a,b,d,c,e){l[b]=p(d||c||e||"")});d.start&&d.start(b,l,f)}function k(a,b){var c=0,k;if(b=g.lowercase(b))for(c=e.length-1;0<=c&&e[c]!=b;c--);if(0<=c){for(k=e.length-1;k>=c;k--)d.end&&d.end(e[k]);e.length=
c}}var b,f,e=[],l=a;for(e.last=function(){return e[e.length-1]};a;){f=!0;if(e.last()&&v[e.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(F,"$1").replace(G,"$1");d.chars&&d.chars(p(b));return""}),k("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,b)),a=a.substring(b+3),f=!1);else if(w.test(a)){if(b=a.match(w))a=a.replace(b[0],""),f=!1}else if(H.test(a)){if(b=a.match(x))a=
a.substring(b[0].length),b[0].replace(x,k),f=!1}else I.test(a)&&(b=a.match(y))&&(a=a.substring(b[0].length),b[0].replace(y,c),f=!1);f&&(b=a.indexOf("<"),f=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(p(f)))}if(a==l)throw J("badparse",a);l=a}k()}function p(a){q.innerHTML=a.replace(/</g,"&lt;");return q.innerText||q.textContent||""}function z(a){return a.replace(/&/g,"&amp;").replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){var d=
!1,c=g.bind(a,a.push);return{start:function(a,b,f){a=g.lowercase(a);!d&&v[a]&&(d=a);d||!0!==B[a]||(c("<"),c(a),g.forEach(b,function(a,b){var d=g.lowercase(b);!0!==L[d]||!0===C[d]&&!a.match(M)||(c(" "),c(b),c('="'),c(z(a)),c('"'))}),c(f?"/>":">"))},end:function(a){a=g.lowercase(a);d||!0!==B[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(z(a))}}}var J=g.$$minErr("$sanitize"),y=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,x=/^<\s*\/\s*([\w:-]+)[^>]*>/,
E=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,I=/^</,H=/^<\s*\//,F=/\x3c!--(.*?)--\x3e/g,w=/<!DOCTYPE([^>]*?)>/i,G=/<!\[CDATA\[(.*?)]]\x3e/g,M=/^((ftp|https?):\/\/|mailto:|tel:|#)/i,K=/([^\#-~| |!])/g,u=h("area,br,col,hr,img,wbr");m=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");n=h("rp,rt");var t=g.extend({},n,m),r=g.extend({},m,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
s=g.extend({},n,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),v=h("script,style"),B=g.extend({},u,r,s,t),C=h("background,cite,href,longdesc,src,usemap"),L=g.extend({},C,h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
q=document.createElement("pre");g.module("ngSanitize",[]).value("$sanitize",function(a){var d=[];D(a,A(d));return d.join("")});g.module("ngSanitize").filter("linky",function(){var a=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,d=/^mailto:/;return function(c,k){if(!c)return c;var b,f=c,e=[],l=A(e),h,m,n={};g.isDefined(k)&&(n.target=k);for(;b=f.match(a);)h=b[0],b[2]==b[3]&&(h="mailto:"+h),m=b.index,l.chars(f.substr(0,m)),n.href=h,l.start("a",n),l.chars(b[0].replace(d,"")),l.end("a"),
f=f.substring(m+b[0].length);l.chars(f);return e.join("")}})})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map


/* **********************************************
     Begin angular-animate.min.js
********************************************** */

/*
 AngularJS v1.2.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(B,k,D){'use strict';k.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(L,E){var q=k.noop,s=k.forEach,V=E.$$selectors,T=1,f="$$ngAnimateState",F="ng-animate",m={running:!0};L.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(G,B,H,h,A,r,D){function M(a){if(a){var d=[],c={};a=a.substr(1).split(".");(H.transitions||H.animations)&&a.push("");for(var b=0;b<a.length;b++){var g=a[b],f=V[g];f&&!c[g]&&(d.push(B.get(f)),
c[g]=!0)}return d}}function p(a,d,c,b,g,m,y){function r(a){w();if(!0===a)t();else{if(a=c.data(f))a.done=t,c.data(f,a);p(k,"after",t)}}function p(b,g,f){var k=g+"End";s(b,function(e,W){var u=function(){a:{var e=g+"Complete",a=b[W];a[e]=!0;(a[k]||q)();for(a=0;a<b.length;a++)if(!b[a][e])break a;f()}};"before"!=g||"enter"!=a&&"move"!=a?e[g]?e[k]=x?e[g](c,d,u):e[g](c,u):u():u()})}function h(){y&&A(y,0,!1)}function w(){w.hasBeenRun||(w.hasBeenRun=!0,m())}function t(){if(!t.hasBeenRun){t.hasBeenRun=!0;var a=
c.data(f);a&&(x?v(c):(a.closeAnimationTimeout=A(function(){v(c)},0,!1),c.data(f,a)));h()}}var n=c.attr("class")||"",z=(" "+(n+" "+d)).replace(/\s+/g,".");b||(b=g?g.parent():c.parent());var z=M(z),x="addClass"==a||"removeClass"==a;g=c.data(f)||{};if(I(c,b)||0===z.length)w(),t();else{var k=[];g.running&&x&&g.structural||s(z,function(b){if(!b.allowCancel||b.allowCancel(c,a,d)){var g=b[a];"leave"==a?(b=g,g=null):b=b["before"+a.charAt(0).toUpperCase()+a.substr(1)];k.push({before:b,after:g})}});0===k.length?
(w(),h()):(b=" "+n+" ",g.running&&(A.cancel(g.closeAnimationTimeout),v(c),J(g.animations),g.beforeComplete?(g.done||q)(!0):x&&!g.structural&&(b="removeClass"==g.event?b.replace(g.className,""):b+g.className+" ")),n=" "+d+" ","addClass"==a&&0<=b.indexOf(n)||"removeClass"==a&&-1==b.indexOf(n)?(w(),h()):(c.addClass(F),c.data(f,{running:!0,event:a,className:d,structural:!x,animations:k,done:r}),p(k,"before",r)))}}function K(a){a=a[0];a.nodeType==T&&s(a.querySelectorAll("."+F),function(a){a=k.element(a);
var c=a.data(f);c&&(J(c.animations),v(a))})}function J(a){s(a,function(d){a.beforeComplete||(d.beforeEnd||q)(!0);a.afterComplete||(d.afterEnd||q)(!0)})}function v(a){a[0]==h[0]?m.disabled||(m.running=!1,m.structural=!1):(a.removeClass(F),a.removeData(f))}function I(a,d){if(m.disabled)return!0;if(a[0]==h[0])return m.disabled||m.running;do{if(0===d.length)break;var c=d[0]==h[0],b=c?m:d.data(f),b=b&&(!!b.disabled||!!b.running);if(c||b)return b;if(c)break}while(d=d.parent());return!0}h.data(f,m);r.$$postDigest(function(){m.running=
!1});return{enter:function(a,d,c,b){this.enabled(!1,a);G.enter(a,d,c);r.$$postDigest(function(){p("enter","ng-enter",a,d,c,q,b)})},leave:function(a,d){K(a);this.enabled(!1,a);r.$$postDigest(function(){p("leave","ng-leave",a,null,null,function(){G.leave(a)},d)})},move:function(a,d,c,b){K(a);this.enabled(!1,a);G.move(a,d,c);r.$$postDigest(function(){p("move","ng-move",a,d,c,q,b)})},addClass:function(a,d,c){p("addClass",d,a,null,null,function(){G.addClass(a,d)},c)},removeClass:function(a,d,c){p("removeClass",
d,a,null,null,function(){G.removeClass(a,d)},c)},enabled:function(a,d){switch(arguments.length){case 2:if(a)v(d);else{var c=d.data(f)||{};c.disabled=!0;d.data(f,c)}break;case 1:m.disabled=!a;break;default:a=!m.disabled}return!!a}}}]);E.register("",["$window","$sniffer","$timeout",function(f,m,H){function h(e){P.push(e);H.cancel(Q);Q=H(function(){s(P,function(e){e()});P=[];Q=null;C={}},10,!1)}function A(e,a){var u=a?C[a]:null;if(!u){var b=0,c=0,d=0,l=0,S,k,m,h;s(e,function(e){if(e.nodeType==T){e=f.getComputedStyle(e)||
{};m=e[g+E];b=Math.max(r(m),b);h=e[g+R];S=e[g+w];c=Math.max(r(S),c);k=e[y+w];l=Math.max(r(k),l);var a=r(e[y+E]);0<a&&(a*=parseInt(e[y+t],10)||1);d=Math.max(a,d)}});u={total:0,transitionPropertyStyle:h,transitionDurationStyle:m,transitionDelayStyle:S,transitionDelay:c,transitionDuration:b,animationDelayStyle:k,animationDelay:l,animationDuration:d};a&&(C[a]=u)}return u}function r(e){var a=0;e=k.isString(e)?e.split(/\s*,\s*/):[];s(e,function(e){a=Math.max(parseFloat(e)||0,a)});return a}function F(e){var a=
e.parent(),b=a.data(n);b||(a.data(n,++U),b=U);return b+"-"+e[0].className}function M(e,a){var b=F(e),c=b+" "+a,d={},k=C[c]?++C[c].total:0;if(0<k){var l=a+"-stagger",d=b+" "+l;(b=!C[d])&&e.addClass(l);d=A(e,d);b&&e.removeClass(l)}e.addClass(a);c=A(e,c);l=Math.max(c.transitionDuration,c.animationDuration);if(0===l)return e.removeClass(a),!1;var f="";0<c.transitionDuration?(e.addClass(x),f+=L+" ",e[0].style[g+R]="none"):e[0].style[y]="none 0s";s(a.split(" "),function(a,e){f+=(0<e?" ":"")+a+"-active"});
e.data(z,{className:a,activeClassName:f,maxDuration:l,classes:a+" "+f,timings:c,stagger:d,ii:k});return!0}function p(a){a=a[0];var b=g+R;a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function K(a,c,u){function g(a){a.stopPropagation();a=a.originalEvent||a;var e=a.$manualTimeStamp||a.timeStamp||Date.now();Math.max(e-w,0)>=s&&a.elapsedTime>=r&&u()}var f=a.data(z);if(a.hasClass(c)&&f){var k=a[0],l=f.timings,h=f.stagger,r=f.maxDuration,p=f.activeClassName,s=1E3*Math.max(l.transitionDelay,l.animationDelay),
w=Date.now(),v=O+" "+N,t=f.ii,x,f="",n=[];if(0<l.transitionDuration){var q=l.transitionPropertyStyle;-1==q.indexOf("all")&&(x=!0,f+=b+"transition-property: "+q+", "+(m.msie?"-ms-zoom":"border-spacing")+"; ",f+=b+"transition-duration: "+l.transitionDurationStyle+", "+l.transitionDuration+"s; ",n.push(b+"transition-property"),n.push(b+"transition-duration"))}else a[0].style[y]="";0<t&&(0<h.transitionDelay&&0===h.transitionDuration&&(q=l.transitionDelayStyle,x&&(q+=", "+l.transitionDelay+"s"),f+=b+"transition-delay: "+
J(q,h.transitionDelay,t)+"; ",n.push(b+"transition-delay")),0<h.animationDelay&&0===h.animationDuration&&(f+=b+"animation-delay: "+J(l.animationDelayStyle,h.animationDelay,t)+"; ",n.push(b+"animation-delay")));0<n.length&&(l=k.getAttribute("style")||"",k.setAttribute("style",l+" "+f));a.on(v,g);a.addClass(p);return function(b){a.off(v,g);a.removeClass(p);d(a,c);for(var f in n)k.style.removeProperty(n[f])}}u()}function J(a,b,c){var d="";s(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,
10))+"s"});return d}function v(a,b){if(M(a,b))return function(c){c&&d(a,b)}}function I(a,b,c){if(a.data(z))return K(a,b,c);d(a,b);c()}function a(a,b,c){var d=v(a,b);if(d){var f=d;h(function(){p(a);f=I(a,b,c)});return function(a){(f||q)(a)}}c()}function d(a,b){a.removeClass(b);a.removeClass(x);a.removeData(z)}function c(a,b){var c="";a=k.isArray(a)?a:a.split(/\s+/);s(a,function(a,e){a&&0<a.length&&(c+=(0<e?" ":"")+a+b)});return c}var b="",g,N,y,O;B.ontransitionend===D&&B.onwebkittransitionend!==D?
(b="-webkit-",g="WebkitTransition",N="webkitTransitionEnd transitionend"):(g="transition",N="transitionend");B.onanimationend===D&&B.onwebkitanimationend!==D?(b="-webkit-",y="WebkitAnimation",O="webkitAnimationEnd animationend"):(y="animation",O="animationend");var E="Duration",R="Property",w="Delay",t="IterationCount",n="$$ngAnimateKey",z="$$ngAnimateCSS3Data",x="ng-animate-start",L="ng-animate-active",C={},U=0,P=[],Q;return{allowCancel:function(a,b,d){var f=(a.data(z)||{}).classes;if(!f||0<=["enter",
"leave","move"].indexOf(b))return!0;var g=a.parent(),h=k.element(a[0].cloneNode());h.attr("style","position:absolute; top:-9999px; left:-9999px");h.removeAttr("id");h.html("");s(f.split(" "),function(a){h.removeClass(a)});h.addClass(c(d,"addClass"==b?"-add":"-remove"));g.append(h);a=A(h);h.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},enter:function(b,c){return a(b,"ng-enter",c)},leave:function(b,c){return a(b,"ng-leave",c)},move:function(b,c){return a(b,"ng-move",c)},beforeAddClass:function(a,
b,d){if(b=v(a,c(b,"-add")))return h(function(){p(a);d()}),b;d()},addClass:function(a,b,d){return I(a,c(b,"-add"),d)},beforeRemoveClass:function(a,b,d){if(b=v(a,c(b,"-remove")))return h(function(){p(a);d()}),b;d()},removeClass:function(a,b,d){return I(a,c(b,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map


/* **********************************************
     Begin default.js
********************************************** */

WebFont.load({
    google: {
      families: ['Fjalla One']
    }
  });

// var map;
// var geocoder = new google.maps.Geocoder();
// var bounds = new google.maps.LatLngBounds();
// var aqui = new google.maps.LatLng(40.416775, -3.703790);
// var actual;
var ciego = angular.module('ciego', ['ngRoute','ngSanitize','ngAnimate']);



var ico_beer = {
	anchor:new google.maps.Point(20,-30),
	path: 'M23.04 -32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608 -6.912h-4.608q-5.724 0 -9.774 -4.05t-4.05 -9.774v-11.52l-2.304 -2.304 1.152 -4.608h17.28l1.152 -4.608h34.56l1.152 6.912 -2.304 1.152v28.8z',
	fillColor: "yellow",
	fillOpacity: 0.9,
	scale: 0.5,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_wine = {
	anchor:new google.maps.Point(200,200),
	path: 'M91.505 181.858c0 80.14 59.231 146.371 136.282 157.364v65.23  c0 9.992-8.181 18.172-18.17 18.172h-49.972c-12.536 0-22.713 10.175-22.713 22.716c0 12.536 10.177 22.711 22.713 22.711h181.708  c12.541 0 22.717-10.175 22.717-22.711c0-12.541-10.176-22.716-22.717-22.716h-49.969c-9.988 0-18.169-8.18-18.169-18.172v-65.23  c77.049-10.993 136.28-77.224 136.28-157.364V68.29c0-20.077-16.262-36.34-36.34-36.34h-245.31c-20.079 0-36.34 16.264-36.34 36.34  V181.858z M156.92 77.375h187.157c11.085 0 19.992 8.909 19.992 19.991v50.875c0 11.081-8.907 19.989-19.992 19.989H156.92  c-11.08 0-19.989-8.909-19.989-19.989V97.367C136.932 86.284 145.84 77.375 156.92 77.375z',
	fillColor: "#e60074",
	fillOpacity: 0.9,
	scale: 0.07,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_drink = {
	anchor:new google.maps.Point(20,-30),
	path: 'M61.164 -57.743q0 1.26 -1.548 2.808l-22.752 22.752v27.648h11.52q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h11.52v-27.648l-22.752 -22.752q-1.548 -1.548 -1.548 -2.808 0 -0.828 0.648 -1.314t1.368 -0.63 1.548 -0.144h50.688q0.828 0 1.548 0.144t1.368 0.63 0.648 1.314z',
	fillColor: "#ffffff",
	fillOpacity: 0.9,
	scale: 0.5,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_cider = {
	anchor:new google.maps.Point(200,200),
	path: 'M298.725 211.268c-8.027-21.325-15.75-95.299-15.75-102.258c0-18.627 14.174-8.474 0.867-51.545 	c-3.072-9.951-52.611-9.954-55.684 0c-12.963 41.985 0.867 33.957 0.867 51.545c0 6.958-7.723 80.933-15.75 102.258 	c-8.031 21.326-32.373 25.192-32.373 65.77c0 24.227 0 137.757 0 160.628c0 22.872 17.35 24.335 75.098 24.335 	s75.098-1.463 75.098-24.335c0-22.871 0-136.401 0-160.628C331.098 236.46 306.756 232.594 298.725 211.268z M241.055 291.778 	v137.75c-7.625 1.125-22.875 0.5-26-5v-135c0-47.376 16.418-32.407 33.5-90C244.289 229.599 241.055 245.028 241.055 291.778z',
	fillColor: "green",
	fillOpacity: 0.9,
	scale: 0.1,
	strokeColor: "#111",
	strokeWeight: 1
}
var tipo = new Array(4);
tipo[0]=ico_beer;
tipo[1]=ico_wine;
tipo[2]=ico_drink;
tipo[3]=ico_cider;


var styles = [
{
	stylers: [
		{ lightness:-5 },
		{ invert_lightness:true }
	]
},{
	featureType:"road.highway",
	elementType:"all",
	stylers:[{visibility:"off"}]
},{
	featureType:"administrative.land_parcel",
	elementType:"all",
	stylers:[{visibility:"off"}]
},{
	featureType:"poi.business",
	elementType:"all",
	stylers:[{visibility:"off"}]
}
];
var styledMap = new google.maps.StyledMapType(styles,{name: "Ciego"});


/* **********************************************
     Begin router.js
********************************************** */



/* **********************************************
     Begin filters.js
********************************************** */


ciego.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});


/* **********************************************
     Begin Data.js
********************************************** */


ciego.factory("Data", function(){
	return {
		map: '',
		geocoder: new google.maps.Geocoder(),
		bounds: new google.maps.LatLngBounds(),
		aqui: new google.maps.LatLng(40.416775, -3.703790),
		lugar: 'Madrid',
		actual: '',
		marker: [],
		infowindow: [],
		nuevo: false,
		aviso: false,
		provincias: [
			"Álava",
			"Albacete",
			"Alicante/Alacant",
			"Almería",
			"Asturias",
			"Ávila",
			"Badajoz",
			"Barcelona",
			"Burgos",
			"Cáceres",
			"Cádiz",
			"Cantabria",
			"Castellón/Castelló",
			"Ceuta",
			"Ciudad Real",
			"Córdoba",
			"Cuenca",
			"Girona",
			"Las Palmas",
			"Granada",
			"Guadalajara",
			"Guipúzcoa",
			"Huelva",
			"Huesca",
			"Illes Balears",
			"Jaén",
			"A Coruña",
			"La Rioja",
			"León",
			"Lleida",
			"Lugo",
			"Madrid",
			"Málaga",
			"Melilla",
			"Murcia",
			"Navarra",
			"Ourense",
			"Palencia",
			"Pontevedra",
			"Salamanca",
			"Segovia",
			"Sevilla",
			"Soria",
			"Tarragona",
			"Santa Cruz de Tenerife",
			"Teruel",
			"Toledo",
			"Valencia/Valéncia",
			"Valladolid",
			"Vizcaya",
			"Zamora",
			"Zaragoza"
		]
	}
});










/* **********************************************
     Begin MapCtrl.js
********************************************** */


ciego.controller('MapCtrl', function($scope, $http, Data){

	$scope.data = {buscar:""};
	$scope.infowindow = Data.infowindow;
	$scope.map = Data.map;
	$scope.aqui = Data.aqui;
	$scope.lugar = Data.lugar;
	$scope.actual = Data.actual;
	$scope.marker = Data.marker;
	$scope.nuevo = Data.nuevo;
	$scope.aviso = Data.aviso;
	$scope.provincias = Data.provincias;
	
	$scope.avisoinfo = { 
		tipo: 'info', 
		msg: '<div class="left"><p>Ciego es un buscador abierto de ofertas de bebidas alcohólicas baratas llamadas "garitos". Es abierto porque cualquiera puede publicar nuevos garitos. Ordenadas la más barata primero, solo se permite una oferta por local y un precio unitario.</p><p>Esto es un experimento de <i>AngularJS</i> y la <i>Google Maps API</i> desarrollado por <a href="http://jaicab.com" target="_blank">Jaime Caballero</a> y se encuentra en fase <b>beta</b>.</p><ul>' +
		'<li><span class="typcn typcn-social-github-circular"></span> <a target="_blank" href="http://github.com/jaicab">@jaicab</a></li>' + 
		'<li><span class="typcn typcn-social-twitter-circular"></span> <a target="_blank" href="http://twitter.com/jaicab_">@jaicab_</a></li>' + 
		'<li><span class="typcn typcn-social-at-circular"></span> <a href="mailto:contact@jaicab.com">contact@jaicab.com</a></li>' + 
		'</ul><p>AVISO: Ciego.es recomienda un consumo responsable. No nos hacemos responsables de un mal uso de este producto.</p></div>'
	}

	$scope.tipo_bebida = ["Cervezas", "Vinos", "Copas", "Sidras"];

	$scope.tipo_svg = new Array(4);
	$scope.tipo_svg[0] = '<svg class="beer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="-1 -30 70 1" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M23.04 -32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608 -6.912h-4.608q-5.724 0 -9.774 -4.05t-4.05 -9.774v-11.52l-2.304 -2.304 1.152 -4.608h17.28l1.152 -4.608h34.56l1.152 6.912 -2.304 1.152v28.8z"></path></g></svg>';
	$scope.tipo_svg[1] = '<svg class="wine" enable-background="new 0 0 500 500" height="500px" id="Layer_1" version="1.1" viewBox="0 0 500 500" width="500px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><path clip-rule="evenodd" d="M91.505,181.858c0,80.14,59.231,146.371,136.282,157.364v65.23  c0,9.992-8.181,18.172-18.17,18.172h-49.972c-12.536,0-22.713,10.175-22.713,22.716c0,12.536,10.177,22.711,22.713,22.711h181.708  c12.541,0,22.717-10.175,22.717-22.711c0-12.541-10.176-22.716-22.717-22.716h-49.969c-9.988,0-18.169-8.18-18.169-18.172v-65.23  c77.049-10.993,136.28-77.224,136.28-157.364V68.29c0-20.077-16.262-36.34-36.34-36.34h-245.31c-20.079,0-36.34,16.264-36.34,36.34  V181.858z M156.92,77.375h187.157c11.085,0,19.992,8.909,19.992,19.991v50.875c0,11.081-8.907,19.989-19.992,19.989H156.92  c-11.08,0-19.989-8.909-19.989-19.989V97.367C136.932,86.284,145.84,77.375,156.92,77.375z"/></svg>';
	$scope.tipo_svg[2] = '<svg class="drink" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="-1 -30 70 1" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M61.164,-57.743q0,1.26,-1.548,2.808l-22.752,22.752v27.648h11.52q0.936,0,1.62,0.684t0.684,1.62,-0.684,1.62,-1.62,0.684h-32.256q-0.936,0,-1.62,-0.684t-0.684,-1.62,0.684,-1.62,1.62,-0.684h11.52v-27.648l-22.752,-22.752q-1.548,-1.548,-1.548,-2.808,0,-0.828,0.648,-1.314t1.368,-0.63,1.548,-0.144h50.688q0.828,0,1.548,0.144t1.368,0.63,0.648,1.314z"></path></g></svg>';
	$scope.tipo_svg[3] = '<svg class="cider" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M298.725,211.268c-8.027-21.325-15.75-95.299-15.75-102.258c0-18.627,14.174-8.474,0.867-51.545 c-3.072-9.951-52.611-9.954-55.684,0c-12.963,41.985,0.867,33.957,0.867,51.545c0,6.958-7.723,80.933-15.75,102.258 c-8.031,21.326-32.373,25.192-32.373,65.77c0,24.227,0,137.757,0,160.628c0,22.872,17.35,24.335,75.098,24.335 s75.098-1.463,75.098-24.335c0-22.871,0-136.401,0-160.628C331.098,236.46,306.756,232.594,298.725,211.268z M241.055,291.778 v137.75c-7.625,1.125-22.875,0.5-26-5v-135c0-47.376,16.418-32.407,33.5-90C244.289,229.599,241.055,245.028,241.055,291.778z"></path></g></svg>';


	$scope.mobile = function(){
		if(window.innerWidth < 960){
			document.getElementById("section").style.height = (window.innerHeight - document.getElementById("header").offsetHeight - document.getElementById("formBuscar").offsetHeight) - 10 + "px";
		}else{
			document.getElementById("section").style.height = "auto";
		}
	}


	/** 
	* Check if in marker list
	* @param garito The marker we're checking
	*/
	$scope.inMarker = function(garito){
		for(i=0; i<$scope.marker.length; i++){
			if($scope.marker[i].id==garito.id) return true;
		}
		return false;
	}

	/** 
	* Clears all marker list
	* @param todo Set to true just to be sure you're clearing everything
	*/	
	$scope.clearMarkers = function(todo) {	

		tam = $scope.marker.length;
		for(var i=0; i<tam; i++){
			if(!$scope.bounds.contains($scope.marker[i].getPosition())){
				console.log("Borramos "+$scope.marker[i].id);
				$scope.marker[i].setMap(null);
				$scope.marker[i] = null;
				$scope.marker.splice(i,1);
				tam = $scope.marker.length;
				i = 0;
			}
		}
		if(todo) $scope.marker = [];
		
	}

	/** 
	* Clears all the info windows
	*/	
	$scope.clearInfowindows = function() {
		for (var i = 0; i < $scope.marker.length; i++ ) {
			$scope.marker[i].infowindow.close();
		}
	}

	/** 
	* Focus on one single window, close the others
	*/	
	$scope.info = function(count){
		console.log(count);
		$scope.clearInfowindows();
		$scope.marker[count].infowindow.open($scope.map,$scope.marker[count]);
	}

	/**
	* Center the map in place
	* @param donde A google.maps.LatLng() object to center the map into
	*/
	$scope.estoy_aqui = function(donde){
		$scope.aqui = donde;
		$scope.actual.setPosition($scope.aqui);
		$scope.map.setCenter($scope.aqui);
		$scope.map.setZoom(15);
		$scope.placeName();
	}

	/**
	* Opens up the new Garito form
	*/
	$scope.toggleGarito = function(event){
		if($scope.nuevo){
			$scope.nuevo = false;
		}else{
			$scope.nuevo = {};
		}

	}

	$scope.buscarGarito = function(){
		var frase = '';
		if(!angular.isUndefined($scope.nuevo.direccion)) frase += $scope.nuevo.direccion + ' ';
		if(!angular.isUndefined($scope.nuevo.ciudad)) frase += $scope.nuevo.ciudad + ' ';
		if(!angular.isUndefined($scope.nuevo.provincia)) frase += $scope.provincias[$scope.nuevo.provincia] + ' ';
		console.log(frase);
		
		$scope.codeAddress(frase);
	}

	/**
	* Publishes the Garito if all the data is correct
	*/
	$scope.publicarGarito = function(){
		
		$scope.aviso = {
			tipo: 'upload',
			msg: '<p>Estamos publicando el garito <i>' + $scope.nuevo.nombre + '</i>.</p><p>Por favor, espere un segundo...</p>'
		}

		$http({
		    url: "http://www.corsproxy.com/api.ciego.es/nuevo.php?nombre=" + $scope.nuevo.nombre + 
		    	"&ciudad=" + $scope.nuevo.ciudad +
		    	"&provincia=" + $scope.nuevo.provincia +
		    	"&direccion=" + $scope.nuevo.direccion +
		    	"&tipo=" + $scope.nuevo.tipo +
				"&precio=" + $scope.nuevo.precio +
				"&descripcion=" + $scope.nuevo.descripcion +
				"&lat=" + $scope.aqui.lat() +
				"&lng=" + $scope.aqui.lng(),
		    method: "GET"
		}).success(function(data, status, headers, config) {
			if(data=="null"){

				console.log("Error: Aquí pasa algo raro.");

			}else{
				
				$scope.aviso = data;
				
				if(data.tipo == "tick"){
					$scope.nuevo = false;
					$scope.refocus();
				}


			}
		}).error(function(data, status, headers, config) {
		    $scope.status = status;
		});
	}


	/** 
	* Sets the viewport on the place's or centers the map in that location
	* @param direccion A string address to be looked up by Google Maps API
	*/
	$scope.codeAddress = function(direccion){
		$scope.geocoder.geocode( { 'address': direccion, 'region':'es'}, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) {

				if (results[0].geometry.viewport) {
	    			$scope.aqui = results[0].geometry.location;
					$scope.actual.setPosition($scope.aqui);
	      			$scope.map.fitBounds(results[0].geometry.viewport);
		    	} else {  		
			    	$scope.estoy_aqui(results[0].geometry.location);
		    	}

		    	if (results[0].address_components.length) {
	    			$scope.lugar = results[0].address_components[0].short_name;
		    	} else {  		
			    	$scope.lugar = results[0].formated_address;
		    	}

			}else{
				console.log("La geolocalización ha fallado: " + status + "\n No hemos podido encontrar '"+direccion+ "'");
			}
		});
	}


	/** 
	* Reverse geocoding
	*/
	$scope.placeName = function(){
		$scope.geocoder.geocode( { 'bounds': $scope.map.getBounds() }, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) {

				if (results[0].address_components.length) {
	    			$scope.lugar = results[0].address_components[0].long_name;
		    	} else {  		
			    	$scope.lugar = results[0].formated_address;
		    	}

			}else{
				console.log("La geolocalización ha fallado: " + status + "\n No hemos podido encontrar");
			}
		});
	}

	

	/** 
	* Geolocation via HTML5
	*/
	$scope.localizar = function() {

		//GEOLOCALIZACIÓN
		if(Modernizr.geolocation){
			// Try W3C Geolocation (Preferred)
			if(navigator.geolocation) {

				$scope.aviso = { 
					tipo: 'info', 
					msg: '<p>Si nos dejas, Ciego.es utilizará tu ubicación para mejorar la experiencia en el sitio. No almacenaremos la ubicación en ningún momento.</p>'
				}

			    browserSupportFlag = true;
			    navigator.geolocation.getCurrentPosition(function(position) {
			    	// Gotcha
			    	$scope.aviso = false;
			    	$scope.estoy_aqui(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
			    }, function() {
			    	// Oops!
			    	$scope.aviso = false;
			    	if (errorFlag == true) {
				      alert("La geolocalización ha fallado.");
				    } else {
				      alert("Tu navegador no soporta geolocalización.");
				    }
			    });
			}
		}
	}

	/** 
	* Updates the marker list depending on the viewport
	*/
	$scope.refocus = function() {

	    // Close Street View
	    $scope.map.getStreetView().setVisible(false);
	    $scope.bounds = $scope.map.getBounds();
		var sw = $scope.bounds.getSouthWest();
		var ne = $scope.bounds.getNorthEast();
		$scope.placeName();

	    // AJAX, boy

		$http({
		    url: "http://www.corsproxy.com/api.ciego.es/viewport.php?swLat="+sw.lat()+"&swLng="+sw.lng()+"&neLat="+ne.lat()+"&neLng="+ne.lng(),
		    method: "GET"
		}).success(function(data, status, headers, config) {




			if(data=="null"){

				console.log("Error: Aquí no hay marcadores.");
				$scope.clearMarkers(true);

			}else{

				$scope.clearMarkers();
				var lista = data;

				for(var i in lista){						

					// If not on the list already
					if(!$scope.inMarker(lista[i])) {

						// Create Maps' marker
						cont = $scope.marker.length;
						console.log("Añadiendo "+lista[i].id);
						$scope.marker[cont] = new google.maps.Marker({

							map: $scope.map,
							icon: tipo[lista[i].tipo_id],
							position: new google.maps.LatLng(lista[i].lat,lista[i].lng)

						});

						// Insert additional data
						$scope.marker[cont].set("id", lista[i].id);
						$scope.marker[cont].set("nombre", lista[i].nombre);
						$scope.marker[cont].set("direccion", lista[i].direccion);
						$scope.marker[cont].set("ciudad", lista[i].ciudad);
						$scope.marker[cont].set("provincia", lista[i].provincia);
						$scope.marker[cont].set("precio", (0 + parseFloat(lista[i].precio)));
						$scope.marker[cont].set("descripcion", lista[i].descripcion);
						$scope.marker[cont].set("tipo_id", lista[i].tipo_id);

						// Attach info window
					  	$scope.marker[cont].set("infowindow", new google.maps.InfoWindow({
					    	content: '<div class="info"><h3>' + 
					    		lista[i].nombre + '</h3><p><b>' +
					    		$scope.tipo_bebida[lista[i].tipo_id] +
					    		'</b> desde <b>' + parseFloat(lista[i].precio) + '€</b></p><hr/></p>' +
					    		lista[i].descripcion + '</p></div>'
					  	}));

					  	// Bind onclick event
					  	google.maps.event.addListener($scope.marker[cont],'click', (function(marker){ 
						    return function() {
						    	$scope.info($scope.marker.indexOf(marker));
						    };
						})($scope.marker[cont]));  
					}
				}

			}

		}).error(function(data, status, headers, config) {
		    $scope.status = status;
		});

	}

	/** 
	* Load up the map's basic settings
	*/
	$scope.initialize = function(){
		var panoramaOptions = {
	        addressControlOptions : { position : google.maps.ControlPosition.BOTTOM_CENTER },
	        zoomControlOptions : { position : google.maps.ControlPosition.LEFT_CENTER},
	        panControlOptions : { position : google.maps.ControlPosition.LEFT_BOTTOM},
	        enableCloseButton : true,
	        visible: false //set to false so streetview is not triggered on the initial map load
	    };
	    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("mapa"), panoramaOptions);

		var mapOptions = {
			center: $scope.aqui,
			zoom: 6,
			draggable: true,
			scrollwheel: true,
			panControl: false,
			zoomControl: true,
			zoomControlOptions: {
		        position: google.maps.ControlPosition.LEFT_CENTER
		    },
		    streetView : panorama,
			streetViewControlOptions: {
		    	position: google.maps.ControlPosition.LEFT_CENTER
		    },
		    addressControlOptions: {
		      position: google.maps.ControlPosition.BOTTOM_CENTER
		    },
			mapTypeControlOptions: {
				mapTypeIds: ['map_style',google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.HYBRID],
				position: google.maps.ControlPosition.RIGHT_BOTTOM
			},
			styles:[
			{
				featureType:"poi.business",
				elementType:"all",
				stylers:[{visibility:"off"}]
			}
			]
		};
		$scope.geocoder = new google.maps.Geocoder();

		// Instantiate the map
		$scope.map = new google.maps.Map(document.getElementById('mapa'),mapOptions);
	
		// Set the marker
		$scope.actual = new google.maps.Marker({
			animation: google.maps.Animation.DROP,
			map: $scope.map,
			position: $scope.aqui
		});

		// Center on geolocation HTML5
		$scope.localizar();

		// Apply the styled map
		$scope.map.mapTypes.set('map_style', styledMap);
			$scope.map.setMapTypeId('map_style');

		// Fit mobile
		$scope.mobile();

		// Autocomplete. Powered by Google Places API
		var autocomplete = new google.maps.places.Autocomplete(document.getElementById('campoBuscar'),{types: ['(regions)'],componentRestrictions: {country: "es"}});
	  	autocomplete.bindTo('bounds', $scope.map);

	  	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	    
	    	var place = autocomplete.getPlace();
	    	if (!place.geometry) {
	     		return;
	    	}
	    	$scope.clearMarkers(true);
	    	// If the place has a geometry, then present it on a map.
	    	if (place.geometry.viewport) {
	    		$scope.aqui = place.geometry.location;
				$scope.actual.setPosition($scope.aqui);
	      		$scope.map.fitBounds(place.geometry.viewport);
	    	} else {  		
		    	$scope.estoy_aqui(place.geometry.location);
	    	}

	    	$scope.data.buscar = '';
	    
	  	});

	  	// At zoom change
		google.maps.event.addListener($scope.map, 'idle', function(){

			// If we're not setting a new Garito, focus on the viewport
		    if(!$scope.nuevo && !$scope.nuevo.ciudad) $scope.refocus();
		    // Else, focus on the new Garito
		    else $scope.codeAddress($scope.focus);

		});
	};


	// Center on resize
	window.onresize = function(event) {
		var center = $scope.map.getCenter();
		google.maps.event.trigger($scope.map, "resize");
		$scope.map.setCenter(center); 

		$scope.mobile();
	}


	angular.element(document).ready(function() {
		$scope.initialize();
	});
});

/* **********************************************
     Begin core.js
********************************************** */

// @codekit-prepend 'partial/webfont.js'
// @codekit-prepend 'partial/modernizr.js'

// Angular libraries
// @codekit-prepend 'angular/angular.min.js'
// @codekit-prepend 'angular/angular-route.min.js'
// @codekit-prepend 'angular/angular-sanitize.min.js'
// @codekit-prepend 'angular/angular-animate.min.js'



/*
============================
***** CIEGO.ES JS Core *****
============================

(C) 2014 - Proudly handcrafted by Jaime Caballero.
*/

// @codekit-prepend 'partial/default.js'
// @codekit-prepend 'partial/router.js'
// @codekit-prepend 'partial/filters.js'

// @codekit-prepend 'factory/Data.js'

// @codekit-prepend 'controller/MapCtrl.js'
