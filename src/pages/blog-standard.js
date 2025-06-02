import React from "react";
import Link from "next/link";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import SearchWidget from "../components/blog/SearchWidget";
import SocialWidget from "../components/blog/SocialWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";

function BlogStandard() {
  return (
    <Layout>
      <Breadcrum pageName="Blog Standard" pageTitle="Blog Standard" />
      <div className="inner-blog pt-120 mb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row g-4 justify-content-center">
                <div className="col-md-12">
                  <div className="blog-wrrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/blog-std1.png" alt="" />
                      <div className="batch">
                        <Link href="#">
                          <a>July 19, 2022</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">By, Admin -</Link>
                        <Link href="/blog">Hotel</Link>
                      </div>
                      <div className="blog-title">
                      <h4>
                        <Link href="/blog-details">
                          <a>Ullamcorper sapien sed ton efficitur enim.</a>
                        </Link>
                      </h4>
                      </div>
                      <p className="pera">
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum
                        oneni sci the aucan thoseni ligulatol. Orci varius
                        natoque penatibus ethemen magnis disc parturient monte
                        nascete ridiculusun musclineorto
                        <Link href="/blog-details">
                          <a>&nbsp;Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="blog-wrrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/blog-std2.png" alt="" />
                      <div className="batch">
                        <Link href="#">
                          <a>July 19, 2022</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">By, Admin -</Link>{" "}
                        <Link href="/blog">Delux</Link>
                      </div>
                      <div className="blog-title">
                      <h4>
                        <Link href="/blog-details">
                          <a>Aenean quis nisl pretiuman nibh accumsan.</a>
                        </Link>
                      </h4>
                      </div>
                      <p className="pera">
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum
                        oneni sci the aucan thoseni ligulatol. Orci varius
                        natoque penatibus ethemen magnis disc parturient monte
                        nascete ridiculusun musclineorto
                        <Link href="/blog-details">
                          <a>&nbsp;Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="blog-wrrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/blog-std3.png" alt="" />
                      <div className="batch">
                        <Link href="#">
                          <a>July 19, 2022</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">By, Admin -</Link>{" "}
                        <Link href="/blog">Luxury</Link>
                      </div>
                      <div className="blog-title">
                      <h4>
                        <Link href="/blog-details">
                          <a>Veryes elementum sesuren then aucan vestibu.</a>
                        </Link>
                      </h4>
                      </div>
                      <p className="pera">
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum
                        oneni sci the aucan thoseni ligulatol. Orci varius
                        natoque penatibus ethemen magnis disc parturient monte
                        nascete ridiculusun musclineorto
                        <Link href="/blog-details">
                          <a>&nbsp;Read More</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="widget-area">
                  <SearchWidget />
                  <RecentPostWidget />
                  <TagWidget />
                  <SocialWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogStandard;
