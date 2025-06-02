import React from "react";
import Link from "next/link";
function RecentPostWidget() {
  return (
    <>
      <div className="single-widgets widget_egns_recent_post">
        <div className="widget-title">
          <h3>Newest Posts</h3>
        </div>
        <div className="recent-post-wraper">
          <div className="widget-cnt">
            <div className="wi">
              <Link href="/blog-details">
                <a>
                  <img src="assets/images/blog/blog-sidebar-1.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="wc">
              <span>30.05.2022</span>
              <h6>
                <Link href="/blog-details">
                  <a>Quisque laoreet Maecento facilisis tristique.</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="widget-cnt">
            <div className="wi">
              <Link href="/blog-details">
                <a>
                  <img src="assets/images/blog/blog-sidebar-2.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="wc">
              <span>20.05.2022</span>
              <h6>
                <Link href="/blog-details">
                  <a>Etiam vel diam volutpatha pellentesque.</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="widget-cnt">
            <div className="wi">
              <Link href="/blog-details">
                <a>
                  <img src="assets/images/blog/blog-sidebar-3.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="wc">
              <span>01.05.2022</span>
              <h6>
                <Link href="/blog-details">
                  <a>Nunc finibus gravidato on porta. Nulla vitae.</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="widget-cnt">
            <div className="wi">
              <Link href="/blog-details">
                <a>
                  <img src="assets/images/blog/blog-sidebar-4.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="wc">
              <span>01.05.2022</span>
              <h6>
                <Link href="/blog-details">
                  <a>Nunc finibus gravidato on porta. Nulla vitae.</a>
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentPostWidget;
