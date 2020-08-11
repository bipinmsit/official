import React from 'react'
import L from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'
import {Map, TileLayer, Popup, Marker} from 'react-leaflet'
import '../css/service.css'
import Search from 'react-leaflet-search'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Mymap = () => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [20, 40]
    });
    const position = [12.942344, 77.581118]
    return(
        <>
            <Map center={position} zoom={13} >
            <Search position="topright" />
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={DefaultIcon}>
                    <Popup>
                       <strong>bipinmsit</strong> welcomes to visit <br/> WebGIS Service
                    </Popup>
                </Marker>
            </Map>
        </>
    )
}
export default Mymap