import Link from "next/link";
import React from "react";
import roomData from "../../data/rooms_data.json";
function Room1() {
  return (
    <div className="our-room-section mb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title1 text-center">
              <span>Room &amp; Suits</span>
              <h2>Our Rooms</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {roomData.slice(0, 6).map((data) => {
            const {
              id,
              numberOfGuest,
              numberOfRooms,
              roomTitle,
              price,
              image,
            } = data;
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="single-room">
                  <img className="img-fluid" src={image} alt="" />
                  <div className="background" />
                  <div className="room-content">
                    <div className="price-tag">
                      <span>{price}</span> / Per Night
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
                            src="assets/images/icons/double-bed.svg"
                            alt=""
                          />
                          {numberOfRooms}
                        </p>
                      </div>
                      <div className="persons">
                        <p>
                          <img src="assets/images/icons/persons.svg" alt="" />
                          {numberOfGuest} Guest
                        </p>
                      </div>
                    </div>
                    <div className="book-btn">
                      <Link href="/room-suits-details">
                        <a className="btn--primary2">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row pt-70">
          <div className="col-12 d-flex justify-content-center">
            <Link href="/room-suits1">
              <a className="room-btn btn--primary eg-btn">Room &amp; Suites</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room1;
