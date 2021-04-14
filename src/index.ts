import 'ol/ol.css';
import {Map, View, Feature} from 'ol';
import * as geom from 'ol/geom'
import * as proj from 'ol/proj'
import {Cluster, OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {
  Circle as CircleStyle,
  Fill,
  Stroke,
  Style,
  Text
} from 'ol/style';

const fileSelector = document.getElementById('csv-input');

if (fileSelector){
  fileSelector.addEventListener('change', (event) => {
    const files = (<HTMLInputElement>event.target).files;
    if(files){
      readCSV(files[0])
    } 
  });
} 

let map;
let layer;
var locations: Array<Feature> = [];
const distance = <HTMLFormElement>document.getElementById('distance');



function readCSV(file: File){
    var reader = new FileReader()
    reader.onload = (event) => {
      if(event.target){
        var data = <string>event.target.result
        if(data){
          var lines = data.split("\n")
          console.log(lines.length)
          lines.shift()
          locations = []
          for(let line of lines){
            var latlong = line.split(",")
            var location: Feature = new Feature({
              geometry: new geom.Point(proj.fromLonLat([parseFloat(latlong[1]), parseFloat(latlong[0])]))
            })
            locations.push(location)
          }
          console.log(locations.length)
          labelMap(locations)
        }
      }
    }
    reader.readAsText(file)  
}


function initMap(){
  map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: proj.fromLonLat([-73.1, 40.763]),
      zoom: 12,
      // minZoom: 9,
    })
  });
}


function labelMap(locations: Array<Feature>){
  var vector_source = new VectorSource({
    features: locations
  })
  var cluster_source = new Cluster({
    source: vector_source,
    distance: parseInt(distance.value, 10),
  })
  var styleCache = {};

  layer = new VectorLayer({
    source: cluster_source,
    style: function (feature) {
      var size = feature.get('features').length;
      var style = styleCache[size];
      if (!style) {
        style = new Style({
          image: new CircleStyle({
            radius: 8,
            stroke: new Stroke({
              color: '#fff',
            }),
            fill: new Fill({
              color: '#3399CC',
            }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: '#00000',
            }),
          }),
        });
        styleCache[size] = style;
      }
      return style;
    },
  });
  map.addLayer(layer);
  distance.style.display = "block"
  distance.addEventListener('input', (event) => {
    cluster_source.setDistance(parseInt(distance.value, 10));
  });
  
}

initMap()
