import React from 'react'
import web from '../src/images/business1.jpg'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return(
        <>
        <section id="header" className="mt-5">
        <div className="container mx-auto">
        <div className="row">
            <div className="col-sm-6 col-md col-lg d-flex justify-content-center flex-column">
            <h1> {props.name} <strong className="brand-name">bipinmsit</strong> </h1>
            <h2 className="my-3">We have experience team</h2>
                <div className="mt-3">
                    <NavLink exact to={props.visit} className="btn btn-outline-primary" > {props.btnName} </NavLink>
                </div>
            </div>
            <div className="col-sm-6 home-img header-img">
                <img src={props.imgsrc} className="img-fluid rounded animated" alt="home img" />
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default Common