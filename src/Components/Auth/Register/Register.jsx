import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
    return (
        <div className="container-fluid">
            <div className="register-container">
                <div className="row">
                    {/* Left Side - Signup Form */}
                    <div className="col-md-5 pe-0">
                        <div className="form-gradient auth-h">
                            <div className="register-form py-2">
                                <h2 className="text-center mb-4">Sign Up</h2>

                                {/* Signup Form */}
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <input type="text" className="form-control" placeholder="Mobile Number" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <input type="password" className="form-control" placeholder="Confirm Password" />
                                        </div>

                                        <div className="text-end mt-4">
                                            <button type="submit" className="comman-btn">Sign Up</button>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center mt-4 text-light">
                                    Already have an account? <Link to="/login" className="text-main">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-7 ps-0 register-image d-none d-md-block">
                        <img src="/assets/img/bg.svg" alt="Register" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
