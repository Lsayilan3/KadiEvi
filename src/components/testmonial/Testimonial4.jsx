import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial4() {
  const testimonial4Slider = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next-i",
      prevEl: ".swiper-button-prev-i",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="home4-testimonial mb-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="section-title-4 text-center">
              <h4>Testimonial</h4>
              <h2>What Guests Say?</h2>
            </div>
          </div>
        </div>
        <div className="row mb-50">
          <Swiper
            {...testimonial4Slider}
            className="swiper h4-testimonial-slider"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testomonial-wrrap">
                  <div className="testimonial-img">
                    <img src="assets/images/bg/h4-testimonial-1.png" alt="" />
                  </div>
                  <div className="testimonial-content text-center">
                    <p>
                      Curabitur magna nisija,gorbayopai egestas quis est in,
                      finibornak ando nunc sitaa amet doing wellaipokani
                      odiotadin gone interdum.
                    </p>
                    <h4>Sebasan Ethan</h4>
                    <span>Guest</span>
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
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testomonial-wrrap">
                  <div className="testimonial-img">
                    <img src="assets/images/bg/h4-testimonial-2.png" alt="" />
                  </div>
                  <div className="testimonial-content text-center">
                    <p>
                      Curabitur magna nisija,gorbayopai egestas quis est in,
                      finibornak ando nunc sitaa amet doing wellaipokani
                      odiotadin gone interdum.
                    </p>
                    <h4>Warnner Mukhel</h4>
                    <span>Guest</span>
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
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testomonial-wrrap">
                  <div className="testimonial-img">
                    <img src="assets/images/bg/h4-testimonial-3.png" alt="" />
                  </div>
                  <div className="testimonial-content text-center">
                    <p>
                      Curabitur magna nisija,gorbayopai egestas quis est in,
                      finibornak ando nunc sitaa amet doing wellaipokani
                      odiotadin gone interdum.
                    </p>
                    <h4>David Josef</h4>
                    <span>Guest</span>
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
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-12 px-0">
            <div className="swiper-btn d-flex align-items-center justify-content-between">
              <div className="btns swiper-button-prev-i">
                <svg
                  width={72}
                  height={10}
                  viewBox="0 0 72 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5L72 4.99999" strokeWidth="1.5" />
                  <path
                    d="M7 1L2 5L7 9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="btns swiper-button-next-i">
                <svg
                  width={72}
                  height={10}
                  viewBox="0 0 72 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 5L70 4.99999" strokeWidth="1.5" />
                  <path
                    d="M65 9L70 5L65 1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial4;
