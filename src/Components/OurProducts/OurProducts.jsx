import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProducts = () => {
    const settings = {
        dots: true,            // Show navigation dots
        infinite: true,        // Infinite loop scrolling
        speed: 500,           // Transition speed
        slidesToShow: 1,      // Number of slides visible at once
        slidesToScroll: 1,    // Number of slides to scroll
        autoplay: true,       // Auto-slide
        autoplaySpeed: 3000,  // Time per slide (in ms)
        arrows: true        // Hide next/prev arrows
    };
    return (
        <div className='container-fluid' >
            <div className="comman-p our-product">
                <div className="d-flex justify-content-end">
                    <button className='comman-btn bg-secondary'>Request a Custom Design</button>
                </div>
                <div className="row mt-5">
                    <div className="col-12 category-slider d-md-none d-block mb-4" data-aos="fade-up">
                        <Slider {...settings} className='d-md-none d-block'>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-1.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Luxury Antique</p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-2.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Home Decor </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-3.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Decorative Pots </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-4.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Home Decor  </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-5.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Decorative Pots  </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-6.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Unique Design   </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-7.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center">Brass Items   </p>
                            </div>
                            <div className="mb-3" >
                                <img src="/assets/img/products/c-8.svg" className='category-items mb-2' alt="" />
                                <p className="fs-6 fw-semibold text-center"></p>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-2 col-md-3 border-end border-dark mb-md-0 mb-4 d-md-block d-none">
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-1.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Luxury Antique</p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-2.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Home Decor </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-3.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Decorative Pots </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-4.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Home Decor  </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-5.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Decorative Pots  </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-6.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Unique Design   </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-7.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center">Brass Items   </p>
                        </div>
                        <div className="mb-3" data-aos="fade-up">
                            <img src="/assets/img/products/c-8.svg" className='category-items mb-2' alt="" />
                            <p className="fs-6 fw-semibold text-center"></p>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-9">
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-5.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-6.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-7.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-8.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-9.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-10.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-11.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-3.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-12.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-13.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-14.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up">
                                <Link to="/product-details">
                                    <div className='card border-dark border-3'>
                                        <div className='card-header'>
                                            <div className='products-img'>
                                                <img src="/assets/img/products/p-15.svg" className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <h2 className='card-heading mb-0 fw-bold'>Antique Wooden Pot</h2>
                                            <p className="price-text m-0 mb-1">$12 / Piece</p>
                                            <p className="m-0 text-small">Type: Flower Decor Pot </p>
                                            <Link className='fs-5 fw-semibold text-dark'>View More</Link>
                                        </div>
                                        <div className="card-footer bg-dark">
                                            <h2 className="text-white fs-6 text-center m-0">Get Best Price </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts
