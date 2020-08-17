import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Mymap from './services/Mymap'

const Product = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <div className="container">
            <h2 className="text-body text-center my-5 animate__animated animate__shakeX animate__infinite"><strong>bipinmsit </strong>offer following Products </h2>
                <div className="row">
                    <div className="col-sm-4">
                    <div className="card">
                            <Mymap width={"100%"} height={"30vh"} />
                            <div className="card-body">
                                <h5 className="card-title">WebGIS Platform</h5>
                                <p className="card-text text-justify">
                                WebGIS is an advanced form of Geospatial Information System available on the web platform. It will help you to perform all GIS related activities on web browser i.e search, digitize, download, upload, modify, measure etc. of geospatial data.
                                </p>
                               <NavLink exact to="/home/product/webgis" className="btn btn-primary">Subscribe our WebGIS Product</NavLink>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}
export default Product