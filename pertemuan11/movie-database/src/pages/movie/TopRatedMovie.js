import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";

function TopRatedMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

     // membuat state movies
     const [movies2, setMovies2] = useState([]);

     useEffect(() => {
         getTopRatedMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
 
     const getTopRatedMovies = async () => {
         //fect data dari axios
         const response = await axios(URL);
 
         // simpan data ke state movie
        setMovies2(response.data.results); 
     }
 
     console.log(movies2);
    return(
        <div>
            <Hero />
            <Movies movies={movies2} title="Top Rated Movies"/>
        </div>
    );
}

export default TopRatedMovie;