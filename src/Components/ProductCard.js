import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-2.jpg"
import prodcompare from "../images/prodcompare.svg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"


const ProductCard = ({ grid }) => {
    // const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" /></Link>
                    </div>
                    <div className="product-image">
                        <img src={watch} alt="product image" className='img-fluid' />
                        <img src={watch2} alt="product image" className='img-fluid w-50 h-100 m-auto' />

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
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            High-quality headphones made from premium materials, expertly crafted for exceptional durability and comfort. Engineered to deliver superior audio performance with deep bass, crystal-clear highs, and immersive sound.

                        </p>
                        <p className="price">$400.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link><img src={prodcompare} alt="prod compare" /></Link>
                            <Link><img src={view} alt="view" /></Link>
                            <Link><img src={addcart} alt="add to cart" /></Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard