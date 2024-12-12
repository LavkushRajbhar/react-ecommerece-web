import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import Meta from '../Components/Meta'
const RefundPolicy = () => {
  return (
    <>      <Meta title={"Refund Policy"} />
      <Breadcrumb title="Refund Policy" />
      <Container class1="refund-policy-wrapper home-wrapper-2 py-5">
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

export default RefundPolicy