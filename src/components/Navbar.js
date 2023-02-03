import React from 'react'
import "../styles/navbar.css"
import logo from "../images/logo.png"
import {Link} from 'react-router-dom'
// import LogIn from './login'
// import SignUp from './signup'
function Navbar() {
   
  return (
    <header>
        <div className="container-fluid navBar">
            <div className="container">
            <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-ms-3 col-3 logo">
                            <img src={logo} alt="" />
                    </div>  
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 search">
                        <div className="list">
                        <form action="" >
                                <select className="dropdown">
                                    <option selected disabled value="" >All Service</option>
                                    <option value="">Birthday</option>
                                    <option value="">Wedding</option>
                                    <option value="">Party</option>
                                </select>
                                <input type="search" className="btn-search" placeholder="Search in All Service" />
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-ms-3 col-3 option">
                        <div className='optionItem'>
                            <div className='login-button'>
                                <Link to='/login'><button >Log In</button></Link>
                            </div>
                            
                            {/* <a href="URL" className="signUp">Sign Up</a> */}
                            Or
                            <div className='signup-button'>
                            <Link to='/signup'><button >Sign Up</button></Link>
                            </div>
                            
                            {/* <a href="URL" className="logIn">Log In</a> */}
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
  )
}

export default Navbar