import React from 'react'
import web from './images/gis-3d.jpg'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
    return(
        <>
        <h1 className="text-center">Our Services</h1>
        <div className="container">
        <div className="row">
            <div className="col-12 mx-auto">
             <div className="row">
             {Sdata.map((myServices) => {
            return(
                <>
                <Card 
                imgSource = {myServices.imgsrc}
                cardTitle = {myServices.title}
                />
                </>
            )})}
             </div>
            </div>
        </div>
        </div>

        </>
    )
}
export default Service