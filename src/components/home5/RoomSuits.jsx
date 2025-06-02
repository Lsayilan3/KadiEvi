import React from "react";
import blogData from "../../data/rooms_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function RoomSuits() {
  const roomSlider = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next-k",
      prevEl: ".swiper-button-prev-k",
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
    <div className="home5-room-suits pt-120 mb-120">
      <img
        className="img-fluid h5-room-bg "
        src="/assets/images/bg/h5-room-bg.png"
        alt=""
      />
      <div className="swiper-btn d-flex align-items-center">
        <div className="btns swiper-button-prev-k">
          <svg
            width={58}
            height={12}
            viewBox="0 0 58 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M56 10L4 10" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M14 2L4 10L14 10"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="btns swiper-button-next-k">
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
      <div className="container-fluid">
        <div className="row">
          <div className="section-title-area sibling2">
            <div className="marquee">
              <div>
                <span>Room &amp; Suits</span>
                <span>Room &amp; Suits</span>
              </div>
            </div>
            <div className="section-title sibling2">
              <span>Luxury Hotel</span>
              <h2>Room &amp; Suits</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row position-relative">
          <Swiper {...roomSlider} className="swiper h5-room-suites">
            <div className="swiper-wrapper">
              {blogData.slice(0, 3).map((data) => {
                const {
                  id,
                  numberOfGuest,
                  numberOfRooms,
                  price,
                  h5Image,
                  roomTitle,
                } = data;
                return (
                  <SwiperSlide key={id} className="swiper-slide">
                    <div className="room-wrrap">
                      <div className="room-img">
                        <img className="img-fluid" src={h5Image} alt="" />
                      </div>
                      <div className="room-content">
                        <div className="price-tag">
                          <span>{price}</span>/ Per Night
                        </div>
                        <h3>
                          <Link href="/room-suits-details">
                            <a>{roomTitle}</a>
                          </Link>
                        </h3>
                        <div className="bed-and-person d-flex align-items-center">
                          <div className="bed-qty">
                            <p>
                              <img
                                src="assets/images/icons/double-bed1.svg"
                                alt=""
                              />
                              {numberOfRooms}
                            </p>
                          </div>
                          <div className="persons">
                            <p>
                              <img
                                src="assets/images/icons/persons1.svg"
                                alt=""
                              />
                              {numberOfGuest}
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
          <div className="swiper-btn2 d-flex align-items-center">
            <div className="btns swiper-button-prev-k">
              <svg
                width={58}
                height={12}
                viewBox="0 0 58 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M56 10L4 10" strokeWidth="2.5" strokeLinecap="round" />
                <path
                  d="M14 2L4 10L14 10"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="btns swiper-button-next-k">
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
  );
}

export default RoomSuits;
