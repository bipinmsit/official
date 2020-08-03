import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
    return(
        <>  
            <h1 className="text-center service">Our Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto flex-wrap">
                    <div className="row">
                    {Sdata.map((myServices) => {
                    return(
                        <>
                        <Card 
                        imgSource = {myServices.imgsrc}
                        cardTitle = {myServices.title}
                        cardContent ={myServices.content}
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