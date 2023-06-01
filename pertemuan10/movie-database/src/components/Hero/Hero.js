// import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
import { useEffect, useState } from "react";
import Button from "../UI/Button";

function Hero() {
  const [movie, setMovies] = useState("");

  useEffect(
    function () {
      // melakukan fetch
      async function fetchMovie() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      }
      console.log(movie);
      fetchMovie();
    },
    [movie]
  );

  return (
    <StyledHero>
    <div>
      <section>
        <main>
          <h2>{movie.Title}</h2>
          <h3>Genre : {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          {/* <Button class={styles.hero__button}>Watch</Button> */}
          {/* <button class={styles.hero__button}>Watch</button> */}
          <Button variant="primary">Watch</Button>
        </main> 
        <aside>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </aside>
      </section>
    </div>
    </StyledHero>

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
