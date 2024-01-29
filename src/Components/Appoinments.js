import React from 'react';
import Appcss from '../App.css';

function Appoinments() {
  
 

  return (
    <div className='pageStyle' >
<br/><br/><br/><br/><br/>
      
        <div className='form-container' >
            <form  className='form-control'>
            <h1 >
            Enter Your Details.....
        </h1>
        <br/>
        <hr/>
        <br/>
                <div className='container'>
                    <div>
                        <input   type='text'  className='form-control' placeholder='Enter Your Name'></input>
                    </div>
                    <div>
                        <input type='number'  className='form-control' placeholder='Enter Your Phone Number'></input>
                    </div>
                    <div>
                        <input type='email'  className='form-control' placeholder='Enter Your Email'></input>
                    </div>
                    <div>
                        <input type='password'  className='form-control' placeholder='Enter Your Address'></input>
                    </div>
                    <div>
                    <select className='form-control'>
                        <option>--Select Your Gender--</option>
                        <option>Male</option>
                        <option>Female</option>

                        </select>
                    </div>
                    <br/>
                    <hr/>
                    
                    <div>
                        <input type='submit' className='form-control'/>
                    </div>
                    
                </div>
            </form>
        </div>
        <br/>
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Smart Eye is a leading provider of information technology,
                consulting, and business process services. Our dedicated
                employees offer strategic insights, technological expertise, and
                industry experience.
              </p>
              <p>
                We focus on technologies that promise to reduce costs,
                streamline processes, and speed time-to-market, backed by our
                strong quality processes and rich experience managing global...
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Useful Links</h2>
              <ul className="list-unstyled link-list">
                <li>
                  <a href="#/about">About us</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="#/portfolio">Portfolio</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="#/products">Latest jobs</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="#/gallery">Gallery</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="#/contact">Contact us</a>
                  <i className="fa fa-angle-right"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Phone: +91 9159669599 <br />
                Email: <a href="mailto:info@anybiz.com">info@bluedart.in</a>
                <br />
                Web: <a href="smart-eye.html">www.bluedart.in</a>
              </address>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/">
            2015 &copy; All Rights Reserved | Designed and Developed by
            Smarteyeapps
          </a>

          <span>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
        </div>
      </div>
    
 
    </div>
  )
}

export default Appoinments;