import React from 'react'
import image1 from '../src/images/bipin3.png'
import image2 from './images/choose.jpg'


const About = () => {
    return(
        <>
        <div className="about">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-md-start">
            <div className="col-sm-7 col-md-7 col-lg-7 flex-wrap">

                    <h2 className="align-text-top"> About: </h2>
                    <div className="text-justify mx-auto">
                        Learning every day on Technologies i.e Geospatial & Data management, Open source tools etc contributing to implement large enterprise projects, big database and enterprise wise applications including real time data transfer. <br />
                        To enhance & develop technical skills and become Master in 
                        SPATIAL INFORMATION TECHNOLOGY abbreviated as <strong>msit</strong> that fulfill need and aspiration along with the organization
                        with loyalty and honesty.

                        <button className="show btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                        Know more
                        </button>
                        <div id="collapseOne" className="collapse">

                            <div>
                                <nav id="navbar-example2" className="navbar navbar-light bg-light">
                                <a className="navbar-brand" href="/home">bipinmsit</a>
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                    <a className="nav-link" href="#fat">Achievements</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#mdo">Projects</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="acedemic" role="button" aria-haspopup="true" aria-expanded="false">Acedemic</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#one">M.Tech</a>
                                        <div role="separator" className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#two">B.Tech</a>
                
                                    </div>
                                    </li>
                                </ul>
                                </nav>
                                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" className="aboutScrollspy">
                                <h4 id="fat">Certification/Achievements:</h4>
                                <ul>
                                    <li>
                                    Excellent work performance certificate by Indian Institute of Remote Sensing, Indian Space Research Organization (ISRO), Dept. of Space, Govt. of India, Dehradun (Uttarakhand)) on Research project entitled ‘Temporal Analysis of Hydrological Parameters & Space borne Gravity Anomaly for Deciphering Groundwater Depletion Scenario in North-West India.’ 
                                    </li>
                                    <li>
                                    Cambridge University ESOL Entry Level Certificate in ESOL International (Business- English) (Council of 
                                    Europe Level A2).
                                    </li>
                                    <li>
                                    Good Speaker Certificate in “NATIONAL STUDENT CONVENTION” (KALEIDOSKOPE-09) for Presenting a 
                                    Seminar on “4G TECHNOLOGY” at ITM Gwalior.
                                    </li>
                                    <li>
                                    Qualified GATE 2013 (96.01%) ➢ Qualified GATE 2012 (94%). ➢ Qualified BCECE Examination in 2007 & 2008.
                                    </li>
                                    <li>
                                    Achieved 3rd Prize in the event of “COLLAGE-MAKING” Organized by BVM College of Technology & 
                                    Management Gwalior (M.P.) India.
                                    </li>
                                    <li>
                                    Achieved 9th Rank in Board Examination of 10th (in district). 
                                    </li>
                                </ul>
                                <h4 id="mdo">Projects:</h4>
                                <ul>
                                    <li>
                                    Temporal Analysis of Hydrological Parameters and Space borne Gravity Anomaly for Deciphering of Groundwater Depletion scenario in North-West India. <br />
                                        <u>Organization</u>: <strong> Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO), Dept. of Space, Govt. of India, Dehradun (Uttarakhand) </strong>
                                    </li>
                                    <li>
                                    GPS based digital maps and implementation of land management system using webGIS server <br />
                                    <u>Organization</u>: <strong> Ennore Port Limited, Ministry of Shipping, Govt. of India </strong>
                                    </li>
                                </ul>
                                <h4 id="one">Master of Technology</h4>
                                <p>
                                    <u>Institute </u>: <strong>Devi Ahilya Vishwavidyalaya, Indore (M.P), India </strong> <em>76.48%</em>
                                </p>
                                <h4 id="two">Bachelor of Engineering</h4>
                                <p>
                                    <u>Institute </u>: <strong>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (M.P), India </strong> <em>74.75%</em>
                                </p>

                                </div>
                            </div>


                        </div>
                    </div>
            </div>
                <div className="col-sm-3 col-md-3 col-lg-3 flex-wrap">
                <figure className="figure">
                    <img src={image1} className="figure-img img-fluid rounded float-right" alt="about_image" />
                    <figcaption className="figure-caption"> Image captured @ aspecscire.com </figcaption>
                </figure>
                </div>
            </div>
            </div>
        </div>


        <div>
            <div className="container">
            <div className="row d-flex justify-content-center align-items-md-startmt-5">
                <div className="col-sm-3 col-md-3 col-lg-3 flex-wrap">
                    <img src={image2} className="img-fluid rounded animated w-100 float-left" alt="about img" />
                </div>

                <div className="col-sm-7 col-md-7 col-lg-7 flex-wrap">                    
                    <div className="float-right">
                        <h2 className="text-justify"> Why Choose Us: </h2>
                        <ul>
                            <li className="text-justify p-1 ">
                            A strong strategy, design and functioning capability
                            </li>
                            <li className="text-justify p-1">
                            Strong customer relationship and satisfaction
                            </li>
                            <li className="text-justify p-1">
                            Provide bespoke solutions
                            </li>
                            <li className="text-justify p-1">
                            Competitive prices
                            </li>
                            <li className="text-justify p-1">
                            Value for money proficient working practices
                            </li>
                            <li className="text-justify p-1">
                            Quality assurance & responsibility
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default About