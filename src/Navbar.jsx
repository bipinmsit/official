import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'

const NewNavbar = () => {
    
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-6 col-lg col-xl">
                        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
                        <NavLink className="navbar-brand" to="/">bipinmsit</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mt-lg-0">
                            <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="service" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Service
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink exact activeClassName="menu_active" className="dropdown-item" to="/home/service/gisService">GIS Service</NavLink>
                                    <NavLink exact activeClassName="menu_active" className="dropdown-item" to="/home/service/enggService">Engineering Service</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/home/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/home/blog" >Blog</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/home/gallary" >Gallary</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/home/contact" >Contact</NavLink>
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