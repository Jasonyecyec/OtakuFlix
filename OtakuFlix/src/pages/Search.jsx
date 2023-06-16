import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import demonSlayer from "../assets/demonSlayer.jpg";
import ratingStar from "../assets/ratingStar.svg";
import Footer from "../components/Footer";

import CarouselSkeletonLoader from "../components/CarouselSkeletonLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Search = () => {
  const params = useParams();
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  // assuming `data` is an array of items to be rendered in SwiperSlides
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <div>
      <p className="text-[#b4b4b4] mt-3">
        {/* Capitalize the first letter of the path */}
        <span className=" hover:text-white">
          <Link to={`/${params.path}`}>
            {params.path.charAt(0).toUpperCase() + params.path.slice(1)}
          </Link>
        </span>
        <span> > </span> Search result for:{" "}
        <span className="font-bold text-lg text-white">{keyword}</span>
      </p>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
        {isLoading
          ? Array.from({ length: 8 }).map((item, index) => (
              <CarouselSkeletonLoader key={index} />
            ))
          : Array(6)
              .fill(0)
              .map((item, index) => (
                <div
                  className="bg-subBackground h-full rounded-md drop-shadow-2xl "
                  key={index}
                >
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

                  <div className="space-y-3 p-3">
                    <h1 className="text-white font-semibold text-base anime-title">
                      Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc
                    </h1>
                    <p className="text-white text-sm">TV • Action • 25m</p>
                  </div>
                </div>
              ))}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
