import axios from "axios";

const API_URL_ANIME = "https://api.consumet.org/anime/gogoanime/";

const trendingNow = "top-airing?page=2";

export const getTopAnime = async (url) => {
  const topAnimeResult = await axios.get(`${API_URL_ANIME}` + url);

  return topAnimeResult;
};
