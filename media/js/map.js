var map = new L.Map('map');

var osmUrl='http://{s}.tile.cloudmade.com/4d59c974fe9a420786396199c45eda6f/997/256/{z}/{x}/{y}.png';
var osmAttrib='Map data © OpenStreetMap contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib});

map.setView(new L.LatLng(29, 22.5), 2);
map.addLayer(osm);

function onLocationFound(e) {
    var radius = Math.round(e.accuracy / 2);

    L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}


function myloc () {
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    map.locate({setView: true, maxZoom: 16});
}



