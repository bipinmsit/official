import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'

const NewNavbar = () => { 
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed)
    }
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <nav className="navbar navbar-expand-lg navbar-light navbar-static-top">
                        <NavLink className="navbar-brand" to="/">bipinmsit</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mt-lg-0">
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/" onClick={handleNavCollapse}>Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="service" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Service
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink exact activeClassName="menu_active" className="dropdown-item" to="/home/service/gisService" onClick={handleNavCollapse}>GIS Service</NavLink>
                                        <NavLink exact activeClassName="menu_active" className="dropdown-item" to="/home/service/enggService" onClick={handleNavCollapse}>Engineering Service</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/home/about" onClick={handleNavCollapse}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/home/blog" onClick={handleNavCollapse}>Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/home/gallary" onClick={handleNavCollapse}>Gallary</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/home/contact" onClick={handleNavCollapse}>Contact</NavLink>
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