import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import Meta from '../Components/Meta'
import CustomInput from '../Components/CustomInput'
const Login = () => {
  return (
      <>
          <Meta title={"Login"} />
          <Breadcrumb title="Login" />
          <Container class1="login-wrapper home-wrapper-2 py-5">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                              <h3 className='text-center'>Login</h3>
                              <form action="" className='d-flex flex-column gap-15'>
                              <CustomInput type="email" name="email" placeholder='Email' />
                              <CustomInput type="password" name="password" placeholder='Password' />
                                  <div>
                                      <Link to="/forgot-password" >Forgot Password</Link>
                                      <div className="mt-3 d-flex justify-content-center gap-15 align-align-items-center">
                                          <button type="submit" className="button">Login</button>
                                          <Link to="/signup" className='button signup'>Sign Up</Link>
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

export default Login