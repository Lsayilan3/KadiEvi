import React from "react";
import Link from "next/link";
import blogData from "../../data/blog_grid.json";
function BlogPost() {
  return (
    <div className="home-one-blog mb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title1 text-center">
              <span>Blog Post</span>
              <h2>Our Update Article.</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {blogData.slice(0, 3).map((data) => {
            const { id, title, date, category, image } = data;
            return (
              <div key={id} className="col-lg-4 col-md-6">
                <div className="blog-wrrap">
                  <div className="blog-img">
                    <img src={image} alt="" />
                    <div className="batch">
                      <Link href="/blog">
                        <a>{date}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog">
                        <a>By, Admin -</a>
                      </Link>{" "}
                      <Link href="/blog">
                        <a>{category}</a>
                      </Link>
                    </div>
                    <div className="blog-title">
                      <div className="blog-title">
                      <h4>
                        <Link href="/blog-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      </div>
                    </div>
                    <div className="read-more-btn">
                      <Link href="/blog-details">
                        <a>
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
      </div>
    </div>
  );
}

export default BlogPost;
