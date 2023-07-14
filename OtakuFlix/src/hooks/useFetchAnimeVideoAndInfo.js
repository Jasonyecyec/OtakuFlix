import React, { useEffect, useState, useRef } from "react";
import { getAnimeVideoSource, getAnimeInfo } from "../services/apiService";

const useFetchAnimeVideoAndInfo = (animeId, currentEpisode) => {
  const [videoSource, setVideoSource] = useState("");
  const [animeInfo, setAnimeInfo] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchAnimeSource = async () => {
      if (isMounted) {
        try {
          const source = await getAnimeVideoSource(animeId, currentEpisode);

          // filter source only get highest quality
          const highestQuality = source.data.sources.find((item) => {
            return item.quality === "720p";
          });

          setVideoSource(highestQuality.url);
        } catch (error) {
          console.error("Error retrieving anime source:", error);
          throw error;
        }
      }
    };

    const fetchAnimeInfo = async () => {
      if (isMounted) {
        try {
          const animeInfoResult = await getAnimeInfo(animeId);
          console.log(animeInfoResult.data);
          setAnimeInfo(animeInfoResult.data);
        } catch (error) {
          console.error("Error retrieving anime info:", error);
          throw error;
        }
      }
    };

    fetchAnimeSource();
    fetchAnimeInfo();

    return () => {
      isMounted = false;
    };
  }, [animeId, currentEpisode]);

  return { videoSource, animeInfo };
};

export default useFetchAnimeVideoAndInfo;
