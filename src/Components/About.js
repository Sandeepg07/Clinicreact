import React from 'react'
import  '../App.css';
import Footer from "./Footer"

function About() {
  return (
    <div className='banner container-fluid' style={{position:'absolute', top:"14%" }}>
    <div className='mt-500'>
       <section className="about-us">
        <div className="row no-margin">
            <div className="col-sm-6 image-bg no-padding">
                
            </div>
            <div className="col-sm-6 abut-yoiu">
                <h3>About Our Hospital</h3>
                <p>
                    
                </p>
                <p>
                Welcome to Our Hospital, where we have been dedicated to delivering exceptional healthcare and fostering community well-being for over 50 years. Our enduring commitment to excellence has established us as a trusted healthcare institution.
                    <br/>
                    Our hospital boasts a state-of-the-art facility, replete with cutting-edge technology and modern amenities to ensure that every patient receives the best possible care. Our dedication to innovation and continuous improvement empowers us to provide the latest advancements in medical treatment.ything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                      <br/>
                      At the core of our success is our team of skilled and compassionate healthcare professionals. Our doctors, nurses, and support staff are not only highly qualified but also deeply committed to your well-being, offering individualized care and personal attention to each patient.
                      <br/>
                      We offer a comprehensive range of medical services, covering preventive care, diagnostics, surgery, and specialized treatments. From routine check-ups to complex medical procedures, Our Hospital is your all-encompassing healthcare destination.
                      <br/>
                      In our patient-centered environment, your comfort, safety, and recovery are paramount. We aim to create a compassionate and personalized experience for every patient, addressing not just the physical but also the emotional aspects of healthcare.
<br/>
Our commitment to the community goes beyond the confines of our hospital. We actively participate in community health and education initiatives, advocating for a healthier and happier society.
<br/>
Thank you for entrusting Our Hospital as your dedicated healthcare partner. We are honored to be a part of your healthcare journey and look forward to offering you the highest standard of care. At Our Hospital, we stand for health, healing, and hope - your well-being is our mission.
                </p>
            </div>
        </div>
    </section>
    <section className="our-team">
        <div className="container">
            <div className="inner-title row">
                <h2>Our Team</h2>
                <p>Take a look at our Team</p>
            </div>
            <div className="row team-row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</div>
<Footer/>
    </div>
  )
}

export default About