import React from "react";

function Contact2() {
  return (
    <div className="home-two-contact mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 px-0">
            <div className="contact-wrrap">
              <div className="section-title2 text-center mb-70">
                <span>Stay Contact</span>
                <h2>Get in touch</h2>
                <img src="assets/images/icons/section-bg.svg" alt="" />
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-50">
                    <div className="form-inner">
                      <textarea placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input
                        className="send-btn btn--primary3"
                        type="submit"

                      value="Send Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 px-0  ">
            <div className="contact-img">
              <img src="assets/images/bg/contact-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
