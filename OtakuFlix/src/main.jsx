import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.render(
  <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </SkeletonTheme>,
  document.getElementById("root")
);
