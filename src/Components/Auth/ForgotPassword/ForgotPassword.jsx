import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Verification email sent to: ${email}`);
    };

    return (
        <div className="container-fluid">
            <div className="forgot-password-container">
                <div className="row">
                    {/* Left Side - Forgot Password Form */}
                    <div className="col-md-5 pe-0">
                        <div className="form-gradient auth-h">
                            <div className="forgot-password-form py-2 h-100">
                                <h2 className="text-center">Forgot Password</h2>
                                <div className="d-flex flex-column w-100 justify-content-center h-100">
                                    <form onSubmit={handleSubmit} className="w-100">
                                        <div className="mb-4">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="text-end mt-4">
                                            <Link to="/otp" type="submit" className="comman-btn">
                                                Next
                                            </Link>
                                        </div>
                                    </form>
                                    <div className="text-center mt-4">
                                        <Link to="/login" className="text-main">Back to Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-7 ps-0 forgot-password-image d-none d-md-block">
                        <img src="/assets/img/bg.svg" alt="Forgot Password" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
