import React from "react";
import blogData from "../../data/blog_grid.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Counter2Home3RoomSuites() {
  const blogSlider = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
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
    <div className="home-three-room-suits mb-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-between">
            <div className="section-title3">
              <h2>Room &amp; Suits</h2>
            </div>
            <div className="view-btn">
              <Link href="/room-suits1">
                <a className="btn--primary4">View All Room</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mb-60">
          <Swiper {...blogSlider} className="swiper room-suits-slider3">
            <div className="swiper-wrapper">
              {blogData.slice(0, 3).map((data) => {
                const {
                  id,
                  home3image,
                  title2,
                  price,
                  numberOfGuest,
                  numberOfRooms,
                } = data;
                return (
                  <SwiperSlide key={id} className="swiper-slide wow fadeInLeft">
                    <div className="room-suits-wrrap">
                      <div className="room-suits-img">
                        <img src={home3image} alt="" />
                      </div>
                      <div className="room-suits-content text-center">
                        <div className="client-review">
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
                            <li>(5.0)</li>
                          </ul>
                        </div>
                        <div className="price-tag">
                          <span>{price}</span> / Per Night
                        </div>
                        <h3>
                          <Link href="/room-suits-details">
                            <a>{title2}</a>
                          </Link>
                        </h3>
                        <div className="bed-and-person d-flex align-items-center justify-content-center">
                          <div className="bed-qty">
                            <p>
                              <img
                                src="assets/images/icons/double-bed1.svg"
                                alt=""
                              />
                              {numberOfGuest}
                            </p>
                          </div>
                          <div className="persons">
                            <p>
                              <img
                                src="assets/images/icons/persons1.svg"
                                alt=""
                              />
                              {numberOfRooms}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="swiper-btn d-flex align-items-center" style={{cursor:"pointer"}}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter2Home3RoomSuites;
