import React from 'react'
import Link from 'next/link'; 
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Offer4() {
  const offerLsider = {
    slidesPerView: "auto",
spaceBetween: 30,
loop: true,
loopFillGroupWithBlank: true,
speed:1500,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
breakpoints: {
  280:{
    slidesPerView: 1
  },
  480:{
    slidesPerView: 2
  },
  768:{
    slidesPerView: 2
  },
  992:{
    slidesPerView: 3
  },
  1200:{
    slidesPerView: 3
  },
  1400:{
    slidesPerView: 3
  },
  1600:{
    slidesPerView: 3
  },
}
  }
  return (
    <div className="superior-offer mb-120">
  <div className="container">
    <div className="row mb-50">
      <div className="col-lg-12">
        <div className="section-title-4 text-center">
          <h4>accommodation</h4>
          <h2>Superior Offer</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <Swiper {...offerLsider} className="swiper h4-offer-slider  mb-60">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="offer-wrap">
              <div className="offer-img">
                <img className="img-fluid" src="assets/images/bg/h4-offer1.png" alt="" />
                <div className="batch">
                  <div className="offer">
                    <img src="assets/images/icons/offer-batch-bg-2.svg" alt="" />
                    <div className="content">
                      <h4>45%</h4>
                      <span>OFF</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer-content text-center">
                <span>$500 / Per Night</span>
                <h3><Link href="/room-suits-details"><a>Double Room</a></Link></h3>
                <div className="bed-and-person d-flex align-items-center justify-content-center">
                  <div className="bed-qty">
                    <p><img src="assets/images/icons/double-bed1.svg" alt="" />1 Double Bed</p>
                  </div>
                  <div className="persons">
                    <p><img src="assets/images/icons/persons1.svg" alt="" />2 Guest</p>
                  </div>
                </div>
                <Link href="/room-suits-details"><a className="btn--primary5">Book Now</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="offer-wrap">
              <div className="offer-img">
                <img className="img-fluid" src="assets/images/bg/h4-offer2.png" alt="" />
              </div>
              <div className="offer-content text-center">
                <span>$600 / Per Night</span>
                <h3><Link href="/room-suits-details"><a>Luxury Room</a></Link></h3>
                <div className="bed-and-person d-flex align-items-center justify-content-center">
                  <div className="bed-qty">
                    <p><img src="assets/images/icons/double-bed1.svg" alt="" />1 Double Bed</p>
                  </div>
                  <div className="persons">
                    <p><img src="assets/images/icons/persons1.svg" alt="" />2 Guest</p>
                  </div>
                </div>
                <Link href="/room-suits-details"><a className="btn--primary5">Book Now</a></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="offer-wrap">
              <div className="offer-img">
                <img className="img-fluid" src="assets/images/bg/h4-offer3.png" alt="" />
                <div className="batch">
                  <div className="offer">
                    <img src="assets/images/icons/offer-batch-bg-2.svg" alt="" />
                    <div className="content">
                      <h4>45%</h4>
                      <span>OFF</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer-content text-center">
                <span>$800 / Per Night</span>
                <h3><Link href="/room-suits-details"><a>Deluxe Room</a></Link></h3>
                <div className="bed-and-person d-flex align-items-center justify-content-center">
                  <div className="bed-qty">
                    <p><img src="assets/images/icons/double-bed1.svg" alt="" />1 Double Bed</p>
                  </div>
                  <div className="persons">
                    <p><img src="assets/images/icons/persons1.svg" alt="" />2 Guest</p>
                  </div>
                </div>
                <Link href="/room-suits-details"><a className="btn--primary5">Book Now</a></Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="slider-bottom d-flex justify-content-between align-items-center">
        <div className="swiper-pagination style-3 d-block" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Offer4