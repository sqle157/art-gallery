var map = L.map("map").setView([41.482144, -71.310512], 30);
var myIcon = L.icon({
	iconUrl: "./assets/icon-location.svg",
	iconSize: [66, 88],
	iconAnchor: [32, 90],
	popupAnchor: [-3, -76],
});
var marker = L.marker([41.482144, -71.310512], { icon: myIcon }).addTo(map);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor',
	maxZoom: 18,
	id: "mapbox/streets-v11",
	tileSize: 512,
	zoomOffset: -1,
	accessToken: "your.mapbox.access.token",
}).addTo(map);

// Click on map to get lat/long
function onMapClick(e) {
	marker.setLatLng(e.latlng);
}

// Add event listener to map
map.on("click", onMapClick);
