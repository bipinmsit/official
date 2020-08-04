import React from 'react'
import { NavLink } from 'react-router-dom'
import digitization from './services/digitization.jpg'
import './css/sidenav.css'

const GisService = () => {
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="sidenav">
                        <NavLink exact to="/service/gisService"><h4>GIS Services</h4></NavLink>
                        <NavLink exact to="/service/gisService/digitalPhotogrammetry">Digital Photogrammetry</NavLink>
                        <NavLink exact to="/service/gisService/digitization">Digitization</NavLink>
                        <NavLink exact to="/service/gisService/remoteSensing">Remote Sensing</NavLink>
                        <NavLink exact to="/service/gisService/indoorMapping">Indoor Mapping</NavLink>
                        <NavLink exact to="/service/gisService/cadestralMapping">Cadestral Mapping</NavLink>
                        <NavLink exact to="/service/gisService/topographicalMapping">Topographical Mapping</NavLink>
                        <NavLink exact to="/service/gisService/parcelMapping">Parcel Mapping</NavLink>
                        <NavLink exact to="/service/gisService/gisDataCapture">GIS Data Capture</NavLink>
                        <NavLink exact to="/service/gisService/lidarDataProcessing">LiDAR Data Processing</NavLink>
                        <NavLink exact to="/service/gisService/autocadDesign">AutoCAD Design</NavLink>
                        <NavLink exact to="/service/gisService/survey">Survey</NavLink>
                    </div>
                </div>
                <div className="col-9">
                <figure className="figure">
                    <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                    <div className="service">GIS Services</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    bipinmsit provides numerous GIS services to its clients all over the world. The GIS services rendered by bipinmsit allow for the visualization of geographic data, analysis of spatial relationships, and efficient data management. The GIS data conversions allow data from different sources to be merged in one common format, which allows for easy access, analysis and utilization. <br /> br /

                    bipinmsit works on GIS data conversions and prepares electronic maps using Geographic Information Systems (GIS) technology by utilizing the paper or electronic data that has been either captured by the clients or collected otherwise. <br /> <br />

                    The vast expertise and experience allows bipinmsit to integrate GIS, CAD and Global Positioning Systems (GPS) services, by using high-end GIS Mapping and GIS data conversions software. These services assist the customers to produce contour maps, spatial maps, atlas maps, cadastral maps, thematic and zonal maps, landscape maps, and environmental maps for host industries such as mining and geology, utility, agriculture, petroleum pipelines, land information management, and other GIS Mapping companies and Remote Sensing companies. <br /> <br />

                    bipinmsit provides GIS services with an all-inclusive solution for spatial data management to government and industrial organizations through GIS remote sensing services. bipinmsit’s complex GIS Mapping Services and GIS Remote Sensing services include capturing, storing, integrating, manipulating, analysing, and displaying data related to positions on the Earth’s surface. <br /> <br />

                    bipinmsit uses updated technology, research and innovation that are implemented by highly experienced and qualified staff to create maps. bipinmsit’s team of engineers, geo-scientists, planners have developed GIS products and systems, integrated with GPS, GIS, and CAD. The services can be used for system design and architecture, management and maintenance, map production and analysis (specialized for GIS mapping agencies also), database design and development, user training and support, and 3d modeling and visualization for GIS mapping products and GIS remote sensing products. <br /> <br />

                    The various GIS Data Services offered by bipinmsit are: <br /> <br />
                    <div className="ml-5">
                        <li> <NavLink exact to="/service/gisService/digitalPhotogrammetry">Digital Photogrammetry</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/digitization">Digitization</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/remoteSensing">Remote Sensing</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/indoorMapping">Indoor Mapping</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/cadestralMapping">Cadestral Mapping</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/topographicalMapping">Topographical Mapping</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/parcelMapping">Parcel Mapping</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/gisDataCapture">GIS Data Capture</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/lidarDataProcessing">LiDAR Data Processing</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/autocadDesign">AutoCAD Design</NavLink> </li>
                        <li> <NavLink exact to="/service/gisService/survey">Survey</NavLink> </li>
                    </div>
                </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default GisService