import React, { useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import ProductCard from '../Components/ProductCard'
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <Breadcrumb title="Product Name" />
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <h4>Description</h4>
                                <p className="">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos sint harum reiciendis blanditiis autem, incidunt delectus, maiores earum magnam alias doloribus quae esse?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis? Debitis, assumenda commodi? Quas, suscipit!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex  align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a href="" className='text-dark text-decoration-underline' >Write a Review</a>
                                        </div>
                                    )}

                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct