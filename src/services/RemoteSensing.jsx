import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const RemoteSensing = () => {
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
                    <div className="service">Remote Sensing</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                    Some projects require acquisition of information on objects and phenomena at a large scale. Physical survey in such a situation is not a viable option. Remote sensing is a technique that is time and cost effective and is therefore apt for such projects.<br /><br />

                    bipinmsit offers remote sensing services to its clients worldwide. The services ensure accurate and cost-effective data collection which is important input for planning and designing of mapping projects. bipinmsit’s expertise in remote sensing branches out to meet classification, image correction, image enhancement, image processing, and change detection services. These services are rendered as per the project’s requirements.<br /><br />

                    bipinmsit offers remote sensing services by creating data to analyse and compare data of forestry, weather, vegetation, pollution, erosion, land use. The remote sensing services offered by bipinmsit can also be helpful for city planning, military observation, archaeological investigations, and so on.<br /><br />

                    bipinmsit technical teams have good hands-on experience of using remote sensing software’s like ERDAS IMAGINE, ENVI, and ER Mapper etc.<br /><br />
                    </p>

                    <h5>bipinmsit remote sensing services includes in the following verticals:</h5><br/>
                    
                    <div className="ml-3">                        
                        <li>Satellite imagery interpretation and classification</li>
                        <li>Classification-supervised and unsupervised</li>
                        <li>Change detection</li>
                        <li>Slope aspect analysis</li>
                        <li>Land cover classification</li>
                        <li>Coastal ecosystem management</li>
                        <li>Forestry mapping</li>
                        <li>Agricultural mapping</li>
                        <li>Mining and geology mapping</li>
                        <li>Environmental impact assessment mapping</li>
                        <li>Clutter data for wireless telecommunication network planning</li>
                        <li>Watershed management</li>
                    </div><br/>
                    bipinmsit has extensive experience and expertise in providing cost effective, time bound and flawless services. The clients are continuously kept in loop with the development of the project.<br/>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default RemoteSensing