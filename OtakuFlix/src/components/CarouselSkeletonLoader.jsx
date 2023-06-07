import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarouselSkeletonLoader = () => {
  return (
    <div className="bg-subBackground h-full rounded-md drop-shadow-2xl">
      <Skeleton height={224} />
      <div className="space-y-3 p-2">
        {<Skeleton height={20} width={140} />}
        {<Skeleton height={16} width={80} />}
      </div>
    </div>
  );
};

export default CarouselSkeletonLoader;
