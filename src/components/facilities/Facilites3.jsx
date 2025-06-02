import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Facilites3() {
  const facilites = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    // autoplay: {
    //   delay: 2000,
    // },
    pagination: {
      el: ".pagination-style3",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="home-three-facilites mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title3 text-center">
              <h2>Hotel Facilites</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...facilites} className="swiper facility-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="faciliti-wrrap">
                  <div className="icon text-center">
                    <img src="assets/images/icons/restaurant22.svg" alt="" />
                  </div>
                  <div className="content text-center">
                    <h3>
                      <Link href="hotel-facilities">
                        <a>Restaurant</a>
                      </Link>
                    </h3>
                    <p>
                      Integer quis libero upent semper, interdumor bioni folking
                      tokal.
                    </p>
                    <Link href="/hotel-facilities">
                      <a>
                        Read More&nbsp;
                        <svg
                          width={30}
                          height={6}
                          viewBox="0 0 30 6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H27"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M22 5L27 1L22 1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="facility-overlay">
                    <div className="facility-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h3-facility-33.png"
                        alt=""
                      />
                      <div className="backgraund" />
                      <div className="content">
                        <h3>
                          <Link href="/hotel-facilities">
                            <a>Restaurant</a>
                          </Link>
                        </h3>
                        <Link href="/hotel-facilities">
                          <a>
                            Read More&nbsp;
                            <svg
                              width={30}
                              height={6}
                              viewBox="0 0 30 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H27"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M22 5L27 1L22 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="faciliti-wrrap">
                  <div className="icon text-center">
                    <img src="assets/images/icons/treadmill22.svg" alt="" />
                  </div>
                  <div className="content text-center">
                    <h3>
                      <Link href="/hotel-facilities">
                        <a>Gym Zone</a>
                      </Link>
                    </h3>
                    <p>
                      Integer quis libero upent semper, interdumor bioni folking
                      tokal.
                    </p>
                    <Link href="/hotel-facilities">
                      <a>
                       Read More&nbsp;
                        <svg
                          width={30}
                          height={6}
                          viewBox="0 0 30 6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H27"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M22 5L27 1L22 1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="facility-overlay">
                    <div className="facility-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h3-facility-22.jpg"
                        alt=""
                      />
                      <div className="backgraund" />
                      <div className="content">
                        <h3>
                          <Link href="/hotel-facilities">
                            <a>Gym Zone</a>
                          </Link>
                        </h3>
                        <Link href="/hotel-facilities">
                          <a>
                            Read More&nbsp;
                            <svg
                              width={30}
                              height={6}
                              viewBox="0 0 30 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H27"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M22 5L27 1L22 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="faciliti-wrrap">
                  <div className="icon text-center">
                    <img src="assets/images/icons/bus22.svg" alt="" />
                  </div>
                  <div className="content text-center">
                    <h3>
                      <Link href="/hotel-facilities">
                        <a>Transport</a>
                      </Link>
                    </h3>
                    <p>
                      Integer quis libero upent semper, interdumor bioni folking
                      tokal.
                    </p>
                    <Link href="/hotel-facilities">
                      <a>
                        Read More&nbsp;
                        <svg
                          width={30}
                          height={6}
                          viewBox="0 0 30 6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H27"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M22 5L27 1L22 1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="facility-overlay">
                    <div className="facility-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h3-facility-44.png"
                        alt=""
                      />
                      <div className="backgraund" />
                      <div className="content">
                        <h3>
                          <Link href="/hotel-facilities">
                            <a>Transport</a>
                          </Link>
                        </h3>
                        <Link href="/hotel-facilities">
                          <a>
                            Read More&nbsp;
                            <svg
                              width={30}
                              height={6}
                              viewBox="0 0 30 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H27"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M22 5L27 1L22 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide"
              >
                <div className="faciliti-wrrap">
                  <div className="icon text-center">
                    <img src="assets/images/icons/spa22.svg" alt="" />
                  </div>
                  <div className="content text-center">
                    <h3>
                      <Link href="/hotel-facilities">
                        <a>Spa Center</a>
                      </Link>
                    </h3>
                    <p>
                      Integer quis libero upent semper, interdumor bioni folking
                      tokal.
                    </p>
                    <Link href="/hotel-facilities">
                      <a>
                        Read More&nbsp;
                        <svg
                          width={30}
                          height={6}
                          viewBox="0 0 30 6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H27"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M22 5L27 1L22 1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="facility-overlay">
                    <div className="facility-img">
                      <img
                        className="img-fluid"
                        src="assets/images/bg/h3-facility-55.png"
                        alt=""
                      />
                      <div className="backgraund" />
                      <div className="content">
                        <h3>
                          <Link href="/hotel-facilities">
                            <a>Spa Center</a>
                          </Link>
                        </h3>
                        <Link href="/hotel-facilities">
                          <a>
                            Read More&nbsp;
                            <svg
                              width={30}
                              height={6}
                              viewBox="0 0 30 6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H27"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M22 5L27 1L22 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="pagination-style3 eg-pagination d-block pt-60 text-center" />
        </div>
      </div>
    </div>
  );
}

export default Facilites3;
