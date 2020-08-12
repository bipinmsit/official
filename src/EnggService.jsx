import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import enggServices from './services/images/machine-learning-definition.jpeg'
import './css/sidenav.css'


const EnggService = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
        <div className="enggService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4 col-xl-4">
                    <div className="sidenav">
                        <NavLink exact to="/home/service/enggService"><h4>Engineering Services</h4></NavLink>
                        <NavLink exact to="/home/service/enggService/webgis">WebGIS</NavLink>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8 col-xl-8 mt-5">
                <div >
                    <figure className="figure">
                        <img src={enggServices} className="figure-img img-fluid rounded" alt="digitization" />
                        <figcaption className="figure-caption">Engineering Services</figcaption>
                    </figure>
                    <div className="text-justify">
                        We work on the forefront of <strong>GIS Automation, WebGIS & Machine Learning</strong> for making India Smart & Digital by Constantly Upgrading Cutting Edge Location Technologies with Latest Innovations.
                    </div>
                    </div>
                </div>

            </div>
        </div>
            
        </div>
        </>
    )
}
export default EnggService