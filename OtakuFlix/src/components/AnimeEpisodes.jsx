import React from "react";

const AnimeEpisodes = ({ animeInfo, setCurrentEpisode, currentEpisode }) => {
  return (
    <div className="bg-[#121212] my-5 p-2 flex  flex-wrap gap-3">
      {animeInfo.episodes
        ? animeInfo.episodes.map((episode) => (
            <button
              className={`px-4 py-1 bg-[#343434] rounded ${
                episode.number == currentEpisode
                  ? "bg-primary font-semibold"
                  : ""
              }`}
              onClick={() => setCurrentEpisode(episode.number)}
            >
              {episode.number}
            </button>
          ))
        : "not Available"}
    </div>
  );
};

export default AnimeEpisodes;
