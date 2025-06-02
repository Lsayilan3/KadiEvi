import Link from "next/link";
import React from "react";
import facilitisdata from "../../data/service.json";
function Facilitis2() {
  return (
    <div className="home-two-feature pt-120 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title2 text-center">
              <span>Feature</span>
              <h2>Hotel Facilities</h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="row g-4">
          {facilitisdata.slice(9, 15).map((data) => {
            const { id, image, title } = data;

            return (
              <div key={id} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="featura-img">
                    <img src={image} alt="" />
                    <div className="feature-content text-center">
                      <h4>
                        <Link href="/hotel-facilities">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <Link href="/hotel-facilities">
                        <a>
                          Read More
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
                        </a>
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

export default Facilitis2;
