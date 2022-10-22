import React from "react";

const Intro1 = () => {
  const videoObjectSrc = "videos/main-intro-video.MOV";

  return (
    <div id="main-section" className="bg-gray-100 mx-40 my-20">
      <div className="relative flex items-center justify-center h-screen overflow-hidden rounded-lg motion-safe:animate-fadeIn">
        <video
          playsInline
          autoPlay={false}
          muted={false}
          loop
          controls
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-100"
        >
          <source src={videoObjectSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Intro1;
