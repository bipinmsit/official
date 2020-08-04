import React, {NavLink} from 'react'
import digitization from './digitization.jpg'

const DigitizationService = () => {
    return(
        <>
        <div className="gisService">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="sidenav">
                        <h4 className="ml-3">GIS Services</h4>
                       <NavLink to="#about">Digital Photogrammetry</NavLink>
                       <NavLink to="#digitizationService">Digitization</NavLink>
                       <NavLink to="#clients">Remote Sensing</NavLink>
                       <NavLink to="#contact">Indoor Mapping</NavLink>
                       <NavLink to="#contact">Cadestral Mapping</NavLink>
                       <NavLink to="#contact">Topographical Mapping</NavLink>
                       <NavLink to="#contact">Parcel Mapping</NavLink>
                       <NavLink to="#contact">GIS Data Capture</NavLink>
                       <NavLink to="#contact">LiDAR Data Processing</NavLink>
                       <NavLink to="#contact">AutoCAD Design</NavLink>
                       <NavLink to="#contact">Survey</NavLink>
                    </div>
                </div>
                <div className="col-8">
                <figure className="figure">
                    <img src={digitization} className="figure-img img-fluid rounded float-left" alt="digitization" />
                    <div class="top-left">Digitization</div>
                    <figcaption className="figure-caption"></figcaption>
                </figure>
                <div className="text-justify">
                    <p>
                    Digitization services involve converting any physical document into a digital file. This ensures easy handling, sharing and editing of the document. Digitization services are used for converting maps, sketches, schematic diagrams, or circuit diagrams. They are known for ensuring positional accuracy of the objects and is therefore useful in many industries. Digitization services are also used in contour maps, topographic maps, zonal maps, cadastral maps, and utility maps.

                    bipinmsit offers digitization services such as complete CAD Conversion, paper to CAD Conversions and CAD Drafting. These Digitization services are rendered using global standards and therefore the resulting products have high precision and quality. The digitization services at bipinmsit seamlessly convert paper drawings and maps into highly accurate digital files, with the help of paper to CAD conversions. <br /> <br />
                    The various digitization services at bipinmsit are:
                    </p>
                    <ul>
                        <li>
                        2D and 3D Digitization
                        </li>
                        <li>
                        Paper to CAD Conversion
                        </li>
                        <li>
                        Raster to Vector Conversion
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
export default DigitizationService