import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import offerData from "../../data/summer_offer.json";
import Link from "next/link";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Offer3() {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
  ];
  const roomOptions = [
    { value: "Room 1", label: "Room 1" },
    { value: "Room 2", label: "Room 2" },
    { value: "Room 3", label: "Room 3" },
    { value: "Room 4", label: "Room 4" },
    { value: "Room 5", label: "Room 5" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 55,
      minHeight: "65px",
      width: "100%",
      maxWidth: "650px",
      marginTop: "-5px",
      fontSize: 15,
      fontWeight: "500",
      paddingLeft: "10px",
      borderRadius: "50px",
      // padding:"10px 15px 6px",
      backgroundColor: "transparent",
      outline: "none",
      boxShadow: "none",
      border: "1px solid #FFFFFF",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
    }),
  };
  const offerSlider = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
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
        slidesPerView: 2,
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
    <div className="home-three-offers mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8 px-0">
            <div className="offer-left-bg">
              <div className="row mb-50">
                <div className="section-title3 text-center">
                  <h2>Currently Best Offers</h2>
                </div>
              </div>
              <div className="row">
                <Swiper {...offerSlider} className="swiper h3-offer-slider">
                  <div className="swiper-wrapper">
                    {offerData.map((offerData) => {
                      const {
                        id,
                        home3Image,
                        price,
                        offcerPercents,
                        roomTitle,
                      } = offerData;
                      return (
                        <SwiperSlide key={id} className="swiper-slide">
                          <div className="offer-wrraper">
                            <div className="offer-img">
                              <img
                                className="img-fluid"
                                src={home3Image}
                                alt=""
                              />
                            </div>
                            <div className="offer-content">
                              <div className="price">
                                <span>{price}</span>
                              </div>
                              <span>Member Get</span>
                              <h3>{offcerPercents} OFF</h3>
                              <p>{roomTitle}</p>
                              <Link href="/room-suits-details">
                                <a className="btn--primary5">Book Now</a>
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
                <div className="slider-bottom d-flex justify-content-between align-items-center">
                  <div className="swiper-pagination style-3 d-block" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 px-0">
            <div className="booking-area">
              <div className="section-title text-center">
                <h3>Find Your Next Stay.</h3>
                <p>
                  Hotel ut nisl quam nestibulum ac quam neci odio elementum
                  oneni sci.
                </p>
              </div>
              <form>
                <div className="searchbox-input date-picker-input">
                  <ReactDatePicker
                    selected={startDate1}
                    onChange={(date) => setStartDate1(date)}
                    placeholderText="Check In"
                    className="calenda"
                  />
                </div>
                <div className="searchbox-input date-picker-input">
                  <ReactDatePicker
                    selected={startDate2}
                    onChange={(date) => setStartDate2(date)}
                    placeholderText="Check In"
                    className="calenda"
                  />
                </div>
                <div className="searchbox-input two">
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      padding: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#f6f6f6",
                        primary: "#3caa9f",
                      },
                    })}
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    width="330px"
                    menuColor="#333"
                    defaultValue={selectedOption}
                    options={options}
                    placeholder="Person"
                  />
                </div>
                <div className="searchbox-input two">
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      padding: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#f6f6f6",
                        primary: "#3caa9f",
                      },
                      zIndex: 10,
                    })}
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    width="330px"
                    menuColor="#333"
                    defaultValue={selectedOption2}
                    options={roomOptions}
                    placeholder="Select Rooms"
                  />
                </div>
                <a className="btn--primary4" href="#">
                  Search Room
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer3;
