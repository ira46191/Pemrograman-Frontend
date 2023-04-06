import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
// import data movies
import data from "../utils/constans/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  // membuat variabel movies
  // const movies = data;

  // membuat variabel state: movies
  const [movies, setMovies] = useState(data); 

  // Buat fungsi tambah film
  // dijalankan ketika tombol di klik
  function tambahFilm(){
    const movie = {
      id: nanoid(4),
      title: "My Name",
      year: "2021",
      type: "Movie",
      poster: "https://cdn.medcom.id/dynamic/content/2021/10/16/1340576/aPjZgcmGCM.jpg?w=480"
    };

    // menambahkan movie ke statMovies 
    // spread operator: copy and merge array
    setMovies([...movies, movie])
  }
  return (
    <div class={styles.movies}>
      <section class={styles.movies}>
        <h2 class={styles.movies__title}>Latest Movie</h2>
        <div class={styles.movie__container}>
          {/* 
            * Looping data movies: map.
            * Render Component Movie
            * Kirim Props movie

          */}
          {
            movies.map(function(movie){
              return <Movie movie={movie} />
            })
          }
        </div>
        <button class={styles.movie_button} onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
