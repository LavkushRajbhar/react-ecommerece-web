import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
const SingleBlog = () => {
    return (
        <>
            <Meta title={"Single Blog"} />
            <Breadcrumb title="Single Blog" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowNarrowLeft className='fs-4' /> Go back to blogs</Link>
                                <h3 className="title">
                                    2022: A Year in Review of My Business Growth and Transformation
                                </h3>
                                <img src="/images/blog-2.jpg" alt="blog" className='img-fluid my-4' />
                                <p>
                                    2022 was a remarkable year for my business. I've made significant progress in my goals and am excited to share some of the key highlights of the year. In this article, I'll explore some of the most significant achievements and lessons learned throughout the year.
                                    <br />
                                    <br />
                                    <strong>Revenue Growth</strong>
                                    <br />
                                    My revenue increased by 25% from 2021 to 2022, which was an impressive achievement. I've been able to attract more customers and expand my market, resulting in higher sales and better customer satisfaction.
                                    <br />
                                    <br />
                                    <strong>Customer Service Improvements</strong>
                                    <br />
                                    My customer service team has significantly improved their efficiency and satisfaction. They've reduced wait times, improved response times, and increased customer satisfaction.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog