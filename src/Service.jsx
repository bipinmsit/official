import React, {useEffect} from 'react'
import './../node_modules/animate.css/animate.css'
import gisService from './images/gis-3d.jpg'
import enggService from './images/ENGINEERING-SERVICES.jpg'
import { NavLink } from 'react-router-dom'

const Service = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <div className="container service">
            <h2 className="text-body my-5 animate__animated animate__shakeY animate__infinite">Start up Your New Thought Ventures With <strong>bipinmsit</strong></h2>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="card">
                            <img className="card-img-top" src={gisService} alt="Card_image_cap" />
                            <div className="card-body">
                                <h5 className="card-title">GIS Service</h5>
                                <p className="card-text text-justify">
                                The GIS services rendered by bipinmsit allow for the visualization of geographic data, analysis of spatial relationships, and efficient data management...
                                </p>
                               <NavLink exact to="/home/service/gisService" className="btn btn-primary">See All GIS Services</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="card">
                            <img className="card-img-top" src={enggService} alt="Card_image_cap" />
                            <div className="card-body">
                                <h5 className="card-title">Engineering Service</h5>
                                <p className="card-text">
                                    Web GIS Development Service...
                                </p>
                               <NavLink exact to="/home/service/enggService" className="btn btn-primary">See All Engineering Service</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service