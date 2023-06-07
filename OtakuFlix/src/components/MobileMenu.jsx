import React, { useState, useRef, useEffect } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import AnimeIcon from "./icons/AnimeIcon";
import MangaIcon from "./icons/MangaIcon";

import { useNavbarStore } from "/src/store/store.js";

const MobileMenu = () => {
  const { isActive, toggleActive } = useNavbarStore();
  const menuRef = useRef(null);
  const customLinkRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // console.log(menuRef.current);
        // console.log(!menuRef.current.contains(event.target));
        if (isActive) {
          toggleActive();
        }
      }
    };

    // Function to handle link clicks
    const handleClickLink = (event) => {
      toggleActive();
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Add event listener for link clicks inside the customLinkRef element
    customLinkRef.current.addEventListener("click", handleClickLink);

    // Clean up event listeners when the component unmounts or the dependency changes
    return () => {
      // Remove event listener for clicks outside the menu
      document.removeEventListener("mousedown", handleClickOutside);

      // Remove event listener for link clicks inside the customLinkRef element
      customLinkRef.current.removeEventListener("click", handleClickLink);
    };
  }, [isActive, toggleActive]); //track when toggleActive changes or dependency changes

  return (
    <div
      ref={menuRef}
      className={`absolute w-full rounded-md text-white bg-subBackground top-14 left-0 z-10 p-4 drop-shadow-xl
 ${isActive ? "" : "hidden"} `}
    >
      <ul className="space-y-3" ref={customLinkRef}>
        <CustomLink
          to="/home"
          text="Home"
          icon={<HomeIcon />}
          // onClick={toggleActive}
        />
        <CustomLink
          to="/anime"
          text="Anime"
          icon={<AnimeIcon />}
          // onClick={toggleActive}
        />
        <CustomLink
          to="/manga"
          text="Manga"
          icon={<MangaIcon />}
          // onClick={toggleActive}
        />
        <CustomLink
          to="/manhwa"
          text="Manhwa"
          icon={<MangaIcon />}
          // onClick={toggleActive}
        />
      </ul>
    </div>
  );
};

function CustomLink({ to, text, icon }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={`${isActive ? "bg-[#4E4E50] text-primary" : ""} p-2 rounded `}
    >
      <Link to={to} className="flex">
        {/* This code conditionally applies a color prop to an icon component based on whether a certain condition is met.
         It uses React.cloneElement to clone the icon component and pass the color prop to it. */}
        {icon &&
          React.cloneElement(icon, {
            color: isActive ? "#FCA311" : "white",
          })}

        <p className="ml-3">{text}</p>
      </Link>
    </li>
  );
}

export default MobileMenu;
