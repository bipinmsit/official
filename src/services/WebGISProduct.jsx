import React, {useEffect} from 'react'
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import '../../node_modules/leaflet-geosearch/assets/css/leaflet.css'
import '../../node_modules/leaflet-easybutton/src/easy-button.css'
import '../../node_modules/leaflet-easybutton/src/easy-button.js'
import '../../node_modules/leaflet-mouse-position/src/L.Control.MousePosition.css'
import '../../node_modules/leaflet-mouse-position/src/L.Control.MousePosition.js'
import '../../node_modules/leaflet-ajax/dist/leaflet.ajax.min.js'
import '../../node_modules/leaflet-measure/dist/leaflet-measure.js'
import '../../node_modules/leaflet-measure/dist/leaflet-measure.css'
import '../../node_modules/leaflet-graphicscale/dist/Leaflet.GraphicScale.min.css'
import '../../node_modules/leaflet-graphicscale/dist/Leaflet.GraphicScale.min.js'
import "../css/service.css"
import 'leaflet-draw'
import togeojson from 'togeojson'
import fileLayer from 'leaflet-filelayer'

const WebGISProduct = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        var myIcon = L.icon({
            iconUrl: icon,
            iconSize: [17, 27],
            iconAnchor: [9, 30],
            popupAnchor: [0, -28]
         });

        var MyCustomMarker = L.Icon.extend({
            options: {
                shadowUrl: iconShadow,
                iconSize: [17, 27],
                iconUrl: icon
            }
        });

        var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution:'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
            googleSatellite = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {subdomains: ['mt0','mt1','mt2','mt3']})

        // Creating overlay maps
        var loc = L.marker([12.942344, 77.581118], {icon:myIcon}).bindPopup('My Location')

        // Creating Maps
        var map = L.map('map', {
        center: [12.942344, 77.581118],
        zoom: 16,
        layers: [googleSatellite],
        fullscreenControl: true
        });

        // Add Scale
        L.control.scale().addTo(map)

        // Mouse hover coordinate on leaflet map
        L.control.mousePosition({position:"topright"}).addTo(map);

        // GeoSearch
        const provider = new OpenStreetMapProvider();
        const searchControl = new GeoSearchControl({
            provider: provider,
            position: "topright",
        });
        map.addControl(searchControl);

        // Basemap objects
        var baseMaps = {
        "OSM": osm,
        "Google Satellite": googleSatellite
        };

        // Overlaymap objects
        var overlayMaps = {
            "My Location":loc
        }
        L.control.layers(baseMaps, overlayMaps, {position: "topleft"}).addTo(map)
                  
        // Leaflet-draw
        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems); 

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
                        color: 'cyan'
                    }
                },
                circle: {
                    shapeOptions: {
                        color: 'magenta'
                    }
                },
                rectangle: {
                    shapeOptions: {
                        clickable: false
                    }
                },
                marker: {
                    icon: new MyCustomMarker()
                },
                circlemarker:false
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
        L.easyButton('fa-exclamation-triangle', function(btn, map){
            var answer = window.confirm("Do you want to delete all features ?")
            if(answer){
                drawnItems.clearLayers();
            }
        }, 'Delete All Features', {position:"topright"}).addTo(map)

        // Import Feature
        fileLayer(null, L, togeojson)  
        var selectedFeature = null;       
        var geoJsonOptions = {
            onEachFeature: function (feature, layer) {
                layer.on('click', function(e){
                    if(selectedFeature){
                        selectedFeature.editing.disable()
                    }
                    selectedFeature = e.target;
                    e.target.editing.enable();
                }).addTo(drawnItems)
                if (feature.geometry.type==="Point"){
                    layer.bindPopup(feature.geometry.coordinates[1] + ',' + feature.geometry.coordinates[1]);
                }else {
                    layer.bindPopup('FeatureType: ' + feature.geometry.type);
                }
            },         
                style: {color:'red'},
                pointToLayer: function (data, latlng) {
         
                // setup popup, icons...
         
               return L.marker(latlng, {icon: myIcon});
               }
            }        
        L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open"></i>';
        L.Control.fileLayerLoad({
            // Allows you to use a customized version of L.geoJson.
            // For example if you are using the Proj4Leaflet leaflet plugin,
            // you can pass L.Proj.geoJson and load the files into the
            // L.Proj.GeoJson instead of the L.geoJson.
            layer: L.geoJson,
            // See http://leafletjs.com/reference.html#geojson-options
            layerOptions: geoJsonOptions,
            // Add to map after loading (default: true) ?
            addToMap: true,
            // File size limit in kb (default: 1024) ?
            fileSizeLimit: 1024,
            position: "topright",
            // Restrict accepted file formats (default: .geojson, .json, .kml, and .gpx) ?
            formats: [
                '.geojson',
                '.kml'
            ]
        }).addTo(map);
        // Measurement tools
        var measureControl = new L.Control.Measure(
            { primaryLengthUnit: 'meters', secondaryLengthUnit: 'feet' },
            { primaryAreaUnit: 'sqmeters', secondaryAreaUnit: 'acres' }
            );
        measureControl.addTo(map);

        // Export to GeoJSON
        document.getElementById('export').onclick = function(e) {
            // Extract GeoJson from featureGroup
            var data = drawnItems.toGeoJSON();
            // Stringify the GeoJson
            var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
            // Create export
            document.getElementById('export').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export').setAttribute('download','data.geojson');
        }
    },[])

    return(
        <>
            <div id='map'></div>
            <a href='#export' id='export'>Export Feature</a>
        </>
    )
}
export default WebGISProduct