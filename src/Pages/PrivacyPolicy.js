/** @format */

import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Container from "../Components/Container";
import Meta from "../Components/Meta";
const PrivacyPolicy = () => {
  return (
    <>
    
      <Meta title={"Privacy Policy"} />
          <Breadcrumb title="Privacy Policy" />
          <Container class1="privacy-policy-wrapper home-wrapper-2 py-5">
                  <div className="row">
                      <div className="col-12">
                          <div className="policy">

                          </div>
                      </div>
                  </div>
          </Container>
    </>
  );
};

export default PrivacyPolicy;
