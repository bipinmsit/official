import React, {useEffect} from 'react'
import Image from './Image'
import image1 from './images/bipin11.jpg'
import image2 from './images/bipin7.jpg'
import image3 from './images/bipin1.jpg'
import image4 from './images/bipin8.jpg'
import image5 from './images/bipin6.jpg'
import image6 from './images/bipin2.jpg'
import image7 from './images/bipin5.jpg'
import image8 from './images/bipin4.jpg'

import './css/gallary.css'

const Gallary = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <div className="container gallary">
            <div className="row">
                <div className="col-sm-3">
                <Image 
                imgsrc={image5}
                caption="Image captured @ Chennai port" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image6}
                caption="Image captured @ Chennai back water" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image7}
                caption="Image captured @ Chennai port survey" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image8}
                caption="Image captured @ Chennai port" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                <Image 
                imgsrc={image1}
                caption="Image captured @ aspecscire" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image2}
                caption="Image captured @ Chennai port survey" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image3}
                caption="Image captured @ aspecscire" />
                </div>
                <div className="col-sm-3">
                <Image imgsrc={image4}
                caption="Image captured during coastal line survey" />
                </div>
            </div>
            </div>
        </>
    )
}
export default Gallary
