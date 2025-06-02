import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial5() {
  const testimonial = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    spaceBetween: 110,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-l",
      prevEl: ".swiper-button-prev-l",
    },
  };
  return (
    <>
      <div className="home5-testimonial mb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Testimonial</span>
                  <span>Testimonial</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>Testimonial</span>
                <h2>Our Guests Say</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Swiper {...testimonial} className="swiper testimonial-slider-5">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrrap d-flex align-items-center">
                    <div className="guests-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h5-guest.png"
                        alt=""
                      />
                    </div>
                    <div className="guest-content">
                      <div className="quat-icon d-flex justify-content-end">
                        <img
                          className="img-fluid"
                          src="assets/images/icons/quate1.svg"
                          alt=""
                        />
                      </div>
                      <p>
                        Curabitur magna nisi, egestas quis est in, finibus
                        pulvinigor thom gh Nunc sitaa amet do odiotadin gone
                        interdum, maximusonei offenart dolorbankon quis Sed
                        lectus mauris, maximus varius nisi sedant otag
                        scelerisque cursus orci. Curabitur vitae dui fringilla,
                        dictum est.
                      </p>
                      <div className="guest-name-review d-flex align-items-center justify-content-between flex-wrap">
                        <div className="name">
                          <h3>Sebasan Ethan</h3>
                          <span>Guest</span>
                        </div>
                        <div className="guest-review">
                          <ul className="stars d-flex align-items-center p-0">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper-btn2 d-md-flex d-none align-items-center justify-content-between">
                <div className="btns swiper-button-prev-l">
                  <svg
                    width={171}
                    height={10}
                    viewBox="0 0 171 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 5L171 4.99999" />
                    <path d="M6 1L1 5L6 9" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="btns swiper-button-next-l">
                  <svg
                    width={171}
                    height={10}
                    viewBox="0 0 171 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 5L170 4.99999" />
                    <path d="M165 9L170 5L165 1" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial5;
