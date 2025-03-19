import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,        
        infinite: true,    
        speed: 500,        
        slidesToShow: 1,   
        slidesToScroll: 1, 
        autoplay: true,    
        autoplaySpeed: 3000,
        arrows: false        
    };
    return (
        <div className='container-fluid px-0' data-aos="fade-up">
            <div className="banner-slider">
                <Slider {...settings}>
                    <div className='banner-bg'>
                        <img src="/assets/img/banner.svg" alt="Banner 1" className="w-100" />
                    </div>
                    <div className='banner-bg'>
                        <img src="/assets/img/bg-about.svg" alt="Banner 2" className="w-100" />
                    </div>
                    <div className='banner-bg'>
                        <img src="/assets/img/banner.svg" alt="Banner 3" className="w-100" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner
