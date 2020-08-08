import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const LidarDataProcessing = () => {
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
                    <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">LiDAR Data Processing</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        LiDAR technology enables the data capture on field by lighting the target using pulsed laser. As LiDAR also provides elevation data, it finds applications in several industries.<br/><br/>

                        bipinmsit provides a wide range of LiDAR data processing services that helps in creating Digital Elevation Models (DEM), Digital Terrain Models (DTM) and Triangulated Inverse Networks (TIN) to provide highly accurate detail of the Earth’s surface. bipinmsit LiDAR data processing services have helped global industries in taking informed decisions about their business. LiDAR data processing services enable the electrical utility industry with the efficient planning and maintenance of electric networks. LiDAR classification also gives a supporting hand to the agricultural sector, by watershed delineation and crop assessment mapping using LiDAR point cloud data. This way, LiDAR classification and LiDAR data processing assists many industrial sectors in planning and making informed decisions.<br/><br/>

                        Typical LiDAR data processing services by bipinmsit include:<br/>
                        </p>

                        <ul className="ml-3">
                            <li>LiDAR data processing of electrical utilities</li>
                            <li>Watershed delineation using LiDAR data processing techniques</li>
                            <li>LiDAR data processing of forestry area</li>
                            <li>LiDAR data processing of agricultural features</li>
                            <li>LiDAR data classification /point cloud classification</li>
                            <li>LiDAR data processing of oil and gas networks</li>
                        </ul><br/>
                        In addition, bipinmsit also provides the following services on LiDAR data <br/>

                        <ul className="ml-3">
                            <li>Data cleansing and noise removal</li>
                            <li>Bare Earth & non ground LiDAR classification</li>
                            <li>Generation of DTM and contours</li>
                            <li>Vectorisation and feature extraction</li>
                            <li>Image overlay and point cloud colourisation</li>
                        </ul>

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default LidarDataProcessing