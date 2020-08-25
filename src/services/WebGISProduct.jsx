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
import "../css/service.css"
import 'leaflet-draw'
import togeojson from 'togeojson'
import fileLayer from 'leaflet-filelayer'
import tokml from 'tokml'
import GetAppIcon from '@material-ui/icons/GetApp';

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
        var loc = L.marker([12.942344, 77.581118], {icon:myIcon})
        loc.on('mouseover', function(){
            loc.bindPopup('My Location').openPopup()
        })
        loc.on('mouseout', function(){
            loc.closePopup()
        })

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

        // Measurement tools
        var measureControl = new L.Control.Measure(
            { position: 'topleft' },
            { primaryLengthUnit: 'meters', secondaryLengthUnit: 'feet' },
            { primaryAreaUnit: 'sqmeters', secondaryAreaUnit: 'acres' }
            );
        measureControl.addTo(map);

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
                circle: true,
                rectangle: {
                    shapeOptions: {
                        clickable: false,
                        color: 'magenta'
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
        // Add popup for giving the description
        map.on('draw:created', function (event) {
            var layer = event.layer,
              feature = layer.feature = layer.feature || {};
        
            feature.type = feature.type || "Feature";
            var props = feature.properties = feature.properties || {};
            props.desc = null;
            // props.image = null;
            drawnItems.addLayer(layer);
            addPopup(layer);
        });
        
        function addPopup(layer) {
          var content = document.createElement("textarea");
            content.placeholder="Enter Details"
            content.addEventListener("keyup", function () {
              layer.feature.properties.desc = content.value;
            });
            layer.on("popupopen", function () {
              content.value = layer.feature.properties.desc;
              content.focus();
            });
            layer.bindPopup(content).openPopup();
        }

        // For creating the polygon from cicle draw
        function createGeodesicPolygon(origin, radius, sides, rotation, projection) {
            var latlon = origin; //leaflet equivalent
            var angle;
            var new_lonlat, geom_point;
            var points = [];
    
            for (var i = 0; i < sides; i++) {
                angle = (i * 360 / sides) + rotation;
                new_lonlat = destinationVincenty(latlon, angle, radius); 
                geom_point = L.latLng(new_lonlat.lng, new_lonlat.lat); 
    
                points.push(geom_point); 
            }   
    
            return points; 
        };
        L.Util.VincentyConstants = {
            a: 6378137,
            b: 6356752.3142,
            f: 1/298.257223563  
        };  
        function destinationVincenty(lonlat, brng, dist) { //rewritten to work with leaflet    
            var u = L.Util;
            var ct = u.VincentyConstants;
            var a = ct.a, b = ct.b, f = ct.f;
            var lon1 = lonlat.lng;
            var lat1 = lonlat.lat;
            var s = dist;
            var pi = Math.PI;
            var alpha1 = brng * pi/180 ; //converts brng degrees to radius
            var sinAlpha1 = Math.sin(alpha1);
            var cosAlpha1 = Math.cos(alpha1);
            var tanU1 = (1-f) * Math.tan( lat1 * pi/180 /* converts lat1 degrees to radius */ ); 
            var cosU1 = 1 / Math.sqrt((1 + tanU1*tanU1)), sinU1 = tanU1*cosU1;
            var sigma1 = Math.atan2(tanU1, cosAlpha1);
            var sinAlpha = cosU1 * sinAlpha1;
            var cosSqAlpha = 1 - sinAlpha*sinAlpha;
            var uSq = cosSqAlpha * (a*a - b*b) / (b*b);
            var A = 1 + uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));
            var B = uSq/1024 * (256+uSq*(-128+uSq*(74-47*uSq)));
            var sigma = s / (b*A), sigmaP = 2*Math.PI;
            while (Math.abs(sigma-sigmaP) > 1e-12) {
                var cos2SigmaM = Math.cos(2*sigma1 + sigma);
                var sinSigma = Math.sin(sigma);
                var cosSigma = Math.cos(sigma);
                var deltaSigma = B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
                    B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));
                sigmaP = sigma;
                sigma = s / (b*A) + deltaSigma;
            }
            var tmp = sinU1*sinSigma - cosU1*cosSigma*cosAlpha1;
            var lat2 = Math.atan2(sinU1*cosSigma + cosU1*sinSigma*cosAlpha1,
                (1-f)*Math.sqrt(sinAlpha*sinAlpha + tmp*tmp));
            var lambda = Math.atan2(sinSigma*sinAlpha1, cosU1*cosSigma - sinU1*sinSigma*cosAlpha1);
            var C = f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));
            var lam = lambda - (1-C) * f * sinAlpha *
                (sigma + C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));  
            // var revAz = Math.atan2(sinAlpha, -tmp);  // final bearing
            var lamFunc = lon1 + (lam * 180/pi); //converts lam radius to degrees
            var lat2a = lat2 * 180/pi; //converts lat2a radius to degrees
    
            return L.latLng(lamFunc, lat2a);    
        }; 
       
        var drawControl = new L.Control.Draw(options);
        map.addControl(drawControl); 
        map.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType
            var layer = e.layer;
            if (type === 'circle'){                
                layer.feature.properties["radius"] = layer.getRadius()
                var origin = layer.getLatLng(); //center of drawn circle
                var radius = layer.getRadius(); //radius of drawn circle
                var projection = L.CRS.EPSG4326;
                var polys = createGeodesicPolygon(origin, radius, 60, 0, projection); //these are the points that make up the circle
                var polygon = []; // store the geometry
                for (var i = 0; i < polys.length; i++) {
                    var geometry = [polys[i].lat, polys[i].lng]; 
                    polygon.push(geometry);
                }
                var cpolygon = L.polygon(polygon);
                drawnItems.addLayer(cpolygon);
            }else{
                drawnItems.addLayer(layer);
            }         
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
                    }else{
                        selectedFeature = e.target;
                        e.target.editing.enable();
                    }
                }).addTo(drawnItems)
                if (feature.geometry.type==="Point"){
                    layer.on('mouseover', function(){
                        layer.bindPopup(feature.geometry.coordinates[1] + ',' + feature.geometry.coordinates[0]).openPopup();
                    })
                    layer.on('mouseout', function(){
                        layer.closePopup();
                    })
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
                '.kml',
                '.json',
                '.gpx'
            ]
        }).addTo(map);
        // Export to kml
        document.getElementById('export_kml').onclick = function(e) {
            // Extract GeoJson from featureGroup
            var data = drawnItems.toGeoJSON();
            var kml = tokml(data)
            var convertedData = 'application/xml;charset=utf-8,' + encodeURIComponent(kml);
            // Create export_kml
            document.getElementById('export_kml').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export_kml').setAttribute('download','data.kml');
        }
        // Export to geojson
        document.getElementById('export_geojson').onclick = function(e) {
            // Extract GeoJson from featureGroup
            var data = drawnItems.toGeoJSON();
            var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
            // Create export_geojson
            document.getElementById('export_geojson').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export_geojson').setAttribute('download','data.geojson');
        }
    },[])

    return(
        <>
            <div id='map'></div>
            <a download target="_blank" href='#export' id='export_kml'><GetAppIcon/>kml</a>
            <a download target="_blank" href='#export_geojson' id='export_geojson'><GetAppIcon/>geojson</a>
        </>
    )
}
export default WebGISProduct