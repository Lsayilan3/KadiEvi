import React from "react";
import Link from "next/link";
function TagWidget() {
  return (
    <>
      <div className="single-widgets widget_egns_tag">
        <div className="widget-title">
          <h3>All Tag</h3>
        </div>
        <p className="wp-block-tag-cloud">
          <Link href="/blog-details">
            <a>Hotel</a>
          </Link>
          <Link href="/blog-details">
            <a>Resort</a>
          </Link>
          <Link href="/blog-details">
            <a>Cortexa</a>
          </Link>
          <Link href="/blog-details">
            <a>Family Room</a>
          </Link>
          <Link href="/blog-details">
            <a>Luxury</a>
          </Link>
          <Link href="/blog-details">
            <a>Appartment</a>
          </Link>
          <Link href="/blog-details">
            <a>Restaurant</a>
          </Link>
          <Link href="/blog-details">
            <a>Bar &amp; Pub</a>
          </Link>
          <Link href="/blog-details">
            <a>Deluxe Hotel</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default TagWidget;
