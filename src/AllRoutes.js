import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OurProducts from "./Components/OurProducts/OurProducts";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword/ForgotPassword";
import Otp from "./Components/Auth/Otp/Otp";
import ResetPassword from "./Components/Auth/ResetPassword/ResetPassword";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";
import NotFoundPage from "./Components/404/NotFoundPage";

const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/our-products", element: <OurProducts /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-and-condition", element: <TermsAndConditions /> },
    { path: "/product-details", element: <ProductsDetails /> },
    { path: "/404", element: <NotFoundPage /> },
];

const AllRoutes = () => {
    return (
        <Routes>
            {routeConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="/*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};

export default AllRoutes;
