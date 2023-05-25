import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../components/utils/constans/data";
// import Counter from "../components/Counter/Counter";

function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <>
      {/* <Counter /> */}
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
