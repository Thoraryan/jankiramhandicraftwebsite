import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Otp = () => {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`OTP entered: ${otp}`);
    };

    return (
        <div className="container-fluid">
            <div className="otp-container">
                <div className="row">
                    {/* Left Side - OTP Verification Form */}
                    <div className="col-md-5 pe-0">
                        <div className="form-gradient">
                            <div className="otp-form py-2">
                                <h2 className="text-center mb-4">Enter OTP</h2>
                                <p className="text-center">A 6-digit OTP has been sent to your email/mobile</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    maxLength="1"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-end mt-4">
                                        <Link to="/reset-password" className="comman-btn">
                                            Verify OTP
                                        </Link>
                                    </div>
                                </form>

                                <div className="text-center mt-3">
                                    <button className="btn btn-link text-main">Resend OTP</button>
                                </div>

                                <div className="text-center mt-4">
                                    <Link to="/login" className="text-main">Back to Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-7 ps-0 otp-image d-none d-md-block">
                        <img src="/assets/img/bg.svg" alt="OTP Verification" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
