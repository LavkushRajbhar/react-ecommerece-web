import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import Meta from '../Components/Meta'
const TermsAndConditions = () => {
  return (
      <>
          <Meta title={"Terms and Conditions"} />
      <Breadcrumb title="Terms and Conditions" />
      <Container class1="terms-and-conditions-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default TermsAndConditions