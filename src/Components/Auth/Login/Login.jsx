import React, { useState } from "react";
import { Form, Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginType, setLoginType] = useState("email");
    return (
        <div className="container-fluid">
            <div className="login-container">
                <div className="row">
                    <div className="col-md-5 pe-0">
                        <div className="form-gradient auth-h">
                            <div className="login-form py-2">
                                <h2 className="text-center mb-4">Login</h2>

                                {/* Bootstrap Nav Pills for Tab Switching */}
                                <ul className="nav nav-pills comman-tabs mb-3 d-flex justify-content-center">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${loginType === "email" ? "active" : ""}`}
                                            onClick={() => setLoginType("email")}
                                        >
                                            Email Login
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${loginType === "mobile" ? "active" : ""}`}
                                            onClick={() => setLoginType("mobile")}
                                        >
                                            Login
                                        </button>
                                    </li>
                                </ul>

                                {/* Login Forms */}
                                <div>
                                    {loginType === "email" && (
                                        <form>
                                            <div className="mb-4">
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                            </div>
                                            <div className="mb-4">
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>
                                            <div className="text-end mt-4">
                                                <Link to="/" type="submit" className="comman-btn">Login</Link>
                                            </div>
                                        </form>
                                    )}

                                    {loginType === "mobile" && (
                                        <form>
                                            <div className="mb-4">
                                                <input type="text" className="form-control" placeholder="Enter mobile number" />
                                            </div>
                                            <div className="mb-4">
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>
                                            <div className="text-end mt-4">
                                            <Link to="/" type="submit" className="comman-btn">Login</Link>
                                            </div>
                                        </form>
                                    )}
                                </div>

                                <div className="text-center mt-4">
                                    <Link to="/forgot-password" className="text-main">Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 ps-0 login-image d-none d-md-block">
                        <img src="/assets/img/bg.svg" alt="Login" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
