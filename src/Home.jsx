import React from 'react'
import web from '../src/images/business1.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
    return(
        <>
        <Common
        name = "Grow your geo-spatial business with"
        imgsrc = {web}
        visit = "/service"
        btnName = "Get Started" />
        </>
    )
}
export default Home