require(["esri/map", "dojo/domReady!"], function(Map) { 
  var map;
  function showPosition(position){
	//coords.innerHTML = position.coords.latitude;
  };
  var init = function(){
  map = new Map("map", {
    center: [149.1, -35.3],
    zoom: 12,
    basemap: "topo"
  });	  
  };
  var other = function(){
  navigator.geolocation.getCurrentPosition(showPosition);
  var coords = getElementById('coords');
  coords.innerHTML = 'temp';	  
  };
  dojo.ready(init);
  
});

