import React, {useState} from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import { Link } from 'react-router-dom'
import profile from '../images/profile.png'
import "../styles/profile.css"
import {Routes, Route} from 'react-router-dom'
import PostEvent from './postEvent'
import FavoriteBlank from './favoriteBlank'
import Setting from './setting'
import SettingPassword from './settingPassword'
import SettingProfile from './settingProfile'
// import axios from 'axios'

function Profile() {
    
    const [ data ] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
        <NavbarAfterLogin />
        <div className='container-fluid'>
        
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 p_body'>
                                    <div className="p_body_info">
                                        <div className="pic">
                                            <img src={profile} id="pic_profile"  alt=''/>
                                            <p id="pic_p">{data.username}</p>
                                        </div>
                                        <div className="info">
                                            <p>User ID : {data.user_id} </p>
                                            <p>Phone Number : {data.phone_number} </p>
                                            <Link to={"/profile/setting/settingProfile"}><p>Email : <span style={{color: "#0d6efd", cursor: "pointer"}}> add email</span> </p></Link>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                    
            
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 link'>
                    <Link to={"/profile"}><li id="post">My Post</li></Link>
                    <Link to={"favoriteBlank"}><li id="favorite">Favorite</li></Link>
                    <Link to={"setting"}><li id="setting">Setting</li></Link>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 bodyBlank'>
                <Routes>
                    <Route path="/" element={<PostEvent />} />
                    <Route path="favoriteBlank" element={<FavoriteBlank />} />
                    <Route path="/setting" element={<Setting />} >
                        <Route path="settingProfile" element={<SettingProfile />}></Route>
                        <Route path='settingPassword' element={<SettingPassword />}></Route>
                    </Route>
                </Routes>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile