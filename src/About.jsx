import React from 'react'
import web from '../src/images/gis_word.jpg'
import Common from './Common'

const About = () => {
    return(
        <>
        <div className="about">
            <Common 
            name = "Welcome to about page"
            imgsrc = {web}
            visit = "/contact"
            btnName = "Contact us" 
            />
        </div>
        </>
    )
}
export default About