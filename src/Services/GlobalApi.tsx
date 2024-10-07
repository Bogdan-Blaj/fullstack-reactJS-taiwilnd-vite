import axios, { AxiosResponse } from "axios";
import { GenreResponse } from "../Components/GenreList/GenreList.types";
import { Games, GamesResponse } from "../Pages/Games.types";

const key = "8034c9a4976f4441a8e01a173931b27d";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = (): Promise<AxiosResponse<GenreResponse>> => {
  return axiosCreate.get("/genres?key=" + key);
};

const getAllGames = (): Promise<AxiosResponse<GamesResponse>> => {
  return axiosCreate.get("/games?key=" + key);
};

const getGameListByGenreId = (
  id: number,
): Promise<AxiosResponse<GamesResponse>> => {
  return axiosCreate.get("/games?key=" + key + "&genres=" + id);
};
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
