import React from 'react'
import web from '../src/images/business1.jpg'
import Common from './Common'
import HomeCarousel from './HomeCarousel'

const Home = () => {
    return(
        <>
        <HomeCarousel />
        <div className="home">
            <Common
            name = "Grow your geo-spatial business with"
            imgsrc = {web}
            visit = "/service"
            btnName = "Get Started" />
        </div>
        </>
    )
}
export default Home