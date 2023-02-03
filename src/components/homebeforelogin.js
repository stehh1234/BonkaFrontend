import React from 'react'
import Navbar from './Navbar'
import Slideshow from './slideshow'
import Chaption from './caption'
import ItemsBox from './itemsbox'
import PopularService from './popularservice'
import ServiceCard from './servicecard'
import LatestCard from './latestcard'
import HomeAfterLogin from './homeafterlogin'

function HomeBeforeLogin() {
  const user_data = localStorage.getItem('user');
  return (
    <>
    {
      user_data?
      <HomeAfterLogin />:
      <div>
        <Navbar />
        <Slideshow />
        <Chaption />
        <ItemsBox />
        <PopularService />
        <ServiceCard />
        <LatestCard />
      </div>
    }
    </>
  )
}

export default HomeBeforeLogin