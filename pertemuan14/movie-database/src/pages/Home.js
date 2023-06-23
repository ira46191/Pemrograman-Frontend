import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
// import { useState } from "react";
// import data from "../components/utils/constans/data";
// import Counter from "../components/Counter/Counter";

function Home() {
  return (
    <>
      {/* <Counter /> */}
      <Hero />
      <Movies title="Local Movie" />
    </>
  );
} 

export default Home;
