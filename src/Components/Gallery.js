import React from 'react'
import AppCss from '../App.css'
import Footer from './Footer'

function Gallery() {
  return (
    <div className='pageStyle'>
    <div className='container-fluid' style={{position:"absolute", top:"14%"}}>
              <div id="gallery" className="gallery">
        <div className="container" >
           <div className="session-title row">
                <h2>Our Gallery</h2>
                <p>Our gallery is a visual journey through our commitment to healthcare excellence. It offers a glimpse into the world of healing, compassionate care, and dedicated professionals who work tirelessly to promote well-being. Explore the moments that define our hospital's mission and values, capturing the essence of our unwavering dedication to the health and happiness of our community.</p>
            </div>
            <div className="row">


                <div className="gallery-filter d-none d-sm-block">
                    <button className="btn btn-default filter-button" data-filter="all">All</button>
                    <button className="btn btn-default filter-button" data-filter="hdpe">Dental</button>
                    <button className="btn btn-default filter-button" data-filter="sprinkle">Cardiology</button>
                    <button className="btn btn-default filter-button" data-filter="spray"> Neurology</button>
                    <button className="btn btn-default filter-button" data-filter="irrigation">Laboratry</button>
                </div>
                <br />



                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="assets/images/gallery/gallery_01.jpg" className="img-responsive"/>
                </div>

                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                    <img src="assets/images/gallery/gallery_02.jpg" className="img-responsive"/>
                </div>

                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                    <img src="assets/images/gallery/gallery_03.jpg" className="img-responsive"/>
                </div>

                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
                    <img src="assets/images/gallery/gallery_04.jpg" className="img-responsive"/>
                </div>

                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                    <img src="assets/images/gallery/gallery_05.jpg" className="img-responsive"/>
                </div>



                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                    <img src="assets/images/gallery/gallery_06.jpg" className="img-responsive"/>
                </div>

            </div>
        </div>


    </div>
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
    <Footer/>
</div>
    </div>
  )
}

export default Gallery