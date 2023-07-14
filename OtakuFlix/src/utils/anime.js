import { getAnimeInfo } from "../services/apiService";

export const getUpdatedAnimeResults = async (filteredResults) => {
  // filter the results to return only the anime ids
  const animeIds = filteredResults.map((anime) => anime.id);

  const animeInfoPromises = animeIds.map((id) => getAnimeInfo(id));

  const animeInfoResponses = await Promise.allSettled(animeInfoPromises);

  //only get the fulfilled responses
  const updatedAnimeResults = animeInfoResponses.map((response, index) => {
    if (response.status == "fulfilled") {
      const animeInfo = filteredResults[index];

      return {
        ...animeInfo,
        type: response.value.data.type,
        status: response.value.data.status,
      };
    }
  });

  return updatedAnimeResults;
};
