import React, {useEffect} from 'react'
import Mymap from './Mymap'
import {NavLink} from 'react-router-dom'
// import webGIS from '../services/images/ijgi-07-00111-g001.png'
import '../css/service.css'

const Webgis = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
        <div className="enggService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div className="sidenav">
                        <NavLink exact activeClassName="menu_active" to="/home/service/enggService"><h4>Engineering Services</h4></NavLink>
                        <NavLink exact activeClassName="menu_active" to="/home/service/enggService/webgis">WebGIS</NavLink>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8 col-xl-8">
                    <div className="row">
                        <div className="col-sm mb-5">
                            <Mymap />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="text-justify">
                        <h5>
                        What is WebGIS, How does it work and what are its applications?
                        </h5>
                        <p>
                        WebGIS is an advanced form of Geospatial Information System (most commonly known as Geographic Information System) available on the web platform. The exchange of information takes place between a server and a client, where the server is a Geospatial Information System (GIS) server and the client is a web browser, mobile application and desktop application. The server has a unique Uniform Resource Locator (URL) so that clients can find it on the web. WebGIS brings GIS into the hands of the people. It reduces the need to create custom application. It provides a platform for integrating GIS with other business systems and enables cross-organizational collaboration. WebGIS allows organizations to properly manage all their geographic data.
                        </p>
                        <h5>
                        A BRIEF ABOUT GEOSPATIAL INTELLIGENCE SYSTEM (GIS)
                        </h5>
                        <p>
                        Geospatial Intelligence System (GIS) is a system comprising of computer hardware, software and applications that captures, edit, analyze, manipulate and visualize geo-referenced data. Geospatial Intelligence maps on the web provide a new paradigm for how people everywhere access and use geographic information to take the meaningful decision, plan and execute operations. People use GIS maps on their desktops, tablets, and smartphones to perform sophisticated range of activities.
                        </p>
                        <h5>
                        What WebGIS Can Do For Your Organization
                        </h5>
                        <p>
                        WebGIS brings analytics to spatial or geographic data in a way that wasn’t possible before. Earlier, spatial data had to be processed, edit, modified, and extracted to answer a predetermined set of questions. Now, the data is transformed into web maps or services that are mashed up with different layers into a webGIS, which provides the possibility to answer any sort of questions. The data is ready to use and to dynamically answer questions and offers turnkey solution. Now, data no longer needs to be processed for each individual question. Web GIS is a much more flexible, agile, customizable and capable of providing efficient workflow.
                        </p>

                        <h5>
                        Characteristics of WebGIS:-
                        </h5>
                        <p>
                        Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions. The emergence of WebGIS is unlocking the power of GIS to a wider audience and helping in the decision-making process.
                        </p>
                        <ul>
                        <li>WebGIS relying on Java, .Net, and flex can run on multiple platforms.</li> 
                        <li>Support a large number of users simultaneously</li>
                        <li>WebGIS relying on HTML client supports different operating systems.</li>
                        <li>Better cross-platform capability.</li>
                        <li>However, Web GIS for mobile clients is far from being cross-platform because of the diversity in mobile OS and the incompatibility of mobile web browsers.</li>
                        <li>Easy to use for end users</li>
                        <li>Compatible with different web browsers: Google chrome, Internet explorer, Firefox, for diverse Oss (Win, Linux, Mac OS, iOs).</li>
                        <li>Unified system update.</li>
                        <li>Offers turnkey demographic datasets and imagery/map layers which allow users to access immediate context from different applications</li>
                        <li>Customized dashboards with the user-friendly interface</li>
                        </ul>
                        <h5>
                        WebGIS Applications
                        </h5>
                        <p>
                        The WebGIS has diverse range of applications. Some of the uses are listed below.
                        </p>
                        <ul>
                            <li>Mapping /Visualization and query (attribute or spatial).</li>
                            <li>Collaborative collection of geospatial information</li>
                            <li>Geospatial analysis: measurement, optimal driving path, routing, pollution dispersion modelling, retail site selection.</li>
                            <li>Web GIS as a new business model and a new type of commodity. Location: specific advertising and branding based on mapping. E.g google map.</li>
                            <li>GIS application is an engaging and powerful tool for designing and planning government projects like flood management, forest mapping, and natural disaster. </li>
                            <li>WebGIS technology is used in geoscience research collaboration.</li>
                            <li>Web GIS in daily life: location-based service (LBS) supported by mobile web, smartphones and tablets. LBS include services to identify a location of a person or object, such as discovering the nearest atm, restaurant, shops and hotels etc. LBS also includes parcel tracking and vehicle tracking services.</li>
                        </ul>
                        <h5>
                        A few key elements essential to WebGIS is listed below
                        </h5>
                        <ul>
                            <li>The server has a specific Uniform Resource Locator (URL) on the web so that the clients can easily access it.</li>
                            <li>The client depends on Hyper Text Transfer protocol (HTTP) specifications to send requests to the server.</li>
                            <li>The server performs the requested GIS operations and sends responses to the client via HTTP. The format of the response sent to the client can be in many formats, such as HTML, binary image, JSON (JavaScript Object Notation), XML (Extensible Markup Language).</li>
                        </ul>
                        <h5>
                        The advantages of WebGIS
                        </h5>
                        <p>
                        With the help of Internet, clients can access the geospatial information over the web regardless of the fact how far the server and client might be from each other. WebGIS introduces distinct advantages over traditional desktop GIS, including the following:
                        </p>
                        <h6>
                        APPLICATIONS:
                        </h6>
                        <p>
                        Unlike desktop GIS, which is limited to a certain number of GIS professionals, webGIS can be used by everyone in an organisation as well as the public at large. This broad audience has diverse demands. Applications such as mapping street road, locating places to tag personal photos, tracing friends and displaying WiFi hotspots are a few examples.
                        </p>
                        <h6>
                        BETTER CROSS-PLATFORM CAPABILITY:
                        </h6>
                        <p>
                        Most of the WebGIS clients are web browsers like Internet Explorer, Google Chrome, Mozilla Firefox, Apple Safari etc. Because these web browsers are compatible with HTML and JavaScript standards, WebGIS that relies on HTML clients will typically support different operating systems such as Microsoft Windows, Linux, and Apple Mac OS.
                        </p>
                        <h6>
                        WORLD-WIDE REACH:
                        </h6>
                        <p>
                        The geographic data and maps can be presented to the world through WebGIS. Anybody locating anywhere in the world can access the geographical information from their computers, desktop or mobile devices. Almost all organizations open their firewalls at certain network ports to allow HTTP requests and responses to go through their local network, thus increasing accessibility for the clients.
                        </p>
                        <h6>
                        SUPPORTS MULTIPLE USER AT A TIME:
                        </h6>
                        <p>
                        In general, a traditional desktop supporting GIS application software is used by only one user at a time, while a WebGIS can be used by dozens or hundreds of users simultaneously. Thus, WebGIS provides much higher performance and scalability than single desktop GIS.
                        </p>
                        <h6>
                        LOW COST AS AVERAGED BY THE NUMBER OF USERS:
                        </h6>
                        <p>
                        The vast majority of content on the internet is free of charge to end users, and this also applies on WebGIS. Generally, you do not need to buy software or pay to use WebGIS service. Organizations that need to provide GIS service to individual users can also minimize their costs through WebGIS. Instead of buying and setting up desktop GIS for every user, an organization can set up just one WebGIS, and this single system can be shared by many users: from home, at work, or in the field.     
                        </p>
                        <h6>
                        USER-FRIENDLY:
                        </h6>
                        <p>
                        Desktop GIS is intended for professional users with months of training and experience in GIS. WebGIS is intended for a broad audience, including public users who may know nothing about GIS. WebGIS is designed in such a way that navigating is as easy as using a regular website. WebGIS is specifically designed for simplicity, intuition, and convenience, making it typically much easier to use than desktop GIS.
                        </p>
                        <h6>
                        AUTOMATIC UPDATES:
                        </h6>
                        <p>
                        For desktops, GIS to be updated to a new version, the update needs to be installed on every computer. For WebGIS, one update works for all clients. This ease of maintenance makes WebGIS a good fit for delivering real-time information and taking the decisions.
                        </p> <br/><br/>

                        <p>
                        The above points reflect both the advantages of WebGIS and consequences on its failure. For example, the user-friendly interaction of WebGIS accelerates public participation, but it also reminds you to take into account the Internet users who have no GIS background. Apparently, to support a large number of users in an organization requires scalability of WebGIS.
                        </p>
                    </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            
        </div>
        </>
    )
}
export default Webgis