import React, {useEffect} from 'react'
import blog1 from './images/blog.jpg'

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>

        <div className="blog container">
            <div className="row">
                <h2 className="mb-3">Blogs</h2>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="figure">
                        <img className="card-img-top rounded img-fluid" src={blog1} alt="Card_image_cap" />
                        <figcaption className="figure-caption ml-3">Author: Bipin kumar</figcaption>
                    </div>
                    <div className="card-body">
                        <p style={{fontWeight:"bold"}} className="card-title text-justify">TEMPORAL ANALYSIS OF HYDROLOGICAL PARAMETERS & SPACEBORNE GRAVITY ANOMALY FOR DECIPHERING OF GROUND WATER SCENERIO IN NORTH-WEST INDIA</p>
                        <p className="card-text text-justify">
                        Groundwater is indispensable to all life on earth. However, fresh water is constantly formed newly through a phenomenon known as hydrological cycle. Groundwater recharge is the process by which water percolates through soil and reaches the water table, either by natural or artificial methods. The amount of water that may be extracted from an aquifer without causing depletion is primarily dependent upon the groundwater recharge. Thus, a quantitative evaluation of spatial and temporal distribution of groundwater recharge is a pre-requisite for operating ground water resources system in an optimal manner. This study presents a methodology with step-by-step procedure to determine the groundwater recharge by Soil Water Balance (SWB) in the arid and semi-arid zone. The SWB model calculates groundwater recharge by using Geographic Information System (GIS) data layers and further validated by using Space bourne Gravity (GRACE) data and groundwater level data over the region collected by Central Ground Water Board.
                        </p>
                        <a href="https://drive.google.com/file/d/1KgrMVuMaZHHstN8ypoZASyTnMcUOO6xe/view?usp=sharing" className="btn btn-primary">See Details</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Blog