import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial2() {
  const testimonial2Slider = {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
    },
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
    },
  };
  return (
    <div className="home-two-testimonial mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title2 text-center">
              <span>Testimonial</span>
              <h2>Guests Say About Our Hotel</h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="row position-relative ">
          <Swiper
            {...testimonial2Slider}
            className="swiper testimonial-slider2"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-wrrap text-center">
                  <div className="author-name-deg">
                    <h4>Sebasan Ethan</h4>
                    <span>Guest</span>
                  </div>
                  <p>
                    Curabitur magna nisi, egestas quis est in, finibus
                    pulvinigor thom ghorai Nunc sitaa amet do odiotadin gone
                    interdum, maximusonei offenart dolorbankon quis Sed lectus
                    mauris, maximus varius nisi sed, scelerisque cursus orci.
                    Curabitur vitae dui fringilla, dictum est non, pulvinar
                    ante. Curabitur ullamcorper lectus.
                  </p>
                  <div className="author-img-rating">
                    <img
                      src="assets/images/bg/author-testimonial2.png"
                      alt="testimonial-img"
                    />
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
                <div className="testimonial-wrrap text-center">
                  <div className="author-name-deg">
                    <h4>Jordan Benom</h4>
                    <span>Guest</span>
                  </div>
                  <p>
                    Curabitur magna nisi, egestas quis est in, finibus
                    pulvinigor thom ghorai Nunc sitaa amet do odiotadin gone
                    interdum, maximusonei offenart dolorbankon quis Sed lectus
                    mauris, maximus varius nisi sed, scelerisque cursus orci.
                    Curabitur vitae dui fringilla, dictum est non, pulvinar
                    ante. Curabitur ullamcorper lectus.
                  </p>
                  <div className="author-img-rating">
                    <img
                      src="assets/images/bg/author-testimonial222.png"
                      alt="testimonial-img"
                    />
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
          <div className="swiper-btn d-flex align-items-center justify-content-between">
            <div className="btns swiper-button-prev-g">
              <svg
                width={26}
                height={13}
                viewBox="0 0 26 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.26821 12.5247C7.57342 12.4319 7.74572 12.1194 7.66696 11.807C7.64727 11.7142 6.82514 10.8695 5.21536 9.26803L2.79823 6.86094L14.1996 6.85117L25.6059 6.83652L25.7437 6.73399C25.8176 6.68028 25.916 6.54357 25.9554 6.43127C26.0194 6.25062 26.0145 6.21156 25.9407 6.0602C25.8964 5.96743 25.7979 5.85025 25.7241 5.80143C25.5961 5.71842 25.0693 5.71354 14.1947 5.69889L2.79823 5.68913L5.19075 3.30645C6.51008 1.99793 7.6128 0.865182 7.63742 0.791944C7.76049 0.474579 7.63742 0.176744 7.3322 0.0497979C6.9876 -0.0917957 7.05652 -0.150386 3.8468 3.03791C1.82843 5.03976 0.843853 6.05044 0.824161 6.14321C0.80447 6.21645 0.80447 6.33363 0.824161 6.41175C0.843853 6.49964 1.8235 7.50544 3.81727 9.49263C6.34763 12.0071 6.9876 12.6077 7.11067 12.5686C7.12052 12.5686 7.18944 12.5442 7.26821 12.5247Z" />
              </svg>
            </div>
            <div className="btns swiper-button-next-g">
              <svg
                width={26}
                height={14}
                viewBox="0 0 26 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.0947 0.759911C18.7901 0.852686 18.6181 1.16519 18.6967 1.47769C18.7164 1.57046 19.5369 2.4152 21.1437 4.01677L23.5562 6.42402L12.1765 6.43379L0.791783 6.44844L0.654204 6.55098C0.580501 6.60469 0.48223 6.74141 0.442921 6.85372C0.379045 7.03438 0.383959 7.07344 0.457662 7.22481C0.501884 7.31759 0.600155 7.43477 0.673858 7.4836C0.80161 7.56661 1.32736 7.57149 12.1814 7.58614L23.5562 7.59591L21.1682 9.97874C19.8514 11.2873 18.7508 12.4202 18.7262 12.4934C18.6034 12.8108 18.7262 13.1086 19.0309 13.2356C19.3748 13.3772 19.306 13.4358 22.5096 10.2473C24.5242 8.24532 25.5069 7.23457 25.5266 7.1418C25.5462 7.06856 25.5462 6.95137 25.5266 6.87324C25.5069 6.78535 24.5291 5.77948 22.5391 3.79216C20.0136 1.27749 19.3748 0.676902 19.252 0.715965C19.2421 0.715965 19.1733 0.74038 19.0947 0.759911Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
