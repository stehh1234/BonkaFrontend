import React from 'react'
import "../styles/servicecard.css"
import home from "../images/house.jpg"
import wedding from "../images/wedding.jpg"
import bon from "../images/bon.jpg"
import birthday from "../images/birthday.jpg"
function Latestcard() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12' style={{marginTop: '25px'}}>
                    <b>LatestService</b>
                </div>
            </div>
        </div>
        <div className='container'  style={{marginTop: '15px'}}>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12  service-box'>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={home} alt=""/>
                        </div>
                        <div className='detail-box'>
                        <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={wedding} alt=""/>
                        </div>
                        <div className='detail-box'>
                            <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12  service-box'>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={bon} alt=""/>
                        </div>
                        <div className='detail-box'>
                        <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={birthday} alt=""/>
                        </div>
                        <div className='detail-box'>
                            <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'  style={{marginTop: '15px'}}>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12  service-box'>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={home} alt=""/>
                        </div>
                        <div className='detail-box'>
                        <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={wedding} alt=""/>
                        </div>
                        <div className='detail-box'>
                            <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12  service-box'>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={bon} alt=""/>
                        </div>
                        <div className='detail-box'>
                        <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div className='img-box'>
                            <img src={birthday} alt=""/>
                        </div>
                        <div className='detail-box'>
                            <br/>
                            <p>Name: </p>
                            <p>Price: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Latestcard