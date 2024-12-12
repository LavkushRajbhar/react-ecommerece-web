import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
const SignUp = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <Breadcrumb title="SignUp" />
      <Container class1="signup-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center'>SignUp</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="text" name="name" placeholder='Name' />
                <CustomInput type="email" name="email" placeholder='Email' />
                <CustomInput type="tel" name="mobile" placeholder='Mobile Number' />
                <CustomInput type="password" name="password" placeholder='Password' />
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
      </Container>
    </>
  )
}

export default SignUp