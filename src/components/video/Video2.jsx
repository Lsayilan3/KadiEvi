import React from "react";

function Video2() {
  return (
    <div className="home-one-video mb-120">
      <div className="video-area">
        <video autoPlay loop="loop" muted preload="auto">
          <source
            src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-batch text-center">
          <img src="assets/images/icons/h2-video-icon.svg" alt="" />
          <h2>Find What Is Here.</h2>
        </div>
      </div>
    </div>
  );
}

export default Video2;
