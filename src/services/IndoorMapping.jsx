import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const IndoorMapping = () => {
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
                    <figcaption className="figure-caption">Indoor Mapping</figcaption>
                </figure>
                <div className="text-justify">
                    
                <p>
                These days the increasing complexities of building structures and number of smart phone users have led to need for indoor building maps. Indoor building maps are a feature installed in various devices like kiosks and phone applications for navigational purposes and personnel directories. They enable the user to navigate from one place to another within a building premise and save the user from being lost and clueless in a huge and complex building premise.<br/><br/>

                Indoor building maps operates on the basic fundamentals of calculated path mapping – a sophisticated system allows the user to find the shortest route between their origin and destination in real time, depending on sources of user input.<br/><br/>

                The smart phone users now expect the indoor plan of all the building’s to be a click way therefore bipinmsit creates indoor building plans for buildings worldwide. These indoor maps are significant in information transmission and searching perspective, especially in large public and private buildings. The indoor maps act as mobility aids in navigation to classrooms, restrooms, stairwells, elevators, entry/exit areas, cafeterias, restaurants or any other parts of the building. A comprehensive indoor map dataset ideally includes building floor plan details such as rooms, corridors, stairways, elevators, entry and exit. The indoor map created provides efficient route – planning in order to provide directions pro-actively.<br/>


                Typical indoor building map creation methodology includes the following steps:<br/><br/>
                Step 1: Collection of building floor plans and attributes<br/><br/>
                bipinmsit collects indoor building plans and its various attributes are collected from a variety of sources including websites, open forums, blogs and/or by visiting and coordinating with building owners.<br/><br/>

                Step 2: Building plan and attribute validation<br/><br/>
                bipinmsit technical resources visit the building site for validating the floor plans and the attributes. The team collects 5 – 10 geographic coordinates per building using GPS equipment.<br/><br/>

                Step 3: Digitization of Floor Plan<br/><br/>
                Subsequently, bipinmsit in-house teams use appropriate GIS software for digitizing individual buildings on a layer-by-layer basis with reference to floor levels and for various attributes.<br/><br/>

                Step 4: Geo-referencing and Validation<br/><br/>
                bipinmsit technical resources geo-reference and validate the digitized indoor building plans with reference to high resolution imagery or with respect to the geographic coordinates collected by the field team.<br/><br/>

                Step 5: Quality check of Indoor maps created<br/><br/>
                Extensive quality check and error fixing is carried out by bipinmsit Quality Assurance (QA) professionals for the quality and accuracy of indoor maps. Important points considered during QA/QC of the indoor maps include testing for missing vector layers, duplicate features, dangling errors, overshoots and undershoots.<br/><br/>

                Step 6: Shipment<br/><br/>
                The completed indoor maps are delivered to the client in required format via email and/or CDROM.<br/>
                </p>

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default IndoorMapping