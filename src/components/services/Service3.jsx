import React from 'react'
import Link from "next/link"
function Service3() {
  return (
    <div className="home-three-service mb-120">
  <div className="container">
    <div className="row g-4 mb-70 align-items-center">
      <div className="col-lg-5 order-lg-1 order-2">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/bg/h3-service-1.png" alt="" />
        </div>
      </div>
      <div className="col-lg-7 order-2 order-lg-2">
        <div className="service-content">
          <span>Room Service</span>
          <h3>We are always need &amp; Clean Our hotel room.</h3>
          <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc parturient monte nascete ridiculus musclineorto </p>
          <Link href="/hotel-facilities"><a className="btn--primary4" >Discover Now</a></Link>
        </div>
      </div>
    </div>
    <div className="row g-4 mb-70 align-items-center">
      <div className="col-lg-7">
        <div className="service-content">
          <span>Emergency Service</span>
          <h3>Our Emergency team always Provide Service.</h3>
          <div className="services-feature">
            <ul className="d-flex align-items-center flex-wrap">
              <li><img src="assets/images/icons/check.svg" alt="check" />Medical Services</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Helth Care</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Accident</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Vandalism</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Emergency Service</li>
              <li><img src="assets/images/icons/check.svg" alt="check" />Fire Threat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/bg/h3-service-2.png" alt="" />
        </div>
      </div>
    </div>
    <div className="row g-4 align-items-center">
      <div className="col-lg-5 order-lg-1 order-2">
        <div className="service-img">
          <img className="img-fluid" src="assets/images/bg/h3-service-3.png" alt="" />
        </div>
      </div>
      <div className="col-lg-7 order-1 order-lg-2">
        <div className="service-content">
          <span>Gift shop</span>
          <h3>Our Hotel open a necessary Gift Shop.</h3>
          <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc parturient monte nascete ridiculus musclineorto </p>
          <Link href="/hotel-facilities"><a className="btn--primary4" >Discover Now</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Service3