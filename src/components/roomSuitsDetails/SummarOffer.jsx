import React from "react";
import Link from "next/link"
function SummarOffer({ image, title, price }) {
  return (
    
    <div className="widget-cnt mb-25">
      <div className="wi">
        <Link href="/room-suits-details">
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="wc">
        <h6>
          <Link href="/room-suits-details">
            <a>{title}</a>
          </Link>
        </h6>
        <span>From</span>
        <br />
        <span>
          <strong>{price}</strong> Per Night
        </span>
      </div>
    </div>
  );
}

export default SummarOffer;
