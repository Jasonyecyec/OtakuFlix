import React from "react";
import aot from "../assets/aot.jpg";
import btnTriangle from "../assets/btnTriangle.svg";
import onePiece from "../assets/one-piece.jpg";
import add from "../assets/add.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

const Carousel = () => {
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
        <SwiperSlide>
          <div className="h-full rounded-md relative">
            <img src={aot} alt="" className="object-fill h-full w-full" />

            {/* Opacity */}
            <div className="absolute top-0 w-full h-full bg-black opacity-30">
              sds
            </div>

            <div className="absolute top-3 left-3 text-white">
              <h2 className="text-xl	font-semibold	">Attack on Titan</h2>
              <h4 className="text-base	">Season 3</h4>
            </div>

            <p className="absolute left-0 top-20 text-white hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae at eaque deserunt neque pariatur suscipit expedita
              eius quibusdam obcaecati explicabo.
            </p>
            <div></div>

            <div className="absolute bottom-2 left-3 text-white flex">
              <button className="bg-primary text-background font-semibold p-2 text-xs rounded flex justify-center content-center">
                <img src={btnTriangle} alt="" className="block h-4" />
                <p className="ml-2 font-semibold">Watch Now</p>
              </button>

              <button className="bg-[#D9D9D9] p-2 text-xs rounded text-background ml-3">
                <img src={add} alt="" className="h-3 w-3" />
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full rounded-md relative">
            <img src={onePiece} alt="" className="object-fill h-full w-full" />

            {/* Opacity */}
            <div className="absolute top-0 w-full h-full bg-black opacity-30">
              sds
            </div>

            <div className="absolute top-3 left-3 text-white">
              <h2 className="text-xl	font-semibold	">One Piece</h2>
              <h4 className="text-base	">Season 3</h4>
            </div>

            <p className="absolute left-0 top-20 text-white hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae at eaque deserunt neque pariatur suscipit expedita
              eius quibusdam obcaecati explicabo.
            </p>
            <div></div>

            <div className="absolute bottom-2 left-3 text-white flex">
              <button className="bg-primary text-background font-semibold p-2 text-xs rounded flex justify-center content-center">
                <img src={btnTriangle} alt="" className="block h-4" />
                <p className="ml-2 font-semibold">Watch Now</p>
              </button>

              <button className="bg-[#D9D9D9] p-2 text-xs rounded text-background ml-3">
                <img src={add} alt="" className="h-3 w-3" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
