/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function PopularMovie() {
  // membuat state movies
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMovies() {
    //fect data dari axios
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results;

    // simpan data ke state movie
    // setMovies(response.data.results);
    dispatch(updateMovie(movies));
  }

  return (
    <div>
      <Hero />
      {/* <Movies movies={movies} title="Popular Movies" /> */}
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
