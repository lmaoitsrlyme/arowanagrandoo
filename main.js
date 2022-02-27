let latitude = 1.290270, longitude = 103.851959;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#gbtb")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([1.282375, 103.864273])
	.addTo(map);

var img2 = document.querySelector("#esplanade")
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([1.2872655176, 103.853046588])
	.addTo(map);

var img3 = document.querySelector("#gate")
// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([1.3151, 103.8162])
	.addTo(map);


var img4 = document.querySelector("#lotus")

// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([1.289437, 103.84998])
	.addTo(map);