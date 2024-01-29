import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Webservice from '../WebServices/Webservice';
import WebApi from '../WebServices/WebApi';
import '../App.css';
import {  useDispatch } from 'react-redux';
import { forlogin } from '../Redux/Slice';

function Login() {
 const dispatch = useDispatch();
 const navigate = useNavigate();
  

    const email= useRef();
  const password= useRef();
  const logins = async(e)=>{
    e.preventDefault();
    const obj = {
        email:email.current.value,
        password:password.current.value
    }
    console.log("my obj is ",obj)
    const resp = await Webservice.postApi(WebApi.loginApi,obj)
    console.log("my login resp is ",resp)
    if(resp.status){
      console.log("hello status ok dr",resp.data.data.userType)
            if(resp.data.data.userType === "doctor"){ 

      dispatch(forlogin({token:resp.data.data.token,isLogin:true,type:resp.data.data.userType}))
      // console.log("our dispatch data is :",d)
      navigate("/home1")
    }
    if(resp.data.data.userType === "reception"){

       dispatch(forlogin({token:resp.data.data.token,isLogin:true,type:resp.data.data.userType}))
      // console.log("our dispatch data is :",d)
      navigate("/home1")

    }

  }}
  

  return (
    <div className=' pageStyle' >
    <br/><br/><br/><br/><br/>
      <div className='form-container' >
         
           <form onSubmit={logins} className='form-control' >
           <div className='container'>
           <h1 className="text-center fw-light " style={{color:"white"}}> Login Here!</h1><br/><br/>
                      <div  >
                        <input type='email' className="form-control"  ref={email} placeholder="Enter Email"></input>
                      </div><br/>
                      <div >
                       <input type='password' className="form-control" ref={password} placeholder="Enter Password"></input>    
                      </div><br/>
                      <div>
                        <input type="submit" style={{backgroundColor:"red"}} className="btn btn-primary form-control" />
                      </div>
                      </div>
                      </form>
                      
                      <hr style={{color:"white"}}/>
                      <span style={{textDecoration:"none" ,color:"white"}}>If You are not Register Then Click <Link style={{textDecoration:"none" ,color:"red"}} to="/Register"> Register here !!!!</Link></span>
                    
          
        
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
          <a href='_blank'>
            2023 &copy; All Rights Reserved | Designed and Developed by
            Sandeep Gathiya
          </a>

          <span>
            <a href="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="v">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="_blank">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
    
 
    </div>
  )
}

export default Login;