import Link from "next/link";
import React from "react";
import serviceData from "../../data/service.json";
function Services5() {
  return (
    <div className="home5-facilities mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="section-title-area sibling2">
            <div className="marquee">
              <div>
                <span>Hotel Facilities</span>
                <span>Hotel Facilities</span>
              </div>
            </div>
            <div className="section-title sibling2">
              <span>Our Services</span>
              <h2>Hotel Facilities</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {serviceData.slice(0, 3).map((data) => {
            const { image, title, descrition, id } = data;
            return (
              <div key={id} className="col-xxl-4 col-lg-6 col-md-10 mb-30">
                <div className="facilities-wrrap">
                  <div className="row">
                    <div className="col-sm-6 px-0">
                      <div className="facilities-content">
                        <h3>{title}</h3>
                        <p>{descrition}</p>
                        <Link href="/hotel-facilities">
                          <a className="btn--primary6">More Info</a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6 px-0">
                      <div className="facilities-img">
                        <img className="img-fluid" src={image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {serviceData.slice(3, 6).map((data) => {
            const { image, title, descrition, id } = data;
            return (
              <div key={id} className="col-xxl-4 col-lg-6 col-md-10">
                <div className="facilities-wrrap four">
                  <div className="row">
                    <div className="col-sm-6 px-0">
                      <div className="facilities-img">
                        <img className="img-fluid" src={image} alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 px-0">
                      <div className="facilities-content four">
                        <h3>{title}</h3>
                        <p>{descrition}</p>
                        <Link href="/hotel-facilities">
                          <a className="btn--primary6">More Info</a>
                        </Link>
                      </div>
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

export default Services5;
