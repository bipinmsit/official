import React, {useEffect} from 'react'
import image1 from './images/carousel2.jpg'
import image2 from './images/carousel6.png'
import image3 from './images/carousel8.png'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './../node_modules/animate.css/animate.css'
import './css/carousel.css'
import Social from './Social';


const HomeCarousel = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <div >
                <div className="row">
                    <div>
                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner ">
                            <div className="carousel-item active" data-interval="10000">
                            <img src={image1} className="d-block w-100" alt="carousel_images" />
                            <div className="carousel-caption ">
                                <p className="heading1">Welcome to the World of <br /> <span style={{color:"orange"}}>Spatial Information Technology</span></p>
                                <p className="heading2 animate__animated animate__bounceIn animate__infinite">A Complete & Latest Platform for <br/> <span style={{color:"red"}}>GIS DEVELOPER</span></p>
                                <div className="align-bottom">
                                    <Social />
                                    <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger animate__animated animate__bounce animate__infinite"> <SubscriptionsIcon /> </a>
                                </div>                            
                            </div>
                            </div>
                            <div className="carousel-item" data-interval="15000">
                            <img src={image2} className="d-block w-100" alt="carousel_images" />
                            <div className="carousel-caption" >
                                <p className="heading1">Technology Changes The World, <br /> Let Us Change Yours! </p>
                                <p className="heading2 animate__animated animate__fadeInRight animate__slow animate__infinite" style={{color:"red", fontWeight:"bold"}}>Learn Everyday New Technology & Track Your Growth</p>
                                <div className="align-bottom">
                                    <Social />
                                    <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger animate__animated animate__bounce animate__infinite"> <SubscriptionsIcon /> </a>
                                </div> 
                            </div>
                            </div>
                            <div className="carousel-item" data-interval="17000">
                            <img src={image3} className="d-block w-100" alt="carousel_images" />
                            <div className="carousel-caption">
                                <p className="heading1" style={{color:"black"}}>Digitize Your Geo spatial Assets and <br /> Maximize Productivity </p>
                                <p style={{color:"red", fontWeight:"bold"}} className="heading2 animate__animated animate__lightSpeedInRight animate__slow animate__infinite">Welcome to Smart GIS Data Management & Analytics </p>
                                <div className="align-bottom">
                                    <Social className="text-body" />
                                    <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger animate__animated animate__bounce animate__infinite"> <SubscriptionsIcon /> </a>
                                </div> 
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCarousel