import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList/GenreList";
import GlobalApi from "../Services/GlobalApi";
import { GamesResponse } from "./Games.types";

function Home() {
  const [allGames, setAllGames] = useState();

  useEffect(() => {
    getAllGamesList();
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      const { results }: GamesResponse = resp.data;
      console.log("getAllGames", results);
    });
  };

  return (
    <div className="grid grid-cols-4">
      <div className="h-full hidden md:block px-6">
        <GenreList />
      </div>
      <div className="col-span-34 md:col-span-3 bg-blue-400">Genre List</div>
    </div>
  );
}

export default Home;
