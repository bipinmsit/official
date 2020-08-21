import React, {useEffect} from 'react'
import survey from '../services/images/drone.png'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const Survey = () => {
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
                    <img src={survey} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">Survey</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        Survey has played an important role in collecting data from areas that don’t have updated maps. Survey maps also play a crucial role in ground truthing the concerned area for creation of accurate land information maps. These maps also assists companies in understanding the market trends, land information for real estate, architecture, mining and utilities industries. These maps bring about a multi-dimensional perspective for making informed decisions.<br/><br/>

                        bipinmsit has a wide network of surveyors who assist various governmental as well as private organisation in completion of manual survey. They also play an important role in creation of detail oriented navigational maps.<br/><br/>
                        </p>

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
                                <li>Contact or door to door surveys are conducting by the surveyors at bipinmsit for various industries.</li>
                            </ul><br/>
                        The surveys can be produced on various platforms such as 2D or 3D AutoCAD, ERDAS, and ARCMap.

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default Survey