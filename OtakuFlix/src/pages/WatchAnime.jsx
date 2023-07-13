import React, { useRef, useState, useEffect } from "react";
import { Player, Video, DefaultUi, DefaultControls, Hls } from "@vime/react";
import AnimeCover from "../assets/aot.jpg";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const WatchAnime = () => {
  // const player = useRef < HTMLVmPlayerElement > null;
  const [videoSource, setVideoSource] = useState("");
  const { path } = useParams();

  useEffect(() => {
    //fetch anime streaming source
    const fetchAnimeSource = async () => {
      try {
        const source = await axios.get(
          `https://api.consumet.org/anime/gogoanime/watch/${path}-episode-1`
        );

        // filter source only get highest quality
        const highestQuality = source.data.sources.find((item) => {
          return item.quality === "1080p" || item.quality === "720p";
        });

        setVideoSource(highestQuality.url);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnimeSource();
  }, [path]);

  return (
    <div>
      {/* Video player */}
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

      {/* Episodes */}
      <div className="bg-[#121212] my-5 p-2 flex  flex-wrap gap-3">
        <button className="px-4 py-1 bg-primary rounded font-semibold">
          1
        </button>
        <button className="px-4 py-1 bg-[#343434] rounded">1</button>
        <button className="px-4 py-1 bg-[#343434] rounded">2</button>
        <button className="px-4 py-1 bg-[#343434] rounded">3</button>
        <button className="px-4 py-1 bg-[#343434] rounded">4</button>
        <button className="px-4 py-1 bg-[#343434] rounded">5</button>
        <button className="px-4 py-1 bg-[#343434] rounded">6</button>
        <button className="px-4 py-1 bg-[#343434] rounded">7</button>
        <button className="px-4 py-1 bg-[#343434] rounded">8</button>
      </div>

      {/* Anime Info */}
      <div className="flex justify-between gap-x-2 w-full">
        <div className="w-[25%] rounded ">
          <img
            src={AnimeCover}
            alt=""
            className="w-full h-24 object-cover rounded drop-shadow-md"
          />
        </div>

        <div className="text-white space-y-2 w-[75%]">
          <p className="text-xl font-semibold">One Piece</p>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-sm space-y-2">
            <p>Type: TV</p>
            <p>Country: Japan</p>
            <p>Premiered: Fall 1999</p>
            <p>Date aired: Oct 20, 1999</p>
            <p>Status: Releasing</p>
            <p>
              Genres: Action, Adventurem, Comedy, Drama, Fantasy, Shounen, Super
              Power
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-10  space-y-5">
        <p className="text-white text-xl">Related</p>

        <div className="bg-[#121212] h-56 overflow-x-scroll space-y-3 p-2 rounded text-white">
          <div className="bg-[#202022] p-2 rounded flex space-x-5">
            <div className="w-16 h-14 bg-red-50">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg">One piece</p>
              <p className="text-xs">Oct 20,1999 TV Series 24m </p>
            </div>
          </div>

          <div className="bg-[#202022] p-2 rounded flex space-x-5">
            <div className="w-16 h-14 bg-red-50">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg">One piece</p>
              <p className="text-xs">Oct 20,1999 TV Series 24m </p>
            </div>
          </div>

          <div className="bg-[#202022] p-2 rounded flex space-x-5">
            <div className="w-16 h-14 bg-red-50">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg">One piece</p>
              <p className="text-xs">Oct 20,1999 TV Series 24m </p>
            </div>
          </div>

          <div className="bg-[#202022] p-2 rounded flex space-x-5">
            <div className="w-16 h-14 bg-red-50">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg">One piece</p>
              <p className="text-xs">Oct 20,1999 TV Series 24m </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-10 text-white mb-32">
        <p className="text-xl border-b-2 border-white pb-5">Comments</p>

        {/* User comment */}
        <div className="mt-5 space-y-3">
          <div className="flex space-x-3">
            <div className="w-14 h-14">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="w-full h-full rounded p-2"
                placeholder="Join the discussion"
              />
            </div>
          </div>
          <div className="flex justify-end ">
            <button className="bg-primary p-2 rounded">Submit</button>
          </div>
        </div>
        {/* ------------------- */}

        {/* Anime Comments */}
        <div className="space-y-5">
          <div className="flex space-x-3">
            <div className="w-14 h-14">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="space-y-1 w-full text-sm">
              <p className="text-xl font-medium text-primary ">Anonymous</p>
              <p className="">5/20/2022</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                cumque odio quas maiores rem modi similique voluptatibus
                repellendus sequi nihil?
              </p>

              <div className="flex space-x-3">
                <p>
                  <button>Like</button> 123
                </p>

                <button>Reply</button>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <div className="w-14 h-14">
              <img
                src={AnimeCover}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="space-y-1 w-full text-sm">
              <p className="text-xl font-medium text-primary ">Anonymous</p>
              <p className="">5/20/2022</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                cumque odio quas maiores rem modi similique voluptatibus
                repellendus sequi nihil?
              </p>

              <div className="flex space-x-3">
                <p>
                  <button>Like</button> 123
                </p>

                <button>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WatchAnime;
