import React, { useEffect, useState, useMemo } from "react";
import aot from "../assets/aot.jpg";
import btnTriangle from "../assets/btnTriangle.svg";
import onePiece from "../assets/one-piece.jpg";
import add from "../assets/add.svg";
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTopAnimeStore } from "/src/store/store.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

const Carousel = () => {
  const { topAnime, setTopAnime, isTopAnimeLoading, setTopAnimeLoading } =
    useTopAnimeStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTopAnime = async () => {
      try {
        const response = await axios.get(
          "https://api.consumet.org/anime/gogoanime/top-airing"
        );

        // Handle the data
        if (isMounted) {
          // Handle the data
          setTopAnime(response.data);
          setTopAnimeLoading(false);
        }
        console.log(response.data);
        // console.log(response.data);
      } catch (error) {
        // Handle any errors
        console.log(error);
      }
    };

    if (topAnime === null) {
      fetchTopAnime();
    }
    //cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="h-56  mt-5 rounded-md relative drop-shadow-xl">
      <Swiper
        style={{
          "--swiper-navigation-color": "#FCA311",
          "--swiper-navigation-size": "25px",
        }}
        // rewind={true}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="carousel-swiper"
      >
        {topAnime !== null && !isTopAnimeLoading ? (
          topAnime.results.map((anime) =>
            anime.title != "" ? (
              <SwiperSlide key={anime.id}>
                <div className="h-full rounded-md relative">
                  <img src={anime.image} alt="" className=" w-full" />

                  {/* Opacity */}
                  <div className="absolute top-0 w-full h-full bg-black opacity-30">
                    sds
                  </div>

                  <div className="absolute top-3 left-3 text-white w-10/12">
                    <h2 className="text-xl font-semibold ">{anime.title}</h2>
                    <p className="text-base">
                      {anime.genres[0]}, {anime.genres[1]}{" "}
                    </p>
                    {console.log(anime.id)}
                  </div>

                  <div></div>

                  <div className="absolute bottom-2 left-3 text-white flex">
                    <Link to={`/watch/${anime.id}-episode-1`}>
                      <button className="bg-primary text-background font-semibold p-2 text-xs rounded flex justify-center content-center">
                        <img src={btnTriangle} alt="" className="block h-4" />
                        <p className="ml-2 font-semibold">Watch Now</p>
                      </button>
                    </Link>

                    <button className="bg-[#D9D9D9] p-2 text-xs rounded text-background ml-3">
                      <img src={add} alt="" className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              ""
            )
          )
        ) : (
          <SwiperSlide>
            <div className="h-full rounded-md relative ">
              <div className="search-loading-wrapper flex h-full justify-center items-center bg-slate-800 animate-pulse w-full p-3">
                <div class="dot-spinner">
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
