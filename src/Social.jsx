import React from 'react'
import '../node_modules/font-awesome/css/font-awesome.min.css'


const Social = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-5 mx-auto p-1">
                <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className=" mx-1">
                <i className="fa fa-youtube-play fa-5x" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.facebook.com/bipinmsit" className=" mx-1">
                    <i className="fa fa-facebook-official fa-5x" aria-hidden="true"></i>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://twitter.com/bipinmsit?s=03" className=" mx-1">
                    <i className="fa fa-twitter fa-5x" aria-hidden="true"></i>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/bipin-kumar-79492b19" className=" mx-1">
                    <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.instagram.com/bipinmsit/?hl=en" className=" mx-1">
                    <i className="fa fa-instagram fa-5x" aria-hidden="true"></i>
                </a>
            </li>
                </div>
            </div>

        </div>


        </>
    )
}

export default Social