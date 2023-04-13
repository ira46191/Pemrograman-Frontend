import styles from "./Movie.module.css"

function Movie(props) {
    // Destructing object props
    const { movie } = props;
  return (
    <div class={styles.movie}>
      <img
        class={styles.movie__image}
        src={movie.poster}
        alt=""
      />
      <h3 class={styles.movie__title}>{movie.title}</h3> 
      <p class={styles.movie__date}>{movie.year}</p>
    </div>
  );
}
export default Movie;
