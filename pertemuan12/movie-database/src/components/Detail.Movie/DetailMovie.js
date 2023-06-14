import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import StyledDetailMovie from "./DetailMovie.styled";
import ENDPOINTS from "../utils/constans/endpoints";


function DetailMovie() {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && movie.videos && movie.videos.results[0] && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  console.log(trailer);

  async function getDetailMovie() {
    const response = await axios.get(ENDPOINTS.DETAILMOVIE(params.id));
    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer} target="_blank">Watch Trailer</Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;