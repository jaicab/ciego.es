
ciego.factory("Data", function(){
	return {
		map: '',
		geocoder: new google.maps.Geocoder(),
		bounds: new google.maps.LatLngBounds(),
		aqui: new google.maps.LatLng(40.416775, -3.703790),
		actual: '',
		marker: [],
		infowindow: [],
		nuevo: false,
		aviso: {
			tipo: "info",
			msg: "Esto es un experimento de AngularJS desarrollado por Jaime Caballero y se encuentra en fase beta. No nos hacemos responsables de un mal uso de este producto."
		},
		provincias: {
			0: "Álava",
			1: "Albacete",
			2: "Alicante/Alacant",
			3: "Almería",
			4: "Asturias",
			5: "Ávila",
			6: "Badajoz",
			7: "Barcelona",
			8: "Burgos",
			9: "Cáceres",
			10: "Cádiz",
			11: "Cantabria",
			12: "Castellón/Castelló",
			13: "Ceuta",
			14: "Ciudad Real",
			15: "Córdoba",
			16: "Cuenca",
			17: "Girona",
			18: "Las Palmas",
			19: "Granada",
			20: "Guadalajara",
			21: "Guipúzcoa",
			22: "Huelva",
			23: "Huesca",
			24: "Illes Balears",
			25: "Jaén",
			26: "A Coruña",
			27: "La Rioja",
			28: "León",
			29: "Lleida",
			30: "Lugo",
			31: "Madrid",
			32: "Málaga",
			33: "Melilla",
			34: "Murcia",
			35: "Navarra",
			36: "Ourense",
			37: "Palencia",
			38: "Pontevedra",
			39: "Salamanca",
			40: "Segovia",
			41: "Sevilla",
			42: "Soria",
			43: "Tarragona",
			44: "Santa Cruz de Tenerife",
			45: "Teruel",
			46: "Toledo",
			47: "Valencia/Valéncia",
			48: "Valladolid",
			49: "Vizcaya",
			50: "Zamora",
			51: "Zaragoza"
		}
	}
});








