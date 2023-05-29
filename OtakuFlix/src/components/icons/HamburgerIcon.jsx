import React from "react";

const Hamburger = ({ color }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
    >
      <path
        d="M25 25H0V20.8333H25V25ZM25 14.5833H0V10.4167H25V14.5833ZM25 4.16667H0V0H25V4.16667Z"
        fill={color}
      />
    </svg>
  );
};

export default Hamburger;
