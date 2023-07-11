import React, { useRef, useState, useEffect } from "react";
// import "@vime/core/themes/default.css";
// import { Player, DefaultUi, Video, DefaultControls } from "@vime/react";
import { Player, Video, DefaultUi, DefaultControls, Hls } from "@vime/react";
// import Hls from "hls.js";

const WatchAnime = () => {
  // const player = useRef < HTMLVmPlayerElement > null;
  const videoSource =
    "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8";

  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (Hls.isSupported()) {
  //     const hls = new Hls();
  //     hls.loadSource(videoSource);
  //     hls.attachMedia(videoRef.current);
  //   }
  // }, []);

  return (
    <div>
      {/* Video player */}
      <div className="w-full bg-[#ae2e2e] object-cover rounded mt-10 ">
        <Player>
          {/* <Video ref={videoRef} crossOrigin="anonymous" /> */}
          <Hls version="latest" poster="/media/poster.png">
            <source data-src={videoSource} type="application/x-mpegURL" />
          </Hls>

          {/* We've replaced the `<Ui />` component. */}
          {/* We can turn off any features we don't want via properties. */}
          <DefaultUi noControls>
            {/* We setup the default controls and pass in any options. */}
            <DefaultControls hideOnMouseLeave activeDuration={2000} />
          </DefaultUi>
        </Player>
      </div>

      <div className="bg-[#121212] my-5 p-2 flex  flex-wrap gap-3">
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
      </div>
    </div>
  );
};

export default WatchAnime;
