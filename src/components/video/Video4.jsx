import React, { useState } from "react";
import ModalVideo from "react-modal-video";
function Video4() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home4-video-area mb-120">
        <div className="video-batch">
          <h3>Are You Ready To Stay Here.</h3>
          <div className="video-icon">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
              className="popup-youtube"
            >
              <i className="bx bx-play" />
            </a>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Video4;
