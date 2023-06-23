import axios from "axios";
import { useEffect} from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function NowPlayingMovie() {
  // membuat state movies
  // const [movies3, setMovies3] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlayingMovies() {
    //fect data dari axios
    const response = await axios(ENDPOINTS.NOWPLAYING);
    const movies = response.data.results;

    // simpan data ke state movie
    dispatch(updateMovie(movies));
  }

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
