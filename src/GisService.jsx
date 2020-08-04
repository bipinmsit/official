import React from 'react'
import { NavLink } from 'react-router-dom'
import Digitization from './services/Digitization'

const GisService = () => {
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="sidenav">
                        <h4 className="ml-3">GIS Services</h4>
                       <NavLink id="1" to="#about">Digital Photogrammetry</NavLink>
                       <NavLink id="2" exact to="/service/gisService/">Digitization</NavLink>
                       <NavLink id="3" to="#clients">Remote Sensing</NavLink>
                       <NavLink id="4" to="#contact">Indoor Mapping</NavLink>
                       <NavLink id="5" to="#contact">Cadestral Mapping</NavLink>
                       <NavLink id="6" to="#contact">Topographical Mapping</NavLink>
                       <NavLink id="7" to="#contact">Parcel Mapping</NavLink>
                       <NavLink id="8" to="#contact">GIS Data Capture</NavLink>
                       <NavLink id="9" to="#contact">LiDAR Data Processing</NavLink>
                       <NavLink id="10" to="#contact">AutoCAD Design</NavLink>
                       <NavLink id="11" to="#contact">Survey</NavLink>
                    </div>
                </div>
                <div className="col-9">
                <Digitization />
                </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default GisService