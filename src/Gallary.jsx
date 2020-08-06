import React from 'react'
import Image from './Image'
import Sdata from './Sdata'
import './css/gallary.css'

const Gallary = () => {
    return(
        <>
        <div className="gallary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="gallaryImage">
                        {Sdata.map((gImage, index) => {
                            return(

                                <Image 
                                key={index}
                                imgsrc={gImage.image} />
                           )
                        })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallary