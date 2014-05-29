
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
		msg: '<div class="left"><p>Ciego.es es un experimento de <i>AngularJS</i> desarrollado por <a href="http://jaicab.com" target="_blank">Jaime Caballero</a> y se encuentra en fase <b>beta</b>. Si algo falla, no dudes en contactar conmigo:</p><ul>' +
		'<li><span class="typcn typcn-social-github-circular"></span> <a target="_blank" href="http://github.com/jaicab">@jaicab</a></li>' + 
		'<li><span class="typcn typcn-social-twitter-circular"></span> <a target="_blank" href="http://twitter.com/jaicab_">@jaicab_</a></li>' + 
		'<li><span class="typcn typcn-social-at-circular"></span> <a href="mailto:contact@jaicab.com">contact@jaicab.com</a></li>' + 
		'</ul><p>AVISO: Ciego.es recomienda un consumo responsable. No nos hacemos responsables de un mal uso de este producto o derivados.</p></div>'
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
		console.log($scope.nuevo);

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
					msg: '<p>Si nos da permiso, Ciego.es utilizará su ubicación para mejorar su experiencia en el sitio. No almacenaremos su ubicación en ningún momento.</p>'
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