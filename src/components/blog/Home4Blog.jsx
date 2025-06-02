import React from "react";
import Link from "next/link";
function Home4Blog() {
  return (
    <div className="home4-blog-area mb-120">
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="section-title-4">
              <h4>News Article</h4>
              <h2>Check Our Latest Article</h2>
            </div>
            <Link href="/blog">
              <a className="view-btn btn--primary4">View All</a>
            </Link>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="blog-wrrap">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/h4-blog-1.png"
                  alt=""
                />
                <div className="publish-date">
                <Link href="/blog"><a>02.07.2022</a></Link>
            
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta d-flex justify-content-between align-items-center ">
                  <div className="publisher">
                    <span>Admin</span>
                  </div>
                  <div className="comment">
                    <span>Comment (10)</span>
                  </div>
                </div>
                <div className="blog-title">
                  <h4>
                    <Link href="/blog-details">
                      <a>veryes elementum sesureni then aucan vestibu.</a>
                    </Link>
                  </h4>
                </div>
                <div className="read-more-btn">
                  <Link href="/blog-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="blog-wrrap">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/h4-blog-2.png"
                  alt=""
                />
                <div className="publish-date">
                <Link href="/blog"><a>02.07.2022</a></Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta d-flex justify-content-between align-items-center">
                  <div className="publisher">
                    <span>Admin</span>
                  </div>
                  <div className="comment">
                    <span>Comment (10)</span>
                  </div>
                </div>
                <div className="blog-title">
                  <h4>
                    <Link href="/blog-details">
                      <a>euismod purus vehicula oni Vivamus porta nibh.</a>
                    </Link>
                  </h4>
                </div>
                <div className="read-more-btn">
                  <Link href="/blog-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="blog-wrrap">
              <div className="blog-img">
                <img
                  className="img-fluid"
                  src="assets/images/blog/h4-blog-3.png "
                  alt=""
                />
                <div className="publish-date">
                  <Link href="/blog"><a>02.07.2022</a></Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta d-flex justify-content-between align-items-center">
                  <div className="publisher">
                    <span>Admin</span>
                  </div>
                  <div className="comment">
                    <span>Comment (10)</span>
                  </div>
                </div>
                <div className="blog-title">
                  <h4>
                    <Link href="/blog-details">
                      <a>hendrerit Duis vestibulumol bibendum faucibus.</a>
                    </Link>
                  </h4>
                </div>
                <div className="read-more-btn">
                  <Link href="/blog-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4Blog;
