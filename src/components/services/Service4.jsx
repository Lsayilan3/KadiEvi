import React from 'react'
import Link from 'next/link'
function Service4() {
  return (
    <div className="home4-single-service mb-120">
  <div className="container">
    <div className="row mb-70">
      <div className="col-lg-6">
        <div className="rooms-wrrap2">
          <div className="room-img">
            <img className="img-fluid" src="assets/images/bg/h4-service.png" alt="" />
          </div>
          <div className="room-content">
            <h3><Link href="/hotel-facilities"><a>Room Services</a></Link></h3>
            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magi disc parturient monte nascete ridiculus. </p>
            <Link href="/hotel-facilities"><a className="btn--primary4">Learn More</a></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 pt-30">
        <div className="rooms-wrrap2">
          <div className="room-img">
            <img className="img-fluid" src="assets/images/bg/h4-casino.png" alt="" />
          </div>
          <div className="room-content">
            <h3><Link href="/hotel-facilities"><a>Casino</a></Link></h3>
            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magi disc parturient monte nascete ridiculus. </p>
            <Link href="/hotel-facilities"><a className="btn--primary4">Learn More</a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-70">
      <div className="col-lg-12">
        <div className="playzaone-wrap">
          <div className="playzone-img">
            <img className="img-fluid" src="assets/images/bg/h4-playzone.png" alt="" />
          </div>
          <div className="content text-center">
            <h3><Link href="/hotel-facilities"><a>Playzone</a></Link></h3>
            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magi disc parturient monte nascete ridiculus. </p>
            <Link href="/hotel-facilities"><a className="btn--primary4">Learn More</a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row align-items-center g-4">
      <div className="col-lg-6">
        <div className="row g-4 align-items-center">
          <div className="col-6">
            <div className="bar-pub-img-1">
              <img className="img-fluid" src="assets/images/bg/h4-bar-pub-1.png" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="bar-pub-img-2 one">
              <img className="img-fluid" src="assets/images/bg/h4-bar-pub-2.png" alt="" />
            </div>
            <div className="bar-pub-img-2">
              <img className="img-fluid" src="assets/images/bg/h4-bar-pub-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="content">
          <h3><Link href="/hotel-facilities"><a>Bar &amp; Pub</a></Link></h3>
          <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magi disc parturient monte nascete ridiculus. </p>
        </div>
        <div className="included-feature">
          <h3>Included</h3>
          <ul>
            <li><img src="assets/images/icons/check.svg" alt="check" /> Maecenas convi</li>
            <li><img src="assets/images/icons/check.svg" alt="check" /> Curabitur pul</li>
            <li><img src="assets/images/icons/check.svg" alt="check" /> condime</li>
            <li><img src="assets/images/icons/check.svg" alt="check" /> volutpat eni</li>
            <li><img src="assets/images/icons/check.svg" alt="check" /> velit nisi maximus</li>
            <li><img src="assets/images/icons/check.svg" alt="check" /> portitortol</li>
          </ul>
          <h5>18+ Men Or Women Allowed In Bar.</h5>
          <Link href="/hotel-facilities"><a className="btn--primary4">Learn More</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Service4