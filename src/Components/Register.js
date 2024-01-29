import React, { useRef, useState } from 'react'
import Webservice from '../WebServices/Webservice';
import WebApi from '../WebServices/WebApi';
import  '../App.css';

function Register() {
const namep = useRef();
const emailp = useRef();
const passwordp = useRef();
const numberp = useRef();
const [message, setMessage] = useState();
const register = async(e)=>{
    e.preventDefault();
setMessage('');
    const obj = {
         name: namep.current.value ,
        phoneNumber:numberp.current.value  ,
        email:emailp.current.value ,
        password:passwordp.current.value 

    }
    console.log("my registr obj is ",obj)
    const resp = await Webservice.postApi(WebApi.registerapi, obj);
    console.log("my register resp is ",resp)
    if(resp.data.status){
        setMessage(resp.data.msg)
        
    }
    else{
        setMessage(resp.data.msg)
    }
    e.target.reset();
}

  return (
    <div className='pageStyle' >
<br/><br/><br/><br/><br/>
      
        <div className='form-container' >
            <form onSubmit={register} className='form-control'>
            <h1 >
            Register Here....
        </h1>
        <br/>
        <hr/>
        <br/>
                <div className='container'>
                    <div>
                        <input  type='text' ref={namep} className='form-control' placeholder='Enter Your Name'></input>
                    </div>
                    <div>
                        <input type='number' ref={numberp} className='form-control' placeholder='Enter Your Phone Number'></input>
                    </div>
                    <div>
                        <input type='email' ref={emailp} className='form-control' placeholder='Enter Your Email'></input>
                    </div>
                    <div>
                        <input type='password' ref={passwordp} className='form-control' placeholder='Enter Your Password'></input>
                    </div>
                    <br/>
                    <hr/>
                    
                    <div>
                        <input type='submit' className='form-control'/>
                    </div>
                    {message}
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
              We're dedicated to your well-being. With a focus on compassionate care, our experienced team is here to serve your healthcare needs. We offer a wide range of services tailored to your unique requirements. Trust us to be your partner in health, ensuring you receive the best possible care.
              </p>
              <p>
              Your health is our priority, and we're committed to providing personalized solutions that enhance your quality of life. With a patient-centered approach, we aim to be your trusted healthcare destination....
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
                Aabra Ka Dabra <br />
                Indore <br />
                Madhya Pradesh, IND <br />
                Phone: +91 9159669599 <br />
                Email: <a href="mailto:info@anybiz.com"> sandeepgathiya0@gmail.com</a>
                <br />
                Web: <a href="smart-eye.html">www.Aabrakadabra.in</a>
              </address>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy">
        <div className="container">
          <a href="#">
            2023 &copy; All Rights Reserved | Designed and Developed by
            Sandeep Gathiya
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
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
                  </div>
      </div>
    
 
    </div>
  )
}

export default Register