import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Watch from "../images/watch.jpg"
import Container from '../Components/Container'
function Checkout() {
    return (
        <>
            <Container class1="checkout-wrapper home-wraper-2 py-5">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className='website-name'>Dev- Corner</h3>
                                <nav aria-label="breadcrumb"
                                    style={{ "--bs-breadcrumb-divider": '>' }}
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/cart" className='text-dark text-decoration-none total-price'>Cart</Link></li>

                                        &nbsp;/
                                        &nbsp;/
                                        <li class="breadcrumb-item active total-price" aria-current="page">Information</li>
                                        &nbsp;/
                                        <li class="breadcrumb-item " aria-current="page">Shipping</li>
                                        &nbsp;/
                                        <li class="breadcrumb-item " aria-current="page">Payment</li>

                                    </ol>
                                </nav>
                                <h4 className="title total">
                                    Contact Information
                                </h4>
                                <p className="user-details total">
                                    Lavkush Kumar(lavkushkumar9465@gmail.com)
                                </p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">

                                    <div className='w-100'>
                                        <select name="" id="" className="form-control form-select"><option value="" selected disabled>Select Country</option></select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last Name' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Appartment, Route etc' className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'><input type="text" className="form-control" placeholder='City' /></div>
                                    <div className='flex-grow-1'><select name="" id="" className="form-control form-select">
                                        <option value="" selected disabled>Select State</option>
                                    </select></div>
                                    <div className='flex-grow-1'><input type="text" placeholder='Zip Code' className="form-control" /></div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="/cart" className='text-decoration-none text-dark'><BiArrowBack className='me-1' /> Return to Cart</Link>
                                            <Link to="/cart" className='button'>Continue to Shipping </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="d-flex gap-10 align-items-center mb-2">
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ "top": "-10px", "right": "2px" }} className="badge bg-secondary text-white rounded-circle  position-absolute">1</span>
                                        <img src={Watch} alt="" className='img-fluid' />
                                    </div>
                                    <div>
                                        <div className="total-price">jdsjd</div>
                                        <p className='total-price'>jfaejmk</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$1000</h5>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Sub Total</p>
                                    <p className='total-price'>$ 1000</p>
                                </div><div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 1000</p>
                                </div></div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h3 className='total-price'>$ 1000</h3>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Checkout