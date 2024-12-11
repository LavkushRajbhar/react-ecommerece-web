import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Watch from "../images/watch.jpg"
function Checkout() {
    return (
        <>
            <div className="checkout-wrapper home-wraper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className='website-name'>Dev- Corner</h3>
                                <nav aria-label="breadcrumb"
                                    style={{ "--bs-breadcrumb-divider": '>' }}
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/cart" className='text-dark text-decoration-none'>Cart</Link></li>

                                        &nbsp;/
                                        <li class="breadcrumb-item active" aria-current="page">Information</li>
                                        &nbsp;/
                                        <li class="breadcrumb-item " aria-current="page">Shipping</li>
                                        &nbsp;/
                                        <li class="breadcrumb-item " aria-current="page">Payment</li>

                                    </ol>
                                </nav>
                                <h4 className="title">
                                    Contacr Information
                                </h4>
                                <p className="user-details">
                                    Lavkush Kumar(lavkushkumar9465@gmail.com)
                                </p>
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
                            <div className="d-flex">
                                <div>
                                    <div>
                                        <img src={Watch} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div>
                                    <h5>$1000</h5>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className=''>Sub Total</p>
                                    <p className=''>$ 1000</p>
                                </div><div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0'>Shipping</p>
                                    <p className='mb-0'>$ 1000</p>
                                </div></div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4>Total</h4>
                                <h3>$ 1000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout