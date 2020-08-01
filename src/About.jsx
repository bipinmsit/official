import React from 'react'
import {NavLink} from 'react-router-dom'
import web from '../src/images/bipin3.png'

const About = () => {
    return(
        <>
        <div className="about">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8">

            <h1> About: </h1>
                    <p className="text-justify">
                    Learning every day on Technologies i.e Geospatial & Data management, Open source tools etc contributing to implement large enterprise projects, big database and enterprise wise applications including real time data transfer. <br />
                        To enhance & develop technical skills and become Master in 
                        SPATIAL INFORMATION TECHNOLOGY abbreviated as <strong>msit</strong> that fulfill need and aspiration along with the organization
                        with loyalty and honesty.

                        <button className="btn btn-link btn-outline-light" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                        Know more ...
                        </button>
                        <div id="collapseOne" className="collapse">
                        <div className="card card-body">
                                Drones, or Unmanned Aerial Vehicles (UAV), are an incredible piece of technology providing a vantage platform from which to observe things. Sensors on the other hand are the equivalent of the human senses. Together, sensors mounted on drones, can collect all kinds of data. <br />
                                However data is only meaningful if converted into information. That’s the mission of Aspec Scire, Latin for elevated viewing. We have built a platform for converting data into actionable analytics. These analytics help businesses operate more efficiently by bringing in better transparency, greater collaboration and deeper insights into their operations. <br />
                                We work with the construction industry, which is modernizing by investing heavily in technology. Our customers are trendsetters in this industry by adopting our technology to revolutionize all aspects of their business.
                        </div>
                        </div>

                    </p>

            </div>
                <div className="col-xl-4">
                    <img src={web} className="img-fluid rounded float-right mr-5" alt="home img" />
                </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default About