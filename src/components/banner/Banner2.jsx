import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Banner2() {
  const [startDate1, setStartDate1] = useState(false);
  const [startDate2, setStartDate2] = useState(false);
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
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-5px",
      paddingRight: 5,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "none",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),
    container: (provided) => ({
      ...provided,
      paddingLeft: 55,
      marginTop: -12,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
    }),
  };
  return (
    <div className="hero-style2">
      <ul className="social-link">
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <i className="bx bxl-pinterest-alt" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/#">
            <i className="bx bxl-instagram" />
          </a>
        </li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              <h4>Wellcome Our Hotelina</h4>
              <h1>Enjoy Your Vacation.</h1>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum
                sceisuen the aucan ligula. mus nellentesque habitant forminy
                morbine odio elementum sceisuen the aucan ligula mus
                nellentesque morbine .
              </p>
              <Link href="/room-suits1">
                <a className="btn--primary eg-btn">Room &amp; Suites</a>
              </Link>
            </div>
            <div className="multi-main-searchber">
              <div className="row align-items-center">
                <div className="col-lg-10">
                  <div className="row gx-2 gy-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="searchbox-input date-picker-input">
                        <label>Check In</label>
                        <ReactDatePicker
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                          placeholderText="Check In"
                          className="calenda"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="searchbox-input date-picker-input">
                        <label>Check Out</label>
                        <ReactDatePicker
                          selected={startDate2}
                          onChange={(date) => setStartDate2(date)}
                          placeholderText="Check In"
                          className="calenda"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="searchbox-input two">
                        <label>Person</label>
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
                          width="200px"
                          menuColor="#333"
                          defaultValue={selectedOption}
                          options={options}
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="searchbox-input two three">
                        <label>Room</label>
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
                          width="200px"
                          menuColor="#333"
                          defaultValue={selectedOption2}
                          options={roomOptions}
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 px-0">
                  <div className="main-form-submit">
                    <Link href="/room-suits1">
                      <a className="btn--primary eg-btn">Find Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
