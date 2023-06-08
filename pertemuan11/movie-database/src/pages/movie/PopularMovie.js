/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // membuat state movies
    const [movies, setMovies] = useState([]);

     useEffect(() => {
         getPopularMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
 
     async function getPopularMovies() {
         //fect data dari axios
         const response = await axios(URL);
 
         // simpan data ke state movie
        setMovies(response.data.results); 
     }
 
     return(
         <div>
              <Hero />
            <Movies movies={movies} title="Popular Movies" /> 
         </div>
     );
}

export default PopularMovie;
