/* eslint-disable react-hooks/exhaustive-deps */
// import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  console.log(trailer);

      useEffect (() => {
        getDetailMovie();
      }, []);

      async function getTrandingMovies() {
        const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
        const response = await axios(URL);
        // console.log(response.data.results[0]);
        return response.data.results[0];  
      }


    // membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovie() {
      // ambil dari trending movie
      const trendingMovie = await getTrandingMovies();
      const id = trendingMovie.id;

      // fetch detail movie by id
      const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
      const response = await axios(URL);
      console.log(response.data);

      setMovie(response.data);
    }

  return (
    <StyledHero>
    <div>
      <section>
        <main>
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          {/* <Button class={styles.hero__button}>Watch</Button> */}
          {/* <button class={styles.hero__button}>Watch</button> */}
          <Button as="a" href={trailer} target="_blank">Watch</Button>
        </main> 
        <aside>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
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
