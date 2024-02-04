import React, { useEffect } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { Genre, GenreResponse } from "./GenreList.types";
import { AxiosResponse } from "axios";

function GenreList() {
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = async () => {
    try {
      const resp: AxiosResponse<GenreResponse> = await GlobalApi.getGenreList();
      const results: Genre[] = resp.data.results;
      console.log(results);
    } catch (error) {
      // Handle error here
      console.error("Error fetching genre list:", error);
    }
  };

  return <div>GenreList ---</div>;
}

export default GenreList;
