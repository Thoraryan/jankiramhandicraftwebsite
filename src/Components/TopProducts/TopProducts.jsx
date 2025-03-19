import React from 'react'
import { Link } from 'react-router-dom'

const TopProducts = () => {
    
    return (
        <div className="comman-p" data-aos="fade-up">
            <div className='container'>
                <div className=''>
                    <h2 className='comman-heading mb-4'>Top Product </h2>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-1.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Heirloom tomato</h2>
                                <p className="price-text m-0 mb-1">$5.99 / lb</p>
                                <p className="m-0 text-small">Grown in San Juan Capistrano, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-2.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-3.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-1.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Heirloom tomato</h2>
                                <p className="price-text m-0 mb-1">$5.99 / lb</p>
                                <p className="m-0 text-small">Grown in San Juan Capistrano, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-2.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-3.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-2.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-12 mb-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='products-img'>
                                    <img src="/assets/img/products/p-3.svg" className='w-100 h-100' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-heading mb-0'>Organic ginger</h2>
                                <p className="price-text m-0 mb-1">$12.99 / lb</p>
                                <p className="m-0 text-small">Grown in Huntington Beach, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link className='fs-4 fw-normal text-dark'>View All</Link>
                </div>
            </div>
        </div>
    )
}

export default TopProducts
