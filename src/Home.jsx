import React from 'react'
import image1 from '../src/images/business1.jpg'
import image2 from './images/carousel6.png'
import HomeCarousel from './HomeCarousel'

const Home = () => {
    return(
        <>
        <HomeCarousel />
        <div className="home">
            <div className="container">
            <div className="row p-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                    <div className="d-flex justify-content-start align-items-start flex-column">
                        <h2> Mission: </h2>
                        <p className="text-justify">
                        To convert a Physical World into Digital by providing Remote Sensing and Geospatial Technology Services to enhance Rationale Decision-Making process. <br /> <br />

                        To expand Market reach by creating Awareness amongst students about Geospatial Technologies and make them able to See Spatial, Feel Spatial.
                        </p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto my-auto">
                    <figure className="d-flex justify-content-center align-items-center flex-column">
                        <img src={image1} className="img-fluid rounded animated w-80" alt="home img" />
                    </figure>
                </div>
            </div>

            <div className="row p-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto my-auto">
                    <figure className="d-flex justify-content-center align-items-center flex-column">
                        <img src={image2} className="img-fluid rounded animated w-80" alt="home img" />
                    </figure>
                </div>

                <div className="col-xs-12 col-sm-10 col-md-6 col-lg-7 col-xl-7">                    
                    <div className="d-flex justify-content-end align-items-end flex-column">
                        <h2> UAV Technology: </h2>
                        <p className="text-justify">
                            Drones, or Unmanned Aerial Vehicles (UAV), are an incredible piece of technology providing a vantage platform from which to observe things. Sensors on the other hand are the equivalent of the human senses. Together, sensors mounted on drones, can collect all kinds of data. <br />
                            However data is only meaningful if converted into information. That’s the mission of bipinmsit. Now, let's see how the drones are changing the business world. <br/><br/>
                            <li>Productivity</li>
                            <li>Productivity</li>
                            <li>Automation</li>
                            <li>Convenience</li>
                            <li>Economic Impact</li>
                            <span style={{fontWeight:"bold"}}></span>
                        </p>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home

