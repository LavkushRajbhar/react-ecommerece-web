import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import BlogCard from '../Components/BlogCard';
const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <Breadcrumb title="Blogs" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3"><div className='filter-card mb-3'><h3 className="filter-title">Find By Categories</h3>
                            <div className="">
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div></div>
                        <div className="col-9">
                            <div className="row">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog