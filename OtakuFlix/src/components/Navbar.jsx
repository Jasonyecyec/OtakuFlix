import React, { useState } from "react";

import notification from "../assets/notification.svg";
import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserPic from "./UserPic";
import MobileMenu from "./MobileMenu";
import { useNavbarStore } from "../store/store.js";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { isActive, toggleActive } = useNavbarStore();

  return (
    <nav className="flex  align-center h-14 relative ">
      <button className="text-white " onClick={toggleActive}>
        <HamburgerIcon
          color={isActive ? "#FCA311" : "white"}
          key={isActive ? "active" : "inactive"}
        />
      </button>
      <h1 className="flex items-center text-white font-bold text-3xl font-poppins text-center h-full ml-4">
        <span className="text-primary">Otaku</span>Flix
      </h1>

      <div className="flex w-32 justify-between  absolute right-0 top-0 h-full xs:w-32 ">
        <button className="">
          <SearchIcon />
        </button>

        <button>
          <img src={notification} alt="" />
        </button>

        <UserPic />
      </div>

      {/*DROPDOWN  */}
      {/* <SearchBar /> */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
