import axios from "axios";
import { useEffect} from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function NowPlayingMovie() {
  // membuat state movies
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlayingMovies() {
    //fect data dari axios
    const response = await axios(ENDPOINTS.NOWPLAYING);
    // simpan data ke state movie
    dispatch(updateMovie(response.data.results));
  }
 
  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
