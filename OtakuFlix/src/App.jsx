import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Manhwa from "./pages/Manhwa";

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
      </Routes>
    </div>
  );
}

export default App;
