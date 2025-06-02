import React from "react";
import Link from "next/link";
function Home3Blogs() {
  return (
    <div className="home-three-latest-post mb-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12     ">
            <div className="section-title3 text-center">
              <h2>Latest Post</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div className="latest-post-wraper">
              <div className="post-img-publish-date text-center">
                <div className="publish-date">
                  <h4>21</h4>
                  <span>August</span>
                </div>
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog7.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="content">
                <div className="blog-title">
                <h4>
                  <Link href="/blog-details">
                    <a>Veryes elementum sesure aucan vestibu.</a>
                  </Link>
                </h4>
                </div>
                <div className="read-more-btn">
                <Link href="/blog-details">
                  <a>
                    Read More&nbsp;
                    <svg
                      width={30}
                      height={6}
                      viewBox="0 0 30 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H27"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 5L27 1L22 1"
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
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div className="latest-post-wraper">
              <div className="post-img-publish-date text-center">
                <div className="publish-date">
                  <h4>21</h4>
                  <span>August</span>
                </div>
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/bolg8.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="content">
              <div className="blog-title">
                <h4>
                  <Link href="/blog-details">
                  <a>Ullamcorper sapien sed ton efficitur enim.</a>
                  </Link>
                </h4>
                </div>
             
                <div className="read-more-btn">
                <Link href="/blog-details">
                  <a>
                    Read More&nbsp;
                    <svg
                      width={30}
                      height={6}
                      viewBox="0 0 30 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H27"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 5L27 1L22 1"
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
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div className="latest-post-wraper">
              <div className="post-img-publish-date text-center">
                <div className="publish-date">
                  <h4>21</h4>
                  <span>August</span>
                </div>
                <div className="post-img">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog9.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="content">
                <div className="blog-title">
                <h4>
                  <Link href="/blog-details">
                    <a>Aenean quis nisl pretiuman nibh accumsan.</a>
                  </Link>
                </h4>
                </div>
                <div className="read-more-btn">
                <Link href="/blog-details">
                  <a>
                    Read More&nbsp;
                    <svg
                      width={30}
                      height={6}
                      viewBox="0 0 30 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H27"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 5L27 1L22 1"
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
        </div>
        <div className="row pt-50">
          <div className="col-12 text-center ">
            <Link href="/blog">
              <a className="view-all-btn btn--primary4">View All</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blogs;
