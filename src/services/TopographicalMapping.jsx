import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const TopographicalMapping = () => {
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
                    <div className="service">Topographical Mapping</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                    Topographic mapping services helps in route planning, thematic data preparation, and decision-making for telecom and transport services and disaster management. The 3D topographic maps cover an area of approximately thousands of square kilometres and therefor require experienced expertise.<br/><br/>

                    AABSyS IT offers topographic mapping services to create comprehensive topographic maps and 3D topographic maps to the specified projection parameters, contours with ‘Z’ values, relief & planimetric details. AABSyS IT has successfully executed large-scale topographic mapping and 3D topographic mapping project. The general steps involved in topographic mapping and 3D topographic mapping project are:<br/><br/>

                    <div className="ml-3">
                        <ol>
                        <li>Raster to Vector conversion of 3D topographic maps are conducted using high end, up-to-date CAD software such as AutoCAD, MicroStation etc.</li>
                        <li>Different features of the 3D topographic maps such as contour lines, boundary lines, transportation, water areas, vegetation, habitations, forest areas etc. are captured</li>
                        <li>These features are then digitized in different layers to generate a topographic map in vector format.</li>
                        <li>The 3D topographic mapping is done by assigning the Z-values to the contours and generating the 3D terrain model of the topography.</li>
                        <li>With the help of 3D topographic maps AABSyS technical experts create digital terrain models (DTM), digital elevation models (DEM) and triangulated irregular networks (TINs).</li>
                        </ol>
                    </div>
                    </p>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default TopographicalMapping