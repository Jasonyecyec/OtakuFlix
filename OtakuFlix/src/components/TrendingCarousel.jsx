import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import aot from "../assets/aot.jpg";
import onePiece from "../assets/one-piece.jpg";
import demonSlayer from "../assets/demonSlayer.jpg";
import ratingStar from "../assets/ratingStar.svg";

// import required modules
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import CarouselSkeletonLoader from "./CarouselSkeletonLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useNavbarStore } from "/src/store/store.js";
import useFetchAnimeList from "../hooks/useFetchAnimeList";

SwiperCore.use([Pagination]);

const TrendingCarousel = ({ title, url }) => {
  const { isActive, toggleActive } = useNavbarStore();
  const swiperEl = useRef(null);

  const { isLoading, trendingNow } = useFetchAnimeList(url);

  const handleClickLink = (event) => {
    if (isActive) {
      toggleActive();
    }
  };

  const slideNext = () => {
    swiperEl.current.swiper.slideNext();
  };

  const slidePrev = () => {
    swiperEl.current.swiper.slidePrev();
  };

  return (
    <div className="  mt-10   bg-red-40">
      <div className="text-white flex justify-between align-center mb-5">
        <h2 className="font-bold text-lg  flex items-center ">{title} </h2>

        <div className=" w-24 flex justify-between ">
          <button
            className="bg-subBackground rounded-full w-10 h-10 drop-shadow-2xl"
            onClick={slidePrev}
          >
            -
          </button>
          <button
            className="bg-subBackground rounded-full w-10 h-10 drop-shadow-2xl"
            onClick={slideNext}
          >
            +
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperEl}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        className="trending-swiper"
      >
        {isLoading && (trendingNow === null || trendingNow === undefined)
          ? Array.from({ length: 10 }).map((item, index) => (
              <SwiperSlide key={index}>
                <CarouselSkeletonLoader />
              </SwiperSlide>
            ))
          : trendingNow &&
            trendingNow.data.results &&
            trendingNow.data.results.map((anime) => (
              <SwiperSlide key={anime.id}>
                {" "}
                <div className="bg-subBackground h-[22.5rem] rounded-md drop-shadow-2xl ">
                  <Link
                    to={`/watch/${anime.id}-episode-1`}
                    onClick={handleClickLink}
                  >
                    {/* Anime Cover*/}
                    <div className="h-56 rounded-t-md relative">
                      <img
                        src={anime.image}
                        alt=""
                        className="h-full w-full object-cover rounded-t-md image-cover"
                      />

                      {/* RATING*/}
                      <div className="bg-white absolute top-1 left-1 p-1 rounded flex ">
                        <p className="flex items-center text-sm font-semibold justify-center">
                          {anime.subOrDub.toUpperCase()}{" "}
                          {/* <img src={ratingStar} alt="" className="w-5 " /> */}
                        </p>
                      </div>

                      {/* Episodes */}
                      <div className="bg-primary rounded absolute bottom-1 right-1 p-1 font-medium">
                        Ep {anime.totalEpisodes}/{anime.totalEpisodes}
                      </div>
                    </div>
                  </Link>

                  <div className="space-y-2 p-2">
                    <h1 className="text-white font-semibold text-base anime-title  line-clamp-3">
                      {anime.title}
                    </h1>
                    <p className="text-[#b4b4b4] text-sm">
                      {anime.type} • {anime.genres[0]} • {anime.status}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default TrendingCarousel;
