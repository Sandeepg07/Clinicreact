import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Home() {
  return  (
    <div>
      <div className="banner container-fluid">
        <div className="layy">
          <div className="container">
            <h2>We care about your health more than anything in the world</h2>
            <p>
            We offer a wide range of services tailored to your unique requirements. Trust us to be your partner in health, ensuring you receive the best possible care.
            </p>
            <div className="btnm w-100">
             <button className="btn btn-primary"  style={{color:"black"}}><Link to="/bookappointments"> Book an Appointment</Link></button>
            </div>
          </div>
        </div>
      </div>

      <section className="our-blog container-fluid">
        <div className="container">
          <div className="session-title row">
            <h2>Our Services</h2>
            <p>
            Discover comprehensive healthcare solutions with our expert team. From preventive services to specialized treatments, we're committed to your well-being. Your health, our mission - providing care that makes a difference. Contact us to start your journey to a healthier you.
            </p>
          </div>
          <div className="col-sm-12 blog-cont">
            <div className="row no-margin">
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img
                    src="assets/images/services/service-1.jpg"
                    alt="Depression"
                  />
                  <div className="blog-single-det">
                    <h6>Depression</h6>
                    <p>
                    Not the answer you're looking for? Browse other questions...
                    </p>
                    <a href="blog_single.html">
                      <button className="btn btn-success btn-sm">
                        More Detail
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img
                    src="assets/images/services/service-2.jpg"
                    alt="Anxiety"
                  />
                  <div className="blog-single-det">
                    <h6>Anxiety</h6>
                    <p>
                    Not the answer you're looking for? Browse other questions...
                    </p>
                    <a href="blog_single.html">
                      <button className="btn btn-success btn-sm">
                        More Detail
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img
                    src="assets/images/services/service-3.jpg"
                    alt="Relationship Issue"
                  />
                  <div className="blog-single-det">
                    <h6>Relationship Issue</h6>
                    <p>
                      Not the answer you're looking for? Browse other questions...
                    </p>
                    <a href="blog_single.html">
                      <button className="btn btn-success btn-sm">
                        More Detail
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="doctor-message">
        <div className="inner-lay">
          <div className="container">
            <div className="row session-title">
              <h2>Our Clinic in Numbers</h2>
              <p>
                We can talk for a long time about the advantages of our Dental
                clinic before other medical treatment facilities. But you can
                read the following facts in order to make sure of all the
                pluses of our clinic:
              </p>
            </div>
            <div className="row">
              <div className="col-sm-3 numb">
                <h3>12+</h3>
                <span>Years of Experience</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>212+</h3>
                <span>Happy Patients</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>52+</h3>
                <span>Qualified Staff</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>18+</h3>
                <span>Master Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact_us" className="contact-us-single">
        <div className="row no-margin">
          <div className="col-sm-6 no-padding">
          <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55658420731!2d75.78144903602696!3d22.72410998051145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1698317759878!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
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
  );
}

export default Home