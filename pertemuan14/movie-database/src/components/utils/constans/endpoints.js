 const API_KEY = process.env.REACT_APP_API_KEY;
 const BASE_URL = "https://api.themoviedb.org/3";

 const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular/?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    RECOMMENDATIONS: (movieId) => `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&append_to_response=videos`,
    DETAILMOVIE: (movieId) => `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    HEROTRANDING: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    HERODETAIL: (movieId) => `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    MOVIE: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,

 }

 export default ENDPOINTS;