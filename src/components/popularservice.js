import React from 'react'
import "../styles/popularservice.css"
import {FaCaretSquareRight, FaCaretSquareLeft} from 'react-icons/fa'
function PopularService() {
  return (
    <div className="container">
        <div className='row'>
            <div className="col-xl-12 col-lg-12 col-md-12 col-ms-12 col-12 service">
              <div className='text-arrow'>
                <div className='text'>
                  <b>PopularService</b>
                </div>
                <div className='icons'>
                  <div className='iconBack'>
                    <FaCaretSquareLeft />
                  </div>
                  <div className='iconNext'>
                    <FaCaretSquareRight />
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default PopularService