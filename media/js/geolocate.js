//based on http://html5demos.com/geo

function success(position) {
    var s = document.querySelector('#status');
  
    //if (s.className == 'success') {
    // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
        //return;
    //}
  
    
    //s.innerHTML = "found you! "+position.coords.latitude+" "+position.coords.longitude;
    //s.className = 'success';
    $('#status').load("/myloc/"+position.coords.latitude+"/"+position.coords.longitude+"/");
/*  
    var map = new L.Map('map');
  
    var osmUrl='http://{s}.tile.cloudmade.com/4d59c974fe9a420786396199c45eda6f/997/256/{z}/{x}/{y}.png';
    var osmAttrib='Map data © OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 17, attribution: osmAttrib});
  
    map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 15);
    map.addLayer(osm);
  
    var myloc = new L.LatLng(position.coords.latitude, position.coords.longitude);
    var mymark = new L.Marker(myloc);
    map.addLayer(mymark);
*/

    map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude), 15);
    
}

function error(msg) {
    var s = document.querySelector('#status');
    s.innerHTML = typeof msg == 'string' ? msg : "failed";
    s.className = 'fail';
}

function get_loc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error('not supported');
    }
}


