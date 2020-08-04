import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Home'
import About from './About'
import Contact from './Contact'
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

const App = () => {
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/home/importantLink' component={ImportantLink} />
            <Route exact path='/home/gallary' component={Gallary} />
            <Route exact path='/service/gisService' component={GisService} />
            <Route exact path='/service/enggService' component={EnggService} />
            <Route exact path='/service/gisService/digitalPhotogrammetry' component={DigitalPhotogrammetry} />
            <Route exact path='/service/gisService/digitization' component={DigitizationService} />            
            <Route exact path='/service/gisService/remoteSensing' component={RemoteSensing} />
            <Route exact path='/service/gisService/indoorMapping' component={IndoorMapping} />
            <Route exact path='/service/gisService/cadestralMapping' component={CadestralMapping} />
            <Route exact path='/service/gisService/topographicalMapping' component={TopographicalMapping} />
            <Route exact path='/service/gisService/parcelMapping' component={ParcelMapping} />
            <Route exact path='/service/gisService/cadestralMapping' component={CadestralMapping} />
            <Route exact path='/service/gisService/gisDataCapture' component={GisDataCapture} />
            <Route exact path='/service/gisService/lidarDataProcessing' component={LidarDataProcessing} />
            <Route exact path='/service/gisService/autocadDesign' component={AutocadDesign} />
            <Route exact path='/service/gisService/survey' component={Survey} />
            <Redirect to='/' />
        </Switch>
        <Footer />
        </>
    )
}
export default App