/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constans/endpoints";

function PopularMovie() {
  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMovies() {
    //fect data dari axios
    const response = await axios(ENDPOINTS.POPULAR);

    // simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
