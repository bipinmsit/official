import React from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const DigitalPhotogrammetry = () => {
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
                    <figcaption className="figure-caption">Digital Photogrammetry</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                    Photogrammetry as a science is among the earliest techniques of remote sensing. The word photogrammetry is the combination of three distinct Greek words ‘Photo’, ‘Gram’ and ‘metry’ which translated in English literally means, light, drawing and measurement respectively.

                    bipinmsit offers a wide variety of photogrammetric services such as aerial photogrammetry and Digital Photogrammetric services to its clients worldwide. The aerial photogrammetry and digital photogrammetry services are obtained using aerial acquisition through digital ortho-photography.

                    bipinmsit’s high-precision aerial photogrammetry and digital photogrammetry services are offered at extremely rational prices with accurate and cost-effective data collection for planning and lin aerial photogrammetry and digital photogrammetry services.
                    </p>
                    <h5>Typical aerial photogrammetry and digital photogrammetry services by bipinmsit include:</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <li>Aerial Triangulation</li>
                                <li>Texturing</li>
                                <li>DEM / DTM Generation</li>
                                <li>Stereo Compilation</li>
                                <li>Topographic and Planimetric Feature Extraction (2D and 3D)</li>
                                <li>Ortho Generation and True Ortho Generation</li>
                                <li>Colour Balancing</li>
                            </div>
                            <div className="col-3">
                                <li>Mosaicking And Tile Generation</li>
                                <li>Contour Generation</li>
                                <li>3D Terrain Visualization</li>
                                <li>LIDAR Data Post Processing</li>
                                <li>3D Texturing</li>
                                <li>Orthophotography Services</li>
                            </div>
                        </div>
                    </div> <br />
                    <p>
                    Details of some of the services offered are: <br />
                    </p>

                    <h5>Aerial Triangulation:</h5> <br/>
                    <p>
                    Aerial Triangulation is the calculation of true ground co-ordinates and 3D coordinates for object elements that are used as the base reference in aerial photogrammetry and digital photogrammetry. It is the method of developing several unknown coordinate points from a minimum of five control points inside each aerial photogrammetry model to be able to obtain absolute orientation of the model. Aerial Triangulation is an essential part of many successful aerial photogrammetry and digital photogrammetry project.<br/>

                    bipinmsit offers complete softcopy aerial triangulation services, providing highly accurate control for the map production. Digital images are uploaded into softcopy work stations. The airborne GPS coordinates and the ground survey control points are used to control the aerial triangulation solution.<br/>

                    bipinmsit utilizes LPS, SSK, DATUM software’s to perform digital aerial triangulation computations and analysis. Depending upon the project requirement and volume, bipinmsit chooses the software as per the client request to provide qualitative aerial triangulation.<br/>
                    </p>


                    <h5>LiDAR Data Processing:</h5> <br/>
                    <p>
                    bipinmsit provides LiDAR data processing, a prominent technology of aerial photogrammetry and digital photogrammetry services for the generation of Digital Elevation Model (DEM), Digital Terrain Model (DTM) and Triangulated Inverse Network (TIN) and so on to provide highly accurate detail of earth’s surface.<br/>

                    The aerial photogrammetry and digital photogrammetry technique of LiDAR data processing is carried out on the acquired data after filtering noise and pre-processing activities using GPS survey for obtaining a referenced coordinate system with accurate elevation details. Once the pre-possessing of the data is complete, bipinmsit technical staff uses Terra Scan and Terra Solid software for post processing of the LiDAR data. bipinmsit has extensive experience aerial photogrammetry and digital photogrammetry services such as, generating the 3D models like DEM, DTM, TIN and other surface models as per the requirement.<br/>

                    bipinmsit provides turn-key LiDAR data processing services in aircraft, digital orthophoto and various topographic mapping aspects, including:<br/>
                    </p>
                    <div className="ml-3">
                        <li>Preparation of Point clouds file (ground, canopy and intensity)</li>
                        <li>Power line mapping, wire detection and transmission line survey</li>
                        <li>Contour mapping and topographical maps</li>
                        <li>Fusion with digital orthophoto or hyperspectral imagery</li>
                        <li>3D modeling and volumetric calculation</li>
                        <li>Creation of vegetation cover and classification using LiDAR data processing</li>
                    </div><br/>
                    <h5>Digital Elevation Model:</h5><br/>
                    <p>
                    Digital elevation model (DEM) is a medium of aerial photogrammetry and digital photogrammetry that is a representation of the Earth’s relief used for geospatial analysis and modeling. Elevation data are captured in the form of points with defined interval and the Break lines. bipinmsit has vast experience in the creation of TIN Models and elevation models from the DEM data Contours.<br/>
                    </p>

                    <h5>Vector Mapping:</h5><br/>
                    <p>
                    Vector mapping service is a branch of aerial photogrammetry and digital photogrammetry services provided at AABSyS. It is a representation of the earth surface features in 3D manner and used for geospatial analysis and modeling. AABSyS offers the preparation of map by extracting the vector or point information of railroads, buildings, hydrological features, vegetation, etc., as required by the user by different Symbols (trees, wells, poles, etc.,), Line types (rail, road, streams, etc.,) and regions (buildings, tanks, forest, etc.,) with unique ID.<br/>
                    </p>

                    <h5>Ortho Photo Generation:</h5><br/>
                    <p>
                    Digital Orthophoto is a raster image generated by differentially rectifying scanned aerial photographs to compensate for distortions due to the altitude of the aircraft and the relief of the terrain. Digital Ortho photos combine the image characteristics of a photograph with geometric qualities of a map. The Ortho Photo generation.<br/>
                    </p>

                    <h5>3D Modeling:</h5><br/>
                    <p>
                    Using 3D Modeling and virtual reality techniques, bipinmsit is able to completely represent the client’s real world, bringing together all the relevant aspects of the 3D environment that you wish to model. bipinmsit’s key functions include 3D visualization, 3D environment modeling, true 3D landscape reconstruction, visual reality and virtual reality integration, real time roaming with huge amounts of data.
                    </p>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default DigitalPhotogrammetry