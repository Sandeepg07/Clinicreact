import React from 'react'
import AppCss from '../App.css'
import Footer from './Footer'

function Contact() {
  return (
    <div className='pageStyle' >
    <br/><br/><br/><br/><br/>
            <section id="contact_us" className="contact-us-single">
        <div className="row no-margin">
         
          <div className="col-sm-6 cop-ck">
            <h2>Contact Form</h2>
            <div className="row cf-ro">
              <div className="col-sm-3">
                <label>Enter Name :</label>
              </div>
              <div className="col-sm-8">
                <input 
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cf-ro">
              <div className="col-sm-3">
                <label>Email Address :</label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cf-ro">
              <div className="col-sm-3">
                <label>Mobile Number:</label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  className="form-control input-sm"
                />
              </div>
            </div>
            <div className="row cf-ro">
              <div className="col-sm-3">
                <label>Enter Message:</label>
              </div>
              <div className="col-sm-8">
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="form-control input-sm"
                ></textarea>
              </div>
            </div>
            <div className="row cf-ro">
              <div className="col-sm-3">
                <label></label>
              </div>
              <div className="col-sm-8">
                <button className="btn btn-primary btn-sm">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact