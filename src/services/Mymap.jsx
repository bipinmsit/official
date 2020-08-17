import React from 'react'
import L from 'leaflet'
import '../css/service.css'
import '../../node_modules/leaflet/dist/leaflet.css'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import '../../node_modules/react-leaflet-fullscreen/dist/styles.css'
import {Map, TileLayer, Circle, LayerGroup, LayersControl, Marker, Popup} from 'react-leaflet'
import FullscreenControl from 'react-leaflet-fullscreen'
import Search from 'react-leaflet-search'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Mymap = (props) => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [20, 40]
    });

    const position = [12.942344, 77.581118]
    const {BaseLayer, Overlay} = LayersControl

    return(
        <>
            <Map 
            center={position} 
            zoom={13} 
            style={{width:`${props.width}`, height:`${props.height}`}} >
                <LayersControl position="topleft">
                    <BaseLayer name="OSM">
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <BaseLayer checked name="Satellite Images">
                        <TileLayer
                        url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                        subdomains={['mt0','mt1','mt2','mt3']} />
                    </BaseLayer>
                    <Overlay name="Layer group with circles">
                        <LayerGroup>
                        <Circle center={position} fillColor="blue" radius={200} />
                        <Circle
                            center={[12.942344, 77.591118]}
                            fillColor="red"
                            radius={300}
                            stroke={false} />
                        <Circle
                        center={[12.962344, 77.591118]}
                        color="green"
                        fillColor="green"
                        radius={400} />
                        </LayerGroup>
                    </Overlay>
                </LayersControl>
                <Search position="topright"
                inputPlaceholder="Search your places" />
                <FullscreenControl position="topright" />
                <Marker position={[12.942344, 77.591118]} icon={DefaultIcon}>
                    <Popup>
                        <strong>bipinmsit</strong> welcomes you to <br />visit WebGIS Service
                    </Popup>
                </Marker>
            </Map>
        </>
    )
}
export default Mymap