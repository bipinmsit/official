import React from 'react'
import {NavLink} from 'react-router-dom'
import image1 from '../src/images/business1.jpg'
import image2 from './images/carousel6.png'
import HomeCarousel from './HomeCarousel'

const Home = () => {
    return(
        <>
        <HomeCarousel />
        <div className="home">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-xl-7">
                    <h1> Mission: </h1>
                    <p className="text-justify">
                    To convert a Physical World into Digital by providing Remote Sensing and Geospatial Technology Services to enhance Rationale Decision-Making process. <br /> <br />

                    To expand Market reach by creating Awareness amongst students about Geospatial Technologies and make them able to See Spatial, Feel Spatial.

                    </p>

                </div>

                <div className="col-xl-5">
                    <img src={image1} className="img-fluid rounded animated w-80 float-right" alt="home img" />
                </div>
            </div>
            </div>
        </div>


        <div className="home">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-5">
                    <img src={image2} className="img-fluid rounded animated w-80 float-right" alt="home img" />
                </div>

                <div className="col-xl-7">                    
                    <h1> UAV Technology: </h1>
                    <p className="text-justify">
                    Drones, or Unmanned Aerial Vehicles (UAV), are an incredible piece of technology providing a vantage platform from which to observe things. Sensors on the other hand are the equivalent of the human senses. Together, sensors mounted on drones, can collect all kinds of data. <br />
                    However data is only meaningful if converted into information. That’s the mission of Aspec Scire, Latin for elevated viewing. We have built a platform for converting data into actionable analytics. These analytics help businesses operate more efficiently by bringing in better transparency, greater collaboration and deeper insights into their operations. <br />
                    We work with the construction industry, which is modernizing by investing heavily in technology. Our customers are trendsetters in this industry by adopting our technology to revolutionize all aspects of their business.

                    </p>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home

