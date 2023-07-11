import axios from "axios";

const API_URL_ANIME = "https://api.consumet.org/anime/gogoanime/";

export const getTopAnime = async (url) => {
  const topAnimeResult = await axios.get(`${API_URL_ANIME}` + url);

  return topAnimeResult;
};

export const getAnimeInfo = async (id) => {
  const animeInfoResult = await axios.get(`${API_URL_ANIME}info/${id}`);

  return animeInfoResult;
};

export const getAnimeSearchResults = async (searchTerm) => {
  const animeSearchResults = await axios.get(`${API_URL_ANIME}${searchTerm}`);

  return animeSearchResults;
};
