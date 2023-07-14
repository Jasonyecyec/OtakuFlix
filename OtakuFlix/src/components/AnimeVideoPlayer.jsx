import React from "react";
import { Player, Video, DefaultUi, DefaultControls, Hls } from "@vime/react";

const AnimeVideoPlayer = ({ videoSource }) => {
  return (
    <div className="w-full bg-[#ae2e2e] object-cover rounded mt-10 ">
      <Player>
        {/* <Video ref={videoRef} crossOrigin="anonymous" /> */}
        <Hls version="latest">
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
  );
};

export default AnimeVideoPlayer;
