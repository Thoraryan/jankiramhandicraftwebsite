import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer py-4" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-img">
              <img src="/assets/img/logo.svg" alt="" />
            </div>
            <div className="mt-4">
              <div className="d-flex gap-3">
                <p className="comman-footer-text">Phone Number:</p>
                <p className="comman-footer-text">+966 857937593</p>
              </div>
              <div className="d-flex gap-3">
                <p className="comman-footer-text">Email Address:</p>
                <p className="comman-footer-text">gwisha234@gmail.com</p>
              </div>
              <div className="d-flex gap-3">
                <p className="comman-footer-text">Address:</p>
                <p className="comman-footer-text">3885 Al Bandariyyah Street Al Falah,<br /> Riyadh 13314, SAU</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="comman-footer-heading mt-4 fw-semibold">Our Company</h2>
            <Link to="/" className="comman-footer-text hover-effect fw-semibold">Home</Link><br />
            <Link to="about-us" className="comman-footer-text hover-effect fw-semibold">About Us</Link><br />
            <Link to="/privacy-policy" className="comman-footer-text hover-effect fw-semibold">Privacy Policy</Link><br />
            <Link to="/terms-and-condition" className="comman-footer-text hover-effect fw-semibold">Terms & Conditions</Link><br />
            <Link to="contact-us" className="comman-footer-text hover-effect fw-semibold">Contact Us</Link><br />
          </div>
          <div className="col-md-3">
            <h2 className="comman-footer-heading mt-4 fw-semibold">Account</h2>
            <Link className="comman-footer-text hover-effect fw-semibold">My Account</Link><br />
            <Link to="login" className="comman-footer-text hover-effect fw-semibold">Login </Link> <span className='comman-footer-text'>/</span> <Link to="register" className="comman-footer-text hover-effect fw-semibold">Register</Link><br />
            <Link className="comman-footer-text hover-effect fw-semibold">Wishlist</Link><br />
            <Link className="comman-footer-text hover-effect fw-semibold">Cart</Link><br />
          </div>
        </div>
        <div className="mt-4">
          <div className="border-top border-bottom border-main py-4">
            <div className="d-flex gap-4 justify-content-center py-2">
              <div className="social-link">
                <img src="/assets/img/icon/facebook.svg" alt="" />
              </div>
              <div className="social-link">
                <img src="/assets/img/icon/linkedin.svg" alt="" />
              </div>
              <div className="social-link">
                <img src="/assets/img/icon/instagram.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="">
            <h2 className='footer-end-text text-center m-0'>Copyright Jankiram | All Rights Reserved | <Link className='hover-effect text-main' to="/terms-and-condition">Terms and Conditions</Link> | <Link className='hover-effect text-main' to="/privacy-policy">Privacy Policy</Link></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
