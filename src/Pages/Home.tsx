import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList/GenreList";
import GlobalApi from "../Services/GlobalApi";
import { Game, GamesResponse } from "./Games.types";
import Banner from "../Components/Banner";

function Home() {
  const [allGames, setAllGames] = useState<Game[]>();

  useEffect(() => {
    getAllGamesList();
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      const { results }: GamesResponse = resp.data;
      setAllGames(results);
      console.log("getAllGames", results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block px-6">
        <GenreList />
      </div>
      <div className="col-span-34 md:col-span-3">
        {allGames && <Banner game={allGames[1]} />}
      </div>
    </div>
  );
}

export default Home;
