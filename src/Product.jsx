import React from 'react'
import Mymap from './services/Mymap'
import DrawControl from './services/DrawControl'

const Product = () => {
    return(
        <>
        <div className="product">
            <div className="row">
                <div className="col-sm">
                    <DrawControl />
                </div>
            </div>
        </div>
        </>
    )
}
export default Product