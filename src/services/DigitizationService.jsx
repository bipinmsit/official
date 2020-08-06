import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const DigitizationService = () => {
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4 col-xl-4">
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
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8 col-xl-8">
                <figure className="figure">
                    <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">Digitization</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                    Digitization services involve converting any physical document into a digital file. This ensures easy handling, sharing and editing of the document. Digitization services are used for converting maps, sketches, schematic diagrams, or circuit diagrams. They are known for ensuring positional accuracy of the objects and is therefore useful in many industries. Digitization services are also used in contour maps, topographic maps, zonal maps, cadastral maps, and utility maps.

                    bipinmsit offers digitization services such as complete CAD Conversion, paper to CAD Conversions and CAD Drafting. These Digitization services are rendered using global standards and therefore the resulting products have high precision and quality. The digitization services at bipinmsit seamlessly convert paper drawings and maps into highly accurate digital files, with the help of paper to CAD conversions. <br /> <br />
                    The various digitization services at bipinmsit are:
                    </p>
                    <ul>
                        <li>
                        2D and 3D Digitization
                        </li>
                        <li>
                        Paper to CAD Conversion
                        </li>
                        <li>
                        Raster to Vector Conversion
                        </li>
                    </ul>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default DigitizationService