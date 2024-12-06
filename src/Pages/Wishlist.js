import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
const Wishlist = () => {
  return (
    <>
      <Meta title={"Favourite Wishlist"} />
      <Breadcrumb title="Favourite Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                </div>
                <div className='py-3 px-3'>

                  <h5 className='title'>Samsung Galaxy S24 Ultra 5G AI Smartphone</h5>
                  <h6 className='price'>& 999</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                </div>
                <div className='py-3 px-3'>

                  <h5 className='title'>Samsung Galaxy S24 Ultra 5G AI Smartphone</h5>
                  <h6 className='price'>& 999</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                </div>
                <div className='py-3 px-3'>

                  <h5 className='title'>Samsung Galaxy S24 Ultra 5G AI Smartphone</h5>
                  <h6 className='price'>& 999</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist