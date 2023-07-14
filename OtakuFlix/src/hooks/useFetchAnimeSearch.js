import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getAnimeSearchResults, getAnimeInfo } from "../services/apiService";

const useFetchAnimeSearch = (searchInput) => {
  const [searchResults, setSearchResults] = useState(null);

  // assuming `data` is an array of items to be rendered in SwiperSlides
  const [isLoading, setIsLoading] = useState(false);

  const delayTimerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) {
        try {
          const animeResult = await getAnimeSearchResults(searchInput);

          // Filter the results to return only 5 items
          const filteredResults = animeResult.data.results.slice(0, 5);

          // filter the results to return only the anime ids
          const animeIds = filteredResults.map((anime) => anime.id);

          const animeInfoPromises = animeIds.map((id) => getAnimeInfo(id));

          const animeInfoResponses = await Promise.allSettled(
            animeInfoPromises
          );

          //only get the fulfilled responses
          const updatedAnimeResults = animeInfoResponses.map(
            (response, index) => {
              if (response.status == "fulfilled") {
                const animeInfo = filteredResults[index];

                return {
                  ...animeInfo,
                  type: response.value.data.type,
                  status: response.value.data.status,
                };
              }
            }
          );

          setSearchResults({ data: updatedAnimeResults });

          setIsLoading(false);
        } catch (error) {
          // Handle any errors
          console.log(error);
        }
      }
    };

    fetchData();

    // Clear the previous timer before setting a new one
    clearTimeout(delayTimerRef.current);

    //   // Set a new timer to delay the API call
    delayTimerRef.current = setTimeout(() => {
      fetchData();
    }, 1000); // Adjust the delay time according to your needs (in milliseconds)

    //cleanup
    return () => {
      isMounted = false;
      clearTimeout(delayTimerRef.current);
    };
  }, [searchInput]);

  return { isLoading, searchResults, setIsLoading };
};

export default useFetchAnimeSearch;
