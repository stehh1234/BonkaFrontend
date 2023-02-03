import React from 'react'
// import NavbarAfterLogin from './NavbarAfterLogin'
import "../styles/viewpost.css"
import {FaCaretSquareRight, FaCaretSquareLeft, FaRegHeart} from 'react-icons/fa'
import wedding from '../images/wedding.jpg'
import phone from '../images/PHONE LOGO.png'
import servicer from '../images/profile.png'
// import Footer from './Footer'
function ViewPost() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 viewpost-box'>
                    <div className='viewpost-photo'>
                        <div className='backIcon'>
                            <FaCaretSquareLeft />
                        </div>
                        <div className='photo'>
                             <img src={wedding} alt = ""/>
                        </div>
                        <div className='nextIcon'>
                            <FaCaretSquareRight />
                        </div>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 post-detail'>
                    <div className='event-detail'>
                        <div className='detail'>
                            <p>Service Name: Philip Somangka</p>
                            <p>Price: 120$</p>
                        </div>
                        <div className='favorite'>
                            <FaRegHeart />
                        </div>
                    </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 post-description'>
                    <div className='event-description'>
                        <div className='description'>
                            <p>Description</p>
                            <textarea></textarea>
                        </div>
                    </div>

                </div>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 service-detail'>
                    <div className='servicer'>
                        <div className='servicer-detail'>
                            <img src={phone} alt = ""/>0969594559 <br/>
                            <img src={servicer} alt= ''/>Uploader
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
       
    </>
  )
}

export default ViewPost