import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const Survey = () => {
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
                    <div className="service">Survey</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Survey has played an important role in collecting data from areas that don’t have updated maps. Survey maps also play a crucial role in ground truthing the concerned area for creation of accurate land information maps. These maps also assists companies in understanding the market trends, land information for real estate, architecture, mining and utilities industries. These maps bring about a multi-dimensional perspective for making informed decisions.<br/><br/>

                        bipinmsit has a wide network of surveyors who assist various governmental as well as private organisation in completion of manual survey. They also play an important role in creation of detail oriented navigational maps.<br/><br/>

                        <h5>bipinmsit offers surveys such as:</h5>
                        <ul className="ml-3">
                            <li>Building Surveys</li>                        
                            <li>Digital Terrain Models (DTMs)</li>
                            <li>Engineering Surveys</li>
                            <li>Legal Mapping Surveys</li>
                            <li>Natural Resources Surveys</li>
                            <li>Ordnance Survey</li>
                            <li>Real Estate Surveys</li>
                            <li>Urban Sprawl Surveys</li>
                            <li>Utility Mapping Surveys</li>
                        </ul><br/>
                        <h5>bipinmsit conducts the survey using the following methods:</h5>
                            <ul>
                                <li>GPS or Global Positioning System provides location and time information in all weather conditions, anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites. It is used in ground truthing of land use land cover maps.</li>
                                <li>DGPS or Differential GPS survey provides improved location accuracy, from the 15-meter nominal GPS accuracy to about 10 cm in case of the best implementations. It is undertaken in two methods: Real Time Kinetic mode and Rapid Static mode. In both the methods, primary control points (PCPs) are required to be set up before taking up detailed survey on all pillar positions that compose the forest area.</li>
                                <li>TS or total survey is an electronic/optical instrument used in modern surveying and building construction. It is useful to the mining, electrical and mechanical industries.</li>
                                <li>ETS is used determine geo-coordinates of secondary control points. Integrated ETS equipment is used to conduct such surveys. They are useful for forestry surveys.</li>
                                <li>Contact or door to door surveys are conducting by the surveyors at AABSyS for various industries.</li>
                            </ul><br/>
                        The surveys can be produced on various platforms such as 2D or 3D AutoCAD, ERDAS, and ARCMap.
                    </p>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default Survey