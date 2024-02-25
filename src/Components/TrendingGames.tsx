import React, { useEffect } from "react";
import { Game } from "../Pages/Games.types";

interface TrendingGamesProps {
  games: Game[];
}

function TrendingGames({ games }: TrendingGamesProps) {
  useEffect(() => {
    console.log("trending Games", games);
  }, []);

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px]">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4">
        {games.map(
          (item, index) =>
            index < 4 && (
              <div className="rounded-lg bg-[#76a8f76e] group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="font-bold p-1 text-[20px]">{item.name}</h2>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
