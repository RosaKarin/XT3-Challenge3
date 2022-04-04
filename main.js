// // Set api token
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYWthcmluIiwiYSI6ImNrOHI4Njh1djAwbmYzZnFmbTB5M2s3ZmcifQ.NqmAg6EdHGHjWpmsr2XxgQ';

// // Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [4.322840, 52.067101],
  zoom: 15,
  pitch: 45,
//   bearing: -17.6,

});

map.addControl(new mapboxgl.NavigationControl()); //zorgt voor inzoom/uitzoom controlls















//   style: 'mapbox://styles/mapbox/satellite-v9'
//   style: 'mapbox://styles/mapbox/dark-v10'


// Positioning the map on a certain longitute + latitude and zooming in
// Let op de volgorde van de lat, lon!!
// center: [4.322840, 52.067101],
// zoom: 15,





// // Add zoom and rotation controls to the map.
// // map.addControl(new mapboxgl.NavigationControl()); 