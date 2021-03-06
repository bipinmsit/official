import React, {useEffect} from 'react'
import parcelMapping from '../services/images/Parcels-1-copy-2-1500x430.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const ParcelMapping = () => {
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
                    <img src={parcelMapping} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">Parcel Mapping</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Parcel Mapping is a process in which land parcels are created for efficient and effective land management. Parcel mapping service generates maps, created from base maps, with polygons that have details about the ownership of properties and other related information. The base maps used in parcel mapping are the cadastral maps showing each individual plots in different sub divisions. The land parcels are the fundamental data layer on which different data are referenced. Parcel mapping has a variety of uses such as land administration & property registration by urban and rural governing bodies. Municipality planning & urban development is taken care through the use of various parcel mapping techniques, which have the ability to restore analytical data that is crucial for enhancing the operational abilities of the government bodies.<br/><br/>

                        Use of parcel mapping services has increased over time and it has been observed that the time required to process and fulfil requests for land registry information has dropped by almost 80% in various countries. The use of parcel mapping services has consequently led to substantial improvements in handling the enormous requests generated over a period. Subsequently there is a huge reduction of overhead costs, and maintaining the data in a secured environment. Parcel mapping is also used by cartographic officials, rescue operations during floods and natural disasters for identifying property owners and retrieving crucial data. Parcel maps are also the base for any such GIS Maps.<br/><br/>

                        bipinmsit can replace the cumbersome process of maintaining data on paper maps with digital parcel maps using parcel mapping for:<br/><br/>
                    </p>
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

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default ParcelMapping