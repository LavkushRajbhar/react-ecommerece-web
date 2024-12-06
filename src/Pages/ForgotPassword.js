import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import Meta from '../Components/Meta'
const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title="Forgot Password" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center'>Reset Your Password</h3>
                                <p className='text-center my-2 mb-3'>
                                    We will send you an email to reset your password
                                </p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" className="form-control" name="email" placeholder='Email' />
                                    </div>
                                    <div>

                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center flex-column">
                                            <button className="button border-0" type='submit'>Submit</button>
                                            <Link to="/login" className='btn btn-outline-light' >Cancel</Link>
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

export default ForgotPassword