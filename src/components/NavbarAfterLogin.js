import React from 'react'
import "../styles/navbarafterlogin.css"
import logo from "../images/logo.png"
import global from "../images/global_svg.webp"
import heart from '../images/heart.png'
import profile from "../images/profile.png"
import { Link } from 'react-router-dom'
 
function NavbarAfterLogin() {
  return (
    <header>
        <div className="container-fluid navBar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-ms-3 col-3 logo">
                            <Link to={"/homeafterlogin"}><img src={logo} alt="" /></Link>
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
                                <div className="icon" style={{backgoundColor: 'red'}}>
                                    <a href="URL" className="global"><img src={global} alt=""/></a>
                                    <a href="/profile/favoriteBlank" className="heart"><img src={heart} alt=""/></a>
                                    <a href="/profile" className="profiles"><img src={profile} alt=""/></a>
                                </div>
                                <div className="post">
                                    <Link to={"/post"}><button >Post</button></Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavbarAfterLogin