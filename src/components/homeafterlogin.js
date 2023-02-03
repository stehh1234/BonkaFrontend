import React from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import Slideshow from './slideshow'
import Chaption from './caption'
import ItemsBox from './itemsbox'
import PopularService from './popularservice'
import ServiceCard from './servicecard'
import LatestCard from './latestcard'

function HomeAfterLogin() {
  return (
    <>
        <NavbarAfterLogin />
        <Slideshow />
        <Chaption />
        <ItemsBox />
        <PopularService />
        <ServiceCard />
        <LatestCard />

    </>
  )
}

export default HomeAfterLogin