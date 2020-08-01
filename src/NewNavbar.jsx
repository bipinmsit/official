import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.PNG'

const NewNavbar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top mx-3">
                        <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" className="w-75" /></NavLink>
                        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewNavbar