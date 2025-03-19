import React from 'react'
import CountryCode from '../../CountryCode/CountryCode'

const ContactUs = () => {
    return (
        <div className='container comman-p'>
            <h2 className="fs-3 text-center mb-4">Contact US</h2>
            <div className="col-lg-8 mx-auto">
                <div className="form-gradient">
                    <div className="form-design">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder='Name..' className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder='Email..' className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <CountryCode />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" placeholder="Type Something... " rows="4"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button className="comman-btn px-5">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
