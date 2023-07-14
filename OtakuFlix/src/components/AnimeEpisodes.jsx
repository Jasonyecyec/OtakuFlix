import React from "react";
import { Link } from "react-router-dom";

const AnimeEpisodes = ({ animeInfo, path }) => {
  const number = path.replace(/\D/g, "");

  return (
    <div className="bg-[#121212] my-5 p-2 flex  flex-wrap gap-3">
      {animeInfo.episodes
        ? animeInfo.episodes.map((episode) => (
            <Link
              to={`/watch/${episode.id}`}
              key={episode.id}
              className={`px-4 py-1 bg-[#343434] rounded  ${
                episode.number == number ? "bg-primary" : ""
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
