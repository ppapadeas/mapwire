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

function point (latlon) {
    map.setView(new L.LatLng(latlon), 15);
}

function maprightclick(e) {
    var popuptext = "<b>" + e.latlng.lat.toFixed(4) + "&nbsp;&nbsp;" + e.latlng.lng.toFixed(4) + "</b>&nbsp;&nbsp;<a href=\"/p/" + e.latlng.lat + "/" + e.latlng.lng + "\" class=\"icon\">o</a>";
    L.marker(e.latlng).addTo(map).bindPopup(popuptext).openPopup();
}
