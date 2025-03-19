import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Collections = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="bg-black py-5 mb-5" data-aos="fade-right">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="fs-1 fw-bold text-main">Collections</h1>
                        {/* Custom Prev and Next Buttons */}
                        <div className="mt-5">
                            <button
                                className="comman-btn rounded-pill px-3 me-4"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className="comman-btn rounded-pill px-3"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Slider ref={sliderRef} {...settings}>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-1.webp" alt="Banner 1" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Embossed Panels</p>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-2.webp" alt="Banner 2" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Terracotta Plates</p>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-3.webp" alt="Banner 3" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Carved Plates</p>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-4.webp" alt="Banner 3" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Ceramic Plates</p>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-5.webp" alt="Banner 3" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Engraved Panels</p>
                            </div>
                            <div className='px-3'>
                                <img src="/assets/img/products/c-p-6.webp" alt="Banner 3" className="w-100 rounded" />
                                <p className="fs-4 fw-semibold mt-2 text-main mb-0">Wooden Vases</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections
