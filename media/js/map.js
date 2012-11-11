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

function togglefull() {
    var docElem=document.documentElement;
    if (docElem.requestFullScreen) {
        docElem.requestFullScreen();
    }
    else if (docElem.mozRequestFullScreen) {
        docElem.mozRequestFullScreen();
    }
    else if (docElem.webkitRequestFullScreen) {
        docElem.webkitRequestFullScreen();
    }
}

function point(latlon) {
    map.setView(new L.LatLng(latlon), 15);
}
