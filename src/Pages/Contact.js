import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Breadcrumb title="Contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15061.703498172736!2d72.85506839344147!3d19.30731776213527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02921c6677b%3A0xb164cc17e553e965!2sBhayandar%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1733297219247!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" className='border-0' loading="lazy" ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper-2 d-flex justify-content-between">
                <div className="">
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div className=''>
                      <input type="text" className="form-control mb-2" required placeholder='Name' />
                    </div>
                    <div className=''>
                      <input type="email" className="form-control mb-2" required placeholder='Email' />
                    </div>
                    <div className=''>
                      <input type="tel" className="form-control mb-2" required placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="5" className='form-control mb-2' required placeholder='Message'></textarea>
                    </div>
                    <div>
                      <button type="submit" className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div className="">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Row House: 20 Golden-Nest Mira Road Mumbai</address>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel: +91 9702258210" className='text-decoration-none'> +91 9702258210</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:lavkushkumar9465@gmail.com" className='text-decoration-none'>lavkushkumar9465@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>
                          Monday - Saturday 10 AM - 7 PM
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact