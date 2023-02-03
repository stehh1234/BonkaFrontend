import React from 'react'
import "../styles/slideshow.css"
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import wedding from "../images/wedding.jpg"
import bon from "../images/bon.jpg"
import birthday from "../images/birthday.jpg"
import home from "../images/house.jpg"
import engage from "../images/engage.jpg"

function Slideshow() {
    useEffect (() => {
        var slide = $('.slide');
        var slideInd = 0;

        var numslide = slide.length;
        slide.hide();
        slide.eq(slideInd).show();
        $('.btn-right').click(function(){
            slide.eq(slideInd).hide();
            $('.pagination').find('li').eq(slideInd).removeClass("active")
            slideInd++;
            
            if (slideInd === numslide){
                slideInd = 0;
            }
            slide.eq(slideInd).show();
            $('.pagination').find('li').eq(slideInd).addClass("active")
        });
        $('.btn-left').click(function(){
            slide.eq(slideInd).hide();
            $('.pagination').find('li').eq(slideInd).removeClass("active")
            slideInd--;
            
            if (slideInd < 0){
                slideInd = numslide - 1;
            }
            slide.eq(slideInd).show();
            $('.pagination').find('li').eq(slideInd).addClass("active")
        });
        getSlidePage();
        function getSlidePage(){
            var txt = '';
            for (let i = 1; i < numslide + 1; i++){
                txt += '<li>'+i+'</li>';
            }
            $('.pagination').html(txt);
            $('.pagination').find('li').eq(0).addClass("active")
        }
        $('.pagination').on('click', 'li', function(){
            slide.eq(slideInd).hide();
            slideInd = $(this).index();
            slide.eq(slideInd).show();
            $('.pagination').find('li').removeClass("active");
            $(this).addClass("active");
        });
        //slideshow auto
        var autoSlide = setInterval(mytimer, 3000);
            function mytimer(){
                $('.btn-right').click();
            }
            function stopSlide(){
                clearInterval(autoSlide);
            }
            $('.slide-box').mouseover(function(){
                stopSlide();
            });
            $('.slide-box').mouseout(function(){
                autoSlide = setInterval(mytimer, 3000);
            });
    }, []);
  return (
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-ms-12 col-12 slide-container">
                <div className="slide-box">
                    <div className="slide">
                        <img src={wedding} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={birthday} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={bon} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={home} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={engage} alt=""/>
                    </div>
                    <div className="btn-slide btn-right">
                        &gt;
                    </div>
                    <div className="btn-slide btn-left">
                        &lt;
                    </div>
                    <ul className="pagination"> 
                        {/* <li></li>
                        <li></li>
                        <li></li>
                        <li></li>  */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default Slideshow