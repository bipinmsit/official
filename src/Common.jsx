import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-7">
                    <h1> {props.name} <strong className="brand-name">bipinmsit</strong> </h1>
                    <h2 className="my-3">We have experience team</h2>
                    <div >
                        <NavLink exact to={props.visit} className="btn btn-outline-primary" > {props.btnName} </NavLink>
                    </div>
                    </div>
                    <div class="col-sm-5">
                        <img src={props.imgsrc} className="img-fluid rounded animated w-100 h-100" alt="home img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Common