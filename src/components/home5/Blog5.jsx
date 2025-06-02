import Link from "next/link";
import React from "react";
import blogData from "../../data/blog_grid.json";
function Blog5() {
  return (
    <div className="home5-blog-area mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="section-title-area sibling2">
            <div className="marquee">
              <div>
                <span>Latest Blog</span>
                <span>Latest Blog</span>
              </div>
            </div>
            <div className="section-title sibling2">
              <span>Blog Post</span>
              <h2>Latest Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center g-4">
          {blogData.slice(12, 15).map((data) => {
            const {
              id,
              image,
              authorPhoto,
              category,
              authorName,
              title,
              date,
            } = data;
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="blog-wrrap">
                  <div className="blog-img">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="batch">
                      <Link href="/room-suits1">
                        <a>{date}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta-area d-flex align-items-center flex-wrap">
                      <img src={authorPhoto} alt="" />
                      <p>
                        <Link href="/blog"><a>by, {authorName}&nbsp;-&nbsp;</a></Link>
                        <Link href="/blog">{category}</Link>
                      </p>
                    </div>
                    <div className="blog-title">
                    <h4>
                      <Link href="/room-suits-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
                    </div>
                    <div className="read-more-btn">
                      <Link href="/room-suits-details"><a>Read More</a></Link>
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

export default Blog5;
