import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
    return(
        <>



<footer className="page-footer font-small bg-secondary text-light mt-4 pt-2">

  
  <div className="container text-center text-md-left">

    
    <div className="row text-center text-md-left mt-3 pb-3">

      
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>
      

      <hr className="w-100 clearfix d-md-none" />

      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="/" className="text-body" >MDBootstrap</a>
        </p>
        <p>
          <a href="/" className="text-body">MDWordPress</a>
        </p>
        <p>
          <a href="/" className="text-body">BrandFlow</a>
        </p>
        <p>
          <a href="/" className="text-body">Bootstrap Angular</a>
        </p>
      </div>
      

      <hr className="w-100 clearfix d-md-none" />

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="/" className="text-body">Your Account</a>
        </p>
        <p>
          <a href="/" className="text-body">Become an Affiliate</a>
        </p>
        <p>
          <a href="/" className="text-body">Shipping Rates</a>
        </p>
        <p>
          <a href="/" className="text-body">Help</a>
        </p>
      </div>

      
      <hr className="w-100 clearfix d-md-none" />

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <HomeIcon/> Bangalore, 560068, India</p>
        <p>
          <MailOutlineIcon /> bipin_msit@yahoo.com</p>
        <p>
          <CallIcon /> +91-7060194990</p>
      </div>  

    </div>   

    <hr />

    
    <div className="row d-flex align-items-center">

      
      <div className="col-md-7 col-lg-8">        
        <p className="text-center text-md-left">Copyright <span> ©️ </span> bipinmsit. All Right Reserved</p>
      </div>
      

      
      <div className="col-md-5 col-lg-4 ml-lg-0">        
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
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
          </ul>
        </div>
      </div>    

    </div>   

  </div> 

</footer>



        </>
    )
}
export default Footer