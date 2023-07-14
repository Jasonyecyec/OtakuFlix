import React, { useRef, useState, useEffect } from "react";
import AnimeCover from "../assets/aot.jpg";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useFetchAnimeVideoAndInfo from "../hooks/useFetchAnimeVideoAndInfo";
import { Player, Video, DefaultUi, DefaultControls, Hls } from "@vime/react";
import AnimeVideoPlayer from "../components/AnimeVideoPlayer";
import AnimeEpisodes from "../components/AnimeEpisodes";

const WatchAnime = () => {
  // const player = useRef < HTMLVmPlayerElement > null;
  // const [videoSource, setVideoSource] = useState("");
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const { path } = useParams();

  const { videoSource, animeInfo } = useFetchAnimeVideoAndInfo(
    path,
    currentEpisode
  );

  return (
    <div>
      <AnimeVideoPlayer videoSource={videoSource} />

      <AnimeEpisodes
        animeInfo={animeInfo}
        setCurrentEpisode={setCurrentEpisode}
        currentEpisode={currentEpisode}
      />

      {/* Anime Info */}
      <div className="flex justify-between gap-x-2 w-full">
        <div className="w-[25%] rounded ">
          <img
            src={animeInfo.image}
            alt=""
            className="w-full h-24 object-cover rounded drop-shadow-md"
          />
        </div>

        <div className="text-white space-y-2 w-[75%]">
          <p className="text-xl font-semibold">{animeInfo.title}</p>
          <p className="text-sm ">{animeInfo.description} </p>

          <div className="text-sm space-y-2">
            <p>Type: {animeInfo.type}</p>
            <p>Country: Japan</p>
            <p>Release date: {animeInfo.releaseDate}</p>
            <p>Status: {animeInfo.status}</p>
            <p>Genres: {animeInfo.genres && animeInfo.genres.join(", ")}</p>
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
