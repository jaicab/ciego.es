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
