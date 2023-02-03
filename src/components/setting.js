import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../images/arrow.png'
import "../styles/setting.css"
import {Routes, Route} from 'react-router-dom'
import SettingPassword from './settingPassword'
import SettingProfile from './settingProfile'
import {toast} from 'react-toastify';

function Setting() {

    const navigate = useNavigate();

    const handleLogout= () =>{
        localStorage.clear();
        navigate('/');
        toast.success("log out successful")
    }

  return (
    <div id='main_Setting'>
        <div className="container-blank">
            <div className="row-blank">
                <div className="col-3">
                    <div id="c1_text">
                        <Link to={"/profile"}><li id="setting_back"><img src={arrow} alt="" /></li></Link>
                        <p id="p">Account</p>
                    </div>
                    <div id="c1">
                        <Link to="settingProfile"><li className="link_edit">Edit Profile</li></Link>
                    </div>
                    <div id="c1">
                        <Link to="settingPassword"><li className="link_pass">Change Password</li></Link>
                    </div>
                    <center>
                        <button onClick={handleLogout} id="button">Log Out</button>
                    </center>
                </div>
                <div className="col">
                    <Routes>
                        <Route path='settingProfile' element={<SettingProfile />} />
                        <Route path='settingPassword' element={<SettingPassword />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Setting