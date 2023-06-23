import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function TopRatedMovie() {
  // membuat state movies
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTopRatedMovies = async () => {
    //fect data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);

    // simpan data ke state movie
    dispatch(updateMovie(response.data.results));
  };
 
  //  console.log(movies2);
  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
