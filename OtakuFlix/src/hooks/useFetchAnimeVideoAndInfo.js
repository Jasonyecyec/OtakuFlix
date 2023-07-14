import React, { useEffect, useState, useRef } from "react";
import { getAnimeVideoSource, getAnimeInfo } from "../services/apiService";
import useFetchAnimeSearch from "./useFetchAnimeSearch";
import axios from "axios";
import { getUpdatedAnimeResults } from "../utils/anime";

const useFetchAnimeVideoAndInfo = (animeId) => {
  const [videoSource, setVideoSource] = useState("");
  const [animeInfo, setAnimeInfo] = useState([]);
  const [relatedAnime, setRelatedAnime] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const extractedAnimeId = animeId.replace(/-episode-\d+$/, "");

    const fetchAnimeSource = async () => {
      if (isMounted) {
        try {
          const source = await getAnimeVideoSource(animeId);

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
          const animeInfoResult = await getAnimeInfo(extractedAnimeId);
          console.log(animeInfoResult.data);
          setAnimeInfo(animeInfoResult.data);
        } catch (error) {
          console.error("Error retrieving anime info:", error);
          throw error;
        }
      }
    };

    const fetchRelatedAnime = async () => {
      if (isMounted) {
        try {
          const relatedAnimeResult = await axios.get(
            `https://api.consumet.org/anime/gogoanime/${extractedAnimeId}`
          );

          const filteredResults = relatedAnimeResult.data.results.slice(1, 11);

          const updatedAnimeResults = await getUpdatedAnimeResults(
            filteredResults
          );

          setRelatedAnime(updatedAnimeResults);
        } catch (error) {
          console.error("Error retrieving relatedAnime:", error);
          throw error;
        }
      }
    };

    fetchAnimeSource();
    fetchAnimeInfo();
    fetchRelatedAnime();

    return () => {
      isMounted = false;
    };
  }, [animeId]);

  return { videoSource, animeInfo, relatedAnime };
};

export default useFetchAnimeVideoAndInfo;
