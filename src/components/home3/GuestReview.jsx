import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function GuestReview() {
  const guestreview = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    spaceBetween: 110,
    slidesPerView: 1,
    // mouseevents: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
    },
  };
  return (
    <div className="home-three-guest-review mb-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12">
            <div className="section-title3 text-center">
              <h2>Guest Review</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...guestreview} className="swiper gueest-review">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="guest-review-wrap d-flex align-items-center">
                  <div className="guest-img">
                    <img
                      src="assets/images/bg/guest-review-img-1.png"
                      alt="guest-img"
                    />
                  </div>
                  <div className="review text-center">
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p>
                      Curabitur magna nisi, egestas quis est in, finibus
                      pulvinigor thom ghorai Nunc sitaa amet do odiotadin gone
                      interdum, maximusonei offenart dolorbankon quis Sed lectus
                      mauris, maximus varius nisi sed, scelerisque cursus orci.
                      Curabitur vitae dui fringilla, dictum est non, pulvinar
                      ante. Curabitur ullamcorper lectus.
                    </p>
                    <h3>Sebasan Ethan</h3>
                    <span>Guest</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="guest-review-wrap d-flex align-items-center">
                  <div className="guest-img">
                    <img
                      src="assets/images/bg/guest-review-img-2.png"
                      alt="guest-img"
                    />
                  </div>
                  <div className="review text-center">
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p>
                      Curabitur magna nisi, egestas quis est in, finibus
                      pulvinigor thom ghorai Nunc sitaa amet do odiotadin gone
                      interdum, maximusonei offenart dolorbankon quis Sed lectus
                      mauris, maximus varius nisi sed, scelerisque cursus orci.
                      Curabitur vitae dui fringilla, dictum est non, pulvinar
                      ante. Curabitur ullamcorper lectus.
                    </p>
                    <h3>Mosiur Rahman</h3>
                    <span>Guest</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-btn d-flex align-items-center">
              <div className="btns swiper-button-prev-g">
                <svg
                  width={58}
                  height={12}
                  viewBox="0 0 58 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56 10L4 10"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 2L4 10L14 10"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="btns swiper-button-next-g">
                <svg
                  width={58}
                  height={12}
                  viewBox="0 0 58 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2H54" strokeWidth="2.5" strokeLinecap="round" />
                  <path
                    d="M44 10L54 2L44 2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GuestReview;
