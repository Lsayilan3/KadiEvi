import Link from "next/link";
import React from "react";
import roomData from "../../../data/service.json";
function ExtraService5() {
  return (
    <div className="home5-extra-services mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="section-title-area sibling2">
            <div className="marquee">
              <div>
                <span>Extra Services</span>
                <span>Extra Services</span>
              </div>
            </div>
            <div className="section-title sibling2">
              <span>Best Prices</span>
              <h2>Extra Services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {roomData.slice(6, 9).map((data) => {
            const { id, image, title, descrition } = data;

            return (
              <div key={id} className="col-xl-4 col-md-6">
                <div className="ex-service-wrrap">
                  <div className="ex-service-img">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="ex-service-content text-center">
                      <h3>{title}</h3>
                      <p>{descrition}</p>
                      <Link href="/hotel-facilities">
                        <a className="btn--primary2">Read More</a>
                      </Link>
                    </div>
                    <div className="ex-service-name">
                      <Link href="/hotel-facilities">
                        <a>{title}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExtraService5;
