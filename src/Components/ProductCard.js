import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = ({ grid }) => {
    // const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" /></Link>
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" alt="product image" className='img-fluid' />
                        <img src="images/watch-2.jpg" alt="product image" className='img-fluid w-50 h-100 m-auto' />

                    </div>
                    <div className="product-details">
                        <h6 className='brand'>Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multicolored for student
                        </h5>

                        <ReactStars
                            count={5}
                            value="3"
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                            High-quality headphones made from premium materials, expertly crafted for exceptional durability and comfort. Engineered to deliver superior audio performance with deep bass, crystal-clear highs, and immersive sound. 

                        </p>
                        <p className="price">$400.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src="images/prodcompare.svg" alt="prod compare" /></Link>
                            <Link><img src="images/view.svg" alt="view" /></Link>
                            <Link><img src="images/add-cart.svg" alt="add to cart" /></Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard