import React from 'react'

const Image = (props) => {
    return(
        <>
            <div className="figure">
                <img src={props.imgsrc} alt="gallary_image_1" className="img-fluid rounded" />
                <figcaption className="figure-caption">{props.caption}</figcaption>
            </div>
        </>
    )
}
export default Image