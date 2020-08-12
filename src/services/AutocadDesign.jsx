import React, {useEffect} from 'react'
import autocadDesign from '../services/images/autocad_design.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const AutocadDesign = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4 col-xl-4">
                    <div className="sidenav">
                    <NavLink exact to="/home/service/gisService"><h4>GIS Services</h4></NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/digitalPhotogrammetry">Digital Photogrammetry</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/digitization">Digitization</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/remoteSensing">Remote Sensing</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/indoorMapping">Indoor Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/cadestralMapping">Cadestral Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/topographicalMapping">Topographical Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/parcelMapping">Parcel Mapping</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/gisDataCapture">GIS Data Capture</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/lidarDataProcessing">LiDAR Data Processing</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/autocadDesign">AutoCAD Design</NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/gisService/survey">Survey</NavLink>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8 col-xl-8">
                <figure className="figure">
                    <img src={autocadDesign} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">AutoCAD Design</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                     We incorporate geographic information system (GIS) and CAD data with an industry-specific toolset for GIS and 3D mapping.
                    </p>
                    <h5>bipinmsit provide the following AutoCAD Drawing services: </h5>
                    <ul>
                        <li>2D/3D Planimetric Map</li>
                        <li>Chainage Report</li>
                        <li>CAD Overlay</li>
                    </ul>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default AutocadDesign