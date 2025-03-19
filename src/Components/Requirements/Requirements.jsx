import React, { useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import CountryCode from "../../CountryCode/CountryCode";


const Requirements = () => {

    return (
        <div className="bg-black comman-p" data-aos="fade-right">
            <div className='container pt-0'>
                <div className="row">
                    <div className="col-md-4 pe-0 d-lg-block d-none">
                        <div className="products-contact-bg p-0">
                            <img src="/assets/img/logo.svg" className="w-100 h-100" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 ps-lg-0">
                        <div className="form-gradient bg-transparent mt-4">
                            <h2 className="fs-3 text-center text-light">Submit Custom Requirements</h2>
                            <div className="form-design">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select name="" id="" className="form-select">
                                                <option value="">Select Category</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select name="" id="" className="form-select">
                                                <option value="">Quantity</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder='Name..' className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <CountryCode />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" placeholder="Additional Details" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-center">
                                            <button className="comman-btn px-5">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requirements
