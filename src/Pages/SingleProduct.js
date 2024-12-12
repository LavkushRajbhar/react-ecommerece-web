import React, { useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import ProductCard from '../Components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom"
import Color from '../Components/Color'
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import Container from '../Components/Container';
const SingleProduct = () => {
    const props = { height: 600, zoomWidth: 600, img: "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" };
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text);

        // Create a hidden textarea to hold the text to copy
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);

        // Select the text and copy it
        textField.select();
        document.execCommand('copy');

        // Remove the textarea after copying
        textField.remove();

        // Show a confirmation message
        showCopyMessage();
    };

    const showCopyMessage = () => {
        // Create a message element
        const message = document.createElement('div');
        message.innerText = 'Product Link is copied';
        message.style.position = 'fixed';
        message.style.bottom = '40px';
        message.style.right = '40px';
        message.style.backgroundColor = '#4caf50'; // Green background
        message.style.color = '#fff';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '5px';
        message.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        message.style.zIndex = '1000';
        message.style.fontFamily = 'Arial, sans-serif';

        // Append the message to the body
        document.body.appendChild(message);

        // Remove the message after 2 seconds
        setTimeout(() => {
            message.remove();
        }, 2000);
    };

    return (
        <>
            <Meta title={"Product Name"} />
            <Breadcrumb title="Product Name" />
            <Container class1="main-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div><ReactImageZoom {...props} /></div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    128 GB RAM, 64 GB ROM, Snapdragon 888+ processor, Adreno 650 GPU, 108 mp + 50mp +2mp
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className="price">
                                    $ 999
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <span className='mb-0 t-review'>4 out of 5</span>
                                </div>
                                <a href="#review" className='review-btn'>Write a Review</a>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Type</h3> :
                                    <p className='mb-0 product-data'>Mobile</p></div>
                                <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Brand</h3> :
                                    <p className='mb-0 product-data'>Apple</p></div>
                                <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Category</h3> :
                                    <p className='mb-0 product-data'>Smart Phone</p></div>
                                <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Tags</h3> :
                                    <p className='mb-0 product-data'>#iphone</p></div>
                                <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Availability</h3> :
                                    <p className='mb-0 product-data'>In Stock</p></div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'><h3 className='product-heading'>Size :</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>
                                            S
                                        </span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>
                                            M
                                        </span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>
                                            L
                                        </span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>
                                            XL
                                        </span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'><h3 className='product-heading'>Color :</h3>                                         <Color className="" />
                                </div>
                                <div className='d-flex gap-15 align-items-center my-2 '><h3 className='product-heading'>Quantity :</h3>
                                    <div className="">
                                        <input type="number" className="form-control" name='' min={1} max={10} style={{ "width": "70px" }} />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button type="submit" className="button">Add To Cart</button>
                                        <button className='button signup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="#"><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href="#"><AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                    </div>

                                </div>
                                <div className='d-flex gap-10 my-3 flex-column'><h3 className='product-heading'>Shipping & return:</h3>
                                    <p className='mb-0 product-data'>
                                        100% free shipping on orders over $1000, free returns on all products, <br /> 30-day returns, and extended warranty.
                                        <b> 5 to 10 business days</b>
                                    </p></div>

                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">Product Link:
                                    </h3>
                                    <a href="javascrip:void(0);" onClick={() => { copyToClipboard("https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png") }}>Copy Product Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos sint harum reiciendis blanditiis autem, incidunt delectus, maiores earum magnam alias doloribus quae esse?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis? Debitis, assumenda commodi? Quas, suscipit!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container id='review' class1="reviews-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
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
                                        <a href="#"
                                            role="button" className='text-dark text-decoration-underline' >Write a Review</a>
                                    </div>
                                )}

                            </div>
                            <div className="review-form py-4">
                                <h4 className='mb-2'>Write a  Review</h4>
                                <form action="" className='d-flex flex-column gap-15'>

                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>                                        <div>
                                        <textarea name="" id="" cols="30" rows="5" className='form-control mb-2' required placeholder='Message'></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="float-end button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4 ">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0 fs-4'>Lav</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatibu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus veniam porro? Numquam, blanditiis eius? Fugiat reprehenderit exercitationem animi magni nulla eum fugit unde iste repudiandae voluptate quae nemo, recusandae inventore veritatis, dolores tenetur libero vero minus ipsa ab fuga eligendi. Illo ab cupiditate facere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                    <ProductCard />
                    <ProductCard />

                </div>
            </Container>
        </>
    )
}

export default SingleProduct