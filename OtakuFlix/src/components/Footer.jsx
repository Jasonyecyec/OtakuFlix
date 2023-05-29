import React from "react";
import { Link } from "react-router-dom";

import fb from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import ig from "../assets/insta.svg";

const Footer = () => {
  return (
    <div className="mt-12   text-gray-400	space-y-10 text-base">
      <div className="flex justify-around ">
        <div>
          <ul className="space-y-5">
            {/* <li>
          <Link to="">Categories</Link>
        </li> */}
            <li>
              <Link to="">Anime</Link>
            </li>
            <li>
              <Link to="">Manga</Link>
            </li>
            <li>
              <Link to="">Manhwa</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-5">
            <li className=" ">
              <a href="#" className="flex">
                <img src={fb} alt="" className="mr-3  " />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <img src={twitter} alt="" className="mr-3" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <img src={ig} alt="" className="mr-3" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="items-center text-white font-bold text-3xl font-poppins text-center w-full   ">
        <span className="text-primary">Otaku</span>Flix
      </h1>

      <p className="text-center pb-5">
        Copyright © {new Date().getFullYear()}, All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
