import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import image1 from '../src/images/bipin3.png'
import image2 from './images/choose.jpg'


const About = () => {
    return(
        <>
        <div className="about">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-7 mr-5">

                    <h2 className="align-text-top"> About: </h2>
                    <p className="text-justify mx-auto">
                        Learning every day on Technologies i.e Geospatial & Data management, Open source tools etc contributing to implement large enterprise projects, big database and enterprise wise applications including real time data transfer. <br />
                        To enhance & develop technical skills and become Master in 
                        SPATIAL INFORMATION TECHNOLOGY abbreviated as <strong>msit</strong> that fulfill need and aspiration along with the organization
                        with loyalty and honesty.

                        <button className="show btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                        Know more
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
                <div className="col-xl-3">
                <figure className="figure">
                    <img src={image1} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                    <figcaption className="figure-caption"> Image captured @ aspecscire.com </figcaption>
                </figure>
                </div>
            </div>
            </div>
        </div>


        <div className="about">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-4 mr-5 ">
                    <img src={image2} className="img-fluid rounded animated w-80 float-right" alt="about img" />
                </div>

                <div className="col-xl-6">                    
                    <h2 className="ml-5"> Why Choose Us: </h2>
                    <ul className="ml-5">
                        <li className="text-justify p-1 ">
                        A strong strategy, design and functioning capability
                        </li>
                        <li className="text-justify p-1">
                        Strong customer relationship and satisfaction
                        </li>
                        <li className="text-justify p-1">
                        Provide bespoke solutions
                        </li>
                        <li className="text-justify p-1">
                        Competitive prices
                        </li>
                        <li className="text-justify p-1">
                        Value for money proficient working practices
                        </li>
                        <li className="text-justify p-1">
                        Quality assurance & responsibility
                        </li>
                    </ul>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default About