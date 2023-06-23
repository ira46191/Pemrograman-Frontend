import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function TopRatedMovie() {
  // membuat state movies
  //  const [movies2, setMovies2] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTopRatedMovies = async () => {
    //fect data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);
    const movies = response.data.results;

    // simpan data ke state movie
    dispatch(updateMovie(movies));
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
