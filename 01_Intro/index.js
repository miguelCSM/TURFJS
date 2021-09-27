var mymap = L.map("mapid").setView(
  [21.152364203854884, -101.71115227036523],
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 9,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var geojson = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.6824940171719, 21.12574244951028],
    },
    properties: {
      name: "León",
      title: "León, Guanajuato",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.1748887669979, 21.486437422597927],
    },
    properties: {
      name: "SFTM",
      title: "SFTM",
    },
  },
];

coords = [];

var puntos = L.geoJSON(geojson, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    coords.push(feature.geometry.coordinates);
  },
});

mymap.addLayer(puntos);
