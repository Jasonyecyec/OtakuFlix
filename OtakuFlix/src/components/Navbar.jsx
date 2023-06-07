import React, { useState } from "react";

import notification from "../assets/notification.svg";
import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserPic from "./UserPic";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { useNavbarStore } from "../store/store.js";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { isActive, toggleActive, toggleSearchActive, isSearchActive } =
    useNavbarStore();

  return (
    <nav className="flex  align-center h-14 relative ">
      {/* HAMBURGER BUTTON */}
      <button className="text-white " onClick={toggleActive}>
        <HamburgerIcon
          color={isActive ? "#FCA311" : "white"}
          key={isActive ? "active" : "inactive"}
        />
      </button>
      <h1 className="flex items-center text-white font-bold text-3xl font-poppins text-center h-full ml-4">
        <span className="text-primary">Otaku</span>Flix
      </h1>

      <div className="flex w-32 justify-between  absolute right-0 top-0 h-full xs:w-36 content-center">
        <div className="flex items-center ">
          {/* SEARCH BUTTON  */}
          <button
            className=" p-2 rounded ease-in-out duration-200	 hover:bg-[#4E4E50]"
            onClick={toggleSearchActive}
          >
            <SearchIcon
              color={isSearchActive ? "#FCA311" : "white"}
              key={isSearchActive ? "active" : "inactive"}
            />
          </button>
        </div>

        <div className="flex items-center ">
          <button className="p-2 rounded ease-in-out duration-200	 hover:bg-[#4E4E50]">
            <img src={notification} alt="" />
          </button>
        </div>

        <UserPic />
      </div>

      {/*DROPDOWN  */}
      <SearchBar />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
