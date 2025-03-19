import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className={`header px-4 my-4 ${isFixed ? "header-fixed" : ""}`}>
                <div className="row align-items-center h-100">

                    <div className="col-lg-3 col-md-2 col-7">
                        <img src="/assets/img/logo.svg" alt="Logo" className="logo" />
                    </div>

                    <div className="col-lg-5 col-md-7 d-md-block d-none">
                        <nav className="navbar">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Home
                            </NavLink>
                            <NavLink to="/our-products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Our Product
                            </NavLink>
                            <NavLink to="/about-us" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                About Us
                            </NavLink>
                            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                Contact Us
                            </NavLink>
                        </nav>
                    </div>

                    <div className="col-lg-4 col-md-3 text-end d-md-block d-none">
                        <NavLink to="/contact-us" className="comman-btn">
                            Get Quote
                        </NavLink>
                    </div>

                    <div className="col-5 d-md-none d-block">
                        <div className="text-end">
                            <button
                                className="bg-transparent border-0"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                            >
                                <Menu size={28} className="text-main" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end bg-main" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" id="sidebarMenuLabel">
                        JANKIRAM HANDICRAFT
                    </h5>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `mb-3 w-100 nav-link ${isActive ? "active" : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/our-products"
                        className={({ isActive }) => `mb-3 w-100 nav-link ${isActive ? "active" : ""}`}
                    >
                        Our Product
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => `mb-3 w-100 nav-link ${isActive ? "active" : ""}`}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => `mb-3 w-100 nav-link ${isActive ? "active" : ""}`}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;
