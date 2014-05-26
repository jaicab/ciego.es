/* Modernizr 2.7.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-generatedcontent-csstransitions-inputtypes-geolocation-inlinesvg-svg-shiv-mq-cssclasses-teststyles-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(prefixes.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.geolocation=function(){return"geolocation"in navigator},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* **********************************************
     Begin default.js
********************************************** */

WebFont.load({
    google: {
      families: ['Fjalla One']
    }
  });

var map;
var geocoder = new google.maps.Geocoder();
var bounds = new google.maps.LatLngBounds();
var aqui = new google.maps.LatLng(40.416775, -3.703790);
var actual;
var ciego = angular.module('ciego', ['ngSanitize','ngAnimate']);



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
     Begin core.js
********************************************** */

// @codekit-prepend 'partial/modernizr.js'


/*
============================
***** CIEGO.ES JS Core *****
============================

(C) 2013 - Proudly handcrafted by Jaime Caballero.
*/

// @codekit-prepend 'partial/default.js'

/*

=======================
*** ANGULAR.JS Core ***
=======================

*/

ciego.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

ciego.controller('AppController',function($scope, $http){

	$scope.data = {buscar:""};
	$scope.marker = [];
	$scope.infowindow = [];

	$scope.tipo_svg = new Array(4);
	$scope.tipo_svg[0] = '<svg class="beer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="-1 -30 70 1" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M23.04 -32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608 -6.912h-4.608q-5.724 0 -9.774 -4.05t-4.05 -9.774v-11.52l-2.304 -2.304 1.152 -4.608h17.28l1.152 -4.608h34.56l1.152 6.912 -2.304 1.152v28.8z"></path></g></svg>';
	$scope.tipo_svg[1] = '<svg class="wine" enable-background="new 0 0 500 500" height="500px" id="Layer_1" version="1.1" viewBox="0 0 500 500" width="500px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><path clip-rule="evenodd" d="M91.505,181.858c0,80.14,59.231,146.371,136.282,157.364v65.23  c0,9.992-8.181,18.172-18.17,18.172h-49.972c-12.536,0-22.713,10.175-22.713,22.716c0,12.536,10.177,22.711,22.713,22.711h181.708  c12.541,0,22.717-10.175,22.717-22.711c0-12.541-10.176-22.716-22.717-22.716h-49.969c-9.988,0-18.169-8.18-18.169-18.172v-65.23  c77.049-10.993,136.28-77.224,136.28-157.364V68.29c0-20.077-16.262-36.34-36.34-36.34h-245.31c-20.079,0-36.34,16.264-36.34,36.34  V181.858z M156.92,77.375h187.157c11.085,0,19.992,8.909,19.992,19.991v50.875c0,11.081-8.907,19.989-19.992,19.989H156.92  c-11.08,0-19.989-8.909-19.989-19.989V97.367C136.932,86.284,145.84,77.375,156.92,77.375z"/></svg>';
	$scope.tipo_svg[2] = '<svg class="drink" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="-1 -30 70 1" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M61.164,-57.743q0,1.26,-1.548,2.808l-22.752,22.752v27.648h11.52q0.936,0,1.62,0.684t0.684,1.62,-0.684,1.62,-1.62,0.684h-32.256q-0.936,0,-1.62,-0.684t-0.684,-1.62,0.684,-1.62,1.62,-0.684h11.52v-27.648l-22.752,-22.752q-1.548,-1.548,-1.548,-2.808,0,-0.828,0.648,-1.314t1.368,-0.63,1.548,-0.144h50.688q0.828,0,1.548,0.144t1.368,0.63,0.648,1.314z"></path></g></svg>';
	$scope.tipo_svg[3] = '<svg class="cider" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M298.725,211.268c-8.027-21.325-15.75-95.299-15.75-102.258c0-18.627,14.174-8.474,0.867-51.545 c-3.072-9.951-52.611-9.954-55.684,0c-12.963,41.985,0.867,33.957,0.867,51.545c0,6.958-7.723,80.933-15.75,102.258 c-8.031,21.326-32.373,25.192-32.373,65.77c0,24.227,0,137.757,0,160.628c0,22.872,17.35,24.335,75.098,24.335 s75.098-1.463,75.098-24.335c0-22.871,0-136.401,0-160.628C331.098,236.46,306.756,232.594,298.725,211.268z M241.055,291.778 v137.75c-7.625,1.125-22.875,0.5-26-5v-135c0-47.376,16.418-32.407,33.5-90C244.289,229.599,241.055,245.028,241.055,291.778z"></path></g></svg>';


	$scope.inMarker = function(garito){
		for(i=0; i<$scope.marker.length; i++){
			if($scope.marker[i].id==garito.id) return true;
		}
		return false;
	}

	$scope.clearMarkers = function(todo) {	

		//recorremos array
		tam = $scope.marker.length;
		for(var i=0; i<tam; i++){
			if(!bounds.contains($scope.marker[i].getPosition())){
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
	$scope.clearInfowindows = function() {
		for (var i = 0; i < $scope.infowindow.length; i++ ) {
			$scope.infowindow[i].close();
		}
	}

	$scope.info = function(marcador, ventanita){
		$scope.clearInfowindows();
		ventanita.setContent('<div class="info">Pene pene pene'+marcador.id+'</div>');
		ventanita.open(map,marcador);
	}

	$scope.estoy_aqui = function(donde){
		aqui = donde;
		actual.setPosition(aqui);
		map.setCenter(aqui);
		map.setZoom(15);
	}

	/*FUNCIONES DEL MAPA*/
	//'bounds': google.maps.LatLngBounds(google.maps.LatLng(35.17300000000001, -12.524000000000001),google.maps.LatLng(45.244, 5.097999999999956))
	$scope.codeAddress = function(direccion){
		geocoder.geocode( { 'address': direccion, 'region':'es'}, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) {

				if (results[0].geometry.viewport) {
	    			aqui = results[0].geometry.location;
					actual.setPosition(aqui);
	      			map.fitBounds(results[0].geometry.viewport);
		    	} else {  		
			    	$scope.estoy_aqui(results[0].geometry.location);
		    	}

			}else{
				alert("La geolocalización ha fallado: " + status + "\n No hemos podido encontrar '"+direccion+ "'");
			}
		});
	}

	$scope.localizar = function() {

		//GEOLOCALIZACIÓN
		if(Modernizr.geolocation){
			// Try W3C Geolocation (Preferred)
			if(navigator.geolocation) {
			    browserSupportFlag = true;
			    navigator.geolocation.getCurrentPosition(function(position) {
			    	//conseguido
			    	$scope.estoy_aqui(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
			    }, function() {
			    	//no conseguido
			    	if (errorFlag == true) {
				      alert("La geolocalización ha fallado.");
				    } else {
				      alert("Tu navegador no soporta geolocalización.");
				    }
			    });
			}
		}
	}
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
			center: aqui,
			zoom: 14,
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


		map = new google.maps.Map(document.getElementById('mapa'),mapOptions);
		//lo centramos en madrid
		//bounds.extend(google.maps.LatLng(40.3120639, -3.834161799999947));
		//bounds.extend(google.maps.LatLng(40.5635903, -3.524911599999996));
		//map.fitBounds(bounds);

		actual = new google.maps.Marker({
			animation: google.maps.Animation.DROP,
			map: map,
			position: aqui
		});

		$scope.localizar();

		map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
		//mapa responsive
		window.onresize = function(event) {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}

		var input = (document.getElementById('campoBuscar'));
		var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(regions)'],componentRestrictions: {country: "es"}});
	  	autocomplete.bindTo('bounds', map);

		//mapa autocompletar
	  	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	    
	    	var place = autocomplete.getPlace();
	    	if (!place.geometry) {
	     		return;
	    	}
	    	$scope.clearMarkers(true);
	    	// If the place has a geometry, then present it on a map.
	    	if (place.geometry.viewport) {
	    		aqui = place.geometry.location;
				actual.setPosition(aqui);
	      		map.fitBounds(place.geometry.viewport);
	    	} else {  		
		    	$scope.estoy_aqui(place.geometry.location);
	    	}
	    
	  	});

	  	// Al cambiar el zoom
		google.maps.event.addListener(map,'idle',function(){
			bounds = map.getBounds();
		    sw = bounds.getSouthWest();
		    ne = bounds.getNorthEast();
		    // Cerramos street 
		    map.getStreetView().setVisible(false);
		    // AJAX
			$http({
			    url: "../lib/ajax/viewport.php?swLat="+sw.lat()+"&swLng="+sw.lng()+"&neLat="+ne.lat()+"&neLng="+ne.lng(),
			    method: "GET"
			}).success(function(data, status, headers, config) {
				if(data=="null"){
					console.log("Error: Aquí no hay marcadores.");
					$scope.clearMarkers(true);
				}else{
					$scope.clearMarkers();

					for(var i in data){						

						garito = new google.maps.LatLng(data[i].lat,data[i].lng);
						if(!$scope.inMarker(data[i])){
							cont = $scope.marker.length;
							console.log("Añadiendo "+data[i].id);
							$scope.marker[cont] = new google.maps.Marker({
								map: map,
								icon: tipo[data[i].tipo_id],
								position: garito
							});

							//datos del garito
							$scope.marker[cont].set("id",data[i].id);
							$scope.marker[cont].set("nombre",data[i].nombre);
							$scope.marker[cont].set("direccion",data[i].direccion);
							$scope.marker[cont].set("tipo_id",data[i].tipo_id);

						  	$scope.infowindow[cont] = new google.maps.InfoWindow({
						    	content: '<div class="info"><p>Lorem ipsum #'+data[i].id+'</p></div>'
						  	});
						  	google.maps.event.addListener($scope.marker[cont],'click', (function(marker,infowindow){ 
							    return function() {
							    	$scope.info(marker,infowindow);
							    };
							})($scope.marker[cont],$scope.infowindow[cont]));  
						}
					}
				}
			}).error(function(data, status, headers, config) {
			    $scope.status = status;
			});
		});
	};

	angular.element(document).ready(function() {
		$scope.initialize();
	});
});
