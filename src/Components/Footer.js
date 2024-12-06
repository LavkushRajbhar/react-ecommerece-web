import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsYoutube, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'
// import 'App.css'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address Please..." aria-label="Your Email Address Please" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>House No: 277 Near Vill Mira Road,
                  <br />Pune, Maharashtra 411007
                  <br />India
                </address>
                <a href="tel:+91 9702258210" className='text-decoration-none text-white d-block mt-2'>+91 9702258210</a>
                <a href="mailto:lavkushkumar9465@gmail.com" className='text-decoration-none text-white d-block mt-2 '>lavkushkumar9465@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="#"><BsFacebook className='fs-4' /></a>
                  <a className='text-white' href="#"><BsInstagram className='fs-4' /></a>
                  <a className='text-white' href="#"><BsLinkedin className='fs-4' /></a>
                  <a className='text-white' href="#"><BsYoutube className='fs-4' /></a>
                  <a className='text-white' href="#"><BsGithub className='fs-4' /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className="text-white py-2 text-decoration-none">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-decoration-none text-white py-2 ">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-decoration-none text-white py-2 ">Shipping Policy</Link>
                <Link to="/terms-and-conditions" className="text-decoration-none text-white py-2">Terms & Condition</Link>
                <Link to="/blogs" className="text-decoration-none text-white py-2 mb-1">Blogs</Link>

              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-decoration-none text-white py-2 ">About US</Link>
                <Link className="text-decoration-none text-white py-2">FAQ</Link>
                <Link className="text-decoration-none text-white py-2">Contact</Link>


              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-decoration-none text-white py-2">Laptops</Link>
                <Link className="text-decoration-none text-white py-2 ">Headphones</Link>
                <Link className="text-decoration-none text-white py-2 ">Tablets</Link>
                <Link className="text-decoration-none text-white py-2">Watch</Link>

              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="m-0 text-center text-white">
                &copy; {new Date().getFullYear()} Powered By Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer