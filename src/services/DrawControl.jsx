import React, {useEffect} from 'react'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.js'
import L from 'leaflet'
import "../css/service.css"


const DrawControl = () => {
    useEffect(() => {
        var map = L.map('map').setView([51.505, -0.09], 13);
        console.log(map)
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        var editableLayers = new L.FeatureGroup();
        map.addLayer(editableLayers);
        
        var MyCustomMarker = L.Icon.extend({
            options: {
                shadowUrl: null,
                iconAnchor: new L.Point(12, 12),
                iconSize: new L.Point(24, 24),
                iconUrl: 'link/to/image.png'
            }
        });
        
        var options = {
            position: 'topright',
            draw: {
                polyline: {
                    shapeOptions: {
                        color: '#f357a1',
                        weight: 10
                    }
                },
                polygon: {
                    allowIntersection: false, // Restricts shapes to simple polygons
                    drawError: {
                        color: '#e1e100', // Color the shape will turn when intersects
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: '#bada55'
                    }
                },
                circle: false, // Turns off this drawing tool
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
                featureGroup: editableLayers, //REQUIRED!!
                remove: false
            }
        };
        
        var drawControl = new L.Control.Draw(options);
        map.addControl(drawControl);
        
        map.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType,
                layer = e.layer;
        
            if (type === 'marker') {
                layer.bindPopup('A popup!');
            }
        
            editableLayers.addLayer(layer);
        });

        })
        return(
            <>
            <div className="product">
                <div className="row">
                    <div className="col-sm col-md col-lg-6 col-xl-6" id="map" >
                    </div>
                </div>
            </div>
            </>
        )
}
export default DrawControl