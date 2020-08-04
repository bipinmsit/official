import React from 'react'
import digitization from './digitization.jpg'

const Digitization = () => {
    return(
        <>
        <div className="col-9">
            <figure className="figure">
                <img src={digitization} className="figure-img img-fluid rounded" alt="digitization" />
                <div classname="digitizationService">Digitization</div>
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
        </>
    )
}
export default Digitization
