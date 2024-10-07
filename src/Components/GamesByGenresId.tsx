import React from "react";

interface GamesByGenresId {
  games: Game[] | any;
}

interface Game {
  suggestions_count: number;
  reviews_count: number;
  rating: number;
  metacritic: number;
  background_image: string;
  name: string;
}

export default function GamesByGenresId({ games }: GamesByGenresId) {
  return (
    <div>
      <h2 className="font-bold text-[30px] text-black dark:text-white mt-5">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6">
        {games.map((item: Game) => (
          <div className="bg-blue-300 dark:bg-gray-700 p-2 rounded-lg">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2>
              {item.name} <span>{item.metacritic}</span>
            </h2>
            <h2>
              {item.rating} {item.reviews_count} {item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
