import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return(
        <>

            <div className="col-4">
                <div className="card">
                <img src={props.imgSource} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.cardTitle} </h5>
                    <p className="card-text">write content here</p>
                    <NavLink to="#" className="btn btn-primary">Click here</NavLink>
                </div>
                </div>
            </div>

        </>
    )
}
export default Card