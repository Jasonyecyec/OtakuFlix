import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getTopAnime } from "../services/apiService";

const useFetchAnimeList = (url) => {
  const [trendingNow, setTrendingNow] = useState(null);

  // assuming `data` is an array of items to be rendered in SwiperSlides
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTrendingNow = async () => {
      if (isMounted) {
        try {
          const topAnimeResult = await getTopAnime(url);

          const animeIds = topAnimeResult.data.results.map((anime) => anime.id);

          const animeInfoPromises = animeIds.map((id) =>
            axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`)
          );

          const animeInfoResponses = await Promise.allSettled(
            animeInfoPromises
          );

          const updatedAnimeResults = topAnimeResult.data.results
            .map((anime, index) => {
              if (animeInfoResponses[index].status === "fulfilled") {
                const animeInfo = animeInfoResponses[index].value.data;

                return {
                  ...anime,
                  subOrDub: animeInfo.subOrDub,
                  totalEpisodes: animeInfo.totalEpisodes,
                  status: animeInfo.status,
                  type: animeInfo.type,
                  genres: animeInfo.genres,
                };
              } else {
                // Handle failed API request for a specific anime
                console.log(
                  `Failed to fetch info for anime with ID: ${animeIds[index]}`
                );

                return null;
              }
            })
            .filter((anime) => anime !== null);

          setTrendingNow((prevTrendingNow) => ({
            data: {
              results: updatedAnimeResults,
            },
          }));

          setIsLoading(false);
        } catch (error) {
          // Handle any errors
          console.log(error);
        }
      }
    };

    fetchTrendingNow();

    //cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading, trendingNow };
};

export default useFetchAnimeList;
