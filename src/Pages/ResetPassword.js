import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'
import Meta from '../Components/Meta'
const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <Breadcrumb title="Reset Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Reset Password</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="password" name="oldPassword" placeholder='Old Password' />

                                <CustomInput type="password" name="newPassword" placeholder='New Password' />
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-align-items-center">
                                        <button type="submit" className="button border-0">Change Password</button>
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

export default ResetPassword