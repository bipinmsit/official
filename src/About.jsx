import React from 'react'
import web from '../src/images/gis_word.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const About = () => {
    return(
        <>
        <Common 
        name = "Welcome to about page"
        imgsrc = {web}
        visit = "/service"
        btnName = "Contact us" 
        />
        </>
    )
}
export default About