import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Manhwa from "./pages/Manhwa";
import Search from "./pages/Search";
import WatchAnime from "./pages/WatchAnime";

function App() {
  return (
    <div className="bg-background p-3 xs:p-4">
      {/* NAVBAR */}
      <Navbar />

      {/* SIDEBAR */}

      {/* BODY */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/manhwa" element={<Manhwa />} />
        <Route path="/search/:path" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch" element={<WatchAnime />} />
      </Routes>
    </div>
  );
}

export default App;
