import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList/GenreList";
import GlobalApi from "../Services/GlobalApi";
import { Game, GamesResponse } from "./Games.types";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";
import { GamesByGenre } from "./GamesByGenres";

function Home() {
  const [allGames, setAllGames] = useState<Game[]>();
  const [gameListByGenre, setGameListByGenre] = useState<GamesByGenre[]>();

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      const { results }: GamesResponse = resp.data;
      setAllGames(results);
      console.log("getAllGames", results);
    });
  };

  const getGameListByGenreId = (id: number) => {
    GlobalApi.getGameListByGenreId(4).then((resp) => {
      const { results }: any = resp.data;
      setGameListByGenre(results);
      console.log("getGameListByGenreId" + resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block px-6">
        <GenreList />
      </div>
      <div className="col-span-34 md:col-span-3">
        {allGames && gameListByGenre && (
          <div>
            <Banner game={allGames[1]} />
            <TrendingGames games={allGames} />
            <GamesByGenresId games={gameListByGenre} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
