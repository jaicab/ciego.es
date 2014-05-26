/*
============================
***** CIEGO.ES JS Core *****
============================

(C) 2013 - Proudly handcrafted by Jaime Caballero.
*/


var map;
var geocoder = new google.maps.Geocoder();
var bounds = new google.maps.LatLngBounds();
var aqui = new google.maps.LatLng(40.2124407, -3.6914062);
var actual;
var marker = new Array();
var infowindow = new Array();
var ciego = angular.module('ciego',[]);



var ico_beer = {
	path: 'M23.04 -32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608 -6.912h-4.608q-5.724 0 -9.774 -4.05t-4.05 -9.774v-11.52l-2.304 -2.304 1.152 -4.608h17.28l1.152 -4.608h34.56l1.152 6.912 -2.304 1.152v28.8z',
	fillColor: "yellow",
	fillOpacity: 0.8,
	scale: 0.5,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_wine = {
	path: 'M91.505 181.858c0 80.14 59.231 146.371 136.282 157.364v65.23  c0 9.992-8.181 18.172-18.17 18.172h-49.972c-12.536 0-22.713 10.175-22.713 22.716c0 12.536 10.177 22.711 22.713 22.711h181.708  c12.541 0 22.717-10.175 22.717-22.711c0-12.541-10.176-22.716-22.717-22.716h-49.969c-9.988 0-18.169-8.18-18.169-18.172v-65.23  c77.049-10.993 136.28-77.224 136.28-157.364V68.29c0-20.077-16.262-36.34-36.34-36.34h-245.31c-20.079 0-36.34 16.264-36.34 36.34  V181.858z M156.92 77.375h187.157c11.085 0 19.992 8.909 19.992 19.991v50.875c0 11.081-8.907 19.989-19.992 19.989H156.92  c-11.08 0-19.989-8.909-19.989-19.989V97.367C136.932 86.284 145.84 77.375 156.92 77.375z',
	fillColor: "#9a004d",
	fillOpacity: 0.8,
	scale: 0.07,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_drink = {
	path: 'm 18.75 966.94535 8.333333 66.66675 c 0.260417 2.0833 2.083334 4.1666 4.166667 4.1666 l 37.5 0 c 2.083334 0 3.90625 -2.0833 4.166667 -4.1666 L 81.25 966.94535 z m 9.375 8.33333 43.75 0 -1.953125 16.66667 -39.84375 0 z',
	fillColor: "#1a0806",
	fillOpacity: 0.8,
	scale: 0.3,
	strokeColor: "#111",
	strokeWeight: 1
}
var ico_cocktail = {
	path: 'M177.317 304.513v99.939c0 9.992-8.181 18.172-18.172 18.172  h-49.969c-12.536 0-22.714 10.175-22.714 22.716c0 12.536 10.178 22.711 22.714 22.711h181.708  c12.536 0 22.715-10.175 22.715-22.711c0-12.541-10.179-22.716-22.715-22.716h-49.97c-9.99 0-18.17-8.18-18.17-18.172v-99.939  l73.5-74.404C314.05 242.637 335.672 250 359.026 250c60.235 0 109.024-48.789 109.024-109.025  c0-60.237-48.789-109.025-109.024-109.025c-57.15 0-104.033 43.971-108.663 99.939H49.942c-9.91 0-17.993 8.18-17.993 18.172  c0 5.092 2.094 9.724 5.447 12.997L177.317 304.513z M329.047 197.128l33.796-34.256c3.263-3.274 5.27-7.817 5.27-12.812  c0-9.992-8.094-18.172-17.993-18.172h-54.063c4.464-30.797 30.896-54.513 62.97-54.513c35.163 0 63.598 28.438 63.598 63.599  s-28.435 63.599-63.598 63.599C348.221 204.574 337.945 201.849 329.047 197.128z',
	fillColor: "pink",
	fillOpacity: 0.8,
	scale: 0.07,
	strokeColor: "#111",
	strokeWeight: 1
}
var tipo = new Array(4);
tipo[0]=ico_beer;
tipo[1]=ico_wine;
tipo[2]=ico_drink;
tipo[3]=ico_cocktail;

var styles = [
{
	stylers: [
		{ lightness:-5 },
		{ invert_lightness:true }
	]
},{
	featureType:"road.highway",
	elementType:"all",
	stylers:[
		{visibility:"off"}
	]
},{
	featureType:"administrative.land_parcel",
	elementType:"all",
	stylers:[
		{visibility:"off"}
	]
},{
	featureType:"poi.business",
	elementType:"all",
	stylers:[
		{visibility:"off"}
	]
}
];
var styledMap = new google.maps.StyledMapType(styles,{name: "Ciego"});


/*

=======================
*** ANGULAR.JS Core ***
=======================

*/



ciego.controller('AppController',function($scope, $http){

	$scope.data = {buscar:""};

	$scope.info = function(garito){

	}

	$scope.clearMarkers = function() {
		for (var i = 0; i < marker.length; i++ ) {
			marker[i].setMap(null);
		}
	  	marker = [];
	}
	$scope.clearInfowindows = function() {
		for (var i = 0; i < infowindow.length; i++ ) {
			infowindow[i].close();
		}
	}

	$scope.estoy_aqui = function(donde){
		
		//AJAX
		$http({
		    url: "/ciego/lib/ajax/garito.php?lat="+donde.lat()+"&lng="+donde.lng()+"&dist="+50,
		    method: "GET"
		}).success(function(data, status, headers, config) {

			aqui = donde;
			bounds = new google.maps.LatLngBounds();
			actual.setPosition(aqui);
			bounds.extend(aqui);
			map.setCenter(aqui);
			console.log(data);
			if(data=="null"){
				alert("Error");
			}else{
				$scope.clearMarkers();

				for(var i in data){

					console.log("Garito es: "+data[i].lat);
					garito = new google.maps.LatLng(data[i].lat,data[i].lng);

					cont = marker.length;

					marker[cont] = new google.maps.Marker({
						animation: google.maps.Animation.DROP,
						map: map,
						icon: tipo[data[i].tipo_id],
						position: garito
					});
					marker[cont].set("id",data[i].id);
					bounds.extend(garito);
					map.fitBounds(bounds);

				  	infowindow[cont] = new google.maps.InfoWindow({
				    	content: '<div class="info"><p>Lorem ipsum #'+data[i].id+'</p></div>'
				  	});
				  	google.maps.event.addListener(marker[cont],'click', (function(marker,infowindow){ 
					    return function() {
					    	$scope.clearInfowindows();
					        infowindow.open(map,marker);
					    };
					})(marker[cont],infowindow[cont]));  
				}
			}
		}).error(function(data, status, headers, config) {
		    $scope.status = status;
		    alert(status);
		});
	}
	/*FUNCIONES DEL MAPA*/

	$scope.codeAddress = function(direccion){
		geocoder.geocode( { 'address': direccion}, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) {

				aqui = results[0].geometry.location;
				$scope.estoy_aqui(results[0].geometry.location);
				//$scope.data.buscar = "";

			}else{
				alert("La geolocalización ha fallado: " + status);
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
			    	aqui = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			    	$scope.estoy_aqui(aqui);
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
		var mapOptions = {
			center: aqui,
			zoom: 6,
			draggable: true,
			scrollwheel: true,
			panControl: false,
			zoomControl: true,
			zoomControlOptions: {
		        position: google.maps.ControlPosition.LEFT_CENTER
		    },
			streetViewControl: false,
			streetViewControlOptions: {
		    	position: google.maps.ControlPosition.LEFT_CENTER
		    },
			mapTypeControlOptions: {
				mapTypeIds: ['map_style',google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.HYBRID],
				position: google.maps.ControlPosition.RIGHT_BOTTOM
			}
		};

		map = new google.maps.Map(document.getElementById('mapa'),mapOptions);

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
			map.fitBounds(bounds);
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

	    	// If the place has a geometry, then present it on a map.
	    	if (place.geometry.viewport) {
	      		map.fitBounds(place.geometry.viewport);
	    	} else {
	      		map.setCenter(place.geometry.location);
	    	}
	    
	    	$scope.estoy_aqui(place.geometry.location);
	  	});
	}

	angular.element(document).ready(function() {
		$scope.initialize();
		
		/*$('#campoBuscar').focus(function(){
			$(this).val("");
		});

		$('#formBuscar').submit(function(e){
			e.preventDefault();
			codeAddress($('#campoBuscar').val());
			$('#campoBuscar').blur();
		});*/
	});
});
