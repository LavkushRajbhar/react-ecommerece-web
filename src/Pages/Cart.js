import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import watch from '../images/watch.jpg'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Breadcrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-itms-center justify-content-between cart-header py-3">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between cart-data mb-2 py-3">
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img src={watch} className="img-fluid" alt="produt-image" />
                  </div>
                  <div className='w-75'>
                    <p>sdjaf</p>
                    <p>Size: 1000</p>
                    <p>color: 656</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className="price">$100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div><input type="number" name="" className='form-control' id="" min={1} max={10} /></div>
                  <div className='bg-dark'>
                    <AiFillDelete className='text-danger' /></div>
                </div>
                <div className='cart-col-4'>
                  <h5 className="price">$100</h5>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between cart-data mb-2 py-3">
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img src={watch} className="img-fluid" alt="produt-image" />
                  </div>
                  <div className='w-75'>
                    <p>sdjaf</p>
                    <p>Size: 1000</p>
                    <p>Color: 656</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className="price">$100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div><input type="number" name="" className='form-control' id="" min={1} max={10} /></div>
                  <div className='bg-dark'>
                    <AiFillDelete className='text-danger' /></div>
                </div>
                <div className='cart-col-4'>
                  <h5 className="price">$100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">Continue to Shopping</Link>
                <div className='d-flex align-items-end flex-column'>
                  <h4>SubTotal: $1000</h4>
                  <p> Taxes and shipping calculated at checkout
                  </p>
                  <Link to="/checkout" className='button'>Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart