import React, {useEffect} from 'react'
import digitization from './digitization.jpg'
import {NavLink} from 'react-router-dom'
import '../css/service.css'

const GisDataCapture = () => {
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
                    <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                    <figcaption className="figure-caption">GIS Data Capture</figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                        GIS data capture is a technique in which the information on various map attributes, facilities, assets, and organizational data are digitized and organized on a target GIS system in appropriate layers.<br/><br/>
                        </p>

                        <h5>GIS Data capture can be divided into:</h5>
                        <div>
                            <ol>
                                <li style={{fontWeight:"bold"}}>Primary GIS Data Capture Techniques</li><br/>
                                <p>The primary GIS data capture techniques use remote sensing and surveying technologies to capture the data using either raster data capture or vector data capture.<br/></p>
                                <ul>
                                    <li>The raster GIS data capture technique involves capturing of attributes and other data without physical contact. This is usually done with the help of satellite imaging techniques such as aerial photography. This type of GIS data capture is advantageous as there is a consistency in the data generated, and the whole process can be regularly and systematically multiplied to get accuracy of the data in a cost effective manner.</li><br/>
                                    <li>The vector GIS data capture technique includes capturing of data-sets through physical surveying techniques such as Differential Global Positioning System (DGPS) and Electronic Total Station (ETS). Although this technique is the most effective process to have the accurate data on the target GIS system, it is more time consuming and expensive.</li><br/>
                                </ul>
                                <li style={{fontWeight:"bold"}}>Secondary GIS Data Capture Techniques:</li><br/>
                                <p>The secondary GIS data capture technique use technologies such as scanning, manual digitizing, vectorization, photogrammetry, and COGO feature construction to capture data by the following methods:<br/><br/></p>
                                <ul>
                                    <li>Scanning the raster data for GIS Data Capture involves the use of high resolution scanners that generate highly accurate raster images from the hard copies which can be geo-referenced and digitized to get the vector output.</li>
                                    <li>Manual digitizing is done directly over the raster by the use of a digitizing tablet, which is a manual pointing device that creates an identical vector map on the computer screen, defining the vertices, points, line data, etc.</li>
                                    <li>Heads-up digitizing is a part of GIS Data Capture and is similar to the manual digitization, but in heads-up digitization, the raster scanned data is imported and laid below the vector data to be traced on the computer screen itself.</li>
                                    <li>Automatic raster to vector conversion is a great example of advancement of the technology, the technology uses special software using intelligent algorithms that have been developed to recognize the patterns of the points, lines and polygon features and capture them automatically to generate vector GIS data.</li>
                                    <li>Photogrammetry involves digital stereo-plotters that are used to capture the vector data from the Ariel photographs, pictures and images. This is comparatively the most effective method of accurate GIS data capture, but is one of the costliest methods too.</li>
                                </ul>
                            </ol>
                        </div>
                        
                        <h5>GIS Data capture services provided by bipinmsit can used for:</h5><br/>
                        <ul className="ml-3">
                            <li>Thematic Maps Creation: Analysing practical regional / cultural issues, transportation facilitation, hydrographic mapping, vegetation and other types of related features;</li>
                            <li>Capturing Electrical power networks using special software for GIS data capture</li>
                            <li>Capturing Navigation data for easy navigation</li>
                            <li>Capturing Land records and survey data for property, land, water and holding tax, etc. The spatial features are extracted from Ariel imagery using photogrammetry methods.</li>
                            <li>Creation of Utility infrastructure GIS data capture for water lines, road network, pavements, sewerage network, and other related features.</li>
                            <li>Generation of Environmental and geological GIS Data capture is done from geological maps, weather maps, mining and mineral exploration maps, etc.</li>
                        </ul>

                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default GisDataCapture