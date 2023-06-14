import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constans/endpoints";

function TopRatedMovie() {

     // membuat state movies
     const [movies2, setMovies2] = useState([]);

     useEffect(() => {
         getTopRatedMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
 
     const getTopRatedMovies = async () => {
         //fect data dari axios
         const response = await axios(ENDPOINTS.TOPRATED);
 
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