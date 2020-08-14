import React, {useEffect} from 'react'
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.js'
import '../../node_modules/leaflet-geosearch/assets/css/leaflet.css'
import "../css/service.css"

const DrawControl = () => {
    useEffect(() => {
        var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution:'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
            googleSatellite = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {subdomains: ['mt0','mt1','mt2','mt3']})
        
        // Creating overlay maps
        var islands = new L.LayerGroup();
        L.marker([-9.616, 159.85]).addTo(islands);

        var map = L.map('map', {
        center: [12.942344, 77.581118],
        zoom: 15,
        layers: [osm],
        fullscreenControl: true
        });

        // GeoSearch
        const provider = new OpenStreetMapProvider();
        const searchControl = new GeoSearchControl({
            provider: provider,
            position: "topleft",
        });
        map.addControl(searchControl);
          
        var baseMaps = {
        "OSM": osm,
        "Google Satellite": googleSatellite
        };

        var overlayMaps = {
            "Islands": islands
        }

        L.control.layers(baseMaps, overlayMaps).addTo(map)
                  
        // Leaflet-draw
        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
       
        var MyCustomMarker = L.Icon.extend({
            options: {
                shadowUrl: iconShadow,
                iconSize: new L.Point(15, 25),
                iconUrl: icon
            }
        });
        
        var options = {
            position: 'topright',
            draw: {
                polyline: {
                    shapeOptions: {
                        color: 'red',
                        weight: 3
                    }
                },
                polygon: {
                    allowIntersection: false, // Restricts shapes to simple polygons
                    drawError: {
                        color: '#e1e100', // Color the shape will turn when intersects
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: 'black'
                    }
                },
                circle: {
                    shapeOptions: {
                        color: 'red'
                    }
                },
                rectangle: {
                    shapeOptions: {
                        clickable: false
                    }
                },
                marker: {
                    icon: new MyCustomMarker()
                }
            },
            edit: {
                featureGroup: drawnItems, //REQUIRED!!
            }
        };
        
        var drawControl = new L.Control.Draw(options);
        map.addControl(drawControl);   
        map.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType,
                layer = e.layer;

            if(type==='marker'){
                layer.bindPopup("Control point")
            }
               
            drawnItems.addLayer(layer);
        });
        
        // on click, clear all layers
        document.getElementById('delete').onclick = function(e) {
            drawnItems.clearLayers();
        }
        // Export to GeoJSON
        document.getElementById('export').onclick = function(e) {
            // Extract GeoJson from drawnItems
            var data = drawnItems.toGeoJSON();

            // Stringify the GeoJson
            var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

            // Create export
            document.getElementById('export').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export').setAttribute('download','data.geojson');
        }
    })

    return(
        <>
            <div id='map'></div>
            <button type="button" className="btn btn-danger" id="delete">Delete All Feature</button>
            <button type="button" className="btn btn-success" id="export">Export Feature</button>
        </>
    )
}
export default DrawControl