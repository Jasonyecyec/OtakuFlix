import React from "react";
import { Link } from "react-router-dom";

const RelatedAnime = ({ relatedAnime }) => {
  return (
    <div className="mt-10 space-y-5">
      {relatedAnime && (
        <>
          <p className="text-white text-xl">Related</p>
          <div className="bg-[#121212] max-h-60 overflow-x-scroll space-y-3 px-2 rounded text-white">
            {relatedAnime.map((anime) => (
              <Link key={anime.id} to={`/watch/${anime.id}-episode-1`}>
                <div className="bg-[#202022] p-2 rounded flex space-x-5 my-3">
                  <div className="w-16 h-14 bg-red-50">
                    <img
                      src={anime.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-[#969595]">
                    <p className="text-lg text-slate-50">{anime.title}</p>
                    <p className="text-xs">
                      {anime.releaseDate} - {anime.type} - {anime.status}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedAnime;
