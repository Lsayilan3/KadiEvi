import React from "react";

function About3() {
  return (
    <div className="home-three-about pt-120 mb-120">
      <div className="container">
        <div className="row g-4 align-items-center mb-45">
          <div className="col-lg-6 order-lg-1 order-2  ">
            <div className="about-img d-flex justify-content-center">
              <img
                className="img-fluid"
                src="assets/images/bg/h3-about1.png"
                alt="about"
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="section-title3  ">
              <h2>About Hotelina</h2>
            </div>
            <div className="about-content  ">
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                magnis discustent parturient monte nascete ridiculus
                musclineorto elementum oneni sceisuen the aucan ligula. Orci
                nellentesque habitant forminy morbine.
              </p>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                habitant forminy morbine.
              </p>
              <div className="our-experience d-flex align-items-center">
                <div className="icon">
                  <img src="assets//images/icons/h3-about-icon.svg" alt="" />
                </div>
                <div className="content">
                  <h3>
                    We have been serving for <span>32</span> years.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-6  ">
            <div className="about-feature">
              <div className="icon">
                <img
                  src="assets/images/icons/guarantee-certificate.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h3>Best Rate Guarantee</h3>
                <p>
                  Integer quis libero semper, interdumorbi odiongi none
                  consequat sem. Quisque wi mauris ut dui lacinia cursus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  ">
            <div className="about-feature">
              <div className="icon">
                <img src="assets/images/icons/payment-method.svg" alt="" />
              </div>
              <div className="content">
                <h3>No Booking Fee</h3>
                <p>
                  Integer quis libero semper, interdumorbi odiongi none
                  consequat sem. Quisque wi mauris ut dui lacinia cursus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8  ">
            <div className="about-feature-img">
              <img
                className="img-fluid"
                src="assets/images/bg/h3-about2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
