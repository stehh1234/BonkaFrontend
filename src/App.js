import HomeAfterLogin from './components/homeafterlogin';
import HomeBeforeLogin from './components/homebeforelogin';
import {Routes, Route } from 'react-router-dom'
import Profile from "./components/profile";
import Post from './components/post';
import PostEvent from './components/postEvent';
import FavoriteBlank from './components/favoriteBlank';
import Setting from './components/setting';
import SettingPassword from './components/settingPassword'
import SettingProfile from './components/settingProfile';
import Login from './components/login';
import Signup from './components/signup'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>

      <ToastContainer position='top-center' />
      <Routes>
              <Route path='/' element = {<HomeBeforeLogin />} />
              <Route path='/homeafterlogin' element = {<HomeAfterLogin />} />
              <Route path="/profile" element={<Profile/>} >
                <Route path="postEvent" element={<PostEvent/>} />
                <Route path="favoriteBlank" element={<FavoriteBlank />} />
                <Route path="setting" element={<Setting />} >
                    <Route path="settingProfile" element={<SettingProfile />}/>
                    <Route path='settingPassword' element={<SettingPassword />}/>
                </Route>
              </Route>
              
              <Route path="/post" element={<Post/>} />
              <Route path = "/login" element={<Login/>} />
              <Route path='/signup' element={<Signup />} />
        
      </Routes>
      
    </>
    
  );
}

export default App;
