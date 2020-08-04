import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const ParcelMapping = () => {
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
                    <div className="service">Parcel Mapping</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Parcel Mapping is a process in which land parcels are created for efficient and effective land management. Parcel mapping service generates maps, created from base maps, with polygons that have details about the ownership of properties and other related information. The base maps used in parcel mapping are the cadastral maps showing each individual plots in different sub divisions. The land parcels are the fundamental data layer on which different data are referenced. Parcel mapping has a variety of uses such as land administration & property registration by urban and rural governing bodies. Municipality planning & urban development is taken care through the use of various parcel mapping techniques, which have the ability to restore analytical data that is crucial for enhancing the operational abilities of the government bodies.<br/><br/>

                        Use of parcel mapping services has increased over time and it has been observed that the time required to process and fulfil requests for land registry information has dropped by almost 80% in various countries. The use of parcel mapping services has consequently led to substantial improvements in handling the enormous requests generated over a period. Subsequently there is a huge reduction of overhead costs, and maintaining the data in a secured environment. Parcel mapping is also used by cartographic officials, rescue operations during floods and natural disasters for identifying property owners and retrieving crucial data. Parcel maps are also the base for any such GIS Maps.<br/><br/>

                        bipinmsit can replace the cumbersome process of maintaining data on paper maps with digital parcel maps using parcel mapping for:<br/><br/>
                        <div className="ml-3">
                            <li>Municipal & other Urban Bodies</li>
                            <li>Government Departments</li>
                            <li>Builders</li>
                            <li>Real Estate Agents</li>
                            <li>Appraisers</li>
                            <li>Engineers</li>
                            <li>Surveyors</li>
                            <li>Developers</li>
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
export default ParcelMapping