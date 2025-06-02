import React from "react";
import Link from "next/link";
function Home2About() {
  return (
    <div className="home-two-about mb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="section-title2">
              <span>About Our Hotel</span>
              <h2>Get Here The Finest Hote Experience.</h2>
              <img src="assets/images/icons/section-bg.svg" alt="" />
            </div>
            <div className="about-content">
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni
                sceisuen the aucan ligula. Orci varius natoque penatibus ethemen
                magnis discustent parturient monte nascete ridiculus
                musclineorto elementum oneni sceisuen the aucan ligula. Orci
                nellentesque habitant forminy morbine.
              </p>
              <blockquote>
                <p>
                  Hotel ut nisl quam nestibulum ac quam nec odion elementum
                  oneni sceisuen the aucan ligula orchive varius natoque this
                  called.
                </p>
                <h5>Hotel Chairman</h5>
                <img src="assets/images/icons/signature.svg" alt="" />
              </blockquote>
              <Link href="/about">
                <a className="btn--primary3">Discover More</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-img">
              <div className="row g-4">
                <div className="col-sm-5">
                  <div className="about-img-1  ">
                    <img src="assets/images/bg/h2-about-img1.png" alt="" />
                  </div>
                  <div className="reating text-center  ">
                    <img src="assets/images/icons/trio.svg" alt="" />
                    <h2>5.0</h2>
                    <ul className="stars p-0 d-flex justify-content-center">
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
                    <span>2000, Reviews</span>
                  </div>
                </div>
                <div className="col-sm-7  ">
                  <div className="about-img-2">
                    <img src="assets/images/bg/h2-about-img2.png" alt="" />
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

export default Home2About;
