import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Password has been reset successfully!");
        }
    };

    return (
        <div className="container-fluid">
            <div className="reset-password-container">
                <div className="row">
                    {/* Left Side - Reset Password Form */}
                    <div className="col-md-5 pe-0">
                        <div className="form-gradient auth-h">
                            <div className="reset-password-form py-2 h-100">
                                <h2 className="text-center mb-4">Reset Password</h2>

                                <div className="d-flex flex-column w-100 justify-content-center h-100">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter new password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm new password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="text-end mt-4">
                                            <Link to="/login" type="submit" className="comman-btn">
                                                Reset Password
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
                    <div className="col-md-7 ps-0 reset-password-image d-none d-md-block">
                        <img src="/assets/img/bg.svg" alt="Reset Password" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
