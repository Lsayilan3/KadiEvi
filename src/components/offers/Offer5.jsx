import Link from 'next/link'
import React from 'react'

function Offer5() {
  return (
    <div className="h5-offer-area mb-120">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-6">
        <div className="offer-wrrap d-flex align-items-center justify-content-between">
          <div className="offer-content text-center">
            <span>Member Get</span>
            <h2>40% OFF</h2>
            <p>Standard Room</p>
            <Link href="/room-suits-details"><a  className="btn--primary5">Book Now</a></Link>
          </div>
          <div className="offer-img">
            <img className="img-fluid" src="assets/images/bg/h5-offer-img-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="offer-wrrap d-flex align-items-center justify-content-between">
          <div className="offer-content text-center">
            <span>Member Get</span>
            <h2>30% OFF</h2>
            <p>Family Room</p>
            <Link href="/room-suits-details"><a  className="btn--primary5">Book Now</a></Link>
          </div>
          <div className="offer-img">
            <img className="img-fluid" src="assets/images/bg/h5-offer-img-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Offer5