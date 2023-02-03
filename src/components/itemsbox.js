import React from 'react'
import "../styles/itemsbox.css"

function Itemsbox() {
  return (
    <div className="container" style={{padding: '10px'}} >
    <div className="row" >
        <div className="col-xl-4 col-lg-4 col-md-4 col-ms-4 col-4" style={{padding: '0px'}}>
            <div className="ceremony"  style={{borderRight: '1px solid #fff'}}>
                <ul>
                    <li>
                        <a href="URL">All Ceremony</a>
                    </li>
                    <li>
                        <a href="URL">Wedding</a>
                    </li>
                    <li>
                        <a href="URL">Birthday</a>
                    </li>
                    <li>
                        <a href="URL">party</a>
                    </li>
                    <li>
                        <a href="URL">Engage</a>
                    </li>
                    <li>
                        <a href="URL">House-Warming</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-ms-8 col-8" style={{padding: '0px'}}>
            <div className="ceremony-items" style={{borderTop: '1px solid #9e9d9d', borderRight: '1px solid #9e9d9d'}}>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Wedding
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Birthday
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Party
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Engage
                    </div>
                </div>
            </div>
            <div className="ceremony-items" style={{borderBottom: '1px solid #9e9d9d', borderRight: '1px solid #9e9d9d'}}>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Wedding
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Birthday
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Party
                    </div>
                </div>
                <div className="item-box">
                    <div className="img-box">
                        
                    </div>
                    <div className="txt-box">
                        Engage
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Itemsbox