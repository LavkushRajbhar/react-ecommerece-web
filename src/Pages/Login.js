import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
const Login = () => {
  return (
      <>
          <Meta title={"Login"} />
          <Breadcrumb title="Login" />
          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                              <h3 className='text-center'>Login</h3>
                              <form action="" className='d-flex flex-column gap-15'>
                                  <div>
                                      <input type="email" className="form-control"  name="email"placeholder='Email' />
                                  </div>
                                  <div className='mt-1'>
                                      <input type="password" className="form-control" name="password" placeholder='Password' />
                                  </div>
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
              </div>
          </div>
      </>
  )
}

export default Login