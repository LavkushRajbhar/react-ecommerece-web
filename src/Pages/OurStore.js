import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import ProductCard from '../Components/ProductCard'
const OurStore = () => {
    const [grid, setGrid] = useState(4);
    // const gridSetter = (i) => ({
    // alert(grid)
    // })
    return (
        <>
            <Meta title={"Our Store"} />
            <Breadcrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'><h3 className="filter-title">Shop By Categories</h3>
                                <div className="">
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'><h3 className="filter-title">Filter By </h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label" htmlFor='' >In Stock (1)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label" htmlFor=''>Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="text" name="" id="" placeholder='From' className='form-control w-75' />
                                            <label htmlFor="">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="text" name="" id="" className='form-control w-75' placeholder='To' />
                                            <label htmlFor="">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id='color-1' />
                                            <label className="form-check-label" htmlFor='color-1' >S (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id='color-2' />
                                            <label className="form-check-label" htmlFor='color-2' >M (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id='color-3' />
                                            <label className="form-check-label" htmlFor='color-3' >L (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id='color-4' />
                                            <label className="form-check-label" htmlFor='color-4' >XL (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'><h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphones
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptops
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speaker
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'><h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-products d-flex gap-15 align-items-center mb-3">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" alt="" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Headphones with unique and vibrant sound</h5>
                                            <ReactStars
                                                count={5}
                                                value="3"
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>
                                                <b>$ 400</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex gap-15 align-items-center">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Smart Watches with unique display</h5>
                                            <ReactStars
                                                count={5}
                                                value="3"
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p>
                                                <b>$ 400</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-short-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 w-50">
                                            Sort By
                                        </p>
                                        <select name="" id="" className="form-control form-select">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected>Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price: Low to High</option>
                                            <option value="price-descending">Price: High to Low</option>
                                            <option value="created-ascending">Date: Old to New</option>
                                            <option value="created-descending">Date: New to Old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproducts mb-0">
                                            21 Products
                                        </p>
                                        <div className="d-flex align-items-center grids gap-10">
                                            <img src="images/gr4.svg" alt="" onClick={() => setGrid(3)} className='d-block img-fluid' />
                                            <img src="images/gr3.svg" alt="" onClick={() => setGrid(4)} className='d-block img-fluid' />
                                            <img src="images/gr2.svg" alt="" onClick={() => setGrid(6)} className='d-block img-fluid' />
                                            <img src="images/gr.svg" alt="" onClick={() => setGrid(12)} className='d-block img-fluid' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">

<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
<ProductCard grid={grid}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore