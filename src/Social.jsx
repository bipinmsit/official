import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Social = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 mx-auto bg-light">
                <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UC8ovhNxvvl9vPBXLj80rLVg" className="text-body mx-1">
                    <YouTubeIcon id="youtube" />
                    </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.facebook.com/bipinmsit" className="text-body mx-1">
                    <FacebookIcon className="social_icon" />
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://twitter.com/bipinmsit?s=03" className="text-body mx-1">
                    <TwitterIcon className="social_icon" />
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.instagram.com/bipinmsit/?hl=en" className="text-body mx-1">
                    <InstagramIcon id="instagram" />
                </a>
                </li>
                <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/bipin-kumar-79492b19" className="text-body mx-1">
                    <LinkedInIcon className="social_icon" />
                </a>
            </li>
                </div>
            </div>

        </div>


        </>
    )
}

export default Social