import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg"
const BlogCard = () => {
    return (

        <div className="blog-card">
            <div className="card-image">
                <img src={blog} className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-content">
                <p className="date">1 Apr 2024</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero ac sapien hendrerit vestibulum.</p>

                <Link to="/blog/id" className='button'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard