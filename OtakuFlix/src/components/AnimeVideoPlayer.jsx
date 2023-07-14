import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const AnimeVideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);
  let hls = null;

  useEffect(() => {
    const videoElement = videoRef.current;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoSource);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoSource]);
  return (
    <div className="w-full  object-cover rounded mt-10 ">
      <video ref={videoRef} controls className="w-full h-full rounded-md" />
    </div>
  );
};

export default AnimeVideoPlayer;
