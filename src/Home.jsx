import React, {useEffect} from 'react'
import image1 from '../src/images/business1.jpg'
import image2 from './images/carousel6.png'
import HomeCarousel from './HomeCarousel'
import './css/home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
        <HomeCarousel />
        <div>
        <div className="row">
                <div className="col-sm">
                    <div className="text-center">
                        <p className="home-caption1 animate__animated animate__pulse animate__infinite">
                            "A Truly Indian GIS Platform, Passionately Working Towards Making India Smart & Digital by Constantly Upgrading Cutting Edge Location Technologies with Latest Innovations Across the Globe"
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="home">
            <div className="container">
            <div className="row p-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                    <div className="d-flex justify-content-start align-items-start flex-column">
                        <h4> Mission: </h4>
                        <p className="text-justify">
                        To convert a Physical World into Digital by providing Remote Sensing and Geospatial Technology Services to enhance Rationale Decision-Making process. <br /> <br />

                        To expand Market reach by creating Awareness amongst students about Geospatial Technologies and make them able to See Spatial, Feel Spatial.<br /> <br/>

                        Making our world better through maps, location technologies & IoT
                        </p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto my-auto">
                    <figure className="d-flex justify-content-center align-items-center flex-column">
                        <img src={image1} className="img-fluid rounded animated w-80" alt="home img" />
                    </figure>
                </div>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm">
                <div className="text-center home-caption2">
                    <p> Creating maps has been the core area of <strong>bipinmsit</strong>, and the ability of maps to make our lives better is felt more strongly as we leap frog into the evolving digital space, focused on building a smarter and better future.</p>
                    <NavLink exact to="/home/service" type="button" className="btn btn-outline-primary animate__animated animate__slideInLeft animate__infinite">Know more>></NavLink>
                </div>
            </div>
        </div>

        <div className="home container">
        <div className="row p-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto my-auto">
                    <figure className="d-flex justify-content-center align-items-center flex-column">
                        <img src={image2} className="img-fluid rounded animated w-80" alt="home img" />
                    </figure>
                </div>

                <div className="col-xs-12 col-sm-10 col-md-6 col-lg-7 col-xl-7">                    
                    <h4> UAV Technology: </h4>
                    <div className="d-flex justify-content-end align-items-end flex-column">
                        <p className="text-justify">
                            Drones are becoming more and more popular now a days. Drones, or Unmanned Aerial Vehicles (UAV), are an incredible piece of technology providing a vantage platform from which to observe things. Sensors on the other hand are the equivalent of the human senses. Together, sensors mounted on drones, can collect all kinds of data. <br />
                            However data is only meaningful if converted into information. That’s the mission of bipinmsit. Now, let's see how the drones are changing the business world. <br/>
                        </p>
                    </div>
                    <ul>
                            <li>Productivity</li>
                            <li>Automation</li>
                            <li>Convenience</li>
                            <li>Economic Impact</li>
                            <li>Media and Film Production</li>
                        </ul>
                    <div className="d-flex justify-content-end align-items-end flex-column">
                        <p className="text-justify">
                            If you really interested to know more about the drone industory & its data processing, lets have a conversation
                            <NavLink exact to="/home/contact" type="button" className="btn btn-outline-primary ml-2">Contact us</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Home

