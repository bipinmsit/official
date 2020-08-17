import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Navbar from './Navbar'
import {Switch, Route, Redirect} from 'react-router-dom'
import Footer from './Footer'
import ImportantLink from './ImportantLink'
import Gallary from './Gallary'
import EnggService from './EnggService'
import GisService from './GisService'
import DigitizationService from './services/DigitizationService'
import DigitalPhotogrammetry from './services/DigitalPhotogrammetry'
import RemoteSensing from './services/RemoteSensing'
import IndoorMapping from './services/IndoorMapping'
import TopographicalMapping from './services/TopographicalMapping'
import CadestralMapping from './services/CadestralMapping'
import GisDataCapture from './services/GisDataCapture'
import LidarDataProcessing from './services/LidarDataProcessing'
import AutocadDesign from './services/AutocadDesign'
import Survey from './services/Survey'
import ParcelMapping from './services/ParcelMapping'
import Service from './Service'
import Webgis from './services/Webgis'
import Product from './Product'
import WebGISProduct from './services/WebGISProduct'

const App = () => {
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home/product' component={Product} />
            <Route exact path='/home/about' component={About} />
            <Route exact path='/home/blog' component={Blog} />
            <Route exact path='/home/contact' component={Contact} />
            <Route exact path='/home/importantLink' component={ImportantLink} />
            <Route exact path='/home/gallary' component={Gallary} />
            <Route exact path='/home/service' component={Service} />
            <Route exact path='/home/service/gisService' component={GisService} />
            <Route exact path='/home/service/enggService' component={EnggService} />
            <Route exact path='/home/service/gisService/digitalPhotogrammetry' component={DigitalPhotogrammetry} />
            <Route exact path='/home/service/gisService/digitization' component={DigitizationService} />            
            <Route exact path='/home/service/gisService/remoteSensing' component={RemoteSensing} />
            <Route exact path='/home/service/gisService/indoorMapping' component={IndoorMapping} />
            <Route exact path='/home/service/gisService/cadestralMapping' component={CadestralMapping} />
            <Route exact path='/home/service/gisService/topographicalMapping' component={TopographicalMapping} />
            <Route exact path='/home/service/gisService/parcelMapping' component={ParcelMapping} />
            <Route exact path='/home/service/gisService/cadestralMapping' component={CadestralMapping} />
            <Route exact path='/home/service/gisService/gisDataCapture' component={GisDataCapture} />
            <Route exact path='/home/service/gisService/lidarDataProcessing' component={LidarDataProcessing} />
            <Route exact path='/home/service/gisService/autocadDesign' component={AutocadDesign} />
            <Route exact path='/home/service/gisService/survey' component={Survey} />
            <Route exact path='/home/service/enggService/webgis' component={Webgis} />
            <Route exact path='/home/product/webgis' component={WebGISProduct} />
            <Redirect to='/' />
        </Switch>
        <Footer />
        </>
    )
}
export default App