import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import compare from "../images/compare.svg"
import wishlist from "../images/wishlist.svg"
import user from "../images/user.svg"
import cart from "../images/cart.svg"
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-white text-end mb-0'>Hotline: <a className='text-white text-decoration-none' href="tel:+91 9702258210">+91 9702258210</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row d-flex ">
                        <div className="col-2">
                            <h2><Link to="/" className='text-white text-decoration-none'>Dev - Corner</Link></h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white text-decoration-none'>
                                        <img src={compare} alt="compare" />
                                        <p className='mb-0'>Compare <br /> Products</p></Link>
                                </div>
                                <div>
                                    <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white text-decoration-none'>
                                        <img src={wishlist} alt="wishlist" />
                                        <p className='mb-0'>Favourite <br /> Wishlist</p></Link>
                                </div>
                                <div>
                                    <Link to="/login" className='d-flex align-items-center gap-10 text-white text-decoration-none'>
                                        <img src={user} alt="login" />
                                        <p className='mb-0'>Login <br /> My Account</p></Link>
                                </div>
                                <div>
                                    <Link to="/cart" className='d-flex align-items-center gap-10 text-white text-decoration-none'>
                                        <img src={cart} alt="cart" />
                                        <div className='d-flex flex-column'>
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className='me-3 d-inline-block
                                            '>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link to="" className="dropdown-item text-white" href="#">Action</Link></li>
                                            <li><Link to="" className="dropdown-item text-white" href="#">Another action</Link></li>
                                            <li><Link to="" className="dropdown-item text-white" href="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-align-items-center gap-15 fw-bolder">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">Our Store</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header