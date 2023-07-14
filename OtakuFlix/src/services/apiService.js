import axios from "axios";

const API_URL_ANIME = "https://api.consumet.org/anime/gogoanime/";

export const getTopAnime = async (url) => {
  try {
    const topAnimeResult = await axios.get(`${API_URL_ANIME}` + url);

    return topAnimeResult;
  } catch (error) {
    console.error("Error retrieving top anime:", error);
    throw error;
  }
};

export const getAnimeInfo = async (id) => {
  try {
    const animeInfoResult = await axios.get(`${API_URL_ANIME}info/${id}`);
    return animeInfoResult;
  } catch (error) {
    console.error("Error retrieving anime info:", error);
    throw error;
  }
};

export const getAnimeSearchResults = async (searchTerm) => {
  try {
    const animeSearchResults = await axios.get(`${API_URL_ANIME}${searchTerm}`);
    return animeSearchResults;
  } catch (error) {
    console.error("Error retrieving anime search results:", error);
    throw error;
  }
};

export const getAnimeVideoSource = async (animeId, episode) => {
  try {
    const animeVideoSource = await axios.get(
      `${API_URL_ANIME}watch/${animeId}-episode-${episode}`
    );

    return animeVideoSource;
  } catch (error) {
    console.error("Error retrieving anime video source:", error);
    throw error;
  }
};

export const getAnimeEpisodeList = async (animeId) => {
  try {
    const episodeList = await axios.get(`${API_URL_ANIME}watch/${animeId}`);
  } catch (error) {}
};
