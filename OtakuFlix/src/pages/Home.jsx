import React from "react";
import Carousel from "../components/Carousel";

import TrendingCarousel from "../components/TrendingCarousel";
import Footer from "../components/Footer";

// import "./styles.css";

const Home = () => {
  return (
    <main>
      <Carousel />

      {/*  */}

      <TrendingCarousel title="Trending Now" />

      {/* ========= */}

      <TrendingCarousel title="Recently Added" />

      <Footer />
    </main>
  );
};

export default Home;
