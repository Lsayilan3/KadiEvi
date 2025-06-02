import React from "react";
import blogData from "../../data/blog_grid.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home2Blog() {
  const blogSlider = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    // autoplay: {
    //   delay: 2000,
    // },
    pagination: {
      el: ".pagination-style2",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="home-two-blog mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title2 text-center mb-70">
              <span>Blog Post</span>
              <h2>Find Newest Articles </h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...blogSlider} className="swiper blog-slider1">
            <div className="swiper-wrapper">
              {blogData.slice(0, 2).map((data) => {
                const { id, home2Image, category, date, title, descrition } =
                  data;
                return (
                  <SwiperSlide key={id} className="swiper-slide">
                    <div className="blog-wrrap d-flex">
                      <div className="blog-img">
                        <img
                          className="img-fluid"
                          src={home2Image}
                          alt="blog-img"
                        />
                      </div>
                      <div className="blog-content">
                        <div className="category-date d-flex align-items-center">
                          <a href="#">{category}</a>
                          <span>{date}</span>
                        </div>
                        <h4>
                          <Link href="/blog-details">
                            <a>{title}</a>
                          </Link>
                        </h4>
                        <p>{descrition}</p>
                        <div className="read-more-btn">
                          <Link href="/blog-details">
                            <a>
                              {" "}
                              <svg
                                width={43}
                                height={10}
                                viewBox="0 0 43 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 5H41"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M36 9L41 5L36 1"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                             &nbsp; Read More
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="pagination-style2 eg-pagination d-block pt-60 text-center" />
        </div>
      </div>
    </div>
  );
}

export default Home2Blog;
