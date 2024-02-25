import React, { useEffect } from "react";
import { Game } from "../Pages/Games.types";

/*
TODO: make the banner look better
*/

interface BannerProps {
  game: Game;
}

function Banner({ game }: BannerProps) {
  useEffect(() => {
    console.log("game inside Banner ", game);
  }, []);

  return (
    <div className="relative mt-5">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to bg-transparent w-full rounded-xl">
        <h2 className="text-[24px] text-white font-bold">{game.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1">Get Now</button>
      </div>
      <img
        src={game.background_image}
        className="md:h-[400px] w-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Banner;
