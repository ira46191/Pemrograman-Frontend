import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {
  const [movie, setMovies] = useState("")

  useEffect(function (){
    // melakukan fetch
    async function fetchMovie(){
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
    }
    console.log(movie);
    fetchMovie();
  
  },[movie]);

  return (
    <div class={styles.container}>
      <section class={styles.hero}>
        <div class={styles.hero__left}>
          <h2 class={styles.hero__title}>{movie.Title}</h2>
          <h3 class={styles.hero__genre}>Genre : {movie.Genre}</h3>
          <p class={styles.hero__description}>
          {movie.Plot}
          </p>
          <button class={styles.hero__button}>Watch</button>
        </div>
        <div class={styles.hero__right}>
        <img class={styles.hero__image} src={movie.Poster}  alt={movie.Title} />
        </div>
      </section>
    </div>

    // <section>
    //   <div>
    //     <h2>{movie.Tilte}</h2>
    //     <h3>Genre: {movie.genre}</h3>
    //     <p>{movie.Plot}</p>
    //   </div>
    //   <div>
    //     <img src={movie.Poster} alt={movie.Title} />
    //   </div>
    // </section>
  );
}

export default Hero;
 