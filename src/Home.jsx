import React from 'react'
import {NavLink} from 'react-router-dom'
import web from '../src/images/business1.jpg'
import HomeCarousel from './HomeCarousel'

const Home = () => {
    return(
        <>
        <HomeCarousel />
        <div className="home">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-7">
                    <h1> Mission: </h1>
                    <p className="text-justify">
                        Drones, or Unmanned Aerial Vehicles (UAV), are an incredible piece of technology providing a vantage platform from which to observe things. Sensors on the other hand are the equivalent of the human senses. Together, sensors mounted on drones, can collect all kinds of data. <br />
                        However data is only meaningful if converted into information. That’s the mission of Aspec Scire, Latin for elevated viewing. We have built a platform for converting data into actionable analytics. These analytics help businesses operate more efficiently by bringing in better transparency, greater collaboration and deeper insights into their operations. <br />
                        We work with the construction industry, which is modernizing by investing heavily in technology. Our customers are trendsetters in this industry by adopting our technology to revolutionize all aspects of their business.
                    </p>
                    <div >
                        <NavLink exact to="/contact" className="btn btn-outline-primary" > Contact us </NavLink>
                    </div>
                </div>

                <div className="col-xl-5">
                    <img src={web} className="img-fluid rounded animated w-80 float-right" alt="home img" />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home