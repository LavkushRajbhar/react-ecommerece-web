import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Color from '../Components/Color'
import Container from '../Components/Container'
import Meta from '../Components/Meta'
import cross from "../images/cross.svg"
import watch from "../images/watch.jpg"

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Product"} />
            <Breadcrumb title="Compare Product" />
            <Container class1="compare-product-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src={watch} alt="watch" className='img-fluid' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Apple iPhone 14 (128 GB) - Blue</h5>
                                    <h6 className="price mb-3 mt-3">$ 198</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src={watch} alt="watch" className='img-fluid' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Apple iPhone 14 (128 GB) - Blue</h5>
                                    <h6 className="price mb-3 mt-3">$ 198</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={cross} alt="" className="position-absolute cross img-fluid" />
                                <div className="product-card-image">
                                    <img src={watch} alt="watch" className='img-fluid' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Apple iPhone 14 (128 GB) - Blue</h5>
                                    <h6 className="price mb-3 mt-3">$ 198</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default CompareProduct