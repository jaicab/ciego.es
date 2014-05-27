
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








