import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimeEpisodes = ({ animeInfo, path }) => {
  // const number = path.replace(/\D/g, "");
  const [currentEpisode, setCurrentEpisode] = useState(1);

  useEffect(() => {
    const number = path.split("-").pop();
    setCurrentEpisode(number);
  }, [path]);

  return (
    <div className="bg-[#121212] my-5 p-2 grid grid-cols-7 gap-3">
      {animeInfo.episodes
        ? animeInfo.episodes.map((episode) => (
            <Link
              to={`/watch/${episode.id}`}
              key={episode.id}
              className={`px-4 py-1 bg-[#343434] rounded flex justify-center  text-[#969595] ${
                episode.number == currentEpisode
                  ? "bg-primary font-semibold text-[#121212]"
                  : ""
              }`}
            >
              {episode.number}
            </Link>
          ))
        : "not Available"}
    </div>
  );
};

export default AnimeEpisodes;
