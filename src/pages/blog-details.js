import React from "react";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import SearchWidget from "../components/blog/SearchWidget";
import SocialWidget from "../components/blog/SocialWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";

function BlogDetails() {
  return (
    <>
      <Layout>
        <Breadcrum pageName="Blog Details" pageTitle="Blog Details" />
        <div className="inner-blog pt-120 mb-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4 order-lg-1 order-2">
                <div className="widget-area">
                  {/* <SearchWidget /> */}
                  {/* <RecentPostWidget /> */}
                  {/* <TagWidget /> */}
                  {/* <SocialWidget /> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="blog-post-area">
                  <div className="blog-details mb-120">
                    <div className="post-thumbnail">
                      <img
                        className="img-fluid"
                        src="assets/images/blog/blog-dt-1.png"
                        alt=""
                      />
                      <div className="batch">
                        <span>June 21, 2022</span>
                      </div>
                    </div>
                    <div className="blog-meta">
                      <span>By, Admin</span> <span>Monday, July 18, 2022</span>{" "}
                      <span>Hotel</span>
                    </div>
                    <div className="post-content">
                      <h3>
                        Quisque id pellentesque justo, et convallis augue yeseri
                        Nullam magna dolor.
                      </h3>
                      <p>
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum
                        oneni sci the aucan thoseni ligulatol. Orci varius
                        natoque penatibus ethemen magnis disc parturient monte
                        nascete ridiculusun musclineorto.
                      </p>
                      <p>
                        Quisque id pellentesque justo, et convallis augue.
                        Nullam magna dolor, efficitur et elit in, mattis tempor
                        odio. Pellentesque non semper mauris. Suspendisse
                        interdum elementum condimentum. Suspendisse ultrices est
                        at magna ornare, vitae eleifend ligula sodales. Quisque
                        vestibulum ullamcorper convallis. Aliquam semper sapien
                        orci, at volutpat elit blandit vitae. Nulla gravida
                        lectus vitae dolor volutpat condimentum tincidunt quis
                        mauris. Aenean accumsan varius facilisis.
                      </p>
                      <blockquote className="wp-block-quote">
                        <p>
                          Hotel ut nisl quam nestibulum ac quam nec odio
                          elementum oneni sci the one Quisque euismod
                          ullamcorper ultrices. Curabitur hendrerit pharetra
                          maurisai accumsan dapibus. Fusce blandit sem ipsum,
                          sed egestas nisl tristique neconi. penatibus ethemen
                          magnis disc parturient monte nascete ridiculusun
                          fourtee musclineorto.
                        </p>
                        <cite>
                          <strong>Galib Al Nahian</strong>
                          <br />
                          <img
                            src="assets/images/blog/blog-signature.png"
                            alt=""
                          />
                        </cite>
                      </blockquote>
                      <p>
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum
                        oneni sci the aucan thoseni ligulatol. Orci varius
                        natoque penatibus ethemen magnis disc parturient monte
                        nascete ridiculusun musclineorto.
                      </p>
                      <div className="row g-4 pt-20">
                        <div className="col-lg-9">
                          <div className="row g-4">
                            <div className="col-sm-6">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-dt-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-sm-6">
                              <img
                                className="img-fluid"
                                src="assets/images/blog/blog-dt-3.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 d-lg-block d-none">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-dt-4.png"
                            alt=""
                          />
                        </div>
                        <div className="col-12 mb-30">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-dt-5.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <h3>Bookmarksgrove</h3>
                      <p>
                        Quisque id pellentesque justo, et convallis augue.
                        Nullam magna dolor, efficitur et elit in, mattis tempor
                        odio. Pellentesque non semper mauris. Suspendisse
                        interdum elementum condimentum. Suspendisse ultrices est
                        at magna ornare, vitae eleifend ligula sodales. Quisque
                        vestibulum ullamcorper convallis. Aliquam semper sapien
                        orci, at volutpat elit blandit vitae. Nulla gravida
                        lectus vitae dolor volutpat condimentum tincidunt quis
                        mauris. Aenean accumsan varius facilisis.
                      </p>
                      <div className="row g-4 pt-20">
                        <div className="col-md-6">
                          <div className="tags">
                            <h5>Tagged In:</h5>
                            <a href="#">Family Room,</a>
                            <a href="#">Luxury,</a>
                            <a href="#">Appartment,</a>
                            <a href="#">Bar &amp; Pub,</a>
                            <a href="#">Deluxe Hotel.</a>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-lg-end">
                          <div className="social-link">
                            <h5>Share On:</h5>
                            <ul>
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
                                <a href="https://www.instagram.com/">
                                  <i className="bx bxl-instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-section">
                    <div className="section-title d-flex align-items-center">
                      <h3>Comment</h3>
                      <span />
                    </div>
                    <ul>
                      <li>
                        <div className="author-img">
                          <img
                            src="assets/images/blog/comment-author-1.png"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-top d-flex align-items-center justify-content-between">
                            <div className="comment-meta">
                              <h5>Polard Girdet</h5>
                              <span>21 July, 2022 At 10.08 pm</span>
                            </div>
                            <div className="replay-btn">
                              <a href="#">
                                <img
                                  src="assets/images/icons/reply.svg"
                                  alt=""
                                />{" "}
                                Reply
                              </a>
                            </div>
                          </div>
                          <p>
                            Vestibulum eget mauris dui. Proin luctus est lacus,
                            eu lobortis orchivaone dignissimona atei. Ut nec
                            vulputateri nisl. Mauris vel dolor augue toidan.
                            dolorcoul maximus a finibus eget.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="author-img">
                          <img
                            src="assets/images/blog/comment-author-2.png"
                            alt=""
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-top d-flex align-items-center justify-content-between">
                            <div className="comment-meta">
                              <h5>Jordan Josef</h5>
                              <span>11 July, 2022 At 10.08 pm</span>
                            </div>
                            <div className="replay-btn">
                              <a href="#">
                                <img
                                  src="assets/images/icons/reply.svg"
                                  alt=""
                                />{" "}
                                Reply
                              </a>
                            </div>
                          </div>
                          <p>
                            Vestibulum eget mauris dui. Proin luctus est lacus,
                            eu lobortis orchivaone dignissimona atei. Ut nec
                            vulputateri nisl. Mauris vel dolor augue toidan.
                            dolorcoul maximus a finibus eget.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="section-title d-flex align-items-center pt-120">
                      <h3>Leave A Comment</h3>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-inner mb-30">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-30">
                            <input type="text" placeholder="Enter Your Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner mb-30">
                            <textarea
                              placeholder="Type your Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner two">
                            <button type="submit">Submit Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetails;
