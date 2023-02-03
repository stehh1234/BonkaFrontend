import React from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import profile from '../images/profile.png'
import '../styles/uploaderProfile.css'
import ViewPost from './viewPost'

function UploaderProfile() {
  return (
    <>
        <NavbarAfterLogin />
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 p_body'>
                        <div className="p_body_info">
                            <div className="pic">
                                <img src={profile} id="pic_profile"  alt=''/>
                                <p id="pic_p">Stehh </p>
                            </div>
                            <div className="info">
                                <p>User ID : 99999999999 </p>
                                <p>Phone Number : 012 345 678 </p>
                                <p>Email : stehh@gmail.com </p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 link'>
                    <li id="post">Servicer Post</li>
                </div>
            </div>
        </div>
        <ViewPost />
        <ViewPost />
    </>
  )
}

export default UploaderProfile