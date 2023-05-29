import React from "react";
import userpic from "../assets/userpic.jpg";

const UserPic = () => {
  return (
    <button className="rounded-full">
      <img src={userpic} alt="" className="rounded-full w-12 h-12" />
    </button>
  );
};

export default UserPic;
