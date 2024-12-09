import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../Components/BlogCard'
import ProductCard from '../Components/ProductCard'
import SpecialProduct from '../Components/SpecialProduct'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged For Pros.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/month</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale.</h4>
                    <h5>Laptop Max</h5>
                    <p>From $1699.00 <br /> or $64.62/month</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival.</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $599.00 or <br /> $49.91/month</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off.</h4>
                    <h5>SmartWatch 7</h5>
                    <p>Shop the Latest <br /> band styles and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving.</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback <br /> & ultra-low distortion</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15"> <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $500</p></div></div>
                <div className="d-flex align-items-center gap-15"> <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p></div></div>
                <div className="d-flex align-items-center gap-15"> <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p></div></div>
                <div className="d-flex align-items-center gap-15"> <img src="images/service-04.png" alt="services" />
                  <div className=''>
                    <h6>affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p></div></div>
                <div className="d-flex align-items-center gap-15"> <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected and Encrypted Payments</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/watch.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/watch.jpg" alt="camera" width="180px" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collections
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <div className="famous-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3" >
              <div className="famous-card position-relative bg-black rounded-3 h-100">
                <img src="images/smart-watch.jpg" alt="Famous" className='img-fluid rounded-3' />
                <div className="famous-content position-absolute bottom-0">
                  <h5 className="">Big Screen </h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399 or $16.62 mo. for 24 mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative h-100 rounded-3 bg-black" >
                <img src="images/lap-1.png" alt="Famous" className='img-fluid w-75 h-50 mt-5 mx-4' />
                <div className="famous-content position-absolute bottom-0">
                  <h5 className="">Studio Display</h5>
                  <h6>600 nits of Briteness</h6>
                  <p>27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative h-100 w-100">
                <img src="images/iphone2.jpg" alt="Famous" className='img-fluid rounded-3 h-100 object-fit-fill' />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/sono.jpg" alt="Famous" className='img-fluid rounded-3' />
                <div className="famous-content position-absolute bottom-0">
                  <h5 className="">Home Speaker </h5>
                  <h6>Room Filling Sound</h6>
                  <p>From $699 or $116.62 mo. for 12 mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="speacial-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Special Products
              </h3>
            </div>

          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 img-marquee">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
                <BlogCard />
            </div>
            <div className="col-3">
                <BlogCard />
            </div>
            <div className="col-3">
                <BlogCard />
            </div>
            <div className="col-3">
                <BlogCard />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home