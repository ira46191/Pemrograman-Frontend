import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    // membuat state movies
    const [movies3, setMovies3] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getNowPlayingMovies() {
        //fect data dari axios
        const response = await axios(URL);

        // simpan data ke state movie
       setMovies3(response.data.results); 
    }

    return(
        <div>
             <Hero />
           <Movies movies={movies3}  title="Now Playing Movies"/> 
        </div>
    );
}

export default NowPlayingMovie;