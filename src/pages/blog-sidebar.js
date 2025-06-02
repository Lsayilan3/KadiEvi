import Link from "next/link";
import React from "react";
import RecentPostWidget from "../components/blog/RecentPostWidget";
import SearchWidget from "../components/blog/SearchWidget";
import SocialWidget from "../components/blog/SocialWidget";
import TagWidget from "../components/blog/TagWidget";
import Breadcrum from "../components/common/Breadcrum";
import Layout from "../components/Layout/Layout";
import blogData from "../data/blog_grid.json";
function BlogSidebar() {
  return (
    <Layout>
      <Breadcrum pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
      <div className="inner-blog pt-120 mb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="widget-area">
                <SearchWidget />
                <RecentPostWidget />
                <TagWidget />
                <SocialWidget />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4 justify-content-center">
                {blogData.slice(0, 8).map((data) => {
                  const { id, title, date, category, image } = data;
                  return (
                    <div
                      key={id}
                      className="col-md-6 col-sm-10">
                      <div className="blog-wrrap">
                        <div className="blog-img">
                          <img src={image} alt="" />
                          <div className="batch">
                        <Link href="#"><a>{date}</a></Link>
                      </div>
                        </div>
                        <div className="blog-content">
                        <div className="blog-meta">
                          <Link href="/blog">By, Admin -</Link> <Link href="/blog">{category}</Link>
                         </div>
                         <div className="blog-title">
                          <h4>
                            <Link href="/blog-details">
                              <a>{title}</a>
                            </Link>
                          </h4>
                         </div>
                          <div className="read-more-btn">
                        <Link href="/blog-details">
                         <a>
                         <svg width={43} height={10} viewBox="0 0 43 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H41" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M36 9L41 5L36 1" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          Read More
                         </a>
                        </Link>
                      </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogSidebar;
