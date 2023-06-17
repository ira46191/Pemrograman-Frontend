import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detail.Movie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constans/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => { 
    getRecommendationMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  async function getRecommendationMovies(){
  const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendations Movie"/>
    </>
  );
}

export default Detail;
