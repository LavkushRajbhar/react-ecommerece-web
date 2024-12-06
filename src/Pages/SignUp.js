import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <Breadcrumb title="SignUp" />
      <div className="signup-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center'>SignUp</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" name="name" placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className="form-control" name="email" placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className="form-control" name="mobile" placeholder='Mobile Number' />
                  </div>
                  <div className='mt-1'>
                    <input type="password" className="form-control" name="password" placeholder='Password' />
                  </div>
                  <div>
                    <Link to="/forgot-password" >Forgot Password</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-align-items-center">
                      <button type='submit' className="button">Sign Up</button>
                      <button type='reset' className='btn btn-outline-warning text-uppercase fw-medium'>Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp