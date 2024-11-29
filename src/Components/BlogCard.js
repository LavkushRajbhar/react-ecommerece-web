import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid' alt="" />
                </div>
                <div className="blog-content">
                    <p className="date">1 Apr 2024</p>
                    <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero ac sapien hendrerit vestibulum.</p>

                    <Link to="" className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard