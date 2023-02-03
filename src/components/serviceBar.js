import React from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import SlideShow from './slideshow'
import "../styles/serviceBar.css"
import bon from '../images/bon.jpg'
import Footer from './Footer'
function ServiceBar() {
  return (
    <>
        <NavbarAfterLogin />
        <SlideShow />
        <div className='container' style={{borderTop: '1px solid #BDC3C7', marginTop: '25px',}}>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-review'>
                    <div className='service-event-option'>
                        <p>Wedding Embellishment</p>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-review' style={{marginBottom: '15px'}}>
                    <div className='service-option'>
                        <div className='image'>
                            <img src={bon} alt ="" />
                        </div>
                        <div className='service-event-detail'>
                            <p><b>stehh salon</b></p>
                            <div className='event-description'>
                                <p>Description</p>
                            </div>
                            <div className='date'>
                                Location/Date
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-review' style={{marginBottom: '15px'}}>
                    <div className='service-option'>
                        <div className='image'>
                            <img src={bon} alt ="" />
                        </div>
                        <div className='service-event-detail'>
                            <p><b>stehh salon</b></p>
                            <div className='event-description'>
                                <p>Description</p>
                            </div>
                            <div className='date'>
                                Location/Date
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-review' style={{marginBottom: '15px'}}>
                    <div className='service-option'>
                        <div className='image'>
                            <img src={bon} alt ="" />
                        </div>
                        <div className='service-event-detail'>
                            <p><b>stehh salon</b></p>
                            <div className='event-description'>
                                <p>Description</p>
                            </div>
                            <div className='date'>
                                Location/Date
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-review' style={{marginBottom: '15px'}}>
                    <div className='service-option'>
                        <div className='image'>
                            <img src={bon} alt ="" />
                        </div>
                        <div className='service-event-detail'>
                            <p><b>stehh salon</b></p>
                            <div className='event-description'>
                                <p>Description</p>
                            </div>
                            <div className='date'>
                                Location/Date
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ServiceBar