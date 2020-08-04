import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const AutocadDesign = () => {
    console.log(NavLink)
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="sidenav">
                        <NavLink exact to="/service/gisService"><h4>GIS Services</h4></NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/digitalPhotogrammetry">Digital Photogrammetry</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/digitization">Digitization</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/remoteSensing">Remote Sensing</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/indoorMapping">Indoor Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/cadestralMapping">Cadestral Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/topographicalMapping">Topographical Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/parcelMapping">Parcel Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/gisDataCapture">GIS Data Capture</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/lidarDataProcessing">LiDAR Data Processing</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/autocadDesign">AutoCAD Design</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/service/gisService/survey">Survey</NavLink>
                    </div>
                </div>
                <div className="col-9">
                <figure className="figure">
                    <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                    <div className="service">AutoCAD Design</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Write the content here
                    </p>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default AutocadDesign