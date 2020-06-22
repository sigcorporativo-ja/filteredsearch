import FilteredSearch from 'facade/filteredsearch';

const map = M.map({
  container: 'mapjs',
  controls: ['panzoom', 'layerswitcher', 'mouse'],
  center: {
    x: 360020,
    y: 4149045,
  },
  zoom: 5,
  layers: [
    'WMTS*http://www.ideandalucia.es/geowebcache/service/wmts?*toporaster*SIG-C:25830*WMTS*false',
    // 'WFS*CapaWFS*http://geostematicos-sigc.juntadeandalucia.es/geoserver/sepim/ows*sepim:campamentos*POINT***eyJwYXJhbWV0ZXJzIjpbeyJpY29uIjp7ImZvcm0iOiJDSVJDTEUiLCJjbGFzcyI6ImctY2FydG9ncmFmaWEtYmFuZGVyYSIsImZvbnRzaXplIjowLjUsInJhZGl1cyI6MTUsImZpbGwiOiJ3aGl0ZSJ9LCJyYWRpdXMiOjV9XSwiZGVzZXJpYWxpemVkTWV0aG9kIjoiKChzZXJpYWxpemVkUGFyYW1ldGVycykgPT4gTS5zdHlsZS5TaW1wbGUuZGVzZXJpYWxpemUoc2VyaWFsaXplZFBhcmFtZXRlcnMsICdNLnN0eWxlLlBvaW50JykpIn0',
  ],
});

const layer = new M.layer.WFS({
  url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?',
  namespace: 'tematicos',
  name: 'Provincias',
  legend: 'Provincias',
  geometry: 'MPOLYGON',
});
map.addWFS(layer);


const layer3 = new M.layer.WFS({
  url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/sepim/ows?',
  namespace: 'sepim',
  legend: 'empresas',
  name: 'empresas',
  geometry: 'POINT',
});

map.addWFS(layer3);

const estilo = new M.style.Point({
  radius: 8,
  fill: {
    color: 'blue',
  },
  stroke: {
    color: 'black',
  },
});

layer3.setStyle(estilo);

const mp = new FilteredSearch({
  position: 'TL',
});

map.addPlugin(mp);

window.map = map;
