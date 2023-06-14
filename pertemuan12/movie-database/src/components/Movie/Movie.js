import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <div>
        <img
          src={
            movie.poster ||
            `https://image.tmdb.org//t/p/w300/${movie.poster_path}`
          }
          alt={movie.title}
        />

        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>

        <p>{movie.year || movie.release_date}</p>
      </div>
    </StyledMovie>
  );
}

export default Movie;
