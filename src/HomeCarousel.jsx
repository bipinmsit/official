import React from 'react'
import image1 from './images/carousel4.png'
import image2 from './images/carousel6.png'
import image3 from './images/carousel7.png'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './../node_modules/animate.css/animate.css'
import Social from './Social'


const HomeCarousel = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                        <img src={image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="heading1 mb-5">Welcome to the World of <br /> <span style={{fontWeight:"bold"}}>Spatial Information Technology</span></h1>
                            <h5 className="heading animate__animated animate__bounceIn animate__infinite mb-5">A Complete Platform for <br /> <span style={{fontWeight:"bold", color:"red"}}>GIS DEVELOPER</span></h5>
                            <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger mt-5 animate__animated animate__bounce animate__infinite p-2"> Subscribe My Channel <SubscriptionsIcon /> </a>
                            <Social className="mx-auto" />
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="15000">
                        <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block" >
                            <h1 className="heading1 mb-5">Technology Changes The World, <br /> Let Us Change Yours!</h1>
                            <h5 className="heading mb-5 animate__animated animate__fadeInRight animate__slower animate__infinite">Dare to Challenge the Destiny!</h5>
                            <p className="sub-heading mb-3 animate__animated animate__fadeInLeft animate__slower animate__infinite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger mt-5 animate__animated animate__bounce animate__infinite p-2"> Subscribe My Channel <SubscriptionsIcon /> </a>
                            <Social className="mx-auto" />
                        </div>
                        </div>
                        <div className="carousel-item" data-interval="17000">
                        <img src={image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="heading1 mb-5">Digitize Your Geo spatial Assets and Maximize Productivity</h1>
                            <h5 className="heading2 mb-5 animate__animated animate__fadeInDown animate__slow animate__infinite">Smart GIS Data Management & Analytics</h5>
                            <p className="sub-heading2 mb-3 animate__animated animate__fadeInUp animate__slow animate__infinite">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="btn btn-danger mt-5 animate__animated animate__bounce animate__infinite p-2"> Subscribe My Channel <SubscriptionsIcon /> </a>
                            <Social className="mx-auto" />
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