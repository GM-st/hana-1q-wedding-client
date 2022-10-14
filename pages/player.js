import React, { useState } from "react";

const Player = () => {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div id="player-section">
      <section className="text-gray-600 body-font">
        <div className="container flex justify-center mx-20 mt-20">
          <div className="flex-col items-center place-items-center">
            <div>
              <input type="file" onChange={handleVideoUpload} />
            </div>
            <div className="max-w-3xl">
              <video
                // ref={videoRef}
                controls
                width="100%"
                height="100%"
                // loop
                // muted
                src={videoFilePath}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Player;
