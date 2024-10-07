import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { Genre, GenreResponse } from "./GenreList.types";
import { AxiosResponse } from "axios";

function GenreList() {
  const [genreList, setGerneList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);
  useEffect(() => {
    console.log(" use effect" + genreList);
  }, [genreList]);

  const getGenreList = async () => {
    try {
      const resp: AxiosResponse<GenreResponse> = await GlobalApi.getGenreList();
      setGerneList(resp.data.results);
    } catch (error) {
      // Handle error here
      console.error("Error fetching genre list:", error);
    }
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => setActiveIndex(index)}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 p-2  rounded-lg group
        ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[60px] h-[60px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 
            ${activeIndex == index ? "scale-105" : null}`}
          />
          <h3
            className={`dark:white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
