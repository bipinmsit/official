import React, {useEffect} from 'react'
import cadestralMapping from '../services/images/cadastral-mapping-in-gis.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const CadestralMapping = () => {
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
                    <img src={cadestralMapping} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption" style={{color:"black"}}>Cadestral Mapping</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Cadastral mapping is a comprehensive register of the details related to the property of an area. These details include the precise location, dimensions, and other geographical classifications of the properties or individual parcels of land. The maps generated using cadastral mapping services help in effective management of public land records. National and local governmental bodies, architecture and engineering firms, real estate developers, industries can uses the cadastral mapping services for making well informed decisions. Cadastral mapping services also enable to user to study additional details, such as survey district names, unique identifying numbers for parcels, certificate of title numbers, positions of existing structures, section or lot numbers and their respective areas, adjoining street names, selected boundary dimensions and references to prior maps.<br/><br/>

                        bipinmsit provides cadastral mapping for creation of cadastral maps from hard copies of the administrative maps with specific details of each plot, roads, railway lines, water bodies, vegetation, etc. These cadastral mapping service provide all inclusive solutions to land information system problems by focusing on various forms of land records.<br/><br/>

                        bipinmsit also has extensive experience of undertaking large scale cadastral mapping projects which include steps such as:<br/><br/>
                        </p>
                        <div className="ml-3">
                        <li>Scanning of hard copy maps</li>
                        <li>Digitization of the maps using proper layer structure</li>
                        <li>Geo-referencing the individual maps</li>
                        <li>Merging the individual cadastral maps to a single map pertaining to a specific area</li>
                        </div><br/>
                        The maps created using cadastral mapping services provide tools that support many types of record keeping, analysis and decision-making, high performance land surface modeling with data assimilation. These maps are created using high end software such as ArcGIS, ERDAS Imagine / ER Mapper, MapInfo, ArcFM, and AutoCAD Map.<br/>

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default CadestralMapping