import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

SwiperCore.use([Pagination]);

const TrendingCarousel = ({ title }) => {
  const swiperEl = useRef(null);

  // assuming `data` is an array of items to be rendered in SwiperSlides
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const slideNext = () => {
    swiperEl.current.swiper.slideNext();
  };

  const slidePrev = () => {
    swiperEl.current.swiper.slidePrev();
  };
  const skeletonArray = Array.from({ length: 8 }).map((_, index) => (
    <CarouselSkeletonLoader key={index} />
  ));

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
        {isLoading
          ? Array.from({ length: 8 }).map((item, index) => (
              <SwiperSlide key={index}>
                <CarouselSkeletonLoader />
              </SwiperSlide>
            ))
          : Array(8)
              .fill(0)
              .map((item, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <div className="bg-subBackground h-full rounded-md drop-shadow-2xl ">
                    <Link to="/anime">
                      {/* Anime Cover*/}
                      <div className="h-56 bg-red-300 rounded-t-md relative">
                        <img
                          src={demonSlayer}
                          alt=""
                          className="h-full w-full object-cover rounded-t-md image-cover"
                        />

                        {/* RATING*/}
                        <div className="bg-white absolute top-1 left-1 p-1 rounded flex ">
                          <p className="flex items-center text-sm font-medium justify-center">
                            7.4 <img src={ratingStar} alt="" className="w-5 " />
                          </p>
                        </div>

                        {/* Episodes */}
                        <div className="bg-primary rounded absolute bottom-1 right-1 p-1 font-medium">
                          Ep 4/?
                        </div>
                      </div>
                    </Link>

                    <div className="space-y-3 p-2">
                      <h1 className="text-white font-semibold text-lg anime-title">
                        Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc
                      </h1>
                      <p className="text-white text-base">TV • Action • 25m</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
};

export default TrendingCarousel;
