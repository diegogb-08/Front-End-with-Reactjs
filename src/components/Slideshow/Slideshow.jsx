import React, {Component} from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Slideshow.css'

import Slide1 from '../../img/smileClinic.png'
import Slide2 from '../../img/dentalClinic.png'
import Slide3 from '../../img/dentistGirl.png'
import Slide4 from '../../img/clinicGirl.png'
import Slide5 from '../../img/primeraConsulta.jpg'
import Slide6 from '../../img/hazteCliente.jpg'

const Slideshow = () => {


    const settings = {
        dots: true, 
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

      return (
            <div className='sliderContainer'>
              <h2>Auto Play</h2>  
          <Slider {...settings}>
            <div className='slider'>
                <img className="slide1" alt="slide1" src={Slide1}/> 
            </div>
            <div className='slider'>
                <img className="slide5" alt="slide5" src={Slide5}/> 
            </div>
            <div className='slider'>
                <img className="slide2" alt="slide2" src={Slide2}/> 
            </div>
            <div className='slider'>
                <img className="slide3" alt="slide3" src={Slide3}/> 
            </div>
            <div className='slider'>
                <img className="slide6" alt="slide5" src={Slide6}/> 
            </div>
            <div className='slider'>
                <img className="slide4" alt="slide4" src={Slide4}/> 
            </div>
          </Slider>
        </div>
      );
}


  export default Slideshow;