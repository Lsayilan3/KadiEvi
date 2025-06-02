import Link from 'next/link'
import React from 'react'

function About5() {
  return (
<div className="home5-about-area mb-120">
  <div className="container-fluid">
    <div className="row">
      <div className="section-title-area sibling2">
        <div className="marquee">
          <div>
            <span>About Us</span>
            <span>About Us</span>
          </div>
        </div>
        <div className="section-title sibling2">
          <span>Our Story</span>
          <h2>About Us</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row mb-50">
      <div className="col-lg-12">
        <div className="h5-about-banner">
          <video autoPlay loop="loop" muted preload="auto">
            <source src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-lg-6">
        <div className="about-content">
          <h2>Get Your Staying In A Comfortable Way.</h2>
          <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sceisuen the aucan ligula. Orci varius natoque penatibus ethemen magnis discustent parturient monte nascete ridiculus musclineorto
            elementum oneni sceisuen the aucan ligula. Orci nellentesque habitant forminy morbine.</p>
          <Link  href="/about"><a className="btn--primary6">Discover More</a></Link>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-right">
          <div className="about-icon">
            <img src="assets/images/icons/h5-about-icon.svg" alt="" />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="about-img">
                <img className="img-fluid" src="assets/images/bg/h5-about-img-1.png" alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="about-img">
                <img className="img-fluid" src="assets/images/bg/h5-about-img-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default About5