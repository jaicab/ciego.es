
ciego.factory("Data", function(){
	return {
		map: '',
		geocoder: new google.maps.Geocoder(),
		bounds: new google.maps.LatLngBounds(),
		aqui: new google.maps.LatLng(40.416775, -3.703790),
		actual: '',
		marker: [],
		infowindow: [],
		nuevo: false
	}
});








