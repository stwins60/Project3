function initMap() {
	var uluru = {lat: 42.02142, lng: -87.6645018};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
